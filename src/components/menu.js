import React from "react";

const Menu = ({ setCart }) => {
  const categories = [
    {
      title: "Breakfast and Tea Collections",
      products: [
        { name: "Breakfast Canapés Collection", price: 48.0, image: "/images/canapes.jpg", tags: ["New"], metadata: ["NF"] },
        { name: "Breakfast Pots", price: 8.5, image: "/images/pots.jpg", tags: ["New Flavours"], metadata: ["12", "V", "NF", "SF"] },
        { name: "Team Breakfast Collection", price: 78.0, image: "/images/team.jpg", tags: ["New"], metadata: ["4", "V", "SF"] },
        { name: "Savoury Breakfast Bruschetta and Frittata Collection", price: 129.0, image: "/images/bruschetta.jpg", metadata: ["NF"] },
        { name: "Loaded Mini Muffins", price: 46.0, image: "/images/muffins.jpg", tags: ["New"], metadata: ["12", "NF"] },
        { name: "Savoury Breakfast Bruschetta Collection", price: 102.0, image: "/images/bruschetta-collection.jpg", metadata: ["NF"] },
        { name: "Breakfast Pastry Collection", price: 124.0, image: "/images/pastry.jpg", metadata: ["12"] },
        { name: "Petit Frittata Collection", price: 48.0, image: "/images/frittata.jpg", metadata: ["GF", "NF", "H"] },
        { name: "Quiche Collection", price: 38.0, image: "/images/quiche.jpg", metadata: ["6-20", "NF"] },
        { name: "Savoury Galettes", price: 79.0, image: "/images/galettes.jpg", metadata: ["12", "NF"] },
      ],
    },
    {
      title: "AM / PM Tea - Sweet",
      products: [
        { name: "Winter Tea Collection", price: 88.0, image: "/images/winter.jpg", metadata: ["12", "V", "H", "CF", "AF", "SF"] },
        { name: "Autumnal Sweet Collection", price: 88.0, image: "/images/autumnal.jpg", metadata: ["14", "CF", "AF", "SF"] },
        { name: "Donut Collection", price: 112.0, image: "/images/donuts.jpg", metadata: ["12", "V"] },
        { name: "Luxe French Patisserie", price: 102.0, image: "/images/patisserie.jpg", metadata: ["14"] },
        { name: "Best Ever Brownies", price: 68.0, image: "/images/brownies.jpg", tags: ["New"], metadata: ["12", "V", "H", "CF", "AF", "SF"] },
      ],
    },
  ];

  return (
    <div className="menu">
      <div className="menu-header">
        <h1>Breakfast and Teas</h1>
        <button className="browse-button">Browse all</button>
      </div>
      {categories.map((category, index) => (
        <div className="category" key={index}>
          <h2>{category.title}</h2>
          <div className="products">
            {category.products.map((product, i) => (
              <div className="menu-item" key={i}>
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
                <h3>{product.name}</h3>
                <div className="metadata">
                  {product.metadata.map((meta, idx) => (
                    <span key={idx} className="meta">{meta}</span>
                  ))}
                </div>
                <p>From ${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button className="expand-button">Expand</button>
    </div>
  );
};

export default Menu;
