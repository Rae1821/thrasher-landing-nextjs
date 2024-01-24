import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";


export const mont = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: '--font-mont'
});

 export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "900"],
  variable: '--font-playfairDisplay'
})

export const metadata = {
  title: "Thrasher Landing",
  description: "Home of the Thrasher Landing Neigborhood",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
