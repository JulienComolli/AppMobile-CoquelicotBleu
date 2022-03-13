import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const NavTouchable = ({ text, screen, touchableStyle, textStyle }) => {
    const navigation = useNavigation();
    const styles = StyleSheet.create({
        touchable: { 
            ...defaultStyles.touchable,
            ...touchableStyle
        },
        text: {
            ...defaultStyles.text,
            ...textStyle
        }
    });
    return (
        <TouchableOpacity
            style={styles.touchable}
            onPress={() => { navigation.navigate(screen) }}
        >
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default NavTouchable;

const defaultStyles = {
    touchable: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
    },
    text: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 20
    }
};