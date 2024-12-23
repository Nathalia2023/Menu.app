import React, { useState } from "react";
import Modal from "./modal/modal";

const Menu = ({ setCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleItemClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };
  const categories = [
    {
      id: 1,
      title: "Breakfast and Tea",
      subtitle: "Breakfast and Tea Collections",
      products: [
        { name: "Breakfast Canapés Collection", price: 48.00, image: "/images/image1.jpg", tags: ["New"], quantity: 8, metadata: ["NF"], intro: "One of the world's favourite Champagnes that will suit any occasion." },
        { name: "Breakfast Pots", price: 8.50, image: "/images/image2.jpg", tags: ["New Flavours"], quantity: 12, metadata: ["V, ", "NF, ", "SF"] },
        { name: "Team Breakfast Collection", price: 78.00, image: "/images/image3.jpg", tags: ["New"], quantity: 6, metadata: ["V, ", "SF"] },
        { name: "Savoury Breakfast Bruschetta and Frittata Collection", price: 129.00, image: "/images/image4.jpg", quantity: 8, metadata: ["NF"] },
        { name: "Loaded Mini Muffins", price: 46.00, image: "/images/image5.jpg", tags: ["New"], quantity: 12, metadata: ["NF"] },
        { name: "Savoury Breakfast Bruschetta Collection", price: 102.00, image: "/images/image6.jpg", quantity: 8, metadata: ["NF"] },
        { name: "Breakfast Pastry Collection", price: 124.00, image: "/images/image7.jpg", quantity: 12, metadata: [""] },
        { name: "Petit Frittata Collection", price: 48.00, image: "/images/image8.jpg", quantity: 6, metadata: ["GF, ", "NF, ", "H"] },
        { name: "Quiche Collection", price: 38.00, image: "/images/image9.jpg", quantity: 6 + "-" + 20, metadata: ["NF, ", "sss"] },
        { name: "Savoury Galettes", price: 79.00, image: "/images/image10.jpg", quantity: 12, metadata: ["NF"] },
      ],
    },

    {
      id: 2,
      title: "Lunches",
      subtitle: "Lunch Collections",
      products: [
        { name: "Winter Tea Collection", price: 88.00, image: "/images/image1.jpg", quantity: 12, metadata: ["V, ", "H, ", "CF, ", "AF, ", "SF"] },
        { name: "Autumnal Sweet Collection", price: 88.00, image: "/images/image2.jpg", quantity: 14, metadata: ["CF, ", "AF, ", "SF"] },
        { name: "Donut Collection", price: 112.00, image: "/images/image3.jpg", quantity: 12, metadata: ["V, ", "H"] },
        { name: "Luxe French Patisserie", price: 102.00, image: "/images/image4.jpg", quantity: 14, metadata: [""] },
        { name: "Best Ever Brownies", price: 68.00, image: "/images/image5.jpg", tags: ["New"], quantity: 15, metadata: ["V, ", "NH, ", "H, ", "CF, ", "AF, ", "SF"] },
        { name: "Petit Sweet Tarts", price: 93.00, image: "/images/image6.jpg", quantity: 12, metadata: [""] },
        { name: "AM/PM Tea Collections", price: 88.00, image: "/images/image7.jpg", quantity: 15, metadata: ["V, ", "H"] },
        { name: "Glutten Free Tea Collections", price: 85.00, image: "/images/image8.jpg", quantity: 10, metadata: ["V, ", "GH, ", "NF, ", "H"] },
        { name: "Vegan Teas Collections", price: 68.25, image: "/images/image9.jpg", quantity: 9, metadata: ["NH, ", "H, ", "VG"] },
        { name: "Artisan Cakes and Slices", price: 85.0, image: "/images/image10.jpg", quantity: 12, metadata: [""] }
      ]
    },
    {
      id: 3,
      title: "Buffets and BBQ",
      subtitle: "Buffets and BBQ Collections",
      products: [
        { name: "Winter Tea Collection", price: 88.00, image: "/images/image1.jpg", quantity: 12, metadata: ["V, ", "H, ", "CF, ", "AF, ", "SF"] },
        { name: "Autumnal Sweet Collection", price: 88.00, image: "/images/image2.jpg", quantity: 14, metadata: ["CF, ", "AF, ", "SF"] },
        { name: "Donut Collection", price: 112.00, image: "/images/image3.jpg", quantity: 12, metadata: ["V, ", "H"] },
        { name: "Luxe French Patisserie", price: 102.00, image: "/images/image4.jpg", quantity: 14, metadata: [""] },
        { name: "Best Ever Brownies", price: 68.00, image: "/images/image5.jpg", tags: ["New"], quantity: 15, metadata: ["V, ", "NH, ", "H, ", "CF, ", "AF, ", "SF"] },
        { name: "Petit Sweet Tarts", price: 93.00, image: "/images/image6.jpg", quantity: 12, metadata: [""] },
        { name: "AM/PM Tea Collections", price: 88.00, image: "/images/image7.jpg", quantity: 15, metadata: ["V, ", "H"] },
        { name: "Glutten Free Tea Collections", price: 85.00, image: "/images/image8.jpg", quantity: 10, metadata: ["V, ", "GH, ", "NF, ", "H"] },
        { name: "Vegan Teas Collections", price: 68.25, image: "/images/image9.jpg", quantity: 9, metadata: ["NH, ", "H, ", "VG"] },
        { name: "Artisan Cakes and Slices", price: 85.0, image: "/images/image10.jpg", quantity: 12, metadata: [""] }
      ]
    },
    {
      id: 4,
      title: "Finger Food",
      subtitle: "Finger Food Collection",
      products: [
        { name: "Winter Tea Collection", price: 88.00, image: "/images/image1.jpg", quantity: 12, metadata: ["V, ", "H, ", "CF, ", "AF, ", "SF"] },
        { name: "Autumnal Sweet Collection", price: 88.00, image: "/images/image2.jpg", quantity: 14, metadata: ["CF, ", "AF, ", "SF"] },
        { name: "Donut Collection", price: 112.00, image: "/images/image3.jpg", quantity: 12, metadata: ["V, ", "H"] },
        { name: "Luxe French Patisserie", price: 102.00, image: "/images/image4.jpg", quantity: 14, metadata: [""] },
        { name: "Best Ever Brownies", price: 68.00, image: "/images/image5.jpg", tags: ["New"], quantity: 15, metadata: ["V, ", "NH, ", "H, ", "CF, ", "AF, ", "SF"] },
        { name: "Petit Sweet Tarts", price: 93.00, image: "/images/image6.jpg", quantity: 12, metadata: [""] },
        { name: "AM/PM Tea Collections", price: 88.00, image: "/images/image7.jpg", quantity: 15, metadata: ["V, ", "H"] },
        { name: "Glutten Free Tea Collections", price: 85.00, image: "/images/image8.jpg", quantity: 10, metadata: ["V, ", "GH, ", "NF, ", "H"] },
        { name: "Vegan Teas Collections", price: 68.25, image: "/images/image9.jpg", quantity: 9, metadata: ["NH, ", "H, ", "VG"] },
        { name: "Artisan Cakes and Slices", price: 85.0, image: "/images/image10.jpg", quantity: 12, metadata: [""] }
      ]
    },
    {
      id: 5,
      title: "Canapés & Events",
      subtitle: "Canapés & Events Collections",
      products: [
        { name: "Winter Tea Collection", price: 88.00, image: "/images/image1.jpg", quantity: 12, metadata: ["V, ", "H, ", "CF, ", "AF, ", "SF"] },
        { name: "Autumnal Sweet Collection", price: 88.00, image: "/images/image2.jpg", quantity: 14, metadata: ["CF, ", "AF, ", "SF"] },
        { name: "Donut Collection", price: 112.00, image: "/images/image3.jpg", quantity: 12, metadata: ["V, ", "H"] },
        { name: "Luxe French Patisserie", price: 102.00, image: "/images/image4.jpg", quantity: 14, metadata: [""] },
        { name: "Best Ever Brownies", price: 68.00, image: "/images/image5.jpg", tags: ["New"], quantity: 15, metadata: ["V, ", "NH, ", "H, ", "CF, ", "AF, ", "SF"] },
        { name: "Petit Sweet Tarts", price: 93.00, image: "/images/image6.jpg", quantity: 12, metadata: [""] },
        { name: "AM/PM Tea Collections", price: 88.00, image: "/images/image7.jpg", quantity: 15, metadata: ["V, ", "H"] },
        { name: "Glutten Free Tea Collections", price: 85.00, image: "/images/image8.jpg", quantity: 10, metadata: ["V, ", "GH, ", "NF, ", "H"] },
        { name: "Vegan Teas Collections", price: 68.25, image: "/images/image9.jpg", quantity: 9, metadata: ["NH, ", "H, ", "VG"] },
        { name: "Artisan Cakes and Slices", price: 85.0, image: "/images/image10.jpg", quantity: 12, metadata: [""] }
      ]
    }
  ];

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
                    <span className="m">{product.metadata}</span>
                  </div>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
 {selectedProduct && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} >
          <div className="product-modal-content">
            <div className="image">
              <img src={selectedProduct.image} alt={selectedProduct.name} />
            </div>
            <div className="content-text">
            <h1>{selectedProduct.name}</h1>
            <p className="dep-1">{selectedProduct.intro}</p>
            <h2>Veuve Cliquot - to taste</h2>
            <div className="content-price"> 
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
              <button className="btn-more">+</button>
              <button className="btn-less">-</button>
              </div>
              <input type="number" value="0" min="100" readOnly />
            </div>
            <span>(min 2)</span>
              </div>
            </div>
            <div className="separador"></div>
            </div>
          </div>
          <div className="footer-card"> 
          <div className="cont-btn">
            <img src="/images/icons/shopping-cart.svg"></img>
            <p>$0.00</p>
            <button>Add To Cart</button>
          </div>
          </div>
        </Modal>
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
