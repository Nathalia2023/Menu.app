import React, { useState } from "react";

import Modal1 from './modal-menu/modal';
import Modal2 from './modal-menu/modal';
import Modal3 from "./modal-menu/modal";
import NoteModal from "./modal-menu/noteModal"



const Menu = ({ setCart }) => {

  {/*Cantidad de un producto*/ }
  const [quantities, setQuantities] = useState({});


  const handleIncrease = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1, // Inicia en 0 ~ Aumenta en 1 al presionar el boton
    }));
  };

  const handleDecrease = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0), //Inicia en 0 ~ Aumenta en 1 al presionar el boton ~ No permite valores negativos 
    }));
  };

  {/**Abre la ventana modal (modal1, modal2, modal3)*/ }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleItemClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setCurrentProductId(product.id);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
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
    setCollections((prevCollections) =>
        prevCollections.map((collection) => {
            if (collection.id === productId) {
                // Agregar nota a la colección principal
                return {
                    ...collection,
                    notes: [...collection.notes, note],
                };
            }
            // Agregar nota a un producto individual dentro de la colección
            const updatedPieces = collection.pieces.map((piece) => {
                if (piece.id === productId) {
                    return {
                        ...piece,
                        notes: [...piece.notes, note],
                    };
                }
                return piece;
            });
            return {
                ...collection,
                pieces: updatedPieces,
            };
        })
    );
    setIsNoteModalOpen(false); // Cierra el modal después de agregar la nota
};
const getNoteCount = (productId) => {
  for (let collection of collections) {
      if (collection.id === productId) {
          return collection.notes.length; // Notas de la colección principal
      }
      for (let piece of collection.pieces) {
          if (piece.id === productId) {
              return piece.notes.length; // Notas de un producto individual
          }
      }
  }
  return 0; // Devuelve 0 si no se encuentran notas o vacio
};

  

  const [collections, setCollections] = useState([
    {
      id: 123, /** El id de la coleccion debe ser diferente a los productos que contiene, peferible usar un id superior a 3 digitos */
      title: "Rice Paper Rolls",
      info: "A delicious mix of traditional and modern takes on Vietnamese rice paper rolls",
      subtitle: "Collection. 24 Pieces",
      image: "/images/rice-paper-rolls.jpg",
      notes: [],
      pieces: [
        {
          id: 1,
          piece: "Beetroot infused rice paper roll of pickled Japanese radish, avocado & fresh herb x 6",
          title: "Beetroot Infused Rice Roll. 6 pieces",
          info: " Served with pickled Japanese radish, avocado & resh herb ",
          metadata: "VG GF NF H",
          price: 28.0,
          serves: "2",
          notes: []
        },
        {
          id: 2,
          piece: "Turmeric rice paper roll of satay prawn with toasted peanuts and avocado x 12",
          title: " Satay Prawn and Avocado. 6 pieces",
          info: "",
          metadata: "DF H",
          price: 28.0,
          serves: "2",
          notes: []
        },
        {
          id: 3,
          piece: "Rice paper roll with lemongrass chicken, sesame and shiso x 12",
          title: " Lemongrass chicken. 6 pieces",
          info: "with shiso in black sesame ",
          metadata: "GF DF NF H",
          price: 28.0,
          serves: "2",
          notes: []
        }
      ]
    }
  ]);

  const categories = [
    {
      id: 1,
      title: "Breakfast and Tea",
      subtitle: "Breakfast and Tea Collections",
      products: [
        { name: "Breakfast Canapés Collection", price: 48.00, image: "/images/image1.jpg", tags: ["New"], quantity: 8, metadata: ["NF"], intro: "One of the world's favourite Champagnes that will suit any occasion." },
        { name: "Breakfast Pots", price: 8.50, image: "/images/image2.jpg", tags: ["New Flavours"], quantity: 12, metadata: ["V", "NF", "SF"] },
        { name: "Team Breakfast Collection", price: 78.00, image: "/images/image3.jpg", tags: ["New"], quantity: 6, metadata: ["V", "SF"] },
        { name: "Savoury Breakfast Bruschetta and Frittata Collection", price: 129.00, image: "/images/image4.jpg", quantity: 8, metadata: ["NF"] },
        { name: "Loaded Mini Muffins", price: 46.00, image: "/images/image5.jpg", tags: ["New"], quantity: 12, metadata: ["NF"] },
        { name: "Savoury Breakfast Bruschetta Collection", price: 102.00, image: "/images/image6.jpg", quantity: 8, metadata: ["NF"] },
        { name: "Breakfast Pastry Collection", price: 124.00, image: "/images/image7.jpg", quantity: 12, metadata: [""] },
        { name: "Petit Frittata Collection", price: 48.00, image: "/images/image8.jpg", quantity: 6, metadata: ["GF", "NF", "H"] },
        { name: "Quiche Collection", price: 38.00, image: "/images/image9.jpg", quantity: 6 + "-" + 20, metadata: ["NF", "sss"] },
        { name: "Savoury Galettes", price: 79.00, image: "/images/image10.jpg", quantity: 12, metadata: ["NF"] },
      ],
    },

    {
      id: 2,
      title: "Lunches",
      subtitle: "Lunch Collections",
      products: [
        { name: "Winter Tea Collection", price: 88.00, image: "/images/image1.jpg", quantity: 12, metadata: ["V", "H", "CF", "AF", "SF"] },
        { name: "Autumnal Sweet Collection", price: 88.00, image: "/images/image2.jpg", quantity: 14, metadata: ["CF", "AF", "SF"] },
        { name: "Donut Collection", price: 112.00, image: "/images/image3.jpg", quantity: 12, metadata: ["V", "H"] },
        { name: "Luxe French Patisserie", price: 102.00, image: "/images/image4.jpg", quantity: 14, metadata: [""] },
        { name: "Best Ever Brownies", price: 68.00, image: "/images/image5.jpg", tags: ["New"], quantity: 15, metadata: ["V", "NH", "H", "CF", "AF", "SF"] },
        { name: "Petit Sweet Tarts", price: 93.00, image: "/images/image6.jpg", quantity: 12, metadata: [""] },
        { name: "AM/PM Tea Collections", price: 88.00, image: "/images/image7.jpg", quantity: 15, metadata: ["V", "H"] },
        { name: "Glutten Free Tea Collections", price: 85.00, image: "/images/image8.jpg", quantity: 10, metadata: ["V", "GH", "NF", "H"] },
        { name: "Vegan Teas Collections", price: 68.25, image: "/images/image9.jpg", quantity: 9, metadata: ["NH", "H", "VG"] },
        { name: "Artisan Cakes and Slices", price: 85.0, image: "/images/image10.jpg", quantity: 12, metadata: [""] }
      ]
    },
    {
      id: 3,
      title: "Buffets and BBQ",
      subtitle: "Buffets and BBQ Collections",
      products: [
        { name: "Winter Tea Collection", price: 88.00, image: "/images/image1.jpg", quantity: 12, metadata: ["V", "H", "CF", "AF", "SF"] },
        { name: "Autumnal Sweet Collection", price: 88.00, image: "/images/image2.jpg", quantity: 14, metadata: ["CF", "AF", "SF"] },
        { name: "Donut Collection", price: 112.00, image: "/images/image3.jpg", quantity: 12, metadata: ["V", "H"] },
        { name: "Luxe French Patisserie", price: 102.00, image: "/images/image4.jpg", quantity: 14, metadata: [""] },
        { name: "Best Ever Brownies", price: 68.00, image: "/images/image5.jpg", tags: ["New"], quantity: 15, metadata: ["V", "NH", "H", "CF", "AF", "SF"] },
        { name: "Petit Sweet Tarts", price: 93.00, image: "/images/image6.jpg", quantity: 12, metadata: [""] },
        { name: "AM/PM Tea Collections", price: 88.00, image: "/images/image7.jpg", quantity: 15, metadata: ["V", "H"] },
        { name: "Glutten Free Tea Collections", price: 85.00, image: "/images/image8.jpg", quantity: 10, metadata: ["V", "GH", "NF", "H"] },
        { name: "Vegan Teas Collections", price: 68.25, image: "/images/image9.jpg", quantity: 9, metadata: ["NH", "H", "VG"] },
        { name: "Artisan Cakes and Slices", price: 85.0, image: "/images/image10.jpg", quantity: 12, metadata: [""] }
      ]
    },
    {
      id: 4,
      title: "Finger Food",
      subtitle: "Finger Food Collection",
      products: [
        { name: "Winter Tea Collection", price: 88.00, image: "/images/image1.jpg", quantity: 12, metadata: ["V", "H", "CF", "AF", "SF"] },
        { name: "Autumnal Sweet Collection", price: 88.00, image: "/images/image2.jpg", quantity: 14, metadata: ["CF", "AF", "SF"] },
        { name: "Donut Collection", price: 112.00, image: "/images/image3.jpg", quantity: 12, metadata: ["V", "H"] },
        { name: "Luxe French Patisserie", price: 102.00, image: "/images/image4.jpg", quantity: 14, metadata: [""] },
        { name: "Best Ever Brownies", price: 68.00, image: "/images/image5.jpg", tags: ["New"], quantity: 15, metadata: ["V", "NH", "H", "CF", "AF", "SF"] },
        { name: "Petit Sweet Tarts", price: 93.00, image: "/images/image6.jpg", quantity: 12, metadata: [""] },
        { name: "AM/PM Tea Collections", price: 88.00, image: "/images/image7.jpg", quantity: 15, metadata: ["V, ", "H"] },
        { name: "Glutten Free Tea Collections", price: 85.00, image: "/images/image8.jpg", quantity: 10, metadata: ["V", "GH", "NF", "H"] },
        { name: "Vegan Teas Collections", price: 68.25, image: "/images/image9.jpg", quantity: 9, metadata: ["NH", "H", "VG"] },
        { name: "Artisan Cakes and Slices", price: 85.0, image: "/images/image10.jpg", quantity: 12, metadata: [""] }
      ]
    },
    {
      id: 5,
      title: "Canapés & Events",
      subtitle: "Canapés & Events Collections",
      products: [
        { name: "Winter Tea Collection", price: 88.00, image: "/images/image1.jpg", quantity: 12, metadata: ["V", "H", "CF", "AF", "SF"] },
        { name: "Autumnal Sweet Collection", price: 88.00, image: "/images/image2.jpg", quantity: 14, metadata: ["CF", "AF", "SF"] },
        { name: "Donut Collection", price: 112.00, image: "/images/image3.jpg", quantity: 12, metadata: ["V", "H"] },
        { name: "Luxe French Patisserie", price: 102.00, image: "/images/image4.jpg", quantity: 14, metadata: [""] },
        { name: "Best Ever Brownies", price: 68.00, image: "/images/image5.jpg", tags: ["New"], quantity: 15, metadata: ["V", "NH", "H", "CF"] },
        { name: "Petit Sweet Tarts", price: 93.00, image: "/images/image6.jpg", quantity: 12, metadata: [""] },
        { name: "AM/PM Tea Collections", price: 88.00, image: "/images/image7.jpg", quantity: 15, metadata: ["V", "H"] },
        { name: "Glutten Free Tea Collections", price: 85.00, image: "/images/image8.jpg", quantity: 10, metadata: ["V", "GH", "NF", "H"] },
        { name: "Vegan Teas Collections", price: 68.25, image: "/images/image9.jpg", quantity: 9, metadata: ["NH", "H", "VG"] },
        { name: "Artisan Cakes and Slices", price: 85.0, image: "/images/image10.jpg", quantity: 12, metadata: [""] }
      ]
    }
  ];

  const sampleMenu = [
    {
      id: 1,
      title: "Cold Canapes",
      subtitle: "This is sample menu.",
      link: "",
      image: "https://i.pinimg.com/736x/b5/7b/6b/b57b6bf3a8cbf60cf3e7a658ce2c9e0c--creative-food-food-and-drinks.jpg",
      foods: [  
      "Beetroot, goat cheese blinis with beetroot pearls",
      "Mini blinis, fresh herb infused Neufchatel creme, smoked salmon, caviar pearls & micro chervil",
      "Petit corn fritters with house-made guacamole and tomato",
      "Wafer-thin Chinese Peking pancake, filled with succulent roast duck, cucumber, shallot and Hoisin sauce",
      "Yellow flower rice paper roll of pickled Japanese radish, avocado & fresh",
      "Mediterranean marinated vegetable and olive brochette",
      "Banh mi inspired tasting spoon with pork belly, chicken pate, daikon, pickled carrot and baguette crisps",
      "Taco Baja Pescado - Tasty fried fish pieces with fresh slaw and black pepper dressing",
      "Kettle crisps with crème fraiche, dill, and salmon caviar (requires on-site chef for preparation)"
      ],
    }
  ]


  return (

    <div className="menu">
      {categories.map((category, index) => (
        <div className="category" key={index}>
          <div className="menu-header">
            <h1>{category.title}</h1>
            <button className="browse-button">Browse all</button>
          </div>
          <h2>{category.subtitle}</h2>
          <div className="products">
            {category.products.map((product, i) => (
              <div className="menu-item" key={i}

                onClick={() => handleItemClick(product)}>

                <div className="image-container">
                  <img src={product.image} alt={product.name} />
                  {product.tags && (
                    <div className="tags">
                      {product.tags.map((tag, idx) => (
                        <span key={idx} className="tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                </div>
                <div className="product-details">
                  <div className="product-quantity">
                    <img
                      src="/images/icons/user.svg"
                      alt="User Icon"
                      className="user-icon"
                    />
                    <span>{product.quantity} </span>
                    <span className="m">{product.metadata.join(', ')}</span>
                  </div>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
            {isModalOpen && selectedProduct && ( /** Para usar la ventana modal 3 coloque isOpen={isModalOpen} onClose={handleCloseModal} dentro de <Modal3 ...>*/
              <Modal3 >
                <div className="product-modal-content">
                  <div className="image">
                    <img src={selectedProduct.image} alt={selectedProduct.name} />
                  </div>
                  <div className="content-text">
                    <h1>{selectedProduct.name}</h1>
                    <p className="dep-1">{selectedProduct.intro}</p>
                    <h2>Veuve Cliquot - to taste</h2>
                    <div className="content-two">
                      <div className="dep-2">
                        <p>The predominance of Pinot Noir provides the structure
                          that is so typically Veuve Clicquot, while a touch of
                          Meunier rounds out the blend. Chardonnay adds the
                          elegance and finesse essential in a perfectly balanced
                          wine.</p> <br></br>
                        <p>The wine is characterized by a brilliant golden yellow
                          color and a fine, persistent effervescence.</p>
                      </div>
                      <div className="container-pay">
                        <span>excl. GST</span>
                        <p>${selectedProduct.price.toFixed(2)}</p>
                        <div className="quantity-selector">
                          <div className="btn-container">
                            <button className="btn-more" onClick={() => handleIncrease(selectedProduct.id)}>+</button>
                            <button className="btn-less" onClick={() => handleDecrease(selectedProduct.id)}>-</button>
                          </div>
                          <input type="number" value={quantities[selectedProduct.id] || 0} min="0" readOnly />
                        </div>
                        <span>(min 2)</span>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="footer-card">
                  <div className="cont-btn">
                    <img src="/images/icons/shopping-cart.svg"></img>
                    <p>$0.00</p>
                    <button>Add To Cart</button>
                  </div>
                </div>
              </Modal3>
            )}

            {selectedProduct && (  /** Para usar la ventana modal 1 coloque isOpen={isModalOpen} onClose={handleCloseModal} dentro de <Modal1 ...> */
              <Modal1 isOpen={isModalOpen} onClose={handleCloseModal} >
                <div className="header-modal">
                  <h1>Rice Paper Rolls</h1>
                </div>
                {collections.map((collection) => (
                  <div className="product-modal-content">
                    <div className="image">
                      <img src={collection.image} alt={collection.name} />
                    </div>
                    <div className="content-text">
                      <h1>{collection.title}</h1>
                      <p className="dep-1">{collection.info}</p>
                      <h2>{collection.subtitle}</h2>
                      <div className="content-price">
                        <div className="dep-2">
                          {collection.pieces.map((piece, index) => (
                            <div key={index} className="piece-detail">
                              <p className="piece">{piece.piece} <span>{piece.metadata}</span></p>
                            </div>
                          ))}
                          <div>
                              <div className="options">
                              <button
                                onClick={() => {
                                  setCurrentProductId(collection.id);
                                  handleOpenNoteModal();
                                }}
                                className="btn-note"
                              >
                                Add note
                                {getNoteCount(collection.id) > 0 && (
                                  <p className="number-notes">{getNoteCount(collection.id)}</p>
                                )}
                              </button>
                                <NoteModal
                                  isOpen={isNoteModalOpen}
                                  onClose={handleCloseNoteModal}
                                  onAddNote={(note) => handleAddNote(currentProductId, note)} />
                                <div className="product-quantity">
                                  <img src="/images/icons/user.svg" alt="User Icon" className="user-icon" />
                                  <p>Serves</p><span>8</span>
                                </div>
                              </div>

                          </div>
                        </div>
                        <div className="container-pay">
                          <span>excl. GST</span>
                          <p>$109.00</p>
                          {collections.map((collection) => (
                            <div className="quantity-selector">
                              <div className="btn-container">
                                <button className="btn-more" onClick={() => handleIncrease(collection.id)}>+</button>
                                <button className="btn-less" onClick={() => handleDecrease(collection.id)}>-</button>
                              </div>
                              <input type="number" value={quantities[collection.id] || 0} min="0" readOnly />
                            </div>
                          ))}
                        </div>
                      </div>

                      {collection.pieces.map((piece) => (
                        <div className="content-price" key={piece.id} console={piece.id}>
                          <div className="dep-2">
                            <h2>{piece.title}</h2>
                            <p>{piece.info}<span>{piece.metadata}</span></p>
                            <br></br>
                            <div className="options">
                              <button
                                onClick={() => {
                                  setCurrentProductId(piece.id);
                                  handleOpenNoteModal();
                                }}
                                className="btn-note"
                              >
                                Add note
                                {getNoteCount(piece.id) > 0 && (
                                  <p className="number-notes">{getNoteCount(piece.id)}</p>
                                )}
                              </button>
                              <NoteModal
                                isOpen={isNoteModalOpen}
                                onClose={handleCloseNoteModal}
                                onAddNote={(note) => handleAddNote(currentProductId, note)}
                              />
                              <div className="product-quantity">
                                <img
                                  src="/images/icons/user.svg"
                                  alt="User Icon"
                                  className="user-icon"
                                />
                                <p>Serves</p><span>{piece.serves}</span>
                              </div>
                            </div>

                          </div>
                          <div className="container-pay">
                            <span>excl. GST</span>
                            <p>${piece.price.toFixed(2)}</p>
                            <div className="quantity-selector">
                              <div className="btn-container">
                                <button className="btn-more" onClick={() => handleIncrease(piece.id)}>+</button>
                                <button className="btn-less" onClick={() => handleDecrease(piece.id)}>-</button>
                              </div>
                              <input type="number" value={quantities[piece.id] || 0} min="0" readOnly />
                            </div>

                          </div>
                        </div>

                      ))}
                    </div>
                  </div>
                ))}
                <div className="footer-card" style={{ marginTop: 0 }}>
                  <div className="cont-btn">
                    <img src="/images/icons/shopping-cart.svg"></img>
                    <span className="cart-number">12</span>
                    <p>$579.00</p>
                    <button className="btn-note">Add To Cart</button>
                  </div>
                </div>
              </Modal1>
            )}

            {isModalOpen && selectedProduct && ( /** Para usar la ventana modal 2 coloque isOpen={isModalOpen} onClose={handleCloseModal} dentro de <Modal2 ...>*/
              <Modal2  >
                {sampleMenu.map((menu)=>(
                  <div className="info-modal-content">
                  <div className=" imagen">
                      <img src={menu.image} alt={selectedProduct.name} />
                    </div>
                    <div className="content-text">
                      <h1>{menu.title}</h1>
                      <p>{menu.subtitle} <a href={menu.link}>Download our full canape menu</a></p>
                      <div className="separador"></div>
                      <div className="foods-content">
                        <h3>Sample Menu</h3>
                        <ul>
                          {menu.foods.map((food, index)=> (
                            <li key={index}>{food}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="footer-info">
                        <p>Speak to our Events Manager for a quote on <span>1300 556 086</span></p>
                    </div>
              </Modal2>
            )}

          </div>
          <div className="expand-button-container">
            <button className="expand-button">Expand</button>
          </div>
        </div>
      ))}
      {/* Botón Expand */}

    </div>
  );
};

export default Menu;
