import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { SessionProvider } from "next-auth/react";
import AccountMenu from "./AccountMenu";

import {
  LayoutDashboard,
  Workflow,
  Files,
  Banknote,
  File,
  Settings,
  Bell,
  HelpCircle,
} from "lucide-react";
const routes = [];

const navItems = [
  {
    icon: Bell,
    link: "/notification",
    title: "Notification",
    color: "text-violet-500",
  },
  {
    icon: HelpCircle,
    link: "/help",
    title: "Support",
    color: "text-sky-500",
  },
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    link: "/dashboard",
    color: "text-sky-500",
  },
  {
    title: "Quick start guide",
    icon: Workflow,
    link: "/start",
    color: "text-violet-500",
  },
  {
    title: "Integrations",
    icon: Files,
    color: "text-pink-700",
    link: "/integration",
  },
  {
    title: "Billing and Plans",
    icon: Banknote,
    color: "text-orange-700",
    link: "/billing",
  },
  {
    title: "Documentations",
    icon: File,
    color: "text-emerald-500",
    link: "/documentations",
  },
  {
    title: "Settings",
    icon: Settings,
    link: "/settings",
  },
];

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export default function NavBar(props: Props) {
  const pathname = "";
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TerraWeb
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link key={item.link} href={item.link}>
            <a
              className={`text-sm group flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg transition ${
                pathname === item.link
                  ? "text-white bg-white/10"
                  : "text-zinc-400 hover:text-black hover:bg-white/10"
              }`}
            >
              <div className="flex items-center flex-1">
                <item.icon className={`h-5 w-5 mr-3 ${item.color}`} />
                {item.title}
              </div>
            </a>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" className="bg-blue-900 w-[20vw]">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ justifyContent: "start", mr: 2, display: { sm: "none" } }}
          ></IconButton>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ justifyContent: "start", mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            >
              TerraWeb
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
