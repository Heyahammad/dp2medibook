import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import TopDoctors from "../components/TopDoctors";
import Filter from "../components/Filter";
function Home() {
    return (
        <div>
            <Header />
            <Filter />
            <TopDoctors />
            <Banner />
        </div>
    );
}

export default Home;
