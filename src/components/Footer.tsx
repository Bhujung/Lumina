import React from 'react';

export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-white/10 bg-black text-center md:text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Lumina Creative Studio. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-white/40">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
