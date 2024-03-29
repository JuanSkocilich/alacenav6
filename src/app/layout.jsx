import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/page-components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { UiProvider } from "@/context/UiContext";
import { Navbar } from "@/page-components/navbar";
import { FullSidebar } from "@/page-components/dashbaord/sidebar/full-sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <UiProvider>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Toaster closeButton /> {/* richColors */}
          </ThemeProvider>
        </body>
      </UiProvider>
    </html>
  );
}
