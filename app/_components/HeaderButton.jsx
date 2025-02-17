function HeaderButton({ link, name }) {
  return (
    <p
      className='m-[25px] text-[20px] hover:text-blue-500 hover:font-semibold hover:scale-[1.02] cursor-pointer'
      href={link}
    >
      {name}
    </p>
  );
}

export default HeaderButton;
