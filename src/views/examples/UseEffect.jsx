import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const calcFatorial =(n)=>{
    if(n<0) return -1
    if(n === 0 )return 1
    return calcFatorial(n - 1) * n
}
const calcImparPar = (n)=>{
    if(n === "") return ""
    if(n%2===0){
        return "Par"
    } 
    else{
        return "Impar"
    }
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(0)
    const [fatorial, setFatorial] = useState(1)
    const [imparPar, setImparPar] = useState(0)
    const [status, setStatus] = useState("")

    useEffect(()=>{
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(()=>{
        if(fatorial > 100000000){
            document.title = "Eita!!!"
        }
    },[number])

    useEffect(()=>{
        setStatus(calcImparPar(imparPar))
    },[imparPar]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div>
                <span htmlFor="" className="text">Fatorial:</span>
                <span htmlFor="" className="text red">{fatorial === -1? "Não existe" : fatorial}</span>
            </div>
            <input type="number" className="input" value={number} onChange={e=>setNumber(e.target.value)}/>
            
            <SectionTitle title="Exercício #02"/>
            <div>
                <span className="text">Status:</span>
                <span className="text">{status}</span>
            </div>
            <input type="number" className="input" value={imparPar} onChange={e=>setImparPar(e.target.value)}/>
        </div>
    )
}

export default UseEffect
