import React from "react";
import { Carousel } from "antd";
import "./ProductSlider.css"; // Stil dosyasını ekleyin

const ProductSlider = () => {
  const products = [
    {
      id: 1,
      name: "Ürün 1",
      imageUrl: "https://via.placeholder.com/300", // Ürün resmi
    },
    {
      id: 2,
      name: "Ürün 2",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      name: "Ürün 3",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      name: "Ürün 4",
      imageUrl: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="product-slider">
      <div className="product-slider-title">Ürün Bilgileri</div>
      <Carousel autoplay>
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductSlider;
