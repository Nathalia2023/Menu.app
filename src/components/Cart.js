import React, { useState } from 'react';
import ModalExtra from './modal-cart/modalExtras';
import NoteModal from "./modal-menu/noteModal"
import Login from './login/Login';
import DeliveryTimeModal from './modal-cart/DeliveryTimeModal';



const Cart = ({ cart, deliveryFee, gst }) => {

    const [quantities, setQuantities] = useState({});
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [megatotal, setMegatotal] = useState(0);

  const handleIncrease = (productId, price) => {
    setQuantities((prevQuantities) => {
      const newQuantity = (prevQuantities[productId] || 0) + 1;
      setTotalQuantity(totalQuantity + 1); // Aumentar la cantidad total
      setMegatotal(megatotal + price) // Sumar al subtotal
      return {
        ...prevQuantities,
        [productId]: newQuantity,
      };
    });
  };

  const handleDecrease = (productId, price) => {
    setQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[productId] || 0;
      if (currentQuantity > 0) { // Solo disminuir si la cantidad actual es mayor que 0
        const newQuantity = currentQuantity - 1;
        setTotalQuantity(totalQuantity - 1); // Disminuir la cantidad total
        setMegatotal(megatotal - price); // Restar del subtotal
        return {
          ...prevQuantities,
          [productId]: newQuantity,
        };
      }
      return prevQuantities; // No hacer nada si la cantidad es 0
    });
  };


  {/**Abre la ventana modal de notas y las gestiona */ }
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);

  const handleOpenNoteModal = () => {
    setIsNoteModalOpen(true);
  };

  const handleCloseNoteModal = () => {
    setIsNoteModalOpen(false);
  };
  const [notesCount, setNotesCount] = useState({});
  const [currentProductId, setCurrentProductId] = useState(null);

  const handleAddNote = (productId, note) => {
    // Verifica si el producto pertenece a `drinks`
    const isDrink = drinks.some((drink) => drink.id === productId);
    if (isDrink) {
      setDrinks((prevDrinks) =>
        prevDrinks.map((drink) => {
          if (drink.id === productId) {
            return {
              ...drink,
              notes: [...drink.notes, note],
            };
          }
          return drink;
        })
      );
    } else {
      // Si no pertenece a `drinks`, busca en `cutlery`
      setCutlery((prevCutlery) =>
        prevCutlery.map((cutleryItem) => {
          return {
            ...cutleryItem,
            cutlerys: cutleryItem.cutlerys.map((cut) => {
              if (cut.id === productId) {
                return {
                  ...cut,
                  notes: [...cut.notes, note],
                };
              }
              return cut;
            }),
          };
        })
      );
    }

    setIsNoteModalOpen(false); // Cierra el modal después de agregar la nota
  };

  const getNoteCount = (productId) => {
    // Buscar en `drinks`
    for (let drink of drinks) {
      if (drink.id === productId) {
        return drink.notes.length; // Notas de la colección principal
      }
    }

    // Buscar en `cutlery`
    for (let cutleryItem of cutlery) {
      for (let cut of cutleryItem.cutlerys) {
        if (cut.id === productId) {
          return cut.notes.length; // Notas de un producto individual
        }
      }
    }

    return 0; // Devuelve 0 si no se encuentran notas o está vacío
  };



  {/**Abre la ventana modal de extras */ }
  const [isModaExtralOpen, setIsModalExtraOpen] = useState(false);
  const handleExtraClick = () => {
    setIsModalExtraOpen(true);
  };

  const handleCloseModalExtra = () => {
    setIsModalExtraOpen(false);
  };

  {/**Abre la ventana login */ }
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const handleLoginOpen = () => {
    setIsLoginOpen(true);
  };

  const handleLoginClose = () => {
    setIsLoginOpen(false);
  };



  const [drinks, setDrinks] = useState([
    {
      id: 13,
      image: "https://i.blogs.es/7fc543/alcohol/1366_2000.jpg",
      name: 'The Crowd Pleaser',
      drink: [
        "Earthworks Temperanillo (2 bottles),",
        "Stonegate Sauvignon Blanc (4 bottles), ",
        "Yves Premium Cuvee (6 bottles),",
        "Peroni Nastro Azzurro (18 bottles),",
        "Great Northern 3.5% (18 bottles)",
        "Assorted Still & Sparkling Water 250ml (25 bottles)",
        "Assorted Slim Can Soft Drinks 250ml (30 bottles)"
      ],
      licence: [
        "Drop-off orders are sold under licence LIQP770018056",
        "Onsite beverage packages are sold under licence LIQO660036562"
      ],
      price: 109.0,
      notes: []
    },
  ]);

  const [cutlery, setCutlery] = useState([
    {
      id: 12,
      image: "https://th.bing.com/th/id/OIP.G6eikvQ0aGKynKJ-YUAzfQHaHa?w=2654&h=2654&rs=1&pid=ImgDetMain",
      cutlerys: [
        {
          id: 1,
          name: 'Bamboo Fork',
          dep: "Price per fork",
          price: 0.35,
          notes: []
        },
        {
          id: 2,
          name: 'Bamboo Knife',
          dep: "Price per knife",
          price: 0.35,
          notes: []
        },
        {
          id: 3,
          name: 'Bamboo Spoon',
          dep: "Price per Spoon",
          price: 0.35,
          notes: []
        }
      ]
    }
  ]);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + deliveryFee + gst;
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);


  const [isDeliveryOpen, setDeliveryOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  const handleDeliveryOpen = () => setDeliveryOpen(true);
  const handleDeliveryClose = () => setDeliveryOpen(false);

  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
      })
    : null;



  return (
    <div className='cart-parent-container'>
      <div className="cart">
        <div className="cart-header">
          <div className="cart-header-icon">
            <div className="cart-icon-wrapper">
              <img src="/images/icons/shopping-cart.svg" alt="Cart Icon" />
              <span className="cart-badge">{totalItems}</span>
            </div>
            <span className="cart-total">${total.toFixed(2)}</span>
          </div>
          <button className="checkout-button" onClick={handleExtraClick}>Checkout</button>
          <ModalExtra isOpen={isModaExtralOpen} onClose={handleCloseModalExtra}>
            <div className='extras-modal-content'>
              <div className="extras-header">
                <h1>Before you checkkout, do you want to add any of these extras?</h1>
                <p> Have a look at these are frequently ordered</p>
                <div className='btn-skip'>
                  <button onClick={handleLoginOpen}>Skip</button>
                  <Login isOpenLogin={isLoginOpen} onCloseLogin={handleLoginClose}>

                  </Login>
                </div>
                <div className='separador'></div>
                {drinks.map((drink) => (
                  <div className='extras-container'>
                    <div className='img'>
                      <img src={drink.image} alt=''></img>
                    </div>
                    <div className='text-content'>
                      <h2>{drink.name}</h2>
                      <ul className='list-drinks'>
                        {drink.drink.map((drink, index) => (
                          <li key={index}>{drink}</li>
                        ))}
                      </ul>
                      <ul className='list-licence'>
                        {drink.licence.map((licence, index) => (
                          <li key={index}>{licence}</li>
                        ))}
                      </ul>
                      <div className='option'>

                        <button
                          onClick={() => {
                            setCurrentProductId(drink.id);
                            handleOpenNoteModal();
                          }}
                          className="add-btn"
                        >
                          Add note
                          {getNoteCount(drink.id) > 0 && (
                            <p className="number-notes">{getNoteCount(drink.id)}</p>
                          )}
                        </button>
                        <NoteModal
                          isOpen={isNoteModalOpen}
                          onClose={handleCloseNoteModal}
                          onAddNote={(note) => handleAddNote(currentProductId, note)} />
                      </div>

                    </div>
                    <div className="container-pay">
                      <span>excl. GST</span>
                      <p>${drink.price.toFixed(2)}</p>
                      <div className="quantity-selector">
                        <div className="btn-container">
                          <button className="btn-more" onClick={() => handleIncrease(drink.id, drink.price)}>+</button>
                          <button className="btn-less" onClick={() => handleDecrease(drink.id, drink.price)}>-</button>
                        </div>
                        <input type="number" value={quantities[drink.id] || 0} min="0" readOnly />
                      </div>
                    </div>
                  </div>
                ))}
                <div className='separador'></div>

                {cutlery.map((spoon) => (
                  <div className="extras-container" key={spoon.id}>
                    <div className="img">
                      <img src={spoon.image} alt="cutlery"></img>
                    </div>
                    <div className="cutlerys">
                      {spoon.cutlerys.map((cut) => (
                        <div className="extra-item" key={cut.id}>
                          <div className="extra-details">
                            <h2>{cut.name}</h2>
                            <p>{cut.dep}</p>
                            <div className='option'>
                              <button
                                onClick={() => {
                                  setCurrentProductId(cut.id);
                                  handleOpenNoteModal();
                                }}
                                className="add-btn"
                              >
                                Add note
                                {getNoteCount(cut.id) > 0 && (
                                  <p className="number-notes">{getNoteCount(cut.id)}</p>
                                )}
                              </button>
                              <NoteModal
                                isOpen={isNoteModalOpen}
                                onClose={handleCloseNoteModal}
                                onAddNote={(note) => handleAddNote(currentProductId, note)} />
                            </div>
                          </div>
                          <div className="container-pay">
                            <span>excl. GST</span>
                            <p>${cut.price.toFixed(2)}</p>
                            <div className="quantity-selector">
                              <div className="btn-container">
                                <button className="btn-more" onClick={() => handleIncrease(cut.id, cut.price)}>+</button>
                                <button className="btn-less" onClick={() => handleDecrease(cut.id, cut.price)}>-</button>
                              </div>
                              <input type="number" value={quantities[cut.id] || 0} min="0" readOnly />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="footer-info">
              <div className="cont-btn">
                <img src="/images/icons/shopping-cart.svg"></img>
                <span className="cart-number">{totalQuantity}</span>
                <p>${megatotal.toFixed(2)}</p>
                <button className="btn-cart">Add To Cart</button>
              </div>
              <button className='btn-skip'>Skip</button>
            </div>
          </ModalExtra>
        </div>
        <div className='delivery-time-btn-container'>
          <button className="delivery-time-btn" onClick={handleDeliveryOpen}>
        {selectedDate && selectedTime
          ? `${formattedDate} at ${selectedTime}`
          : 'Set Delivery Time(S)'}
      </button>
          <DeliveryTimeModal 
          isOpen={isDeliveryOpen}
          onClose={handleDeliveryClose}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}>
          
            </DeliveryTimeModal>
        </div>

        <div className='cart-list-container'>
          <ul className="cart-list">
          {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <div className="item-details">
                  <div className="item-header">

                    <div className='row'>
                      <span className="item-quantity">x{item.quantity}</span>
                      <button className="edit-button">edit</button>
                    </div>
                    <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                  <div className="item-footer">
                    <span className="item-name">{item.name}</span>
                    <img
                      src="/images/icons/trash-2.svg"
                      alt="Delete Icon"
                      className="delete-icon"
                    />
                  </div>
                </div>
                {index < cart.length - 1 && <hr className="item-divider" />}
              </li>
            ))}
          </ul>
        </div>
        <div className="cart-summary">
          <div className="summary-line1">
            <div className='cont-row'>
              <span>Delivery Fee</span>
              <img src='images/icons/info.svg' />
            </div>
            <span className="delivery-fee">${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="summary-line">
            <span>Sub Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-line">
            <span>GST Total</span>
            <span>${gst.toFixed(2)}</span>
          </div>

        </div>
        <div className='summary-line-total'>
          <div className="summary-total">
            <span className='text-total'>Total</span>
            <div className='text-number-total'>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div className="delivery-info">
          <span>We deliver to Sydney, Monday to Saturday.</span>
          <button className="see-locations-btn">See locations</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
