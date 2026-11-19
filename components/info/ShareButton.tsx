"use client";

import { useEffect, useState } from "react";
import Check from "@mui/icons-material/Check";
import MoreHoriz from "@mui/icons-material/MoreHoriz";

type ShareButtonProps = {
  title: string;
  /** Plain text to share (e.g. a phone number or email). */
  text: string;
  /** Optional link to share; when omitted only the text is shared. */
  url?: string;
};

export default function ShareButton({ title, text, url }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function handleShare() {
    const payload = url ? { title, url } : { title, text };

    if (typeof navigator.share === "function") {
      try {
        await navigator.share(payload);
      } catch {
        // User dismissed the share sheet — nothing to do.
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(url ?? text);
      setCopied(true);
    } catch {
      window.prompt("انسخ من هنا:", url ?? text);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleShare}
        aria-label={`مشاركة: ${title}`}
        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md text-foreground/60 transition-colors hover:bg-foreground/10 hover:text-foreground"
      >
        {copied ? <Check sx={{ fontSize: 22 }} className="text-tertiary" /> : <MoreHoriz />}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? "تم النسخ" : ""}
      </span>
    </>
  );
}
