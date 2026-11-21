import Link from "next/link";
import { asset } from "../../lib/asset";
import PastPartners from "../about/PastPartners";

export const metadata = {
  title: "Partners & Collaborators | Initiative on Islam & Medicine",
  description:
    "Institutional, academic, medical, and community partners collaborating with the Initiative on Islam & Medicine (II&M).",
};

const PARTNER_CATEGORIES = [
  {
    category: "Academic & Research Institutions",
    desc: "Collaborating with renowned academic institutions on empirical bioethics research, interdisciplinary symposia, and scholarly dialogue.",
    partners: [
      {
        name: "The University of Chicago",
        logo: "/images/partners/collaborations/uchicago.png",
        role: "Research & Academic Collaboration",
      },
      {
        name: "Medical College of Wisconsin",
        logo: "/images/partners/collaborations/mcw.png",
        role: "Medical Education & Clinical Ethics",
      },
      {
        name: "International Islamic University Malaysia",
        logo: "/images/partners/collaborations/iium.png",
        role: "Global Theological & Scientific Exchange",
      },
    ],
  },
  {
    category: "Foundations & Philanthropic Alliances",
    desc: "Partnering with global philanthropic organizations dedicated to the constructive dialogue between science and religion.",
    partners: [
      {
        name: "John Templeton Foundation",
        logo: "/images/partners/collaborations/templeton.jpg",
        role: "Grant Funding & Intellectual Inquiry",
      },
      {
        name: "Muslim Community Center (MCC)",
        logo: "/images/partners/collaborations/mcc.jpg",
        role: "Community Health & Educational Engagement",
      },
    ],
  },
  {
    category: "Medical & Clinical Associations",
    desc: "Working with leading Muslim physician organizations and healthcare professional networks.",
    partners: [
      {
        name: "IMANA",
        logo: "/images/partners/collaborations/imana.png",
        role: "Islamic Medical Association of North America",
      },
      {
        name: "CPSA",
        logo: "/images/partners/collaborations/cpsa.png",
        role: "Council of Pakistani Physicians in North America",
      },
    ],
  },
  {
    category: "Educational Institutions & Islamic Schools",
    desc: "Equipping Islamic high schools, educators, and youth leaders with evidence-informed science & theology curricula.",
    partners: [
      {
        name: "Darul Qasim",
        logo: "/images/partners/collaborations/darul-qasim.png",
        role: "Traditional Islamic Sciences Institute",
      },
      {
        name: "Universal School",
        logo: "/images/partners/collaborations/universal-school.png",
        role: "Secondary Education Partner",
      },
      {
        name: "Basira Education",
        logo: "/images/partners/collaborations/basira-education.png",
        role: "Theological Education & Rational Sciences",
      },
      {
        name: "ISLA",
        logo: "/images/partners/collaborations/isla.png",
        role: "Islamic Schools League of America",
      },
      {
        name: "Salaam School",
        logo: "/images/partners/collaborations/salaam-school.jpg",
        role: "Community School Partner",
      },
    ],
  },
];

export default function PartnersPage() {
  return (
    <div className="partners-page">
      {/* Hero */}
      <section className="partners-hero">
        <div className="container">
          <div className="partners-hero-content">
            <span className="partners-hero-eyebrow">OUR NETWORK &amp; COLLABORATIONS</span>
            <h1 className="partners-hero-title">
              Partners &amp; <em>Collaborators</em>
            </h1>
            <p className="partners-hero-lead">
              The Initiative on Islam &amp; Medicine collaborates with leading universities,
              academic medical centers, religious foundations, and community organizations to bridge
              traditional Islamic wisdom and contemporary healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <PastPartners />

      {/* Categories Grid */}
      <section className="partners-categories-section">
        <div className="container">
          <div className="row g-5">
            {PARTNER_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="col-lg-6">
                <div className="partner-cat-card">
                  <h2 className="partner-cat-title">{cat.category}</h2>
                  <p className="partner-cat-desc">{cat.desc}</p>
                  <div className="partner-items-grid">
                    {cat.partners.map((p, pIdx) => (
                      <div key={pIdx} className="partner-item-card">
                        <div className="partner-item-logo-wrap">
                          <img
                            src={asset(p.logo)}
                            alt={p.name}
                            className="partner-item-logo"
                            loading="lazy"
                          />
                        </div>
                        <div className="partner-item-info">
                          <h3 className="partner-item-name">{p.name}</h3>
                          <span className="partner-item-role">{p.role}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="partners-cta-section">
        <div className="container text-center">
          <span className="partners-hero-eyebrow" style={{ color: "#d2b48c" }}>
            COLLABORATE WITH US
          </span>
          <h2 className="partners-cta-title">Interested in Partnering With II&amp;M?</h2>
          <p className="partners-cta-lead">
            Whether you represent an academic medical center, a community institution, or an
            educational foundation, we welcome opportunities for meaningful collaboration.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
            <Link href="/contact" className="btn-seamless-maroon">
              GET IN TOUCH <i className="fa-solid fa-arrow-right ms-2" />
            </Link>
            <Link href="/about" className="btn-seamless-outline">
              ABOUT OUR WORK <i className="fa-solid fa-arrow-right ms-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
