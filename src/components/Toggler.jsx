import React from "react";
import "./Toggler.css";
import { useState } from "react";

const Toggler = () => {
    function handleClick() {
        backgroundColor === "white"
            ? setBackgroundColor("#1b1b1b")
            : setBackgroundColor("white");
        textColor === "#1b1b1b"
            ? setTextColor("white")
            : setTextColor("#1b1b1b");
        buttonColor === "#1b1b1b"
            ? setButtonColor("white")
            : setButtonColor("#1b1b1b");
    }

    const [backgroundColor, setBackgroundColor] = useState("white");
    const [textColor, setTextColor] = useState("#1b1b1b");
    const [buttonColor, setButtonColor] = useState("1b1b1b");
    return (
        <section style={{ backgroundColor, color: textColor }}>
            <button
                onClick={handleClick}
                style={{ backgroundColor, color: textColor }}
            >
                {backgroundColor == "#1b1b1b" ? "Black Theme" : "White Theme"}
            </button>
        </section>
    );
};

export default Toggler;
