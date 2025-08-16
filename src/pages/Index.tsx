import React, { useState, useMemo } from 'react';
import { CartProvider } from '../contexts/CartContext';
import Header from '../components/Header';
import Filters from '../components/Filters';
import KittenCard from '../components/KittenCard';
import Cart from '../components/Cart';
import { kittens } from '../data/kittens';

const Index = () => {
  const [selectedBreed, setSelectedBreed] = useState('Todos');
  const [selectedGender, setSelectedGender] = useState('Todos');
  const [selectedAge, setSelectedAge] = useState('Todos');

  console.log('Index component rendered with filters:', { selectedBreed, selectedGender, selectedAge });

  const filteredKittens = useMemo(() => {
    console.log('Filtering kittens with criteria:', { selectedBreed, selectedGender, selectedAge });
    
    return kittens.filter(kitten => {
      const breedMatch = selectedBreed === 'Todos' || kitten.breed === selectedBreed;
      const genderMatch = selectedGender === 'Todos' || kitten.gender === selectedGender;
      const ageMatch = selectedAge === 'Todos' || kitten.age === selectedAge;
      
      return breedMatch && genderMatch && ageMatch && kitten.available;
    });
  }, [selectedBreed, selectedGender, selectedAge]);

  console.log('Filtered kittens count:', filteredKittens.length);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <Header />
        
        <div className="container mx-auto px-4 pb-8">
          <Filters
            selectedBreed={selectedBreed}
            selectedGender={selectedGender}
            selectedAge={selectedAge}
            onBreedChange={setSelectedBreed}
            onGenderChange={setSelectedGender}
            onAgeChange={setSelectedAge}
          />
          
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Gatitos Disponibles ({filteredKittens.length})
            </h2>
            <p className="text-gray-600">
              Encuentra tu compañero perfecto entre nuestros adorables gatitos
            </p>
          </div>
          
          {filteredKittens.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">😿</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No hay gatitos disponibles
              </h3>
              <p className="text-gray-500">
                Intenta cambiar los filtros para ver más opciones
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredKittens.map((kitten) => (
                <KittenCard key={kitten.id} kitten={kitten} />
              ))}
            </div>
          )}
        </div>
        
        <Cart />
      </div>
    </CartProvider>
  );
};

export default Index;