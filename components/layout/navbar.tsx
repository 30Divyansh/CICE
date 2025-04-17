"use client";
import { Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";

// Elegantly ordered route list
const routeList = [
  { href: "#team", label: "Team" },
  { href: "#faq", label: "FAQ" },
  { href: "#footer", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    console.log("Theme toggled");
  };

  return (
    <header className="bg-card bg-opacity-90 backdrop-blur-lg sticky top-5 z-50 w-[92%] md:w-[75%] lg:w-[70%] lg:max-w-screen-xl mx-auto rounded-2xl border border-secondary shadow-xl px-6 py-4 flex items-center justify-between transition-all duration-300 ease-in-out">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-3 font-extrabold text-2xl 
          text-transparent bg-clip-text 
          animate-gradient-glow bg-gradient-to-r from-pink-500 via-purple-500 to-sky-400 
          drop-shadow-xl tracking-wide hover:scale-105 transition-transform duration-300"
      >
        <div className="w-12 h-12 rounded-xl overflow-hidden border border-white shadow-md">
          <img src="/logo.png" alt="CICE logo" className="object-cover w-full h-full" />
        </div>
        CICE
      </Link>

      {/* Mobile Menu */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer text-muted-foreground w-7 h-7 hover:text-foreground transition-colors duration-300"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="bg-card border-r border-secondary rounded-tr-2xl rounded-br-2xl flex flex-col justify-between shadow-xl"
          >
            <SheetHeader className="mb-4">
              <SheetTitle className="flex items-center gap-2 text-lg text-transparent bg-clip-text animate-gradient-glow bg-gradient-to-r from-pink-500 via-purple-500 to-sky-400">
                <div className="w-9 h-9 rounded-md overflow-hidden border border-white shadow-sm">
                  <img src="/logo.png" alt="CICE logo" className="object-cover w-full h-full" />
                </div>
                CICE
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-4">
              {routeList.map(({ href, label }) => (
                <Button
                  key={href}
                  onClick={() => setIsOpen(false)}
                  asChild
                  variant="ghost"
                  className="text-left text-lg w-full hover:bg-muted hover:scale-[1.02] transition-all"
                >
                  <Link href={href}>{label}</Link>
                </Button>
              ))}
            </div>

            <SheetFooter className="flex-col items-start mt-4">
              <Separator className="mb-2" />
              <Button
                variant="ghost"
                onClick={toggleTheme}
                className="bg-white text-black dark:bg-black dark:text-white px-5 py-2 rounded-xl font-semibold transition-transform hover:scale-105 text-sm shadow"
              >
                🌓 Toggle Mode
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-8">
        <NavigationMenu>
          <NavigationMenuList className="gap-6">
            {routeList.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={href}
                    className="text-[17px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 hover:underline underline-offset-4 decoration-pink-400"
                  >
                    {label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          variant="ghost"
          onClick={toggleTheme}
          className="bg-white text-black dark:bg-black dark:text-white px-5 py-2 rounded-xl font-semibold transition-transform hover:scale-105 text-sm shadow"
        >
          🌓 Toggle Mode
        </Button>
      </div>
    </header>
  );
};
