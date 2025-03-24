export function GradientButton({ type, children, onClick, className = "" }) {
  return (
    <button
      type={type}
      onClick={onclick}
      className={` ${className} tw:rounded-full tw:font-medium tw:bg-gradient-to-r tw:from-darkGradient tw:to-lightGradient tw:text-darkest-blue`}
    >
      {children}
    </button>
  );
}

export function LinkButton({ children, href, className = "" }) {
  return (
    <a
      href={href}
      className={` ${className} tw:m-8 tw:p-2 tw:underline underline-offset-8 tw:text-darkest-blue`}
    >
      {children}
    </a>
  );
}
