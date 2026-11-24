"use client";

export default function ConsultationBtn({ className = "", children, style }) {
  function open(e) {
    e.preventDefault();
    window.dispatchEvent(new Event("open-consultation-modal"));
  }
  return (
    <button type="button" className={className} style={style} onClick={open}>
      {children}
    </button>
  );
}
