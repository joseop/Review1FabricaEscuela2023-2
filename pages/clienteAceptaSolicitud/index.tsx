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
        <div className='w-[402px] h-[187px]'>
          <img
            className='fixed w-[402px] h-[187px] top-0 left-0'
            alt='Ellipse'
            src='ellipse-1.svg'
          />
        </div>
        <div className='w-[369px] h-[159px]'>
          <img
            className='fixed w-[368px] h-[160px] top-0 left-0'
            alt='Line'
            src='line-2.svg'
          />
        </div>
        <div className='w-[1059px] h-[800px]'>
          <div className='absolute w-[1059px] h-[286px] top-80 left-20 bg-white rounded-[31px]' />
          <div className='w-[275px] h-[42px]'>
            <div className="absolute top-80 left-40 [font-family:'Roboto-Bold',Helvetica] font-bold text-black text-[36px] tracking-[0] leading-[normal] whitespace-nowrap">
              $30.000 COP
            </div>
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
          <div className='w-[501px] h-[56px]'>
            <p className="fixed w-[501px] top-0 left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-[#676363] text-[24px] tracking-[0] leading-[normal]">
              Cl. 73 #73A-79, Pilarica, Medellín, Robledo, Medellín, Antioquia.
            </p>
          </div>
          <div className='w-px h-[41px]'>
            <img
              className='fixed w-px h-[41px] top-0 left-0 object-cover'
              alt='Line'
              src='line-1.svg'
            />
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
          <div className='w-[501px] h-[56px]'>
            <p className="fixed w-[501px] top-0 left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-[#676363] text-[24px] tracking-[0] leading-[normal]">
              Cl. 67 #53-108, Aranjuez, Medellín, Aranjuez, Medellín, Antioquia.
            </p>
          </div>
          <div className='w-[165px] h-[48px]'>
            <div className='fixed w-[165px] h-[48px] top-0 left-0 bg-[#0978ea] rounded-[10px]' />
            <div className='w-[112px] h-[38px]'>
              <div className="fixed top-0 left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
                Aceptar
              </div>
            </div>
          </div>
          <div className='w-[165px] h-[48px]'>
            <div className='fixed w-[165px] h-[48px] top-0 left-0 bg-[#0978ea] rounded-[10px]' />
            <div className='w-[133px] h-[38px]'>
              <div className="fixed top-0 left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
                Rechazar
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
