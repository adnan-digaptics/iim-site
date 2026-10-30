"use client";

import { useState } from "react";
import Link from "next/link";

const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "Who is this curriculum for?",
    answer:
      "The curriculum is designed for high school educators, homeschool parents, Islamic school teachers, university instructors, and adult learners interested in exploring the dialogue between bioscience and Islamic thought.",
  },
  {
    id: "faq-2",
    question: "Can the curriculum adapt to homeschooling?",
    answer:
      "Yes. The curriculum can be adapted for homeschooling, weekend schools, full-time Islamic schools, and youth groups.",
  },
  {
    id: "faq-3",
    question: "Is prior teaching experience necessary?",
    answer:
      "No prior specialized teaching experience is necessary. Each unit includes comprehensive educator guides, lecture slides, discussion prompts, vocabulary keys, and assessment rubrics to guide instructors through every lesson.",
  },
  {
    id: "faq-4",
    question: "How can the curriculum be implemented?",
    answer:
      "The curriculum can be taught as a standalone semester course, integrated into existing biology or natural science modules, or offered as a supplemental weekend seminar series in religious studies and ethics.",
  },
  {
    id: "faq-5",
    question: "How is each unit structured?",
    answer:
      "Each unit features core thematic essays, multimedia lecture slides, classroom discussion questions, hands-on inquiry activities, primary source readings from classical Islamic scholarship, and contemporary scientific literature.",
  },
];

export function PartnersTabs() {
  const [activeTab, setActiveTab] = useState("partners");

  return (
    <div className="eb-partnersWrapper">
      <div className="eb-partnersTabButtons" role="tablist" aria-label="Partners and Support">
        <button
          role="tab"
          type="button"
          aria-selected={activeTab === "partners"}
          aria-controls="panel-partners"
          id="tab-partners"
          className={`eb-partnerTabBtn ${activeTab === "partners" ? "eb-partnerTabBtnActive" : ""}`}
          onClick={() => setActiveTab("partners")}
        >
          Partner Organizations
        </button>
        <button
          role="tab"
          type="button"
          aria-selected={activeTab === "funding"}
          aria-controls="panel-funding"
          id="tab-funding"
          className={`eb-partnerTabBtn ${activeTab === "funding" ? "eb-partnerTabBtnActive" : ""}`}
          onClick={() => setActiveTab("funding")}
        >
          Funding
        </button>
      </div>

      <div className="eb-partnersContentCard">
        {activeTab === "partners" ? (
          <div
            id="panel-partners"
            role="tabpanel"
            aria-labelledby="tab-partners"
            className="eb-partnerTabPanel"
          >
            <p className="eb-partnerText">
              Explore collaborating organizations and project details on the original II&amp;M research project page.
            </p>
            <Link href="/research" className="eb-partnerLink">
              View project partners ↗
            </Link>
          </div>
        ) : (
          <div
            id="panel-funding"
            role="tabpanel"
            aria-labelledby="tab-funding"
            className="eb-partnerTabPanel"
          >
            <p className="eb-partnerText">
              Supported by generous grant funding from the John Templeton Foundation and institutional backing from academic partners dedicated to advancing science and religion dialogue.
            </p>
            <Link href="/research" className="eb-partnerLink">
              Learn about our funders ↗
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export function FaqAccordion() {
  // By default, item 2 is open matching the reference screenshot
  const [openIds, setOpenIds] = useState(["faq-2"]);

  const toggleItem = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="eb-faqAccordion" role="region" aria-label="Frequently Asked Questions">
      {FAQ_ITEMS.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className={`eb-faqItem ${isOpen ? "eb-faqItemOpen" : ""}`}
          >
            <button
              type="button"
              className="eb-faqQuestionBtn"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`answer-${item.id}`}
              id={`question-${item.id}`}
            >
              <span className="eb-faqQuestionText">{item.question}</span>
              <span className={`eb-faqChevron ${isOpen ? "eb-faqChevronOpen" : ""}`} aria-hidden="true">
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.5L7 7.5L13 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            <div
              id={`answer-${item.id}`}
              role="region"
              aria-labelledby={`question-${item.id}`}
              className={`eb-faqAnswerWrapper ${isOpen ? "eb-faqAnswerVisible" : ""}`}
            >
              <div className="eb-faqAnswerContent">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
