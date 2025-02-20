import Navbar from './_components/Navbar';
import Footer from './_components/Footer';
import './globals.css';

export const metadata = {
  title: 'zacharybi',
  description: "zachary bi's personal portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
