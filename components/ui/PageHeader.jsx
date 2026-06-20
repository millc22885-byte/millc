export default function PageHeader({ badge, title, description, centered = true }) {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-16 border-b border-blue-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={centered ? "text-center" : ""}>
          {badge && (
            <div className="inline-block px-4 py-2 bg-blue-600/20 rounded-full mb-4 border border-blue-600/30">
              <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase">
                {badge}
              </span>
            </div>
          )}
          <h1 className="font-display text-6xl md:text-7xl mb-4 tracking-wide">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
