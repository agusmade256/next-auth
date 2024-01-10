import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavbarAuth";
import Provider from "@/utils/Provider";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <SessionProvider session={session}>
          {/* <Provider> */}
          <div className="relative top-0 left-0 flex w-full">
            <Navbar />
            <div className="w-full flex flex-col justify-center items-center">
              {children}
            </div>
          </div>
          {/* </Provider> */}
        </SessionProvider>
      </body>
    </html>
  );
}
