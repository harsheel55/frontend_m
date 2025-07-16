import React from 'react';

interface ProductCardProps {
  image: string;
  label: string;
  rotate?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, label, rotate }) => {
  return (
    <div className="flex flex-col items-center w-[160px]">
      <img src={image} alt={label} className="h-[200px] object-contain" />
      <p className={`text-white text-center font-bold mt-2 text-[16px] ${rotate ? rotate : ''}`}>
        {label}
      </p>
    </div>
  );
};

export default ProductCard;
