import { Bell } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white px-4 py-4 flex items-center justify-between border-b border-gray-100">
      <div className="text-2xl font-bold" style={{ color: "#28A745" }}>
        OTP Bank
      </div>
      <div className="relative">
        <Bell className="w-6 h-6 text-gray-600" />
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          3
        </div>
      </div>
    </header>
  );
}
