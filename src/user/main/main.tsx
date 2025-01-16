
import FirstSection from './section/firsSection'
import ThirdSection from './section/thirdSection';
import Header from '../../modules/header/header';
const Main = () => {

  return (
    <>
      <div className="">
        <div className=''>
          <div className=''>
            <Header/>
          </div>
          <FirstSection/>
          <ThirdSection/>
        </div>
      </div>
    </>
  );
};

export default Main;
