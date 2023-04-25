import React, { useEffect, useMemo, useState } from "react";

const Total = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState([]);

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const total = useMemo(() => {
    return products.reduce((result, product) => {
      console.log("Tính toán lại...");
      return result + product.price;
    }, 0);
  }, [products]);
  return (
    <>
      <h3>Total with useMemo</h3>
      <div className="form__group">
        <input
          type="input"
          value={name}
          onChange={handleChangeName}
          className="form__field"
          placeholder="Name"
          required
        />
        <br />
        <input
          type="number"
          value={price}
          onChange={handleChangePrice}
          className="form__field"
          placeholder="Price"
          required
        />
        <br />
        <button onClick={handleSubmit} style={{ margin: 20 }}>
          Add
        </button>
        Total: {total}
        <ul>
          {products.map((product, index) => {
            return (
              <li key={index}>
                {product.name} - {product.price}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Total;
