function Button({ link, name }) {
  return (
    <div className='text-center justify-center items-center flex hover:scale-[1.02]'>
      <a href={link}>
        <span className='bg-black mr-[20px] py-1 px-3 w-auto h-[30px] rounded-lg text-white text-[16px] cursor-pointer'>
          {name}
        </span>
      </a>
    </div>
  );
}

export default Button;
