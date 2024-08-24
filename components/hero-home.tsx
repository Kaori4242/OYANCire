"use client"; 
import { data } from './mockData';

import Image from "next/image";
import React, { useEffect, useRef } from 'react';
import PageIllustration from "@/components/page-illustration";
import LogoOyan from "@/public/images/OyanLogo.png";
import herPortret from "@/public/images/herImage.png";
import circularElement from "@/public/images/circularElement.png";

import FirstDirection from "@/public/images/FirstDirection.png";
import SecondDirection from "@/public/images/SecondDirection.png";
import ThirdDirection from "@/public/images/ThirdDirection.png";
import FourthDirection from "@/public/images/FourthDirection.png";
import Kaspi from "@/public/images/kaspiIcon.png";

import FirstRate from "@/public/images/IMG_9250.png";
import SecondRate from "@/public/images/IMG_9252.png";
import ThirdRate from "@/public/images/IMG_9253.png";
import FourthRate from "@/public/images/IMG_9254.png";
import FifthRate from "@/public/images/IMG_9273.jpg";
import SixthRate from "@/public/images/IMG_9275.jpg";
import SeventhRate from "@/public/images/IMG_9276.jpg";
import EigthRate from "@/public/images/IMG_9278.jpg";
import NinthRate from "@/public/images/IMG_9279.jpg";
import TenthRate from "@/public/images/IMG_9282.jpg";

import Whatsapp from "@/public/images/logoWHat.png";

export default function HeroHome() {
  const handleClick = () => {
    window.location.href = 'http://wa.me/77759877065';
  };
  const slideLeft = () => {
    
    var slider = document.getElementById('slider');
    //slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
   // slider.scrollLeft = slider.scrollLeft + 500;
  };


  return (
    
    <section className="relative font-montserrat mb-80 "data-aos="zoom-y-out"
    data-aos-delay={300}>
      
      <div  className="mx-auto max-w-6xl px-2 sm:px-6"  >
        <div className="pb-14 pt-12 md:pb-20 md:pt-40">
          <div className="pb-0 text-center md:pb-20 ">
            
            <div data-aos="zoom-y-out"
                data-aos-delay={300}className="flex justify-center  mb-6 ">
                <Image
                  className=""
                  src={LogoOyan}
                  width={130}
                  height={130}
                  alt="Avatar 01"
                />
                
              
            </div>
            
            <div className="mx-5 max-w-3xl flex justify-center text-center">
              <p
                className="  mb-8 text-lg text-white font-montserrat  "
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Мы верим, что каждая женщина уникальна и обладает огромным потенциалом, который скрывается под страхами, обидами и переживаниями.

              </p>
          
              
            </div>
            
      <div 
         data-aos="zoom-y-out"
        data-aos-delay={300}
        className="mx-16 mb-0 bg-gradient-to-r from-[#B40E0F] to-[#4E0607] border-black border-2 font-montserrat border-dotted py-1 px-1 rounded-full text-white text-size-xs  ">
        Пробуди свою женскую силу
      </div>
    
    </div>
      </div>
     </div>
     
      
     <div className="relative w-full h-3/4">
     <div className="flex mx-5 ">
      <div className="bg-white bg-opacity-15 text-white text-xs rounded-3xl max-h-44 font-montserrat  pl-6 pt-4 pr-5  max-w-90  flex-shrink-0">
        <ul>
          <li className="flex items-center mb-3">
            <span className="h-1.5 w-1.5 bg-white rounded-full  mr-1"></span>
            Энергопрактик
          </li>
          <li className="flex items-center mb-3">
            <span className="h-1.5 w-1.5 bg-white rounded-full mr-1"></span>
            Телесный практик
          </li>
          <li className="flex items-center mb-3">
            <span className="h-1.5 w-1.5 bg-white rounded-full mr-1"></span>
            Квантовый психолог
          </li>
          <li className="flex items-center">
            <span className="h-1.5 w-1.5 bg-white rounded-full mr-1"></span>
            Целитель
          </li>
        </ul>
      </div>
      <Image src={herPortret} alt="Descriptive alt text" className=" relative bottom-5  w-full right-24 h-full max-h-80 max-w-80 object-cover" />
      </div>
      <div className="absolute bottom-5 inset-x-0 bg-gradient-to-t from-[#A41111FF] to-[#AD0D0E00] opacity-100 w-full h-44"></div>
      
    </div>
    
     <div className="ml-5 pr-32">
      <span className="bg-white text-[#9C0C0D] font-extrabold rounded-md px-2">OYAN</span>
      <span className="text-white mr-16"> — это женское сообщество, созданное с целью помочь женщинам пробудить свою женскую силу, раскрыть секреты в обрести внутреннюю гармонию.</span>
    </div>
    <div className="flex flex-col items-end space-y-4 mr-0 mb-20 p-4">
      <div className="relative">
        <div className="bg-black text-white py-2 px-4 rounded-full -rotate-6  border-2 border-[#6F0000] ">
          <div className="absolute inset-0  rounded-full p-1 -z-10"></div>
          {/* Replace 'Текст' with actual Russian text */}
          женское сообщество
        </div>
        <div className="absolute -bottom-10 rotate-6  right-32 bg-black text-white py-1 px-4 rounded-full border-2 border-[#6F0000]">
          <div className="absolute inset-0  rounded-full p-1 -z-10"></div>
          {/* Replace 'Тег' with actual Russian tag-like text */}
          развитие
        </div>
        <div className="absolute -bottom-20 right-7 bg-black text-white py-2 px-4 rounded-full border-2 border-[#6F0000]">
        <div className=""></div>
        уверенность
      </div>
      
    </div>
    
      </div>
      
      
      <div className='flex justify-center pt-10 '>
<button
      onClick={handleClick}
      className="bg-green-500 shadow-2xl  text-[22px] uppercase border border-white text-white font-sans font-extrabold py-3 px-14 rounded-[8px] hover:bg-green-600"
    >
      
      <p className='uppercase'>Оставить заявку</p>
      
    </button>
</div>
    <div className="bg-[#0E0E0E] mt-20 mx-5 border-2 border-[#FFFFFF] rounded-2xl mb-14 p-4 flex justify-center items-center">
      <p className=" text-2xl text-transparent text-size-full bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#E27C7C] text-center">
        НАШИ НАПРАВЛЕНИЯ
      </p>
    
    </div>
    
    <div className="relative pb-5">
      <div className="relative  bg-gradient-to-r from-[#9D0D0D] to-[#6B0606] bg-opacity-75 mx-12  h-24 w-auto  border-2 border-[#330909] rounded-tl-[42px] rounded-tr-[42px] rounded-bl-[26px] rounded-br-[26px] flex items-end justify-center  mb-10">
        <Image src={FourthDirection} alt=" Descriptive alt text" className="max-w-48 object-cover  absolute bottom-0  transform -translate-y-10" />
        <p className="text-[18px] text-transparent text-size-full bg-clip-text bg-white text-end">
        Телесная и энерготерапия
      </p>
      </div>
    </div>
    <div className="relative pb-5">
      <div className="relative  bg-gradient-to-r from-[#9D0D0D] to-[#6B0606] bg-opacity-75 mx-12  h-24 w-auto  border-2 border-[#330909] rounded-tl-[42px] rounded-tr-[42px] rounded-bl-[26px] rounded-br-[26px] flex items-end justify-center  mb-16">
        <Image src={SecondDirection} alt=" Descriptive alt text" className="max-w-48 object-cover  absolute bottom-0  transform -translate-y-10" />
        <p className="text-[18px] text-transparent text-size-[20px] bg-clip-text bg-white ">
        Сексологи и интим-тренеры
      </p>
      </div>
    </div>
    <div className="relative pb-5">
      <div className="relative  bg-gradient-to-r from-[#9D0D0D] to-[#6B0606] bg-opacity-75 mx-12 h-28 w-auto  border-2 border-[#330909] rounded-tl-[42px] rounded-tr-[42px] rounded-bl-[26px] rounded-br-[26px] flex items-end justify-center mb-10">
        <Image src={FirstDirection} alt=" Descriptive alt text" className="max-w-48 object-cover  absolute bottom-0  transform -translate-y-20" />
        <p className="text-[17px] text-transparent text-size-full bg-clip-text bg-white text-center">
        Коучинг по женственности(самоценность, флирт, соблазн, уверенность)
      </p>
      </div>
    </div>
    <div className="relative pb-5  h-64">
      <div className="relative bg-gradient-to-r from-[#9D0D0D] to-[#6B0606] bg-opacity-75 mx-12 h-24 w-auto  border-2 border-[#330909]  rounded-tl-[42px] rounded-tr-[42px] rounded-bl-[26px] rounded-br-[26px] flex items-end justify-center  mb-10">
        <Image src={ThirdDirection} alt=" Descriptive alt text" className="max-w-48 object-cover  absolute bottom-0  transform -translate-y-10" />
        
        <p className="text-[18px] text-transparent text-size-full bg-clip-text bg-white text-center">
        Психология и психотерапия
      </p>
      </div>
      <div className='flex justify-center pt-10 '>
<button
      onClick={handleClick}
      className="bg-green-500 shadow-2xl  text-[22px] uppercase border border-white text-white font-sans font-extrabold py-3 px-14 rounded-[8px] hover:bg-green-600"
    >
      
      <p className='uppercase'>НАПИСАТЬ НА WHATSAPP</p>
      
    </button>
</div>

    </div>
    
    <div className="text-white  rounded-lg ">
      <div className="flex items-center mb-0.5 justify-center">
        <span className="bg-white rounded-md text-[22px] text-black font-semibold px-2 py-0.5 mb-0 text-center " >СТАВ ЧАСТЬЮ НАШЕГО</span>
      </div>
      <div className="flex items-center mb-7 justify-center">
        <span className="bg-white rounded-md text-[22px] text-black font-semibold py-0.5 mb-4 px-2 text-center " >СООБЩЕСТВА, ВЫ ПОЛУЧИТЕ:</span>
      </div>

      <ul className="list-none space-y-7 mx-7">
        <li className="flex items-center">
          <span className="mr-3 text-[22px]">✅</span> Еженедельные групповые оффлайн или онлайн сессии с экспертами на ваш выбор (Алматы и Астана)
        </li>
        <li className="flex items-center">
          <span className="mr-3 text-[22px]">✅</span> Участие в тренингах и мастер-классах на тему: Отношений, Финансов, Предназначения, и Уверенности в себе
        </li>
        <li className="flex items-center">
          <span className="mr-3 text-[22px]">✅</span> Индивидуальную поддержку от вашего куратора и закрытые чаты с участницами клуба
        </li>
        <li className="flex items-center">
          <span className="mr-3 text-[22px]">✅</span> Возможность зарабатывать уже с 1 месяца участия в сообществе - вы будете получать вознаграждение 10,000 тг от каждого приведенного человека в наше сообщество
        </li>
        <li className="flex items-center">
          <span className="mr-3 text-[22px]">✅</span> Инструменты, техники, медитации для работы над собой и достижения ваших целей
        </li>
      </ul>
    </div>

    <div className="bg-[#0E0E0E] mt-8 mx-5 border-2 border-[#FFFFFF] rounded-2xl mb-14 p-4 flex justify-center items-center">
      <p className=" text-2xl text-transparent text-size-full bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#E27C7C] text-center">
      ДЛЯ КОГО ПОДОЙДЕТ?
      </p>
    </div>

    <ul className="text-white text-center list-none space-y-5 mx-7">
    <hr className="border-2 w-90 border-gray-300" />
    <li className=" text-center">
        Женщины, желающие раскрыть свою сексуальную и денежную энергию        </li>
        <hr className="border-2 border-gray-300 w-100" />
        <li className="text-center">
        Те, кто годами тащит на себе груз обид, страхов, негатива, тревоги, сомнений и переживаний
        </li>
        <hr className="border-2 border-gray-300 " />
        <li className="text-center">
        Те, кто хочет проработать свою родовую программу и полностью принять себя
        </li>
        <hr className="border-2  border-gray-300" />
        <li className=" text-center">
        Кто хочет устранить телесные зажимы и обрести легкость        </li>
        <hr className="border-2 border-gray-300" />
        <li className=" text-center">
        Кто в поисках своего предназначения, истинного Я и жизненной миссии
        </li>
        <hr className="border-2 border-gray-300" />
        <li className=" text-center">
        Девушки и женщины, столкнувшиеся с жизненными вызовами и желающие найти опору и поддержку
        </li>
      </ul>
      <div className='flex justify-center pt-10 '>
<button
      onClick={handleClick}
      className="bg-green-500 shadow-2xl  text-[22px] uppercase border border-white text-white font-sans font-extrabold py-3 px-14 rounded-[8px] hover:bg-green-600"
    >
      
      <p className='uppercase'>ВСТУПИТЬ В КЛУБ</p>
      
    </button>
</div>
      <div className="border-t-2 border-b-2 border-dotted mb-7 mt-10 border-dotted border-white py-2">
      <p className="text-white text-center text-[28px] font-medium">ДЛЯ ЭКСПЕРТОВ:</p>
    </div>
    <ul className="text-white list-none space-y-5 mx-7">
    <hr className="border-2 w-90 border-gray-300" />

        <li className="flex items-center text-center">
        Для тех, кто хочет стать экспертом в одном из наших направлений и начать зарабатывать на этом, помогая людям 
        </li>
        <hr className="border-2 border-gray-300 w-100" />
        <li className="flex items-center text-center">
        Для практикующих экспертов, которые хотят стать результативнее в работе и доводить клиентов до желаемых результатов за 1-3 сессии, пополнить список своих услуг и повысить средний чек

        </li>
        <hr className="border-2 border-gray-300 " />
        <li className="flex items-center text-center">
        Для экспертов, которые хотят повысить квалификацию и продвинуть свой личный бренд, с гарантией того, что мы приведем вам первых клиентов 

        </li>
        
      </ul>
      <div className='flex justify-center pt-10 '>
<button
      onClick={handleClick}
      className="bg-green-500 shadow-2xl  text-[22px] uppercase border border-white text-white font-sans font-extrabold py-3 px-14 rounded-[8px] hover:bg-green-600"
    >
      
      <p className='uppercase'>ВСТУПИТЬ В КЛУБ</p>
      
    </button>
</div>
      <div className="bg-[#0E0E0E] mt-14 mx-5 border-2 border-[#FFFFFF] rounded-2xl mb-7 p-4 flex justify-center items-center">
      <p className=" text-2xl text-transparent text-size-full bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#E27C7C] text-center">
      ОТЗЫВЫ
      </p>
    </div>
    <div className='flex space-x-4 mb-14 overflow-scroll animate-loop-scroll'>
      <Image src={FirstRate} alt=" Descriptive alt text" className="max-h-[300px] object-cover" />
      <Image src={SecondRate} alt=" Descriptive alt text" className="max-h-[300px] object-cover" />
      <Image src={ThirdRate} alt=" Descriptive alt text" className="max-h-[300px] object-cover" />
      <Image src={FourthRate} alt=" Descriptive alt text" className="max-h-[300px] object-cover" />
      <Image src={FifthRate} alt=" Descriptive alt text" className="max-h-[300px] object-cover" />
      <Image src={SixthRate} alt=" Descriptive alt text" className="max-h-[300px] object-cover" />
      <Image src={SeventhRate} alt=" Descriptive alt text" className="max-h-[300px] object-cover" />
      <Image src={EigthRate} alt=" Descriptive alt text" className="max-h-[300px] object-cover " />
      <Image src={NinthRate} alt=" Descriptive alt text" className="max-h-[300px] object-cover" />
      <Image src={TenthRate} alt=" Descriptive alt text" className="max-h-[300px] object-cover" />

      </div>
    

    <div className="  w-full  flex justify-center text-center text-2xl font-semibold">
    <span className="text-white mb-20 mr-2">ОСТАЛОСЬ ВЫБРАТЬ ПОДХОДЯЩИЙ <span className="bg-white  mr-2 text-black font-extrabold rounded-md px-2">ТАРИФ</span><span className="text-white ">УЧАСТИЯ</span></span>
  

    </div>
    <div className="mb-28   left-0  flex justify-center   ">
    <div className="relative bg-black  text-white p-5 max-w-[340px] rounded-[36px] ">
      <div className=" absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-24 max-w-110 py-8 text-center text-[32px] uppercase rounded-[20px] font-black text-black">Базовый</div>
      <div className="mt-10 text-center font-extrabold text-4xl">60,000₸</div>
      <div className=" text-center font-light text-sm">(ежемесячный абонемент)</div>

      <ul className="list-disc font-light text-[12px] space-y-5 mt-3 mx-5 mb-5">
        
        <li>2 онлайн-сессии по любым направлениям сообщества на ваш выбор</li>
        <li>Закрытый чат с практиками, медитациями и техниками для самостоятельной проработки</li>
        <li>Индивидуальная поддержка от куратора</li>
        <li>Денежное вознаграждение 10,000 тг от каждого приведенного человека в наше сообщество</li>
      </ul>
    </div>  

    </div>
    <div className="mb-28  left-0  flex justify-center  ">
    <div className="relative bg-black  text-white p-5 max-w-[340px] rounded-[36px] ">
      <div className=" absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-24 max-w-110 py-8 text-center text-[32px] uppercase rounded-[20px] font-black text-black">ПРЕМИУМ</div>
      <div className="mt-10 text-center  font-extrabold text-4xl">120,000₸</div>
      <div className=" text-center font-light text-sm">(ежемесячный абонемент)</div>

      <ul className="list-disc font-light text-[12px] space-y-5 mt-3 mx-5 mb-5">
        
        <li>1 оффлайн сессия в г.Алматы или Астана по телесной и энерготерапии</li>
        <li>2 онлайн сессии по любым направлениям сообщества на ваш выбор</li>
        <li>Закрытый чат с практиками, медитациями и техниками для самостоятельной проработки</li>
        <li>Индивидуальная поддержка от куратора</li>
        <li>Денежное вознаграждение 10,000 тг от каждого приведенного человека в наше сообщество </li>
      </ul>
      <p className="  flex items-center font-extrabold text-center text-[11px]  ">+Бонусом онлайн энергетическая чистка и активация ваших чакр</p>
    </div>  

    </div>

    <div className=" left-0  flex justify-center  ">
    <div className="relative bg-white    p-5 max-w-[340px] rounded-[36px] ">
      <div className=" absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black px-40 max-w-110 py-8 text-center text-[32px] uppercase rounded-[20px] text-white ">VIP</div>
      <div className="mt-10 text-center font-extrabold text-4xl">600,000₸</div>
      <div className=" text-center font-light text-sm">(абонемент на 2 месяца)</div>

      <ul className="list-disc font-light text-[12px] space-y-5 mt-3 mx-5 mb-5">
        
        <li>3 оффлайн сессия в г.Алматы или Астана по телесной и энерготерапии</li>
        <li>3 онлайн сессии по любым направлениям сообщества на ваш выбор</li>
        <li>Бесплатное участие в еженедельных тренингах с экспертами на тему: Отношений, Финансов, Предназначения, и Уверенности в себе</li>
        <li>Закрытый чат с практиками, медитациями и техниками для самостоятельной проработки</li>
        <li>Индивидуальная поддержка от куратора </li>
        <li>Денежное вознаграждение 10,000 тг от каждого приведенного человека в наше сообщество  </li>
      </ul>
    </div>  

    </div>
    <div className="object-cover flex justify-center mt-5">

    <Image src={Kaspi} alt=" Descriptive alt text" className="max-w-32 object-cover flex justify-center items-center " />

    </div>

    <div className='flex justify-center pt-10 '>
<button
      onClick={handleClick}
      className="bg-green-500 shadow-2xl  text-[22px] uppercase border border-white text-white font-sans font-extrabold py-3 px-14 rounded-[8px] hover:bg-green-600"
    >
      
      <p className='uppercase'>Оставить заявку</p>
      
    </button>
</div>
    <div className="border-t-2 border-b-2 border-dotted mb-7 mt-20 border-dotted border-white py-2">
      <p className="text-white text-center text-[28px] font-medium">ДЛЯ ЭКСПЕРТОВ:</p>
    </div>
    

    <div className="mb-28 mt-28 left-0  flex justify-center  ">
    <div className="relative bg-black  text-white p-5 max-w-[340px] rounded-[36px] ">
      <div className=" absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-24 max-w-110 py-8 text-center text-[32px] uppercase rounded-[20px] font-black text-black">Базовый</div>
      <div className="mt-10 text-center font-extrabold text-4xl">500,000₸</div>
      <div className="text-center font-light text-sm">(обучение+сертификат)</div>

      <ul className="list-disc font-light text-[12px] space-y-5 mt-3 mx-5 mb-5">
        
        <li>Обучение по телесной и энерготерапии, энергетической чистки тела и активации чакр</li>
        <li>1 оффлайн сессия для личной проработки </li>
        <li>Сертификат о прохождении обучения </li>
      </ul>
    </div>  

    </div>
    <div className="  left-0  flex justify-center  ">
    <div className="relative bg-white   p-5 max-w-[340px] rounded-[36px] ">
      <div className=" absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black px-40 max-w-110 py-8 text-center text-[32px] uppercase rounded-[20px] text-white ">VIP</div>
      <div className="mt-10 text-center font-extrabold text-4xl">1,000,000₸</div>
      <div className="  text-center font-light text-sm">(личное наставничество)</div>

      <ul className="list-disc font-light text-[12px] space-y-5 mt-3 mx-5 mb-5">
        
        <li>Обучение по телесной и энерготерапии, энергетической чистки тела и активации чакр</li>
        <li>Наставничество по продвижению личного бренда в Instagram</li>
        <li>Приведем вам первых 5 клиентов для практической отработки знаний </li>
        <li>1 оффлайн сессия для личной проработки </li>
        <li>Сертификат о прохождении обучения</li>
      </ul>
    </div>  

    </div>

    <div className=" object-cover flex justify-center mt-5">

<Image src={Kaspi} alt=" Descriptive alt text" className="max-w-32 object-cover  flex justify-center " />

</div>
<div className='flex justify-center pt-10 '>
<button
      onClick={handleClick}
      className="bg-green-500 shadow-2xl  text-[22px] uppercase border border-white text-white font-sans font-extrabold py-3 px-14 rounded-[8px] hover:bg-green-600"
    >
      
      <p className='uppercase'>Оставить заявку</p>
      
    </button>
</div>
<button
      onClick={handleClick}
      className="fixed bottom-4 right-4 bg-green-500 text-white font-bold p-4 rounded-full shadow-lg hover:bg-green-600"
    >
      <Image src={Whatsapp} alt="WhatsApp" className="w-8 h-8" />
    </button>

      
    
    </section>
  );
}

const RoundedRectangle = () => {
  return (
    <div className="relative bg-[#949494] rounded-[20px] px-20 py-24 max-w-50">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full h-8 w-8"></div>
    </div>
  );
};

// Parent component that renders three RoundedRectangle components
const ButtonGroup = () => {
  return (
    <div className="  flex justify-around">
      <div className="absolute -left-20"><RoundedRectangle/></div>
      <div className="absolute "><RoundedRectangle/></div>
      <div className="absolute -right-20"><RoundedRectangle/></div>

      
    </div>
  );
};