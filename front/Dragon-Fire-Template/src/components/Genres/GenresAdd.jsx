import React, { useState, useEffect } from 'react';

import api from '../../services/apiLocal';


const GenresAdd = () => {

const [name,setName] = useState('');


function handleName(event) {
    setName(event.target.value)
    console.log(name)
}

async function  postGenre(event) {
    api.post('genres',{
        name
    })
    .then( 
        alert('Gênero Adicionado com sucesso!')
     )
}


    return (

        <div className="container-search">
        <input
          type="text"
          name=""
          placeholder="Digite o nome do gênero que desejas adicionar"
          id=""
          onChange={handleName}
        />
        <button onClick={postGenre}> Adicionar Gênero</button>
      </div>


    )
}

export default GenresAdd;