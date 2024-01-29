import { useSelector } from "react-redux";
import Carousel from "nuka-carousel";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export const ProductCarousel = () => {
  const visitedProducts = useSelector((state) => state.products.visited);

  console.log("prodotti visitati:", visitedProducts);

  const uniqueVisitedProducts = Array.from(
    new Set(visitedProducts.map((p) => p.id))
  ).map((id) => {
    return visitedProducts.find((p) => p.id === id);
  });

  return visitedProducts.length > 0 ? (
    <div className="border-y-[0.5px] my-4 p-4 border-gray-400">
      <div className="w-[60%] mx-auto">
        <div className="flex justify-center items-center">
          <h3 className="font-bold text-lg pb-4 text-gray-800">
            Prodotti visti di recente:
          </h3>
        </div>
        <Carousel
          autoplay
          autoplayInterval={2000}
          cellAlign="center"
          dragging
          wrapAround={true}
          withoutControls={true}
          slidesToShow={3}
          renderCenterLeftControls={() => null}
          renderCenterRightControls={() => null}
          cellSpacing={20}
          framePadding="0px 20px"
        >
          {uniqueVisitedProducts.map((product) => (
            <div key={product.id}>
              <Link to={`/product/${encodeURIComponent(product.title)}`}>
                <div className="md:basis-1/3 lg:basis-1/4 xl:basis-1/5 border border-gray-400 rounded-md cursor-pointer bg-gray-100 hover:bg-gray-200 mx-4">
                  <div>
                    <h3 className="text-lg pl-3 font-bold pt-2">
                      {product.title}
                    </h3>
                  </div>
                  <div className="w-32 h-52 overflow-hidden flex mx-[auto]">
                    <img
                      src={
                        product.id === 3 ? product.images[0] : product.images[1]
                      }
                      alt="img products"
                      className="w-full object-contain mix-blend-darken"
                    />
                  </div>
                  <p className="text-3xl pl-3">
                    {product.price}
                    <span className="text-base align-top"> ,00 €</span>
                  </p>
                  <div className="flex justify-end p-3">
                    <Button text="Aggiungi al carrello" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  ) : null;
};
