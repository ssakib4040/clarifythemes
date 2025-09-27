"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      name: "Products",
      href: "/products",
    },

    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left: Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 font-bold text-gray-900 text-xl"
        >
          ClarifyThemes
        </Link>

        {/* Desktop: Nav (right) */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-[#4e73df] transition-colors"
            >
              {item.name}
            </a>
          ))}

          <Button className="ml-2 bg-[#3657ff] hover:bg-[#4563fc] text-white rounded-full px-4 py-2 cursor-pointer">
            Get Started
          </Button>
        </nav>

        {/* Mobile: hamburger (right) */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="p-2 group cursor-pointer"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6 text-gray-700 group-hover:text-white" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72 p-6">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="flex items-center gap-3 font-bold text-gray-900 text-lg"
                  onClick={() => setOpen(false)}
                >
                  ClarifyThemes
                </Link>
                {/* 
                <Button
                  variant="ghost"
                  className="p-2"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-gray-700" />
                </Button> */}
              </div>

              <nav className="mt-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-base font-medium text-gray-800 hover:text-[#4e73df] transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <Button className="mt-6 bg-[#3657ff] hover:bg-[#4563fc] text-white rounded-full w-full">
                  Get Started
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
