import './pageInfo.css';


export default function pageInfo() {
  return (
    <div className='fullscreenBlockPage' id='page1'>
        <div className="page1">
            <div>
                <h1>Я – <span className='orangeText'>Frontend-разработчик</span> из Екатеринбурга</h1>
                <p>Меня зовут Константин, и мне 18 лет, на данный момент я обучаюсь в одном из Уральских колледжей, я специализируюсь на FrontEnd направлении,
                и отдаю свое предпочтение <span className='orangeText underlineText'>React</span> фреймворку.</p>
            </div>

            <div>
                <h1>Мои <span className='orangeText'>профессиональные</span> навыки</h1>
                <ul>
                    <li>HTML5, CSS3, JavaScript, TypeScript, React</li>
                    <li>Опыт вёрстки с дизайн-макетов</li>
                    <li>Хорошее владение Figma/Photoshop</li>
                    <li>Опыт работы с: MySQL, Bootstrap, ReactJS, NodeJS, Electron JS, ExpressJS</li>
                    <li>Умение работать с GIT</li>
                </ul>
            </div>

            <div>
                <h1>Мой опыт работы в <span className='orangeText'>IT</span></h1>
                <p>На данный момент у меня нет коммерческого опыта, но я всегда открыт новым <span className='orangeText underlineText'>предложениям</span>!</p>
            </div>
        </div>
    </div>
  );
}