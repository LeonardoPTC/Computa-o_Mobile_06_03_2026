import { useNavigation } from "expo-router";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
type Screens = {
    index: undefined;
    teladois: undefined;
}

type NavigationProps = NativeStackNavigationProp<Screens>

export default function Index() {
    const navigation = useNavigation<NavigationProps>();

    const [num1, setValor1] = useState('');

    const [num2, setValor2] = useState('');

    const [result, setResult] = useState(0);


    function calcularSubtracao(num1: string, num2:string) {
        const value1 = parseFloat(num1) || 0
        const value2 = parseFloat(num2) || 0
        

        setResult(value1 - value2);
    }
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <View style={{ margin: 20 }}>
                <Text style={{ fontSize: 30, fontWeight: "bold"}}>Subtração</Text>
            </View>
            <View>
                <Text>Digite o primeiro número a ser subtraído: </Text>
                <TextInput style = {{ width: '100%', height: '100%', borderColor: 'black', borderStyle: 'solid', borderWidth: 1, borderRadius: 5}} onChangeText={setValor1} ></TextInput>
            </View>

            <View>
                <Text>Digite o segundo número a ser subtraído: </Text>
                <TextInput style = {{ width: '100%', height: '100%', borderColor: 'black', borderStyle: 'solid', borderWidth: 1, borderRadius: 5}} onChangeText={setValor2}></TextInput>
            </View>
            <View style={{ margin: 20 }}><Text>Resultado: {result.toFixed(2)}</Text></View>
            <View>
                <Button title="Subtrair" onPress={() => calcularSubtracao(num1, num2)}/>
            </View>
        </View>
    );
}
