"use client";
export default function DonateBtn({ className, children, style }) {
  function open(e) {
    e.preventDefault();
    window.dispatchEvent(new Event("open-donate-modal"));
  }
  return (
    <button type="button" className={className} style={style} onClick={open}>
      {children}
    </button>
  );
}
