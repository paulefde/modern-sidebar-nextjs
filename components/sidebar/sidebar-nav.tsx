"use client";

import { cn } from "@/lib/utils";
import { Home, User } from "lucide-react";
import { useState } from "react";

interface NavItem {
  icon: typeof Home;
  label: string;
}

const navItems: NavItem[] = [
  { icon: Home, label: "Dashboard" },
  { icon: User, label: "Profile" },
];

interface SidebarNavProps {
  isOpen: boolean;
}

export function SidebarNav({ isOpen }: SidebarNavProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className="grid">
      {navItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <button
            key={item.label}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "flex items-center h-14 w-16 px-5 text-base capitalize leading-none text-[#7a7b92] opacity-80 transition-all duration-300 hover:text-white hover:opacity-100",
              isOpen && "w-[260px] gap-4",
              activeIndex === index && "text-white opacity-100"
            )}
          >
            <Icon className="w-6 h-6 stroke-current stroke-2" />
            {isOpen && <span>{item.label}</span>}
          </button>
        );
      })}
    </nav>
  );
}