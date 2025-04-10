import React from 'react';
import LayoutPage from '../../Layout/LayoutPage';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import img from "../../assets/foto.jpg"
import style from "./Home.module.css"
function Home() {
  return (
    <div className="w-screen min-h-screen overflow-y-auto overflow-x-hidden">
      <Header />
      <div className={` ${style.box} w-screen flex justify-around items-center`}>
        <div>
          <h1 className='text-7xl'>
            Frase de Efeito
          </h1>
          <button className='bg-[#EACDC3] text-xl p-3 '>Veja mais</button>
        </div>  
        <div className='rounded-2xl h-[600px] overflow-hidden '> 
          <img className='h-[600px]' src={img} alt="foto biomedica" />
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default Home;
