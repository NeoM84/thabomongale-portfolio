import { Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-16 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#" className="text-2xl font-bold tracking-tighter text-primary">
              THABO MONGALE
            </a>
            <p className="text-zinc-500 mt-2 text-sm">
              Transforming Minds. Elevating Businesses.
            </p>
          </div>
        
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} Thabo Mongale. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
