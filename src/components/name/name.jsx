import avatar from '../../images/avatar.jpg';
import './name.css';

export default function name() {
  return (
    <>
        <div className='nameBlock'>
            <div>
                <img src={avatar} className='image' />
            </div>
            <div className='textBlock'>
                <span className='name'>Константин Чекан</span>
                <span className='post'>FrontEnd-Разработчик</span>
            </div>
        </div>
    </>
  );
}