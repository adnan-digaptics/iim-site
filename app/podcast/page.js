import { asset } from "../../lib/asset";
import Link from "next/link";
import PodcastGuests from "./PodcastGuests";

export const metadata = {
  title: "The Medic & The Mufti Podcast | Initiative on Islam & Medicine",
  description:
    "A thoughtful podcast exploring how medicine and Islamic wisdom intersect to shape ethics, healing, and human well-being.",
};

const EPISODES = [
  ["01", "Science and Religion: How Can We Know Anything at All?", "Released April 15, 2024", "/images/podcast/ep-cosmos.jpg"],
  ["02", "How Did We Come About? The Question of Human Origin", "Released May 6, 2024", "/images/bio-topic-genes.jpg"],
  ["03", "What Does it Mean to be Human? Reflections on Neuroscience, Artificial Intelligence and the Soul", "Released June 3, 2024", "/images/podcast/ep-brain.jpg"],
  ["04", "What is the Future of Humankind? Are we and should we be changing our bodies and brains?", "Released July 1, 2024", "/images/bio-topic-robot.jpg"],
  ["05", "Are Our Lives Pre-determined? The Question of Free Will and Human Agency", "Released July 29, 2024", "/images/podcast/ep-horizon.jpg"],
  ["06", "Are Humans Unique in the Universe? The Question of Extraterrestrial Intelligent Life", "Released August 26, 2024", "/images/bio-planet.jpg"],
];

const GUESTS = [
  ["Dr. Mohd Yusof Mohamad", "International Islamic University Malaysia", "/images/podcast/guest-mohamad.png"],
  ["Dr. Omar Qureshi", "Yaqeen Institute", "/images/podcast/guest-qureshi.png"],
  ["Dr. Macksood Aftab", "Michigan State University", "/images/podcast/guest-aftab.png"],
  ["Dr. Shoaib Malik", "University of Edinburgh", "/images/podcast/guest-malik.png"],
  ["Dr. Abdurezak Hashi", "International Islamic University Malaysia", "/images/podcast/guest-hashi.png"],
  ["Usama Javed Mirza", "University of Cambridge", "/images/podcast/guest-mirza.png"],
  ["Dr. Ahsan Arozullah", "Darul Qasim College", "/images/podcast/guest-ahsan.jpg"],
  ["Shaykh Bilal Ali Ansari", "Darul Qasim College", "/images/podcast/guest-ansari.png"],
  ["Dr. Raudah Yunus", "Medical College of Wisconsin", "/images/podcast/guest-yunus.png"],
  ["Shaykh Hamza Karamali", "Basira Education", "/images/podcast/guest-karamali.png"],
  ["Dr. Jennifer Wiseman", "Johns Hopkins University", "/images/podcast/guest-wiseman.png"],
  ["Dr. Anke Bouzenita", "Sultan Qaboos University", ""],
  ["Dr. Paul Davies", "Arizona State University", "/images/podcast/guest-davies.png"],
  ["Dr. Jennifer Nagel", "University of Toronto", "/images/podcast/guest-nagel.png"],
  ["Dr. Tara Shears", "University of Liverpool", "/images/podcast/guest-shears.jpg"],
  ["Prof. Philip Donoghue", "University of Bristol", "/images/podcast/guest-donoghue.jpg"],
  ["Prof. Rana Dajani", "Hashemite University", "/images/podcast/guest-dajani.jpg"],
  ["Prof. Chris Stringer", "Natural History Museum, London", "/images/podcast/guest-stringer.jpg"],
  ["Prof. Agustín Fuentes", "Princeton University", "/images/podcast/guest-fuentes.jpg"],
  ["Prof. Megan Peters", "University of California, Irvine", "/images/podcast/guest-peters.webp"],
  ["Prof. Peter Ulric Tse", "Dartmouth College", "/images/podcast/guest-tse.jpg"],
  ["Prof. Philip Goff", "Durham University", "/images/podcast/guest-goff.jpg"],
  ["Dr. James J. Hughes", "University of Massachusetts Boston", "/images/podcast/guest-hughes.jpg"],
  ["Dr. Anders Sandberg", "Oxford's Future of Humanity Institute", ""],
  ["Prof. Gregg D. Caruso", "Fairfield University", "/images/podcast/guest-caruso.jpg"],
  ["Prof. Emilie Caspar", "Ghent University", "/images/podcast/guest-caspar.jpg"],
  ["Prof. Han Brunner", "Radboud University Medical Center", "/images/podcast/guest-brunner.jpg"],
  ["Dr. Gwen Adshead", "Ravenswood House", "/images/podcast/guest-adshead.jpg"],
  ["Prof. Sara Walker", "Arizona State University", "/images/podcast/guest-walker.jpg"],
  ["Prof. Monica Grady", "The Open University", "/images/podcast/guest-grady.jpg"],
];

const PLATFORMS = [
  ["fa-solid fa-globe", "Listen on", "II&M Website", "#listen", ""],
  ["fa-brands fa-youtube", "Watch on", "YouTube", "#listen", "is-youtube"],
  ["fa-solid fa-podcast", "Listen on", "Apple Podcasts", "#listen", "is-apple"],
  ["fa-brands fa-spotify", "Listen on", "Spotify", "#listen", "is-spotify"],
  ["fa-solid fa-file-lines", "Read", "Transcripts", "#episodes", ""],
];

const TOPICS = [
  ["fa-brain", "Human Origin and Evolution"],
  ["fa-user", "What it Means to Be Human"],
  ["fa-microchip", "Neuroscience and AI"],
  ["fa-scale-balanced", "Free Will and Human Agency"],
  ["fa-earth-americas", "Extraterrestrial Life"],
  ["fa-book-open", "Faith, Science and Society"],
  ["fa-heart-pulse", "Ethics, Healing and Human Flourishing"],
];

const PILLARS = [
  ["fa-book-open", "Research", "Evidence-informed scholarship"],
  ["fa-graduation-cap", "Education", "Courses, workshops, and resources"],
  ["fa-comments", "Dialogue", "Bridging communities and perspectives"],
  ["fa-lightbulb", "Impact", "More compassionate, ethical healthcare"],
];

function initials(name) {
  return name
    .split(" ")
    .filter((part) => part[0] && part[0] === part[0].toUpperCase() && part.length > 2)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

export default function PodcastPage() {
  const guests = GUESTS.map(([name, role, image]) => ({
    name,
    role: role || "Conversation partner",
    image: image ? asset(image) : "",
    initials: initials(name),
  }));

  return (
    <div className="podcast-page">
      <header className="hero-seamless hero-podcast-seamless">
        <div className="hero-bg-wrapper">
          <img
            src={asset("/images/podcast-medic-mufti.jpg")}
            alt="Two scholars in conversation, one in a suit and glasses and one wearing a white cap"
            className="hero-bg-img"
            loading="eager"
          />
          <div className="hero-gradient-overlay" />
          <div className="hero-watermark-overlay" />
        </div>
        <div className="container hero-container-relative">
          <div className="hero-content-inner">
            <p className="hero-eyebrow-text-gold">PODCAST</p>
            <div className="hero-eyebrow-bar-maroon" />
            <h1 className="hero-seamless-title">
              The Medic &amp; The Mufti <em>Podcast</em>
            </h1>
            <p className="pod-kicker">Big Questions About the Human Being — Islam and Biomedicine in Dialogue.</p>
            <p className="hero-seamless-lead">
              A thought-provoking podcast exploring how medicine and faith intersect to shape health, healing, and human well-being — with conversations grounded in knowledge, compassion, and real-world relevance.
            </p>
            <div className="hero-seamless-actions">
              <a href="#listen" className="btn-seamless-maroon">LISTEN NOW <i className="fa-solid fa-arrow-right" /></a>
              <a href="#episodes" className="btn-seamless-outline">WATCH EPISODES <i className="fa-solid fa-arrow-right" /></a>
              <a href="#about" className="btn-seamless-outline">EXPLORE THE SERIES <i className="fa-solid fa-arrow-right" /></a>
            </div>
          </div>
          <div className="pod-hero-notes">
          <aside className="pod-award">
            <a href="https://americanwritingawards.com/podcast-of-the-year" target="_blank" rel="noopener noreferrer">
              <img
                src={asset("/images/podcast/podcast-of-the-year-2026.png")}
                alt="American Writing Awards Podcast of the Year 2026"
              />
            </a>
          </aside>
          <aside className="pod-hero-quote">
            <p>
              Big questions.
              <br />
              Two perspectives.
              <br />
              One conversation.
            </p>
            <span />
          </aside>
          </div>
        </div>
      </header>

      <div className="pod-award-bar">
        <a className="pod-award-bar-main" href="https://americanwritingawards.com/podcast-of-the-year" target="_blank" rel="noopener noreferrer">
          <span className="pod-award-bar-icon" aria-hidden="true"><i className="fa-solid fa-microphone" /></span>
          <span>
            <strong>Podcast of the Year 2026</strong>
            <small>AMERICANWRITINGAWARDS.COM</small>
          </span>
        </a>
        <a className="pod-award-bar-cat" href="https://americanwritingawards.com/podcast-of-the-year" target="_blank" rel="noopener noreferrer">
          <span className="pod-award-bar-icon" aria-hidden="true"><i className="fa-solid fa-book-open" /></span>
          <strong>RELIGION &amp; SPIRITUALITY</strong>
        </a>
      </div>

      <section className="pod-about" id="about">
        <div className="container">
          <div className="pod-about-grid">
            <div>
              <p className="pod-eyebrow">ABOUT THE PODCAST</p>
              <h2>
                Dialogue for a More Human Future.
              </h2>
              <p>
                What happens when the expertise of a physician meets the insight of a mufti? The Medic &amp; The Mufti explores ethics, healing, science, spirituality, and the questions that matter most. Through honest and respectful dialogue, the podcast brings together diverse perspectives to foster understanding, not debate — inviting listeners to think more deeply about what it means to be human.
              </p>
              <a href="#listen" className="btn-seamless-maroon">WATCH OUR INTRODUCTION <i className="fa-solid fa-arrow-right" /></a>
            </div>
            <figure className="pod-trailer">
              <img src={asset("/images/podcast-medic-mufti.jpg")} alt="Scholars speaking across a podcast table" />
              <a href="#listen" className="pod-play" aria-label="Introduction listing">
                <i className="fa-solid fa-play" />
              </a>
              <figcaption>
                <strong>A CONVERSATION FOR OUR TIME</strong>
                Watch the trailer (2:15)
              </figcaption>
            </figure>
            <blockquote>
              <i className="fa-solid fa-quote-left" aria-hidden="true" />
              <p>Thoughtful, nuanced, and deeply human conversations on faith, science, and the future of our shared humanity.</p>
              <span />
            </blockquote>
          </div>
        </div>
      </section>

      <section className="pod-from">
        <div className="pod-from-photo-wrap">
          <img className="pod-from-photo" src={asset("/images/research/findings-mosque.jpg")} alt="Blue-domed mosque seen through ornate arches at sunset" />
        </div>
        <div className="pod-from-main">
          <div className="pod-from-copy">
              <p className="pod-eyebrow">PRESENTED BY THE INITIATIVE ON ISLAM &amp; MEDICINE</p>
              <h2>A Podcast from II&amp;M</h2>
              <p>
                The Medic &amp; The Mufti is a production of the Initiative on Islam &amp; Medicine (II&amp;M), a nonprofit research and education organization. For over a decade, II&amp;M has explored the intersection of Islamic tradition and modern medicine through research, dialogue, workshops, and educational initiatives. This podcast extends that mission — bringing these important conversations to a wider audience.
              </p>
              <Link href="/about" className="btn-seamless-maroon">LEARN MORE ABOUT II&amp;M <i className="fa-solid fa-arrow-right" /></Link>
            </div>
            <ul className="pod-pillars">
              {PILLARS.map(([icon, title, text]) => (
                <li key={title}>
                  <i className={`fa-solid ${icon}`} aria-hidden="true" />
                  <div>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                </li>
              ))}
            </ul>
        </div>
      </section>

      <section className="pod-host">
        <div className="container">
          <div className="pod-host-grid">
            <img src={asset("/images/our-team/padela-portrait.jpg")} alt="Dr. Aasim I. Padela" />
            <div>
              <p className="pod-eyebrow">MEET THE HOST</p>
              <h2>Dr. Aasim Padela, MD, MSc, FACEP</h2>
              <p className="pod-role">Emergency Medicine Physician. Scholar. Thought Leader.</p>
              <p>
                Dr. Aasim I. Padela is an emergency medicine physician, academic scholar, and international thought leader at the intersection of bioethics, public health, and religion. His research and writings explore how Islamic thought informs contemporary medical ethics and practice. His books, including <em>Bridging Bioscience and Islam</em>, shape many of the conversations on this podcast.
              </p>
              <div className="hero-seamless-actions">
                <Link href="/team" className="btn-seamless-maroon">LEARN MORE ABOUT THE HOST <i className="fa-solid fa-arrow-right" /></Link>
                <Link href="/books" className="btn-seamless-outline">EXPLORE RELATED WORKS <i className="fa-solid fa-arrow-right" /></Link>
              </div>
            </div>
            <div className="pod-books">
              <img src={asset("/images/podcast/host-book-bridging.jpg")} alt="Bridging Bioscience and Islam" />
              <img src={asset("/images/book-medicine-shariah.png")} alt="Medicine and Shariah" />
              <img src={asset("/images/podcast/host-book-biomedicine.jpg")} alt="Islam and Biomedicine" />
            </div>
          </div>
        </div>
      </section>

      <section className="pod-edu">
        <div className="pod-edu-copy">
              <p className="pod-eyebrow pod-eyebrow-gold">CONNECTED TO EDUCATION</p>
              <h2>Exploring Bioscience &amp; Islam</h2>
              <p className="pod-role">Fostering Connections Between Science and Theology for Medical Track Muslim Students</p>
              <p>
                The Medic &amp; The Mufti is part of II&amp;M’s broader educational initiative, which includes a comprehensive curriculum, workshops, and mentorship to help Muslim medical students and healthcare professionals engage deeply with questions at the intersection of science, religion, and the human experience.
              </p>
              <Link href="/bioscience" className="btn-seamless-maroon">EXPLORE THE EDUCATIONAL PROGRAM <i className="fa-solid fa-arrow-right" /></Link>
        </div>
            <figure>
              <img src={asset("/images/podcast/edu-discussion.jpg")} alt="Students and clinicians talking together around a laptop" />
              <figcaption>Equipping the next generation to navigate the big questions.</figcaption>
            </figure>
      </section>

      <section className="pod-episodes" id="episodes">
        <div className="container">
          <div className="pod-head">
            <p className="pod-eyebrow">FEATURED EPISODES</p>
          </div>
          <div className="pod-episode-row">
            {EPISODES.map(([num, title, date, image]) => (
              <article key={num}>
                <img src={asset(image)} alt="" />
                <p className="pod-ep-num">EPISODE {num}</p>
                <h3>{title}</h3>
                <p className="pod-date">{date}</p>
                <div className="pod-ep-actions">
                  <a href="#listen"><i className="fa-solid fa-play" /> Watch</a>
                  <a href="#listen"><i className="fa-solid fa-headphones" /> Listen</a>
                  <a href="#listen"><i className="fa-solid fa-file-lines" /> Transcript</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pod-guests" id="guests">
        <div className="container">
          <div className="pod-head">
            <p className="pod-eyebrow">FEATURED GUESTS &amp; CONVERSATION PARTNERS</p>
            <a href="#guests" className="pod-more">VIEW ALL GUESTS <i className="fa-solid fa-arrow-right" /></a>
          </div>
          <PodcastGuests guests={guests} />
        </div>
      </section>

      <section className="pod-listen" id="listen">
        <div className="container">
          <p className="pod-eyebrow">LISTEN &amp; WATCH</p>
          <div className="pod-platform-row">
            {PLATFORMS.map(([icon, label, name, href, brand]) => (
              <a href={href} key={name} className={brand}>
                <i className={icon} aria-hidden="true" />
                <span>{label}</span>
                <strong>{name}</strong>
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="pod-why">
        <div className="container">
          <div className="pod-why-grid">
            <div>
              <p className="pod-eyebrow">WHY THIS SERIES MATTERS</p>
              <h2>
                Big Questions for a More Compassionate World.
              </h2>
            </div>
            <div className="pod-topics">
              {TOPICS.map(([icon, label]) => (
                <article key={label}>
                  <i className={`fa-solid ${icon}`} aria-hidden="true" />
                  <h3>{label}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pod-final">
        <img src={asset("/images/our-mission/cta-mosque.jpg")} alt="Mosque through an ornate arch" />
        <div className="pod-final-copy">
          <div>
            <p className="pod-eyebrow pod-eyebrow-gold">JOIN THE CONVERSATION</p>
            <h2>Explore Faith, Science &amp; Human Flourishing.</h2>
            <p>Thoughtful conversations. Deeper understanding. A more compassionate world.</p>
          </div>
          <div className="hero-seamless-actions">
            <a href="#listen" className="btn-seamless-outline">LISTEN TO THE PODCAST <i className="fa-solid fa-arrow-right" /></a>
            <Link href="/speaking" className="btn-seamless-outline">REQUEST A SPEAKER <i className="fa-solid fa-arrow-right" /></Link>
            <Link href="/education" className="btn-seamless-outline">EXPLORE II&amp;M EDUCATION <i className="fa-solid fa-arrow-right" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
