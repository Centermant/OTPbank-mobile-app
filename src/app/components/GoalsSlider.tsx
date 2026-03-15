import { useRef } from "react";
import Slider from "react-slick";
import { Briefcase, GraduationCap, Home, Car } from "lucide-react";
import { Progress } from "./ui/progress";
import { useNavigate } from "react-router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const goals = [
  {
    icon: Briefcase,
    title: "Путешествие",
    progress: 45,
    color: "#F0F9F0",
    route: "/scenario/travel",
  },
  {
    icon: GraduationCap,
    title: "Образование",
    progress: 65,
    color: "#FFF5E6",
  },
  {
    icon: Home,
    title: "Покупка квартиры",
    progress: 20,
    color: "#E6F7FF",
  },
  {
    icon: Car,
    title: "Новый автомобиль",
    progress: 35,
    color: "#FFF0F5",
  },
];

export function GoalsSlider() {
  const navigate = useNavigate();
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
        <h2 className="text-lg font-semibold">Мои цели</h2>
      </div>
      <div className="px-4">
        <Slider ref={sliderRef} {...settings}>
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <div key={index} className="px-2">
                <div
                  className="rounded-xl p-5 cursor-pointer"
                  style={{ backgroundColor: goal.color }}
                  onClick={() => goal.route && navigate(goal.route)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center"
                    >
                      <Icon className="w-6 h-6" style={{ color: "#28A745" }} />
                    </div>
                    <h3 className="font-semibold text-lg">{goal.title}</h3>
                  </div>
                  <Progress value={goal.progress} className="h-2 mb-2" />
                  <p className="text-sm text-gray-600 mt-2">
                    Ваша цель на {goal.progress}% выполнена
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
