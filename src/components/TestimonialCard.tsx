interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  imageSrc: string;
}

const TestimonialCard = ({ name, role, quote, imageSrc }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover-scale transition-all duration-300">
      <div className="flex items-center mb-4">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-candy-pink"
        />
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <div className="relative">
        <svg 
          className="absolute top-0 left-0 w-8 h-8 text-purple-100 transform -translate-x-4 -translate-y-4" 
          fill="currentColor" 
          viewBox="0 0 32 32"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="text-gray-700 italic relative z-10 pl-2">
          "{quote}"
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
