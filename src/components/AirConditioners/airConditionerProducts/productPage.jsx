import { useParams } from "react-router-dom";
import {
  airConditioners,
  LedTv,
  droneCameras,
  DslrCameras,
  Processors,
} from "../../Data";
import PriceSummary from "../../priceSummary";
import ProductPageForm from "../../productPageForm";
import RelatedProducts from "../../relatedProducts";

function ProductPage() {
  const { id } = useParams();
  const products = [
    ...airConditioners,
    ...LedTv,
    ...droneCameras,
    ...DslrCameras,
    ...Processors,
  ];
  const product = products.find((item) => item.description == id);

  let relatedProducts = [];
  switch (product.category) {
    case "air-conditioners":
      relatedProducts = airConditioners.slice(0, 4);
      break;
    case "led-tv":
      relatedProducts = LedTv.slice(0, 4);
      break;
    case "drone-cameras":
      relatedProducts = droneCameras.slice(0, 4);
      break;
    case "dslr-cameras":
      relatedProducts = DslrCameras.slice(0, 4);
      break;
    case "processors":
      relatedProducts = Processors.slice(0, 4);
      break;
    default:
      relatedProducts = [];
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img
            src={product.image}
            alt={product.name}
            className="img-thumbnail img-fluid"
          />
        </div>
        <div className="col-md-8">
          <div className="d-flex align-items-center mt-3">
            <h5 className="product-page-title">{product.description}</h5>
            <h4 className="product-page-price">Rs. {product.price}</h4>
          </div>
          <div>
            <p>
              The Lowest price of Dawlance Aura 15 Inverter - 1 Ton in Pakistan
              is Rs. 22,499, and the estimated average price is Rs. 87,742.
              Previously the price was Rs. 85,000 in April, approximately a 278%
              decrease. Latest Jul 2023 price from tracked on major eCommerce
              stores all across Pakistan.
            </p>
            <p>
              Dawlance Air Conditioners prices have gone up 1% in the last 30
              days. Dawlance Aura 15 Inverter - 1 Ton is available at very
              limited stores online.
            </p>
            <hr className="hr" />
            <div>
              <span className="badge text-bg-light p-3 my-badges mx-2 my-2">
                Capacity: 1 Ton
              </span>
              <span className="badge text-bg-light p-3 my-badges mx-2">
                Inverter or Fixed: Inverter AC
              </span>
              <span className="badge text-bg-light p-3 my-badges mx-2">
                Energy Saving: Yes
              </span>
              <span className="badge text-bg-light p-3 my-badges mx-2">
                Room Size: Up to 120 Square Feet
              </span>
              <span className="badge text-bg-light p-3 my-badges mx-2">
                Wi-fi: No
              </span>
              <span className="badge text-bg-light p-3 my-badges mx-2">
                BTU (per hour): 12000 BTUs/hour
              </span>
            </div>
            <hr className="hr" />
            <p>
              The Aura 15 Inverter - 1 Ton AC from Dawlance is an economical,
              powerful, and reliable air conditioner for the upcoming summers
              that is based on Dawlances own Typhoon Air tech with an efficient
              inverter inside.
            </p>
          </div>
        </div>
        <h4 className="mt-4">{product.description} Price in Pakistan</h4>
        <p>
          The prices are collected from the best online stores in Pakistan like
          Daraz.pk, Shopperspk.com - updated Jul 2023.
        </p>
        <PriceSummary />
        <ProductPageForm />
        <RelatedProducts relatedProducts={relatedProducts} />
      </div>
    </div>
  );
}

export default ProductPage;
