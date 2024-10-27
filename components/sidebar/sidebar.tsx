"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { SidebarHeader } from "./sidebar-header";
import { SidebarNav } from "./sidebar-nav";
import { Input } from "@/components/ui/input";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={cn(
        "fixed top-5 left-5 bottom-7 w-16 rounded-2xl bg-[#1e1b29] transition-all duration-300 overflow-visible",
        isOpen && "w-[260px]"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "absolute z-10 -right-3 top-6 w-6 h-6 rounded-full bg-[#6669bb] text-white grid place-items-center transition-all duration-300 hover:bg-[#5557a5]",
          isOpen && "rotate-180"
        )}
        type="button"
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        <svg
          className="w-4 h-4 stroke-current stroke-2"
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="absolute inset-0 w-[260px] overflow-hidden">
        <SidebarHeader isOpen={isOpen} />

        {isOpen && (
          <div className="px-5 py-4 relative">
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 w-4 h-4 text-[#68687a] pointer-events-none" />
            <Input
              placeholder="Search"
              className="h-11 pl-12 bg-[#2f2b43] border-0 text-[#68687a] placeholder:text-[#68687a] text-base"
            />
          </div>
        )}

        <SidebarNav isOpen={isOpen} />
      </div>
    </aside>
  );
}