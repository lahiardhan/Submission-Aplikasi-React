import React from "react";
import NoteItemAction from "../atoms/NoteItemAction";
import NoteItemContent from "../atoms/NoteItemContent";

function NoteItem({ id, title, createdAt, body, onDelete, onArchive }) {
	return (
		<div className="note-item" key={id}>
			<NoteItemContent title={title} createdAt={createdAt} body={body} />
			<NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive} />
		</div>
	);
}

export default NoteItem;
