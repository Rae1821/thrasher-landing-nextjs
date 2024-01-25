import "./globals.css";
import { montserrat } from "@/lib/fonts";



export const metadata = {
  title: "Thrasher Landing",
  description: "Home of the Thrasher Landing Neigborhood",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>{children}</body>
    </html>
  );
}
