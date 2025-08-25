import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const games = [
    {
      id: 1,
      title: 'Slots Mega Fortune',
      provider: 'NetEnt',
      category: 'Слоты',
      rtp: '96.6%',
      minBet: '0.25€',
      maxWin: '1,000,000€',
      image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Blackjack VIP',
      provider: 'Evolution',
      category: 'Настольные',
      rtp: '99.4%',
      minBet: '1€',
      maxWin: '25,000€',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Lightning Roulette',
      provider: 'Evolution',
      category: 'Рулетка',
      rtp: '97.3%',
      minBet: '0.20€',
      maxWin: '500,000€',
      image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=400&h=300&fit=crop'
    }
  ];

  const bonuses = [
    {
      id: 1,
      title: 'Приветственный бонус',
      description: '200% до 50,000₽ + 100 фриспинов',
      code: 'WELCOME200',
      type: 'Депозит'
    },
    {
      id: 2,
      title: 'Кэшбек 10%',
      description: 'Еженедельный возврат средств',
      code: 'CASHBACK10',
      type: 'Кэшбек'
    },
    {
      id: 3,
      title: 'VIP программа',
      description: 'Эксклюзивные привилегии для постоянных игроков',
      code: 'VIP2024',
      type: 'Лояльность'
    }
  ];

  const providers = [
    {
      id: 1,
      name: 'NetEnt',
      games: 200,
      founded: 1996,
      description: 'Ведущий разработчик игр для онлайн-казино',
      rating: 9.2
    },
    {
      id: 2,
      name: 'Evolution Gaming',
      games: 150,
      founded: 2006,
      description: 'Лучший провайдер живых дилеров',
      rating: 9.5
    },
    {
      id: 3,
      name: 'Pragmatic Play',
      games: 300,
      founded: 2015,
      description: 'Инновационные слоты и настольные игры',
      rating: 8.8
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-casino-dark via-casino-darker to-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-casino-dark/80 border-b border-neon-pink/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-neon-pink to-neon-gold bg-clip-text animate-neon-pulse">
              🎰 NEON CASINO
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#games" className="text-foreground hover:text-neon-pink transition-colors">Игры</a>
              <a href="#bonuses" className="text-foreground hover:text-neon-pink transition-colors">Бонусы</a>
              <a href="#providers" className="text-foreground hover:text-neon-pink transition-colors">Провайдеры</a>
            </div>
            <Button className="bg-gradient-to-r from-neon-pink to-neon-purple text-white hover:animate-glow">
              <Icon name="Play" className="mr-2 h-4 w-4" />
              Играть
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/20 via-transparent to-neon-cyan/20"></div>
        <div className="relative container mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-gradient-to-r from-neon-pink via-neon-gold to-neon-cyan bg-clip-text animate-neon-pulse">
            NEON CASINO
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Погружайтесь в мир азарта с неоновым светом и бесконечными возможностями выиграть!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple text-white hover:animate-glow text-lg px-8 py-4">
              <Icon name="Zap" className="mr-2 h-5 w-5" />
              Начать играть
            </Button>
            <Button variant="outline" size="lg" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 text-lg px-8 py-4">
              <Icon name="Gift" className="mr-2 h-5 w-5" />
              Получить бонус
            </Button>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-neon-gold to-neon-cyan bg-clip-text">
            🎮 Популярные игры
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <Card key={game.id} className="bg-card/50 backdrop-blur-sm border-neon-pink/30 hover:border-neon-pink/60 transition-all duration-300 hover:animate-glow">
                <CardHeader>
                  <div className="relative">
                    <img 
                      src={game.image} 
                      alt={game.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <Badge className="absolute top-2 right-2 bg-neon-pink text-white">
                      {game.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-foreground">{game.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Провайдер: {game.provider}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">RTP:</span>
                      <span className="text-sm font-semibold text-neon-gold">{game.rtp}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Мин. ставка:</span>
                      <span className="text-sm font-semibold">{game.minBet}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Макс. выигрыш:</span>
                      <span className="text-sm font-semibold text-neon-cyan">{game.maxWin}</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-neon-pink to-neon-purple text-white hover:animate-glow">
                      <Icon name="Play" className="mr-2 h-4 w-4" />
                      Играть
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section id="bonuses" className="py-16 px-6 bg-gradient-to-r from-casino-dark/50 to-transparent">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-neon-gold to-neon-pink bg-clip-text">
            🎁 Бонусы и акции
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bonuses.map((bonus) => (
              <Card key={bonus.id} className="bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10 border-neon-gold/30 hover:border-neon-gold/60 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-foreground">{bonus.title}</CardTitle>
                    <Badge variant="outline" className="border-neon-gold text-neon-gold">
                      {bonus.type}
                    </Badge>
                  </div>
                  <CardDescription className="text-base text-muted-foreground">
                    {bonus.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-casino-darker/50 rounded-lg">
                      <span className="text-sm text-muted-foreground">Промокод:</span>
                      <div className="flex items-center justify-between mt-1">
                        <code className="text-neon-gold font-mono text-lg">{bonus.code}</code>
                        <Button size="sm" variant="ghost" className="text-neon-cyan hover:text-neon-cyan">
                          <Icon name="Copy" className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-neon-gold to-neon-cyan text-black hover:animate-glow font-semibold">
                      <Icon name="Gift" className="mr-2 h-4 w-4" />
                      Получить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Providers Section */}
      <section id="providers" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text">
            🏢 Провайдеры игр
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {providers.map((provider) => (
              <Card key={provider.id} className="bg-card/50 backdrop-blur-sm border-neon-cyan/30 hover:border-neon-cyan/60 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-foreground">{provider.name}</CardTitle>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" className="h-4 w-4 text-neon-gold fill-neon-gold" />
                      <span className="text-neon-gold font-semibold">{provider.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="text-base text-muted-foreground">
                    {provider.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Количество игр:</span>
                      <span className="text-sm font-semibold text-neon-cyan">{provider.games}+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Основан:</span>
                      <span className="text-sm font-semibold">{provider.founded}</span>
                    </div>
                    <div className="pt-2">
                      <Button variant="outline" className="w-full border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10">
                        <Icon name="ExternalLink" className="mr-2 h-4 w-4" />
                        Все игры
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-casino-darker border-t border-neon-pink/20">
        <div className="container mx-auto text-center">
          <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-neon-pink to-neon-gold bg-clip-text mb-4">
            🎰 NEON CASINO
          </div>
          <p className="text-muted-foreground mb-6">
            Лучшее онлайн казино с неоновым стилем и честной игрой
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <Button variant="ghost" size="sm" className="text-neon-cyan hover:text-neon-cyan">
              <Icon name="Phone" className="mr-2 h-4 w-4" />
              Поддержка 24/7
            </Button>
            <Button variant="ghost" size="sm" className="text-neon-gold hover:text-neon-gold">
              <Icon name="Shield" className="mr-2 h-4 w-4" />
              Лицензия
            </Button>
            <Button variant="ghost" size="sm" className="text-neon-pink hover:text-neon-pink">
              <Icon name="Users" className="mr-2 h-4 w-4" />
              Ответственная игра
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Neon Casino. Все права защищены. Игра только для лиц старше 18 лет.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;