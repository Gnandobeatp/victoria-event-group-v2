import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Mail, Phone, MapPin, ArrowRight, MessageCircle, Calendar, DollarSign, Instagram, Facebook } from 'lucide-react';

export default function VictoriaEventGroup() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    tipoEvento: 'Boda',
    fecha: '',
    mensaje: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap';
    link.rel = 'preload';
    link.as = 'style';
    document.head.appendChild(link);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    setFormData({ nombre: '', telefono: '', tipoEvento: 'Boda', fecha: '', mensaje: '' });
    alert('¡Gracias! Nos pondremos en contacto pronto.');
  };

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-light tracking-widest">
            <span className="text-amber-400">VICTORIA</span> EVENT GROUP
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-light">
            {[
              { label: 'Home', id: 'home' },
              { label: 'Próximas Fiestas', id: 'proximasfiestas' },
              { label: 'Organiza Evento', id: 'organizaevento' },
              { label: 'Contacto', id: 'contacto' }
            ].map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)}
                 className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/98 border-t border-amber-400/20">
            <div className="px-4 py-4 space-y-4 text-sm">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Próximas Fiestas', id: 'proximasfiestas' },
                { label: 'Organiza Evento', id: 'organizaevento' },
                { label: 'Contacto', id: 'contacto' }
              ].map((item) => (
                <button key={item.id} onClick={() => scrollToSection(item.id)}
                   className="block hover:text-amber-400 transition-colors w-full text-left cursor-pointer">
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background gradient mesh effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-300/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-8 inline-block px-6 py-2 border border-amber-400/50 rounded-full text-amber-400 text-xs font-light tracking-widest">
            ESPACIOS EXCLUSIVOS
          </div>
          
          <h1 className="text-6xl sm:text-7xl font-light tracking-tight mb-8 leading-tight">
            Victoria Event Group
          </h1>

          <p className="text-2xl text-amber-400 font-light mb-6 max-w-3xl mx-auto leading-relaxed">
            Nuestros espacios exclusivos a 15 min de Madrid
          </p>

          <p className="text-xl text-gray-300 font-light mb-4 max-w-3xl mx-auto leading-relaxed">
            Capacidad hasta 450 personas en nuestros espacios privados con parking incluido, sonido profesional y entornos únicos.
          </p>

          <p className="text-lg text-gray-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed italic">
            Te ayudamos a elegir el espacio perfecto según tu evento.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={() => scrollToSection('organizaevento')} 
              className="px-12 py-4 bg-blue-500 text-white font-light text-lg hover:bg-blue-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 cursor-pointer rounded-lg">
              Organizar mi evento privado
            </button>
            <button onClick={() => scrollToSection('proximasfiestas')} 
              className="px-12 py-4 bg-green-500 text-white font-light text-lg hover:bg-green-600 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105 cursor-pointer rounded-lg">
              Ver próximas fiestas
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-amber-400" size={32} />
        </div>
      </section>

      {/* Próximas Fiestas Section */}
      <section id="proximasfiestas" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 border border-amber-400/50 rounded-full text-amber-400 text-xs font-light tracking-widest mb-6">
              CALENDARIO DE EVENTOS
            </div>
            <h2 className="text-5xl font-light mb-6">
              Próximas Fiestas
            </h2>
            <div className="h-1 w-24 bg-amber-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'TECH HOUSE NIGHT',
                date: '15 Marzo',
                price: 'Desde 25€',
                link: 'https://eventix.com/fiesta1'
              },
              {
                title: 'AFROBEAT SPECIAL',
                date: '22 Marzo',
                price: 'Desde 20€',
                link: 'https://eventix.com/fiesta2'
              },
              {
                title: 'DJ LIVE SET',
                date: '29 Marzo',
                price: 'Desde 30€',
                link: 'https://eventix.com/fiesta3'
              }
            ].map((event, idx) => (
              <div key={idx} className="group relative overflow-hidden border border-gray-700 hover:border-amber-400 transition-all duration-300 hover:bg-gray-800/50 rounded-lg">
                <div className="aspect-square bg-gradient-to-br from-amber-400/20 to-black/50 group-hover:from-amber-400/40 transition-all duration-500 flex items-center justify-center">
                  <div className="text-8xl opacity-20 group-hover:opacity-30 transition-opacity">
                    🎉
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-3xl font-light text-amber-400 mb-6">{event.title}</h3>
                  
                  <div className="flex items-center gap-2 text-gray-300 font-light mb-3">
                    <Calendar size={18} />
                    <span className="text-lg">{event.date}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-300 font-light mb-8">
                    <DollarSign size={18} />
                    <span className="text-lg">{event.price}</span>
                  </div>

                  <a href={event.link} target="_blank" rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-amber-400 text-black font-light text-base hover:bg-amber-300 transition-all duration-300 rounded-lg">
                    Comprar entradas
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organiza tu Evento Section */}
      <section id="organizaevento" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 border border-amber-400/50 rounded-full text-amber-400 text-xs font-light tracking-widest mb-6">
              NUESTROS SERVICIOS
            </div>
            <h2 className="text-5xl font-light mb-6">
              Organiza tu evento privado en nuestros espacios
            </h2>
            <div className="h-1 w-24 bg-amber-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Bodas y eventos familiares',
                description: 'Espacios elegantes y privados hasta 450 invitados',
                icon: '💍'
              },
              {
                title: 'Eventos corporativos',
                description: 'Team building y presentaciones en espacios versátiles y exclusivos',
                icon: '🏢'
              },
              {
                title: 'Fiestas privadas personalizadas',
                description: 'Cumpleaños y eventos especiales en entornos únicos',
                icon: '🎉'
              }
            ].map((service, idx) => (
              <div key={idx} className="group relative p-8 border border-gray-700 hover:border-amber-400 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/20 hover:bg-gray-800/50 cursor-pointer rounded-lg">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-light text-amber-400 mb-3">{service.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-6">{service.description}</p>
                <button onClick={() => scrollToSection('contacto')}
                  className="inline-flex items-center text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                  <span className="text-sm font-light">Pedir presupuesto</span>
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black border-y border-amber-400/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light mb-6">Lo que dicen nuestros clientes</h2>
            <div className="h-1 w-24 bg-amber-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                text: 'Fiesta electrónica brutal, sonido perfecto',
                author: 'Juan Pérez',
                role: 'DJ'
              },
              {
                text: 'Boda perfecta, espacio espectacular',
                author: 'María García',
                role: 'Novia'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="p-8 border border-gray-700 hover:border-amber-400 transition-all duration-300 hover:bg-gray-800/30 rounded-lg">
                <div className="mb-6">
                  <p className="text-amber-400 text-3xl">★★★★★</p>
                </div>
                <p className="text-gray-300 font-light mb-6 italic text-lg">"{testimonial.text}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-light text-white">{testimonial.author}</p>
                  <p className="text-amber-400 text-sm font-light">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light mb-6">Contacta ahora</h2>
            <div className="h-1 w-24 bg-amber-400 mx-auto"></div>
          </div>

          {/* WhatsApp Button */}
          <div className="flex justify-center mb-16">
            <a href="https://wa.me/34673523133?text=Hola%20Victoria%20Event%20Group%2C%20quiero%20información%20sobre%20un%20evento" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 px-12 py-6 bg-green-500 text-white font-light text-lg hover:bg-green-600 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105 rounded-lg">
              <MessageCircle size={32} />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-light mb-8">Información de contacto</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <Phone className="text-amber-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="text-gray-400 font-light text-sm mb-1">TELÉFONO</p>
                    <a href="tel:+34911234567" className="text-white hover:text-amber-400 transition-colors text-lg">
                      +34 911 234 567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <MapPin className="text-amber-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="text-gray-400 font-light text-sm mb-1">UBICACIÓN</p>
                    <p className="text-white text-lg">
                      A 15 minutos de Madrid (ubicación privada para clientes)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <input type="text" name="nombre" placeholder="Tu Nombre" 
                  value={formData.nombre} onChange={handleFormChange} required
                  className="w-full bg-gray-800 border border-gray-700 focus:border-amber-400 px-6 py-3 text-white placeholder-gray-500 outline-none transition-colors font-light rounded-lg" />
              </div>

              <div>
                <input type="tel" name="telefono" placeholder="Tu Teléfono" 
                  value={formData.telefono} onChange={handleFormChange} required
                  className="w-full bg-gray-800 border border-gray-700 focus:border-amber-400 px-6 py-3 text-white placeholder-gray-500 outline-none transition-colors font-light rounded-lg" />
              </div>

              <div>
                <select name="tipoEvento" value={formData.tipoEvento} onChange={handleFormChange}
                  className="w-full bg-gray-800 border border-gray-700 focus:border-amber-400 px-6 py-3 text-white placeholder-gray-500 outline-none transition-colors font-light rounded-lg">
                  <option value="Boda">Boda</option>
                  <option value="Empresa">Evento de Empresa</option>
                  <option value="Fiesta">Fiesta Privada</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div>
                <input type="date" name="fecha" 
                  value={formData.fecha} onChange={handleFormChange}
                  className="w-full bg-gray-800 border border-gray-700 focus:border-amber-400 px-6 py-3 text-white outline-none transition-colors font-light rounded-lg" />
              </div>

              <div>
                <textarea name="mensaje" placeholder="Cuéntanos sobre tu evento" rows="5"
                  value={formData.mensaje} onChange={handleFormChange}
                  className="w-full bg-gray-800 border border-gray-700 focus:border-amber-400 px-6 py-3 text-white placeholder-gray-500 outline-none transition-colors font-light resize-none rounded-lg"></textarea>
              </div>

              <button type="submit" className="w-full px-6 py-3 bg-amber-400 text-black font-light hover:bg-amber-300 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/50 cursor-pointer rounded-lg">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Links */}
            <div>
              <h4 className="text-amber-400 font-light tracking-widest text-sm mb-6">NAVEGACIÓN</h4>
              <div className="space-y-3">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'Próximas Fiestas', id: 'proximasfiestas' },
                  { label: 'Organiza tu Evento', id: 'organizaevento' },
                  { label: 'Contacto', id: 'contacto' }
                ].map((item) => (
                  <button key={item.id} onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-amber-400 transition-colors font-light text-sm cursor-pointer">
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-amber-400 font-light tracking-widest text-sm mb-6">SÍGUENOS</h4>
              <div className="flex space-x-6">
                <a href="https://instagram.com/vctreventgroup" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="https://tiktok.com/@victoriaeventgroup" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-12 text-center">
            <p className="text-gray-500 font-light text-sm">
              © 2024 Victoria Event Group. Todos los derechos reservados. | Espacios exclusivos a 15 minutos de Madrid
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

        * {
          font-family: 'Montserrat', sans-serif;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Playfair Display', serif;
        }

        img {
          loading: lazy;
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}