import React, { useState } from 'react';

import LogoFirst from '../../assets/Logo-Pequeno.png'
import LogoSecond from '../../assets/Logo-Soy-Autonoma-Soy-Aunar.png'

function NotaFinalSemestre() {

  const [notaCorte1, setNotaCorte1] = useState(0);
  const [notaCorte2, setNotaCorte2] = useState(0);
  const [notaCorte3, setNotaCorte3] = useState(0);
  const [notaFinal, setNotaFinal] = useState(0);

  const calcularNotaFinal = () => {
    const notaFinal = ((notaCorte1 * 0.3) + (notaCorte2 * 0.3) + (notaCorte3 * 0.4)).toFixed(1);
    setNotaFinal(notaFinal);
  };

  return (
    < >
      <img src={LogoFirst} className="logo first" alt="LogoFirst" />
      <img src={LogoSecond} className="logo" alt="LogoSecond" />
      <h1>Calculadora de Nota Final del Semestre</h1>
      <label>Nota Primer Corte:</label>
      <input type="number" value={notaCorte1} onChange={(e) => setNotaCorte1(parseFloat(e.target.value))} />
      <br />
      <label>Nota Segundo Corte: </label>
      <input type="number" value={notaCorte2} onChange={(e) => setNotaCorte2(parseFloat(e.target.value))} />
      <br />
      <label>Nota Tercer Corte: </label>
      <input type="number" value={notaCorte3} onChange={(e) => setNotaCorte3(parseFloat(e.target.value))} />
      <br />
      <button onClick={calcularNotaFinal}>Calcular Nota Final</button>
      <br />
      <label> Nota Final del Semestre:</label>
      <input type="text" value={notaFinal} disabled />
    </>
  );
}

export default NotaFinalSemestre;
