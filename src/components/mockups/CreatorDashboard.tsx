export function CreatorDashboard() {
  return (
    <div className="flex min-h-[360px] text-xs">
      <aside className="hidden w-40 shrink-0 border-r border-midnight-blue/5 bg-arctic-white p-4 lg:block">
        <div className="mb-6 font-display text-sm font-bold text-midnight-blue">Dashboard</div>
        {['Overview', 'Communities', 'Members', 'Revenue', 'Settings'].map((item, i) => (
          <div
            key={item}
            className={`mb-1 rounded-lg px-3 py-2 font-medium ${
              i === 0 ? 'bg-electric-teal text-white' : 'text-medium-gray'
            }`}
          >
            {item}
          </div>
        ))}
      </aside>

      <main className="flex-1 bg-white p-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h4 className="font-display text-base font-bold text-midnight-blue">Creator Overview</h4>
            <p className="text-medium-gray">Your communities at a glance</p>
          </div>
          <div className="rounded-lg bg-electric-teal px-3 py-1.5 text-[10px] font-semibold text-white">
            + New Community
          </div>
        </div>

        <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            { value: '2,847', label: 'Total Members', accent: 'border-l-electric-teal' },
            { value: '$12.4k', label: 'Monthly Revenue', accent: 'border-l-soft-lilac' },
            { value: '94%', label: 'Retention', accent: 'border-l-coral-bliss' },
            { value: '18', label: 'Live Sessions', accent: 'border-l-electric-teal' },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`rounded-xl border border-midnight-blue/5 border-l-4 ${stat.accent} p-3`}
            >
              <div className="font-display text-lg font-bold text-midnight-blue">{stat.value}</div>
              <div className="text-[10px] text-medium-gray">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-midnight-blue/5 p-4">
            <div className="mb-3 font-medium text-midnight-blue">Revenue Trend</div>
            <div className="flex h-24 items-end gap-1.5">
              {[40, 55, 45, 70, 60, 85, 75, 90, 80, 95, 88, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-linear-to-t from-electric-teal/30 to-electric-teal"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-midnight-blue/5 p-4">
            <div className="mb-3 font-medium text-midnight-blue">Your Communities</div>
            {['Wellness Collective', 'Design Academy', 'Founders Circle'].map((name, i) => (
              <div key={name} className="mb-2 flex items-center justify-between rounded-lg bg-arctic-white p-2.5">
                <div className="flex items-center gap-2">
                  <div
                    className={`h-6 w-6 rounded-lg ${
                      i === 0 ? 'bg-electric-teal/30' : i === 1 ? 'bg-soft-lilac/30' : 'bg-coral-bliss/30'
                    }`}
                  />
                  <span className="font-medium text-midnight-blue">{name}</span>
                </div>
                <span className="text-[10px] text-medium-gray">{[842, 1204, 801][i]} members</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
