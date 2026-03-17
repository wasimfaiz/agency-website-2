"use client";

import { useEffect, useState } from "react";

type TocItem = {
  id: string;
  text: string;
  level: number;
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export default function BlogTableOfContents({
  contentSelector = "#blog-content",
}: {
  contentSelector?: string;
}) {
  const [items, setItems] = useState<TocItem[]>([]);

  useEffect(() => {
    const container = document.querySelector(contentSelector);
    if (!container) return;

    const headings = Array.from(
      container.querySelectorAll<HTMLHeadingElement>("h2, h3"),
    );
    if (!headings.length) return;

    const used = new Map<string, number>();
    const nextItems: TocItem[] = [];

    headings.forEach((heading) => {
      const text = heading.textContent?.trim();
      if (!text) return;

      let id = heading.id || slugify(text);
      const count = used.get(id) ?? 0;
      if (count > 0) {
        id = `${id}-${count + 1}`;
      }
      used.set(id, count + 1);
      heading.id = id;
      heading.classList.add("scroll-mt-28");

      nextItems.push({
        id,
        text,
        level: heading.tagName === "H3" ? 3 : 2,
      });
    });

    setItems(nextItems);
  }, [contentSelector]);

  if (!items.length) return null;

  return (
    <aside className="rounded-2xl border border-[#0A2540]/10 bg-white p-6 shadow-sm">
      <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#007BFF]">
        Table of Contents
      </p>
      <ul className="mt-5 space-y-2 text-sm font-medium text-[#0A2540]/70">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? "pl-4" : ""}>
            <a
              className="transition-colors hover:text-[#007BFF]"
              href={`#${item.id}`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
