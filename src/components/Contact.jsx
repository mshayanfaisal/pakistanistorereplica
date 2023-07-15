function Contact() {
  return (
    <div>
      <h4>Hello!</h4>
      <p>
        We are here to help! Just keep this in mind, we do not sell the
        products. We may not be able to respond for product related queries.
      </p>
      <hr className="hr" />
      <form>
        <div className="col">
          <label htmlFor="name" className="my-2">
            Your Name
          </label>
          <input className="form-control" />
        </div>
        <div className="row contact-us-form">
          <div className="col">
            <label htmlFor="subject" className="my-2">
              Subject
            </label>
            <input className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="" className="my-2">
              Your Email Address
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1" className="my-2">
            Message
          </label>
          <textarea
            className="form-control mb-3"
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary apply-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
