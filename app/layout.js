import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SiteEffects from "../components/SiteEffects";
import ConsultationModal from "../components/ConsultationModal";
import SpeakingModal from "../components/SpeakingModal";
import DonateModal from "../components/DonateModal";
import GSAPAnimations from "../components/GSAPAnimations";
import { asset } from "../lib/asset";

export const metadata = {
  title: {
    default: "Initiative on Islam & Medicine",
    template: "%s",
  },
  description: "Instilling Hikmah in Healthcare — research, education, consultation and speaking.",
  icons: {
    icon: [
      { url: asset("/favicon.ico"), sizes: "any" },
      { url: asset("/favicon-32x32.png"), sizes: "32x32", type: "image/png" },
      { url: asset("/icon.png"), sizes: "512x512", type: "image/png" },
    ],
    shortcut: asset("/favicon.ico"),
    apple: [{ url: asset("/apple-touch-icon.png"), sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning style={{ "--iim-pattern": `url("${asset("/images/islamic-pattern.svg")}")` }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <SiteEffects />
        <ConsultationModal />
        <SpeakingModal />
        <DonateModal />
        <GSAPAnimations />
      </body>
    </html>
  );
}
