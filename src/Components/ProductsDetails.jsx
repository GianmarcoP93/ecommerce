import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "./Button";
import { useEffect } from "react";

export const ProductsDetails = () => {
  const { title } = useParams();

  const decodedTitle = decodeURIComponent(title);

  const products = useSelector((state) => state.products.value.products);

  const product = products
    ? products.find((p) => p.title === decodedTitle)
    : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(decodedTitle);

  console.log(product);
  if (!product) {
    return (
      <div className=" min-h-[100vh] flex justify-center flex-col items-center">
        Prodotto non trovato
      </div>
    );
  }

  return (
    <div className="flex w-[60%] mx-auto justify-around">
      <div className="my-24">
        <img
          src={product.images[0]}
          alt="img product"
          className="w-full  object-contain mix-blend-darken  max-h-80  "
        />
      </div>
      <div className="flex  flex-col my-24 justify-around">
        <div>
          <h1 className=" text-5xl font-bold mb-10 capitalize flex justify-center">
            {product.title}
          </h1>
          <p className="break-words max-w-[500px]">{product.description}</p>
        </div>

        <div className="flex justify-between ">
          <span className=" ">
            Nuovo:&nbsp;&nbsp;
            <span className="text-3xl ">{product.price} </span>{" "}
            <span className="text-base align-top self-start">,00 €</span>
          </span>
          <Button product={product} text="Aggiungi al carrello" />
        </div>
      </div>
      {/* ulteriori dettagli del prodotto */}
    </div>
  );
};
