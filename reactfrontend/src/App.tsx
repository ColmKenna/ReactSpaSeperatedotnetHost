import React from 'react';
import Layout from "./Components/Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import Counter from "./Components/Counter";
import {FetchData} from "./Components/FetchData";


function App(){
    return (
        <BrowserRouter>
        <Layout>
            <Routes>
                <Route path='/'  element={<Home/>} />
                <Route path='/counter' element={<Counter/>} />
                <Route path='/fetch-data' element={<FetchData/>} />
            </Routes>
        </Layout>
        </BrowserRouter>);
}



export default App;