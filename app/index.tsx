import { useNavigation } from "expo-router";
import { Button, Text, View } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

type Screens = {
  index: undefined;
  teladois: undefined;
  soma: undefined;
  subtracao: undefined;
  multiplicacao: undefined;
  divisao: undefined;
}

type NavigationProps = NativeStackNavigationProp<Screens>

export default function Index() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -100,
      }}
    >
      <View style={{
        margin: 20,
      }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Calculadora</Text>
      </View>
      <View>
        <Text style={{ fontSize: 15, marginBottom: 20 }}>Qual Operação você deseja realizar?</Text>
      </View>
      <View style={{ width: 350, flexDirection: "row", gap: 15, flexWrap: "wrap", alignContent: "center", justifyContent: "center" }}>
        <View style={{ width: 150 }}>
          <Button title="Somar" onPress={() => navigation.navigate("soma")} />
        </View>
        <View style={{ width: 150 }}>
          <Button title="Subtrair" onPress={() => navigation.navigate("subtracao")} />
        </View>
        <View style={{ width: 150 }}>
          <Button title="Multiplicar" onPress={() => navigation.navigate("multiplicacao")} />
        </View>
        <View style={{ width: 150 }}>
          <Button title="Dividir" onPress={() => navigation.navigate("divisao")} />
        </View>
      </View>
      {/* <Link href={"/teladois"}>Navegar</Link> */}
    </View>
  );
}



