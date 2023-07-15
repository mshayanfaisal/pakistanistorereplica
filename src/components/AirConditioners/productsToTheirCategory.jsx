import ProductList from "../Body/ProductList";
import { useParams } from "react-router-dom";
import {
  airConditioners,
  LedTv,
  droneCameras,
  DslrCameras,
  Processors,
} from "../Data";
import AirConditionTitle from "./airConditionTitle";
import AirConditionCategories from "./airConditionCategories";
import AirConditionFilter from "./airConditionFilter";
import Pagination from "./Pagination";
import AirConditionerPricingSheet from "./airConditionerPricingSheet";
import ProductsPricing from "../productsPricing";

function ProductsToTheirCategory() {
  const products = [
    ...airConditioners,
    ...LedTv,
    ...droneCameras,
    ...DslrCameras,
    ...Processors,
  ];
  const { category } = useParams();

  const filterArray = products.filter(
    (product) => product.category == category
  );

  return (
    <>
      <AirConditionTitle
        title="Air Conditioners Price in Pakistan - Latest Jul, 2023 Prices"
        text="Air Conditioners prices start from Rs. 22,499 in Pakistan. Air Conditioners prices have gone down 1% online in the last 30 days. Common products available in Pakistan are Dawlance Aura 15 Inverter - 1 Ton, Haier HSU-12CFCM Turbo Cool Non-Inverter AC - 1 Ton, Gree GS-12FITH4WB Inverter - 1 Ton, and Haier HSU-12LFCB Cool Only DC Inverter AC - 1 Ton."
      />
      <AirConditionCategories />
      <AirConditionFilter />

      <div className="row mt-3">
        <ProductList products={filterArray} />
      </div>
      <Pagination />
      <AirConditionerPricingSheet />
      <ProductsPricing />
      <p>
        PakistaniStores.com serves as a directory/search engine to locate
        resources on the internet. The company names, product names, product
        images, and service names on this page are used for identification
        purposes only. This does not imply any kind of endorsement or
        affiliation.
      </p>
    </>
  );
}

export default ProductsToTheirCategory;
