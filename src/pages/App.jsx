import React, { Component } from "react";
import NoteBody from "../components/organisms/NoteBody.jsx";
import NoteHeader from "../components/organisms/NoteHeader.jsx";
import { getInitialData, showFormattedDate } from "../utils/index.js";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: getInitialData(),
			searchKeyword: "",
			archivedNotes: [],
		};

		this.onDeleteHandler = this.onDeleteHandler.bind(this);
		this.onArchiveHandler = this.onArchiveHandler.bind(this);
		this.onDeleteArchived = this.onDeleteArchived.bind(this);
		this.onActiveHandler = this.onActiveHandler.bind(this);
		this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
		this.onSearchHandler = this.onSearchHandler.bind(this);
	}

	onDeleteHandler(id) {
		const notes = this.state.notes.filter((note) => note.id !== id);
		this.setState({ notes });
	}

	onArchiveHandler(id) {
		const note = this.state.notes.filter((note) => note.id === id);
		note[0].archived = true;
		this.setState((prev) => {
			return {
				notes: this.state.notes.filter((note) => note.id !== id),
				archivedNotes: [...prev.archivedNotes, note[0]],
			};
		});
	}

  onDeleteArchived(id) {
    const notes = this.state.archivedNotes.filter((note) => note.id !== id);
		this.setState({ archivedNotes: notes });
  }

	onActiveHandler(id) {
		const note = this.state.archivedNotes.filter((note) => note.id === id);
    note[0].archived = false;
		this.setState((prev) => {
			return {
				archivedNotes: this.state.archivedNotes.filter((note) => note.id !== id),
				notes: [...prev.notes, note[0]],
			};
		});
	}

	onAddNoteHandler({ title, body }) {
		this.setState((prev) => {
			return {
				notes: [
					...prev.notes,
					{
						id: +new Date(),
						title,
						body,
						archived: false,
						createdAt: showFormattedDate(new Date()),
					},
				],
			};
		});
	}

	onSearchHandler(value) {
		const getData = [...this.state.notes, ...this.state.archivedNotes];
		const searchNotes = [];
		for(let i=0; i < getData.length; i++) {
			let dataNotesFound = getData[i].title.toLowerCase();
			if(dataNotesFound.includes(value.toLowerCase())) {
				searchNotes.push(getData[i]);
			}
		}
		console.log(searchNotes);
	}

	render() {
		return (
			<>
				<NoteHeader onSearch={this.onSearchHandler} />
				<NoteBody
					notes={this.state.notes}
					archivedNotes={this.state.archivedNotes}
					addNote={this.onAddNoteHandler}
					onDelete={this.onDeleteHandler}
					onArchive={this.onArchiveHandler}
					onDeleteArchived={this.onDeleteArchived}
					onActive={this.onActiveHandler}
				/>
			</>
		);
	}
}

export default App;
