import React, { useEffect, useState } from 'react';
import { BASE_URL, API_OPTIONS } from './constant/config';


const CryptoPrice = () => {
    const [coins, setCoins] = useState([]);
    const [page, setPage] = useState(0);
    const [isLoading,setIsLoading] = useState(true)

    const handleNext = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handlePrevious = () => {
        setPage(prevPage => prevPage - 1);
    };

    useEffect(() => {
        async function fetchingCoins() {
            setIsLoading(true)
            try {
                const res = await fetch(`${BASE_URL}&limit=10&offset=${page}`, API_OPTIONS);
                const { data } = await res.json();
                setCoins(data.coins);
                setIsLoading(false)
            } catch (err) {
                console.error(err);
            }

        }
        fetchingCoins();
    }, [page]);



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {coins.map(coin => (
                        <tr key={coin.uuid}>
                            <td>{coin.name}</td>
                            <td>{coin.price}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot></tfoot>
            </table>
            <button onClick={handlePrevious} disabled={page === 0 || isLoading}>Previous</button>
            <span>{page+1}</span>
            <button onClick={handleNext}  disabled={isLoading}>Next</button>
        </div>
    );
};

export default CryptoPrice;
