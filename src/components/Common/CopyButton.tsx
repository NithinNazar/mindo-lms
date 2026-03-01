"use client";

import { useState } from "react";

export default function CopyButton({ text, small = false }: { text: string; small?: boolean }) {
  const [copied, setCopied] = useState(false);
  const cls = small ? "btn btn-outline-secondary btn-sm" : "btn btn-outline-secondary";
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }
  return (
    <button type="button" className={cls} onClick={copy}>
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

