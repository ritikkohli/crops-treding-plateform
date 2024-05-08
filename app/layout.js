import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "crops trading",
  description: "a plateform where farmers can sell their crops and buy they need",
};

export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div>
          {children}
          <Toaster/>
        </div>
      </body>
    </html>
  );
}
