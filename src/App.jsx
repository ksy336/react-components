
import "./index.css";
import React, {useState} from "react";
import {Form} from "./components/Form/form";
import {Card} from "./components/Cards/cards";

function App() {
    const [formValues, setFormValues] = useState([]);
        return (
            <div className="App">
                <Form setFormValues={setFormValues} />
                <main>
                    {formValues.map((item, idx) => {
                        return < Card item = {item}
                                      key = {idx} />
                    })}
                </main>
            </div>

        );
}

export default App;