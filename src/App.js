// PULL REQUEST AL AANGEMAAKT https://github.com/jelmer-agricola/frontend-homework-week-12-react-Fruitbasket-orderform/pull/1

import React, {useState} from 'react';
import './App.css';



function App() {

    const [bananas, setBananas] = useState(0);
    const [strawberries, setStrawberries] = useState(0);
    const [apples, setApples] = useState(0);
    const [kiwis, setKiwis] = useState(0);


    //    function reset fruit
    function resetTotalFruit() {
        setBananas(0);
        setStrawberries(0);
        setApples(0);
        setKiwis(0);
    }

    // state niet in fruit counter maar in app

    const [firstName, setFirstname] = useState('');
    const [surName, setSurname] = useState('');
    const [age, setAge] = useState(0);
    const [zip, setZip] = useState('');
    const [frequency, toggleFrequency] = useState('');
    const [timeframe, toggleTimeFrame] = useState('');
    const [comments, setComments] = useState('');
    const [termsAndConditions, toggleTermsAndConditions] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
            Voornaam: ${firstName}, 
            Achternaam: ${surName}, 
            Leeftijd: ${age}, 
            Postcode: ${zip}, 
            Bezorgfrequentie: ${frequency},
            Opmerkingen: ${comments},
            Algemene voorwaarden: ${termsAndConditions}
    `);

        console.log(`Uw bestelling:,
            bananen: ${bananas},
            appels: ${apples},
            strawberries: ${strawberries},
            kiwi's: ${kiwis},
        `);
        // console.log(bananas + " bananen", strawberries + " aardbeien", apples + " apples", kiwis + " kiwi's");

        // console.log(firstName, surName, age, zip, frequency, timeframe, comments, termsAndConditions);
    }

    return (<>
        <h1>Fruitmand bezorgservice</h1>


        <article>
            <h2> Bananen 🍌</h2>
            {/* Button die zowel ervoor zorgt dat je niet boven 0 uitkomt en -1 kan doen. De disabled hoeft maar 1 keer op de button. Omdat je met de plusbutton alleen omhoog kan */}
            <button type="button" disabled={bananas <= 0} onClick={() => setBananas(bananas - 1)}>
                -
            </button>
            <p>{bananas}</p>
            {/*button die ervoor zorgt dat bananen met 1 omhoog gaan*/}
            <button type="button" onClick={() => setBananas(bananas + 1)}>
                +
            </button>

        </article>

        <article>
            <h2>Aarbeien 🍓 </h2>
            <button type="button" disabled={strawberries <= 0} onClick={() => setStrawberries(strawberries - 1)}>
                -
            </button>
            <p>{strawberries}</p>
            <button type="button" onClick={() => setStrawberries(strawberries + 1)}>
                +
            </button>
            {/*    clickhandler functie aardbij functie */}
        </article>

        <article>
            <h2>Appels 🍏 </h2>
            <button type="button" disabled={apples <= 0} onClick={() => setApples(apples - 1)}>
                -
            </button>
            <p>{apples}</p>
            <button type="button" onClick={() => setApples(apples + 1)}>
                +
            </button>
        </article>

        <article>
            <h2>Kiwi's 🥝 </h2>
            <button type="button" disabled={kiwis <= 0} onClick={() => setKiwis(kiwis - 1)}>
                -
            </button>
            <p>{kiwis}</p>
            <button type="button" onClick={() => setKiwis(kiwis + 1)}>
                +
            </button>


        </article>
        <button type="button" onClick={resetTotalFruit}>
            Reset
        </button>

        {/*onSubmit={handleSubmit deze boven aanmaken }*/}
        <form onSubmit={handleSubmit}>

            {/** Het formulier bevat de volgende velden:*/}
            {/** Voornaam*/}
            <section>
                <label htmlFor="firstname-field">Voornaam</label>
                <input
                    type="text"
                    value={firstName}
                    id="firstname-field"
                    onChange={(e) => setFirstname(e.target.value)}

                />
            </section>


            {/** Achternaam*/}
            <section>
                <label htmlFor="surname-field">Achternaam</label>
                <input
                    type="text"
                    value={surName}
                    id="surname-field"
                    onChange={(e) => setSurname(e.target.value)}

                />
            </section>

            {/** Leeftijd*/}
            <section>
                <label htmlFor="age-field">Leeftijd</label>
                <input
                    type="number"
                    value={age}
                    id="age-field"
                    onChange={(e) => setAge(e.target.value)}
                />
            </section>

            {/** Postcode*/}

            <section>
                <label htmlFor="zip-field">Postcode</label>
                <input
                    type="text"
                    value={zip}
                    id="zip-field"
                    onChange={(e) => setZip(e.target.value)}
                />
            </section>

            {/** Selectbox met bezorgfrequentie. _Opties_: iedere week, om de week, iedere maand*/}
            <section>
                <select
                    id="delivery-field"
                    value={frequency}
                    onChange={(e) => toggleFrequency(e.target.value)}
                >
                    <option value="week">Iedere week</option>
                    <option value="two-week">Om de week</option>
                    <option value="month">Iedere maand</option>
                </select>
            </section>
            {/** Radiobuttons met tijdvak. _Opties_: overdag, 's avonds*/}
            <section>
                <input
                    type="radio"
                    value="daytime"
                    id="timeframe-field-daytime"
                    checked={timeframe === 'daytime'}
                    onChange={(e) => toggleTimeFrame(e.target.value)}
                />
                <label htmlFor="timeframe-field-daytime">Overdag</label>
                <input
                    type="radio"
                    value="evening"
                    checked={timeframe === 'evening'}
                    onChange={(e) => toggleTimeFrame(e.target.value)}
                    id="timeframe-field-evening"
                />
                <label htmlFor="timeframe-field-evening">'s Avonds</label>
            </section>


            {/** Opmerking (textarea)*/}

            <section>
                <label htmlFor="comments-field">Opmerkingen</label>
                <input
                    placeholder="Type je tekst hier"
                    type="textarea"
                    name="comments"
                    value={comments}
                    id="comments-field"
                    rows="4"
                    cols="35"
                    onChange={(e) => setComments(e.target.value)}
                />
            </section>

            <section>
                <input
                    type="checkbox"
                    name="termsAndConditions"
                    value={termsAndConditions}
                    id="terms-and-conditions-field"
                    onChange={(e) => toggleTermsAndConditions(e.target.value)}
                />
                <label htmlFor="terms-and-conditions-field">Ik ga akkoord met de voorwaarden</label>

            </section>


            <button type="submit">Verzenden</button>
        </form>

    </>);
}

export default App;
