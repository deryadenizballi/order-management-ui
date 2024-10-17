import React, { useState } from "react";
import "./OrderListCard.css";
import { Steps, Checkbox } from "antd";
import ProductSlider from "../ProductSlider/ProductSlider";
import Card from "../Card/Card";
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'; // Ant Design'dan simgeleri içe aktarıyoruz.

const { Step } = Steps;

const dummyOrder = {
  channel: "Trendyol",
  orderNumber: "#1471071922",
  paymentStatus: "Ödendi",
  recipient: "Derya Deniz",
  date: "11.10.2024 16:34",
  orderStatus: 2,
  products: [
    {
      name: "Giovane G. Designers Pantolon Denim",
      size: "37",
      quantity: 2,
      imageUrl:
        "https://shop.livasoft.com.tr/content/images/thumbs/e81/e8179a15-9d15-48fc-b91c-d9a303b2fe5f_giovane-g-designers-pantolon-denim_80.webp",
      stockCode: "GC0IP206851205445",
      barcode: "66585232825",
      hsn: "61075220",
      itemCode: "GC0IP20685120544",
      productGroup: "Pantolon",
      fit: "Regular",
      fabric: "Keten",
      color: "Krem",
      unitPrice: 23568,
      discountRate: 26,
    },
    {
      name: "Giovane G. Designers Ceket",
      size: "37",
      quantity: 2,
      imageUrl:
        "https://shop.livasoft.com.tr/content/images/thumbs/e81/e8179a15-9d15-48fc-b91c-d9a303b2fe5f_giovane-g-designers-pantolon-denim_80.webp",
      stockCode: "GC0IP206851205445",
      barcode: "66585232825",
      hsn: "61075220",
      itemCode: "GC0IP20685120544",
      productGroup: "Pantolon",
      fit: "Regular",
      fabric: "Keten",
      color: "Krem",
      unitPrice: 23568,
      discountRate: 26,
    },
  ],
  shipping: [
    {
      title: "Kargo Bilgileri",
      courier: "MNG Kargo",
      trackingNumber: "123456789",
      deliveryDate: "13.10.2024",
      status: "Teslim Edildi",
      item1:"Kargo Firması: ",
      item2:"Takip Numarası: ",
      item3:"Teslim Tarihi: ",
      item4:"Durum: ",
    },
    {
      title: "Müşteri Bilgileri",
      courier: "Derya Deniz",
      trackingNumber: "BALLI",
      deliveryDate: "Efendibey Mah. Affetevleri Sok. No: 5/2",
      status: "deryaballi@gmail.com",
 
      item1:"İsim  ",
      item2:" Soyisim ",
      item3:"Adres ",
      item4:"İletişim ",
   
    },
    {
      title: "Ödeme Bilgileri",
      courier: "47136.00 TL",
      trackingNumber: "28%",
      deliveryDate: "5%",
      status: "50₺",

      item1:"Toplam Tutar  ",
      item2:" İndirim ",
      item3:"10.10.2024 ",
      item4:" Gerekli",
    },
    {
      title: "Sevkiyat Bilgileri",
      courier: "MNG Kargo",
      trackingNumber: "235232825",
      deliveryDate: "5%",
      status: "50₺",

      item1:"Kargo Firması:  ",
      item2:"Takip Numarası: ",
      item3:"Teslim Tarihi:",
      item4:"GTS",
    },
  ],
};

const OrderListCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleDiv = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="order-list">
      <div className="order-header">
        <div className=" item-check">
          <Checkbox></Checkbox> 
        </div>
        <div className="order-item">
          Sipariş Numarası
        </div>
        <div className="order-item"> Kanal</div>
        <div className="order-item">Ödeme Durumu</div>
        <div className="order-item">Alıcı</div>
        <div className="order-item">Tarih</div>
        <div className="order-item">Sipariş Durumu</div>
        <div className="order-detail">Detay</div>
      </div>
      <div className="order-title">
        <div className="item-check">
         <Checkbox></Checkbox> 
        </div>
        <div className="order-list-item">
        <div className="order-item">
        {dummyOrder.orderNumber}
        </div>
        <div className="order-item">{dummyOrder.channel}</div>
        <div className="order-item">{dummyOrder.paymentStatus}</div>
        <div className="order-item">{dummyOrder.recipient}</div>
        <div className="order-item">{dummyOrder.date}</div>
        <div className="order-item">
          <div className="order-bag">
            Tamamlandı
          </div>
        </div>
        </div>
        <div className="order-detail">
          <button onClick={toggleDiv} className="toggle-button">
            {isVisible ? <MinusOutlined /> : <PlusOutlined />} 
          </button>
        </div>
      </div>
      <div className={`order-content ${isVisible ? 'show' : 'hide'}`}>
        <ProductSlider products={dummyOrder.products} />
        <div className="order-card">
          {dummyOrder.shipping.map((shippingInfo, index) => (
            <Card key={index} shipping={shippingInfo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderListCard;
