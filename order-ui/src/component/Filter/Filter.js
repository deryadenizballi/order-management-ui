import React, { useState } from "react";
import "./Filter.css";
import { Dropdown, Menu } from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";

const Filter = () => {
  const [isVisible, setIsVisible] = useState(true);

  const menu = (
    <Menu className="custom-dropdown-menu">
      <Menu.Item key="1">Seçenek 1</Menu.Item>
      <Menu.Item key="2">Seçenek 2</Menu.Item>
      <Menu.Item key="3">Seçenek 3</Menu.Item>
    </Menu>
  );

  const toggleFilterBox = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="filter">
      <h1>
        Siparişler
        <button onClick={toggleFilterBox} className="toggle-button">
          {isVisible ? "Filtreleri Gizle" : "Filtreleri Göster"}
        </button>
      </h1>

      <div className={`filter-box ${isVisible ? "show" : "hide"}`}>
        <div className="filter-item">
          <input type="text" placeholder="Ürün Ara" />
          <button className="search-button">
            <SearchOutlined />
          </button>
        </div>
        <div className="filter-item">
          <Dropdown overlay={menu}>
            <button className="custom-dropdown-trigger">
              Sipariş Filtresi <DownOutlined />
            </button>
          </Dropdown>
        </div>

        <div className="filter-item">
          <input type="text" placeholder="Başlangıç Tarihi" />
          <button className="search-button">
            <SearchOutlined />
          </button>
        </div>
        <div className="filter-item">
          <input type="text" placeholder="Sevkiyat Yöntemi" />
          <button className="search-button">
            <SearchOutlined />
          </button>
        </div>

        <div className="filter-item">
          <input type="text" placeholder="Ürün Ara" />
          <button className="search-button">
            <SearchOutlined />
          </button>
        </div>
        <div className="filter-item">
          <input type="text" placeholder="Sipariş Kodu" />
          <button className="search-button">
            <SearchOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
