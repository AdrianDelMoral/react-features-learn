// Siguiente video: https://youtu.be/cifTVzfIwrY?list=PLO8lO9oepSLv0zh2j644zWefsxEGR8zdC&t=2

import Header from './components/Header/Header.jsx';
//* Constante CoreConcepts para la información que se añade en el componente CoreConcepts
import { CORE_CONCEPTS } from './data.js'; 

//* Constante EXAMPLES para la información que se añade en el componente EXAMPLES
import { EXAMPLES } from './data.js'; 

//* Componentes para poder utilizar
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { useState } from 'react';


function App() {
  //* Eventos que registran que se pulsa un botón
  /* 
    ? En JavaScript:
    ? document.querySelector("button").addEventListener("click", ()=>{
    ?  console.log('Ey! Estás haciendo click en los botones!')
    ? })
  */

  //* handleClick = manejador de clicks
  //* Evento en React:
  /* 
    * Se usa en la parte superior del componente, justo debajo de la declaración del componente App.jsx
    * Reglas que deben seguir las funciones reactHooks: 
    * 1. dentro de funciones componentes, o hooks creados por nosotros, no se puede llamar dentro de otras funciones, o dentro de ifs/bucles/etc tampoco
    * 2. Solo pueden ser llamadas en la parte más superior de los componentes o hooks customizables. Lo primero que debe tener la función
  */
  //? valor que podemos guardar en una variable o constante, 
  //? y devolverá un array con dos valores: "nombreVariable", "setnombreVariable"
  //? set = establecer
  //? nombreVariable = contendrá la información más actual
  //? setNombreVariable = contendrá la función para actualizar ese nombreVariable

  const [selectedTopic, setSelectedTopic] = useState(null); 

  function handleClickMenu(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(`Ey! Estás pulsando el botón ${selectedTopic}`);
  }

  //* tabContent por defecto, para a la hora de no haber pulsado nada, que muestr algo por defecto
  let tabContent = (
    <p>
      Aquí se va a mostrar información sobre una característica de React, para ello elige una opción del menú.
    </p>
  )
  
  //* Si selectedTopic hay algo seleccionado mostrará el componente:
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Header/>
      <section id='coreConcepts'>
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
          
          {/* 
            Antes de poner el spread operator "...":
              <CoreConcepts imagePath={CORE_CONCEPTS[3].imagePath}  title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description}/>
            Pasando las variables a mano:
              <CoreConcepts imagePath={componentsImage} title="Componentes" description="El núcleo principal de construcción de una UI con React. La combinación de distintos componentes logra una composición de una UI más manejable"/> 
          */}

        </div>
      </section>

      <section id='examples'>
        <h2>Ejemplo React</h2>
        <menu className='tab'>
          {/* Se ejecutará handleClickMenu cuando se pulse, no cuando el navegador lea la 
              linea de código si tuviese parentesis handleClickMenu() se llamaria nada más 
              leer la linea

              en caso de tener arrowFunction ()=> nombreFuncion() no pasa nada si ponemos el 
              parentesis, ya que recibe la declaración, pero no la ejecuta si no solo la 
              arrow function
          */}
          <TabButton isSelected={selectedTopic === "components"} onClick={()=>handleClickMenu("components")}>Componentes</TabButton>
          <TabButton isSelected={selectedTopic === "jsx"} onClick={()=>handleClickMenu("jsx")}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === "props"} onClick={()=>handleClickMenu("props")}>Props</TabButton>
          <TabButton isSelected={selectedTopic === "state"} onClick={()=>handleClickMenu("state")}>Estados</TabButton>
        </menu>
        
        {tabContent}
        
      </section>
      <main>
        <h2>¡Comenzamos Picando Código en React!</h2>
      </main>
    </>
  );
}

export default App;