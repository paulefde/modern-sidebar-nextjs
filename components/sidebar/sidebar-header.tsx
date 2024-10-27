import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

interface SidebarHeaderProps {
  isOpen: boolean;
}

export function SidebarHeader({ isOpen }: SidebarHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-center h-[72px] w-16 px-5 bg-black/15 transition-all duration-300",
        isOpen && "w-[260px] gap-4"
      )}
    >
      <Plus className="w-6 h-6 text-white" />
      {isOpen && (
        <h1 className="text-base font-medium tracking-[2px] text-[#f9f9f9]">
          Lampo
        </h1>
      )}
    </div>
  );
}