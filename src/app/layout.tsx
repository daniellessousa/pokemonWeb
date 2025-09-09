import MainLayout from "@/components/templates/MainLayout";
import { Montserrat } from 'next/font/google'
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
  variable: '--font-montserrat',
})


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
