import { motion, type Variants } from 'motion/react';
import { easeOut } from '../lib/motion';
import { HeroDashboardMockup } from './mockups/HeroDashboardMockup';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-blob absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-electric-teal/20 blur-3xl" />
        <div className="animate-blob-alt absolute -right-32 top-40 h-[450px] w-[450px] rounded-full bg-soft-lilac/25 blur-3xl" />
        <div className="animate-blob absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-coral-bliss/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric-teal/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-electric-teal backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-teal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-electric-teal" />
            </span>
            Creator-first community platform
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-midnight-blue sm:text-5xl lg:text-6xl"
          >
            Build communities that{' '}
            <span className="bg-linear-to-r from-electric-teal to-soft-lilac bg-clip-text text-transparent">
              pay you back.
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-lg text-lg leading-relaxed text-medium-gray">
            Tools for creators, coaches, and organizations to run paid memberships, subscriptions, and private
            communities — all in one place.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:support@atzora.app?subject=Book%20a%20Demo"
              className="inline-flex items-center rounded-full bg-electric-teal px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-electric-teal/30 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Book a Demo
            </a>
            <a
              href="https://app.atzora.app"
              className="inline-flex items-center rounded-full border border-midnight-blue/10 bg-white/80 px-6 py-3 text-sm font-semibold text-midnight-blue backdrop-blur-sm transition hover:border-electric-teal/30 hover:text-electric-teal"
            >
              Login to App
            </a>
          </motion.div>

          <motion.p variants={item} className="mt-6 text-sm text-medium-gray">
            Stripe-powered payments · Creator-owned communities · Member portal included
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
          className="animate-float relative"
        >
          <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-electric-teal/20 via-transparent to-soft-lilac/20 blur-2xl" />
          <div className="gradient-border relative overflow-hidden rounded-2xl shadow-2xl shadow-midnight-blue/15">
            <div className="flex items-center gap-2 border-b border-midnight-blue/5 bg-arctic-white px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-coral-bliss/80" />
              <span className="h-3 w-3 rounded-full bg-soft-lilac/80" />
              <span className="h-3 w-3 rounded-full bg-electric-teal/80" />
              <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1 text-xs text-medium-gray">
                app.atzora.app/dashboard
              </div>
            </div>
            <HeroDashboardMockup />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
