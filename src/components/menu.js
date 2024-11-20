import React from "react";
import MenuCategory from "./MenuCategory";
import "./menu.css";

const menuData = [
  {
    title: "Breakfast and Tea Collections",
    items: [
      { name: "Breakfast Canapes Collection", price: "$48.00", image: "images/image1.jpg", tags: ["NF"] },
      { name: "Breakfast Pots", price: "From $8.50", image: "images/image2.jpg", tags: ["12 NF"] },
      { name: "Team Breakfast Collection", price: "$78.00", image: "images/image3.jpg", tags: ["V", "H", "SF"] },
      { name: "Savoury Breakfast Bruschetta and Frittata Collection", price: "$129.00", image: "images/image4.jpg", tags: ["8 NF"] },
      { name: "Loaded Mini Muffins", price: "From $46.00", image: "images/image5.jpg", tags: ["12 V", "NF"] },
      { name: "Savoury Breakfast Bruschetta Collection", price: "$102.00", image: "images/image6.jpg", tags: ["8 NF"] },
      { name: "Breakfast Pastry Collection", price: "$124.00", image: "images/image7.jpg", tags: ["12"] },
      { name: "Petit Frittata Collection", price: "$48.00", image: "images/image8.jpg", tags: ["GF", "NF"] },
      { name: "Quiche Collection", price: "From $38.00", image: "images/image9.jpg", tags: ["6-20 NF"] },
      { name: "Savoury Galettes", price: "$79.00", image: "images/image10.jpg", tags: ["12 NF"] },
    ],
  },
  {
    title: "AM / PM Tea - Sweet",
    items: [
      { name: "Winter Tea Collection", price: "$88.00", image: "images/image11.jpg", tags: ["12 V", "H", "CF", "AF", "SF"] },
      { name: "Autumnal Sweet Collection", price: "From $82.00", image: "images/image12.jpg", tags: ["14 CF", "SF"] },
      { name: "Donut Collection", price: "$112.00", image: "images/image13.jpg", tags: ["12 V", "H"] },
      { name: "Luxe French Patisserie", price: "$102.00", image: "images/image14.jpg", tags: ["15 V", "H", "CF", "AF"] },
      { name: "Best Ever Brownies", price: "From $68.00", image: "images/image15.jpg", tags: ["14"] },
    ],
  },
];

const Menu = () => {
  return (
    <div className="menu">
      {menuData.map((category, index) => (
        <MenuCategory key={index} {...category} />
      ))}
    </div>
  );
};

export default Menu;
