import { View } from "react-native";


const AddFlowerView = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const globalVars = useContext(AppContext);
    return (
        <View style={styles.screen}>
            <View style={styles.form}>
                <Champ title="Nom d'utilisateur" placeholder="Nom d'utilisateur" setText={setEmail}/>
                <Champ title="Mot de passe" placeholder="**********" password={true} setText={setPassword}/>
                <NavTouchable text="log in" touchableStyle={ styles.addFlowerTouchable } onPress={async () => await globalVars.log_in(email, password)}/>
            </View>
        </View>
    );
}

const styles = {
    screen: {

    },
    form: {

    },
    addFlowerTouchable: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
}


export default AddFlowerView;