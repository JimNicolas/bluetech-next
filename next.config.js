/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/api/:path*', // Cambia la URL y el puerto si tu servidor de Express se ejecuta en una dirección diferente
      },
    ];
  },
};

module.exports = nextConfig;
