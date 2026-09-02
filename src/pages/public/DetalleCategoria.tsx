import React from 'react';

interface CategoriaCardProps {
  nombre: string;
  imagenUrl: string;
}

export const CategoriaCard: React.FC<CategoriaCardProps> = ({ nombre, imagenUrl }) => {
  return (
    <div className="categoria-card">
      <div className="categoria-card-image-wrapper">
        <img src={imagenUrl} alt={nombre} className="categoria-card-image" />
      </div>
      <div className="categoria-card-footer">
        <span className="categoria-card-title">{nombre}</span>
      </div>
    </div>
  );
};
