import { Drawer } from "expo-router/drawer";
import React from "react";


export default function RootLayout() {
  return (
    <Drawer screenOptions={{ title: "Minha Calculadora" }}>
      <Drawer.Screen
        name="index" 
        options={{ drawerLabel: "Início" }}
      />

      <Drawer.Screen
        name="soma" 
        options={{ drawerLabel: "Soma" }}
      />

      <Drawer.Screen
        name="subtracao" 
        options={{ drawerLabel: "Subtração" }}
      />

      <Drawer.Screen
        name="multiplicacao" 
        options={{ drawerLabel: "Multiplicação" }}
      />

      <Drawer.Screen
        name="divisao" 
        options={{ drawerLabel: "Divisão" }}
      />
    </Drawer>
  );
}
