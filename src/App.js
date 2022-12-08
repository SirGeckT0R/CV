import BorderedFlexElement from './components/BorderedFlexElement';
import Card from './components/Card';
import TextWithColor from './components/TextWithColor';
import { FaTelegram, FaGithub } from 'react-icons/fa';
import CustomImage from './components/CustomImage';
import ProjectName from './components/ProjectName';
import TextBlock from './components/TextBlock';
import GitHub from './components/GitHub';

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
          <div className='flex md:flex-row flex-col justify-center gap-8'>
            <div className='flex md:flex-col flex-row justify-center items-center mx-auto gap-8 '>
              <a href='https://telegram.me/flying_rastaman'>
                <FaTelegram className='fill-blue-400' size='4rem' />
              </a>
              <a href='https://github.com/SirGeckT0R'>
                <FaGithub className='fill-blue-400' size='4rem' />
              </a>
            </div>
            <img
              src='./img/me.jpg'
              width='250px'
              height='128px'
              alt='Anton Logvinenko'
              title='Anton Logvinenko'
              className='rounded-lg shadow-blue-400 shadow-md md:w-2/4 w-10/12 mx-auto ml-auto mr-10'
            />
          </div>
        </BorderedFlexElement>
        <TextBlock className='md:w-3/6 w-full mt-4'>
          I am a 2nd course student of Belarusian State University of Faculty of
          Mechanics and Mathematics for web-developer and mathematician. I have
          khowledge of such programming languages as{' '}
          <TextWithColor>C++, C, Bash, Transact SQL, JavaScript</TextWithColor>{' '}
          and its library <TextWithColor>React</TextWithColor>. Worked in
          applications like Figma, Adobe Illustrator. Studied Web Design,
          Operational Systems and Networks. My English level is B2.
        </TextBlock>
      </Card>

      <Card>
        <BorderedFlexElement>
          <CustomImage alter='Todo' img='./img/todo.png' />
        </BorderedFlexElement>
        <div className='flex flex-col  md:w-3/6 w-full'>
          <TextWithColor>
            <ProjectName>TODO</ProjectName>
          </TextWithColor>
          <TextBlock className='border-b-2 border-zinc-600 pb-3 '>
            Technology: <TextWithColor>React</TextWithColor>
          </TextBlock>
          <TextBlock className='pt-2'>
            Web-Application for creating ToDo lists. Has options of checking,
            deleting and adding new todos.
          </TextBlock>
          <TextBlock className='underline decoration-blue-400  '>
            <TextWithColor>
              <a href='https://github.com/SirGeckT0R/Todo'>
                <GitHub />
              </a>
            </TextWithColor>
          </TextBlock>
        </div>
      </Card>

      <Card>
        <BorderedFlexElement>
          <CustomImage alter='Expanded ToDo list' img='./img/users.gif' />
        </BorderedFlexElement>
        <div className='flex flex-col md:w-3/6 w-full'>
          <TextWithColor>
            <ProjectName> TODO WITH AUTHENTICATION</ProjectName>
          </TextWithColor>
          <TextBlock className='border-b-2 border-zinc-600 pb-3'>
            Technology:{' '}
            <TextWithColor>
              React, React JSON-server, React Router
            </TextWithColor>
          </TextBlock>

          <TextBlock className='pt-2'>
            Multiple users Web-Application for ToDo lists. Provides
            registration, loging in, management of todos, provides privacy.
          </TextBlock>
          <TextBlock className='underline decoration-blue-400  '>
            <TextWithColor>
              <a href='https://github.com/SirGeckT0R/WebAuthentication'>
                <GitHub />
              </a>
            </TextWithColor>
          </TextBlock>
        </div>
      </Card>
      <Card>
        <BorderedFlexElement>
          <CustomImage alter='API & SPA' img='./img/redux.gif' />
        </BorderedFlexElement>
        <div className='flex flex-col md:w-3/6 w-full'>
          <TextWithColor>
            <ProjectName>API & SPA</ProjectName>
          </TextWithColor>
          <TextBlock className='border-b-2 border-zinc-600 pb-3 '>
            Technology:{' '}
            <TextWithColor>React, React Redux, React Router</TextWithColor>
          </TextBlock>
          <TextBlock className='pt-2'>
            Web-Application for data vizualization from{' '}
            <a
              href='https://jsonplaceholder.typicode.com/.'
              className='underline decoration-blue-400  '>
              <TextWithColor>API</TextWithColor>
            </a>
          </TextBlock>
          <TextBlock className='underline decoration-blue-400  '>
            <TextWithColor>
              <a href='https://github.com/SirGeckT0R/WebRouterRedux'>
                <GitHub />
              </a>
            </TextWithColor>
          </TextBlock>
        </div>
      </Card>
    </div>
  );
}

export default App;
