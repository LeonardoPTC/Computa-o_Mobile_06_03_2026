import { Drawer } from "expo-router/drawer";
import React from "react";


export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="Home" options={{ title: "Home" }} />
      <Drawer.Screen name="teladois" options={{ title: "Tela Dois" }} />
    </Drawer>
  );
}
