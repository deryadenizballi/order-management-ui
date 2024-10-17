import React from "react";
import { Carousel } from "antd";
import "./ProductSlider.css";

const CustomArrow = ({ className, style, onClick, type }) => (
  <button
    className={`${className} carousel-arrow ${type}`}
    style={{ ...style }}
    onClick={onClick}
  >
    {type === "prev" ? "<" : ">"}
  </button>
);

const ProductSlider = ({ products }) => {
  return (
    <div className="product-slider">
      <div className="product-slider-title">Ürün Bilgileri</div>
      <Carousel
        autoplay
        arrows
        prevArrow={<CustomArrow type="prev" />}
        nextArrow={<CustomArrow type="next" />}
      >
        {products.map((product, index) => (
          <div key={index} className="caraousel-product">
            <div className="product-box">
              <div className="product-title">
                <strong>{product.name}</strong>
                <div className="product-info">
                  <span>Beden: {product.size}</span>
                  <span>Adet: {product.quantity} Adet</span>
                </div>
              </div>
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="product-information">
              <span>Stok Kodu: {product.stockCode}</span>
              <span>Barkod: {product.barcode}</span>
              <span>Ürün Grubu: {product.productGroup}</span>
              <span>Kalıp: {product.fit}</span>
              <span>Kumaş: {product.fabric}</span>
              <span>Renk: {product.color}</span>
            </div>
            <div className="product-information">
              <span>Birim Fiyatı: {product.unitPrice}₺</span>
              <span>İndirim Yüzdesi: {product.discountRate}%</span>
            </div>
          </div>
        ))}
      </Carousel>

      <div className="order-action">
        <button className="order-action-button">Etiket Yazdır</button>
        <button className="order-action-button">Sipariş Yazdır</button>
      </div>
    </div>
  );
};

export default ProductSlider;
