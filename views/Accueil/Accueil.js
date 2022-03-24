import { View, FlatList, StyleSheet, Text } from 'react-native';
import Fleur from '../../components/Fleurs/Fleur'

const Home = () => {
  const items = [
    { description: 'Ma descriiiiii', nom: 'Coquelicot' },
    { description: 'Ma descriiiiii', nom: 'Rose' },
    { description: 'Ma descriiiiii', nom: 'Tulipe' },
    { description: 'Ma descriiiiii', nom: 'Lila' },
    { description: 'Ma descriiiiii', nom: 'Iris' },
  ];

  return (
    <View style={styles.homeStyle}>
      <FlatList
        style={styles.container}
        data={items}
        renderItem={({ item }) => ( <Fleur nom={item.nom} description={item.description} /> ) } /*<Fleur nom={item.nom} description={item.description} /> */ 
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