"use client";
import React, { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Is there a free trial available?",
    ans: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    ans: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "What is your cancellation policy?",
    ans: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can other info be added to an invoice?",
    ans: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "How does billing work?",
    ans: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "How do I change my account email?",
    ans: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
];

export default function FAQ() {
  return (
    <section className="px-8 py-20">
      <div className="container mx-auto">
        <div className="mb-14 text-center ">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything you need to know about the product and billing.
          </p>
        </div>
        <div className="max-w-3xl mx-auto grid gap-10">
          {faqs.map((q, i) => (
            <div key={i}>
              <Question question={q.question} answer={q.ans} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface questionProps {
  question: string;
  answer: string;
}

function Question({ question, answer }: questionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className="border-b border-gray-200 pb-8"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <p color="blue-gray" className="text-lg font-medium">
          {question}
        </p>
        {isOpen ? (
          <MinusCircleIcon className="w-6" />
        ) : (
          <PlusCircleIcon className="w-6" />
        )}
      </div>
      {isOpen && <p className="pt-4 font-normal !text-gray-500">{answer}</p>}
    </div>
  );
}
