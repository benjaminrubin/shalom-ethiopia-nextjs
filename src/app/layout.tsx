import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/navbar";
import Head from "next/head";
import Footer from "@/components/footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shalom Ethiopia Tours",
  description:
    "Shalom Ethiopia is a private tour operator in the wonderful country of Ethiopia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang='en'>
        <Head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
        </Head>
        <body className={inter.className}>
          <div className='relative'>
            <NavBar />
          </div>
          {children}
          <Footer />
          <Script src='node_modules/flowbite/dist/flowbite.min.js'></Script>
        </body>
      </html>
    </>
  );
}
