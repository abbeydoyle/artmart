// imports and dependencies
import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ _id, image, name, artistName }) {
  return (
    <div className="product-item group mb-2 break-after-auto nosplit">
      <Link to={`/products/${_id}`}>
        <div className="product-image md:w-full mb-2">
          <img src={`${image}`} alt={name} className="cursor-zoom-in border-solid border-8 border-[#56280e] border-opacity-90 hover:border-opacity-100 shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:shadow-[0_4px_4px_rgba(0,0,0,0.75)]"/>
        </div>
        <div className="product-info invisible group-hover:visible text-center">
          <h2 className="product-name font-bold">{name}</h2>
          <p className="product-artist">{artistName}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;