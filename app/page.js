"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {
  const [verb, setVerbo] = useState('')
  const [conjugationResult, setConjugationResult] = useState("")
  function updatingInputValue(event) {
    const inputValue = event.target.value;
    setVerbo(inputValue);
  }

  function orderOfConjugation(IPresent, youPresent, HeEshePresent, UsPresent, YouPresent, TheyEshePresent, IPast, youPast, HeEshePast, UsPast, YouPast, TheyEshePast, IFuture, youFuture, HeEsheFuture, UsFuture, YouFuture, TheyEsheFuture) {
    return (
      <div>
        <h2>Conjugado no presente do indicativo</h2>
        <p>{IPresent}</p>
        <p>{youPresent}</p>
        <p>{HeEshePresent}</p>
        <p>{UsPresent} </p>
        <p>{YouPresent}</p>
        <p>{TheyEshePresent}</p>

        <h2>Conjugado no pretérito perfeito</h2>
        <p>{IPast}</p>
        <p>{youPast}</p>
        <p>{HeEshePast}</p>
        <p>{UsPast}</p>
        <p>{YouPast} </p>
        <p>{TheyEshePast}</p>

        <h2>Conjugado no futuro do indicativo</h2>
        <p>{IFuture}</p>
        <p>{youFuture}</p>
        <p>{HeEsheFuture}</p>
        <p>{UsFuture}</p>
        <p>{YouFuture}</p>
        <p>{TheyEsheFuture}</p>
      </div>
    )
  }

  function conjugateVerbo() {
    const verbsEndingInEr = ["entender".toUpperCase(), "ver".toUpperCase(), "ser".toUpperCase()];
    const verbsWithIrEnding = ["vir".toUpperCase(), "existir".toUpperCase(), "agir".toUpperCase()];

    let conjugation = null;
    if (verbsEndingInEr[0] === verb.toUpperCase()) {
      conjugation = orderOfConjugation(
        "Eu entendo", "Tu entendes", "Ele/Ela entende", "Nós entendemos", "Vós entendeis", "Eles/Elas entendem",
        "Eu entendi", "Tu entendeste", "Ele/Ela entendeu", "Nós entendemos", "Vós entendestes", "Eles/Elas entenderam",
        "Eu entenderei", "Tu entenderás", "Ele/Ela entenderá", "Nós entenderemos", "Vós entendereis", "Eles/Elas entenderão"
      );
    } else if (verbsEndingInEr[1] === verb.toUpperCase()) {
      conjugation = orderOfConjugation(
        "Eu vejo", "Tu vês", "Ele/ela vê", "Nós vemos", "Vós vedes", "Eles/Elas veem",
        "Eu vi", "Tu viste", "Ele/ela viu", "Nós vimos", "Vós vistes", "Eles/Elas viram",
        "Eu verei", "Tu verás", "Ele/Ela verá", "Nós veremos", "Vós vereis", "Eles/Elas verão"
      );
    } else if (verbsEndingInEr[2] === verb.toUpperCase()) {
      conjugation = orderOfConjugation(
        "Eu sou", "Tu és", "Ele/Ela é", "Nós somos", "Vós sois", "Eles/Elas são",
        "Eu fui", "Tu foste", "Ele/ela foi", "Nós fomos", "Vós fostes", "Eles/Elas foram",
        "Eu serei", "Tu serás", "Ele/Ela será", "Nós seremos", "Vós sereis", "Eles/Elas serão"
      );
    } else if (verbsWithIrEnding[0] === verb.toUpperCase()) {
      conjugation = orderOfConjugation(
        "Eu venho", "Tu vens", "Ele/Ela vem", "Nós vimos", "Vós vindes", "Eles/Elas vêm",
        "Eu vim", "Tu vieste", "Ele/Ela veio", "Nós viemos", "Vós viestes", "Eles/Elas vieram",
        "Eu virei", "Tu virás", "Ele/Ela virá", "Nós viremos", "Vós vireis", "Eles/Elas virão"
      );
    } else if (verbsWithIrEnding[1] === verb.toUpperCase()) {
      conjugation = orderOfConjugation(
        "Eu existo", "Tu existes", "Ele/Ela existe", "Nós existimos", "Vós existis", "Eles/Elas existem",
        "Eu existi", "Tu exististe", "Ele/Ela existiu", "Nós existimos", "Vós exististes", "Eles/Elas existiram",
        "Eu existirei", "Tu existirás", "Ele/Ela existirá", "Nós existiremos", "Vós existireis", "Eles/Elas existirão"
      );
    } else if (verbsWithIrEnding[2] === verb.toUpperCase()) {
      conjugation = orderOfConjugation(
        "Eu ajo", "Tu ages", "Ele/Ela age", "Nós agimos", "Vós agis", "Eles/Elas agem",
        "Eu agi", "Tu agiste", "Ele/Ela agiu", "Nós agimos", "Vós agistes", "Eles/Elas agiram",
        "Eu agirei", "Tu agirás", "Ele/Ela agirá", "Nós agiremos", "Vós agireis", "Eles/Elas agirão"
      );
    } else if (verb.endsWith("ar")) {
      const radical = verb.slice(0, -2)
      conjugation = orderOfConjugation(
        `Eu ${radical}o`, `Tu ${radical}as`, `Ele/Ela ${radical}a`, `Nós ${radical}amos`, `Vós ${radical}ais`, `Eles/Elas ${radical}am`,
        `Eu ${radical}ei`, `Tu ${radical}aste`, `Ele/Ela ${radical}ou`, `Nós ${radical}amos`, `Vós ${radical}astes`, `Eles/Elas ${radical}aram`,
        `Eu ${radical}arei`, `Tu ${radical}arás`, `Ele/Ela ${radical}ará`, `Nós ${radical}aremos`, `Vós ${radical}areis`, `Eles/Elas ${radical}arão`
      );
    } else {
      alert(`Infelizmente não temos esse verbo conjugado`);
    }

    setConjugationResult(conjugation);
  }

  return (
    <div className={styles.container}>
      <h1>Conjugador de verbo</h1>
      <label htmlFor="verbo">Digite o verbo:</label>
      <input type="text" value={verb} onChange={updatingInputValue} placeholder='Digite o verbo aqui' />
      <button type="button" onClick={conjugateVerbo}>conjugar</button>
      {conjugationResult}

    </div>
  );
}
