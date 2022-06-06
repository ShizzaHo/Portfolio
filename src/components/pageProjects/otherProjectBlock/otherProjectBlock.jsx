import '../pageProjects.css';
import React, {useState} from "react";

export default function PageProjects(props) {
    return (
        <div className='projectBlockOther' style={{backgroundImage: "url("+props.image+")"}}>
            <div className='gradient'></div>
            <div className='shadow'></div>
            <div className='projectBlock_infoOther'>
                <div>
                    <h1>{props.title}</h1>
                    <h2>{props.desc}</h2>
                </div>
                <div className='projectBlock_buttonsOther'>
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