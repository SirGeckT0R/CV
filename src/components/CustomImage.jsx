export default function CustomImage({ img, alter, children }) {
  return (
    <img alt={alter} src={img} width='300px' height='200px' className='w-11/12'>
      {children}
    </img>
  );
}
