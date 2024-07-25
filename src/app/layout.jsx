'use client'
import "./globals.css";
import Navbar from "@/components/Navbar";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function RootLayout({children}) {

  return (
    <html lang="en" className="light">
      <body>
        <Navbar />
        <div
          style={{
            backgroundImage: `url('/bgimg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflowY: 'visible',
            overflowX: 'hidden',
            height: '100vh', // set the height to 100vh to cover the entire screen
            width: '100vw', // set the width to 100vw to cover the entire screen
          }}
        >
          {children}

          <div className='toast-container'>
            <ToastContainer draggablePercent={10} autoClose={2000}  />
          </div>
        </div>
      </body>
    </html>
  );
}