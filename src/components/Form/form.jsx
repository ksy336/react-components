import "./form.css";
import {useState, useEffect} from "react";
import React from "react";

export const Form = ({setFormValues}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [country, setCountry] = useState("Russia");
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState({});

    useEffect(() => {
        validate();
    }, [firstName, lastName, agree, birthday])

    const validate = () => {
        setError({})
        if (!agree) {
            setError((state) => ({...state, agree}));
        }
        if (!firstName) {
            setError((state) => ({...state, firstName}));
        }
        if (!lastName) {
            setError((state) => ({...state, lastName}));
        }
        if (!birthday) {
            setError((state) => ({...state, birthday}));
        }
        // addCard();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (Object.keys(error).length === 0) {
            setFormValues((state) => [...state, {firstName, lastName, birthday, country}]);
            reset();
        }
    }
    // const handleClick = (event) => {
    //         train.classList.toggle('none');
    //         play.classList.toggle('none');
    //         btnStart.classList.toggle('active')
    // }

    // const addCard = (formValues) => {setFormValues(prev => [...prev, formValues]);} // функция отправляет данные формы в массив

    const reset = () => {
        setAgree(false);
        setFirstName("");
        setLastName("");
        setBirthday('');
        setCountry('Russia');
    }

    return (
        <div className="wrapper">
            <form className="form" onSubmit={handleSubmit}>
                <label className="item" htmlFor="firstName">
                    Name:
                    <input type="text"
                           name="firstName"
                           value={firstName}
                           onChange={(event) => setFirstName(event.target.value)}
                    />
                    {error?.firstName === "" && <span className="error-firstname"> * name should be filled</span> }
                </label>

                <label className="item" htmlFor="lastName">
                    Surname:
                    <input className="label__surname" type="text"
                           name="lastName"
                           value={lastName}
                           onChange={(event) => setLastName(event.target.value)}
                    />
                    {error?.lastName === "" && <span className="error-lastname"> * surname should be filled</span> }
                </label>

                <label className="item birthday-label" htmlFor="birthday">
                    Birthday:
                    <input className="label__birthday" type="date"
                           name="birthday"
                           value={birthday}
                           onChange={(event) => setBirthday(event.target.value)}
                    />
                    {error?.birthday === "" && <span className="error-birthday"> * birthday should be filled</span> }
                </label>
                <label className="item country-label" htmlFor="country">
                    Country:
                    <select
                        className="country"
                        name="country"
                        value={country}
                        onChange={(event) => setCountry(event.target.value)}
                        id="country">
                        <option>Russia</option>
                        <option>Belarus</option>
                        <option>Ukraine</option>
                        <option>USA</option>
                        <option>Canada</option>
                    </select>
                </label>

                <label className="item agree-label" htmlFor="agree">
                    <p className="agree">I agree...{error?.agree !== undefined && <span className="error"> * agree should be check</span> } </p>
                    <input type="checkbox"
                           className="input-agree"
                           name="agree"
                           checked={agree}
                           onChange={() => setAgree(prev => !prev)}
                    />
                </label>

                <div className="switch">
                    <input type="checkbox" className="checkbox" id="checkbox" />
                        <label htmlFor="checkbox" className="checkbox-label"/>
                        <span className="train">Agree</span>
                        <span className="play none"/>
                        <span className="switch-bg"/>
                </div>

                <div className="button">
                    <input type="submit" value="Send" />
                </div>
            </form>
        </div>

    )
}
export default Form;