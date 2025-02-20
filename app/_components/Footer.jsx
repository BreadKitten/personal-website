import Image from 'next/image';

function Footer() {
  return (
    <>
      <footer className='bg-white text-black h-full w-full justify-start'>
        <div className='justify-center flex'>
          <hr className='w-4/5 mt-[10px]' />
        </div>
        <p className='text-[28px] mx-[10vw] mt-[24px] text-left'>
          zacharybi.com
        </p>
        <div className='flex items-center ml-[9.5vw]'>
          <a
            href='https://www.linkedin.com/in/zachary-bi/'
            target='_blank'
            rel='external'
          >
            <div className='w-[50px] h-[50px] justify-center items-center cursor-pointer'>
              <Image
                width='50'
                height='50'
                src='/linkedin.png'
                alt="image redirect to Zach's LinkedIn"
              />
            </div>
          </a>
          <a href='mailto:bizac23@uw.edu' target='_blank' rel='external'>
            <Image
              width='80'
              height='80'
              src='/mail.png'
              alt="image redirect to Zach's email"
            />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
