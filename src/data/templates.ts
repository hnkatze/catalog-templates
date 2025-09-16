export interface Template {
  id: string;
  title: string;
  category: 'ecommerce' | 'resort' | 'landing' | 'event' | 'qr-menu' | 'corporate' | 'portfolio';
  description: string;
  technologies: string[];
  thumbnail: string;
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  price?: string;
}

// export const realTemplates: Template[] = [
//   {
//     id: 'ecommerce-fashion',
//     title: 'Fashion Store',
//     category: 'ecommerce',
//     description: 'Tienda online moderna para moda y accesorios con carrito de compras integrado',
//     technologies: ['React', 'Next.js', 'Tailwind CSS', 'Stripe'],
//     thumbnail: '/images/templates/ecommerce-fashion.jpg',
//     liveUrl: '#',
//     features: [
//       'Carrito de compras',
//       'Filtros avanzados',
//       'Pagos con Stripe',
//       'Gestión de inventario',
//       'Diseño responsive'
//     ],
//     price: 'Desde $1,500'
//   },
//   {
//     id: 'resort-paradise',
//     title: 'Resort Paradise',
//     category: 'resort',
//     description: 'Sitio web elegante para hoteles y resorts con sistema de reservas',
//     technologies: ['Astro', 'Vue', 'Tailwind CSS'],
//     thumbnail: '/images/templates/resort-paradise.jpg',
//     liveUrl: '#',
//     features: [
//       'Sistema de reservas',
//       'Galería de imágenes',
//       'Tours virtuales',
//       'Integración con booking',
//       'Multi-idioma'
//     ],
//     price: 'Desde $2,000'
//   },
//   {
//     id: 'landing-startup',
//     title: 'Startup Launch',
//     category: 'landing',
//     description: 'Landing page moderna y conversora para startups y lanzamientos de productos',
//     technologies: ['Astro', 'Tailwind CSS', 'Alpine.js'],
//     thumbnail: '/images/templates/landing-startup.jpg',
//     liveUrl: '#',
//     features: [
//       'Animaciones suaves',
//       'Formulario de contacto',
//       'Sección de testimonios',
//       'CTA optimizados',
//       'SEO optimizado'
//     ],
//     price: 'Desde $800'
//   },
//   {
//     id: 'event-conference',
//     title: 'Tech Conference',
//     category: 'event',
//     description: 'Plataforma completa para eventos y conferencias con registro de asistentes',
//     technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
//     thumbnail: '/images/templates/event-conference.jpg',
//     liveUrl: '#',
//     features: [
//       'Registro de asistentes',
//       'Agenda del evento',
//       'Perfiles de speakers',
//       'Contador regresivo',
//       'Integración con streaming'
//     ],
//     price: 'Desde $1,800'
//   },
//   {
//     id: 'qr-restaurant',
//     title: 'QR Menu Restaurant',
//     category: 'qr-menu',
//     description: 'Menú digital con código QR para restaurantes y cafeterías',
//     technologies: ['React', 'Node.js', 'MongoDB', 'QR Generator'],
//     thumbnail: '/images/templates/qr-restaurant.jpg',
//     liveUrl: '#',
//     features: [
//       'Menú digital interactivo',
//       'Generador de códigos QR',
//       'Panel de administración',
//       'Multi-idioma',
//       'Actualización en tiempo real'
//     ],
//     price: 'Desde $1,200'
//   },
//   {
//     id: 'corporate-business',
//     title: 'Corporate Pro',
//     category: 'corporate',
//     description: 'Sitio web corporativo profesional para empresas y consultorías',
//     technologies: ['Astro', 'React', 'Tailwind CSS'],
//     thumbnail: '/images/templates/corporate-business.jpg',
//     liveUrl: '#',
//     features: [
//       'Diseño profesional',
//       'Sección de servicios',
//       'Portafolio de proyectos',
//       'Blog integrado',
//       'Formularios de contacto'
//     ],
//     price: 'Desde $1,000'
//   },
//   {
//     id: 'portfolio-creative',
//     title: 'Creative Portfolio',
//     category: 'portfolio',
//     description: 'Portfolio creativo para diseñadores, fotógrafos y artistas',
//     technologies: ['Astro', 'GSAP', 'Tailwind CSS'],
//     thumbnail: '/images/templates/portfolio-creative.jpg',
//     liveUrl: '#',
//     features: [
//       'Galería interactiva',
//       'Animaciones creativas',
//       'Filtros por categoría',
//       'Lightbox',
//       'Diseño minimalista'
//     ],
//     price: 'Desde $900'
//   },
//   {
//     id: 'ecommerce-tech',
//     title: 'Tech Store',
//     category: 'ecommerce',
//     description: 'E-commerce especializado en productos tecnológicos con comparador',
//     technologies: ['Next.js', 'Redux', 'Tailwind CSS', 'PayPal'],
//     thumbnail: '/images/templates/ecommerce-tech.jpg',
//     liveUrl: '#',
//     features: [
//       'Comparador de productos',
//       'Reviews y ratings',
//       'Wishlist',
//       'Búsqueda avanzada',
//       'Panel de usuario'
//     ],
//     price: 'Desde $1,700'
//   }
// ];



// Templates reales extraídos de proyectos externos
export const realTemplates: Template[] = [
  {
    id: 'real-estate-inmoexpert',
    title: 'InmoExpert Honduras',
    category: 'corporate',
      description: 'InmoExpert Honduras es una plataforma inmobiliaria profesional para el mercado hondureño. Permite explorar, filtrar y visualizar propiedades en venta y alquiler, con galerías de imágenes, información detallada, contacto directo con agentes y experiencia optimizada para cualquier dispositivo. El sitio destaca por su diseño moderno, filtros avanzados, catálogo visual, integración con componentes UI de alta calidad y soporte para múltiples ciudades y tipos de propiedad. Ideal para agencias, compradores y vendedores que buscan eficiencia y confianza en el proceso inmobiliario.',
      technologies: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'shadcn/ui',
        'React Hook Form',
        'Zod',
        'Lucide React',
        'Sonner'
      ],
      liveUrl: 'https://real-estate-website-phi-bay.vercel.app/',
      thumbnail: 'https://res.cloudinary.com/djluqrprg/image/upload/v1756442475/imovi_bfroqr.png', // Puedes agregar la URL de la imagen si está disponible
      githubUrl: 'https://github.com/hnkatze/real-estate-website',
      features: [
        'Catálogo visual de propiedades con imágenes y detalles',
        'Filtros avanzados por ciudad, tipo, precio y modalidad',
        'Vista individual con amenidades, dimensiones y ubicación',
        'Galería interactiva de fotos',
        'Contacto directo con agentes inmobiliarios',
        'Homepage con hero y propiedades destacadas',
        'Formulario de contacto general y para agentes',
        'Soporte para ciudades principales de Honduras',
        'Soporte para casas, apartamentos y terrenos',
        'Componentes UI personalizables (shadcn/ui, Radix)',
        'Diseño responsive para mobile, tablet y desktop',
        'Validación de formularios con Zod',
        'Notificaciones con Sonner',
        'Integración con mapas y coordenadas',
        'Interfaz moderna y profesional'
      ],
      price: undefined
  },
  {
    id: 'wendy-site',
    title: 'Wendy Site',
    category: 'landing',
      description: 'Wendy Site es una landing page moderna y personalizable. Ideal para presentar productos, servicios o proyectos de manera profesional y rápida. El sitio se despliega automáticamente en Vercel y aprovecha componentes UI avanzados, integración con Radix UI y Tailwind CSS, permitiendo una experiencia visual atractiva y responsiva sin complicaciones técnicas.',
      technologies: [
        'v0.dev',
        'Vercel',
        'Next.js',
        'Tailwind CSS',
        'Radix UI',
        'Lucide React',
        'Geist',
        'React Hook Form',
        'Zod'
      ],
      thumbnail: 'https://res.cloudinary.com/djluqrprg/image/upload/v1756442478/wendys_zboaci.png',
      liveUrl: 'https://wendy-site-ashen.vercel.app/',
      githubUrl: 'https://github.com/hnkatze/wendy-site',
      features: [
        'Landing page profesional y personalizable',
        'Despliegue instantáneo en Vercel',
        'Componentes UI avanzados (Radix UI, Lucide Icons, Geist)',
        'Diseño responsivo y moderno con Tailwind CSS',
        'Integración con formularios y validaciones (React Hook Form, Zod)',
        'Animaciones y efectos visuales',
        'Listo para SEO y compartir en redes sociales (og-image)',
        'Fácil edición y actualización desde v0.dev'
      ],
      price: undefined
  },
  {
    id: 'qr-table',
    title: 'QR Table',
    category: 'qr-menu',
      description: 'QR Table es una solución integral para digitalizar restaurantes y cafeterías mediante menús interactivos accesibles por código QR. Los clientes pueden escanear el QR en la mesa, ver el menú actualizado y ordenar sin necesidad de instalar apps. El sistema incluye seguridad por ubicación, seguimiento de órdenes en tiempo real, panel administrativo, métricas avanzadas y comunicación directa con el staff. Ideal para negocios que buscan modernizar la experiencia, optimizar procesos y reducir costos operativos.',
      technologies: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'shadcn/ui',
        'Firebase Firestore',
        'Firebase Auth',
        'Cloudinary'
      ],
      liveUrl: 'https://qr-table.vercel.app/',
      thumbnail: 'https://res.cloudinary.com/djluqrprg/image/upload/v1756442475/qr_kttlrz.png',
      githubUrl: 'https://github.com/hnkatze/qr-table',
      images: [
        "https://res.cloudinary.com/djluqrprg/image/upload/v1757995085/2_pb2jrc.png",
        "https://res.cloudinary.com/djluqrprg/image/upload/v1757995087/33_wlndic.png",
        "https://res.cloudinary.com/djluqrprg/image/upload/v1757995086/8_ywypkt.png",
        "https://res.cloudinary.com/djluqrprg/image/upload/v1757995086/7_z90zyj.png",
        "https://res.cloudinary.com/djluqrprg/image/upload/v1757995085/4_neuuvm.png",
        "https://res.cloudinary.com/djluqrprg/image/upload/v1757995085/5_tqoh0l.png",
        "https://res.cloudinary.com/djluqrprg/image/upload/v1757995085/1_pbviqm.png"
      ],
      features: [
        'Menú digital QR interactivo y actualizado al instante',
        'Panel administrativo para gestión de productos y órdenes',
        'Seguridad por ubicación (solo pedidos desde el restaurante)',
        'Seguimiento en tiempo real del estado de la orden',
        'Analytics y KPIs de ventas y servicio',
        'Generador y simulador de códigos QR',
        'Sistema de notificaciones y gestión de roles',
        'Validación por ubicación y control de acceso',
        'Llamar al mesero desde la mesa',
        'Soporte por email y WhatsApp integrado',
        'Centro de ayuda y soporte legal',
        'Despliegue en Vercel y Docker',
        'Interfaz moderna, responsiva y económica'
      ],
      price: undefined
  },
  {
    id: 'portafolio-emprendedor',
    title: 'Portafolio Emprendedor',
    category: 'portfolio',
    description: 'Marketplace digital para emprendedores hondureños, donde puedes descubrir, filtrar y comprar productos únicos. El sitio ofrece una experiencia moderna, responsiva y atractiva, con catálogo visual, búsqueda avanzada, favoritos, descuentos, y carrito de compras. Ideal para quienes buscan apoyar el talento local y encontrar productos originales.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Cloudinary'],
    thumbnail: 'https://res.cloudinary.com/djluqrprg/image/upload/v1756442475/Emprende_owsh3v.png',
    githubUrl: 'https://portafolio-emprendedor.vercel.app/',
    liveUrl: 'https://portafolio-emprendedor.vercel.app/',
    features: [
      'Catálogo visual de productos',
      'Búsqueda avanzada y filtros por categoría',
      'Sistema de favoritos',
      'Carrito de compras integrado',
      'Badges de inventario y descuentos',
      'Tags y categorías personalizadas',
      'Sección hero con slides promocionales',
      'Integración con Cloudinary para imágenes',
      'Interfaz moderna y responsiva',
      'Despliegue en Vercel'
    ],
    price: undefined
  },
  {
    id: 'my-little-island',
    title: 'My Little Island',
    category: 'resort',
    description: 'Resort digital que combina naturaleza y lujo en un entorno paradisíaco. Ofrece alojamiento exclusivo en cabañas, restaurante gourmet, programas de formación en hotelería y turismo sostenible, y una experiencia visual envolvente. Ideal para quienes buscan desconectarse, aprender y disfrutar de la mejor hospitalidad frente al mar.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Cloudinary', 'Prisma'],
    thumbnail: 'https://res.cloudinary.com/djluqrprg/image/upload/v1756442478/resort_jbivwa.png',
    githubUrl: 'https://my-little-island.vercel.app',
    liveUrl: 'https://my-little-island.vercel.app',
    features: [
      'Hero visual con imagen de fondo',
      'Catálogo de cabañas con detalles y amenidades',
      'Reserva online de alojamiento',
      'Restaurante con menú local',
      'Programas de pasantías en hotelería y turismo',
      'Integración con Cloudinary para imágenes',
      'Precios y disponibilidad en tiempo real',
      'Interfaz moderna y responsiva',
      'Sección de contacto y llamada a la acción',
      'Despliegue en Vercel'
    ],
    price: undefined
  },
  {
    id: 'lotificadora',
    title: 'Lotificadora',
    category: 'corporate',
    description: 'Sitio web para desarrollo residencial que ofrece lotes urbanizados con infraestructura de primer nivel, seguridad 24/7 y amenidades exclusivas. El portal permite explorar tipos de lotes, conocer el proceso de compra, ver testimonios y contactar asesores. Ideal para familias que buscan invertir en un entorno seguro, moderno y rodeado de naturaleza.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    thumbnail: 'https://res.cloudinary.com/djluqrprg/image/upload/v1756442476/loti_g4yc81.png',
    githubUrl: 'https://github.com/hnkatze/lotificadora',
    liveUrl: 'https://lotificadora.vercel.app/',
    features: [
      'Hero visual con imagen aérea',
      'Catálogo de lotes con precios y características',
      'Amenidades: seguridad, áreas verdes, fibra óptica, agua y energía',
      'Proceso de compra simplificado en 3 pasos',
      'Opciones de pago: contado, financiamiento y crédito bancario',
      'Testimonios de clientes',
      'Sección de preguntas frecuentes (FAQ)',
      'Formulario de contacto y WhatsApp',
      'Ubicación privilegiada y entorno natural',
      'Interfaz moderna y responsiva',
      'Despliegue en Vercel'
    ],
    price: undefined
  },
  {
    id: 'boda',
    title: 'Boda Bryan & Genesis',
    category: 'event',
    description: 'Sitio web de boda personalizado que celebra la historia de amor de Bryan y Genesis. Incluye cuenta regresiva, galería de fotos, itinerario del evento, información de lugar y vestimenta, frases inspiradoras, reproductor de música y confirmación de asistencia. Ideal para compartir detalles, emociones y recuerdos con los invitados de manera elegante y memorable.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Cloudinary'],
    thumbnail: 'https://res.cloudinary.com/djluqrprg/image/upload/v1756442479/boda_rcfbtn.png',
    githubUrl: 'https://github.com/hnkatze/boda',
    liveUrl: 'https://www.boda-hernandez-lagos.online/',
    features: [
      'Hero visual con foto de los novios',
      'Cuenta regresiva al evento',
      'Reproductor de música personalizada',
      'Historia de los novios',
      'Itinerario detallado de la boda',
      'Galería de fotos',
      'Frases de amor y versículos bíblicos',
      'Información de lugar y código de vestimenta',
      'Mapa interactivo de ubicación',
      'Confirmación de asistencia (RSVP)',
      'Interfaz elegante y responsiva',
      'Despliegue en Vercel'
    ],
    price: undefined
  },
  {
    id: 'carbonal',
    title: 'El Carbonal FC',
    category: 'corporate',
    description: 'Portal oficial de El Carbonal FC, club deportivo que promueve el fútbol y los valores comunitarios. El sitio ofrece noticias, partidos en vivo, galería de fotos, información de jugadores y cuerpo técnico, patrocinadores y la historia del club. Ideal para aficionados, jugadores y patrocinadores que buscan estar conectados con el equipo y su comunidad.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Cloudinary'],
    thumbnail: 'https://res.cloudinary.com/djluqrprg/image/upload/v1756442702/carbo_wxdqoa.png',
    githubUrl: 'https://github.com/hnkatze/carbonal',
    liveUrl: 'https://elcarbonalfc.vercel.app/',
    features: [
      'Hero visual con carrusel de imágenes',
      'Sección "Nosotros" con historia y valores',
      'Noticias y novedades del club',
      'Partidos en vivo y resultados',
      'Calendario de partidos próximos y completados',
      'Galería de fotos',
      'Información de patrocinadores',
      'Equipo: jugadores y cuerpo técnico',
      'Modales interactivos para detalles de jugadores y staff',
      'Interfaz moderna y responsiva',
      'Despliegue en Vercel'
    ],
    price: undefined
  },
  {
    id: 'crafter',
    title: 'Crafter',
    category: 'portfolio',
    description: 'Portfolio profesional para desarrolladores y agencias, construido con Astro. Presenta experiencia, servicios, preguntas frecuentes y contacto, todo en una interfaz moderna y animada. Ideal para mostrar proyectos, captar clientes y transmitir confianza y expertise en desarrollo web.',
    technologies: ['Astro', 'Tailwind CSS', 'JavaScript'],
    thumbnail: 'https://res.cloudinary.com/djluqrprg/image/upload/v1756442475/crafterspixels_onmcxn.png',
    githubUrl: 'https://github.com/hnkatze/crafter',
    liveUrl: 'https://crafter.vercel.app/',
    features: [
      'Hero animado con fondo visual',
      'Sección "Nosotros" con experiencia y valores',
      'Presentación de servicios y expertise',
      'Preguntas frecuentes (FAQ)',
      'Formulario de contacto',
      'Interfaz moderna y responsiva',
      'Animaciones de scroll y blobs',
      'Despliegue rápido con Astro'
    ],
    price: undefined
  }
];


export const templates = realTemplates;