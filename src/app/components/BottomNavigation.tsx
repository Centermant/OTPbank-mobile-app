import { Link, useLocation } from "react-router";
import { Home, TrendingUp, CreditCard, MessageCircle, User } from "lucide-react";

const navItems = [
  { path: "/", icon: Home, label: "Главная" },
  { path: "/finance", icon: TrendingUp, label: "Финансы" },
  { path: "/products", icon: CreditCard, label: "Продукты" },
  { path: "/assistant", icon: MessageCircle, label: "Помощник" },
  { path: "/profile", icon: User, label: "Я" },
];

export function BottomNavigation() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 max-w-md mx-auto">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center justify-center flex-1 h-full"
            >
              <Icon
                className="w-6 h-6"
                style={{ color: isActive ? "#28A745" : "#9CA3AF" }}
              />
              <span
                className="text-xs mt-1"
                style={{ color: isActive ? "#28A745" : "#9CA3AF" }}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
