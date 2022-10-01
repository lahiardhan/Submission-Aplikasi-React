import React from "react";
import NoteItemActionArchived from "../atoms/NoteItemActionArchived";
import NoteItemContent from "../atoms/NoteItemContent";

function NoteItemArchived({ id, title, createdAt, body, onDelete, onActive }) {
	return (
		<div className="note-item" key={id}>
			<NoteItemContent title={title} createdAt={createdAt} body={body} />
			<NoteItemActionArchived id={id} onDelete={onDelete} onActive={onActive} />
		</div>
	);
}

export default NoteItemArchived;
