import React from 'react';
import { Heart, Shield, Users, Award, MapPin, Phone, Mail } from 'lucide-react';
import Header from '../components/Header';

const About = () => {
  console.log('About page rendered');

  const values = [
    {
      icon: Heart,
      title: 'Amor por los Felinos',
      description: 'Cada gatito recibe amor, cuidado y atención personalizada desde el primer día.'
    },
    {
      icon: Shield,
      title: 'Salud Garantizada',
      description: 'Todos nuestros gatitos están vacunados, desparasitados y con certificado veterinario.'
    },
    {
      icon: Users,
      title: 'Familias Felices',
      description: 'Nos aseguramos de que cada gatito encuentre el hogar perfecto para toda la vida.'
    },
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Más de 10 años de experiencia criando gatitos sanos y felices.'
    }
  ];

  const team = [
    {
      name: 'María González',
      role: 'Fundadora y Veterinaria',
      description: 'Con más de 15 años de experiencia en medicina veterinaria, María fundó Gatitos Felices con la misión de conectar familias con sus compañeros perfectos.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Especialista en Comportamiento',
      description: 'Carlos se encarga de la socialización y entrenamiento de nuestros gatitos, asegurando que estén listos para sus nuevos hogares.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Ana Martínez',
      role: 'Coordinadora de Adopciones',
      description: 'Ana ayuda a las familias a encontrar el gatito perfecto y los acompaña durante todo el proceso de adopción.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Sobre Nosotros
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En Gatitos Felices, nos dedicamos a criar y cuidar gatitos con amor, 
            conectando familias con sus compañeros felinos perfectos desde 2014.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Nuestra Misión
              </h2>
              <p className="text-gray-600 mb-4">
                Creemos que cada gatito merece un hogar lleno de amor y cada familia 
                merece la alegría que solo un compañero felino puede brindar.
              </p>
              <p className="text-gray-600">
                Nos especializamos en criar gatitos sanos, sociables y felices, 
                proporcionando a las familias no solo una mascota, sino un miembro 
                más de la familia que traerá años de compañía y alegría.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&h=400&fit=crop" 
                alt="Gatito jugando"
                className="rounded-xl shadow-md w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Nuestro Equipo
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 mb-16 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">
            Nuestros Logros
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-purple-100">Gatitos Adoptados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-purple-100">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-purple-100">Razas Disponibles</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-purple-100">Familias Satisfechas</div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Contáctanos
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Ubicación</h3>
              <p className="text-gray-600">
                Av. Los Gatitos 123<br />
                Ciudad Felina, CF 12345
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Teléfono</h3>
              <p className="text-gray-600">
                +1 (555) 123-4567<br />
                Lun - Sáb: 9:00 - 18:00
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">
                info@gatitosfelices.com<br />
                adopciones@gatitosfelices.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;