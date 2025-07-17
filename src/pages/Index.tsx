import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [calculatorData, setCalculatorData] = useState({
    carPrice: '',
    year: '',
    engine: '',
    transmission: ''
  });

  const calculateTotal = () => {
    const price = parseFloat(calculatorData.carPrice) || 0;
    const logistics = price * 0.15;
    const customs = price * 0.20;
    const commission = price * 0.08;
    const total = price + logistics + customs + commission;
    return { price, logistics, customs, commission, total };
  };

  const costs = calculateTotal();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Car" className="text-[#FF6B35]" size={32} />
              <h1 className="text-2xl font-bold text-[#2C3E50]">K-AUTO 96</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-gray-600 hover:text-[#FF6B35] transition-colors">Каталог</a>
              <a href="#calculator" className="text-gray-600 hover:text-[#FF6B35] transition-colors">Калькулятор</a>
              <a href="#steps" className="text-gray-600 hover:text-[#FF6B35] transition-colors">Этапы</a>
              <a href="#guarantees" className="text-gray-600 hover:text-[#FF6B35] transition-colors">Гарантии</a>
              <a href="#contacts" className="text-gray-600 hover:text-[#FF6B35] transition-colors">Контакты</a>
            </nav>
            <Button className="bg-[#FF6B35] hover:bg-[#e55a2b]">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-[#2C3E50] mb-6">
                Автомобили из Кореи
                <span className="text-[#FF6B35]"> под ключ</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Подбор и доставка качественных автомобилей из Южной Кореи. 
                Экономия до 30% от цен в России. Полное сопровождение сделки.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-[#FF6B35] hover:bg-[#e55a2b] px-8">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="border-[#2C3E50] text-[#2C3E50]">
                  <Icon name="Play" size={20} className="mr-2" />
                  Как это работает
                </Button>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2C3E50]">500+</div>
                  <div className="text-sm text-gray-600">Автомобилей</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2C3E50]">27</div>
                  <div className="text-sm text-gray-600">Дней доставка</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2C3E50]">30%</div>
                  <div className="text-sm text-gray-600">Экономия</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/81068982-74e5-4030-87bd-3a74f43d3a33.jpg" 
                alt="Korean cars showroom" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" className="text-green-500" size={20} />
                  <span className="text-sm font-medium">Сертифицированные авто</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4">Популярные модели</h2>
            <p className="text-xl text-gray-600">Самые востребованные автомобили из Кореи</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Hyundai Sonata", price: "от 1 800 000₽", year: "2022-2024", engine: "2.0L", image: "/img/0beb3c4d-3209-4adf-a3e6-09b25a2cab37.jpg" },
              { name: "Kia Sportage", price: "от 2 200 000₽", year: "2021-2024", engine: "2.0L", image: "/img/0beb3c4d-3209-4adf-a3e6-09b25a2cab37.jpg" },
              { name: "Genesis G70", price: "от 2 800 000₽", year: "2022-2024", engine: "2.0T", image: "/img/0beb3c4d-3209-4adf-a3e6-09b25a2cab37.jpg" },
              { name: "Hyundai Tucson", price: "от 2 100 000₽", year: "2021-2024", engine: "1.6T", image: "/img/0beb3c4d-3209-4adf-a3e6-09b25a2cab37.jpg" },
              { name: "Kia Sorento", price: "от 2 600 000₽", year: "2022-2024", engine: "2.5L", image: "/img/0beb3c4d-3209-4adf-a3e6-09b25a2cab37.jpg" },
              { name: "Genesis GV70", price: "от 3 400 000₽", year: "2022-2024", engine: "2.5T", image: "/img/0beb3c4d-3209-4adf-a3e6-09b25a2cab37.jpg" }
            ].map((car, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                <div className="aspect-video bg-gray-100 rounded-t-lg relative overflow-hidden">
                  <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                  <Badge className="absolute top-3 right-3 bg-[#FF6B35]">В наличии</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-[#2C3E50]">{car.name}</CardTitle>
                  <CardDescription className="text-[#FF6B35] font-semibold text-lg">{car.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Год:</span>
                      <span className="font-medium">{car.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Двигатель:</span>
                      <span className="font-medium">{car.engine}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-[#FF6B35] hover:bg-[#e55a2b]">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4">Калькулятор стоимости</h2>
            <p className="text-xl text-gray-600">Рассчитайте примерную стоимость автомобиля с доставкой</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="carPrice" className="text-base font-medium">Стоимость автомобиля в Корее (₩)</Label>
                    <Input
                      id="carPrice"
                      type="number"
                      placeholder="30000000"
                      value={calculatorData.carPrice}
                      onChange={(e) => setCalculatorData({...calculatorData, carPrice: e.target.value})}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="year" className="text-base font-medium">Год выпуска</Label>
                    <Select value={calculatorData.year} onValueChange={(value) => setCalculatorData({...calculatorData, year: value})}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Выберите год" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="engine" className="text-base font-medium">Объем двигателя</Label>
                    <Select value={calculatorData.engine} onValueChange={(value) => setCalculatorData({...calculatorData, engine: value})}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Выберите объем" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1.6">1.6L</SelectItem>
                        <SelectItem value="2.0">2.0L</SelectItem>
                        <SelectItem value="2.5">2.5L</SelectItem>
                        <SelectItem value="3.0">3.0L</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="transmission" className="text-base font-medium">Трансмиссия</Label>
                    <Select value={calculatorData.transmission} onValueChange={(value) => setCalculatorData({...calculatorData, transmission: value})}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Выберите трансмиссию" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="auto">Автоматическая</SelectItem>
                        <SelectItem value="manual">Механическая</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-4">Расчет стоимости</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Стоимость авто:</span>
                      <span className="font-medium">{costs.price.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Логистика (15%):</span>
                      <span className="font-medium">{costs.logistics.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Таможня (20%):</span>
                      <span className="font-medium">{costs.customs.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Комиссия (8%):</span>
                      <span className="font-medium">{costs.commission.toLocaleString()} ₽</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Итого:</span>
                      <span className="text-[#FF6B35]">{costs.total.toLocaleString()} ₽</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-[#FF6B35] hover:bg-[#e55a2b]">
                    Заказать подбор
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="steps" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4">Этапы работы</h2>
            <p className="text-xl text-gray-600">Простой и понятный процесс покупки автомобиля</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Заявка", description: "Оставляете заявку на подбор автомобиля", icon: "FileText" },
              { step: "02", title: "Подбор", description: "Находим подходящий автомобиль в Корее", icon: "Search" },
              { step: "03", title: "Выкуп", description: "Выкупаем и оформляем автомобиль", icon: "CreditCard" },
              { step: "04", title: "Доставка", description: "Доставляем автомобиль в Россию", icon: "Truck" }
            ].map((step, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow bg-white">
                <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={step.icon as any} className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-[#2C3E50] mb-2">{step.step}</div>
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section id="guarantees" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4">Наши гарантии</h2>
            <p className="text-xl text-gray-600">Мы берем на себя все риски и обеспечиваем полную безопасность сделки</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Юридическая чистота", description: "Все документы проверены и оформлены правильно", icon: "Shield" },
              { title: "Техническое состояние", description: "Диагностика и проверка всех систем автомобиля", icon: "Settings" },
              { title: "Сроки доставки", description: "Доставка точно в оговоренные сроки", icon: "Clock" },
              { title: "Возврат средств", description: "100% возврат при отказе от сделки", icon: "RefreshCw" },
              { title: "Поддержка 24/7", description: "Круглосуточная поддержка на всех этапах", icon: "Headphones" },
              { title: "Страховка", description: "Полная страховка автомобиля при транспортировке", icon: "Umbrella" }
            ].map((guarantee, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={guarantee.icon as any} className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2C3E50] mb-2">{guarantee.title}</h3>
                    <p className="text-gray-600">{guarantee.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-[#2C3E50]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Контакты</h2>
            <p className="text-xl text-gray-300">Свяжитесь с нами любым удобным способом</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Телефон", value: "+7 (999) 123-45-67", icon: "Phone" },
              { title: "Email", value: "info@k-auto96.ru", icon: "Mail" },
              { title: "Адрес", value: "г. Екатеринбург, ул. Ленина, 1", icon: "MapPin" },
              { title: "Время работы", value: "Пн-Пт: 9:00-18:00", icon: "Clock" }
            ].map((contact, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={contact.icon as any} className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{contact.title}</h3>
                <p className="text-gray-300">{contact.value}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-[#FF6B35] hover:bg-[#e55a2b] px-8">
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Car" className="text-[#FF6B35]" size={28} />
                <span className="text-xl font-bold">K-AUTO 96</span>
              </div>
              <p className="text-gray-400">
                Профессиональная покупка и доставка автомобилей из Южной Кореи
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Подбор автомобилей</li>
                <li>Доставка из Кореи</li>
                <li>Таможенное оформление</li>
                <li>Техническая проверка</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О компании</li>
                <li>Отзывы клиентов</li>
                <li>Гарантии</li>
                <li>Контакты</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 K-AUTO 96. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;