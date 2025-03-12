import { Tabs } from 'expo-router';
import colors from "~/components/Colors"; // Import the useFonts hook
import { enableTabHeader,getTabBarIcon,getHeaderTitle, getTabBarLabel,RouteName } from '~/components/GetTabScreenItems'; // Import the utility functions
import fonts from '~/components/Fonts';
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }: { route: { name: string } }) => ({

          
        tabBarStyle: {
        //   height: "10%", 
          borderTopLeftRadius: 20, // Add rounded corners to the top-left
          borderTopRightRadius: 20, // Add rounded corners to the top-right
     
        },
        tabBarHideOnKeyboard: true,
        // headerShown: false,
        // tabBarLabelStyle: {
        //   fontSize: 12, 
        //   marginTop: 4, 
        // },
        headerTitleAlign: "center",
          headerTitleStyle:{
            fontFamily:fonts.bold
          },
        tabBarActiveTintColor: colors.green, 
        tabBarInactiveTintColor: colors.black, 
        tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size: number }) =>
              getTabBarIcon(route.name as RouteName, focused), 
              tabBarLabel: getTabBarLabel(route.name as RouteName), 
              title:getHeaderTitle(route.name as RouteName),
              headerShown:enableTabHeader(route.name as RouteName)
      })}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="explore" />
      <Tabs.Screen name="cart" />
      <Tabs.Screen name="favorite" />
      <Tabs.Screen name="account" />
    </Tabs>
  );
} 