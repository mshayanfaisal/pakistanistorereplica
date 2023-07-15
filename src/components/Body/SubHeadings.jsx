// import PropTypes from "prop-types";
// import { NavLink } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import {
//   airConditioners,
//   LedTv,
//   droneCameras,
//   DslrCameras,
//   Processors,
// } from "../Data";
// import ProductList from "./ProductList";

// const SubHeadings = ({ Subtitle }) => {
//   const products = [
//     ...airConditioners,
//     ...LedTv,
//     ...droneCameras,
//     ...DslrCameras,
//     ...Processors,
//   ];
//   const { category } = useParams();

//   const filterArray = products.filter(
//     (product) => product.category == category
//   );
//   console.log("filterarray", filterArray);
//   return (
//     <div className="d-flex justify-content-between p-3">
//       <h5 className="my-subheading mx-2">{Subtitle}</h5>
//       <NavLink to="/:category">
//         <button className="my-btn">View All</button>
//         <ProductList products={filterArray} />
//       </NavLink>
//     </div>
//   );
// };

// export default SubHeadings;

// SubHeadings.propTypes = {
//   Subtitle: PropTypes.string,
// };

import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import {
  airConditioners,
  LedTv,
  droneCameras,
  DslrCameras,
  Processors,
} from "../Data";

const SubHeadings = ({ Subtitle, category }) => {
  const products = [
    ...airConditioners,
    ...LedTv,
    ...droneCameras,
    ...DslrCameras,
    ...Processors,
  ];

  return (
    <div className="d-flex justify-content-between p-3">
      <h5 className="my-subheading mx-2">{Subtitle}</h5>
      <NavLink to={`/${category}`} className="my-btn">
        View All
      </NavLink>
    </div>
  );
};

export default SubHeadings;

SubHeadings.propTypes = {
  Subtitle: PropTypes.string,
  category: PropTypes.string,
};
