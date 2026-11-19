import DignityPageClient from "./DignityPageClient";

export const metadata = {
  title: "Dignity and Healthcare at End-of-Life | II&M",
  description:
    "Abrahamic Faiths in a Bioethics Conversation. A one-day event hosted by Bayan Claremont and co-organized by the Initiative on Islam & Medicine (DICID), October 24, 2015, Claremont School of Theology.",
  keywords: [
    "Dignity and Healthcare at End-of-Life",
    "Abrahamic Faiths",
    "Bioethics",
    "Interfaith Dialogue",
    "Human Dignity",
    "End-of-Life Care",
    "Bayan Claremont",
    "DICID",
  ],
  openGraph: {
    title: "Dignity and Healthcare at End-of-Life",
    description:
      "October 24, 2015 | Claremont School of Theology. Abrahamic Faiths in a Bioethics Conversation.",
    url: "/dignity-healthcare-end-of-life",
    siteName: "Initiative on Islam & Medicine",
    type: "website",
  },
};

export default function DignityHealthcarePage() {
  return <DignityPageClient />;
}
