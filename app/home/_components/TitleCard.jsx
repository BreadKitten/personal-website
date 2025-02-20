import LinkButtons from './LinkButtons';

function TitleCard() {
  return (
    <div>
      <p className='mt-[7vh] ml-[4vw] text-[60px] tracking-tight font-bold'>
        Zachary Bi
      </p>
      <p className='mt-[10px] ml-[4vw] text-[22.5px]'>
        Incoming TIP intern at Capital One, Lead Teaching Assistant
      </p>
      <p className='mt-[10px] ml-[4vw] text-[15px]'>
        Data Scientist, Full-stack engineer
      </p>
      <div className='mt-[20px] ml-[4vw] justify-start flex'>
        <LinkButtons
          names={['Resume', 'LinkedIn', 'Email']}
          links={[
            '',
            'https://www.linkedin.com/in/zachary-bi/',
            'mailto:bizac23@uw.edu',
          ]}
        />
      </div>
    </div>
  );
}

export default TitleCard;
