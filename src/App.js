import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Alfredo Hernandez Rodriguez 8-B</h1>
      <div>
        <form action="" id="myForm">
          <label htmlFor="fname">Razón Social</label>
          <input 
            type="text" 
            id="fname" 
            name="firstname" 
            placeholder="Razón Social" 
            required 
            maxLength="30"
          />

          <div className="form-row">
            <div className="half-width">
              <label htmlFor="rfc">RFC</label>
              <input 
                type="text" 
                id="rfc" 
                name="rfc" 
                placeholder="RFC" 
                required 
                pattern="[A-Za-z0-9]{12,13}" 
                title="El RFC debe tener 12 o 13 caracteres alfanuméricos"
              />
            </div>
            <div className="half-width">
              <label htmlFor="telefono">Teléfono</label>
              <input 
                type="tel" 
                id="telefono" 
                name="telefono" 
                placeholder="Teléfono" 
                required 
                pattern="^[0-9]{10}$" 
                title="El teléfono debe ser un número de 10 dígitos"
              />
            </div>
          </div>

          <label htmlFor="contacto">Contacto</label>
          <input 
            type="text" 
            id="contacto" 
            name="contacto" 
            placeholder="Ingresa Contacto" 
            required 
          />

          <label htmlFor="correo">Correo</label>
          <input 
            type="email" 
            id="correo" 
            name="correo" 
            placeholder="Ingresa Correo" 
            required 
          />

          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}

export default App;
