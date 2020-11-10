import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Home!</Text>
			<Button
				title="Go to Settings"
				onPress={() => navigation.navigate('Settings')}
			/>
		</View>
	);
}

const SettingsScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Settings!</Text>
			<Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
		</View>
	);
}

const Tab = createBottomTabNavigator();

export default () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === 'Home') {
						iconName = focused
							? 'ios-information-circle'
							: 'ios-information-circle-outline';
					} else if (route.name === 'Settings') {
						iconName = focused ? 'ios-list-box' : 'ios-list';
					}

					// You can return any component that you like here!
					return <Ionicons name={iconName} size={size} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: 'tomato',
				inactiveTintColor: 'gray',
			}}
		>
			<Tab.Screen name="Home" component={HomeScreen} options={{ tabBarBadge: 3 }} />
			<Tab.Screen name="Settings" component={SettingsScreen} />
		</Tab.Navigator>
	);
}