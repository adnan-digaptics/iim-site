"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SiteEffects() {
  const path = usePathname();

  useEffect(() => {
    const cleanups = [];

    const amounts = document.querySelectorAll(".amount-btn");
    const onAmount = (event) => {
      amounts.forEach((button) => button.classList.remove("selected"));
      event.currentTarget.classList.add("selected");
    };
    amounts.forEach((button) => button.addEventListener("click", onAmount));
    cleanups.push(() => amounts.forEach((button) => button.removeEventListener("click", onAmount)));

    const once = document.querySelector("#once");
    const monthly = document.querySelector("#monthly");
    if (once && monthly) {
      const onFreq = (event) => {
        const chosen = event.currentTarget;
        once.classList.toggle("btn-burgundy", chosen === once);
        once.classList.toggle("btn-outline-burgundy", chosen !== once);
        monthly.classList.toggle("btn-burgundy", chosen === monthly);
        monthly.classList.toggle("btn-outline-burgundy", chosen !== monthly);
      };
      [once, monthly].forEach((button) => button.addEventListener("click", onFreq));
      cleanups.push(() => [once, monthly].forEach((button) => button.removeEventListener("click", onFreq)));
    }

    const search = document.querySelector("#resourceSearch");
    const searchButton = document.querySelector("#searchButton");
    if (search) {
      const filter = () => {
        const term = search.value.trim().toLowerCase();
        document.querySelectorAll(".content-card").forEach((card) => {
          const column = card.closest("[class*=col-]");
          if (column) column.style.display = card.textContent.toLowerCase().includes(term) ? "" : "none";
        });
      };
      search.addEventListener("input", filter);
      searchButton?.addEventListener("click", filter);
      cleanups.push(() => {
        search.removeEventListener("input", filter);
        searchButton?.removeEventListener("click", filter);
      });
    }

    const forms = document.querySelectorAll("form");
    const onSubmit = (event) => event.preventDefault();
    forms.forEach((form) => form.addEventListener("submit", onSubmit));
    cleanups.push(() => forms.forEach((form) => form.removeEventListener("submit", onSubmit)));

    return () => cleanups.forEach((fn) => fn());
  }, [path]);

  return null;
}
