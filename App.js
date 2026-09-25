import FactionListScreen from './screens/FactionListScreen';
import FactionDetailScreen from './screens/FactionDetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
const Stack = createNativeStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FactionList" component={FactionListScreen} options={{ title: 'Faction Factory' }} />
        <Stack.Screen name="FactionDetailScreen" component={FactionDetailScreen} options={{ title: 'Faction Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}