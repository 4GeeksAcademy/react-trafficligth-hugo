import { useState } from "react"

const Trafficligth = () => {

    const [purple, setPurple] = useState(false)
    const [red, setRed] = useState(false)
    const [yellow, setYellow] = useState(false)
    const [green, setGreen] = useState(false)
    const [button, setbutton] = useState(0)

    let hidden = "none"
    let redFlash = ""
    let yellowFlash = ""
    let greenFlash = ""

    const changeLigthsButton = () => {
        setbutton(button => {
           setRed(true)
           if(red==true){
            setRed(false)
            return setYellow(true) 
           }if(yellow==true){
            setYellow(false)
            setRed(false)
            return setGreen(true)
           }if(green==true){
            setGreen(false)
           }
        })




    }

    const showPurple = () => {
        if (purple == false) {
            setPurple(true)
        } if (purple == true) {
            setPurple(false);
        }
    }

    if (purple == true) {
        hidden = "flex"
    } if (purple == false) {
        hidden = "none"
    }
    const showRed = () => {
        setRed(true)
        if (yellow == true || green == true) {
            setYellow(false)
            setGreen(false)
        }
    }
    if (red == true) {
        redFlash = "drop-shadow(-4px -3px 37px white)"
    }
    const showYellow = () => {
        setYellow(true)
        if (red == true || green == true) {
            setRed(false)
            setGreen(false)
        }
    }
    if (yellow == true) {
        yellowFlash = "drop-shadow(-4px -3px 37px white)"
    }
    const showGreen = () => {
        setGreen(true)
        if (yellow == true || red == true) {
            setYellow(false)
            setRed(false)
        }

    }
    if (green == true) {
        greenFlash = "drop-shadow(-4px -3px 37px white)"
    }

    return (
        <>
            <button type="button" class="btn btn-primary btn-lg" onClick={showPurple}>Add Purple</button>
            <button type="button" class="btn btn-secondary btn-lg" onClick={changeLigthsButton}>Change Ligths</button>

            <div className="tube"></div>
            <div className="ligths">

                <button className="redbtn" onClick={showRed}>
                    <div className="red" style={{ filter: `${redFlash}` }}></div>
                </button>
                <button className="redbtn" onClick={showYellow}>
                    <div className="yellow" style={{ filter: `${yellowFlash}` }}></div>
                </button>
                <button className="redbtn" onClick={showGreen}>
                    <div className="green" style={{ filter: `${greenFlash}` }}></div>
                </button>
            </div>
            <div className="ligthiden" style={{ display: `${hidden}` }}>
                <div className="purple"></div>
            </div>



        </>
    )
}

export default Trafficligth