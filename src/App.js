import BorderedFlexElement from './components/BorderedFlexElement';
import Card from './components/Card';
import TextWithColor from './components/TextWithColor';
import { FaTelegram } from 'react-icons/fa';

function App() {
  return (
    <div className='w-full h-full bg-zinc-700 font-sans py-12'>
      <Card>
        <BorderedFlexElement>
          <h2 className='md:text-2xl text-sm'>Hello, my name is</h2>
          <h1 className='md:text-4xl text-blue-400 text-base'>
            LOGVINENKO ANTON
          </h1>
        </BorderedFlexElement>
        <div className='md:text-3xl self-center md:ml-10 ml-5 text-blue-400 text-base'>
          Web-developer
        </div>
      </Card>
      <Card>
        <BorderedFlexElement>
          <div className='flex flex-row'>
            <div className='flex flex-col'>
              <a href='https://telegram.me/flying_rastaman'>
                <FaTelegram className='fill-blue-400' size='5rem' />
              </a>
              <a href=''>
                <img
                  src='./img/GH_icon.png'
                  alt='GitHub'
                  width='46px'
                  height='50px'
                />
              </a>
              <a href=''>
                <img
                  src='./img/VK_icon.png'
                  alt='Vkontakte'
                  width='46px'
                  height='50px'
                />
              </a>
            </div>
            <img
              src='./img/me.jpg'
              width='250px'
              height='128px'
              alt='Anton Logvinenko'
              title='Anton Logvinenko'
              className='rounded-lg shadow-blue-400 shadow-md md:w-2/4 w-3/4 ml-auto mr-10 inline-block'
            />
          </div>
        </BorderedFlexElement>
        <p className='w-3/6 md:text-2xl text-sm md:px-10 px-5'>
          I am a 2nd course student of Belarusian State University of Faculty of
          Mechanics and Mathematics for web-developer/mathematician. I have
          khowledge of such programming languages as{' '}
          <TextWithColor>C++, C, Bash, Transact SQL, JavaScript</TextWithColor>{' '}
          and its library <TextWithColor>React</TextWithColor>. Worked in
          applications like Figma, Adobe Illustrator. Studied Web Design,
          Operational Systems and Networks. My English level is B2.
        </p>
      </Card>
      <Card></Card>
    </div>
  );
}

export default App;
