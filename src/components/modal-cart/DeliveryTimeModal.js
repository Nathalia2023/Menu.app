import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DeliveryTimeModal.css';

const DeliveryTimeModal = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');


  const handleSave = () => {
    setSelectedDate(selectedDate);
    setSelectedTime(selectedTime);
    onClose(); // Cierra el modal
};

  const [showTime, setShowTime] = useState(false);
    const toggleTime = () => {
      setShowTime(!showTime);
    };
    
    const closeTime = () => {
      setShowTime(false);
    };


  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const formattedDate = selectedDate.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'short'
  });

  const formattedDay = selectedDate.toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  })

  if (!isOpen) return null;

  return (
    <div className="modal-overlay-calendar">
      <div className="modal-content-calendar">
        <button className="close-login" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">Set Date & Time</h2>
        <p className="modal-description">
          Set a date and time(s) for your delivery. <br />
          We do next day delivery if you order before 3pm, and we offer multiple delivery times.
        </p>
        <p className="modal-subdescription">We deliver to Sydney, Monday to Saturday.</p>
        <div className="modal-body">
          <div className='content-calendar'>
              {/* Calendario */}
          <div className="calendar-container">
            <h3>{formattedDay}</h3>
            <Calendar
              onChange={setSelectedDate}
              locale='en-US'
              value={selectedDate}
              minDate={new Date()}
              className="custom-calendar"
            />
          </div>

          {/* Selector de hora */}
          <div className="time-container">
            <h3 className="time-title">Set a time</h3>
            <button
              id="delivery-time"
              value={selectedTime}
              onChange={handleTimeChange}
              className="time-select"
              onClick={toggleTime}
            >Delivery Time <span className="arrow-icon">⮟</span>
            
            </button>
            {showTime && (
        <div className="times-filters">
          <div className="times-header">
            <button className="close-button" onClick={closeTime}>
              ✖
            </button>
          </div>
          <div className="times-list">
              <button value="9:00 AM" onClick={handleTimeChange}>9:00 AM</button>
              <button value="9:15 AM" onClick={handleTimeChange}>9:15 AM</button>
              <button value="9:30 AM" onClick={handleTimeChange}>9:30 AM</button>
              <button value="9:45 AM" onClick={handleTimeChange}>9:45 AM</button>
              <button value="10:00 AM" onClick={handleTimeChange}>10:00 AM</button>
              <button value="10:15 AM" onClick={handleTimeChange}>10:15 AM</button>
              <button value="10:30 AM" onClick={handleTimeChange}>10:30 AM</button>
              <button value="10:45 AM" onClick={handleTimeChange}>10:45 AM</button>
              <button value="11:00 AM" onClick={handleTimeChange}>11:00 AM</button>
              <button value="11:15 AM" onClick={handleTimeChange}>11:15 AM</button>
          </div>
        </div>
      )}
          </div>
          </div>
        </div>

        {/* Footer con Fecha Seleccionada y Botón */}
        <div className="modal-footer">
          <span className="selected-info">
            {selectedDate
              ? `${formattedDate} at... ${selectedTime}`
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
