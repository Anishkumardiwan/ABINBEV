import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import data from '../assets/data.json';

const CountryData = createContext();

const SelectContext = ({ children }) => {

    const [market, setMarket] = useState('Select');
    const [theme, setTheme] = useState('All Themes');
    const [brand, setBrand] = useState('All Brands');
    const [createdBy, setCreatedBy] = useState('Select');
    const [year, setYear] = useState('Select');
    const [period, setPeriod] = useState('Select');
    const [countryData, setCountryData] = useState([...data]);
    const [filterData, setFilterData] = useState([...data]);

    console.log("Context Page");
    // console.log(filterData);

    return (
        <CountryData.Provider value={{
            market, theme, brand, createdBy, year, period, countryData,
            filterData, setMarket, setTheme, setBrand, setCreatedBy,
            setYear, setPeriod, setCountryData, setFilterData
        }}>
            {children}
        </CountryData.Provider>
    )
}

export const CountryState = () => {
    return useContext(CountryData);
}

export default SelectContext;