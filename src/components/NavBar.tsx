import { useState } from "react";
import { Menu, X, Candy, IceCream, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 candy-shadow">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Candy className="h-8 w-8 text-candy-pink" />
          <span className="text-2xl font-bold text-candy-pink">СЛАДКОЕЖКА</span>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="font-semibold text-foreground hover:text-candy-pink transition-colors">
            О нас
          </a>
          <a href="#menu" className="font-semibold text-foreground hover:text-candy-pink transition-colors">
            Меню
          </a>
          <a href="#events" className="font-semibold text-foreground hover:text-candy-pink transition-colors">
            Праздники
          </a>
          <a href="#reviews" className="font-semibold text-foreground hover:text-candy-pink transition-colors">
            Отзывы
          </a>
          <a href="#contacts" className="font-semibold text-foreground hover:text-candy-pink transition-colors">
            Контакты
          </a>
          <Button className="candy-button flex items-center gap-2">
            <Coffee className="h-4 w-4" />
            Забронировать
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 absolute w-full candy-shadow">
          <div className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="font-semibold text-foreground hover:text-candy-pink transition-colors"
              onClick={() => setIsOpen(false)}
            >
              О нас
            </a>
            <a 
              href="#menu" 
              className="font-semibold text-foreground hover:text-candy-pink transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Меню
            </a>
            <a 
              href="#events" 
              className="font-semibold text-foreground hover:text-candy-pink transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Праздники
            </a>
            <a 
              href="#reviews" 
              className="font-semibold text-foreground hover:text-candy-pink transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Отзывы
            </a>
            <a 
              href="#contacts" 
              className="font-semibold text-foreground hover:text-candy-pink transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Контакты
            </a>
            <Button className="candy-button w-full flex items-center justify-center gap-2">
              <IceCream className="h-4 w-4" />
              Забронировать
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
