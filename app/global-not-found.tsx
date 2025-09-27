import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />

        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
          <div className="text-center">
            <h1 className="text-9xl font-extrabold text-[#3657ff]">404</h1>
            <p className="mt-4 text-2xl font-semibold text-gray-800">
              Page not found
            </p>
            <p className="mt-2 text-gray-600">
              Sorry, we couldn’t find the page you’re looking for.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="px-6 h-11 rounded-md bg-[#3657ff] text-white font-medium  transition">
                Go Home
              </Button>
              <Button
                // onClick={() => window.history.back()}
                variant="ghost"
                className="px-6 h-11 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
