# Prompt para crear un Portfolio Website Full Stack Developer

Actúa como un **Senior Frontend Engineer**, **UI/UX Designer** y **Frontend Architect** experto en React, Tailwind CSS, animaciones modernas y experiencia de usuario.

Tu objetivo es crear un **portfolio profesional de una sola página (Single Page Application)** para un **Full Stack Developer**, utilizando **React + JavaScript + Tailwind CSS**.

El resultado debe verse como un portfolio premium, moderno y minimalista, comparable con portfolios de desarrolladores destacados en Awwwards o Frontend Mentor.

---

# Stack Tecnológico

Utiliza únicamente:

* React (JavaScript, NO TypeScript)
* Tailwind CSS
* React Bits para componentes visuales
* Framer Motion para las animaciones personalizadas que no pertenezcan a React Bits
* React Icons para iconografía
* Lucide React cuando sea conveniente
* React Scroll o navegación mediante scroll suave
* Swiper.js para carruseles de imágenes y videos
* React Modal (o similar) para los popups de proyectos
* React Helmet si fuera necesario

---

# Estilo General

El diseño debe transmitir:

* Profesionalismo
* Elegancia
* Tecnología
* Minimalismo
* Modernidad

Inspirado en portfolios de desarrolladores senior.

Evitar:

* Diseño recargado
* Colores extremadamente saturados
* Mucho texto en pantalla
* Espacios reducidos

Debe existir abundante espacio en blanco (whitespace). Pero no demasiado entre secciones

---

# Paleta de colores

Modo oscuro (principal)

* Fondo: azul muy oscuro
* Tonos secundarios azul oscuro
* Detalles morados
* Gradientes azul → morado

Modo claro

* Blanco
* Gris muy claro
* Azul suave
* Morado suave

Toda la aplicación debe soportar ambos temas.

El cambio debe hacerse con transición suave.

---

# Tipografías

Escoger automáticamente tipografías modernas.

Para títulos:

* llamativas
* elegantes
* perfectamente legibles

Para texto:

* fuente limpia
* profesional

La jerarquía tipográfica debe estar muy bien definida.

---

# Responsive

Debe funcionar perfectamente en:

Desktop

Tablet

Mobile

No debe romperse ningún layout.

---

# Animaciones

IMPORTANTE

Todos los componentes que NO pertenezcan a React Bits deben tener animaciones utilizando Framer Motion.

Cada sección debe tener:

* animación de entrada
* animación de salida
* aparición al hacer scroll
* transiciones suaves

Nunca exageradas.

---

# Estructura de carpetas

Organizar el proyecto con una arquitectura limpia.

Ejemplo:

src/

assets/

components/

ui/

effects/

layout/

sections/

hooks/

data/


utils/


App.jsx

main.jsx

Los datos del portfolio deben almacenarse en archivos separados dentro de data/.

No hardcodear información directamente dentro de los componentes.

---

# Navbar

Debe permanecer fijo arriba (sticky/fixed).

Usar:

src/components/ui/GooeyNav.jsx

Distribución:

Izquierda

Phol Castañeda

Centro

Hero

About

Projects

Skills

Contact

Cada enlace debe realizar scroll suave hacia su sección.

Debe indicar visualmente la sección activa.

Derecha

Botón Dark / Light

Botón idioma

ES

EN

El cambio de idioma debe afectar todo el contenido de la página.

El navbar debe tener efecto glassmorphism.

---

# Hero Section

Utilizar como fondo:

src/components/effects/DotField.jsx

Distribución:

Izquierda

Texto:

Hi, I'm

Phol Castañeda

Full Stack Developer

Building secure, scalable, and high-performance web applications.

Jerarquía:

"Hi, I'm"

texto normal

Nombre

muy grande

Full Stack Developer

mediano

Descripción

normal

Debajo colocar cuatro botones:

Mail

GitHub

LinkedIn

Descargar CV

Los botones deben tener:

hover

animaciones

íconos

microinteracciones

Derecha

Utilizar:

src/components/ui/ProfileCard.jsx

Imagen:

src/assets/images/phol-profile.webp

La tarjeta debe incluir una pequeña insignia:

🟢 Available

o

Disponible

según el idioma.

---

Debajo del Hero

Mostrar:

Scroll

↓

La flecha debe tener una animación vertical infinita indicando que el usuario continúe bajando.

---

# About Section

Título centrado utilizando:

src/components/effects/ScrollFloat.jsx

Como fondo usar:

src/components/effects/MagicRings.jsx

Debajo colocar exactamente este contenido.

No justificar el texto.

Mantener excelente espaciado.

## Sobre mí

¡Hola! Soy **Phol**, Full Stack Developer y estudiante de noveno semestre de Ingeniería de Sistemas en la Universidad de Medellín.

Me especializo en el diseño y desarrollo de aplicaciones web, utilizando principalmente **Java, Spring Boot, JavaScript, TypeScript, React, Angular, NestJS, SQL, Git y Docker**.

Disfruto transformar ideas en soluciones de software confiables mediante el desarrollo de interfaces intuitivas, servicios backend robustos y APIs REST, aplicando principios de **Clean Code**, buenas prácticas de desarrollo y arquitecturas mantenibles para crear aplicaciones seguras, escalables y de alto rendimiento.

Cuento con un buen dominio del inglés para comprender documentación técnica y comunicarme en entornos profesionales. Mantengo una mentalidad de aprendizaje continuo, explorando nuevas tecnologías y fortaleciendo constantemente mis habilidades para crecer como ingeniero de software y desarrollar soluciones que generen un impacto real.

---

# Projects Section

Título usando:

ScrollFloat.jsx

La sección utilizará:

src/components/ui/BorderGlow.jsx

Los proyectos deben mostrarse como cards horizontales.

Distribución:

Izquierda

Imagen principal.

Derecha

Título

Tecnologías

Descripción corta

Botón GitHub

Botón Demo

Toda la card debe ser clickeable.

---

## Popup del proyecto

Al hacer click abrir un modal elegante.

Debe contener:

Imagen principal

Carrusel de imágenes

Carrusel de videos

Descripción larga

Tecnologías

GitHub

Demo

Cada imagen y video debe tener:

botón de ampliar

modo pantalla completa

El carrusel debe tener:

flechas

indicadores

animaciones suaves

Debe utilizar Swiper.js.

---

# Skills Section

Título usando ScrollFloat.jsx

---

## Habilidades principales

Usar:

src/components/ui/MagicBento.jsx

Mostrar:

Java

Spring Boot

JavaScript

React

Node.js

NestJS

Cada bloque debe incluir:

Logo

Nombre

Breve descripción (1 línea)

Excelente diseño visual.

---

## Todas las habilidades

Subtítulo:

Todas las habilidades

Separar por categorías.

Frontend

Backend

Bases de datos

Otras herramientas

Habilidades blandas

Cada habilidad debe estar dentro de:

src/components/ui/SpotlightCard.jsx

Cada tarjeta debe:

tener exactamente el mismo tamaño

mostrar únicamente:

Logo

Nombre

El color del Spotlight debe parecerse al color oficial del logo correspondiente.

Ejemplo:

React

azul

Java

rojo

Spring

verde

Docker

azul

Git

naranja

etc.

---

# Contact Section

Título:

Ponte en contacto

Utilizar ScrollFloat.jsx.

Diseño de dos columnas.

Izquierda

Formulario:

Nombre

Correo electrónico

Asunto

Mensaje

Botón

Enviar mensaje

Los campos deben tener:

validaciones

focus elegante

animaciones

hover

Derecha

Mostrar verticalmente:

LinkedIn

Correo

GitHub

Cada uno con:

ícono

nombre

animaciones

hover

---

# Datos

Toda la información debe almacenarse en archivos dentro de:

src/data/

Ejemplo:

projects.js

skills.js

socials.js

translations.js

Cada proyecto debe incluir:

id

nombre

descripción corta

descripción larga

tecnologías

github

demo

imagen principal

galería

videos

---

# Internacionalización

Debe existir soporte completo para:

Español

Inglés

Todo el contenido debe cambiar automáticamente.

No dejar textos mezclados.

---

# Accesibilidad

Implementar buenas prácticas:

aria-labels

contraste correcto

navegación mediante teclado

focus visible

texto alternativo

---

# Rendimiento

Optimizar:

Lazy Loading de imágenes

Componentes reutilizables

Código limpio

Sin duplicación

Buenas prácticas de React

---

# Calidad del código

Aplicar:

Componentes pequeños

Alta reutilización

Separación de responsabilidades

Props claras

Hooks personalizados cuando sea necesario

Código limpio

Convenciones modernas

---

# Resultado esperado

El resultado debe sentirse como un portfolio premium, elegante y profesional, con un excelente nivel de UX/UI, animaciones fluidas, diseño consistente, responsive completo y una arquitectura escalable, listo para ser desplegado en Vercel o Netlify y servir como carta de presentación para oportunidades laborales como Full Stack Developer.
