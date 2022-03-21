import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key')
    console.log(value);
    await AsyncStorage.setItem('@storage_Key', new Date().toString())
  } catch (e) {
    // saving error
    console.log(e);
  }
}
storeData();