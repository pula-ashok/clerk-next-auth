import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import Loader from "@/components/Loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next Auth App",
  description: "Next Auth with Clerk",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ClerkLoading>
            {/* <div className="flex justify-center items-center h-screen">
              <p className="text-2xl font-bold text-gray-800">Loading...</p>
            </div> */}
            <Loader/>
          </ClerkLoading>
          <ClerkLoaded>
            <Header />
          </ClerkLoaded>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
