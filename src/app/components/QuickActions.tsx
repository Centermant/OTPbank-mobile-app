import { ArrowRightLeft, Receipt, PlusCircle } from "lucide-react";

const actions = [
  { icon: ArrowRightLeft, label: "Перевод", color: "#28A745" },
  { icon: Receipt, label: "Оплата", color: "#28A745" },
  { icon: PlusCircle, label: "Пополнение", color: "#28A745" },
];

export function QuickActions() {
  return (
    <div className="px-4 py-4">
      <div className="flex justify-around items-center gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              className="flex flex-col items-center gap-2 flex-1"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#F0F9F0" }}
              >
                <Icon className="w-7 h-7" style={{ color: action.color }} />
              </div>
              <span className="text-sm text-gray-700">{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
