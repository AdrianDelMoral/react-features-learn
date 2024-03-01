import reactImage from "./assets/react-logo-xs.png";
import componentsImage from "./assets/blocks-logo.png";
import jsxImage from "./assets/mix-logo.webp";
import propsImage from "./assets/settings-icon.png";
import stateImage from "./assets/state-logo.png";

const reactTitles = [ 'Fundamentos', 'Bases', 'Principios'];

function getRandomIntInRange(min, max) {
  // Saber cuantos numeros hay entre el numero máximo y el minimo y nos dé un numero random en base a esos
  return Math.floor(Math.random() * (max - min +1) + min);
}

function Header() {
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

function CoreConcepts({imagePath, title, description}){

  return(
    <div>
      <img src={imagePath} alt="..." />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    )
}

function App() {
  return (
    <>
      <Header/>
      <section id="coreConcepts">
        <h2>Principales Características</h2>
        <div>
          {/* Ejemplo de componente que recibe props */}
          <CoreConcepts 
            imagePath={componentsImage}
            title="Componentes" 
            description="El úcleo principal de construcción de una UI con React. La combinación de distintos componentes logra una composición de una UI más manejable"/>
          
          <CoreConcepts 
            imagePath={jsxImage}
            title="JSX" 
            description="Una combinación de código JS y HTML. Retorna contenido HTML potencialmente dinámico que será renderizado para componer la UI."/>
          
          <CoreConcepts 
            imagePath={propsImage}
            title="Props" 
            description="Proporcionan a los componentes la capacidad de poder tener atributso personalizables para que estos reciban información."/>
          
          <CoreConcepts 
            imagePath={stateImage}
            title="States" 
            description="Principales manejadores de datos en React, cuando encuentran un cambio en los datos obligan al componente a re-renderizarse yu actualizar la interfaz."/>
        </div>
      </section>
      <main>
        <h2>¡Comenzamos Picando Código en React!</h2>
      </main>
    </>
  );
}

export default App;