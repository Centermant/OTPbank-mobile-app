import { useState } from "react";
import { ChevronDown, ChevronUp, CreditCard, Wallet } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const accounts = [
  { name: "Основной счёт", balance: 95000, icon: Wallet, number: "•••• 5847" },
  { name: "Сберегательный", balance: 35000, icon: CreditCard, number: "•••• 2134" },
  { name: "Кредитная карта", balance: 15000, icon: CreditCard, number: "•••• 8921" },
];

export function BalanceCard() {
  const [expanded, setExpanded] = useState(false);
  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);

  return (
    <div className="px-4 py-4">
      <motion.div
        className="rounded-xl p-6"
        style={{ backgroundColor: "#F0F9F0" }}
        layout
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600">Общий баланс</span>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-sm"
            style={{ color: "#28A745" }}
          >
            {expanded ? "Скрыть" : "Подробнее"}
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
        <div className="text-3xl font-bold mb-4">
          {totalBalance.toLocaleString("ru-RU")} ₽
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-3 pt-3 border-t border-green-200"
            >
              {accounts.map((account, index) => {
                const Icon = account.icon;
                return (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <Icon className="w-5 h-5" style={{ color: "#28A745" }} />
                      </div>
                      <div>
                        <div className="font-medium">{account.name}</div>
                        <div className="text-xs text-gray-500">{account.number}</div>
                      </div>
                    </div>
                    <div className="font-semibold">
                      {account.balance.toLocaleString("ru-RU")} ₽
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
