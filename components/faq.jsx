"use client";
import { useState } from "react";
import { Plus, X } from "lucide-react"; // for icons (install: npm i lucide-react)

const faqs = [
  {
    id: "01",
    question: "What is Xelta?",
    answer:
      "Xelta is an all-in-one AI content creation platform that transforms your ideas into videos, comics, stories, scripts, visuals, and more ready to publish across platforms in minutes.",
  },
  {
    id: "02",
    question: "What types of content can I create with Xelta?",
    answer: "nskjnskjnksd",
  },
  {
    id: "03",
    question: "Do I need any design or editing experience?",
    answer: "sjkndsjknjksdnkjndsknscknksnskjlksdklsakn",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-[#0A0E0A] text-white py-16 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className="bg-[#121512] rounded-2xl p-6 flex flex-col gap-3 shadow-md"
          >
            {/* Top row with number and question */}
            <div className="flex items-center justify-between cursor-pointer" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#0E100E] shadow-inner text-lg font-bold text-gray-200">
                  {faq.id}
                </div>
                <h3 className="text-lg font-medium">{faq.question}</h3>
              </div>

              <div>
                {openIndex === index ? (
                  <X className="w-5 h-5 text-gray-300" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-300" />
                )}
              </div>
            </div>

            {/* Answer */}
            {openIndex === index && faq.answer && (
              <p className="text-gray-400 text-sm pl-12 md:pl-16 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
