export default function TabsBar() {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-gray-200 px-6 py-3.5">
      <div className="relative flex items-center gap-5">
        {/* Active tab */}
        <button className="group relative px-1 py-1 text-sm font-semibold text-gray-900">
          <span className="relative inline-block">
            All Content
            <span className="pointer-events-none absolute -bottom-2 left-0 block h-[2px] w-full rounded bg-blue-600" />
          </span>
        </button>
        {/* small settings icon */}
        <button aria-label="tab settings" className="inline-grid h-5 w-5 place-items-center rounded-full text-gray-400 transition-colors hover:text-gray-600">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 3.4 15a1.65 1.65 0 0 0-1.51-1H2a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 3.4 8a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 8 3.4a1.65 1.65 0 0 0 1-1.51V2a2 2 0 1 1 4 0v.09A1.65 1.65 0 0 0 15 3.4a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 20.6 8c.36.62.52 1.33.49 2.05.03.72-.13 1.43-.49 2.05Z"/></svg>
        </button>
        {/* Create collection */}
        <button className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50">
          <span className="inline-grid h-5 w-5 place-items-center rounded-full bg-blue-600 text-white">+</span>
          Create collection
        </button>
      </div>
      <div className="flex items-center gap-2">
        {/* Search pill */}
        <div className="hidden items-center gap-2 rounded-full bg-gray-100 px-3.5 py-2 text-sm text-gray-500 shadow-inner md:flex">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><circle cx="11" cy="11" r="8"/><path d="m21 21-3.6-3.6"/></svg>
          <span>Search…</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="ml-2 text-gray-400"><path d="M12 3v10.55a4 4 0 1 0 2-3.45"/></svg>
        </div>
      </div>
    </div>
  );
}
