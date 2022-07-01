import React, { useState } from "react";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { StarIcon } from "@heroicons/react/solid";

function Product({ id, title, price, description, category, image }) {
  /* Genrating random stars - ex btr mth exists */
  const [rating] = useState(Math.floor(Math.random() * 5 + 1));

  var fields = new Array();
  for (let i = 1; i <= rating; i++) {
    fields.push(<StarIcon className="h-5 text-yellow-500" />);
  }
  //  genrating ends

  // has prime membership rnadom 50-50
  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3 ">{title}</h4>
      <div className="flex">{fields}</div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="GBP"></Currency>
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw"></img>
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
}

export default Product;
