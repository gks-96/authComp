import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./Details";
import List from "./List";


const InsideStack = createNativeStackNavigator(); 

const InsideStackLayout =() =>{

    return(
        <InsideStack.Navigator>
            <InsideStack.Screen name = "List Details" component ={List} />
            <InsideStack.Screen name = "Details" component ={Details} />
        </InsideStack.Navigator>
    )

}



export default InsideStackLayout; 