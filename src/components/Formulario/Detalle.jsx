import React, { useContext } from "react";
import { PokeContext } from "../../context/ContextoFormulario";

const Detalle = () => {
  // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en
  // la vista previa.

const {poke, setPoke} = useContext(PokeContext);

const sendData = ()=>{
  alert("Solicitud enviada :)")
  setPoke('')
}
  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre:{poke.nombre}</p>
          <p>Apellido:{poke.apellido}</p>
          <p>Email:{poke.email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre:{poke.nombrePokemon}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={sendData}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
