
import "./components/Form/form.css";
import React, {useState} from "react";
import {Form} from "./components/Form/form";
import {Card} from "./components/Cards/cards";

function App() {
    const [formValues, setFormValues] = useState([]);


        return (
            <div className="App">
                <Form setFormValues={setFormValues} />
                <main>
                    {
                        formValues.map((item, idx) =>
                            <div key={item.firstName}>
                                <div className="card-wrapper">
                                    <div className="card">
                                        <h2><span>name:</span>{item.firstName}</h2>
                                        <h2><span>surname:</span>{item.lastName}</h2>
                                        <h2><span>birthday:</span>{item.birthday}</h2>
                                        <h2><span>country:</span>{item.country}</h2>
                                    </div>
                                </div>
                        </div>
                    )}
                </main>
            </div>

        );
}

export default App;