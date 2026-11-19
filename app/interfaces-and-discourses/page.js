import InterfacesPageClient from "./InterfacesPageClient";

export const metadata = {
  title: "Interfaces and Discourses: A Multidisciplinary Conference | II&M",
  description:
    "April 15–17, 2016 at Gordon Center, University of Chicago. A multidisciplinary conference on Islamic Theology, Law, and Biomedicine hosted by the Initiative on Islam & Medicine.",
  keywords: [
    "Interfaces and Discourses",
    "Multidisciplinary Conference",
    "Islamic Theology",
    "Islamic Bioethics",
    "University of Chicago",
    "Gordon Center",
    "Islam and Biomedicine",
  ],
  openGraph: {
    title: "Interfaces and Discourses: A Multidisciplinary Conference on Islamic Theology, Law, and Biomedicine",
    description:
      "April 15–17, 2016 | Gordon Center, University of Chicago. Examining theological, scientific, and legal dimensions of human dignity and healthcare.",
    url: "/interfaces-and-discourses",
    siteName: "Initiative on Islam & Medicine",
    type: "website",
  },
};

export default function InterfacesAndDiscoursesPage() {
  return <InterfacesPageClient />;
}
