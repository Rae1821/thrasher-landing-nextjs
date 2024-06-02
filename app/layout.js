import "./globals.css";
import { montserrat } from "@/lib/fonts";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
// import Provider from "@/components/shared/Provider";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/shared/Header";

export const metadata = {
  title: "Thrasher Landing",
  description: "Home of the Thrasher Landing Neigborhood HOA",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${montserrat.variable} scroll-smooth`}>
        <body className="text-stone-950">
          {children}
          <ScrollToTopButton />
        </body>
      </html>
    </ClerkProvider>
  );
}
