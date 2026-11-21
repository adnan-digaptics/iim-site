"use client";

import { useState, useEffect } from "react";
import { asset } from "../lib/asset";
import Link from "next/link";
import DonationModal from "./DonationModal";

export default function Footer() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsDonateOpen(true);
    window.addEventListener("open-donation-modal", handleOpenModal);

    const handleGlobalClick = (e) => {
      const trigger = e.target.closest('[data-open-donation-modal="true"], .trigger-donation-modal, [data-trigger-donation]');
      if (trigger) {
        e.preventDefault();
        setIsDonateOpen(true);
      }
    };
    document.addEventListener("click", handleGlobalClick);

    return () => {
      window.removeEventListener("open-donation-modal", handleOpenModal);
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  return (
    <>
      <footer className="iim-footer">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 iim-footer-col">
              <Link className="iim-footer-brand" href="/">
                <img
                  src={asset("/images/logo.png")}
                  alt="Initiative on Islam and Medicine"
                  className="site-logo site-logo--footer"
                />
              </Link>
              <p className="iim-footer-tagline">
                Knowledge that empowers care. For a more informed, equitable, and compassionate healthcare future.
              </p>
              <div className="iim-footer-social">
                <a href="https://www.facebook.com/IIandM/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
                <a href="https://x.com/initiative4im" target="_blank" rel="noopener noreferrer" aria-label="X"><i className="fa-brands fa-x-twitter" /></a>
                <a href="https://www.youtube.com/c/InitiativeonIslamMedicine" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fa-brands fa-youtube" /></a>
              </div>
            </div>
            <div className="col-6 col-lg-2 iim-footer-col">
              <h3 className="iim-footer-heading">Explore</h3>
              <ul className="iim-footer-links">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/mission">Mission &amp; Vision</Link></li>
                <li><Link href="/team">Our Team</Link></li>
                <li><Link href="/impact">Our Impact</Link></li>
                <li><Link href="/research">Research</Link></li>
                <li><Link href="/volunteer">Volunteer</Link></li>
                <li><Link href="/consultation">Consultation</Link></li>
                <li><Link href="/speaking">Speaking</Link></li>
                <li><Link href="/donate">Donate</Link></li>
              </ul>
            </div>
            <div className="col-6 col-lg-3 iim-footer-col">
              <h3 className="iim-footer-heading">Learn &amp; Engage</h3>
              <ul className="iim-footer-links">
                <li><Link href="/education">Education</Link></li>
                <li><Link href="/courses">Courses</Link></li>
                <li><Link href="/becoming-a-muslim-doctor">Becoming a Muslim Doctor</Link></li>
                <li><Link href="/medical-student-internship">Medical Student Internship</Link></li>
                <li><Link href="/workshops">Workshops &amp; Symposia</Link></li>
                <li><Link href="/podcast">Podcast</Link></li>
                <li><Link href="/books">Books</Link></li>
                <li><Link href="/resources">Resources</Link></li>
                <li><Link href="/research">Our Work</Link></li>
              </ul>
            </div>
            <div className="col-lg-3 iim-footer-col">
              <h3 className="iim-footer-heading">Get Involved</h3>
              <p className="iim-footer-tagline">Partner with II&amp;M to bring evidence-informed learning to your community.</p>
              <button
                type="button"
                onClick={() => setIsDonateOpen(true)}
                className="iim-footer-cta"
                style={{ cursor: "pointer", border: "1px solid #800000" }}
                aria-label="Make a donation to II&M"
              >
                SUPPORT OUR WORK <i className="fa-solid fa-arrow-right ms-2" />
              </button>
            </div>
          </div>
          <div className="iim-footer-bottom">
            <span>© 2026 Initiative on Islam &amp; Medicine. All rights reserved. | Powered by <a href="https://360growthlab.com" target="_blank" rel="noopener noreferrer" style={{color: "inherit"}}>360 Growth Lab</a></span>
            <div className="iim-footer-legal">
              <Link href="/consultation">Privacy Policy</Link>
              <Link href="/consultation">Terms</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Global Donation Modal Popup */}
      <DonationModal
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
      />
    </>
  );
}
