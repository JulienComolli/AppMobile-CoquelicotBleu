import React, { useContext } from "react";
import GenericFleurScreen from "./GenericFleurScreen/GenericFleurScreen";

import { AuthContext } from "../../context/AuthContext";

const Home = () => {
    const { get_flowers } = useContext(AuthContext);

    return (
        <GenericFleurScreen get_flowers={get_flowers} />
    );
}

export default Home;