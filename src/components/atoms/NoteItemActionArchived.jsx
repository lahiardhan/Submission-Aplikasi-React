import React from "react";

function NoteItemActionArchived({ id, onDelete, onActive }) {
	return (
		<div className="note-item__action">
			<button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>
			<button className="note-item__archive-button" onClick={() => onActive(id)}>Pindahkan</button>
		</div>
	);
}

export default NoteItemActionArchived;
