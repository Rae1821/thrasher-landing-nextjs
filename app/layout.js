import "./globals.css";
import { montserrat, playfair_display } from "@/lib/fonts";


export const metadata = {
  title: "Thrasher Landing",
  description: "Home of the Thrasher Landing Neigborhood",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair_display.variable} scroll-smooth`}>
      <body className="text-stone-950">{children}</body>
    </html>
  );
}
