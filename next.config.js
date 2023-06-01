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
  env: {
    API_URL:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000'
        : 'https://bluetech-back-production.up.railway.app',
  },
};

module.exports = nextConfig;
