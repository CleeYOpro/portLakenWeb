"use client";

import { useState } from "react";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const TIMES = [
  "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
  "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM",
];

const PRESETS = [
  { label: "Mon–Fri, 9 AM–5 PM", value: "Mon–Fri: 9:00 AM–5:00 PM" },
  { label: "Mon–Fri, 8 AM–6 PM", value: "Mon–Fri: 8:00 AM–6:00 PM" },
  { label: "Mon–Sat, 9 AM–5 PM", value: "Mon–Sat: 9:00 AM–5:00 PM" },
  { label: "7 days, 9 AM–5 PM", value: "Mon–Sun: 9:00 AM–5:00 PM" },
  { label: "24/7", value: "Open 24/7" },
  { label: "By appointment only", value: "By appointment only" },
  { label: "Custom", value: "custom" },
];

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export default function HoursSelector({ value, onChange }: Props) {
  const [mode, setMode] = useState<"preset" | "custom">("preset");
  const [openDays, setOpenDays] = useState<string[]>([]);
  const [openTime, setOpenTime] = useState("9:00 AM");
  const [closeTime, setCloseTime] = useState("5:00 PM");

  const handlePreset = (preset: string) => {
    if (preset === "custom") {
      setMode("custom");
      return;
    }
    setMode("preset");
    onChange(preset);
  };

  const toggleDay = (day: string) => {
    const updated = openDays.includes(day)
      ? openDays.filter(d => d !== day)
      : [...openDays, day];
    setOpenDays(updated);
    if (updated.length > 0) {
      const sorted = DAYS.filter(d => updated.includes(d));
      onChange(`${sorted.join(", ")}: ${openTime}–${closeTime}`);
    } else {
      onChange("");
    }
  };

  const updateCustomTime = (open: string, close: string) => {
    setOpenTime(open);
    setCloseTime(close);
    if (openDays.length > 0) {
      const sorted = DAYS.filter(d => openDays.includes(d));
      onChange(`${sorted.join(", ")}: ${open}–${close}`);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Hours of Operation</label>

      {/* Preset chips */}
      <div className="flex flex-wrap gap-2 mb-3">
        {PRESETS.map(p => (
          <button key={p.value} type="button"
            onClick={() => handlePreset(p.value)}
            className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
              (mode === "preset" && value === p.value) || (p.value === "custom" && mode === "custom")
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
            }`}>
            {p.label}
          </button>
        ))}
      </div>

      {/* Custom day/time picker */}
      {mode === "custom" && (
        <div className="border border-gray-200 rounded-lg p-4 space-y-4 bg-gray-50">
          <div>
            <p className="text-xs font-medium text-gray-600 mb-2">Select days open</p>
            <div className="flex gap-2 flex-wrap">
              {DAYS.map(day => (
                <button key={day} type="button" onClick={() => toggleDay(day)}
                  className={`w-12 h-10 rounded-lg text-sm font-medium border transition-colors ${
                    openDays.includes(day)
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
                  }`}>
                  {day}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1 block">Opens</label>
              <select value={openTime} onChange={e => updateCustomTime(e.target.value, closeTime)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500">
                {TIMES.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1 block">Closes</label>
              <select value={closeTime} onChange={e => updateCustomTime(openTime, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500">
                {TIMES.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Preview */}
      {value && (
        <p className="mt-2 text-sm text-gray-600">
          <span className="font-medium">Selected:</span> {value}
        </p>
      )}
    </div>
  );
}
