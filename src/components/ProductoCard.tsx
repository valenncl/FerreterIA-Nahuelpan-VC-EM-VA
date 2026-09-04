import React from 'react';

interface ProductoCardProps {
  nombre: string;
  precio?: string;
  disponible: boolean;
  imagenUrl: string;
}

export const ProductoCard: React.FC<ProductoCardProps> = ({
  nombre,
  precio,
  disponible,
  imagenUrl,
}) => {
  return (
    <div className="border-2 border-gray-400 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="w-full h-36 overflow-hidden">
        <img
          src={imagenUrl}
          alt={nombre}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3 bg-white flex flex-col gap-1.5 items-start">
        <span className="font-bold text-nahuelpan-black text-sm block line-clamp-1">
          {nombre}
        </span>
        {precio && (
          <span className="text-nahuelpan-red font-extrabold text-sm">
            {precio}
          </span>
        )}
        {disponible ? (
          <span className="border border-green-500 text-green-500 text-[11px] px-2 py-0.5 rounded-sm font-medium">
            Disponible
          </span>
        ) : (
          <span className="border border-red-600 text-red-600 text-[11px] px-2 py-0.5 rounded-sm font-medium">
            No disponible
          </span>
        )}
      </div>
    </div>
  );
};
