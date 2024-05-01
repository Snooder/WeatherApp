import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import './MainComponent.css';

const MainComponent = () => {
    const [zipCodes, setZipCodes] = useState([])
    const [zipCode, setZipCode] = useState('')

    const getAllZipCodes = useCallback(async () => {
        // use nginx to redirect to right request - proper URL
        const data = await axios.get('/api/zipcodes/all')
        setZipCodes(data.data.rows.map(row => row.zipcode))
    }, []);

    const saveZipCode = useCallback(async (event) => {
        event.preventDefault();
        
        await axios.post('/api/zipcodes', {
            zipCode
        })

        setZipCode('');
        getAllZipCodes();
    }, [zipCode, getAllZipCodes]);

    useEffect(() => {
        getAllZipCodes();
    }, []);

    return (
        <div>
            <button onClick={getAllZipCodes}>Get all Values</button><br></br>
            <form className='form' onSubmit={saveZipCode}>
                <label>Zip Code: </label>
                <input value={zipCode} onChange={((event) => {setZipCode(event.target.value)})}></input>
                <button>Submit</button>
            </form>

            <span className='title'>Weather by ZipCode</span>
            <div className="values">
                {zipCodes.map(value => <div className="values">{value}</div>)}
            </div>
        </div>
    )
}

export default MainComponent;