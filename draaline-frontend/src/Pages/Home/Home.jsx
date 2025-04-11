import React from 'react';
import LayoutPage from '../../Layout/LayoutPage';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import img from "../../assets/foto.jpg"
import style from "./Home.module.css"
function Home() {
  return (
    <LayoutPage>
      <div className={` ${style.box} w-screen flex justify-evenly items-center`}>
        <div className='w-[550px]'>
          <h1 className='text-7xl'>
            Obcecada em te transformar na sua melhor versão
          </h1>
          <button className='bg-[#EACDC3] text-xl p-3 '>Veja mais</button>
        </div>  
        <div className='rounded-2xl h-[600px] overflow-hidden '> 
          <img className='h-[600px]' src={img} alt="foto biomedica" />
        </div>
      </div>

      <div className='w-screen'>
        <div>
          <h1>Sobre Mim</h1>
          <p></p>
        </div>
        <div></div>
        <div></div>
      </div>
    </LayoutPage>

  );
}

export default Home;
