const Menu = ({Ubicacion}:{Ubicacion:string}) => {
    return (
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Menú</li>
        </ul>
        <h1>Hola usted está en: {Ubicacion}</h1>
      </nav>
    );
};
  
export {Menu}