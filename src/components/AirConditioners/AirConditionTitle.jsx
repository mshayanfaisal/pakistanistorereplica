import PropTypes from "prop-types";

const AirConditionTitle = ({ title, text }) => {
  return (
    <div>
      <h5>{title}</h5> 
      <p>{text}</p>
    </div>
  );
};

export default AirConditionTitle;

AirConditionTitle.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
