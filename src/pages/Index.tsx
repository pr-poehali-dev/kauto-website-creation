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
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Car" className="text-[#FF6B35]" size={32} />
              <h1 className="text-2xl font-bold text-[#2C3E50]">K-AUTO 96</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-[#FF6B35] transition-colors">Услуги</a>
              <a href="#advantages" className="text-gray-600 hover:text-[#FF6B35] transition-colors">Преимущества</a>
              <a href="#calculator" className="text-gray-600 hover:text-[#FF6B35] transition-colors">Калькулятор</a>
              <a href="#work-process" className="text-gray-600 hover:text-[#FF6B35] transition-colors">Как работаем</a>
              <a href="#contacts" className="text-gray-600 hover:text-[#FF6B35] transition-colors">Контакты</a>
            </nav>
            <Button className="bg-[#FF6B35] hover:bg-[#e55a2b]">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2C3E50] to-[#34495E] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                K-AUTO 96 — Подбор и выкуп авто из Южной Кореи
                <span className="text-[#FF6B35]"> с доставкой в РФ под ключ!</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Подбор и экспорт авто из Южной Кореи в Россию. Привезем в топовой комплектации с низким пробегом. Доставим за 27 дней. Цены ниже на 30% чем в РФ
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-[#FF6B35] hover:bg-[#e55a2b] px-8">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость авто
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#2C3E50]">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FF6B35]">500+</div>
                  <div className="text-sm text-gray-300">Автомобилей привезено</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FF6B35]">27</div>
                  <div className="text-sm text-gray-300">Дней доставка</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FF6B35]">30%</div>
                  <div className="text-sm text-gray-300">Экономия от цен в РФ</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/81fda75d-dca0-4760-9827-e9088a1c011c.jpg" 
                alt="Korean cars import" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#FF6B35] p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" className="text-white" size={20} />
                  <span className="text-sm font-medium text-white">Работаем официально</span>
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
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Search" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">Подбор автомобиля</h3>
              <p className="text-gray-600">Найдем автомобиль по вашим требованиям на аукционах и у дилеров Южной Кореи</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">Выкуп и оформление</h3>
              <p className="text-gray-600">Выкупаем автомобиль, проверяем документы и готовим к отправке</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">Доставка в РФ</h3>
              <p className="text-gray-600">Морская доставка и таможенное оформление в России под ключ</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600">Наши преимущества в работе с корейскими автомобилями</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Цены ниже на 30%", 
                description: "Прямые поставки от производителей и дилеров", 
                icon: "DollarSign",
                color: "bg-green-500"
              },
              { 
                title: "Доставка 27 дней", 
                description: "Быстрая морская доставка контейнерами", 
                icon: "Clock",
                color: "bg-blue-500"
              },
              { 
                title: "Топовая комплектация", 
                description: "Автомобили в максимальной комплектации", 
                icon: "Star",
                color: "bg-yellow-500"
              },
              { 
                title: "Низкий пробег", 
                description: "Только автомобили с минимальным пробегом", 
                icon: "Gauge",
                color: "bg-purple-500"
              },
              { 
                title: "Юридическая чистота", 
                description: "Все документы и сертификаты в порядке", 
                icon: "Shield",
                color: "bg-red-500"
              },
              { 
                title: "Гарантия качества", 
                description: "Техническая проверка перед отправкой", 
                icon: "CheckCircle",
                color: "bg-green-600"
              },
              { 
                title: "Страхование", 
                description: "Полная страховка на время доставки", 
                icon: "Umbrella",
                color: "bg-blue-600"
              },
              { 
                title: "Поддержка 24/7", 
                description: "Консультации на всех этапах покупки", 
                icon: "Headphones",
                color: "bg-orange-500"
              }
            ].map((advantage, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 ${advantage.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon name={advantage.icon as any} className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-[#2C3E50] mb-2">{advantage.title}</h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4">Калькулятор стоимости</h2>
            <p className="text-xl text-gray-600">Рассчитайте стоимость автомобиля с доставкой из Кореи</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-white">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="carPrice" className="text-base font-medium text-[#2C3E50]">Стоимость автомобиля в Корее (₩)</Label>
                    <Input
                      id="carPrice"
                      type="number"
                      placeholder="30000000"
                      value={calculatorData.carPrice}
                      onChange={(e) => setCalculatorData({...calculatorData, carPrice: e.target.value})}
                      className="mt-2 border-gray-300 focus:border-[#FF6B35]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="year" className="text-base font-medium text-[#2C3E50]">Год выпуска</Label>
                    <Select value={calculatorData.year} onValueChange={(value) => setCalculatorData({...calculatorData, year: value})}>
                      <SelectTrigger className="mt-2 border-gray-300 focus:border-[#FF6B35]">
                        <SelectValue placeholder="Выберите год" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2020">2020</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="engine" className="text-base font-medium text-[#2C3E50]">Объем двигателя</Label>
                    <Select value={calculatorData.engine} onValueChange={(value) => setCalculatorData({...calculatorData, engine: value})}>
                      <SelectTrigger className="mt-2 border-gray-300 focus:border-[#FF6B35]">
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
                    <Label htmlFor="transmission" className="text-base font-medium text-[#2C3E50]">Трансмиссия</Label>
                    <Select value={calculatorData.transmission} onValueChange={(value) => setCalculatorData({...calculatorData, transmission: value})}>
                      <SelectTrigger className="mt-2 border-gray-300 focus:border-[#FF6B35]">
                        <SelectValue placeholder="Выберите трансмиссию" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="auto">Автоматическая</SelectItem>
                        <SelectItem value="manual">Механическая</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#2C3E50] to-[#34495E] text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Расчет стоимости</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Стоимость авто:</span>
                      <span className="font-medium">{costs.price.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Доставка (15%):</span>
                      <span className="font-medium">{costs.logistics.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Таможня (20%):</span>
                      <span className="font-medium">{costs.customs.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Наши услуги (8%):</span>
                      <span className="font-medium">{costs.commission.toLocaleString()} ₽</span>
                    </div>
                    <Separator className="bg-gray-400" />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Итого к оплате:</span>
                      <span className="text-[#FF6B35]">{costs.total.toLocaleString()} ₽</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-[#FF6B35] hover:bg-[#e55a2b] text-white">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Оставить заявку
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section id="work-process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4">Как мы работаем</h2>
            <p className="text-xl text-gray-600">Пошаговый процесс покупки автомобиля из Кореи</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden lg:block"></div>
            <div className="space-y-12">
              {[
                { 
                  step: "01", 
                  title: "Заявка и консультация", 
                  description: "Оставляете заявку с требованиями к автомобилю. Наш менеджер связывается с вами для уточнения деталей и расчета стоимости.",
                  icon: "MessageCircle",
                  image: "/img/3997b760-f62c-4241-a895-dc0aac2a56ad.jpg"
                },
                { 
                  step: "02", 
                  title: "Поиск и подбор автомобиля", 
                  description: "Ищем подходящий автомобиль на аукционах и у дилеров Кореи. Проверяем техническое состояние и юридическую чистоту.",
                  icon: "Search",
                  image: "/img/81fda75d-dca0-4760-9827-e9088a1c011c.jpg"
                },
                { 
                  step: "03", 
                  title: "Выкуп и оформление", 
                  description: "После вашего одобрения выкупаем автомобиль, оформляем все необходимые документы для экспорта.",
                  icon: "CreditCard",
                  image: "/img/2a0e5c98-8018-406f-a0a5-189bd57445be.jpg"
                },
                { 
                  step: "04", 
                  title: "Доставка и таможня", 
                  description: "Отправляем автомобиль морем в Россию, оформляем таможенные документы и доставляем в ваш город.",
                  icon: "Truck",
                  image: "/img/2a0e5c98-8018-406f-a0a5-189bd57445be.jpg"
                }
              ].map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}>
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center mr-4">
                        <Icon name={step.icon as any} className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-[#FF6B35] font-medium">Шаг {step.step}</div>
                        <h3 className="text-xl font-bold text-[#2C3E50]">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  <div className="flex-1">
                    <img src={step.image} alt={step.title} className="w-full h-64 object-cover rounded-lg shadow-lg" />
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
      <footer className="bg-[#2C3E50] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Car" className="text-[#FF6B35]" size={28} />
                <span className="text-xl font-bold">K-AUTO 96</span>
              </div>
              <p className="text-gray-400 text-sm">
                Профессиональный подбор и доставка автомобилей из Южной Кореи с полным сопровождением сделки
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Подбор автомобилей в Корее</li>
                <li>Выкуп и техническая проверка</li>
                <li>Доставка морем</li>
                <li>Таможенное оформление</li>
                <li>Страхование груза</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Популярные марки</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Hyundai</li>
                <li>Kia</li>
                <li>Genesis</li>
                <li>SsangYong</li>
                <li>Chevrolet Korea</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>+7 (999) 123-45-67</li>
                <li>info@k-auto96.ru</li>
                <li>г. Екатеринбург</li>
                <li>Пн-Пт: 9:00-18:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm">
                © 2024 K-AUTO 96. Все права защищены.
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm">Политика конфиденциальности</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Условия использования</a>
              </div>
            </div>
          </div>
        </div>
      </footer>


    </div>
  );
};

export default Index;