import './pageProjects.css';

import ProjectBlock from './projectBlock/projectBlock'
import OtherProjectBlock from './otherProjectBlock/otherProjectBlock'

import proj1 from '../../images/proj1.png';
import proj2 from '../../images/proj2.png';
import proj3 from '../../images/proj3.png';
import proj4 from '../../images/proj4.png';
import proj5 from '../../images/proj5.png';
import proj6 from '../../images/proj6.png';

import projOther1 from '../../images/projOther1.png';
import projOther2 from '../../images/projOther2.png';

import React, {useState} from "react";

export default function PageProjects() {

    const [state, setState] = useState({
        otherProjectsVisible: false
    });

    return (
        <div className='fullscreenBlockPageAuto' id='page2'>
            <div className='p-40'>
                <h1 className='pp__title'>Мои <span className='orangeText'>рабочие</span> проекты</h1>
                <div className='flex_projects'>
                    <ProjectBlock 
                        title="Poster" 
                        desc="Социальная сеть с широким функционалом"
                        image={projOther2}
                        tech="JavaScript, React, Redux, Sass, ExpressJS, MongoDB"
                        visitVisible={false}
                        sourseVisible={true}
                        sourse="https://github.com/ShizzaHo/Poster"
                    />
                    <ProjectBlock 
                        title="Создатель демотиваторов" 
                        desc="Простой создатель демотиваторов, с функцией ''тунельного'' демотиватора"
                        image={proj1}
                        tech="JavaScript"
                        visitVisible={true}
                        visit="https://demotivatormaker.github.io/"
                        sourseVisible={true}
                        sourse="https://github.com/ShizzaHo/DemotivatorMaker"
                    />
                    <ProjectBlock 
                        title="My List" 
                        desc="Создатель своих собственных списков с кастомизацией"
                        image={proj2}
                        tech="Java"
                        visitVisible={true}
                        visit="https://play.google.com/store/apps/details?id=com.afdark.mylist"
                        sourseVisible={false}
                    />
                    <ProjectBlock 
                        title="SZH NovelEngine" 
                        desc="OpenSourse движок для создания визуальных новелл на JavaScript"
                        image={proj3}
                        tech="JavaScript, NodeJS, ElectronJS"
                        visitVisible={false}
                        sourseVisible={true}
                        sourse="https://github.com/ShizzaHo/SZH-NovelEngine"
                    />
                    <ProjectBlock 
                        title="No Mobile Verison Plugin" 
                        desc="Модуль для сайта, который запретит просмотр с мобильных устройств"
                        image={proj4}
                        tech="JavaScript"
                        visitVisible={false}
                        sourseVisible="true"
                        sourse="https://github.com/ShizzaHo/No-Mobile-Verison-Plugin"
                    />
                    <ProjectBlock 
                        title="Telegram Web Enhancer" 
                        desc="Расширение для chromium браузеров которое переместит ваш чат влево"
                        image={proj5}
                        tech="JavaScript, Chromium extensions"
                        visitVisible={false}
                        sourseVisible="true"
                        sourse="https://github.com/ShizzaHo/Telegram-Web-Enhancer"
                    />
                    <ProjectBlock 
                        title="PIXELTEGY" 
                        desc="Эта игра позволит вам создать свою страну в случайно генерирующемся мире"
                        image={proj6}
                        tech="JavaScript, NodeJS, ElectronJS, ExpressJS"
                        visitVisible={false}
                        sourseVisible="true"
                        sourse="https://github.com/ShizzaHo/PIXELTEGY"
                    />
                </div>
                <h1 className='pp__title'>Мои <span className='orangeText'>другие</span> проекты</h1>
                {state.otherProjectsVisible ? (<></>) : (<p className='showOther' onClick={showOthers}>Показать остальные проекты</p>)}
                {state.otherProjectsVisible ? (<div className='flex_projects'>
                    <OtherProjectBlock 
                        title="SZH Remote" 
                        desc="Программа удаленного доступа для управления компьютером"
                        image={projOther1}
                        visitVisible={false}
                        sourseVisible={true}
                        sourse="https://github.com/ShizzaHo/SZH-Remote"
                    />
                </div>) : (<></>)}
            </div>
        </div>
    );

    function showOthers(){
        setState(
            { otherProjectsVisible: true },
        );
    }
}
