import React, { useState } from 'react';
import Cart from './Cart';
import DeliveryTimeModal from './modal-cart/DeliveryTimeModal';

const ParentComponent = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');
    const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false);

    const handleOpenDeliveryModal = () => {
        console.log(true)
        setIsDeliveryModalOpen(true);
    };

    const handleCloseDeliveryModal = () => {
        setIsDeliveryModalOpen(false);
    };

    return (
        <div>
            <Cart 
                selectedDate={selectedDate} 
                selectedTime={selectedTime} 
                onOpenDeliveryModal={handleOpenDeliveryModal} 
            />
            <DeliveryTimeModal 
                isOpen={isDeliveryModalOpen} 
                onClose={handleCloseDeliveryModal} 
                setSelectedDate={setSelectedDate} 
                setSelectedTime={setSelectedTime} 
            />
        </div>
    );
};
export default ParentComponent;