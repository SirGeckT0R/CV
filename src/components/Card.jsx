export default function Card({ children }) {
  return (
    <div className='text-xl w-10/12 mx-auto my-3 py-6 bg-zinc-800 text-white rounded-lg drop-shadow-md sm:text-lg'>
      <div className='flex flex-row ml-5'>{children}</div>
    </div>
  );
}
