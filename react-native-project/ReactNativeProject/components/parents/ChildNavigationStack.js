import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import ChildrenInfo from './ChildrenInfo';
import ChildProfile from './ChildProfile';

function ChildNavigationStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="ChildrenInfo"
                component={ChildrenInfo}
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