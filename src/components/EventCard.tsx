
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface EventCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  image: string;
}

export const EventCard = ({ title, description, icon, image }: EventCardProps) => {
  return (
    <div className="candy-card overflow-hidden group">
      <div className="h-48 rounded-xl overflow-hidden mb-6 relative group-hover:scale-[1.03] transition-transform duration-300">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 bg-white p-2 rounded-full candy-shadow">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-foreground/70 mb-4">{description}</p>
      
      <button className="text-candy-pink hover:text-candy-pink/80 font-medium transition-colors flex items-center gap-1">
        Подробнее <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default EventCard;
