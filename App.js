import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigationScreen from './TabNavigationScreen';

const ProfileScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Profile screen</Text>
			<Button title="Go back" onPress={() => navigation.goBack()} />
		</View>
	);
}

const ScreenWithCustomHeader = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>ScreenWithCustomHeader</Text>
			<Button title="Go back" onPress={() => navigation.goBack()} />
		</View>
	);
}

const HomeScreen = ({ navigation, extraData }) => {
	const { id } = extraData;
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Text>{id}</Text>
			<Button
				title="Go to Details"
				onPress={() => navigation.navigate('Details', { foo: "bar", id: 2 })}
			/>
			<Button
				title="Go to ScreenWithCustomHeader"
				onPress={() => navigation.navigate('ScreenWithCustomHeader')}
			/>
			<Button
				title="Go to Profile"
				onPress={() =>
					navigation.navigate('Profile', { name: 'Custom profile header' })
				}
			/>
			<Button
				title="Update the title"
				onPress={() => navigation.setOptions({ title: 'Updated!' })}
			/>
			<Button
				onPress={() => navigation.navigate('MyModal')}
				title="Open Modal"
			/>
			<Button
				onPress={() => navigation.navigate('TabNavigationScreen')}
				title="TabNavigationScreen"
			/>
		</View>
	);
}

const LogoTitle = () => {
	return (
		<Image
			style={{ width: 40, height: 40 }}
			source={{ uri: "https://i.pinimg.com/564x/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" }}
		/>
	);
}

const DetailsScreen = ({ route, navigation }) => {
	const { foo, id } = route.params;
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Details Screen</Text>
			<Text>{id}</Text>
			<Text>{foo}</Text>
			<Button
				title="Go to Details... again"
				onPress={() => navigation.push('Details', { id: Math.floor(Math.random() * 100) })}
			/>
			<Button title="Go back" onPress={() => navigation.goBack()} />
			<Button
				title="Go back to first screen in stack"
				onPress={() => navigation.popToTop()}
			/>
		</View>
	);
}

const ModalScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text style={{ fontSize: 30 }}>This is a modal!</Text>
			<Button onPress={() => navigation.goBack()} title="Dismiss" />
		</View>
	);
}

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<RootStack.Navigator mode="modal" headerMode="none">
				<RootStack.Screen name="Main" component={MainStackScreen} />
				<RootStack.Screen name="MyModal" component={ModalScreen} />
			</RootStack.Navigator>
		</NavigationContainer>
	);
}

const MainStackScreen = () => {
	return (
		<MainStack.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerStyle: {
					backgroundColor: '#aaa110',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}}
		>
			<MainStack.Screen name="Home" options={{ title: 'Overview' }}>
				{props => <HomeScreen {...props} extraData={{ id: 1 }} />}
			</MainStack.Screen>
			<MainStack.Screen
				name="Details"
				options={{
					headerStyle: {
						backgroundColor: '#f4511e',
					},
					headerTintColor: '#fff',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
				component={DetailsScreen} />
			<MainStack.Screen
				name="Profile"
				component={ProfileScreen}
				options={({ route }) => ({ title: route.params.name })}
			/>
			<MainStack.Screen
				name="ScreenWithCustomHeader"
				component={ScreenWithCustomHeader}
				options={{
					headerTitle: props => <LogoTitle {...props} />,
					headerRight: () => (
						<Button
							onPress={() => alert('This is a button!')}
							title="Info"
							color="#fff"
						/>
					),
				}}
			/>
			<MainStack.Screen
				name="TabNavigationScreen"
				component={TabNavigationScreen}
			/>
		</MainStack.Navigator>
	);
}

export default App;