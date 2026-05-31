export function HeroDashboardMockup() {
  return (
    <div className="flex min-h-[320px] text-xs sm:min-h-[380px]">
      <aside className="hidden w-36 shrink-0 border-r border-midnight-blue/5 bg-arctic-white p-3 sm:block">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-6 w-6 rounded-lg bg-electric-teal/20" />
          <div className="h-2 w-14 rounded bg-midnight-blue/10" />
        </div>
        {['Communities', 'Members', 'Live', 'Content'].map((item, i) => (
          <div
            key={item}
            className={`mb-1.5 flex items-center gap-2 rounded-lg px-2 py-2 ${
              i === 0 ? 'bg-electric-teal/10 text-electric-teal' : 'text-medium-gray'
            }`}
          >
            <div className={`h-3 w-3 rounded ${i === 0 ? 'bg-electric-teal/40' : 'bg-midnight-blue/10'}`} />
            <span className="font-medium">{item}</span>
          </div>
        ))}
      </aside>

      <main className="flex-1 p-4">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="mb-1 h-3 w-28 rounded bg-midnight-blue/15" />
            <div className="h-2 w-20 rounded bg-midnight-blue/5" />
          </div>
          <span className="rounded-full bg-soft-lilac/20 px-2.5 py-1 text-[10px] font-semibold text-soft-lilac">
            Pro Member
          </span>
        </div>

        <div className="mb-3 grid grid-cols-3 gap-2">
          {[
            { label: 'Members', color: 'bg-electric-teal/20' },
            { label: 'Revenue', color: 'bg-soft-lilac/20' },
            { label: 'Active', color: 'bg-coral-bliss/20' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-midnight-blue/5 p-2.5">
              <div className={`mb-2 h-4 w-8 rounded ${stat.color}`} />
              <div className="h-2 w-10 rounded bg-midnight-blue/10" />
            </div>
          ))}
        </div>

        <div className="space-y-2.5">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="flex gap-3 rounded-xl border border-midnight-blue/5 p-3"
            >
              <div className="h-8 w-8 shrink-0 rounded-full bg-linear-to-br from-electric-teal/30 to-soft-lilac/30 shimmer" />
              <div className="flex-1 space-y-1.5">
                <div className="h-2 w-3/4 rounded bg-midnight-blue/10" />
                <div className="h-2 w-full rounded bg-midnight-blue/5" />
                <div className="h-2 w-2/3 rounded bg-midnight-blue/5" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
