import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPokemon } from '../Redux/actions/actions';
import axios from 'axios'

export default function Create() {

  const [inputs, setInputs] = useState({
    name: "",
    image: "",
    life: '',
    attack: '',
    defense: '',
    effect: '',
    weight: "",
    speed:'',
    type: [],
    

  });

  const [errors, setErrors] = useState({
    name: '',
    image: '',
    life: '',
    attack: '',
    defense: '',
    effect: '',
    weight: '',
    speed:'',
    type: [],
    
  });

  const dispatch = useDispatch()

  function validate(inputs) {
    const errors = {};
    if (!inputs.name.trim().length) {
      errors.name = "Debe tener nombre"
    } else if (!inputs.image.trim().startsWith('http')) {
      errors.image = "Debe tener una URL"
    } else if (isNaN(inputs.life) ) {
      errors.life = "Debe tener un valor numerico"
    } else if (isNaN(inputs.attack) ) {
      errors.attack = "Debe tener un valor numerico"
    } else if (isNaN(inputs.defense) ) {
      errors.defense = "Debe tener un valor numerico"
    } else if (!inputs.effect) {
      errors.effect = "Debe ser"
    } else if (isNaN(inputs.weight) ) {
      errors.weight = "Debe tener un valor numerico"
    } else if (!inputs.type) {
      errors.type = "Debe tener typo"
    }else if (isNaN(inputs.speed)) {
        errors.speed = "Debe tener un valor numerico"
    }
    return errors;
  }

  function handleInput(event) {
    const { name, value } = event.target
    setInputs({
      ...inputs,
      [name]:value,
      type: value.split(',').map((item) => item.trim())

    })
    setErrors(validate({
      ...inputs,
      [name]: value,
    }));
  }
  const handlerSubmit = async (event) => {
    event.preventDefault();               //<------|  Previene que se recargue la pagina al enviar el formulario
    axios.post('http://localhost:3001/pokemons/new', JSON.stringify(inputs), {  //<------|  Enviamos el formulario a la ruta /activities en formato JSON(me aseguro que llegue en ese formato si osi)
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        alert("Formulario enviado correctamente");
      })
      .catch(err => {
        alert(err);
      });
  };

  // function handleSubmit(event) {
  //     event.preventDefault()
  // dispatch(createPokemon(inputs))
  //   }

  return (
    <form onSubmit={handlerSubmit}>
      <label>Name:</label>
      <input name="name" value={inputs.name} onChange={handleInput} />
      <p className="danger">{errors.name}</p>

      <label>Image:</label>
      <input name="image" value={inputs.image} onChange={handleInput} />
      <p className="danger">{errors.image}</p>

      <label>Vida:</label>
      <input name="life" value={inputs.life} onChange={handleInput} />
      <p className="danger">{errors.life}</p>

      <label>Attack:</label>
      <input name="attack" value={inputs.attack} onChange={handleInput} />
      <p className="danger">{errors.attack}</p>

      <label>Defense:</label>
      <input name="defense" value={inputs.defense} onChange={handleInput} />
      <p className="danger">{errors.defense}</p>

      <label>Effect:</label>
      <input name="effect" value={inputs.effect} onChange={handleInput} />
      <p className="danger">{errors.effect}</p>

      <label>Weight:</label>
      <input name="weight" value={inputs.weight} onChange={handleInput} />
      <p className="danger">{errors.weight}</p>

      <label>Velocidad:</label>
      <input name="speed" value={inputs.speed} onChange={handleInput} />
      <p className="danger">{errors.speed}</p>

      <label>Type:</label>
      <input name="type" value={inputs.type} onChange={handleInput} />
      <p className="danger">{errors.type}</p>

      {Object.keys(errors).length === 0 ? (
        <button type="submit">Enviar</button>
      ) : null}
    </form>
  );
}