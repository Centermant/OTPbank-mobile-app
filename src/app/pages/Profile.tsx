import { ChevronRight, Shield, Bell, Heart, Settings, LogOut, Star } from "lucide-react";
import avaPng from "./ava.png";

const securitySettings = [
  { icon: Shield, label: "Безопасность", description: "PIN, FaceID, TouchID" },
  { icon: Bell, label: "Уведомления", description: "Настройка оповещений" },
];

const preferences = [
  { icon: Heart, label: "Мои цели", description: "Управление жизненными сценариями" },
  { icon: Star, label: "Предпочтения", description: "Настройка рекомендаций" },
];

const loginHistory = [
  { date: "15 марта 2026, 14:30", device: "iPhone 14 Pro" },
  { date: "14 марта 2026, 09:15", device: "iPad Air" },
  { date: "13 марта 2026, 18:45", device: "iPhone 14 Pro" },
];

export function Profile() {
  return (
    <div className="min-h-screen bg-white pb-4">
      <header className="bg-white px-4 py-4 border-b border-gray-100">
        <h1 className="text-2xl font-semibold">Профиль</h1>
      </header>

      {/* User Info */}
      <div className="p-4">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={avaPng}
            alt="Иван Иванов"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-1">Иван Иванов</h2>
            <div className="flex items-center gap-2">
              <div
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{ backgroundColor: "#FFF5E6", color: "#FFB84D" }}
              >
                Золотой уровень
              </div>
            </div>
          </div>
          <button>
            <Settings className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Security Settings */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Безопасность</h3>
          <div className="space-y-2">
            {securitySettings.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  className="w-full flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#F0F9F0" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#28A745" }} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium">{item.label}</div>
                    <div className="text-sm text-gray-600">{item.description}</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Preferences */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Персонализация</h3>
          <div className="space-y-2">
            {preferences.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  className="w-full flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#F0F9F0" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#28A745" }} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium">{item.label}</div>
                    <div className="text-sm text-gray-600">{item.description}</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Login History */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">История входов</h3>
          <div className="space-y-3">
            {loginHistory.map((login, index) => (
              <div
                key={index}
                className="p-4 rounded-xl border border-gray-200"
              >
                <div className="font-medium mb-1">{login.device}</div>
                <div className="text-sm text-gray-600">{login.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Logout */}
        <button
          className="w-full flex items-center justify-center gap-2 py-4 rounded-xl border-2 font-medium"
          style={{ borderColor: "#FF6B6B", color: "#FF6B6B" }}
        >
          <LogOut className="w-5 h-5" />
          Выйти из аккаунта
        </button>
      </div>
    </div>
  );
}