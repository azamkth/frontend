import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Children from './Children';
import ChildProfile from './ChildProfile';

function ChildNavigationStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="Children"
                component={Children}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="ChildProfile"
                component={ChildProfile}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}
export default ChildNavigationStack;