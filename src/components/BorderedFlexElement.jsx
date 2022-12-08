export default function BorderedFlexElement({ children }) {
  return (
    <div className='md:w-3/6 mx-0 w-full md:border-r-2 border-zinc-600'>
      {children}
    </div>
  );
}
