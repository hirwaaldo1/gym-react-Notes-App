import React from "react";
import { Delete } from "react-feather";
export default function Sidebar(props) {
  const noteElements = props.notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`overflow-hidden w-full cursor-pointer flex justify-between items-center py-3 group ${
          note.id === props.currentNote.id ? "bg-slate-600" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h4
          className={` text-sm font-normal whitespace-nowrap overflow-hidden text-ellipsis leading-5 pl-2
          ${note.id === props.currentNote.id ? "text-white" : "text-slate-600"}
          `}
        >
          {note.body.split("\n")[0]}
        </h4>
        {note.id === props.currentNote.id && (
          <button
            onClick={(event) => props.deleteNote(event, note.id)}
            className="bg-none border-none text-red-700 mr-4 invisible group-hover:visible"
          >
            <Delete />
          </button>
        )}
      </div>
    </div>
  ));

  return (
    <section className="overflow-y-auto w-1/5 h-screen">
      <div className="flex justify-between items-center py-3 px-3 static top-0">
        <h3 className="text-2xl">Notes</h3>
        <button
          className="cursor-pointer bg-slate-600 border-none text-white rounded h-8 w-8"
          onClick={props.newNote}
        >
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
