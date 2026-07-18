'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const cardBoxStyle: React.CSSProperties = { borderRadius: '14px' };
const formCardInnerStyle: React.CSSProperties = { padding: '40px 36px' };
const infoBlockStyle: React.CSSProperties = { borderRadius: '12px', padding: '20px' };

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Ensure EmailJS is configured
    if (!serviceId || !templateId || !publicKey) {
      alert('Please configure your EmailJS keys in the .env.local file to send messages.');
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_name: personalInfo.name,
        },
        publicKey
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error: any) {
      console.error('Failed to send email:', error);
      // EmailJS errors usually have a 'text' property
      const errorMsg = error?.text || error?.message || 'Failed to send message. Please try again later.';
      alert(`EmailJS Error: ${errorMsg}`);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const mailtoHref = 'mailto:' + personalInfo.email;

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute top-1/4 left-[-10%] w-[30rem] h-[30rem] bg-[var(--color-accent)]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[30rem] h-[30rem] bg-[var(--color-glow)] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-8xl mx-auto px-6 md:px-10 lg:px-24 flex flex-col items-center justify-center">
        <div style={{ height: '80px' }} />
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-5xl sm:text-6xl md:text-7xl font-bold font-[family-name:var(--font-heading)] gradient-text tracking-wide leading-tight">
            Get In Touch
          </span>
        </motion.h2>

        <div style={{ height: '64px' }} />

        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-start" style={{ gap: '48px' }}>
          <div className="lg:col-span-5 flex flex-col w-full" style={{ gap: '32px' }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <h3 className="text-2xl lg:text-3xl font-medium font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] tracking-tight">
                  Contact Information
                </h3>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed font-light">
                  Feel free to reach out to me for any questions or opportunities! I&apos;m currently looking for internships and new projects.
                </p>
              </div>

              <div className="flex flex-col" style={{ gap: '18px', paddingTop: '8px' }}>
                <a
                  href={mailtoHref}
                  className="group flex items-center gap-4 bg-[var(--color-bg-primary)]/40 border border-[var(--color-border)] backdrop-blur-xl hover:border-[var(--color-border-light)] hover:bg-[var(--color-bg-primary)]/60 transition-all duration-300"
                  style={infoBlockStyle}
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-button-secondary)] border border-[var(--color-border)] flex items-center justify-center group-hover:bg-[var(--color-button-secondary-hover)] transition-colors duration-300 flex-shrink-0">
                    <Mail size={20} className="text-[var(--color-accent)]" />
                  </div>
                  <div className="flex flex-col" style={{ gap: '4px' }}>
                    <span className="text-xs text-[var(--color-text-secondary)] font-mono uppercase tracking-wider">Email</span>
                    <span className="text-[var(--color-text-primary)] text-base font-medium group-hover:text-[var(--color-accent)] transition-colors">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                <div
                  className="group flex items-center gap-4 bg-[var(--color-bg-primary)]/40 border border-[var(--color-border)] backdrop-blur-xl hover:border-[var(--color-border-light)] hover:bg-[var(--color-bg-primary)]/60 transition-all duration-300 cursor-default"
                  style={infoBlockStyle}
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-button-secondary)] border border-[var(--color-border)] flex items-center justify-center group-hover:bg-[var(--color-button-secondary-hover)] transition-colors duration-300 flex-shrink-0">
                    <Phone size={20} className="text-[var(--color-accent)]" />
                  </div>
                  <div className="flex flex-col" style={{ gap: '4px' }}>
                    <span className="text-xs text-[var(--color-text-secondary)] font-mono uppercase tracking-wider">Phone</span>
                    <span className="text-[var(--color-text-primary)] text-base font-medium group-hover:text-[var(--color-accent)] transition-colors">
                      {personalInfo.phone}
                    </span>
                  </div>
                </div>

                <div
                  className="group flex items-center gap-4 bg-[var(--color-bg-primary)]/40 border border-[var(--color-border)] backdrop-blur-xl hover:border-[var(--color-border-light)] hover:bg-[var(--color-bg-primary)]/60 transition-all duration-300 cursor-default"
                  style={infoBlockStyle}
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-button-secondary)] border border-[var(--color-border)] flex items-center justify-center group-hover:bg-[var(--color-button-secondary-hover)] transition-colors duration-300 flex-shrink-0">
                    <MapPin size={20} className="text-[var(--color-accent)]" />
                  </div>
                  <div className="flex flex-col" style={{ gap: '4px' }}>
                    <span className="text-xs text-[var(--color-text-secondary)] font-mono uppercase tracking-wider">Location</span>
                    <span className="text-[var(--color-text-primary)] text-base font-medium group-hover:text-[var(--color-accent)] transition-colors">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 w-full mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <div
                className="relative h-full bg-[var(--color-bg-primary)]/40 border border-[var(--color-border)] backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-[var(--color-border-light)] hover:shadow-[0_8px_30px_var(--color-glow)] overflow-hidden"
                style={cardBoxStyle}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-glass-border)] to-transparent pointer-events-none" />

                <form
                  onSubmit={handleSubmit}
                  className="relative z-10"
                  style={{ ...formCardInnerStyle, display: 'flex', flexDirection: 'column', gap: '24px' }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label htmlFor="name" className="text-sm font-mono text-[var(--color-text-secondary)] ml-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        className="w-full bg-[var(--color-button-secondary)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-accent)] focus:bg-[var(--color-button-secondary-hover)] focus:ring-1 focus:ring-[var(--color-accent)] focus:outline-none transition-all duration-300"
                        style={{ padding: '14px 16px' }}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label htmlFor="email" className="text-sm font-mono text-[var(--color-text-secondary)] ml-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                        className="w-full bg-[var(--color-button-secondary)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-accent)] focus:bg-[var(--color-button-secondary-hover)] focus:ring-1 focus:ring-[var(--color-accent)] focus:outline-none transition-all duration-300"
                        style={{ padding: '14px 16px' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="message" className="text-sm font-mono text-[var(--color-text-secondary)] ml-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Hello, I'd like to talk about..."
                      rows={4}
                      className="w-full bg-[var(--color-button-secondary)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-accent)] focus:bg-[var(--color-button-secondary-hover)] focus:ring-1 focus:ring-[var(--color-accent)] focus:outline-none transition-all duration-300 resize-none"
                      style={{ padding: '14px 16px' }}
                    />
                  </div>

                  <div style={{ paddingTop: '8px' }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[var(--color-accent)] text-[var(--color-bg-primary)] rounded-lg font-bold tracking-wide hover:brightness-110 shadow-[0_0_15px_var(--color-glow)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-[0_0_25px_var(--color-glow)]"
                      style={{ padding: '14px 0' }}
                    >
                      {isSubmitting ? (
                        <Loader2 className="animate-spin" size={20} />
                      ) : (
                        <>
                          <span className="text-base">Send Message</span>
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </div>

                  {status === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-emerald-400 text-sm text-center font-medium"
                      style={{ marginTop: '12px' }}
                    >
                      Message sent successfully! I&apos;ll get back to you soon.
                    </motion.p>
                  )}

                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm text-center font-medium"
                      style={{ marginTop: '12px' }}
                    >
                      Failed to send message. Please try again later.
                    </motion.p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}