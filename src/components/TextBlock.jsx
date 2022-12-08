export default function TextBlock({ children, className }) {
  return (
    <p className={'md:text-2xl text-sm md:px-10 px-5 ' + className}>
      {children}
    </p>
  );
}
