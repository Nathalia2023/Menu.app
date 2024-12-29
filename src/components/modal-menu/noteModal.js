import React, { useState } from 'react';
import "./modalNote.css"; // Archivo CSS para estilos personalizados
const NoteModal = ({ isOpen, onClose, onAddNote }) => {
    const [note, setNote] = useState('');

    const handleNoteChange = (e) => {
        setNote(e.target.value);
    };

    const handleAddNote = () => {
        if (note.trim()) {
            onAddNote(note);
            setNote('');
            onClose();
        }
    };

    return isOpen ? (
        <div className="modal-overlay-note">
            <div className="modal-content-note">
                <div className="btn-close" onClick={onClose}>X</div>
                <div className='container-note'>
                <textarea
                    value={note}
                    onChange={handleNoteChange}
                    placeholder="Enter note..."
                />
                
                <div className='footer-note'>
                <button onClick={handleAddNote} className='btn-add'>Add Note</button>

                </div>
                </div>
            </div>
        </div>
    ) : null;
};

export default NoteModal; // Asegúrate de exportar con el nuevo nombre