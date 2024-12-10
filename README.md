# Sneak Ecommerce

**Sneak Ecommerce** es un proyecto de tienda en línea para la venta de zapatillas de las marcas más reconocidas. Esta aplicación está diseñada para ofrecer una experiencia de usuario intuitiva y moderna, destacando por su diseño responsive y funcionalidades avanzadas.

## Tecnologías Utilizadas

El proyecto utiliza las siguientes tecnologías:

- **Next.js**: Framework de React para el desarrollo de aplicaciones web modernas y eficientes.
- **React**: Biblioteca JavaScript para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript que mejora la calidad del código mediante tipado estático.
- **Tailwind CSS**: Framework CSS utilitario para diseñar interfaces modernas de manera rápida.
- **Lucide React**: Conjunto de íconos para mejorar la experiencia visual.
- **Tailwind Merge**: Para combinar clases de Tailwind CSS evitando conflictos.
- **TailwindCSS Animate**: Extensión para animaciones en Tailwind CSS.

## Instalación y Ejecución

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/gonzalo-cordoba/sneak-ecommerce-front.git
   ```

2. Ve al directorio del proyecto:

   ```bash
   cd sneak-ecommerce
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre tu navegador y visita `http://localhost:3000` para ver la aplicación en acción.

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm run start`: Sirve la aplicación compilada.
- `npm run lint`: Ejecuta ESLint para verificar errores de estilo y sintaxis en el código.

## Características Principales

- Catálogo de zapatillas de marcas reconocidas.
- Búsqueda y filtrado de productos.
- Diseño responsive para una excelente experiencia en dispositivos móviles y de escritorio.
- Animaciones y transiciones visuales.
- Autenticación de usuarios con:
  - Formulario de registro.
  - Inicio de sesión mediante Google.

## Estructura del Proyecto

El proyecto sigue una estructura modular organizada en componentes reutilizables:

```
src/
├── components/   # Componentes reutilizables
├── pages/        # Páginas del sitio
├── styles/       # Estilos globales y configuración de Tailwind CSS
├── public/       # Archivos estáticos
└── utils/        # Utilidades y funciones compartidas
```

## Contribución

Si deseas contribuir al proyecto:

1. Haz un fork del repositorio.
2. Crea una rama para tu función o corrección:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```
4. Envía tus cambios mediante un pull request.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).
