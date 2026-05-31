export function MemberPortal() {
  return (
    <div className="min-h-[360px] bg-white p-5 text-xs">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-linear-to-br from-electric-teal to-soft-lilac" />
          <div>
            <div className="font-display text-sm font-bold text-midnight-blue">Wellness Collective</div>
            <span className="rounded-full bg-electric-teal/10 px-2 py-0.5 text-[10px] font-semibold text-electric-teal">
              Premium Member
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="h-7 w-7 rounded-lg bg-arctic-white" />
          <div className="h-7 w-7 rounded-lg bg-arctic-white" />
        </div>
      </div>

      <div className="mb-4 rounded-xl border border-coral-bliss/20 bg-linear-to-r from-coral-bliss/5 to-soft-lilac/5 p-4">
        <div className="mb-1 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral-bliss opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-coral-bliss" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wide text-coral-bliss">Live Now</span>
        </div>
        <div className="font-display text-sm font-bold text-midnight-blue">Morning Mindfulness Session</div>
        <div className="mt-1 text-medium-gray">Starts in 12 min · 847 watching</div>
        <div className="mt-3 inline-block rounded-lg bg-coral-bliss px-3 py-1.5 text-[10px] font-semibold text-white">
          Join Live Session
        </div>
      </div>

      <div className="mb-4">
        <div className="mb-2 font-medium text-midnight-blue">Community Feed</div>
        <div className="space-y-2">
          {[1, 2].map((n) => (
            <div key={n} className="flex gap-3 rounded-xl border border-midnight-blue/5 p-3">
              <div className="h-8 w-8 shrink-0 rounded-full bg-soft-lilac/30" />
              <div className="flex-1">
                <div className="mb-1 h-2 w-24 rounded bg-midnight-blue/10" />
                <div className="h-2 w-full rounded bg-midnight-blue/5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-2 font-medium text-midnight-blue">Content Library</div>
        <div className="grid grid-cols-3 gap-2">
          {['Course', 'Workshop', 'Guide'].map((label, i) => (
            <div key={label} className="overflow-hidden rounded-lg border border-midnight-blue/5">
              <div
                className={`h-12 ${
                  i === 0 ? 'bg-electric-teal/20' : i === 1 ? 'bg-soft-lilac/20' : 'bg-coral-bliss/20'
                }`}
              />
              <div className="p-2 text-[10px] font-medium text-midnight-blue">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MemberPortalMobile() {
  return (
    <div className="bg-white p-3 text-[10px]">
      <div className="mb-3 flex items-center gap-2">
        <div className="h-6 w-6 rounded-lg bg-electric-teal/30" />
        <div className="font-display font-bold text-midnight-blue">Wellness</div>
      </div>
      <div className="mb-3 rounded-lg bg-coral-bliss/10 p-2">
        <div className="font-semibold text-coral-bliss">Live Session</div>
        <div className="text-medium-gray">Join now →</div>
      </div>
      <div className="space-y-2">
        <div className="h-8 rounded-lg bg-arctic-white" />
        <div className="h-8 rounded-lg bg-arctic-white" />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-1.5">
        <div className="h-10 rounded bg-electric-teal/15" />
        <div className="h-10 rounded bg-soft-lilac/15" />
      </div>
    </div>
  );
}
