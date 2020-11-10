import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation, extraData }) {
	const { id } = extraData;
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Text>{id}</Text>
			<Button
				title="Go to Details"
				onPress={() => navigation.navigate('Details', { foo: "bar", id: 2 })}
			/>
		</View>
	);
}

function DetailsScreen({ route, navigation }) {
	const { foo, id } = route.params;
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Details Screen</Text>
			<Text>{id}</Text>
			<Text>{foo}</Text>
			<Button
				title="Go to Details... again"
				onPress={() => navigation.push('Details', { id: Math.floor(Math.random() * 100)})}
			/>
			<Button title="Go back" onPress={() => navigation.goBack()} />
			<Button
				title="Go back to first screen in stack"
				onPress={() => navigation.popToTop()}
			/>
		</View>
	);
}

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" options={{ title: 'Overview' }}>
					{props => <HomeScreen {...props} extraData={{ id: 1 }} />}
				</Stack.Screen>
				<Stack.Screen name="Details" component={DetailsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;