import React, { useEffect, useState } from "react";
import "./Home.css";
const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const productsget = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setItems(data);
    };
    productsget();
  }, []);
  return (
    <div>
      <div className="products">
        {" "}
        {items.map((item) => {
          const { title, image, description, price } = item;

          return (
            <div className="product">
              <h3>{title}</h3>
              <img src={image} alt="" width="300px" height="300px" />
              <h4>${price}</h4>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
