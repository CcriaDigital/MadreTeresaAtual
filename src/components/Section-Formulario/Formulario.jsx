import './Formulario.css'
import { enviarDadosParaServidor } from '../../api';
import React, { useState } from 'react';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipo: 'adulto' // Definido como adulto por padrão
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);// DADOS.
    enviarDadosParaServidor(formData);

    setFormData({
      nome: '',
      email: '',
      telefone: '',
      tipo: 'adulto'
    });
  };

  return (
    <div className='formulario' id='Formulario'> 
      <div>
        <h2>
          INSCRICÕES PARA O EVENTO
        </h2>
      </div>

      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="telefone">Telefone:</label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="tipo">Tipo:</label>
        <select
          id="tipo"
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
        >
          <option value="adulto">Adulto</option>
          <option value="crianca">Criança</option>
        </select>
      </div>
      <div className='divButton'>
        <button type="submit">Enviar</button>
      </div>
      
    </form>
    </div>
    
  );
};

export default Formulario;
