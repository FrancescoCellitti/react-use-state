import { useState } from "react"
import Linguaggi from "../assets/linguaggi"
export default function Bottoni() {
    const [Open, setOpen] = useState(null)

    function handleClick(index) {
        setOpen(index)
    }
    return (
        <>
            <h1 className="bg-secondary py-4">Learn Web Development</h1>
            <div className="container">
                <button onClick={()=>handleClick(0)} type="button" className={`m-1 btn ${Open === 0 ? "btn-warning" : "btn-primary"}`}>HTML</button>
                <button onClick={()=>handleClick(1)} type="button" className={`m-1 btn ${Open === 1 ? "btn-warning" : "btn-primary"}`}>CSS</button>
                <button onClick={()=>handleClick(2)} type="button" className={`m-1 btn ${Open === 2 ? "btn-warning" : "btn-primary"}`}>JavaScript</button>
                <button onClick={()=>handleClick(3)} type="button" className={`m-1 btn ${Open === 3 ? "btn-warning" : "btn-primary"}`}>Node.js</button>
                <button onClick={()=>handleClick(4)} type="button" className={`m-1 btn ${Open === 4 ? "btn-warning" : "btn-primary"}`}>Express</button>
                <button onClick={()=>handleClick(5)} type="button" className={`m-1 btn ${Open === 5 ? "btn-warning" : "btn-primary"}`}>ReactJs</button>
                <h2>nessun linguaggio selezionato</h2>
            </div>


            
                    {Open !== null && (
                        <div className="container">
                            <div className="card">
                                <h5 className="card-title">{Linguaggi[Open].titolo}</h5>
                                <p className="card-text">{Linguaggi[Open].testo}</p>
                            </div>
                        </div>
                    )}            
        </>

    )

}
