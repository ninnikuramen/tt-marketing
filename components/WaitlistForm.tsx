'use client';

import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function WaitlistForm({ darkMode = false }: { darkMode?: boolean }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  // Success state — styled for both light/dark backgrounds
  if (status === 'success') {
    return (
      <div
        className={`rounded-card p-6 max-w-md mx-auto ${
          darkMode
            ? 'bg-indigo-8/50 border border-logo-saffron/40 text-white'
            : 'bg-gold-1 border border-gold-4 text-indigo-9'
        }`}
      >
        <p className="font-display text-xl font-bold mb-2">You're on the list.</p>
        <p className={darkMode ? 'text-indigo-2' : 'text-surface-6'}>
          We'll be in touch when a spot opens up.
        </p>
      </div>
    );
  }

  // Input styles differ meaningfully between light and dark contexts
  const inputClass = darkMode
    ? 'flex-1 px-5 py-3.5 bg-indigo-8/50 border border-indigo-7 rounded-btn text-white placeholder:text-indigo-3 focus:outline-none focus:border-logo-saffron transition-colors disabled:opacity-50'
    : 'flex-1 px-5 py-3.5 bg-white border border-surface-2 rounded-btn text-indigo-9 placeholder:text-surface-6 focus:outline-none focus:border-logo-indigo transition-colors disabled:opacity-50';

  const buttonClass = darkMode
    ? 'px-6 py-3.5 bg-logo-coral text-white rounded-btn font-semibold text-sm tracking-wide transition-all hover:bg-coral-5 hover:shadow-glow-coral disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap'
    : 'px-6 py-3.5 bg-logo-indigo text-white rounded-btn font-semibold text-sm tracking-wide transition-all hover:bg-indigo-6 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap';

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          id="waitlist-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@wherever.com"
          required
          disabled={status === 'submitting'}
          autoComplete="email"
          className={inputClass}
        />
        <button type="submit" disabled={status === 'submitting'} className={buttonClass}>
          {status === 'submitting' ? 'Joining…' : 'Join the waitlist'}
        </button>
      </div>
      {status === 'error' && (
        <p
          className={`text-sm mt-3 ${
            darkMode ? 'text-coral-4' : 'text-coral-5'
          }`}
        >
          {errorMessage}
        </p>
      )}
    </form>
  );
}
