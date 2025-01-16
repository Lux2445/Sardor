
import FirstSection from './section/firsSection'
import ThirdSection from './section/thirdSection';
import Header from '../../modules/header/header';
import Footer from '../../modules/footer/footer';
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
        <Footer/>
      </div>
    </>
  );
};

export default Main;
