import { useState } from "react";
function ProductPageForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameValid(e.target.value.trim() !== "");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailValid(e.target.value.trim() !== "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-4">
      <h4>Comments</h4>
      <hr className="hr" />
      <form onSubmit={handleSubmit}>
        <div className="form-row d-flex">
          <div className="col-md-4 mb-3 name-field">
            <label htmlFor="validationServer01" className="mb-2">
              Name
            </label>
            <input
              type="text"
              className={`form-control ${nameValid ? "is-valid" : ""}`}
              id="validationServer01"
              value={name}
              onChange={handleNameChange}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationServer02" className="mb-2">
              Email (Will not be visible to public)
            </label>
            <input
              type="email"
              className={`form-control ${emailValid ? "is-valid" : ""}`}
              id="validationServer02"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>
        <div>
          <label className="mb-2 d-block">What do you think?</label>
          <textarea className="form-control" name="" id="" rows="5"></textarea>
        </div>

        <button className="btn btn-primary apply-button mt-4" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProductPageForm;
