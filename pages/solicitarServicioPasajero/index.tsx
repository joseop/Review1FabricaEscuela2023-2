import React from 'react';

export const MacbookAir = () => {
  return (
    <div className='h-[804px] bg-[#007bf1] flex justify-center w-full'>
      <img
        className='absolute w-[69px] h-[40px] top-[18px] left-[16px]'
        alt='Menu'
        src='/img/menu.png'
      />
      <div className='w-[174px] h-[75px]'>
        <div className="absolute h-[75px] top-[0px] left-[200px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#eff0f7] text-[64px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          SSMU
        </div>
      </div>
      <img
        className='absolute w-[76px] h-[75px] top-0 left-100'
        alt='Accessibility'
        src='/img/accessibility_new.png'
      />
      <div className='w-[1144px] h-[644px]'>
        <img
          className='absolute w-[1144px] h-[644px] top-20 left-20 object-cover'
          alt='Mapa'
          src='/img/MapaFull.png'
        />
        <div className='w-[1059px] h-[800px]'>
          <div className='absolute w-[1059px] h-[286px] top-80 left-20 bg-white rounded-[31px]' />
          <div className='w-[275px] h-[42px]'>
            <div className="absolute top-80 left-40 [font-family:'Roboto-Bold',Helvetica] font-bold text-black text-[36px] tracking-[0] leading-[normal] whitespace-nowrap">
              Solicitar Servicio
            </div>
          </div>
          <img
            className='absolute w-[27px] h-[32px] top-80 left-0 object-cover'
            alt='Punto'
            src='/img/Punto.png'
          />
          <div className='w-[62px] h-[35px]'>
            <div className="absolute top-0 left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[30px] tracking-[0] leading-[normal] whitespace-nowrap">
              Ruta
            </div>
          </div>
          <div className='w-[875px] h-[4px]'>
            <div className='absolute w-[875px] h-[4px] top-0 left-0 bg-[#d9d9d9]' />
          </div>
          <img
            className='absolute w-[27px] h-[32px] top-0 left-0 object-cover'
            alt='My Location'
            src='/img/my_location.png'
          />
          <div className='w-[102px] h-[38px]'>
            <div className="absolute top-0 left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
              Origen:
            </div>
          </div>
          <div className='w-[375px] h-[20px]'>
            <div className='absolute w-[375px] h-[20px] top-0 left-0 bg-[#f4f0f0]' />
          </div>
          <img
            className='absolute w-[27px] h-[32px] top-0 left-0 object-cover'
            alt='My Location on'
            src='/img/location_on.png'
          />
          <div className='w-[117px] h-[38px]'>
            <div className="absolute top-0 left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
              Destino:
            </div>
          </div>
          <div className='w-[375px] h-[20px]'>
            <div className='absolute w-[375px] h-[20px] top-0 left-0 bg-[#f4f0f0]' />
          </div>
          <div className='w-[165px] h-[48px]'>
            <div className='absolute w-[165px] h-[48px] top-0 left-0 bg-[#0978ea] rounded-[10px]' />
            <div className='w-[117px] h-[38px]'>
              <div className="absolute top-0 left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
                Solicitar
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<Menu Ubicacion='top-[44px] left-[24px]' />*/}
    </div>
  );
};

export default MacbookAir;
