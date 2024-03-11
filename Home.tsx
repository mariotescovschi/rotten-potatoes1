import {Text, SafeAreaView, StyleSheet, StatusBar, Pressable} from "react-native";
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

const Home  = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <SafeAreaView style = {styles.container}>
            <StatusBar barStyle="light-content" backgroundColor='black'/>
            <Pressable onPress = {() => navigation.navigate('Test')}>
                <Text style ={{color:'white'}}>Home</Text>
            </Pressable>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Home;