import Image from 'next/image';
import HeaderHolder from './_components_navbar/HeaderHolder';

function Navbar() {
  return (
    <>
      <nav className='bg-white h-[80px] w-full flex justify-between items-center shadow-slate-400 shadow-lg'>
        <Image
          width='80'
          height='80'
          src='/zacharybi_logo.png'
          className='ml-[10px]'
          alt="Zachary Bi's Logo"
        />
        <HeaderHolder
          className='flex-1'
          names={['About', 'Projects', 'Contact']}
          links={['/home', '/home', 'mailto:bizac23@uw.edu']}
        />
        <span className='mr-[90px]'></span>
      </nav>
    </>
  );
}

export default Navbar;
