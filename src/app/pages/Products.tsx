import { useState } from "react";
import { CreditCard, PiggyBank, Shield, TrendingUp, Landmark, Plus } from "lucide-react";

const categories = [
  { id: "all", name: "Все", icon: null },
  { id: "cards", name: "Карты", icon: CreditCard },
  { id: "deposits", name: "Вклады", icon: PiggyBank },
  { id: "insurance", name: "Страхование", icon: Shield },
  { id: "investments", name: "Инвестиции", icon: TrendingUp },
  { id: "loans", name: "Кредиты", icon: Landmark },
];

const products = [
  {
    id: 1,
    category: "cards",
    icon: CreditCard,
    title: "Кредитная карта OTP Platinum",
    description: "Без комиссии первый год, кэшбек 5%",
    rate: "5% кэшбек",
    featured: true,
  },
  {
    id: 2,
    category: "deposits",
    icon: PiggyBank,
    title: "Вклад OTP Premium",
    description: "Ставка 7%, минимальная сумма 10 000 ₽",
    rate: "7% годовых",
    featured: true,
  },
  {
    id: 3,
    category: "insurance",
    icon: Shield,
    title: "Страхование путешествий",
    description: "Полное покрытие за рубежом",
    rate: "От 500 ₽",
    featured: false,
  },
  {
    id: 4,
    category: "investments",
    icon: TrendingUp,
    title: "ИИС «Первый шаг»",
    description: "Налоговый вычет до 52 000 ₽",
    rate: "13% вычет",
    featured: false,
  },
  {
    id: 5,
    category: "cards",
    icon: CreditCard,
    title: "Дебетовая карта Travel",
    description: "Бесплатное снятие за границей",
    rate: "0% комиссия",
    featured: false,
  },
  {
    id: 6,
    category: "loans",
    icon: Landmark,
    title: "Потребительский кредит",
    description: "Быстрое одобрение, гибкие условия",
    rate: "От 9.9%",
    featured: false,
  },
];

type FilterType = "popular" | "new" | "foryou";
type SortType = "rate" | "rating" | "match";

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filter, setFilter] = useState<FilterType>("popular");
  const [sort, setSort] = useState<SortType>("match");

  const filteredProducts = products.filter(
    (p) => selectedCategory === "all" || p.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-white pb-4">
      <header className="bg-white px-4 py-4 border-b border-gray-100">
        <h1 className="text-2xl font-semibold">Продукты</h1>
      </header>

      {/* Categories */}
      <div className="px-4 py-4 overflow-x-auto">
        <div className="flex gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className="flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors"
                style={{
                  backgroundColor: selectedCategory === cat.id ? "#28A745" : "#F8F8F8",
                  color: selectedCategory === cat.id ? "#FFFFFF" : "#6B7280",
                }}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 pb-4 border-b border-gray-100">
        <div className="flex gap-2 mb-2">
          <button
            onClick={() => setFilter("popular")}
            className="px-3 py-1 rounded-lg text-sm font-medium"
            style={{
              backgroundColor: filter === "popular" ? "#F0F9F0" : "transparent",
              color: filter === "popular" ? "#28A745" : "#6B7280",
            }}
          >
            Популярные
          </button>
          <button
            onClick={() => setFilter("new")}
            className="px-3 py-1 rounded-lg text-sm font-medium"
            style={{
              backgroundColor: filter === "new" ? "#F0F9F0" : "transparent",
              color: filter === "new" ? "#28A745" : "#6B7280",
            }}
          >
            Новые
          </button>
          <button
            onClick={() => setFilter("foryou")}
            className="px-3 py-1 rounded-lg text-sm font-medium"
            style={{
              backgroundColor: filter === "foryou" ? "#F0F9F0" : "transparent",
              color: filter === "foryou" ? "#28A745" : "#6B7280",
            }}
          >
            Для вас
          </button>
        </div>
        <div className="flex gap-2">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortType)}
            className="px-3 py-1 rounded-lg text-sm border border-gray-200 bg-white"
          >
            <option value="match">По соответствию цели</option>
            <option value="rate">По проценту</option>
            <option value="rating">По рейтингу</option>
          </select>
        </div>
      </div>

      {/* Products List */}
      <div className="p-4 space-y-4">
        {filteredProducts.map((product) => {
          const Icon = product.icon;
          return (
            <div
              key={product.id}
              className="border border-gray-200 rounded-xl p-4 relative"
            >
              {product.featured && (
                <div
                  className="absolute top-4 right-4 text-xs px-2 py-1 rounded-full"
                  style={{ backgroundColor: "#F0F9F0", color: "#28A745" }}
                >
                  Рекомендовано
                </div>
              )}
              <div className="flex gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#F0F9F0" }}
                >
                  <Icon className="w-7 h-7" style={{ color: "#28A745" }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{product.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold" style={{ color: "#28A745" }}>
                      {product.rate}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="flex-1 py-2 rounded-lg text-white font-medium text-sm"
                      style={{ backgroundColor: "#28A745" }}
                    >
                      Подробнее
                    </button>
                    <button
                      className="px-4 py-2 rounded-lg border font-medium text-sm flex items-center gap-1"
                      style={{ borderColor: "#28A745", color: "#28A745" }}
                    >
                      <Plus className="w-4 h-4" />
                      В цель
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
