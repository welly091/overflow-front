import {useState} from 'react'

export default function QuestionForm({onCreate}) {

    const initialValues = {
        question: '',
        category: '',
        level: '',
        keywords: 'optional',
    };

    const [values, setValues] = useState(initialValues);

    function submitHandler(event) {
        event.preventDefault();
        const reshapedData = reshapeData()
        onCreate(reshapedData);
        setValues(initialValues)
    }

    function inputChangeHandler(event) {
        let {name, value, type} = event.target;

        if (type === "number") {
            value = parseFloat(value);
        }
        setValues({...values, [name]: value});
    }

    return (
        <form
            className="grid-cols-20 gap-4 p-8 mx-auto my-40  bg-white-200 border-2 border-grey-400 rounded-lg text-md gap-x-8"
            onSubmit={submitHandler}>
            <div className="flex flex-col col-span-2 mb-4 ">
                <label className="mb-2 font-bold text-grey-darkest" htmlFor="question">Input your questions
                    here </label>

                <input className="px-3 py-2 mx-8 border text-grey-darkest" type="text" name="question" id="question"
                       value={values.question} onChange={inputChangeHandler} placeholder="Hello there!"/>
            </div>
            Pick your level:
            <select name='level mb-2 font-bold  text-grey-darkest" htmlFor="level'>
                <option value="102 justify-center">102</option>
                <option value="201">201</option>
                <option value="201">301</option>
                <option value="401">401</option>
            </select>
            <br></br>
            Pick language category:
            <select name='level mb-2 font-bold  text-grey-darkest" htmlFor="level'>
                <option value="102 justify-center">Python</option>
                <option value="201">Javascirpt</option>
                <option value="201">C#</option>
                <option value="401">Java</option>
            </select>
            <FormInputSection>
                <label className="mb-2 font-bold text-grey-darkest" htmlFor="avg">Keywords</label>
                <input className="px-3 py-2 mx-8 border text-grey-darkest" type="text" name="keyword" id="keyword"
                       onChange={inputChangeHandler} placeholder="optional"/>
            </FormInputSection>

            <button className="p-4 uppercase bg-yellow-200 rounded text-emerald hover:bg-red-100" type="submit">Submit
            </button>

        </form>
    );
}

function FormInputSection({children}) {
    return (
        <div className="flex flex-col justify-between">
            {children}
        </div>
    );
}