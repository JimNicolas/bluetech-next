import { Inter } from 'next/font/google';
import Navigation from './components/common/Navigation/Navigation';
import './globals.css';
import Footer from './components/Footer/Footer';
//  redux:
import { Providers } from '@/redux/providers';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BlueTech',
  description: 'Welcome to BlueTech, your best technology store.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={inter.className} suppressHydrationWarning={true}>
        {/*SUPRIME EL WARNING DEL CONSOLE POR HIDRATACION*/}
        <Providers>
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
