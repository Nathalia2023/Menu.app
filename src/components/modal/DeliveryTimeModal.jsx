import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DeliveryTimeModal.css';
import { FaCalendarAlt } from 'react-icons/fa'; // Importar el ícono de calendario

const DeliveryTimeModal = ({ isOpen, onClose, onSelectDateTime }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const formattedDate = selectedDate.toLocaleDateString('en-US', {
    weekday: 'short', // Día abreviado (e.g., Fri)
    day: 'numeric',   // Día del mes (e.g., 21)
    month: 'short',   // Mes abreviado (e.g., Sep)
  });

  if (!isOpen) return null;

  const handleSave = () => {
    onSelectDateTime(formattedDate, selectedTime); // Pasamos la fecha y hora seleccionadas al componente principal
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content-time">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        <h2 className="modal-title">Set Date & Time</h2>
        <p className="modal-description">
          Set a date and time(s) for your delivery. <br />
          We do next day delivery if you order before 3pm, and we offer multiple delivery times.
        </p>
        <p className="modal-subdescription">We deliver to Sydney, Monday to Saturday.</p>

        <div className="modal-body-time">
          <div className="calendar-container">
            <div className="calendar-header">
              <FaCalendarAlt className="calendar-icon" />
              <span className="calendar-date">{formattedDate}</span>
            </div>
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              minDate={new Date()}
              locale="en-US"
              className="custom-calendar"
            />
          </div>

          <div className="divider"></div>

          <div className="time-container">
            <h3 className="time-title">Set a time</h3>
            <select
              id="delivery-time"
              value={selectedTime}
              onChange={handleTimeChange}
              className="time-select"
            >
              <option value="">Delivery Time</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="9:15 AM">9:15 AM</option>
              <option value="9:30 AM">9:30 AM</option>
              <option value="9:45 AM">9:45 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="10:15 AM">10:15 AM</option>
              <option value="10:30 AM">10:30 AM</option>
              <option value="10:45 AM">10:45 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="11:15 AM">11:15 AM</option>
            </select>
          </div>
        </div>

        <div className="modal-footer">
          <span className="selected-info">
            {selectedDate && selectedTime
              ? `${formattedDate} at ${selectedTime}`
              : 'Select a date and time'}
          </span>
          <button className="save-button" onClick={handleSave}>
            Save Delivery Date & Time(s)
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryTimeModal;
