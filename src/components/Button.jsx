export const Button = ({ children, href, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-blue-700 text-white hover:bg-blue-800 shadow-lg shadow-blue-700/20",
    secondary: "bg-white border-2 border-slate-200 text-slate-700 hover:border-blue-700 hover:text-blue-700",
    outline: "border border-slate-300 text-slate-600 hover:bg-slate-50"
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component href={href} className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
};