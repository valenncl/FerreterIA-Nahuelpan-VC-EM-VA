import { Link } from 'react-router-dom';

interface CategoriaCardProps {
  id: string;
  nombre: string;
  imagenUrl: string;
}

export const CategoriaCard = ({ id, nombre, imagenUrl }: CategoriaCardProps) => {
  return (
    <Link to={`/categorias/${id}`} className="border border-gray-300 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
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
    </Link>
  );
};
