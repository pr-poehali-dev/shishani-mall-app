import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const SellerRegistration = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState('standard');
  const [formData, setFormData] = useState({
    storeName: '',
    ownerName: '',
    email: '',
    phone: '',
    description: '',
    category: '',
  });

  const plans = [
    {
      id: 'basic',
      name: 'Базовый',
      nameEn: 'Basic',
      price: 2990,
      period: 'месяц',
      features: [
        'До 50 товаров',
        'Комиссия 8%',
        'Базовая аналитика',
        'Email поддержка',
      ],
      color: 'border-muted',
      popular: false,
    },
    {
      id: 'standard',
      name: 'Стандарт',
      nameEn: 'Standard',
      price: 5990,
      period: 'месяц',
      features: [
        'До 500 товаров',
        'Комиссия 5%',
        'Расширенная аналитика',
        'Приоритетная поддержка',
        'Продвижение магазина',
      ],
      color: 'border-primary',
      popular: true,
    },
    {
      id: 'premium',
      name: 'Премиум',
      nameEn: 'Premium',
      price: 12990,
      period: 'месяц',
      features: [
        'Неограниченно товаров',
        'Комиссия 3%',
        'Полная аналитика + AI',
        'Персональный менеджер',
        'Топ размещение',
        'Брендинг магазина',
      ],
      color: 'border-accent',
      popular: false,
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handlePayment = () => {
    // Здесь будет интеграция с платёжной системой
    alert(`Переход к оплате тарифа "${plans.find(p => p.id === selectedPlan)?.name}" - ${plans.find(p => p.id === selectedPlan)?.price} ₽`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Header */}
      <header className="bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate('/')} className="gap-2">
            <Icon name="ArrowLeft" size={20} />
            <span className="font-semibold">Назад</span>
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-b from-primary via-white to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Store" size={24} className="text-accent" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Shishani Mall
            </h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary text-white' : 'bg-muted'}`}>
                1
              </div>
              <span className="hidden md:inline font-medium">Выбор тарифа</span>
            </div>
            <div className="w-16 h-1 bg-border"></div>
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary text-white' : 'bg-muted'}`}>
                2
              </div>
              <span className="hidden md:inline font-medium">Данные магазина</span>
            </div>
            <div className="w-16 h-1 bg-border"></div>
            <div className={`flex items-center gap-2 ${step >= 3 ? 'text-primary' : 'text-muted-foreground'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-primary text-white' : 'bg-muted'}`}>
                3
              </div>
              <span className="hidden md:inline font-medium">Оплата</span>
            </div>
          </div>
        </div>

        {/* Step 1: Choose Plan */}
        {step === 1 && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Выберите тарифный план</h2>
              <p className="text-xl text-muted-foreground">Начните продавать на Shishani Mall уже сегодня</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card
                  key={plan.id}
                  className={`relative hover-scale cursor-pointer transition-all duration-300 ${
                    selectedPlan === plan.id ? `border-2 ${plan.color} shadow-lg` : 'border-2 border-transparent'
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white">
                      Популярный
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <div className="flex items-end justify-center gap-1">
                      <span className="text-4xl font-bold text-primary">{plan.price.toLocaleString()}</span>
                      <span className="text-muted-foreground mb-1">₽/{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary mt-1" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full"
                      variant={selectedPlan === plan.id ? 'default' : 'outline'}
                    >
                      {selectedPlan === plan.id ? 'Выбрано' : 'Выбрать'}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" onClick={() => setStep(2)} className="bg-primary hover:bg-primary/90 text-white">
                Продолжить
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Store Information */}
        {step === 2 && (
          <div className="animate-fade-in max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Информация о магазине</h2>
              <p className="text-muted-foreground">Заполните данные для регистрации</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Данные магазина</CardTitle>
                <CardDescription>Эта информация будет видна покупателям</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="storeName">Название магазина *</Label>
                  <Input
                    id="storeName"
                    placeholder="Например: Кавказские сувениры"
                    value={formData.storeName}
                    onChange={(e) => handleInputChange('storeName', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ownerName">ФИО владельца *</Label>
                  <Input
                    id="ownerName"
                    placeholder="Иванов Иван Иванович"
                    value={formData.ownerName}
                    onChange={(e) => handleInputChange('ownerName', e.target.value)}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="shop@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Категория товаров *</Label>
                  <Input
                    id="category"
                    placeholder="Например: Сувениры, Текстиль, Керамика"
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Описание магазина</Label>
                  <Textarea
                    id="description"
                    placeholder="Расскажите о вашем магазине и товарах..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(1)}>
                  <Icon name="ArrowLeft" size={18} className="mr-2" />
                  Назад
                </Button>
                <Button onClick={() => setStep(3)} className="bg-primary hover:bg-primary/90 text-white">
                  Продолжить
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}

        {/* Step 3: Payment */}
        {step === 3 && (
          <div className="animate-fade-in max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Оплата регистрации</h2>
              <p className="text-muted-foreground">Проверьте данные и завершите оплату</p>
            </div>

            <div className="space-y-6">
              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Детали заказа</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <p className="font-semibold">{formData.storeName || 'Ваш магазин'}</p>
                      <p className="text-sm text-muted-foreground">{formData.email}</p>
                    </div>
                    <Badge variant="outline">Новый</Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Тарифный план:</span>
                      <span className="font-semibold">{plans.find(p => p.id === selectedPlan)?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Период:</span>
                      <span className="font-semibold">1 месяц</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold pt-3 border-t">
                      <span>Итого:</span>
                      <span className="text-primary">{plans.find(p => p.id === selectedPlan)?.price.toLocaleString()} ₽</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Methods */}
              <Card>
                <CardHeader>
                  <CardTitle>Способ оплаты</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup defaultValue="card" className="space-y-3">
                    <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                        <Icon name="CreditCard" size={20} className="text-primary" />
                        <span>Банковская карта</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                      <RadioGroupItem value="wallet" id="wallet" />
                      <Label htmlFor="wallet" className="flex items-center gap-2 cursor-pointer flex-1">
                        <Icon name="Wallet" size={20} className="text-primary" />
                        <span>Электронный кошелёк</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                      <RadioGroupItem value="bank" id="bank" />
                      <Label htmlFor="bank" className="flex items-center gap-2 cursor-pointer flex-1">
                        <Icon name="Building" size={20} className="text-primary" />
                        <span>Банковский перевод</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6" 
                    onClick={handlePayment}
                  >
                    <Icon name="Lock" size={20} className="mr-2" />
                    Оплатить {plans.find(p => p.id === selectedPlan)?.price.toLocaleString()} ₽
                  </Button>
                  <Button variant="ghost" onClick={() => setStep(2)} className="w-full">
                    <Icon name="ArrowLeft" size={18} className="mr-2" />
                    Изменить данные
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    <Icon name="Shield" size={14} className="inline mr-1" />
                    Безопасная оплата. Ваши данные защищены SSL-шифрованием
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerRegistration;
