import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { easeOut } from '../lib/motion';

const faqs = [
  {
    q: 'How does pricing work?',
    a: 'Atzora is a platform for creators to run their own paid communities. Creators set their own membership prices and offerings. Contact us to book a demo and learn about platform access.',
  },
  {
    q: 'What is the difference between Creators and Members?',
    a: 'Creators build and manage online communities, memberships, courses, live sessions, and digital experiences. Members join those communities and access the content and experiences Creators offer. Atzora provides the platform infrastructure.',
  },
  {
    q: 'How are payments handled?',
    a: 'Payments are processed through third-party payment processors such as Stripe. This includes membership subscriptions, one-time purchases, event access fees, and digital product purchases. Subscriptions may automatically renew unless canceled.',
  },
  {
    q: 'How does SMS opt-in work?',
    a: 'SMS consent is community-specific. Individual creator communities may collect phone numbers and request consent through join pages, forms, or account settings. Opting in for one community does not opt you in to others. You can opt out by replying STOP or using preference tools.',
  },
  {
    q: 'Who owns the content?',
    a: 'Users retain ownership of their User Content. By posting on Atzora, you grant us a license to host and distribute that content within the Service. Creators are responsible for the content they publish and the programs they offer.',
  },
  {
    q: 'How do I get started?',
    a: 'Book a demo with our team at support@atzora.app or log in at app.atzora.app if you already have access. We will help you set up your community, memberships, and member portal.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-electric-teal">FAQ</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-midnight-blue sm:text-4xl">
            Frequently asked questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="overflow-hidden rounded-2xl border border-midnight-blue/5 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="font-display font-semibold text-midnight-blue">{faq.q}</span>
                <span
                  className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-arctic-white text-electric-teal transition-transform ${
                    open === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: easeOut }}
                  >
                    <p className="px-6 pb-5 leading-relaxed text-medium-gray">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
