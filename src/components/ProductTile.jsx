import React from "react";

const ProductTile = ({ product }) => {
  return (
    <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
      <div className="h-[180px]">
        <img src={product?.image} alt={product?.title} />
      </div>
    </div>
  );
};

export default ProductTile;
