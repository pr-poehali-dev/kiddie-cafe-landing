import NavBar from "@/components/NavBar";
import MenuCard from "@/components/MenuCard";
import EventCard from "@/components/EventCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Cake, Calendar, Gift, MapPin, Phone, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <NavBar />
      
      {/* Hero Section */}
      <section className="py-16 px-4 md:py-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-candy-pink mb-4">
              Самое вкусное и <span className="text-purple-500">веселое</span> место для детей!
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              В кафе "СЛАДКОЕЖКА" каждый ребенок найдет сладости по вкусу и море развлечений. Мы создаем незабываемые моменты радости!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="candy-button text-lg py-6">Забронировать стол</Button>
              <Button variant="outline" className="text-lg py-6 border-candy-pink text-candy-pink hover:bg-pink-50">
                Узнать о праздниках
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Счастливые дети в кафе" 
              className="rounded-lg shadow-xl w-full hover-scale"
            />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white candy-shadow">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-candy-pink">
            О нашем волшебном кафе
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-pink-50 p-6 rounded-lg shadow-md hover-scale">
              <Cake className="h-12 w-12 mb-4 text-candy-pink" />
              <h3 className="text-xl font-bold mb-2">Вкусные угощения</h3>
              <p className="text-gray-700">
                Наше меню создано специально для юных гурманов. Десерты готовятся из натуральных продуктов, с заботой о детском здоровье.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg shadow-md hover-scale">
              <Calendar className="h-12 w-12 mb-4 text-purple-500" />
              <h3 className="text-xl font-bold mb-2">Тематические праздники</h3>
              <p className="text-gray-700">
                Организуем незабываемые дни рождения, детские праздники и мероприятия с аниматорами, играми и конкурсами.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover-scale">
              <Gift className="h-12 w-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-bold mb-2">Уютная атмосфера</h3>
              <p className="text-gray-700">
                Безопасное пространство с игровой зоной, где дети могут веселиться, а родители отдохнуть в приятной обстановке.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Menu Section */}
      <section id="menu" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-candy-pink">
            Наше сказочное меню
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MenuCard 
              title="Радужный милкшейк" 
              description="Молочный коктейль с разноцветными слоями и взбитыми сливками" 
              price="260 ₽" 
              imageSrc="https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            
            <MenuCard 
              title="Волшебные панкейки" 
              description="Пышные панкейки с ягодами, шоколадом и кленовым сиропом" 
              price="290 ₽" 
              imageSrc="https://images.unsplash.com/photo-1565299543923-37dd37887442?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            
            <MenuCard 
              title="Мороженое-единорог" 
              description="Три шарика мороженого с разноцветной посыпкой и сладким рожком" 
              price="220 ₽" 
              imageSrc="https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            
            <MenuCard 
              title="Фруктовый салат" 
              description="Свежие сезонные фрукты с йогуртовой заправкой и орешками" 
              price="240 ₽" 
              imageSrc="https://images.unsplash.com/photo-1564093497595-593b96d80180?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            
            <MenuCard 
              title="Шоколадный фонтан" 
              description="Горячий шоколад с фруктами и маршмеллоу для макания" 
              price="350 ₽" 
              imageSrc="https://images.unsplash.com/photo-1481391319762-47dff72954d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            
            <MenuCard 
              title="Пицца 'Веселая'" 
              description="Мини-пицца с улыбающимся лицом из овощей и сыра" 
              price="280 ₽" 
              imageSrc="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button className="candy-button text-lg py-6">Посмотреть полное меню</Button>
          </div>
        </div>
      </section>
      
      {/* Events Section */}
      <section id="events" className="py-16 px-4 bg-white candy-shadow">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-candy-pink">
            Организация детских праздников
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <EventCard 
              title="День рождения" 
              description="Незабываемый праздник с тортом, конкурсами и аниматорами" 
              price="от 5900 ₽" 
              imageSrc="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            
            <EventCard 
              title="Выпускной из сада" 
              description="Торжественное мероприятие для будущих школьников" 
              price="от 7900 ₽" 
              imageSrc="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            
            <EventCard 
              title="Тематическая вечеринка" 
              description="Праздник в стиле любимых мультфильмов и сказок" 
              price="от 6500 ₽" 
              imageSrc="https://images.unsplash.com/photo-1627646791843-c88a9916330f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button className="candy-button text-lg py-6">Забронировать праздник</Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="reviews" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-candy-pink">
            Отзывы счастливых родителей и детей
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Елена М." 
              role="Мама двух принцесс" 
              quote="Прекрасное место! Организовали день рождения дочери на высшем уровне. Дети были в восторге от анимации, а десерты — просто объедение!" 
              imageSrc="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            
            <TestimonialCard 
              name="Сергей К." 
              role="Папа юного супергероя" 
              quote="Сначала сомневался, но решил довериться рекомендациям. Результат превзошел ожидания! Интересная программа, вкусная еда и отличный сервис." 
              imageSrc="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            
            <TestimonialCard 
              name="Маша, 8 лет" 
              role="Именинница" 
              quote="Это был самый классный день рождения! Аниматоры играли с нами в игры, торт был очень красивый и вкусный. Хочу еще раз сюда прийти!" 
              imageSrc="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contacts" className="py-16 px-4 bg-white candy-shadow">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-candy-pink">
            Приходите к нам в гости!
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-candy-pink">Наши контакты</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-4 text-candy-pink" />
                  <p className="text-lg">Москва, ул. Сладкая, д. 17</p>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-4 text-candy-pink" />
                  <p className="text-lg">+7 (495) 123-45-67</p>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-6 w-6 mr-4 text-candy-pink" />
                  <p className="text-lg">info@sladkoejka.ru</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-6 mt-8 text-candy-pink">Часы работы</h3>
              <div className="space-y-2">
                <p className="text-lg">Пн-Пт: 10:00 - 20:00</p>
                <p className="text-lg">Сб-Вс: 10:00 - 22:00</p>
              </div>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.3988241451987!2d37.618675!3d55.755825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIxLjAiTiAzN8KwMzcnMDcuMyJF!5e0!3m2!1sru!2sru!4v1619431320983!5m2!1sru!2sru" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="candy-button text-lg py-6">Связаться с нами</Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-purple-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-2">
                <Cake className="h-6 w-6 text-candy-pink" />
                <span className="text-xl font-bold">СЛАДКОЕЖКА</span>
              </div>
              <p className="mt-2 text-purple-200">© 2025 Детское кафе "СЛАДКОЕЖКА"</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
