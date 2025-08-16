import React from 'react';
import { Filter } from 'lucide-react';

interface FiltersProps {
  selectedBreed: string;
  selectedGender: string;
  selectedAge: string;
  onBreedChange: (breed: string) => void;
  onGenderChange: (gender: string) => void;
  onAgeChange: (age: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  selectedBreed,
  selectedGender,
  selectedAge,
  onBreedChange,
  onGenderChange,
  onAgeChange
}) => {
  const breeds = ['Todos', 'Persa', 'Maine Coon', 'Siamés', 'Británico de pelo corto', 'Ragdoll', 'Bengalí'];
  const genders = ['Todos', 'Macho', 'Hembra'];
  const ages = ['Todos', '2 meses', '3 meses', '4 meses', '5 meses'];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
      <div className="flex items-center mb-4">
        <Filter className="w-5 h-5 text-purple-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-800">Filtros</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Raza
          </label>
          <select
            value={selectedBreed}
            onChange={(e) => onBreedChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {breeds.map(breed => (
              <option key={breed} value={breed}>{breed}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Género
          </label>
          <select
            value={selectedGender}
            onChange={(e) => onGenderChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {genders.map(gender => (
              <option key={gender} value={gender}>{gender}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Edad
          </label>
          <select
            value={selectedAge}
            onChange={(e) => onAgeChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {ages.map(age => (
              <option key={age} value={age}>{age}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;