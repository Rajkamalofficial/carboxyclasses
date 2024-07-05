import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div 
          style={{
            backgroundImage: `url('/bgimg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh', // set the height to 100vh to cover the entire screen
            width: '100vw', // set the width to 100vw to cover the entire screen
            
          }}
        >
          {children}
        </div>

      </body>
    </html>
  );
}