import React from 'react';
import { Kitten } from '../types/kitten';
import { useCart } from '../contexts/CartContext';
import { Heart, ShoppingCart, Star } from 'lucide-react';

interface KittenCardProps {
  kitten: Kitten;
}

const KittenCard: React.FC<KittenCardProps> = ({ kitten }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    console.log('Adding to cart button clicked for:', kitten.name);
    addToCart(kitten);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={kitten.image} 
          alt={kitten.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2">
          <button className="bg-white/80 hover:bg-white p-2 rounded-full transition-colors">
            <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
          </button>
        </div>
        {kitten.vaccinated && (
          <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Vacunado
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800">{kitten.name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">4.8</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-1">Raza: {kitten.breed}</p>
        <p className="text-sm text-gray-600 mb-1">Edad: {kitten.age}</p>
        <p className="text-sm text-gray-600 mb-1">Color: {kitten.color}</p>
        <p className="text-sm text-gray-600 mb-3">Género: {kitten.gender}</p>
        
        <p className="text-sm text-gray-700 mb-4 line-clamp-2">{kitten.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-600">
            €{kitten.price}
          </div>
          <button
            onClick={handleAddToCart}
            disabled={!kitten.available}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
              kitten.available
                ? 'bg-purple-600 hover:bg-purple-700 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>{kitten.available ? 'Adoptar' : 'No disponible'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default KittenCard;