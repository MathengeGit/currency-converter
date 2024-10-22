import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
    const [data, setData] = useState({});
    const apiKey = "fd13a158c16ea4696016c069"; // Your API key

    useEffect(() => {
        // Fetch exchange rates for the base currency
        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch exchange rates");
                }
                return response.json();
            })
            .then((response) => setData(response.conversion_rates)) // Assuming the API returns a "conversion_rates" object
            .catch((error) => {
                console.error(error);
                setData({}); // Optionally handle error state
            });
    }, [baseCurrency]);

    return data;
}

export default useCurrencyInfo;
