
import "./components/Form/form.css";
import React, {useState} from "react";
import {Form} from "./components/Form/form";
import {Card} from "./components/Cards/cards";

function App() {
    const [formValues, setFormValues] = useState([]);


        return (
            <div className="App">
                <Form  />

            </div>

        );
}

export default App;