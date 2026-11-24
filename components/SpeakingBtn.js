"use client";

export default function SpeakingBtn({ className = "", children, style }) {
  function open(e) {
    e.preventDefault();
    window.dispatchEvent(new Event("open-speaking-modal"));
  }
  return (
    <button type="button" className={className} style={style} onClick={open}>
      {children}
    </button>
  );
}
