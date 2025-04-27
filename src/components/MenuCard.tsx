import { Button } from "@/components/ui/button";

interface MenuCardProps {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
}

const MenuCard = ({ title, description, price, imageSrc }: MenuCardProps) => {
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
          <h3 className="text-xl font-bold text-candy-pink">{title}</h3>
          <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-bold text-sm">
            {price}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="outline" className="w-full border-candy-pink text-candy-pink hover:bg-pink-50">
          Добавить в заказ
        </Button>
      </div>
    </div>
  );
};

export default MenuCard;
