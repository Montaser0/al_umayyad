"use client";

import Add from "@mui/icons-material/Add";
import Close from "@mui/icons-material/Close";
import { useState } from "react";
import { faqs } from "./data";

export default function Questions() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" dir="rtl" className="w-full bg-background">
      <div className="mx-auto max-w-[860px] px-5 py-16 md:px-10 lg:py-24">
        <div className="mb-10 text-center">
          <span className="inline-block rounded-md bg-primary/15 px-3 py-1 text-sm font-semibold text-primary">
            الأسئلة الشائعة
          </span>
          <h2 className="mt-4 text-3xl font-medium text-foreground/80 md:text-[2.1rem]">
            إجابات على أكثر الأسئلة تكراراً
          </h2>
          <span className="mx-auto mt-4 block h-[4px] w-16 rounded-full bg-primary" />
          <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-foreground/55 md:text-base">
            نقدّم لكم معلومات مختصرة تساعدك على فهم خدمات المشفى ومواعيد الرعاية بسهولة.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className="rounded-xl border border-primary/10 border-b-4 border-b-primary bg-background px-5 py-4 shadow-[0_8px_24px_rgba(28,43,58,0.06)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 text-right"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-foreground/70">{item.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-background">
                    {isOpen ? <Close sx={{ fontSize: 18 }} /> : <Add sx={{ fontSize: 20 }} />}
                  </span>
                </button>

                {isOpen ? (
                  <p className="mt-3 max-w-[90%] pb-1 text-sm leading-8 text-foreground/45">
                    {item.answer}
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
