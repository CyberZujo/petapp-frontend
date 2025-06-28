// src/components/PetList.tsx
import React from 'react';

export interface Pet {
  id: number;
  name: string;
  breed: string;
  imgUrl: string;
  description: string;
}

interface PetListProps {
  pets: Pet[];
}

export const PetList: React.FC<PetListProps> = ({ pets }) => {
  if (!pets.length) {
    return <p className="text-center text-gray-500">No pets found.</p>;
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4">
      {pets.map(pet => (
        <div
          key={pet.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <img
            src={pet.imgUrl}
            alt={pet.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">{pet.name}</h3>
            <p className="text-sm text-gray-600">{pet.breed}</p>
            <p className="mt-2 text-gray-700">{pet.description}</p>
            <button
              className="mt-4 w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PetList;
