import React, { useState } from "react";

const currencies = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
  { code: "CHF", symbol: "Fr", name: "Swiss Franc" },
  { code: "CNY", symbol: "¥", name: "Chinese Yuan" },
  { code: "INR", symbol: "₹", name: "Indian Rupee" },
  { code: "BRL", symbol: "R$", name: "Brazilian Real" },
];

const Settings: React.FC = () => {
  const [currency, setCurrency] = useState("USD");
  const [theme, setTheme] = useState("dark");

  return (
    <div className="max-w-md mt-20 mx-auto p-6 bg-gray-800 rounded shadow-md text-white">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Currency</label>
        <div className="relative">
          <select
            value={currency}
            onChange={e => setCurrency(e.target.value)}
            className="w-full p-2 pr-8 rounded bg-gray-700 text-white appearance-none"
          >
            {currencies.map(cur => (
              <option key={cur.code} value={cur.code}>
                {cur.symbol} - {cur.code} ({cur.name})
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Theme</label>
        <div className="relative">
          <select
            value={theme}
            onChange={e => setTheme(e.target.value)}
            className="w-full p-2 pr-8 rounded bg-gray-700 text-white appearance-none"
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-semibold">
        Save Changes
      </button>
    </div>
  );
};

export default Settings;

