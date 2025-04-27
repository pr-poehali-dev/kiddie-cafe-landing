
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}

export const TestimonialCard = ({ name, role, text, rating, image }: TestimonialCardProps) => {
  return (
    <div className="candy-card h-full flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden candy-shadow">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-foreground/70 text-sm">{role}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-candy-yellow fill-candy-yellow' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="text-foreground/80 italic flex-grow">"{text}"</p>
      
      <div className="mt-4 text-right">
        <span className="text-xs text-foreground/60">Апрель 2025</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
