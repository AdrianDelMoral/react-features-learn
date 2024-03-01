import Header from './components/Header.jsx';

//* Constante CoreConcepts para la información que se añade en el componente CoreConcepts
import { CORE_CONCEPTS } from './data.js'; 

//* Componente para poder poner
import CoreConcepts from './components/CoreConcepts.jsx';

function App() {
  return (
    <>
      <Header/>
      <section id="coreConcepts">
        <h2>Principales Características</h2>
        <div>
          {/* Usar Spread Operator "..." para pasar todas las propiedades que existan en la constante de información 
            que recibimos de "./data.js" ya que se llamarán las variables en todas de la misma forma:
            - Serán añadidas como props del componente
          */}
          <CoreConcepts {...CORE_CONCEPTS[0]}/>
          <CoreConcepts {...CORE_CONCEPTS[1]}/>
          <CoreConcepts {...CORE_CONCEPTS[2]}/>
          <CoreConcepts {...CORE_CONCEPTS[3]}/>
          
          {/* Antes de poner el spread operator "...":
            <CoreConcepts 
              imagePath={CORE_CONCEPTS[3].imagePath}  
              title={CORE_CONCEPTS[3].title} 
              description={CORE_CONCEPTS[3].description}/>
          */}
          
          {/* Pasando las variables a mano:
          <CoreConcepts 
            imagePath={componentsImage} 
            title="Componentes" 
            description="El úcleo principal de construcción de una UI con React. La combinación de distintos componentes logra una composición de una UI más manejable"/> */}

        </div>
      </section>
      <main>
        <h2>¡Comenzamos Picando Código en React!</h2>
      </main>
    </>
  );
}

export default App;