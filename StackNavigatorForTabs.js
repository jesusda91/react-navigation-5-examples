import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const DetailsScreen = ({ route }) => {
	const { text } = route.params;
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Details!</Text>
			<Text>{text}</Text>
		</View>
	);
}

const HomeScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Home screen</Text>
			<Button
				title="Go to Details"
				onPress={() => navigation.navigate('Details', { text: "From home" })}
			/>
		</View>
	);
}

const SettingsScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Settings screen</Text>
			<Button
				title="Go to Details"
				onPress={() => navigation.navigate('Details', { text: "From settings" })}
			/>
		</View>
	);
}

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home" component={HomeScreen} />
			<HomeStack.Screen name="Details" component={DetailsScreen} />
		</HomeStack.Navigator>
	);
}

const SettingsStack = createStackNavigator();

const SettingsStackScreen = () => {
	return (
		<SettingsStack.Navigator>
			<SettingsStack.Screen name="Settings" component={SettingsScreen} />
			<SettingsStack.Screen name="Details" component={DetailsScreen} />
		</SettingsStack.Navigator>
	);
}

const Tab = createBottomTabNavigator();

const StackNavigatorForTabs = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={HomeStackScreen} />
			<Tab.Screen name="Settings" component={SettingsStackScreen} />
		</Tab.Navigator>
	);
}

export default StackNavigatorForTabs;