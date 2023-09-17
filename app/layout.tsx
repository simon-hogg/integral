import Nav from "@/components/layout/nav";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { Suspense } from "react";
import { inter, sfPro } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Precedent - Building blocks for your Next.js project",
  description:
    "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  twitter: {
    card: "summary_large_image",
    title: "Precedent - Building blocks for your Next.js project",
    description:
      "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
    creator: "@steventey",
  },
  metadataBase: new URL("https://precedent.dev"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={cx(sfPro.variable, inter.variable, "h-full")}>
        <div className="flex flex-row items-stretch w-full h-full m-h-full overflow-hidden">
          <div className="flex flex-col relative h-full border border-r-slate-100">
            <Suspense fallback="...">
              {/* @ts-expect-error Server Component */}
              <Nav />
            </Suspense>
          </div>
          <div className="flex flex-col grow shrink basis-0 min-w-0">
            <main className="flex flex-col relative overflow-auto place-items-stretch">
              {children}
            </main>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
