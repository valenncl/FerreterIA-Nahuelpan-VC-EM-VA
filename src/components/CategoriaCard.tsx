import React from 'react';

interface CategoriaCardProps {
  nombre: string;
  imagenUrl: string;
}

export const CategoriaCard: React.FC<CategoriaCardProps> = ({ nombre, imagenUrl }) => {
  return (
    <div className="border border-gray-300 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="w-full h-36 sm:h-40 overflow-hidden">
        <img 
          src={imagenUrl} 
          alt={nombre} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="p-3 bg-white">
        <span className="font-bold text-nahuelpan-black text-sm block">
          {nombre}
        </span>
      </div>
    </div>
  );
};
