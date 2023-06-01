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
    APP_API_URL: 'http://localhost:5000',
  },
};

module.exports = nextConfig;
