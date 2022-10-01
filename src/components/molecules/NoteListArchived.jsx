import React from 'react'
import NoteItemArchived from './NoteItemArchived';

function NoteListArchived({ archivedNotes, onDelete, onActive}) {
   if(archivedNotes.length===0) {
      return <p className="notes-list__empty-message">Tidak ada catatan</p>
   } else {
      return (
         <div className="notes-list">
            {archivedNotes.map((note) => {
               return (
                  <NoteItemArchived
                     key={note.id}
                     onDelete={onDelete}
                     onActive={onActive}
                     {...note}
                  />
               );
            })}
         </div>
      );
   } 
}

export default NoteListArchived