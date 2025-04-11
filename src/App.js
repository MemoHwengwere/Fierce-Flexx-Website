import React from 'react';
import './App.css';

function App() {
  return (
    <div className="font-sans">
    <header className="bg-black text-white sticky top-0 z-50 shadow-md">
  <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
    <h1 className="text-xl font-bold">Fierce Flexx</h1>
    <ul className="flex gap-6 text-sm font-semibold">
      <li><a href="#hero" className="hover:text-pink-300">Home</a></li>
      <li><a href="#about" className="hover:text-pink-300">About</a></li>
      <li><a href="#shop" className="hover:text-pink-300">Shop</a></li>
      <li><a href="#contact" className="hover:text-pink-300">Contact</a></li>
    </ul>
  </nav>
</header>


      <section id="hero" className="h-screen flex items-center justify-center bg-pink-100 text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Bold. Beautiful. Fierce.</h1>
          <p className="text-lg">Empowering plus-size fashion for every curve</p>
        </div>
      </section>

      <section id="about" className="p-10 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="max-w-xl mx-auto text-gray-700">
          At Fierce Flexx, we believe in unapologetic confidence and fashion that celebrates every size.
          Our pieces are designed to move with you — from everyday comfort to fierce expression.
        </p>
      </section>

      <section id="shop" className="p-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-4">Shop Our Looks</h2>
        <p>Coming Soon: Our curated plus-size fashion drops!</p>
      </section>

      <section id="contact" className="p-10 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-2">📍 Mandara, Harare</p>
        <p className="mb-2">📞 +263 77 619 0650</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="text-blue-500 hover:underline">Instagram</a>
          <a href="#" className="text-blue-500 hover:underline">Facebook</a>
          <a href="#" className="text-blue-500 hover:underline">TikTok</a>
        </div>
      </section>

      <footer className="bg-black text-white text-center p-4">
        © 2025 Fierce Flexx. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

