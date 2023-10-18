"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainVanvProps {
  data: Category[];
}

const MainNav: React.FC<MainVanvProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <div className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black"
          )}
        >
          {route.label}
        </Link>
      ))}
      <button className="bg-transparent text-xs hover:bg-black text-black font-semibold hover:text-white py-1 px-3 border border-black hover:border-transparent rounded">
        Crear Caja
      </button>
    </div>
  );
};
export default MainNav;
