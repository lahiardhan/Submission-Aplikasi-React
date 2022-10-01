import React from "react";
import NoteInput from "../molecules/NoteInput";
import NoteList from "../molecules/NoteList";
import NoteListArchived from "../molecules/NoteListArchived";

function NoteBody({ notes, archivedNotes, addNote, onDelete, onArchive, onDeleteArchived, onActive }) {
	return (
		<div className="note-app__body">
			<NoteInput addNote={addNote} />
			<h2>Catatan Aktif</h2>
			<NoteList notes={notes} onDelete={onDelete} onArchive={onArchive} />

			<h2>Arsip</h2>
			<NoteListArchived archivedNotes={archivedNotes} onDelete={onDeleteArchived} onActive={onActive} />
		</div>
	);
}

export default NoteBody;
