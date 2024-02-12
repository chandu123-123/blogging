import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar";
import StoreProvider from "@/store/StoreProvider";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title:{
    default:"Blogging",
    template:"%s "
  },
  icon:"favicon.ico",
  description: "In this website it contains all blogs related to technology, which relates mostly to btech students, Like full stack development ,machine learning ,road maps etc",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <StoreProvider>
      <Navbar></Navbar>
        {children}
        </StoreProvider>
        </body>
    </html>
  
  );
}
