import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Button
				onPress={() => navigation.navigate('Notifications')}
				title="Go to notifications"
			/>
		</View>
	);
}

const NotificationsScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Button onPress={() => navigation.goBack()} title="Go back home" />
			<Button title="Open drawer" onPress={()=>navigation.openDrawer()} />
			<Button title="Close drawer" onPress={()=>navigation.closeDrawer()} />
		</View>
	);
}

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
	return (
		<Drawer.Navigator initialRouteName="Home">
			<Drawer.Screen name="Home" component={HomeScreen} />
			<Drawer.Screen name="Notifications" component={NotificationsScreen} />
		</Drawer.Navigator>
	);
}

export default DrawerNavigation;