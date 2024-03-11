import {Text, SafeAreaView, StyleSheet, StatusBar} from "react-native";

const Test  = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <StatusBar barStyle="light-content" backgroundColor='black'/>
            <Text style ={{color:'white'}}>Test</Text>
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

export default Test;