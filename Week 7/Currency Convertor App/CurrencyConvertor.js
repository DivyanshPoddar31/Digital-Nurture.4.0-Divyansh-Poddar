import React, { useState } from "react";

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const euroValue = parseFloat(rupees) / 90; // Assume 1 Euro = ₹90
    setEuro(euroValue.toFixed(2));
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>💱 Currency Convertor</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Indian Rupees:
          <input
            type="number"
            value={rupees}
            onChange={(e) => setRupees(e.target.value)}
            required
          />
        </label>
        <button type="submit">Convert</button>
      </form>
      {euro && <p>Converted Euro: €{euro}</p>}
    </div>
  );
};

export default CurrencyConvertor;
