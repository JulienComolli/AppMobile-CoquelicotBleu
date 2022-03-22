import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const NavTouchable = ({ text, screen, touchableStyle, textStyle, onPress }) => {
    if(onPress == undefined || onPress == null) {
        const navigation = useNavigation();
        onPress = () => { navigation.navigate(screen) };
    }

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
            onPress={ onPress }
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