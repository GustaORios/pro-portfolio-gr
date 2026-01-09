export const Section = ({ id, title, subtitle, children, className = "", dark = false }) => {
  return (
    <section id={id} className={`py-20 px-4 ${dark ? 'bg-slate-50' : 'bg-white'} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-12">
            {title && <h2 className="text-3xl font-bold text-slate-900 mb-2">{title}</h2>}
            {subtitle && <p className="text-slate-600">{subtitle}</p>}
            <div className="w-20 h-1 bg-blue-600 rounded-full mt-4"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};