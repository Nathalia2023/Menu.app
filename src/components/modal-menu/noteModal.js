import React, { useState, useEffect } from "react";
import "./modalNote.css";

const NoteModal = ({ isOpen, onClose, onAddNote, initialNote }) => {
  const [note, setNote] = useState(initialNote || "");

  // Actualizar el estado de la nota si cambia `initialNote`
  useEffect(() => {
    if (isOpen) {
      setNote(initialNote || "");
    }
  }, [initialNote, isOpen])
  console.log('initial',initialNote);

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleAddNote = () => {
    if (note.trim()) {
      onAddNote(note); // Llama al manejador de notas con la nueva nota
      setNote("");
      onClose();
    }
  };

  return isOpen ? (
    <div className="modal-overlay-note">
      <div className="modal-content-note">
        <div className="btn-close" onClick={onClose}>X</div>
        <div className="container-note">
          <textarea
            value={note}
            onChange={handleNoteChange}
            placeholder="Enter note..."
          />
          <div className="footer-note">
            <button onClick={handleAddNote} className="btn-add">Add Note</button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default NoteModal;
