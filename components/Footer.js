import Link from "next/link";

export default function Footer() {
  return (
    <footer className="iim-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 iim-footer-col">
            <Link className="iim-footer-brand" href="/">
              <span className="brand-mark" aria-hidden="true" />
              <span className="brand-type">
                Initiative on<br />
                <b>Islam &amp; Medicine</b>
                <small>INSTILLING HIKMAH IN HEALTHCARE</small>
              </span>
            </Link>
            <p className="iim-footer-tagline">
              Knowledge that empowers care. For a more informed, equitable, and compassionate healthcare future.
            </p>
            <div className="iim-footer-social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fa-brands fa-youtube" /></a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X"><i className="fa-brands fa-x-twitter" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
            </div>
          </div>
          <div className="col-6 col-lg-2 iim-footer-col">
            <h3 className="iim-footer-heading">Explore</h3>
            <ul className="iim-footer-links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/mission">Mission &amp; Vision</Link></li>
              <li><Link href="/team">Our Team</Link></li>
              <li><Link href="/impact">Our Impact</Link></li>
              <li><Link href="/consultation">Consultation</Link></li>
              <li><Link href="/speaking">Speaking</Link></li>
            </ul>
          </div>
          <div className="col-6 col-lg-3 iim-footer-col">
            <h3 className="iim-footer-heading">Learn &amp; Engage</h3>
            <ul className="iim-footer-links">
              <li><Link href="/education">Education</Link></li>
              <li><Link href="/courses">Courses</Link></li>
              <li><Link href="/workshops">Workshops</Link></li>
              <li><Link href="/bioscience">Bioscience &amp; Islam</Link></li>
              <li><Link href="/curriculum">Curriculum</Link></li>
              <li><Link href="/research">Research</Link></li>
              <li><Link href="/resources">Resources</Link></li>
              <li><Link href="/books">Books</Link></li>
              <li><Link href="/podcast">Podcast</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 iim-footer-col">
            <h3 className="iim-footer-heading">Get Involved</h3>
            <p className="iim-footer-tagline">Partner with II&amp;M to bring evidence-informed learning to your community.</p>
            <Link href="/donate" className="iim-footer-cta">
              SUPPORT OUR WORK <i className="fa-solid fa-arrow-right ms-2" />
            </Link>
          </div>
        </div>
        <div className="iim-footer-bottom">
          <span>© 2026 Initiative on Islam &amp; Medicine. All rights reserved.</span>
          <div className="iim-footer-legal">
            <Link href="/consultation">Privacy Policy</Link>
            <Link href="/consultation">Terms</Link>
            <Link href="/consultation">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
