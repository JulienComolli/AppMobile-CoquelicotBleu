import React, { useContext } from "react";
import GenericFleurScreen from "./GenericFleurScreen/GenericFleurScreen";

import { AuthContext } from "../../context/AuthContext";

const FavView = () => {
    const { get_favorite_flowers } = useContext(AuthContext);

    return (
        <GenericFleurScreen get_flowers={get_favorite_flowers} />
    );
}

export default FavView;