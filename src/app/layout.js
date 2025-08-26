import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import VendorScripts from "@/components/utils/VendorScripts";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ScrollTop from "@/components/scrollTop/ScrollTop";

export const metadata = {
  title: "dotseek - Modern Business Solutions",
  description:
    "We provide innovative web design, development, and business solutions to help your brand grow online.",
  keywords: [
    "dotseek",
    "web design",
    "web development",
    "business solutions",
    "digital marketing",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "dotseek - Modern Business Solutions",
    description:
      "We provide innovative web design, development, and business solutions to help your brand grow online.",
    url: "https://dotseek.co.uk",
    siteName: "dotseek",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "dotseek - Modern Business Solutions",
    description:
      "We provide innovative web design, development, and business solutions to help your brand grow online.",
  },
};

const navItems = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/#about" },
  { label: "Features", href: "/#features" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  // {
  //   label: "Dropdown",
  //   href: "#",
  //   children: [
  //     { label: "Dropdown 1", href: "#" },
  //     {
  //       label: "Deep Dropdown",
  //       href: "#",
  //       children: [
  //         { label: "Deep Dropdown 1", href: "#" },
  //         { label: "Deep Dropdown 2", href: "#" },
  //         { label: "Deep Dropdown 3", href: "#" },
  //         { label: "Deep Dropdown 4", href: "#" },
  //         { label: "Deep Dropdown 5", href: "#" },
  //       ],
  //     },
  //     { label: "Dropdown 2", href: "#" },
  //     { label: "Dropdown 3", href: "#" },
  //     { label: "Dropdown 4", href: "#" },
  //   ],
  // },
  { label: "Contact", href: "/#contact" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header siteName="dotSeek" navItems={navItems} />
        <div className="main">{children}</div>
        <Footer />
        <ScrollTop />
        <VendorScripts />
      </body>
    </html>
  );
}
