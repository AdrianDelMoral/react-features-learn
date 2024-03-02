import reactImage from '../../assets/react-logo-xs.png';

//* Importación de estilos CSS de este componente
import './Header.css';

const reactTitles = [ 'Fundamentos', 'Bases', 'Principios'];

function getRandomIntInRange(min, max) {
  //* Saber cuantos numeros hay entre el numero máximo y el minimo y nos dé un numero random en base a esos
  return Math.floor(Math.random() * (max - min +1) + min);
}

//! Se debe usar "export default" para poder exportar el componente y utilizar, siempre y cuando sea un solo componente/cosa por fichero, opción más común
export default function Header() {
  const dinamicTitle = reactTitles[getRandomIntInRange(0, 2)]
  return(
    <header>
      {/* Importar una imágen de forma Normal, NO REACT
        <img src="src/assets/react-logo-xs.png" alt="React logo" /> */}
      
      {/* Ruta dinámica */}
      <img src={reactImage} alt="React logo" />

      {/* Dará un texto, sacado de la función de numero randoms */}
      <h1>React {dinamicTitle}</h1>
      {/* De esta forma podríamos hacerlo directamente en una línea
        <h1>{reactTitles[getRandomIntInRange(0, 2)]}</h1> */}
      <p>
        ¡Conceptos fundamentales de React que necesitas conocer para desarrollar cualquier app con esta famosa librería!
      </p>
    </header>
  );
}