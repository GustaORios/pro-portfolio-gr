export const Section = ({ id, title, children, className = "", dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-16 px-4 ${dark ? 'bg-slate-100' : 'bg-white'} ${className}`}
    >
      {title && <h2 className="text-3xl font-bold mb-8">{title}</h2>}
      {children}
    </section>
  );
};