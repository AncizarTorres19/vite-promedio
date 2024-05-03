import React, { useState } from 'react';

import LogoFirst from '../../assets/Logo-Pequeno.png'
import LogoSecond from '../../assets/Logo-Soy-Autonoma-Soy-Aunar.png'

function NotaFinalSemestre() {

  const [notaCorte1, setNotaCorte1] = useState(null);
  const [notaCorte2, setNotaCorte2] = useState(null);
  const [notaCorte3, setNotaCorte3] = useState(null);
  const [notaFinal, setNotaFinal] = useState(null);

  const calcularNotaFinal = () => {
    if (!notaCorte1 || !notaCorte2 || !notaCorte3) {
      alert('Por favor ingrese las tres notas de corte');
      return;
    }
    const notaFinal = ((notaCorte1 * 0.3) + (notaCorte2 * 0.3) + (notaCorte3 * 0.4)).toFixed(1);
    setNotaFinal(notaFinal);
  };

  return (
    < >
      <img src={LogoFirst} className="logo first" alt="LogoFirst" />
      <img src={LogoSecond} className="logo" alt="LogoSecond" />
      <h1>Calculadora de Nota Final del Semestre</h1>
      <label htmlFor="notaCorte1">Nota Primer Corte:</label>
      <input
        onChange={(e) => setNotaCorte1(parseFloat(e.target.value))}
        placeholder='Ingrese la nota del primer corte'
        type="number"
        value={notaCorte1}
      />
      <br />
      <label htmlFor="notaCorte2">Nota Segundo Corte: </label>
      <input
        onChange={(e) => setNotaCorte2(parseFloat(e.target.value))}
        placeholder='Ingrese la nota del segundo corte'
        type="number"
        value={notaCorte2}
      />
      <br />
      <label htmlFor="notaCorte3">Nota Tercer Corte: </label>
      <input
        placeholder='Ingrese la nota del tercer corte'
        type="number"
        value={notaCorte3}
        onChange={(e) => setNotaCorte3(parseFloat(e.target.value))}
      />
      <br />
      <button onClick={calcularNotaFinal}>Calcular Nota Final</button>
      <br />
      <label htmlFor="notaFinal"> Nota Final del Semestre:</label>
      <input
        disabled
        placeholder='Nota final del semestre'
        type="text"
        value={notaFinal}
      />
    </>
  );
}

export default NotaFinalSemestre;
