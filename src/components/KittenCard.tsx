import React from 'react';
import { Heart, ShoppingCart, Check } from 'lucide-react';
import { Kitten } from '../data/kittens';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

interface KittenCardProps {
  kitten: Kitten;
}

const KittenCard: React.FC<KittenCardProps> = ({ kitten }) => {
  const { addToCart } = useCart();

  console.log('KittenCard rendered for:', kitten.name);

  const handleAddToCart = () => {
    console.log('Adding kitten to cart:', kitten.name);
    addToCart(kitten);
    toast.success(`${kitten.name} agregado al carrito! 🐱`, {
      description: `${kitten.breed} - $${kitten.price}`,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={kitten.image} 
          alt={kitten.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3">
          <div className="bg-white rounded-full p-2 shadow-md">
            <Heart className="w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
          </div>
        </div>
        {kitten.vaccinated && (
          <div className="absolute top-3 left-3">
            <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
              <Check className="w-3 h-3 mr-1" />
              Vacunado
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{kitten.name}</h3>
          <span className="text-2xl font-bold text-purple-600">${kitten.price}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full mr-2">
            {kitten.breed}
          </span>
          <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full mr-2">
            {kitten.age}
          </span>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            {kitten.gender}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {kitten.description}
        </p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {kitten.personality.map((trait, index) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                {trait}
              </span>
            ))}
          </div>
        </div>
        
        <button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Adoptar</span>
        </button>
      </div>
    </div>
  );
};

export default KittenCard;