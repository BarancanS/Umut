import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Tiny from "./components/Tiny/Tiny";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Umut's Portfolio",
  description:
    "Explore Umut's Planning and Cost Control Civil Engineering portfolio. Discover a showcase of successful projects, demonstrating expertise in project planning and cost management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Tiny />
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
