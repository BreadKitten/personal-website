import Button from '../../_components/Button';

function LinkButtons({ names = [], links = [] }) {
  return (
    <div className='justify-center flex'>
      {names.map((name, index) => (
        <Button key={index} name={name} link={links[index]} />
      ))}
    </div>
  );
}

export default LinkButtons;
