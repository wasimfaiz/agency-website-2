"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Setzet completely transformed our online presence. Our conversion rate increased by 40% in the first month. The best agency we've worked with.",
    author: "Nikita Singh",
    role: "Brand Manager, Yastudy",
    image: "/images/nikita-singh.jpg",
  },
  {
    quote:
      "The team at Setzet understood our complex SaaS product and distilled it into a beautiful, high-converting digital experience.",
    author: "Rajdeep Singh",
    role: "Founder, Zenfora Food",
    image: "/images/r.k-singh.jpeg",
  },
  {
    quote:
      "Fast, responsive, and incredibly talented. They delivered our web application ahead of schedule and the code quality is exceptional.",
    author: "Prem Raj",
    role: "Digital Marketing Head, Uncle Makhana",
    image: "/images/prem-imh.jpeg",
  },
];

export default function TestimonialSection() {
  return (
    <section className="w-full py-24 sm:py-32 px-6 sm:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.35em] text-[#007BFF]"
              data-animate="testimonial"
            >
              Testimonials
            </p>
            <h2
              className="mt-4 text-3xl font-extrabold leading-tight tracking-tight font-heading sm:text-4xl text-[#0A2540]"
              data-animate="testimonial"
            >
              What Our Clients
              <br />
              Say About Us
            </h2>
          </div>
          <p
            className="max-w-xl text-base leading-7 font-medium text-[#0A2540]/80 sm:text-lg"
            data-animate="testimonial"
          >
            We pride ourselves on delivering exceptional results. Don't just take
            our word for it—hear from the ambitious brands and teams we've
            partnered with.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-[#0A2540]/10 bg-white p-8 transition-all hover:border-[#0A2540]/20 hover:shadow-[0_8px_30px_rgba(10,37,64,0.08)]"
              data-animate="testimonial"
              data-animate-delay={index * 150}
            >
              <div className="mb-8">
                {/* Quote marks */}
                <svg
                  className="mb-6 h-8 w-8 text-[#007BFF]/20 transition-colors group-hover:text-[#007BFF]/40"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-lg leading-relaxed font-medium text-[#0A2540]">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#0A2540]/10 bg-[#F4F6F8]">
                  <Image
                    fill
                    src={testimonial.image}
                    alt={`${testimonial.author} portrait`}
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="font-bold text-[#0A2540]">{testimonial.author}</p>
                  <p className="mt-1 text-sm font-semibold text-[#007BFF]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
