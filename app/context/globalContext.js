"use client";

import React, { useContext, createContext, useState, useEffect } from "react";

import axios from "axios";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [airQuality, setAirQuality] = useState({});
    const [forecast, setForecast] = useState({});
    const [fiveDayForecast, setFiveDayForecast] = useState({});

    const [activeCityCoords, setActiveCityCoords] = useState([
        28.675214646469954, 77.00556610518429
    ]);

    const fetchAirQuality = async (lat, lon) => {
        try {
            const res = await axios.get(`api/pollution?lat=${lat}&lon=${lon}`);
            setAirQuality(res.data);
        } catch (error) {
            console.log("Error fetching air quality data: ", error.message);
        }
    };

    const fetchForecast = async (lat, lon) => {
        try {
            const res = await axios.get(`api/weather?lat=${lat}&lon=${lon}`);
            setForecast(res.data);
        } catch (error) {
            console.log("Error fetching forecast data: ", error.message);
        }
    };

    const fetchFiveDayForecast = async (lat, lon) => {
        try {
            const res = await axios.get(`api/fiveday?lat=${lat}&lon=${lon}`);

            setFiveDayForecast(res.data);
        } catch (error) {
            console.log("Error fetching five day forecast data: ", error.message);
        }
    };

    useEffect(() => {
        fetchForecast(activeCityCoords[0], activeCityCoords[1]);
        fetchAirQuality(activeCityCoords[0], activeCityCoords[1]);
        fetchFiveDayForecast(activeCityCoords[0], activeCityCoords[1]);
    }, [activeCityCoords]);

    return (
        <GlobalContext.Provider
            value={{
                forecast,
                airQuality,
                fiveDayForecast,
                setActiveCityCoords
            }}
        >
            <GlobalContextUpdate.Provider
                value={{
                    setActiveCityCoords
                }}
            >
                {children}
            </GlobalContextUpdate.Provider>
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);