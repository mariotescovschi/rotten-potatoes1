import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Home';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home2 from "../Home2";
import Home1 from "../Home1";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function AppNavigator() {
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

export default AppNavigator;