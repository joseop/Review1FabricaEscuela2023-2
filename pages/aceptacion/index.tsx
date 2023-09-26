import React from 'react';
//import { Menu } from "@/components/Menu/Menu";

export const Frame = () => {
  return (
    <div className='bg-[#0978ea] flex flex-row justify-center w-full'>
      <div className='bg-[#0978ea] w-[428px] h-[926px] relative'>
        <div className='absolute w-[381px] h-[744px] top-[119px] left-[25px] bg-white border-[3px] border-solid border-black'>
          <img
            className='absolute w-[20px] h-[20px] top-[600px] left-[31px]'
            alt='Location on'
            src='/img/location_on.png'
          />
          <img
            className='absolute w-[20px] h-[20px] top-[500px] left-[31px]'
            alt='My location'
            src='/img/my_location.png'
          />
          <div className="absolute top-[432px] left-[100px] [font-family:'Roboto-Bold',Helvetica] font-bold text-black text-[25px] tracking-[0] leading-[normal] whitespace-nowrap">
            $30.000 COP
          </div>
          <div className="absolute top-[600px] left-[55px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
            30min. - 15km
          </div>
          <div className="absolute top-[620px] left-[60px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#686868] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
            Destino
          </div>
          <div className="absolute top-[497px] left-[55px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
            2min. - 700m
          </div>
          <div className="absolute top-[520px] left-[60px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#686868] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
            Recogida
          </div>
          <img
            className='absolute w-[378px] h-[430px] top-px left-[0px] object-cover'
            alt='map'
            src='/img/image1.png'
          />
          <div className='absolute w-[130px] h-[30px] top-[697px] left-[50px] bg-[#0978ea] rounded-[10px]'>
            <div className="absolute top-[4px] left-[30px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
              Aceptar
            </div>
          </div>
          <div className='absolute w-[130px] h-[30px] top-[697px] left-[200px] bg-[#0978ea] rounded-[10px]'>
            <div className="absolute top-[4px] left-[20px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
              Rechazar
            </div>
          </div>
          <div className="absolute w-[19px] top-[525px] left-8 [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[60px] tracking-[0] leading-[normal] whitespace-nowrap">
              l
            </div>
        </div>
        <div className="absolute top-[47px] left-[159px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#eff0f7] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
          SSMU
        </div>
        <img
          className='absolute w-[37px] h-[34px] top-[51px] left-[355px]'
          alt='Accessibility new'
          src='/img/accessibility_new.png'
        />
        <div className='relative w-[48px] h-[48px]'>
          <img
            className='absolute w-[37px] h-[34px] top-[51px] left-[20px]'
            alt='Vector'
            src='/img/menu.png'
          />
        </div>
        {/*<Menu Ubicacion='top-[44px] left-[24px]' />*/}
      </div>
    </div>
  );
};

export default Frame;
