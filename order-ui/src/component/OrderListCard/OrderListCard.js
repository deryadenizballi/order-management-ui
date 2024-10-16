import React, { useState } from "react";
import "./OrderListCard.css";
import { Steps, Checkbox } from "antd";
import ProductSlider from "../ProductSlider/ProductSlider";
const { Step } = Steps;

const OrderListCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleDiv = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="order-list">
      <div class="order-header">
        <div class="order-item">
          <Checkbox> Kanal </Checkbox>
        </div>
        <div class="order-item">Sipariş Numarası</div>
        <div class="order-item">Ödeme Durumu</div>
        <div class="order-item">Alıcı</div>
        <div class="order-item">Tarih</div>
        <div class="order-item">Sipariş Durumu</div>
      </div>
      <div class="order-title">
        <div class="order-item">
          <Checkbox> Trendyol </Checkbox>
        </div>
        <div class="order-item">#1471071922</div>
        <div class="order-item">Ödendi</div>
        <div class="order-item">Derya Deniz</div>
        <div class="order-item">11.10.2024 16:34</div>
        <div class="order-item">
          <div class="order-step">
            <Steps current={2}>
              <Step />
              <Step />
              <Step />
              <Step />
            </Steps>
          </div>
        </div>
      </div>
      <div class="order-content">
        <ProductSlider />
      </div>
    </div>
  );
};

export default OrderListCard;
