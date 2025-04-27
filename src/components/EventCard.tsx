import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface EventCardProps {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
}

const EventCard = ({ title, description, price, imageSrc }: EventCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover-scale transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-purple-600">{title}</h3>
          <span className="bg-pink-100 text-candy-pink px-3 py-1 rounded-full font-bold text-sm">
            {price}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button className="w-full candy-button flex items-center justify-center gap-2">
          <Calendar className="h-4 w-4" />
          Забронировать
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
