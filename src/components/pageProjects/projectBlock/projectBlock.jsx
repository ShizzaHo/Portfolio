import '../pageProjects.css';
import React, {useState} from "react";

export default function PageProjects(props) {
    return (
        <div className='projectBlock' style={{backgroundImage: "url("+props.image+")"}}>
            <div className='gradient'></div>
            <div className='shadow'></div>
            <div className='projectBlock_techno'>
                <span className='techText'>При разработке проекта использовались:</span><br></br>
                <span className='techList'>{props.tech}</span>
            </div>
            <div className='projectBlock_info'>
                <div>
                    <h1>{props.title}</h1>
                    <h2>{props.desc}</h2>
                </div>
                <div className='projectBlock_buttons'>
                    {props.visitVisible ? (<><button className='projectBlock_button' onClick={openSite}>Сайт проекта</button></>) : (<></>)}
                    {props.sourseVisible ? (<><button className='projectBlock_button' onClick={openSourse}>Исходный код</button></>) : (<></>)}
                </div>
            </div>
        </div>
    );

    function openSite(){
        window.open(props.visit,'_blank');
    }

    function openSourse(){
        window.open(props.sourse,'_blank');
    }
}