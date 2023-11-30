import React from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import SearchComponent from "./Search";
import { Bell, HelpCircle, Settings } from "lucide-react";
import AccountMenu from "./AccountMenu";
import DashNavBar from "../components/DashNavBar";
import { SessionProvider } from "next-auth/react";
const routes = [
  {
    icon: Bell,
    href: "/notification",
  },
  {
    icon: HelpCircle,
    href: "/help",
  },
  {
    icon: Settings,

    href: "/settings",
  },
];

const DashNav = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  const pathname = "";
  return (
    <div>
      <div className="flex flex-row mt-2 gap-[5vw] md:gap-[5vw] lg:gap-[20vw] intent">
        <div className="block sm:hidden md:hidden">
          <DashNavBar />
        </div>
        <div>
          <h3 className="text-2xl lg:ml-4 md:ml-4 justify-center">
            Integrations
          </h3>
        </div>
        <div className="flex flex-row">
          <div className="sm:w-[28vw] sm:mr-4">
            <SearchComponent />
          </div>
          <div className="flex gap-2 items-center content ">
            {routes.map((route) => (
              <Link key={route.href} href={route.href}>
                <a
                  className={`text-sm group flex p-3 justify-start font-medium cursor-pointer hover:text-black hover:bg-white/10 rounded-lg transition ${
                    pathname === route.href
                      ? "text-white bg-white/10"
                      : "text-zinc-400"
                  }`}
                >
                  <div className="flex items-center">
                    <route.icon className={`h-5 w-5 mr-3 `} />
                  </div>
                </a>
              </Link>
            ))}
            <SessionProvider>
              {/* Your other components */}
              <AccountMenu />
            </SessionProvider>
          </div>
        </div>
      </div>

      <div className="w-[100vw]">
        <hr />
      </div>
      <div className="mt-2 mb-2 ml-6">
        <h2>Manage your Integrations by connecting to these platforms</h2>
      </div>
      <div className="w-[100vw] text-grey shadow-lg">
        <hr />
      </div>
    </div>
  );
};

export default DashNav;
