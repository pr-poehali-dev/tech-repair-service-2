import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      category: "Телевизоры",
      icon: "Tv",
      items: [
        { name: "Замена подсветки", price: "2000 ₽" },
        { name: "Замена блока питания", price: "2000 ₽" },
        { name: "Настройка каналов/антенны/спутника", price: "500 ₽" },
      ],
    },
    {
      category: "Компьютеры",
      icon: "Monitor",
      items: [
        { name: "Чистка от вирусов", price: "500 ₽" },
        { name: "Установка драйверов", price: "500 ₽" },
        { name: "Установка Windows 7, 8, 10, 11", price: "1000 ₽" },
        { name: "Настройка интернета", price: "500 ₽" },
      ],
    },
    {
      category: "Принтеры",
      icon: "Printer",
      items: [
        { name: "Заправка картриджей", price: "500 ₽" },
        { name: "Замена роликов", price: "500 ₽" },
        { name: "Замена печки", price: "1000 ₽" },
      ],
    },
  ];

  const reviews = [
    {
      name: "Ольга С.",
      text: "Быстро приехал, все починил. Телевизор работает как новый!",
      rating: 5,
    },
    {
      name: "Михаил П.",
      text: "Профессиональный подход, адекватные цены. Рекомендую!",
      rating: 5,
    },
    {
      name: "Анна К.",
      text: "Очень доволен работой мастера. Теперь только к нему обращаюсь.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            Симферополь
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Ремонт техники на дому
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Профессиональный ремонт телевизоров, компьютеров и принтеров с выездом на дом
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="flex items-center justify-center gap-2 text-primary">
              <Icon name="CheckCircle" size={24} />
              <span className="font-medium">Выезд бесплатно</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-primary">
              <Icon name="CheckCircle" size={24} />
              <span className="font-medium">Диагностика бесплатно</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-primary">
              <Icon name="CheckCircle" size={24} />
              <span className="font-medium">Гарантия 1 год</span>
            </div>
          </div>
          <Button size="lg" className="text-lg px-8 py-6">
            <Icon name="Phone" className="mr-2" size={20} />
            Позвонить мастеру
          </Button>
        </div>
      </section>

      <section id="services" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Услуги и цены
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Услуги от 500 рублей
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="p-6 hover:shadow-lg transition-shadow animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name={service.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold">{service.category}</h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex justify-between items-start gap-2"
                    >
                      <span className="text-sm text-muted-foreground flex-1">
                        {item.name}
                      </span>
                      <span className="font-semibold text-primary whitespace-nowrap">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 animate-fade-in">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                    АМ
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-2">Мастер Антон</h2>
                  <p className="text-muted-foreground mb-4">
                    3 года опыта работы в сфере ремонта электроники
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <Icon name="Award" className="text-primary" size={20} />
                      <span>Гарантия на работу 1 год</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <Icon name="Users" className="text-primary" size={20} />
                      <span>Пенсионерам скидка 30%</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <Icon name="MapPin" className="text-primary" size={20} />
                      <span>Выезд по всему Симферополю</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Отзывы клиентов
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, idx) => (
              <Card key={idx} className="p-6 animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={18} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{review.text}</p>
                <p className="font-semibold">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Контакты</h2>
          <Card className="max-w-md mx-auto p-8 animate-fade-in">
            <div className="space-y-6">
              <div>
                <Icon name="Phone" className="mx-auto text-primary mb-3" size={40} />
                <p className="text-sm text-muted-foreground mb-2">Позвоните нам</p>
                <a
                  href="tel:+79781234567"
                  className="text-2xl font-bold text-primary hover:underline"
                >
                  +7 (978) 123-45-67
                </a>
              </div>
              <div>
                <Icon name="MessageCircle" className="mx-auto text-primary mb-3" size={40} />
                <p className="text-sm text-muted-foreground mb-2">Напишите в WhatsApp</p>
                <a
                  href="https://wa.me/79781234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-primary hover:underline"
                >
                  WhatsApp
                </a>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Работаем ежедневно с 8:00 до 22:00
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Ремонт техники на дому | Симферополь
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
