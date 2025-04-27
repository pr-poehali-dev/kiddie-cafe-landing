
import { cn } from "@/lib/utils";
import { IceCream, Coffee, Cake } from "lucide-react";

interface MenuCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  category: "drinks" | "desserts" | "special";
}

export const MenuCard = ({ title, description, price, image, category }: MenuCardProps) => {
  const getCategoryIcon = () => {
    switch (category) {
      case "drinks":
        return <Coffee className="h-5 w-5" />;
      case "desserts":
        return <IceCream className="h-5 w-5" />;
      case "special":
        return <Cake className="h-5 w-5" />;
      default:
        return <IceCream className="h-5 w-5" />;
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case "drinks":
        return "bg-candy-blue text-white";
      case "desserts":
        return "bg-candy-pink text-white";
      case "special":
        return "bg-candy-yellow text-white";
      default:
        return "bg-candy-pink text-white";
    }
  };

  return (
    <div className="candy-card hover:scale-[1.03] transition-transform duration-300 overflow-hidden">
      <div className="relative h-48 rounded-xl overflow-hidden mb-4 candy-shadow">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className={cn("absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1", getCategoryColor())}>
          {getCategoryIcon()}
          {category === "drinks" ? "Напитки" : category === "desserts" ? "Десерты" : "Особое"}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-foreground/70 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-candy-pink">{price}</span>
        <button className="text-candy-pink hover:text-candy-pink/80 font-medium transition-colors">
          Подробнее →
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
