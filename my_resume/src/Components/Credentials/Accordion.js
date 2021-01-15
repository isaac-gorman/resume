import React, {useState, useRef} from 'react';
import "./Accordion.css";
import Chevron from "./Chevron";

function Accordion(props) {
    const [setActive, setActiveState ] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");
    const content = useRef(null)

    function toggleAccordian() {
        setActiveState(setActive === "" ? "active" : "" );
        setHeightState(setActive === "active" ? "0px" : "400px");
        setRotateState(setActive === "active" ? "accordion__icon" : "accordion__icon rotate")
    }

    return(
        // accordian__section 
        <div className="accordion__section">
            <button className={`accordion ${setActive}`}  onClick={toggleAccordian}>
                <p className="accordion__title">{props.title}</p>
                <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
            </button>
            <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
                {props.content}
            </div>
        </div>
    )
}

export default Accordion;