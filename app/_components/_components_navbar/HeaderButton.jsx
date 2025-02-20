function HeaderButton({ link, name }) {
  return (
    <a href={link}>
      <p className='m-[25px] text-[20px] hover:text-blue-500 cursor-pointer'>
        {name}
      </p>
    </a>
  );
}

export default HeaderButton;
