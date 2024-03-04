// Siguiente video: https://youtu.be/cifTVzfIwrY?list=PLO8lO9oepSLv0zh2j644zWefsxEGR8zdC&t=2

import Header from './components/Header/Header.jsx';
//* Constante CoreConcepts para la información que se añade en el componente CoreConcepts
import { CORE_CONCEPTS } from './data.js'; 
//* Componente para poder poner
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

  const [selectedTopic, setSelectedTopic] = useState("Por favor, pulsa un botón del menú"); 

  function handleClickMenu(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(`Ey! Estás pulsando el botón ${selectedTopic}`);
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
          
          {/* Antes de poner el spread operator "...":
            <CoreConcepts imagePath={CORE_CONCEPTS[3].imagePath}  title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description}/> */}
          
          {/* Pasando las variables a mano:
          <CoreConcepts imagePath={componentsImage} title="Componentes" description="El núcleo principal de construcción de una UI con React. La combinación de distintos componentes logra una composición de una UI más manejable"/> */}

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
          <TabButton onClick={()=>handleClickMenu("Componentes")}>Componentes</TabButton>
          <TabButton onClick={()=>handleClickMenu("JSX")}>JSX</TabButton>
          <TabButton onClick={()=>handleClickMenu("Props")}>Props</TabButton>
          <TabButton onClick={()=>handleClickMenu("Estados")}>Estados</TabButton>
        </menu>
        
        { selectedTopic }

      </section>

      <main>
        <h2>¡Comenzamos Picando Código en React!</h2>
      </main>
    </>
  );
}

export default App;