import React, { useState, useEffect } from "react";

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <div style={{
            textAlign: "center",
            marginTop: "100px",
            fontFamily: "Arial"
        }}>
            <h1>Simple Counter App</h1>

            <h2 style={{ fontSize: "50px" }}>{count}</h2>

            <button
                onClick={() => setCount(count + 1)}
                style={{
                    padding: "10px 20px",
                    margin: "10px",
                    fontSize: "16px",
                    cursor: "pointer"
                }}
            >
                Increment
            </button>

            <button
                onClick={() => setCount(count - 1)}
                style={{
                    padding: "10px 20px",
                    margin: "10px",
                    fontSize: "16px",
                    cursor: "pointer"
                }}
            >
                Decrement
            </button>
        </div>
    );
}

export default App;