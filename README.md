# 📚 Template Catalog - Portfolio de Desarrollo Web

Un catálogo profesional de templates y proyectos web desarrollados, diseñado para mostrar experiencia en desarrollo frontend y ofrecer servicios de personalización.

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🚀 Características

- **Catálogo Visual**: Presentación elegante de proyectos con imágenes y descripciones
- **Páginas de Detalle**: Información completa de cada template incluyendo tecnologías y características
- **Diseño Responsive**: Optimizado para todos los dispositivos
- **Navegación Fluida**: Enlaces directos a demos en vivo y detalles de proyectos
- **Formulario de Contacto**: Para solicitudes de personalización y cotizaciones

## 🛠️ Tecnologías Utilizadas

- **[Astro](https://astro.build/)** - Framework web moderno para sitios rápidos
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript con tipos estáticos
- **[Cloudinary](https://cloudinary.com/)** - CDN para optimización de imágenes

## 📂 Estructura del Proyecto

```
catalog/
├── public/
│   └── images/           # Imágenes estáticas
├── src/
│   ├── components/       # Componentes reutilizables
│   │   └── TemplateCard.astro
│   ├── data/            # Datos de templates
│   │   └── templates.ts
│   ├── layouts/         # Layouts de páginas
│   │   └── Layout.astro
│   ├── pages/           # Rutas de la aplicación
│   │   ├── index.astro
│   │   └── template/
│   │       └── [id].astro
│   └── styles/          # Estilos globales
│       └── global.css
└── package.json
```

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- Node.js 18 o superior
- npm o pnpm

### Pasos de Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/hnkatze/catalog.git
cd catalog
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:4321`

## 📜 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo en localhost:4321 |
| `npm run build` | Construye el sitio para producción |
| `npm run preview` | Previsualiza el build de producción |
| `npm run astro` | Ejecuta comandos de Astro CLI |

## 🎨 Templates Incluidos

El catálogo incluye diversos tipos de proyectos:

- **E-commerce**: Tiendas online con carrito de compras
- **Corporativos**: Sitios web empresariales y de servicios
- **Portfolios**: Portafolios creativos y profesionales
- **Eventos**: Sitios para bodas y conferencias
- **QR Menú**: Menús digitales para restaurantes
- **Resorts**: Sitios para hoteles y hospedajes
- **Landing Pages**: Páginas de aterrizaje conversoras

## 🔧 Personalización

### Agregar Nuevos Templates

1. Edita el archivo `src/data/templates.ts`
2. Agrega un nuevo objeto al array `realTemplates`:

```typescript
{
  id: 'nuevo-template',
  title: 'Nombre del Template',
  category: 'categoria',
  description: 'Descripción detallada...',
  technologies: ['Tech1', 'Tech2'],
  thumbnail: 'URL_de_imagen',
  liveUrl: 'URL_del_sitio',
  githubUrl: 'URL_del_repo',
  features: ['Feature 1', 'Feature 2'],
  price: 'Precio opcional'
}
```

### Modificar Estilos

- Los estilos globales están en `src/styles/global.css`
- Los componentes usan clases de Tailwind CSS
- El tema de colores puede modificarse en `tailwind.config.js`

## 🌐 Despliegue

### Despliegue en Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hnkatze/catalog)

### Despliegue Manual

1. Construye el proyecto:
```bash
npm run build
```

2. El sitio estático se genera en la carpeta `dist/`
3. Despliega el contenido de `dist/` en tu servicio de hosting preferido

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🤝 Contacto

Para solicitudes de personalización o consultas sobre los templates:

- **Email**: info@tudominio.com
- **GitHub**: [@hnkatze](https://github.com/hnkatze)
- **LinkedIn**: [Tu Perfil](https://linkedin.com/in/tuperfil)

## 🙏 Agradecimientos

- [Astro](https://astro.build/) por el increíble framework
- [Tailwind CSS](https://tailwindcss.com/) por el sistema de diseño
- [Vercel](https://vercel.com/) por el hosting gratuito

---

⭐ Si este proyecto te resulta útil, considera darle una estrella en GitHub!