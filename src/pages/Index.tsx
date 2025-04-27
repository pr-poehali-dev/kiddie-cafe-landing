
import { NavBar } from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Cake, Calendar, Camera, Gift, Heart, IceCream, Mail, MapPin, Phone } from "lucide-react";
import heroImage from "/public/hero-cake.jpg";
import { MenuCard } from "@/components/MenuCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { EventCard } from "@/components/EventCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Добро пожаловать в кафе 
              <span className="text-candy-pink block">«СЛАДКОЕЖКА»</span>
            </h1>
            <p className="text-xl text-foreground/80">
              Место, где детские мечты о сладостях становятся реальностью! 
              Устройте незабываемый праздник в атмосфере волшебства и вкусных угощений.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button className="candy-button flex items-center gap-2">
                <Gift className="h-5 w-5" />
                Забронировать праздник
              </Button>
              <Button variant="outline" className="rounded-full border-candy-pink text-candy-pink hover:bg-candy-pink/10">
                Посмотреть меню
              </Button>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-candy-pink flex items-center justify-center text-white text-xs font-bold">
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-foreground/80">Более 1000 счастливых детей в месяц!</p>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="w-full h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden candy-shadow">
              <img 
                src="https://images.unsplash.com/photo-1464349095431-e9a21285b5c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80" 
                alt="Счастливые дети в кафе Сладкоежка" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-2xl candy-shadow animate-bounce-slow">
              <IceCream className="h-12 w-12 text-candy-blue" />
            </div>
            <div className="absolute -top-5 -right-5 bg-white p-4 rounded-2xl candy-shadow animate-bounce-slow" style={{animationDelay: "0.5s"}}>
              <Cake className="h-12 w-12 text-candy-pink" />
            </div>
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">О нашем <span className="text-candy-pink">кафе</span></h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              В «СЛАДКОЕЖКЕ» мы создаем не просто угощения, а настоящие кулинарные шедевры, которые радуют глаз и восхищают вкусом!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="candy-card text-center">
              <div className="w-16 h-16 bg-candy-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cake className="h-8 w-8 text-candy-pink" />
              </div>
              <h3 className="text-xl font-bold mb-2">Авторские десерты</h3>
              <p className="text-foreground/70">
                Наши кондитеры создают уникальные десерты, которые приведут в восторг как детей, так и взрослых.
              </p>
            </div>
            
            <div className="candy-card text-center">
              <div className="w-16 h-16 bg-candy-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-candy-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Безопасные ингредиенты</h3>
              <p className="text-foreground/70">
                Мы используем только натуральные и безопасные ингредиенты, с учетом детских особенностей.
              </p>
            </div>
            
            <div className="candy-card text-center">
              <div className="w-16 h-16 bg-candy-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-candy-yellow" />
              </div>
              <h3 className="text-xl font-bold mb-2">Яркие праздники</h3>
              <p className="text-foreground/70">
                Организуем незабываемые праздники с аниматорами, шоу-программой и вкусными угощениями.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наше <span className="text-candy-pink">меню</span></h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Специально разработанное детское меню с учетом всех потребностей растущего организма
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MenuCard 
              title="Молочные коктейли" 
              description="Нежные и воздушные молочные коктейли с разными вкусами" 
              price="от 250₽"
              image="https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              category="drinks"
            />
            
            <MenuCard 
              title="Мороженое-ассорти" 
              description="Разнообразие вкусов мороженого с добавками на выбор" 
              price="от 300₽"
              image="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              category="desserts"
            />
            
            <MenuCard 
              title="Праздничные торты" 
              description="Индивидуальный дизайн тортов на любой праздник" 
              price="от 1200₽"
              image="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1989&q=80"
              category="special"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button className="candy-button">Посмотреть все меню</Button>
          </div>
        </div>
      </section>
      
      {/* Events Section */}
      <section id="events" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Детские <span className="text-candy-pink">праздники</span></h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              У нас есть всё для организации незабываемого детского праздника!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <EventCard 
              title="День рождения" 
              description="Индивидуальная программа, праздничное меню и кенди-бар" 
              icon={<Cake className="h-8 w-8 text-candy-pink" />}
              image="https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            />
            
            <EventCard 
              title="Мастер-классы" 
              description="Кулинарные мастер-классы по приготовлению десертов" 
              icon={<IceCream className="h-8 w-8 text-candy-blue" />}
              image="https://images.unsplash.com/photo-1607715160827-920a0b3ca775?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80"
            />
            
            <EventCard 
              title="Детская фотосессия" 
              description="Тематические фотосессии в интерьере кафе" 
              icon={<Camera className="h-8 w-8 text-candy-yellow" />}
              image="https://images.unsplash.com/photo-1602972747061-5c7e4d8fe875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            />
          </div>
          
          <div className="mt-16 p-8 candy-card">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Хотите забронировать праздник?</h3>
                <p className="text-foreground/70 mb-6">
                  Оставьте заявку, и наш менеджер свяжется с вами для обсуждения деталей.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="candy-button flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Забронировать дату
                  </Button>
                  <Button variant="outline" className="rounded-full border-candy-pink text-candy-pink hover:bg-candy-pink/10">
                    Узнать подробности
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1464349095431-e9a21285b5c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80" 
                  alt="Детский праздник в кафе Сладкоежка" 
                  className="rounded-2xl w-full h-48 object-cover candy-shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="reviews" className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы <span className="text-candy-pink">родителей</span></h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Что говорят о нас счастливые родители и их дети
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Анна Смирнова" 
              role="Мама Миши, 6 лет"
              text="Отмечали день рождения сына в «Сладкоежке» — это было волшебно! Дети в восторге от аниматоров и десертов. Отдельное спасибо за индивидуальный подход и помощь в организации."
              rating={5}
              image="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80"
            />
            
            <TestimonialCard 
              name="Игорь Петров" 
              role="Папа Алисы, 7 лет"
              text="Сначала скептически относился к идее проведения праздника в кафе, но «Сладкоежка» превзошла все ожидания. Профессиональный подход, вкусное меню и главное — счастливый ребенок!"
              rating={4}
              image="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
            
            <TestimonialCard 
              name="Екатерина Иванова" 
              role="Мама Сони и Даши"
              text="Регулярно посещаем «Сладкоежку» с детьми. Очень нравится атмосфера, качество блюд и обслуживание. Можно расслабиться и провести время за чашечкой кофе, пока дети играют и угощаются."
              rating={5}
              image="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80"
            />
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши <span className="text-candy-pink">контакты</span></h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Мы ждем вас в гости! Свяжитесь с нами для бронирования столика или организации праздника.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-candy-pink/20 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-candy-pink" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Адрес</h3>
                  <p className="text-foreground/70">г. Москва, ул. Сладкая, д. 15</p>
                  <p className="text-foreground/70">ежедневно с 10:00 до 21:00</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-candy-blue/20 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-candy-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Телефон</h3>
                  <p className="text-foreground/70">+7 (999) 123-45-67</p>
                  <p className="text-foreground/70">+7 (999) 765-43-21</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-candy-yellow/20 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-candy-yellow" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-foreground/70">info@sladkoejka.ru</p>
                  <p className="text-foreground/70">booking@sladkoejka.ru</p>
                </div>
              </div>
            </div>
            
            <div className="h-80 rounded-2xl overflow-hidden candy-shadow">
              {/* Здесь должна быть карта, но для примера будет изображение */}
              <img 
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2378&q=80" 
                alt="Карта расположения кафе Сладкоежка" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gradient-to-b from-white to-pink-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Cake className="h-10 w-10 text-candy-pink" />
              <span className="text-2xl font-bold text-candy-pink">СЛАДКОЕЖКА</span>
            </div>
            
            <div className="flex flex-wrap gap-6 mb-6 md:mb-0 justify-center">
              <a href="#about" className="font-medium text-foreground hover:text-candy-pink transition-colors">О нас</a>
              <a href="#menu" className="font-medium text-foreground hover:text-candy-pink transition-colors">Меню</a>
              <a href="#events" className="font-medium text-foreground hover:text-candy-pink transition-colors">Праздники</a>
              <a href="#reviews" className="font-medium text-foreground hover:text-candy-pink transition-colors">Отзывы</a>
              <a href="#contacts" className="font-medium text-foreground hover:text-candy-pink transition-colors">Контакты</a>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-candy-pink rounded-full flex items-center justify-center text-white hover:bg-candy-pink/80 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-candy-blue rounded-full flex items-center justify-center text-white hover:bg-candy-blue/80 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-candy-yellow rounded-full flex items-center justify-center text-white hover:bg-candy-yellow/80 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" /></svg>
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-foreground/70">
            <p>© 2025 Детское кафе «СЛАДКОЕЖКА». Все права защищены.</p>
            <p className="mt-2">
              <a href="#" className="hover:text-candy-pink transition-colors">Политика конфиденциальности</a> | 
              <a href="#" className="hover:text-candy-pink transition-colors ml-2">Условия использования</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
