'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2, AlertCircle, Loader2, MessageCircle, Wrench, ArrowRight } from 'lucide-react';
import { clientData } from '@/config/clientData';
import { createWhatsAppLink, generateEnquiryWhatsAppMessage } from '@/lib/whatsapp';

const enquirySchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(60, 'Name must be under 60 characters'),
  phone: z
    .string()
    .regex(/^[0-9+\-\s()]{10,15}$/, 'Please enter a valid 10-digit phone number'),
  applianceType: z
    .string()
    .min(1, 'Please select your appliance type'),
  locality: z.string().optional(),
  problemDescription: z
    .string()
    .min(5, 'Please briefly describe the problem (at least 5 characters)')
    .max(500, 'Description must be under 500 characters'),
  honeyPot: z.string().max(0, 'Spam detected').optional(),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [submissionData, setSubmissionData] = useState<any>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: '',
      phone: '',
      applianceType: clientData.enquiryForm.applianceOptions[0] || 'Single Door Refrigerator',
      locality: '',
      problemDescription: '',
      honeyPot: '',
    },
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          applianceType: data.applianceType,
          problemDescription: data.problemDescription,
          locality: data.locality || '',
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit enquiry');
      }

      setSubmissionSuccess(true);
      setSubmissionData(result.data);
      reset();
    } catch (err) {
      console.error('Enquiry submission error:', err);
      setServerError(
        err instanceof Error ? err.message : 'Something went wrong. Please call or WhatsApp us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submissionSuccess && submissionData) {
    const waLink = createWhatsAppLink(
      clientData.contact.whatsappNumber,
      generateEnquiryWhatsAppMessage({
        name: submissionData.name,
        phone: submissionData.phone,
        applianceType: submissionData.applianceType,
        problemDescription: submissionData.problemDescription,
        locality: submissionData.locality,
      })
    );

    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center animate-in fade-in duration-300">
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="text-xl font-extrabold text-slate-900 mb-2">
          Service Request Received!
        </h3>

        <p className="text-sm text-slate-600 max-w-md mx-auto mb-4">
          Thank you, <strong>{submissionData.name}</strong>. Your enquiry ID is{' '}
          <span className="font-mono font-bold text-emerald-800">{submissionData.id}</span>.
          Our technician will call you shortly to confirm your slot.
        </p>

        <div className="bg-white rounded-xl p-4 border border-emerald-200/80 max-w-sm mx-auto text-left text-xs space-y-1 mb-6">
          <p>
            <span className="font-semibold text-slate-500">Appliance:</span>{' '}
            <span className="text-slate-800">{submissionData.applianceType}</span>
          </p>
          <p>
            <span className="font-semibold text-slate-500">Contact:</span>{' '}
            <span className="text-slate-800">{submissionData.phone}</span>
          </p>
          {submissionData.locality && (
            <p>
              <span className="font-semibold text-slate-500">Locality:</span>{' '}
              <span className="text-slate-800">{submissionData.locality}</span>
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Notify Technician on WhatsApp</span>
          </a>

          <button
            onClick={() => setSubmissionSuccess(false)}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-lg">
      <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
          <Wrench className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900 leading-tight">
            {clientData.enquiryForm.title}
          </h3>
          <p className="text-xs text-slate-500">
            {clientData.enquiryForm.subtitle}
          </p>
        </div>
      </div>

      {serverError && (
        <div className="mb-5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Anti-spam honeypot (hidden) */}
        <input
          type="text"
          {...register('honeyPot')}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Name & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Your Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Suresh Kumar"
              {...register('name')}
              className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50 focus:bg-white text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                errors.name ? 'border-rose-300 bg-rose-50/50' : 'border-slate-300'
              }`}
            />
            {errors.name && (
              <p className="text-rose-600 text-[11px] font-medium mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="e.g. 98765 43210"
              {...register('phone')}
              className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50 focus:bg-white text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                errors.phone ? 'border-rose-300 bg-rose-50/50' : 'border-slate-300'
              }`}
            />
            {errors.phone && (
              <p className="text-rose-600 text-[11px] font-medium mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Appliance Type & Locality Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Appliance Type <span className="text-rose-500">*</span>
            </label>
            <select
              {...register('applianceType')}
              className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50 focus:bg-white text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                errors.applianceType ? 'border-rose-300' : 'border-slate-300'
              }`}
            >
              {clientData.enquiryForm.applianceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.applianceType && (
              <p className="text-rose-600 text-[11px] font-medium mt-1">
                {errors.applianceType.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Locality / City Area
            </label>
            <input
              type="text"
              placeholder="e.g. Lajpat Nagar / Dwarka"
              {...register('locality')}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-slate-50 focus:bg-white text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>

        {/* Problem Description */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Describe the Problem <span className="text-rose-500">*</span>
          </label>
          <textarea
            rows={3}
            placeholder="e.g. Fridge is not cooling, compressor making clicking noise, water leaking underneath..."
            {...register('problemDescription')}
            className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50 focus:bg-white text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
              errors.problemDescription ? 'border-rose-300 bg-rose-50/50' : 'border-slate-300'
            }`}
          />
          {errors.problemDescription && (
            <p className="text-rose-600 text-[11px] font-medium mt-1">
              {errors.problemDescription.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 text-white shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting Request...</span>
            </>
          ) : (
            <>
              <span>Request Doorstep Inspection</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-[11px] text-slate-400 text-center">
          🔒 Your details are safe with us. We only use them to confirm your repair visit.
        </p>
      </form>
    </div>
  );
}
