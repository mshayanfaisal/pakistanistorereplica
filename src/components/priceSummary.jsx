function PriceSummary() {
  const products = [
    "Date",
    "Mar 2020",
    "May 2020",
    "May 2020",
    "May 2020",
    "Jun 2020",
    "Jun 2020",
    "Aug 2020",
    "Sep 2020",
    "Sep 2020",
    "Oct 2020",
    "Oct 2020",
    "Jan 2021",
    "Jan 2021",
    "Jan 2021",
    "Jan 2021",
    "Feb 2021",
    "Feb 2021",
    "Feb 2021",
    "Feb 2021",
    "Mar 2021",
    "Mar 2021",
    "Mar 2021",
    "Apr 2021",
    "Apr 2021",
    "Apr 2021",
    "Apr 2021",
    "Apr 2021",
    "Apr 2021",
    "May 2021",
    "Jun 2021",
    "Jun 2021",
    "Jun 2021",
    "Jun 2021",
    "Jun 2021",
    "Jun 2021",
    "Jul 2021",
    "Oct 2021",
    "Oct 2021",
    "Feb 2022",
    "Mar 2022",
    "Apr 2022",
    "Apr 2022",
    "Jul 2023",
  ];

  const prices = [
    "Lowest Price",
    "61,053",
    "61,499",
    "61,053",
    "59,000",
    "61,053",
    "59,000",
    "61,053",
    "66,499",
    "64,000",
    "62,999",
    "66,499",
    "64,500",
    "66,000",
    "65,000",
    "63,699",
    "65,000",
    "63,699",
    "65,000",
    "64,199",
    "66,000",
    "65,999",
    "64,199",
    "64,500",
    "65,800",
    "67,500",
    "65,800",
    "67,499",
    "65,800",
    "67,600",
    "69,999",
    "67,600",
    "69,999",
    "67,600",
    "69,999",
    "67,600",
    "68,600",
    "72,499",
    "68,600",
    "75,000",
    "81,000",
    "85,900",
    "85,000",
    "22,499",
  ];

  return (
    <div>
      <h4 className="list-group-item">Price Changes</h4>
      <ul className="list-group list-group-flush">
        {products.map((product, index) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={index}
          >
            <span>{product}</span>
            <span>Rs. {prices[index]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PriceSummary;
