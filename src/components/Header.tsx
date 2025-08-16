import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { items } = useCart();
  const location = useLocation();
  
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  console.log('Header rendered with cart items:', totalItems);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Gatitos Felices</h1>
              <p className="text-sm text-gray-600">Tu compañero perfecto te espera</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-gray-700 hover:text-purple-600 transition-colors font-medium ${
                location.pathname === '/' ? 'text-purple-600 border-b-2 border-purple-600' : ''
              }`}
            >
              Inicio
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-700 hover:text-purple-600 transition-colors font-medium ${
                location.pathname === '/about' ? 'text-purple-600 border-b-2 border-purple-600' : ''
              }`}
            >
              Sobre Nosotros
            </Link>
            <a href="#contacto" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Contacto
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-purple-600 cursor-pointer transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;