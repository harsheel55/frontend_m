import React from 'react';

interface ProductCardProps {
  image: string;
  label: string;
  rotate?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, label, rotate }) => {
  return (
    <div
      className={`
        group flex flex-col items-center justify-start
        w-[180px] h-[320px] p-4 
        bg-white/5 backdrop-blur-sm rounded-xl 
        transition-all duration-300 ease-in-out
        hover:bg-white/10 hover:-translate-y-2 hover:scale-105
        ${rotate || ''} 
      `}
    >
      <div className="h-[200px] flex items-center justify-center">
        
        <img
          src={image}
          alt={label}
          className="max-h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="flex-grow flex items-center justify-center pt-4">
        <p className="text-white text-center font-bold text-base">
          {label}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;