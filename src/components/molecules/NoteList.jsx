import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive }) {
	if(notes.length===0) {
      return <p className="notes-list__empty-message">Tidak ada catatan</p>
   } else {
      return (
         <div className="notes-list">
            {notes.map((note) => {
               return (
                  <NoteItem
                     key={note.id}
                     onDelete={onDelete}
                     onArchive={onArchive}
                     {...note}
                  />
               );
            })}
         </div>
      );
   } 
}

export default NoteList;
