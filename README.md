# 🎁 Regalo de cumpleaños — historia interactiva

Una pequeña experiencia web hecha con Next.js (App Router), TypeScript,
Tailwind CSS y Framer Motion. Cuenta una historia con pistas a medida que
se hace scroll, hasta revelar el regalo real: una estadía en un Airbnb en
Minas, Lavalleja.

No usa base de datos ni backend — todo el contenido es estático y se edita
desde un único archivo.

## Instalar dependencias

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en el navegador. Para
probar la experiencia como la vería la cumpleañera, abrilo desde el celular
o usá las herramientas de dispositivo móvil del navegador (375–430px de
ancho es el rango ideal).

## Dónde cambiar los textos, nombres y fecha

Todo el contenido editable vive en un solo archivo:

```
src/data/giftContent.ts
```

Ahí podés cambiar:

- `birthdayPerson`: nombre de la cumpleañera.
- `from`: nombres de quienes regalan la experiencia.
- `birthdayDateLabel`: fecha del cumpleaños (texto libre).
- `location`: ciudad, departamento y país del destino.
- `theme`: los colores principales de toda la página (se aplican
  automáticamente como variables CSS, no hace falta tocar ningún componente).
- `sections`: los textos de cada escena de la historia (portada, pistas,
  revelación y mensaje final).
- `airbnb`: título, descripción, cantidad de noches y nota de fechas del
  alojamiento.

El título y la descripción para compartir la página (`meta`) se generan
automáticamente a partir de `birthdayPerson`, así que no hace falta
mantenerlos sincronizados a mano.

## Dónde colocar las imágenes

Las imágenes de referencia (ilustraciones placeholder) están en:

```
public/images/
  hero.svg       → portada
  friends.svg    → primera pista (salir de la rutina)
  nature.svg     → segunda pista (naturaleza)
  trekking.svg   → tercera pista (trekking)
  minas.svg      → cuarta pista (destino)
  airbnb.svg     → tarjeta final del alojamiento
```

Para reemplazarlas por fotos reales:

1. Poné el archivo nuevo (jpg, png o webp) dentro de `public/images/`.
2. Actualizá la ruta correspondiente en `src/data/giftContent.ts`, dentro
   del objeto `images` (por ejemplo `src: "/images/hero.jpg"`).
3. Actualizá también el texto alternativo (`alt`) de esa imagen.

También podés usar una URL externa en lugar de un archivo local (por
ejemplo una foto subida a otro servicio). Si lo hacés, agregá el dominio
correspondiente en `next.config.ts` dentro de `images.remotePatterns`
(por defecto ya acepta cualquier dominio con `https`).

## Dónde cambiar el enlace del Airbnb

En `src/data/giftContent.ts`, dentro del objeto `airbnb`:

```ts
airbnb: {
  title: "Casa de sierra en Minas",
  url: "https://www.airbnb.com/...", // ← poné acá el link real
  nightsLabel: "2 noches",
  description: "Una escapada para disfrutar juntas",
  datesNote: "Las fechas se coordinan entre todas 🗓️",
  ctaLabel: "Ver el lugar",
},
```

El botón "Ver el lugar" abre ese enlace en una pestaña nueva.

## Verificar antes de compartir

```bash
npm run lint
npm run build
```

Ambos deberían terminar sin errores.

## Desplegar en Vercel

1. Subí el proyecto a un repositorio de GitHub/GitLab/Bitbucket (o usá la
   CLI de Vercel directamente desde esta carpeta).
2. Entrá a [vercel.com/new](https://vercel.com/new) e importá el
   repositorio (Vercel detecta Next.js automáticamente, no hace falta
   configurar nada extra).
3. Deploy. Cada push a la rama principal genera un nuevo despliegue.

O, si tenés la CLI instalada:

```bash
npx vercel
```

## Estructura del proyecto

```
src/
  app/
    layout.tsx          → fuentes, metadata, tema
    page.tsx             → arma la historia completa, sección por sección
    globals.css           → paleta de colores y estilos base
    icon.svg               → favicon
    opengraph-image.tsx     → imagen para compartir en redes
  components/
    BirthdayHero.tsx       → 1. portada
    TogetherSection.tsx    → 2. "hace tiempo pensamos esto"
    ClueSection.tsx         → 3 y 4. pistas con foto
    TrailAnimation.tsx       → 5. sendero interactivo de trekking
    DestinationReveal.tsx     → 6. revelación de "Minas"
    RevealCTA.tsx               → 7. previa a la revelación final
    GiftReveal.tsx                → 8. revelación + confeti
    AirbnbCard.tsx                  → tarjeta del alojamiento
    FinalMessage.tsx                → 9. mensaje final + reinicio
    ScrollProgress.tsx, StorySection.tsx, AnimatedLines.tsx,
    OrganicBackground.tsx, RestartButton.tsx → piezas reutilizables
  data/
    giftContent.ts        → todo el contenido editable
  hooks/
    useReducedMotionPreference.ts → respeta la preferencia de animación reducida
public/
  images/                → ilustraciones placeholder (reemplazables)
```
