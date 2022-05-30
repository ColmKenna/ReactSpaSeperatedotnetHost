import React from "react";
import {useQuery} from "react-query";
import axios, {AxiosError} from "axios";


interface Forecast{
    summary: string;
    temperatureF: number;
    temperatureC: number;
    date: any;

}

const useFetchForecasts = () => {
    return useQuery<Forecast[], AxiosError>("houses", () =>
        axios.get(`weatherforecast`).then((resp) => resp.data)
    );
};

export function FetchData() {
    const {data, status, isSuccess} = useFetchForecasts();

    return (
        <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
            <tr>
                <th>Date</th>
                <th>Temp. (C)</th>
                <th>Temp. (F)</th>
                <th>Summary</th>
            </tr>
            </thead>
            <tbody>
            {data && data.map(forecast =>
                <tr key={forecast.date}>
                    <td>{forecast.date}</td>
                    <td>{forecast.temperatureC}</td>
                    <td>{forecast.temperatureF}</td>
                    <td>{forecast.summary}</td>
                </tr>
            )}
            </tbody>
        </table>);

}