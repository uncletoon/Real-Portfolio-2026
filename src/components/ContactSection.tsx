import { FormEvent, useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone, Send } from 'lucide-react';
import { PERSONAL_INFO, SECTION_IMAGES } from '../data/resumeData';
import type { ContactFormData, FormErrors } from '../types';

const initialForm: ContactFormData = { name: '', email: '', subject: '', message: '', company: '' };

function validateContactForm(values: ContactFormData): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter a valid email address.';
  if (values.subject.trim().length < 3) errors.subject = 'Tell me what you would like to discuss.';
  if (values.message.trim().length < 20) errors.message = 'Please add at least 20 characters so I can understand your request.';
  return errors;
}

async function submitContactForm(data: ContactFormData): Promise<void> {
  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined;
  if (!endpoint) throw new Error('FORM_NOT_CONFIGURED');

  // Integration point for Formspree, Web3Forms, EmailJS via a server endpoint, or a custom API.
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('FORM_SUBMISSION_FAILED');
}

export function ContactSection() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const updateField = (field: keyof ContactFormData, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (field !== 'company') setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.company) return;

    const nextErrors = validateContactForm(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus('error');
      setStatusMessage('Please correct the highlighted fields.');
      return;
    }

    setStatus('loading');
    setStatusMessage('Sending your message…');
    try {
      await submitContactForm(form);
      setStatus('success');
      setStatusMessage('Your message was sent successfully. Thank you for getting in touch.');
      setForm(initialForm);
    } catch (error) {
      setStatus('error');
      setStatusMessage(error instanceof Error && error.message === 'FORM_NOT_CONFIGURED'
        ? 'Online form delivery is not configured yet. Please use the email link to send your message directly.'
        : 'The message could not be delivered. Please try again or contact me by email.');
    }
  };

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <img className="section-background" src={SECTION_IMAGES.contact} alt="Global digital network representing collaboration from Kigali" loading="lazy" decoding="async" />
      <div className="section-background-overlay" />
      <div className="shell contact-layout section-layer">
        <div className="contact-copy">
          <p className="eyebrow">Contact / Start a conversation</p>
          <h2 id="contact-title">Let's build something valuable.</h2>
          <p>Have a product to build, an API to strengthen, or a system that needs dependable support? Share the context and I’ll help shape the next step.</p>

          <address className="contact-details">
            <a href={`mailto:${PERSONAL_INFO.email}`}><Mail aria-hidden="true" /><span><small>Email</small>{PERSONAL_INFO.email}</span><ArrowUpRight aria-hidden="true" /></a>
            <a href={`tel:${PERSONAL_INFO.phone}`}><Phone aria-hidden="true" /><span><small>Phone</small>{PERSONAL_INFO.phone}</span><ArrowUpRight aria-hidden="true" /></a>
            <div><MapPin aria-hidden="true" /><span><small>Based in</small>{PERSONAL_INFO.location}</span></div>
          </address>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-heading"><span>Project inquiry</span><span>Usually responds by email</span></div>
          <div className="form-row">
            <label htmlFor="contact-name">Name<span aria-hidden="true"> *</span></label>
            <input id="contact-name" name="name" autoComplete="name" value={form.name} onChange={(event) => updateField('name', event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} />
            {errors.name && <small id="contact-name-error" className="field-error">{errors.name}</small>}
          </div>
          <div className="form-row">
            <label htmlFor="contact-email">Email<span aria-hidden="true"> *</span></label>
            <input id="contact-email" name="email" type="email" autoComplete="email" value={form.email} onChange={(event) => updateField('email', event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} />
            {errors.email && <small id="contact-email-error" className="field-error">{errors.email}</small>}
          </div>
          <div className="form-row">
            <label htmlFor="contact-subject">Subject<span aria-hidden="true"> *</span></label>
            <input id="contact-subject" name="subject" value={form.subject} onChange={(event) => updateField('subject', event.target.value)} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'contact-subject-error' : undefined} />
            {errors.subject && <small id="contact-subject-error" className="field-error">{errors.subject}</small>}
          </div>
          <div className="form-row">
            <label htmlFor="contact-message">Message<span aria-hidden="true"> *</span></label>
            <textarea id="contact-message" name="message" rows={5} value={form.message} onChange={(event) => updateField('message', event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} />
            {errors.message && <small id="contact-message-error" className="field-error">{errors.message}</small>}
          </div>
          <div className="honeypot" aria-hidden="true"><label htmlFor="company">Company website</label><input id="company" name="company" tabIndex={-1} autoComplete="off" value={form.company} onChange={(event) => updateField('company', event.target.value)} /></div>

          <button className="button form-submit" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : 'Send message'} <Send aria-hidden="true" /></button>
          <p className={`form-status form-status--${status}`} role="status" aria-live="polite">{statusMessage}</p>
        </form>
      </div>
    </section>
  );
}
