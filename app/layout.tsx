import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "To-Do List App",
  description: "Modern To-Do List with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen text-gray-800`}
      >
        <div className="flex flex-col min-h-screen">
          <header className="px-8 py-4 bg-white shadow-sm border-b border-gray-200">
            <h1 className="text-2xl font-bold text-blue-600 tracking-tight">
              To-Do Desk
            </h1>
          </header>

          <main className="flex-1 flex justify-center items-start py-10 px-6">
            {children}
          </main>

          <footer className="text-center text-sm text-gray-500 py-4">
            © {new Date().getFullYear()} To-Do Desk — Built with Next.js
          </footer>
        </div>
      </body>
    </html>
  );
}

