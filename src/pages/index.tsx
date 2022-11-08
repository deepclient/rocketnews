import { FormEvent } from 'react';
import Image from 'next/image';

import logoImg from '../assets/logo.svg';
import sendImg from '../assets/send.svg';
import arrowImg from '../assets/arrow-right.svg';


export default function Home() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <main className='bg-black-500 w-1/2 h-screen overflow-hidden flex flex-col'>
      <div className='w-80 h-24 mt-12 ml-7 mb-20'>
        <Image src={logoImg} alt="Logo rocket news" />
      </div>
      <div className='ml-8'>
        <h1 className='font-mono text-xl text-green-500'>ATUALIZE IDEIAS E INFORMAÇÕES EM 5 MINUTOS.</h1>
        <p className='font-sans font-bold text-white'>Tudo que você precisa saber para começar seu dia bem e informado.</p>
        <p className='font-sans font-normal text-white'>
          Noticias sobre o universo Rocketseat, e tudo o que precisa para começar o dia melhor. <br />
          Perfeito para se preparar para codar ☕
        </p>
      </div>
      <form className='ml-8 mt-12'>
        <p className='font-sans font-bold text-gray-500 mb-4'>Insira seu e-mail:</p>
        <div className='flex absolute'>
          <input className='text-gray-400 py-3 pl-3 w-200 border-solid border-l-3 border-l-green-500' type="email" placeholder='oi@rocketseat.com' />
          <button 
            className='px-3 py-3 bg-violet-500'
            onClick={handleSubmit}
            >
            <Image src={sendImg} alt="Enviar" />
          </button>
        </div>
      </form>
      <div className='flex mt-40 ml-8 align-center'>
        <a href="#" className='font-sans font-bold text-violet-500'>Deixe-me ler primeiro</a>
        <Image src={arrowImg} alt="Termos" />
      </div>
    </main>
  )
}
