import {createStackNavigator} from '@react-navigation/stack';
import Test from "./Test";
import Home from "./Home";
import Home1 from "./Home1";
import Home2 from "./Home2";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeNavigator() {
    return (
        <Tab.Navigator initialRouteName={"Home"}
                       screenOptions={{
                           tabBarStyle: {
                               backgroundColor: 'black',
                               borderTopColor: 'black',
                           }}}>
            <Tab.Screen name="Home" component={Home}
                        options = {{headerShown: false, }}
            />
            <Tab.Screen name="Home1" component={Home1}
                        options = {{headerShown: false, }}
            />
            <Tab.Screen name="Home2" component={Home2}
                        options = {{headerShown: false, }}
            />
        </Tab.Navigator>
    );
}

function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeNavigator}
                options={{headerShown: false}}/>
            <Stack.Screen name="Test" component={Test} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

export default AppNavigator;