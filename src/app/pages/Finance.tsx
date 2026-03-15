import { useState } from "react";
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ArrowRight } from "lucide-react";

const expenseData = [
  { name: "Еда", value: 35000, color: "#FF6B6B" },
  { name: "Транспорт", value: 12000, color: "#4169E1" },
  { name: "Развлечения", value: 18000, color: "#28A745" },
  { name: "Покупки", value: 15000, color: "#FFB84D" },
  { name: "Другое", value: 8000, color: "#9CA3AF" },
];

const incomeExpenseData = [
  { month: "Янв", income: 80000, expense: 65000 },
  { month: "Фев", income: 85000, expense: 70000 },
  { month: "Мар", income: 82000, expense: 88000 },
  { month: "Апр", income: 90000, expense: 75000 },
  { month: "Май", income: 88000, expense: 82000 },
  { month: "Июн", income: 95000, expense: 78000 },
];

const recommendations = [
  {
    title: "Экономия на кафе",
    description: "Вы тратите слишком много на кафе – уменьшите на 10%",
    savings: "~3,500 ₽/месяц",
  },
  {
    title: "Накопительный вклад",
    description: "Откройте вклад на 50 000 ₽ для накопления цели",
    savings: "+3,500 ₽/год",
  },
  {
    title: "Оптимизация транспорта",
    description: "Рассмотрите месячный проездной вместо разовых билетов",
    savings: "~2,000 ₽/месяц",
  },
];

export function Finance() {
  const [period, setPeriod] = useState<"day" | "week" | "month">("month");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white pb-4">
      <header className="bg-white px-4 py-4 border-b border-gray-100">
        <h1 className="text-2xl font-semibold">Финансы</h1>
      </header>

      <div className="p-4">
        {/* Period Selector */}
        <div className="flex gap-2 mb-6">
          {(["day", "week", "month"] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className="px-4 py-2 rounded-lg font-medium transition-colors"
              style={{
                backgroundColor: period === p ? "#28A745" : "#F8F8F8",
                color: period === p ? "#FFFFFF" : "#6B7280",
              }}
            >
              {p === "day" ? "День" : p === "week" ? "Неделя" : "Месяц"}
            </button>
          ))}
        </div>

        {/* Expense Pie Chart */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Расходы по категориям</h2>
          <div className="bg-gray-50 rounded-xl p-4">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={expenseData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  onClick={(data) => setSelectedCategory(data.name)}
                >
                  {expenseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => `${value.toLocaleString("ru-RU")} ₽`} />
              </PieChart>
            </ResponsiveContainer>
            
            {/* Legend */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              {expenseData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Income/Expense Line Chart */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Доходы и расходы</h2>
          <div className="bg-gray-50 rounded-xl p-4">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={incomeExpenseData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value: number) => `${value.toLocaleString("ru-RU")} ₽`} />
                <Line type="monotone" dataKey="income" stroke="#28A745" strokeWidth={2} name="Доходы" />
                <Line type="monotone" dataKey="expense" stroke="#FF6B6B" strokeWidth={2} name="Расходы" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recommendations */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Рекомендации</h2>
          <div className="space-y-3">
            {recommendations.map((rec, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-4"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold">{rec.title}</h3>
                  <span className="text-sm font-medium" style={{ color: "#28A745" }}>
                    {rec.savings}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{rec.description}</p>
                <button
                  className="flex items-center gap-2 text-sm font-medium"
                  style={{ color: "#28A745" }}
                >
                  Применить
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
