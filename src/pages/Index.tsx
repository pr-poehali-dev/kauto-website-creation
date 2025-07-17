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
    transmission: '',
    brand: '',
    model: ''
  });

  const calculateTotal = () => {
    const price = parseFloat(calculatorData.carPrice) || 0;
    const wonToRub = 0.075; // Курс вона к рублю
    const priceInRub = price * wonToRub;
    
    // Базовые расходы
    const logistics = priceInRub * 0.20;
    const customs = priceInRub * 0.30;
    const commission = priceInRub * 0.10;
    const insurance = priceInRub * 0.03;
    const registration = 50000;
    
    // Дополнительные расходы в зависимости от года
    const yearMultiplier = calculatorData.year === '2024' ? 1.0 : 
                          calculatorData.year === '2023' ? 0.95 : 
                          calculatorData.year === '2022' ? 0.90 : 
                          calculatorData.year === '2021' ? 0.85 : 0.80;
    
    const total = (priceInRub + logistics + customs + commission + insurance + registration) * yearMultiplier;
    
    return { 
      price: priceInRub, 
      logistics, 
      customs, 
      commission, 
      insurance, 
      registration, 
      total,
      yearMultiplier 
    };
  };

  const costs = calculateTotal();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Car" className="text-green-500" size={32} />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent">K-AUTO 96</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-green-500 transition-colors font-medium">Услуги</a>
              <a href="#advantages" className="text-gray-600 hover:text-green-500 transition-colors font-medium">Преимущества</a>
              <a href="#calculator" className="text-gray-600 hover:text-green-500 transition-colors font-medium">Калькулятор</a>
              <a href="#work-process" className="text-gray-600 hover:text-green-500 transition-colors font-medium">Как работаем</a>
              <a href="#contacts" className="text-gray-600 hover:text-green-500 transition-colors font-medium">Контакты</a>
            </nav>
            <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-red-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="pt-8">
              <h2 className="text-6xl font-bold mb-8 animate-fade-in">
                K-AUTO 96 — Подбор и выкуп авто из Южной Кореи
                <span className="bg-gradient-to-r from-green-400 to-red-400 bg-clip-text text-transparent"> с доставкой в РФ под ключ!</span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 animate-fade-in">
                Премиум подбор и экспорт авто из Южной Кореи в Россию. Привезем в топовой комплектации с низким пробегом. Доставим за 27 дней. Цены ниже на 30% чем в РФ
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mb-12 animate-slide-up">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-10 py-4 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость авто
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 shadow-lg transform hover:-translate-y-1 transition-all duration-300" onClick={() => window.open('https://t.me/+QgiLIa1gFRY4Y2Iy', '_blank')}>
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 animate-slide-up">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
                  <div className="text-sm text-gray-300">Автомобилей привезено</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">27</div>
                  <div className="text-sm text-gray-300">Дней доставка</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">30%</div>
                  <div className="text-sm text-gray-300">Экономия от цен в РФ</div>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in flex justify-center items-center">
              <div className="w-full max-w-lg">
                <img 
                  src="/img/6583de9a-46cd-45c3-960a-0aeffd56bb77.jpg" 
                  alt="Korean luxury cars showroom" 
                  className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" className="text-white" size={24} />
                    <span className="text-lg font-semibold text-white">Работаем официально</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Полный цикл подбора и доставки автомобилей из Кореи</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="group relative overflow-hidden text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-float shadow-lg">
                  <Icon name="Search" className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">Подбор автомобиля</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors text-lg">Найдем автомобиль по вашим требованиям на аукционах и у дилеров</p>
              </div>
              <img src="/img/48803df7-31c9-4e31-bb4b-852f77979fd2.jpg" alt="Car selection" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            </Card>
            <Card className="group relative overflow-hidden text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-float shadow-lg">
                  <Icon name="CreditCard" className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">Выкуп и оформление</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors text-lg">Выкупаем автомобиль, проверяем документы и готовим к отправке</p>
              </div>
              <img src="/img/7a742843-b211-4f10-8c4f-bec779fbb031.jpg" alt="Car inspection" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            </Card>
            <Card className="group relative overflow-hidden text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-float shadow-lg">
                  <Icon name="Truck" className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">Доставка в РФ</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors text-lg">Морская доставка и таможенное оформление в России под ключ</p>
              </div>
              <img src="/img/6a17d362-8a67-4684-8269-57b54c7f2b84.jpg" alt="Car shipping" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50/30 to-gray-50/30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in">Наши преимущества в работе с корейскими автомобилями</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Цены ниже на 30%", 
                description: "Прямые поставки от производителей и дилеров", 
                icon: "DollarSign",
                color: "bg-gradient-to-br from-green-500 to-green-600",
                delay: "0s"
              },
              { 
                title: "Доставка 27 дней", 
                description: "Быстрая морская доставка контейнерами", 
                icon: "Clock",
                color: "bg-gradient-to-br from-gray-700 to-gray-900",
                delay: "0.2s"
              },
              { 
                title: "Топовая комплектация", 
                description: "Автомобили в максимальной комплектации", 
                icon: "Star",
                color: "bg-gradient-to-br from-red-500 to-red-600",
                delay: "0.4s"
              },
              { 
                title: "Низкий пробег", 
                description: "Только автомобили с минимальным пробегом", 
                icon: "Gauge",
                color: "bg-gradient-to-br from-gray-600 to-gray-700",
                delay: "0.6s"
              },
              { 
                title: "Юридическая чистота", 
                description: "Все документы и сертификаты в порядке", 
                icon: "Shield",
                color: "bg-gradient-to-br from-red-600 to-red-700",
                delay: "0.8s"
              },
              { 
                title: "Гарантия качества", 
                description: "Техническая проверка перед отправкой", 
                icon: "CheckCircle",
                color: "bg-gradient-to-br from-green-600 to-green-700",
                delay: "1s"
              },
              { 
                title: "Страхование", 
                description: "Полная страховка на время доставки", 
                icon: "Umbrella",
                color: "bg-gradient-to-br from-gray-800 to-gray-900",
                delay: "1.2s"
              },
              { 
                title: "Поддержка 24/7", 
                description: "Консультации на всех этапах покупки", 
                icon: "Headphones",
                color: "bg-gradient-to-br from-red-500 to-red-600",
                delay: "1.4s"
              }
            ].map((advantage, index) => (
              <Card 
                key={index} 
                className="group text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg animate-slide-up hover:bg-white"
                style={{ animationDelay: advantage.delay }}
              >
                <div className={`w-20 h-20 ${advantage.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-float shadow-lg`}>
                  <Icon name={advantage.icon as any} className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">{advantage.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{advantage.description}</p>
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-green-500 to-red-500 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50/30 to-red-50/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">Калькулятор стоимости</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in">Точный расчет стоимости автомобиля с доставкой из Южной Кореи</p>
          </div>
          <div className="max-w-6xl mx-auto">
            <Card className="p-10 bg-white/90 backdrop-blur-sm shadow-2xl border-0 rounded-3xl">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="brand" className="text-lg font-semibold text-gray-900 mb-3 block">Марка</Label>
                      <Select value={calculatorData.brand} onValueChange={(value) => setCalculatorData({...calculatorData, brand: value})}>
                        <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-green-500 rounded-xl">
                          <SelectValue placeholder="Выберите марку" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hyundai">Hyundai</SelectItem>
                          <SelectItem value="kia">Kia</SelectItem>
                          <SelectItem value="genesis">Genesis</SelectItem>
                          <SelectItem value="ssangyong">SsangYong</SelectItem>
                          <SelectItem value="samsung">Samsung (Renault)</SelectItem>
                          <SelectItem value="daewoo">Daewoo</SelectItem>
                          <SelectItem value="chevrolet">Chevrolet Korea</SelectItem>
                          <SelectItem value="bmw">BMW Korea</SelectItem>
                          <SelectItem value="mercedes">Mercedes Korea</SelectItem>
                          <SelectItem value="audi">Audi Korea</SelectItem>
                          <SelectItem value="lexus">Lexus Korea</SelectItem>
                          <SelectItem value="infiniti">Infiniti Korea</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="model" className="text-lg font-semibold text-gray-900 mb-3 block">Модель</Label>
                      <Input
                        id="model"
                        placeholder="напр. Tucson"
                        value={calculatorData.model}
                        onChange={(e) => setCalculatorData({...calculatorData, model: e.target.value})}
                        className="h-12 border-2 border-gray-200 focus:border-green-500 rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="carPrice" className="text-lg font-semibold text-gray-900 mb-3 block">Стоимость автомобиля в Корее (₩)</Label>
                    <Input
                      id="carPrice"
                      type="number"
                      placeholder="30,000,000"
                      value={calculatorData.carPrice}
                      onChange={(e) => setCalculatorData({...calculatorData, carPrice: e.target.value})}
                      className="h-12 border-2 border-gray-200 focus:border-green-500 rounded-xl text-lg"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="year" className="text-lg font-semibold text-gray-900 mb-3 block">Год выпуска</Label>
                      <Select value={calculatorData.year} onValueChange={(value) => setCalculatorData({...calculatorData, year: value})}>
                        <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-green-500 rounded-xl">
                          <SelectValue placeholder="Выберите год" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2024">2024</SelectItem>
                          <SelectItem value="2023">2023</SelectItem>
                          <SelectItem value="2022">2022</SelectItem>
                          <SelectItem value="2021">2021</SelectItem>
                          <SelectItem value="2020">2020</SelectItem>
                          <SelectItem value="2019">2019</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="engine" className="text-lg font-semibold text-gray-900 mb-3 block">Объем двигателя</Label>
                      <Select value={calculatorData.engine} onValueChange={(value) => setCalculatorData({...calculatorData, engine: value})}>
                        <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-green-500 rounded-xl">
                          <SelectValue placeholder="Объем" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1.4">1.4L</SelectItem>
                          <SelectItem value="1.6">1.6L</SelectItem>
                          <SelectItem value="2.0">2.0L</SelectItem>
                          <SelectItem value="2.5">2.5L</SelectItem>
                          <SelectItem value="3.0">3.0L</SelectItem>
                          <SelectItem value="3.5">3.5L</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="transmission" className="text-lg font-semibold text-gray-900 mb-3 block">Трансмиссия</Label>
                    <Select value={calculatorData.transmission} onValueChange={(value) => setCalculatorData({...calculatorData, transmission: value})}>
                      <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-green-500 rounded-xl">
                        <SelectValue placeholder="Выберите трансмиссию" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="auto">Автоматическая</SelectItem>
                        <SelectItem value="manual">Механическая</SelectItem>
                        <SelectItem value="cvt">CVT</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 rounded-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-red-900/20"></div>
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-6">
                      <Icon name="Calculator" className="text-green-400" size={28} />
                      <h3 className="text-2xl font-bold">Подробный расчет</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-300">Стоимость авто:</span>
                        <span className="font-semibold text-lg">{costs.price.toLocaleString()} ₽</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-300">Логистика (20%):</span>
                        <span className="font-semibold text-lg">{costs.logistics.toLocaleString()} ₽</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-300">Таможня (30%):</span>
                        <span className="font-semibold text-lg">{costs.customs.toLocaleString()} ₽</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-300">Комиссия (10%):</span>
                        <span className="font-semibold text-lg">{costs.commission.toLocaleString()} ₽</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-300">Страхование (3%):</span>
                        <span className="font-semibold text-lg">{costs.insurance.toLocaleString()} ₽</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-300">Оформление:</span>
                        <span className="font-semibold text-lg">{costs.registration.toLocaleString()} ₽</span>
                      </div>
                      <Separator className="bg-gray-700 my-4" />
                      <div className="flex justify-between items-center py-3 text-xl font-bold border-t-2 border-green-500">
                        <span>Итого к оплате:</span>
                        <span className="text-green-400">{costs.total.toLocaleString()} ₽</span>
                      </div>
                      {calculatorData.year && (
                        <div className="mt-4 p-3 bg-gradient-to-r from-green-600/20 to-red-600/20 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <Icon name="Info" size={16} className="text-green-400" />
                            <span className="text-sm text-gray-300">Коэффициент за год: {(costs.yearMultiplier * 100).toFixed(0)}%</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="mt-8 space-y-3">
                      <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 text-lg shadow-lg">
                        <Icon name="MessageCircle" size={20} className="mr-2" />
                        Получить консультацию
                      </Button>
                      <Button variant="outline" className="w-full border-2 border-gray-600 text-gray-300 hover:bg-gray-800 py-3 text-lg">
                        <Icon name="Download" size={20} className="mr-2" />
                        Скачать расчет
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section id="work-process" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50/30 to-red-50/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">Как мы работаем</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in">Пошаговый процесс покупки автомобиля из Кореи с премиум сервисом</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 to-red-400 hidden lg:block rounded-full shadow-lg"></div>
            <div className="space-y-16">
              {[
                { 
                  step: "01", 
                  title: "Заявка и консультация", 
                  description: "Вы оставляете заявку на сайте или пишете в мессенджер. Подбираем 3–5 подходящих вариантов с учётом пожеланий и стоимости.",
                  icon: "MessageCircle",
                  image: "/img/2ea165f6-f950-424b-9e24-29f87790f76b.jpg",
                  delay: "0s"
                },
                { 
                  step: "02", 
                  title: "Договор и старт работы", 
                  description: "Заключаем договор в нашем офисе в Екатеринбурге или дистанционно. Создаём общий чат в Telegram с командой. Всё общение и этапы сделки фиксируются там.",
                  icon: "FileText",
                  image: "/img/59a86106-6de2-4e84-b9f7-4af18c626784.jpg",
                  delay: "0.1s"
                },
                { 
                  step: "03", 
                  title: "Предоплата", 
                  description: "Вы оплачиваете 150 000 ₽ за услугу. И мы выезжаем на осмотр подобранных вариантов.",
                  icon: "CreditCard",
                  image: "/img/7a742843-b211-4f10-8c4f-bec779fbb031.jpg",
                  delay: "0.2s"
                },
                { 
                  step: "04", 
                  title: "Первичный осмотр", 
                  description: "Проводим детальный осмотр. Высылаем отчёт более 100 подробных фото, 10 видео и диагностический отчёт. После утверждения понравившегося варианта - вносите залог за авто (сумма входит в конечную стоимость).",
                  icon: "Eye",
                  image: "/img/e3f34ee8-f537-4db7-a15e-eceb169db693.jpg",
                  delay: "0.3s"
                },
                { 
                  step: "05", 
                  title: "Выкуп и вторичный осмотр", 
                  description: "В течение 7 дней после внесения залога - вы оплачиваете авто и все расходы по Корее через наши обменники по всей стране или инвойсом через банк (для несанкционных авто). Мы выкупаем машину и проводим вторичный осмотр на подъемнике с фото и видео отчётом.",
                  icon: "ShoppingCart",
                  image: "/img/7a742843-b211-4f10-8c4f-bec779fbb031.jpg",
                  delay: "0.4s"
                },
                { 
                  step: "06", 
                  title: "Отправка и доставка", 
                  description: "Снимаем авто с учёта, оформляем документы, отправляем в порт Пусана, а затем паромом во Владивосток.",
                  icon: "Ship",
                  image: "/img/6a17d362-8a67-4684-8269-57b54c7f2b84.jpg",
                  delay: "0.5s"
                },
                { 
                  step: "07", 
                  title: "Растаможка авто", 
                  description: "Авто растамаживается в городе Владивосток нашими брокерами. Вы оплачиваете растаможку, брокера и логистику по России на данном этапе.",
                  icon: "ClipboardCheck",
                  image: "/img/59a86106-6de2-4e84-b9f7-4af18c626784.jpg",
                  delay: "0.6s"
                },
                { 
                  step: "08", 
                  title: "Получение автомобиля", 
                  description: "Вы получаете авто с полным пакетом документов. Машина готова к постановке на учет.",
                  icon: "CheckCircle",
                  image: "/img/e3f34ee8-f537-4db7-a15e-eceb169db693.jpg",
                  delay: "0.7s"
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className={`group animate-slide-up flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12`}
                  style={{ animationDelay: step.delay }}
                >
                  <div className="flex-1 relative">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-green-400 to-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="flex items-center mb-6">
                      <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-green-500 to-red-500 rounded-full flex items-center justify-center mr-6 group-hover:animate-float shadow-lg">
                        <Icon name={step.icon as any} className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="text-sm text-green-600 font-bold mb-1">Шаг {step.step}</div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">{step.description}</p>
                  </div>
                  <div className="flex-1 relative">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-2">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                        <div className="w-12 h-1 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FF6B35] to-[#e55a2b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы купить автомобиль из Кореи?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Оставьте заявку прямо сейчас и получите персональный расчет стоимости автомобиля с доставкой
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#FF6B35] hover:bg-gray-100 px-8">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#FF6B35] px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить сейчас
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4">Частые вопросы</h2>
            <p className="text-xl text-gray-600">Ответы на самые популярные вопросы о покупке авто из Кореи</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "Сколько времени занимает доставка автомобиля?",
                answer: "Доставка автомобиля из Кореи в Россию занимает 27 дней с момента выкупа. Это включает подготовку документов, морскую перевозку и таможенное оформление."
              },
              {
                question: "Какие гарантии вы предоставляете?",
                answer: "Мы предоставляем полную юридическую гарантию чистоты автомобиля, гарантию технического состояния, страхование на время доставки и гарантию возврата средств при отказе от сделки."
              },
              {
                question: "Можно ли посмотреть автомобиль перед покупкой?",
                answer: "Да, мы предоставляем детальные фото и видео автомобиля, а также можем организовать онлайн-просмотр через видеосвязь с нашим представителем в Корее."
              },
              {
                question: "Какие документы нужны для покупки?",
                answer: "Для покупки автомобиля потребуется паспорт РФ, справка о доходах для таможни и договор с нашей компанией. Все остальные документы мы оформляем самостоятельно."
              },
              {
                question: "Действительно ли цены ниже на 30%?",
                answer: "Да, благодаря прямым поставкам от производителей и дилеров, отсутствию посредников и курсу валют, цены на корейские автомобили действительно ниже российских на 25-35%."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-[#2C3E50] mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600">Готовы ответить на все ваши вопросы и помочь с выбором автомобиля</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center">
                    <Icon name="Phone" className="text-white" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2C3E50]">Телефон</div>
                    <div className="text-gray-600">+7 (999) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center">
                    <Icon name="Mail" className="text-white" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2C3E50]">Email</div>
                    <div className="text-gray-600">info@k-auto96.ru</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center">
                    <Icon name="MapPin" className="text-white" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2C3E50]">Адрес</div>
                    <div className="text-gray-600">г. Екатеринбург, ул. Ленина, 1</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center">
                    <Icon name="Clock" className="text-white" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2C3E50]">Время работы</div>
                    <div className="text-gray-600">Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Оставить заявку</h3>
              <Card className="p-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-base font-medium text-[#2C3E50]">Ваше имя</Label>
                    <Input id="name" placeholder="Введите ваше имя" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-base font-medium text-[#2C3E50]">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="car" className="text-base font-medium text-[#2C3E50]">Интересующий автомобиль</Label>
                    <Input id="car" placeholder="Например: Hyundai Sonata 2023" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-base font-medium text-[#2C3E50]">Сообщение</Label>
                    <textarea 
                      id="message" 
                      placeholder="Опишите ваши требования к автомобилю" 
                      className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]" 
                      rows={4}
                    />
                  </div>
                  <Button className="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Icon name="Car" className="text-green-400" size={32} />
                <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-red-400 bg-clip-text text-transparent">K-AUTO 96</span>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                Премиум подбор и доставка автомобилей из Южной Кореи с полным сопровождением элитного сервиса
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 text-green-400">Услуги</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Подбор автомобилей в Корее</li>
                <li className="hover:text-white transition-colors cursor-pointer">Выкуп и техническая проверка</li>
                <li className="hover:text-white transition-colors cursor-pointer">Доставка морем</li>
                <li className="hover:text-white transition-colors cursor-pointer">Таможенное оформление</li>
                <li className="hover:text-white transition-colors cursor-pointer">Страхование груза</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 text-red-400">Популярные марки</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Hyundai</li>
                <li className="hover:text-white transition-colors cursor-pointer">Kia</li>
                <li className="hover:text-white transition-colors cursor-pointer">Genesis</li>
                <li className="hover:text-white transition-colors cursor-pointer">SsangYong</li>
                <li className="hover:text-white transition-colors cursor-pointer">Chevrolet Korea</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 text-green-400">Контакты</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">+7 (999) 123-45-67</li>
                <li className="hover:text-white transition-colors cursor-pointer">info@k-auto96.ru</li>
                <li className="hover:text-white transition-colors cursor-pointer">г. Екатеринбург</li>
                <li className="hover:text-white transition-colors cursor-pointer">Пн-Пт: 9:00-18:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-base">
                © 2024 K-AUTO 96. Все права защищены.
              </div>
              <div className="flex space-x-8 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Политика конфиденциальности</a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Условия использования</a>
              </div>
            </div>
          </div>
        </div>
      </footer>


    </div>
  );
};

export default Index;