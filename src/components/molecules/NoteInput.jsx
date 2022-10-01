import React, { Component } from "react";

class NoteInput extends Component {
   constructor(props) {
      super(props);
      this.state = {
         title: '',
         body: '',
         charsLeft: 50
      }

      this.onTitleChange = this.onTitleChange.bind(this);
      this.onBodyChange = this.onBodyChange.bind(this);
      this.onSubmitHandler = this.onSubmitHandler.bind(this);
   }

   onTitleChange(e) {
      const charsCount = e.target.value.length;
      const charsLeft = 50 - charsCount;

      this.setState(() => {
         return {
            charsLeft,
            title: e.target.value.slice(0,49),
         }
      });
   }

   onBodyChange(e) {
      this.setState(() => {
         return {
            body: e.target.value
         }
      })
   }

   onSubmitHandler(e) {
      e.preventDefault();
      this.props.addNote(this.state);
      this.setState(() => {
         return {
            title: '',
            body: ''
         }
      })
   }

	render() {
		return (
			<div className="note-input">
				<h2>Buat Catatan</h2>
				<form onSubmit={this.onSubmitHandler}>
					<p className="note-input__title__char-limit">
						Sisa Karakter: {this.state.charsLeft}
					</p>
					<input
						type="text"
						className="note-input__title"
						placeholder="Ini Adalah Judul ..."
                  value={this.state.title}
                  onChange={this.onTitleChange}
                  required
					/>
					<textarea
						className="note-input__body"
						placeholder="Tuliskan catatanmu disini ..."
                  value={this.state.body}
                  onChange={this.onBodyChange}
						required
					></textarea>
					<button type="submit">Buat</button>
				</form>
			</div>
		);
	}
}

export default NoteInput;