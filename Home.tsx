import {View, Text, SafeAreaView, StyleSheet, StatusBar} from "react-native";

const Home  = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <StatusBar barStyle="light-content" backgroundColor='black'/>
            <Text style ={{color:'white'}}>Home</Text>
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