export function BorderBasic({ children, className = "" }) {
  return (
    <div
      className={` ${className} tw:border-lightest-blue tw:border tw:rounded-lg`}
    >
      {children}
    </div>
  );
}
