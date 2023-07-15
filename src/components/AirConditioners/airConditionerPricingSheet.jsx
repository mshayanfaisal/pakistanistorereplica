function AirConditionerPricingSheet() {
  const products = [
    "Model",
    "Dawlance Aura 15 Inverter - 1 Ton",
    "Haier HSU-12CFCM Turbo Cool Non-Inverter AC - 1 Ton",
    "Gree GS-12FITH4WB Inverter - 1 Ton",
    "Haier HSU-12LFCB Cool Only DC Inverter AC - 1 Ton",
    "Haier HSU-18CFCM Turbo Cool Non-Inverter AC- 1.5 Ton",
    "Dawlance Econo 15 Inverter - 1 Ton",
    "Kenwood KES-1239S eSupreme Inverter AC - 1 Ton",
    "Dawlance Elegance 15 Inverter - 1 Ton",
    "Dawlance Mega T Plus 15 Inverter AC- 1 Ton",
    "PEL Apex PINVO 18K Inverter AC - 1.5 Ton",
  ];

  const prices = [
    "Price",
    "Rs 22,499",
    "Rs 68,500",
    "Rs 77,899",
    "Rs 81,500",
    "Rs 85,000",
    "Rs 87,500",
    "Rs 88,000",
    "Rs 89,500",
    "Rs 94,999",
    "Rs 97,999",
  ];

  return (
    <div>
      <h4 className="list-group-item">Air Conditioners - Price Summary</h4>
      <ul className="list-group list-group-flush">
        {products.map((product, index) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={index}
          >
            <span className="pricing-sheet-title">{product}</span>
            <span className="pricing-sheet-price">{prices[index]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AirConditionerPricingSheet;
