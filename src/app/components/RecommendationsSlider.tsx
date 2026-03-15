import { useRef } from "react";
import Slider from "react-slick";
import { CreditCard, PiggyBank, Shield, TrendingUp } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const recommendations = [
  {
    icon: CreditCard,
    title: "Кредитная карта OTP Platinum",
    description: "Без комиссии первый год, кэшбек 5%",
    badge: "Рекомендовано для вас",
  },
  {
    icon: PiggyBank,
    title: "Накопительный счёт",
    description: "Ставка до 7% годовых, от 10 000 ₽",
    badge: "Популярное",
  },
  {
    icon: Shield,
    title: "Страхование путешествий",
    description: "Защита на весь период поездки",
    badge: "Для вашей цели",
  },
  {
    icon: TrendingUp,
    title: "Инвестиционный счёт",
    description: "Начните инвестировать от 1 000 ₽",
    badge: "Новинка",
  },
];

export function RecommendationsSlider() {
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="py-4">
      <div className="px-4 mb-3">
        <h2 className="text-lg font-semibold">Рекомендации</h2>
      </div>
      <div className="px-4">
        <Slider ref={sliderRef} {...settings}>
          {recommendations.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="px-2">
                <div className="rounded-xl p-5 border border-gray-200 bg-white relative">
                  <div
                    className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full"
                    style={{ backgroundColor: "#F0F9F0", color: "#28A745" }}
                  >
                    {item.badge}
                  </div>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                    style={{ backgroundColor: "#F0F9F0" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: "#28A745" }} />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                  <button
                    className="w-full py-2 rounded-lg text-white font-medium"
                    style={{ backgroundColor: "#28A745" }}
                  >
                    Подключить
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
