import HeaderButton from './HeaderButton';

function HeaderHolder({ names = [], links = [] }) {
  return (
    <div className='justify-center flex'>
      {names.map((name, index) => (
        <HeaderButton key={index} name={name} link={links[index]} />
      ))}
    </div>
  );
}

export default HeaderHolder;
