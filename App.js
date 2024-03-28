import {ImageBackground , Text, View } from 'react-native';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import hotBackground from "./assets/hot.png";
import { s } from "./App.style"

export default function App() {
  return (

        <ImageBackground source={hotBackground} style={s.containerw}>
            <View>
                <Text>Temperature</Text>
            </View>
        </ImageBackground>

  );
}

