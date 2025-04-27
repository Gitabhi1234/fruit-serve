import type { Metadata } from "next";
import {Roboto} from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_NAME,SERVER_URL } from "@/lib/constants";
import { Provider } from "@/components/ui/provider";

const roboto = Roboto({
  weight:['300','700'],
  subsets: ["latin"],
});
import { Suspense } from "react";
import Loading from "./(root)/Loading";

export const metadata: Metadata = {
  title:{
    template: '%s | veg-supp ',
    default: `${APP_NAME}`
  },
  description: "fruit supplier web",
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.className}`}
      >
        <Provider>
        <Suspense fallback={<Loading/>}>
          {children}
        </Suspense>
        </Provider>
      </body>
    </html>
  );
  }
