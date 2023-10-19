import { useEffect, useMemo, useState } from "react";
import "./App.css";

const helper = (text: string) => {
    const dict: { [char: string]: number } = {};
    for (let i = 0; i < text.length; i++) {
        dict[text.charAt(i)] = (dict[text.charAt(i)] ?? 0) + 1;
    }
    return dict;
};

function App() {
    const [userText, setUserText] = useState("");
    const frequencies = useMemo(() => helper(userText), [userText]);

    const printer = () => {
        console.log(frequencies);
    };

    useEffect(printer, [userText]);

    return (
        <>
            <div className='card'>
                <input
                    type='text'
                    value={userText}
                    onChange={(e) => {
                        setUserText(e.target.value);
                    }}
                />
                {/* <button onClick={printer}>Check Frequencies</button> */}
            </div>
        </>
    );
}

export default App;
