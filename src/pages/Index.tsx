import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Index = () => {
  const [language, setLanguage] = useState('ru');

  const translations = {
    ru: {
      title: 'Shishani Mall',
      subtitle: 'Маркетплейс с душой Кавказа',
      cta: 'Начать покупки',
      sellCta: 'Начать продавать',
      forBuyers: 'Для покупателей',
      forSellers: 'Для продавцов',
      buyerFeature1: 'Широкий ассортимент товаров',
      buyerFeature2: 'Безопасная оплата',
      buyerFeature3: 'Быстрая доставка',
      sellerFeature1: 'Легкий старт продаж',
      sellerFeature2: 'Прозрачная статистика',
      sellerFeature3: 'Поддержка 24/7',
      popularProducts: 'Популярные товары',
      addToCart: 'В корзину',
      currency: '₽',
    },
    en: {
      title: 'Shishani Mall',
      subtitle: 'Marketplace with Caucasian Soul',
      cta: 'Start Shopping',
      sellCta: 'Start Selling',
      forBuyers: 'For Buyers',
      forSellers: 'For Sellers',
      buyerFeature1: 'Wide Product Range',
      buyerFeature2: 'Secure Payment',
      buyerFeature3: 'Fast Delivery',
      sellerFeature1: 'Easy Start',
      sellerFeature2: 'Clear Analytics',
      sellerFeature3: '24/7 Support',
      popularProducts: 'Popular Products',
      addToCart: 'Add to Cart',
      currency: '$',
    },
    ce: {
      title: 'Shishani Mall',
      subtitle: 'Кавказан дукха товаран маркет',
      cta: 'Долаелла дуьхьал',
      sellCta: 'Долу дуьхьал',
      forBuyers: 'Долархошна',
      forSellers: 'Дохурхошна',
      buyerFeature1: 'Дукха товарш',
      buyerFeature2: 'Лардан хийцам',
      buyerFeature3: 'Сиха яхарш',
      sellerFeature1: 'Кеп долу дуьхьал',
      sellerFeature2: 'Хьокъе статистика',
      sellerFeature3: 'ГІо 24/7',
      popularProducts: 'Оьзда товарш',
      addToCart: 'Корзинан',
      currency: '₽',
    },
  };

  const t = translations[language as keyof typeof translations];

  const products = [
    {
      id: 1,
      name: language === 'ru' ? 'Традиционный ковёр' : language === 'en' ? 'Traditional Carpet' : 'Традиционан хайт',
      price: 15000,
      image: 'https://cdn.poehali.dev/projects/e00db940-6325-4231-8404-a3c5e7e6d3a7/files/03572b27-1c67-4b47-986b-97a96682602b.jpg',
      rating: 4.8,
    },
    {
      id: 2,
      name: language === 'ru' ? 'Керамическая ваза' : language === 'en' ? 'Ceramic Vase' : 'Керамикан ваза',
      price: 3500,
      image: 'https://cdn.poehali.dev/projects/e00db940-6325-4231-8404-a3c5e7e6d3a7/files/f5e4b8c4-0b0a-485c-8b80-cfc5e91118a7.jpg',
      rating: 4.9,
    },
    {
      id: 3,
      name: language === 'ru' ? 'Вышитый текстиль' : language === 'en' ? 'Embroidered Textile' : 'Йоккхаран текстиль',
      price: 8000,
      image: 'https://cdn.poehali.dev/projects/e00db940-6325-4231-8404-a3c5e7e6d3a7/files/979cc1b9-fa54-4c14-bec5-a806df0ab43b.jpg',
      rating: 4.7,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-b from-primary via-white to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Store" size={24} className="text-accent" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Shishani Mall
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ru">🇷🇺 Русский</SelectItem>
                <SelectItem value="en">🇬🇧 English</SelectItem>
                <SelectItem value="ce">🇨🇭 Нохчийн</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="ghost" size="icon">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingCart" size={20} />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-secondary text-white text-xs">
                3
              </Badge>
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="User" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4">
              <div className="w-6 h-1 bg-primary rounded-full"></div>
              <div className="w-6 h-1 bg-white border border-primary rounded-full"></div>
              <div className="w-6 h-1 bg-secondary rounded-full"></div>
            </div>
            <h2 className="text-5xl font-bold text-foreground mb-4">
              {t.title}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t.subtitle}
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                {t.cta}
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                <Icon name="Store" size={20} className="mr-2" />
                {t.sellCta}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">
            {t.popularProducts}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={product.id} className="hover-scale overflow-hidden group border-2 hover:border-primary/50 transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent text-black">
                    <Icon name="Star" size={14} className="mr-1 fill-current" />
                    {product.rating}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
                  <p className="text-2xl font-bold text-primary">
                    {product.price.toLocaleString()} {t.currency}
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    {t.addToCart}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* For Buyers */}
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="ShoppingBag" size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">{t.forBuyers}</h3>
              </div>
              <div className="space-y-4">
                {[t.buyerFeature1, t.buyerFeature2, t.buyerFeature3].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <Icon name="Check" size={20} className="text-primary mt-1" />
                    <p className="text-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* For Sellers */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Icon name="Store" size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">{t.forSellers}</h3>
              </div>
              <div className="space-y-4">
                {[t.sellerFeature1, t.sellerFeature2, t.sellerFeature3].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <Icon name="Check" size={20} className="text-secondary mt-1" />
                    <p className="text-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-primary to-primary/90 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Icon name="Store" size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold">Shishani Mall</h4>
                <p className="text-sm text-white/80">2025 © {t.subtitle}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
