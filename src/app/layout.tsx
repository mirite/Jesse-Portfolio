import "./globals.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Jesse Conner",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex justify-center min-h-[100vh] max-w-[100vw]">
        <div className="max-w-[1400px] mx-1 w-[100%]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
