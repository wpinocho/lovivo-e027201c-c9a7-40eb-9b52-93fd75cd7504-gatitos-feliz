export interface Kitten {
  id: number;
  name: string;
  breed: string;
  age: string;
  gender: string;
  price: number;
  image: string;
  description: string;
  available: boolean;
  vaccinated: boolean;
  personality: string[];
}

export const kittens: Kitten[] = [
  {
    id: 1,
    name: "Luna",
    breed: "Persa",
    age: "3 meses",
    gender: "Hembra",
    price: 800,
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop",
    description: "Luna es una gatita persa muy cariñosa y tranquila. Le encanta que la mimen y es perfecta para familias con niños.",
    available: true,
    vaccinated: true,
    personality: ["Cariñosa", "Tranquila", "Juguetona"]
  },
  {
    id: 2,
    name: "Simba",
    breed: "Maine Coon",
    age: "4 meses",
    gender: "Macho",
    price: 1200,
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=300&fit=crop",
    description: "Simba es un Maine Coon majestuoso con un carácter noble. Es muy inteligente y le gusta explorar.",
    available: true,
    vaccinated: true,
    personality: ["Inteligente", "Explorador", "Noble"]
  },
  {
    id: 3,
    name: "Mimi",
    breed: "Siamés",
    age: "2 meses",
    gender: "Hembra",
    price: 600,
    image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=400&h=300&fit=crop",
    description: "Mimi es una siamesa muy vocal y sociable. Le encanta la compañía humana y es muy expresiva.",
    available: true,
    vaccinated: true,
    personality: ["Vocal", "Sociable", "Expresiva"]
  },
  {
    id: 4,
    name: "Garfield",
    breed: "Británico",
    age: "5 meses",
    gender: "Macho",
    price: 900,
    image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=300&fit=crop",
    description: "Garfield es un gato británico de pelo corto muy relajado. Le gusta dormir y comer, perfecto para hogares tranquilos.",
    available: true,
    vaccinated: true,
    personality: ["Relajado", "Tranquilo", "Dormilón"]
  },
  {
    id: 5,
    name: "Nala",
    breed: "Bengalí",
    age: "3 meses",
    gender: "Hembra",
    price: 1500,
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&h=300&fit=crop",
    description: "Nala es una bengalí muy activa y atlética. Le encanta trepar y jugar, ideal para familias activas.",
    available: true,
    vaccinated: true,
    personality: ["Activa", "Atlética", "Trepadora"]
  },
  {
    id: 6,
    name: "Oliver",
    breed: "Ragdoll",
    age: "4 meses",
    gender: "Macho",
    price: 1100,
    image: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=400&h=300&fit=crop",
    description: "Oliver es un Ragdoll muy dócil y cariñoso. Se deja manipular como un muñeco de trapo y es perfecto para niños.",
    available: true,
    vaccinated: true,
    personality: ["Dócil", "Cariñoso", "Paciente"]
  }
];