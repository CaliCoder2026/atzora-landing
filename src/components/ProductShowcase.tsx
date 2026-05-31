import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CreatorDashboard } from './mockups/CreatorDashboard';
import { MemberPortal, MemberPortalMobile } from './mockups/MemberPortal';

const tabs = [
  { id: 'creator', label: 'Creator Dashboard' },
  { id: 'member', label: 'Member Portal' },
] as const;

export default function ProductShowcase() {
  const [active, setActive] = useState<(typeof tabs)[number]['id']>('creator');

  return (
    <section id="product" className="relative overflow-hidden bg-midnight-blue py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-electric-teal/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-soft-lilac/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-electric-teal">Product</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Two experiences, one platform
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Creators manage communities and revenue. Members get a beautiful portal for content, live sessions, and
            community access.
          </p>
        </motion.div>

        <div className="mb-8 flex justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                active === tab.id
                  ? 'bg-electric-teal text-white shadow-lg shadow-electric-teal/30'
                  : 'bg-white/10 text-white/90 hover:bg-white/15 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_auto]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl"
            >
              <div className="flex items-center gap-2 border-b border-midnight-blue/5 bg-arctic-white px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-coral-bliss/80" />
                <span className="h-3 w-3 rounded-full bg-soft-lilac/80" />
                <span className="h-3 w-3 rounded-full bg-electric-teal/80" />
                <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1 text-xs text-medium-gray">
                  {active === 'creator' ? 'app.atzora.app/dashboard' : 'app.atzora.app/community/wellness'}
                </div>
              </div>
              {active === 'creator' ? <CreatorDashboard /> : <MemberPortal />}
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
            aria-hidden="true"
          >
            <div className="relative mx-auto w-[220px] overflow-hidden rounded-4xl border-4 border-white/10 bg-midnight-blue p-2 shadow-2xl">
              <div className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-white/10" />
              <div className="mt-6 overflow-hidden rounded-[1.25rem] bg-white">
                {active === 'creator' ? (
                  <div className="p-3 text-[10px]">
                    <div className="mb-2 font-bold text-midnight-blue">Quick Stats</div>
                    <div className="space-y-2">
                      <div className="rounded bg-electric-teal/10 p-2">+127 members</div>
                      <div className="rounded bg-soft-lilac/10 p-2">$3.2k today</div>
                    </div>
                  </div>
                ) : (
                  <MemberPortalMobile />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
