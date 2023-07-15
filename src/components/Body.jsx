import Carousel from "./Body/Carousel";
import Headings from "./Body/Headings";
import ProductList from "./Body/ProductList";
import SubHeadings from "./Body/SubHeadings";
import { LedTv } from "./Data";
import { airConditioners } from "./Data";
import { droneCameras } from "./Data";
import { DslrCameras } from "./Data";
import { Processors } from "./Data";

function Body() {
  return (
    <>
      <Carousel />
      <Headings title="Home Appliances" />
      <SubHeadings Subtitle="Led TVs" category="led-tv" />
      <ProductList products={LedTv} />
      <SubHeadings Subtitle="Air Conditioners" category="air-conditioners" />
      <ProductList products={airConditioners} />
      <Headings title="Cameras" />
      <SubHeadings Subtitle="Drone Cameras" category="drone-cameras" />
      <ProductList products={droneCameras} />
      <SubHeadings Subtitle="DSLR Cameras" category="dslr-cameras" />
      <ProductList products={DslrCameras} />
      <Headings title="Computer & Laptop" />
      <SubHeadings Subtitle="Processors" category="processors" />
      <ProductList products={Processors} />
      <p className="mt-2 pakistani-para">
        Pakistani Stores is a shopping engine that helps users make the best
        buying decisions. We research millions of products and skim through
        hundreds of retailers so you dont have to put in the effort of finding
        the best deals and prices.
      </p>
    </>
  );
}

export default Body;
