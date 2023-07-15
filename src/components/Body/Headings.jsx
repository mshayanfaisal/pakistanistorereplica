import PropTypes from "prop-types";

const Headings = ({ title }) => {
  return (
    <div className="headings">
      <h3 className="p-3 mb-2 bg-light text-dark mx-2 ">{title}</h3>
    </div>
  );
};

export default Headings;

Headings.propTypes = {
  title: PropTypes.string,
};
