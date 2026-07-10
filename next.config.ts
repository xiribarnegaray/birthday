import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permite usar URLs externas para las fotos (por ejemplo, imágenes
    // subidas a un servicio como Unsplash, Cloudinary o el propio Airbnb).
    // Si preferís, dejá las imágenes en /public/images y no hace falta
    // tocar esto. Podés reemplazar el hostname "**" por dominios
    // específicos si querés ser más restrictivo.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
