"use client";

import { useCallback, useEffect, useState, type ComponentType, type ReactNode } from "react";
import { createPortal } from "react-dom";
import Check from "@mui/icons-material/Check";
import Close from "@mui/icons-material/Close";
import ContentCopy from "@mui/icons-material/ContentCopy";
import Email from "@mui/icons-material/Email";
import IosShare from "@mui/icons-material/IosShare";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import Share from "@mui/icons-material/Share";
import {
  FacebookIcon,
  TelegramIcon,
  WhatsAppIcon,
  XIcon,
} from "../icons/social";

type ShareButtonProps = {
  title: string;
  /** Short description shown in the preview (e.g. the phone number). */
  subtitle: string;
  /** Plain text to share when there is no link (phone, email). */
  text: string;
  /** Optional link to share. */
  url?: string;
  icon: ReactNode;
};

type Option = {
  key: string;
  label: string;
  icon: ComponentType<{ sx?: object; className?: string }>;
  className: string;
  href?: string;
  onClick?: () => void;
};

export default function ShareButton({ title, subtitle, text, url, icon }: ShareButtonProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);

  const shareValue = url ?? text;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCanNativeShare(typeof navigator !== "undefined" && typeof navigator.share === "function");
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setCopied(false);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(shareValue);
      setCopied(true);
    } catch {
      window.prompt("انسخ من هنا:", shareValue);
    }
  }

  async function nativeShare() {
    try {
      await navigator.share(url ? { title, url } : { title, text });
    } catch {
      // User dismissed the native share sheet.
    }
  }

  const encodedText = encodeURIComponent(url ? `${title} ${url}` : text);
  const encodedUrl = url ? encodeURIComponent(url) : "";
  const encodedTitle = encodeURIComponent(title);

  const options: Option[] = [
    {
      key: "whatsapp",
      label: "واتساب",
      icon: WhatsAppIcon,
      className: "bg-tertiary text-background",
      href: `https://wa.me/?text=${encodedText}`,
    },
    {
      key: "telegram",
      label: "تيليجرام",
      icon: TelegramIcon,
      className: "bg-[#229ED9] text-background",
      href: url
        ? `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`
        : `https://t.me/share/url?url=%20&text=${encodeURIComponent(text)}`,
    },
    ...(url
      ? [
          {
            key: "facebook",
            label: "فيسبوك",
            icon: FacebookIcon,
            className: "bg-[#1877F2] text-background",
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
          } satisfies Option,
        ]
      : []),
    {
      key: "x",
      label: "إكس",
      icon: XIcon,
      className: "bg-foreground text-background",
      href: url
        ? `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
        : `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
    },
    {
      key: "email",
      label: "البريد",
      icon: Email,
      className: "bg-secondary text-background",
      href: `mailto:?subject=${encodedTitle}&body=${encodeURIComponent(shareValue)}`,
    },
    ...(canNativeShare
      ? [
          {
            key: "more",
            label: "المزيد",
            icon: MoreHoriz,
            className: "bg-foreground/10 text-foreground",
            onClick: nativeShare,
          } satisfies Option,
        ]
      : []),
  ];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`مشاركة: ${title}`}
        aria-haspopup="dialog"
        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md text-foreground/60 transition-colors hover:bg-foreground/10 hover:text-foreground"
      >
        <IosShare sx={{ fontSize: 22 }} />
      </button>

      {open &&
        createPortal(
          <div
            dir="rtl"
            className="fixed inset-0 z-[100] flex items-end justify-center bg-foreground/70 backdrop-blur-sm sm:items-center sm:p-5"
            onClick={close}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`مشاركة: ${title}`}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-[460px] rounded-t-3xl bg-neutral px-5 pb-8 pt-3 text-foreground shadow-2xl sm:rounded-3xl sm:pt-5"
            >
              <span className="mx-auto mb-3 block h-1.5 w-10 rounded-full bg-foreground/15 sm:hidden" />

              <div className="relative flex items-center justify-center py-2">
                <h2 className="flex items-center gap-2 text-base font-bold">
                  <Share sx={{ fontSize: 20 }} className="text-primary" />
                  مشاركة
                </h2>
                <button
                  type="button"
                  onClick={close}
                  aria-label="إغلاق"
                  className="absolute right-0 flex h-9 w-9 items-center justify-center rounded-full bg-foreground/10 text-foreground transition-colors hover:bg-foreground/20"
                >
                  <Close sx={{ fontSize: 20 }} />
                </button>
              </div>

              {/* Preview of what is being shared */}
              <div className="mt-4 flex items-center gap-4 rounded-md bg-background px-4 py-3 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center text-primary">
                  {icon}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[15px] font-bold leading-6">{title}</span>
                  <span className="block truncate text-xs leading-5 text-foreground/55">
                    {subtitle}
                  </span>
                </span>
              </div>

              {/* Share targets */}
              <ul className="mt-5 grid grid-cols-3 gap-3">
                {options.map((option) => {
                  const Icon = option.icon;
                  const content = (
                    <>
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-full ${option.className}`}
                      >
                        <Icon sx={{ fontSize: 24 }} />
                      </span>
                      <span className="text-xs font-medium">{option.label}</span>
                    </>
                  );
                  const itemClass =
                    "flex w-full flex-col items-center gap-2 rounded-md bg-background px-2 py-4 transition-transform hover:-translate-y-0.5";

                  return (
                    <li key={option.key}>
                      {option.href ? (
                        <a
                          href={option.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={close}
                          className={itemClass}
                        >
                          {content}
                        </a>
                      ) : (
                        <button type="button" onClick={option.onClick} className={itemClass}>
                          {content}
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Copy */}
              <button
                type="button"
                onClick={copy}
                className="mt-4 flex w-full items-center gap-3 rounded-md bg-background px-4 py-3.5 text-start transition-colors hover:bg-primary/5"
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center ${
                    copied ? "text-tertiary" : "text-primary"
                  }`}
                >
                  {copied ? <Check /> : <ContentCopy sx={{ fontSize: 22 }} />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[15px] font-bold leading-6">
                    {copied ? "تم النسخ" : url ? "نسخ الرابط" : "نسخ"}
                  </span>
                  <span dir="ltr" className="block truncate text-right text-xs leading-5 text-foreground/55">
                    {shareValue}
                  </span>
                </span>
              </button>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
