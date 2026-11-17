import SymposiumPageClient from "./SymposiumPageClient";

export const metadata = {
  title: "Multidisciplinary Symposium on Islam and Biomedicine | II&M",
  description:
    "September 8–9, 2018 at Gordon Center, University of Chicago. Bringing together an international cohort of academicians, clinicians, and Islamic seminarians to explore Islamic theology, metaphysics, and biomedicine.",
  keywords: [
    "Multidisciplinary Symposium on Islam and Biomedicine",
    "University of Chicago",
    "Islamic Bioethics",
    "Islam and Medicine",
    "Ghazalian Approach",
    "Biomedical Epistemology",
    "Gordon Center",
    "Dr. Asim I. Padela",
  ],
  openGraph: {
    title: "Multidisciplinary Symposium on Islam and Biomedicine",
    description:
      "Sept 8–9, 2018 | Gordon Center, University of Chicago. Scholastic traditions of Islam and the human sciences interfacing with medicine.",
    url: "/multidisciplinary-symposium",
    siteName: "Initiative on Islam & Medicine",
    type: "website",
  },
};

export default function MultidisciplinarySymposiumPage() {
  return <SymposiumPageClient />;
}
