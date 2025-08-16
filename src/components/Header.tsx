import React from 'react';
import { Heart, Star, Award } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 mb-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            🐱 Gatitos Adorables
          </h1>
          <p className="text-xl md:text-2xl mb-6 opacity-90">
            Encuentra tu compañero felino perfecto
          </p>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Todos nuestros gatitos están cuidados con amor y buscan un hogar lleno de cariño
          </p>
        </div>
        
        <div className="flex justify-center space-x-8 mt-8">
          <div className="flex items-center space-x-2">
            <Heart className="w-6 h-6" />
            <span>Criados con amor</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-6 h-6" />
            <span>Calidad garantizada</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-6 h-6" />
            <span>Certificados</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;