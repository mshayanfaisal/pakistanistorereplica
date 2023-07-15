import { useState } from "react";

function AirConditionFilter() {
  const [showModal, setShowModal] = useState(false);
  const [priceRange, setPriceRange] = useState([22499, 600600]);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePriceChange = (event) => {
    const minValue = parseInt(event.target.value);
    setPriceRange([minValue, priceRange[1]]);
  };

  return (
    <div className="btn mx-1-group mt-4 border">
      <a href="#" className="btn mx-1" onClick={handleShowModal}>
        Filter by
      </a>
      <a href="#" className="btn mx-1" onClick={handleShowModal}>
        Price
      </a>
      <a href="#" className="btn mx-1" onClick={handleShowModal}>
        Capacity
      </a>
      <a href="#" className="btn mx-1" onClick={handleShowModal}>
        Inverter Or Fixed
      </a>
      <a href="#" className="btn mx-1" onClick={handleShowModal}>
        Energy Saving
      </a>
      <a href="#" className="btn mx-1" onClick={handleShowModal}>
        Room Size
      </a>
      <a href="#" className="btn mx-1" onClick={handleShowModal}>
        Wi-fi
      </a>
      <a href="#" className="btn mx-1" onClick={handleShowModal}>
        Btu (per Hour)
      </a>

      {showModal && (
        <div className="modal" tabIndex="-1" style={{ display: "block" }}>
          <div className="modal-dialog modal-lg modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Filters</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <h5 className="text-start">Price</h5>
                  <input
                    type="range"
                    className="form-range"
                    id="priceRange"
                    min="22499"
                    max="600600"
                    step="10"
                    value={priceRange[0]}
                    onChange={handlePriceChange}
                  />
                  <div className="d-flex justify-content-between">
                    <span>{priceRange[0]}</span>
                    <span>{priceRange[1]}</span>
                  </div>
                </div>

                <div className="container text-start my-5">
                  <h5>Capacity</h5>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />
                    1.5 Ton
                  </p>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />1
                    Ton
                  </p>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />1
                    Ton
                  </p>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />
                    1.5 Ton
                  </p>

                  <h5>Inverter Or Fixed</h5>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />
                    Fixed AC
                  </p>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />
                    Inverter
                  </p>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />
                    Inverter AC
                  </p>
                  <h5>Energy Saving</h5>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />
                    No
                  </p>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />
                    Yes
                  </p>
                  <h5>Room Size</h5>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />
                    Up to 120 Square Feet
                  </p>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />
                    Up to 200 Square Feet
                  </p>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />
                    Up to 260 Square Feet
                  </p>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />
                    Up to 280 Square Feet
                  </p>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />
                    Up to 550 Square Feet
                  </p>
                  <h5>Wi-FI</h5>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />
                    No
                  </p>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />
                    Yes
                  </p>
                  <h5>Btu (per Hour)</h5>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />
                    12000 BTUs/ hour
                  </p>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />
                    12000 BTUs/ hour
                  </p>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />
                    12000 BTUs/ h
                  </p>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />
                    12000 BTUs/ hour
                  </p>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />
                    13000 BTUs/ hour
                  </p>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />
                    18000 BTUs/ hour
                  </p>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />
                    18000 BTUs/ hour
                  </p>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />
                    19000 BTUs/ hour
                  </p>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />
                    24000 BTUs/ hour
                  </p>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />
                    24000 BTUs/ hour
                  </p>
                  <h5>WIfi</h5>
                  <p>
                    <input className="mx-2" type="checkbox" name="" id="" />
                    No
                  </p>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success rounded-pill apply-button">
                  Apply changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AirConditionFilter;
