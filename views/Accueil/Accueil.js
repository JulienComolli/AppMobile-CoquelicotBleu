import React, { useContext, useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from 'react-native';
import Fleur from '../../components/Fleurs/Fleur'

import { AuthContext } from "../../context/AuthContext";

const Home = () => {
    const { get_flowers, delete_flower } = useContext(AuthContext);
    const [flowers, setFlowers] = useState(null);

    useEffect(async () => {
        setFlowers((await get_flowers())?.reverse());
        const interval = setInterval(async () => {
            setFlowers((await get_flowers())?.reverse());
        }, 1000);
          return () => clearInterval(interval);
    }, []);

    const delFlower = async (key) => {
        await delete_flower(key);
        setFlowers(flowers.filter((f) => { return f.key != key; }));
    };

    return (
        <View style={styles.homeStyle}>
            <FlatList
                style={styles.container}
                data={flowers}
                renderItem={({ item }) => (<Fleur nom={item.name} description={item.description} uri={"data:image/png;base64, "+item.img} delFlower={delFlower} flowerKey={item.key} />)}
                keyExtractor={item => item.key}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'skyblue',
    },
    homeStyle: {
        flex: 1
    }
})

export default Home;