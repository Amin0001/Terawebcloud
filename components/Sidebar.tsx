import Link from "next/link";
import Image from "next/image";
import DashNavBar from "./DashNavBar";
import { Button } from "react-bootstrap";
import { FreeCounter } from "../components/free-counter";
import {
  Code,
  Files,
  LayoutDashboard,
  Workflow,
  Music,
  Settings,
  Banknote,
  File,
} from "lucide-react";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Quick start guide",
    icon: Workflow,
    href: "/start",
    color: "text-violet-500",
  },
  {
    label: "Integrations",
    icon: Files,
    color: "text-pink-700",
    href: "/integration",
  },
  {
    label: "Billing and Plans",
    icon: Banknote,
    color: "text-orange-700",
    href: "/billing",
  },
  {
    label: "Documentations",
    icon: File,
    color: "text-emerald-500",
    href: "/documentations",
  },

  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export const Sidebar = () => {
  const pathname = ""; // Replace this with your actual pathname logic

  return (
    <div className="space-y-4 py-4 flex flex-col hidden sm:block md:block w-[20vw] h-[100vh] bg-[#0A132E] text-white">
      <div className="px-0 md:px-1 lg:px-3  py-2 flex-1">
        <Link href="/dashboard">
          <a className="flex items-center pl-0 md:pl-1 lg:pl-3 mb-14">
            <h1 className="text-3xl font-bold">TerraWeb</h1>
          </a>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link key={route.href} href={route.href}>
              <a
                className={`text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition ${
                  pathname === route.href
                    ? "text-white bg-white/10"
                    : "text-zinc-400"
                }`}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={`h-5 w-5 mr-3 ${route.color}`} />
                  {route.label}
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
