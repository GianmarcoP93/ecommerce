import { useState } from "react";
import { useFetchApi } from "../fetch";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export const Cards = ({ products = [], searchQuery }) => {
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const { isLoading, error } = useFetchApi();

  if (isLoading) {
    return (
      <div className=" min-h-[100vh] flex justify-center flex-col items-center">
        <img src="loading.gif" alt="" className="mix-blend-darken " />
      </div>
    );
  }

  if (error) {
    return (
      <div className=" min-h-[100vh] flex justify-center flex-col items-center">
        Errore nel caricamento dei dati.
      </div>
    );
  }

  console.log(products);

  return (
    <>
      <div className="flex max-w-full flex-wrap p-20 gap-10 justify-center  ">
        {products.length > 1 ? (
          products.map((product) => {
            return (
              <Link
                to={`/product/${encodeURIComponent(product.title)}`}
                key={product.id}
                className=" md:basis-1/3 lg:basis-1/4 xl:basis-1/5 border border-gray-400 rounded-md cursor-pointer bg-gray-100 hover:bg-gray-200 "
              >
                <div
                  onMouseEnter={() => setHoveredProductId(product.id)}
                  onMouseLeave={() => setHoveredProductId(null)}
                >
                  <div>
                    <h3
                      className={`text-lg pl-3 font-bold pt-2${
                        hoveredProductId === product.id
                          ? "text-yellow-500 pt-2"
                          : ""
                      }`}
                    >
                      {product.title}
                    </h3>
                  </div>
                  <div className="w-48 h-64 overflow-hidden flex mx-[auto] ">
                    <img
                      src={
                        product.id == 3 ? product.images[0] : product.images[1]
                      }
                      alt="img products"
                      className="w-full  object-contain mix-blend-darken "
                    />
                  </div>

                  <p className=" text-3xl pl-3">
                    {product.price}
                    <span className="text-base align-top"> ,00 €</span>
                  </p>
                  <div className="flex justify-end p-3">
                    <Button
                      hoveredProductId={hoveredProductId}
                      product={product}
                      text="Aggiungi al carrello"
                    />
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <div className=" min-h-[40vh] flex justify-center flex-col items-center">
            <h3 className=" text-3xl font-bold">
              Utilizza un minor numero di parole chiave
            </h3>
            <p className="text-lg">
              Nessun risultato per "
              <span className=" font-bold">{searchQuery}</span>"
            </p>
          </div>
        )}
      </div>
    </>
  );
};
