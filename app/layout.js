import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";


export const mont = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: '--font-mont'
});

 export const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "900"],
  style: ["normal"],
  display: 'swap',
  variable: '--font-playfair-display'
})

export const metadata = {
  title: "Thrasher Landing",
  description: "Home of the Thrasher Landing Neigborhood",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mont.variable} ${playfair_display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
