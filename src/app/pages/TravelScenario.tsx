import { useState } from "react";
import { ArrowLeft, CreditCard, Shield, PiggyBank, Check } from "lucide-react";
import { useNavigate } from "react-router";
import { Progress } from "../components/ui/progress";
import { Checkbox } from "../components/ui/checkbox";
import { motion } from "motion/react";

const products = [
  {
    icon: CreditCard,
    title: "Кредитная карта OTP Travel",
    description: "Кэшбек 5%, страховка включена",
  },
  {
    icon: Shield,
    title: "Страхование путешествий",
    description: "Полное покрытие на весь период",
  },
  {
    icon: PiggyBank,
    title: "Накопительный счёт «Путешествие»",
    description: "Ставка 7%, накапливайте быстрее",
  },
];

const initialSteps = [
  { id: 1, text: "Оформить страховку", completed: false },
  { id: 2, text: "Пополнить накопительный счёт", completed: false },
  { id: 3, text: "Забронировать билеты", completed: false },
];

export function TravelScenario() {
  const navigate = useNavigate();
  const [steps, setSteps] = useState(initialSteps);

  const toggleStep = (id: number) => {
    setSteps(steps.map(step => 
      step.id === id ? { ...step, completed: !step.completed } : step
    ));
  };

  const completedSteps = steps.filter(s => s.completed).length;
  const progress = (completedSteps / steps.length) * 100;

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white px-4 py-4 border-b border-gray-100">
        <div className="flex items-center gap-4 mb-3">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-xl font-semibold">Путешествие</h1>
        </div>
        <Progress value={progress} className="h-2" />
        <p className="text-sm text-gray-600 mt-2">Прогресс: {Math.round(progress)}%</p>
      </header>

      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Рекомендуемые продукты</h2>
        <div className="space-y-4 mb-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-4 flex items-start gap-4"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#F0F9F0" }}
                >
                  <Icon className="w-6 h-6" style={{ color: "#28A745" }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{product.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  <button
                    className="px-4 py-2 rounded-lg text-white text-sm font-medium"
                    style={{ backgroundColor: "#28A745" }}
                  >
                    Подключить
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <h2 className="text-lg font-semibold mb-4">Шаги к достижению цели</h2>
        <div className="space-y-3 mb-6">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="flex items-center gap-3 p-4 rounded-lg border border-gray-200"
              animate={{ backgroundColor: step.completed ? "#F0F9F0" : "#FFFFFF" }}
              transition={{ duration: 0.3 }}
            >
              <Checkbox
                checked={step.completed}
                onCheckedChange={() => toggleStep(step.id)}
                className="data-[state=checked]:bg-green-600"
              />
              <span className={step.completed ? "line-through text-gray-500" : ""}>
                {step.text}
              </span>
              {step.completed && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-auto"
                >
                  <Check className="w-5 h-5" style={{ color: "#28A745" }} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <button
          className="w-full py-4 rounded-xl text-white text-lg font-semibold"
          style={{ backgroundColor: "#28A745" }}
        >
          Выполнено / Далее
        </button>
      </div>
    </div>
  );
}
