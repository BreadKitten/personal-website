import Navbar from './_components/Navbar';
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
      </body>
    </html>
  );
}
