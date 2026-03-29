/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { FilmGrain } from './components/FilmGrain';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { BehindTheScenes } from './components/BehindTheScenes';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative bg-background min-h-screen">
      <CustomCursor />
      <FilmGrain />
      <Navbar />
      
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Services />
        <BehindTheScenes />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

