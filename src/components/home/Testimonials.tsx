'use client';

import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { clientData } from '@/config/clientData';

export default function Testimonials() {
  const { testimonials, business } = clientData;

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>4.9 / 5.0 Rated Across 320+ Doorstep Visits</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Customer Reviews & Experiences
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Read real feedback from homeowners whose refrigerators and appliances we repaired right at their doorstep.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-slate-50 hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Appliance Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-100">
                    {review.appliance}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                  &ldquo;{review.review}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{review.name}</span>
                    <span title="Verified Customer">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                    </span>
                  </h4>
                  <p className="text-xs text-slate-500">
                    {review.locality}
                  </p>
                </div>

                <span className="text-xs text-slate-400">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}