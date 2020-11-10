import * as React from 'react';
import { View, Text, Button } from 'react-native';
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem,
	useIsDrawerOpen,
} from '@react-navigation/drawer';

const Feed = ({ navigation }) => {
	const isDrawerOpen = useIsDrawerOpen();
	console.log("isDrawerOpen",isDrawerOpen);
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Feed Screen</Text>
			<Text>isDrawerOpen {String(isDrawerOpen)}</Text>
			<Button title="Open drawer" onPress={() => navigation.openDrawer()} />
			<Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
		</View>
	);
}

const Notifications = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Notifications Screen</Text>
		</View>
	);
}

const CustomDrawerContent = (props) => {
	return (
		<DrawerContentScrollView {...props}>
			<DrawerItemList {...props} />
			<DrawerItem
				label="Close drawer"
				onPress={() => props.navigation.closeDrawer()}
			/>
			<DrawerItem
				label="Toggle drawer"
				onPress={() => props.navigation.toggleDrawer()}
			/>
		</DrawerContentScrollView>
	);
}

const Drawer = createDrawerNavigator();

const CustomDrawerNavigation = () => {
	return (
		<Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
			<Drawer.Screen name="Feed" component={Feed} />
			<Drawer.Screen name="Notifications" component={Notifications} />
		</Drawer.Navigator>
	);
}

export default CustomDrawerNavigation;