import { LaunchScreen } from '../screens/launch/index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LandingPage } from '../screens/auth/Landing/index';

type RootStackNavigatorParamsList = {
    LaunchScreen: undefined;
    LandingPage: undefined;
};
const Stack = createNativeStackNavigator<RootStackNavigatorParamsList>();

const AppNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LaunchScreen">
                <Stack.Screen
                    name="LaunchScreen"
                    component={LaunchScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                 <Stack.Screen
                    name="LandingPage"
                    component={LandingPage}
                    options={{
                        headerShown: false,
                    }}
                />
                {/* Add more screens as needed */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
