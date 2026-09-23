import TaskListScreen from './screens/TaskListScreen';
import TaskDetailScreen from './screens/TaskDetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
const Stack = createNativeStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TaskList" component={TaskListScreen} options={{ title: 'Uppgifter' }} />
        <Stack.Screen name="TaskDetail" component={TaskDetailScreen} options={{ title: 'Detaljer' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}