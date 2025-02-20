import Image from 'next/image';
import TitleCard from './TitleCard';

function ElementHolder() {
  return (
    <div className='items-center justify-center flex'>
      <div className='w-1/2 h-[40vh] outline-slate-300 outline-1 bg-[#F7F7F7] rounded-tl-xl rounded-bl-xl inset-shadow-slate-500 inset-shadow-sm'>
        <TitleCard />
      </div>
      <div className='w-[50vh] h-[50vh] rounded-xl outline-2 outline-black items-center justify-center flex'>
        <Image
          height='100'
          width='100'
          src='/zacharybi_logo.png'
          alt='placeholder logo'
        />
      </div>
    </div>
  );
}

export default ElementHolder;
