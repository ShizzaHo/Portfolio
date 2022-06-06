import './pageContacts.css'; 

import tg from '../../images/icons/tg.png';
import vk from '../../images/icons/vk.png';
import hh from '../../images/icons/hh.png';
import gh from '../../images/icons/gh.png';
import email from '../../images/icons/email.png';

export default function pageContacts() {
  return (
    <div className='fullscreenBlockPage' id='page3'>
        <div className="page3">
            <div>
              <h1>Связаться со мной</h1>
              <div className='listContacts'>
                <div className='contactBlock' onClick={()=>{openUrl("https://t.me/Shizz0id")}}>
                  <img src={tg}/>
                  <span>Telegram</span>
                </div>
                <div className='contactBlock' onClick={()=>{openUrl("mailto:shizza.ho@yandex.ru")}}>
                  <img src={email}/>
                  <span>shizza.ho@yandex.ru</span>
                </div>
                <div className='contactBlock' onClick={()=>{openUrl("https://vk.com/shizz0id")}}>
                  <img src={vk}/>
                  <span>ВКонтакте</span>
                </div>
              </div>
            </div>

            <div>
              <h1>Дополнительно</h1>
              <div className='listContacts'>
                <div className='contactBlock' onClick={()=>{openUrl("https://github.com/ShizzaHo")}}>
                  <img src={gh}/>
                  <span>Мой github</span>
                </div>
                <div className='contactBlock' onClick={()=>{openUrl("https://ekaterinburg.hh.ru/resume/c81c34baff088192d70039ed1f4a3052513075")}}>
                  <img src={hh}/>
                  <span>Мой профиль на hh.ru</span>
                </div>
              </div>
            </div>
            
        </div>
    </div>
  );

  function openUrl(url){
    window.open(url,'_blank');
  }
}