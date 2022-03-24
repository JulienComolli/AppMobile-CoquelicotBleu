import { React, useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Title, Caption, Drawer } from "react-native-paper";

import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import { AuthContext } from "../context/AuthContext";

import SectionFleur from "./FlowerTabs";
import APropos from "../views/APropos/APropos";
import Deconnexion from "../views/Deconnexion/Deconnexion";

const DrawerNav = createDrawerNavigator();

export default function ApplicationDrawer() {
  return (
    <DrawerNav.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <DrawerNav.Screen name="Mes Fleurs" component={SectionFleur} />
      <DrawerNav.Screen name="A Propos" component={APropos} />
      <DrawerNav.Screen name="Deconnexion" component={Deconnexion} />
    </DrawerNav.Navigator>
  );
}

export function DrawerContent(props) {
  const { unlogUser, user } = useContext(AuthContext);

    console.log(user);
  return (
    <View style={{ flex: 1, backgroundColor: "#C9C9F5" }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 10 }}>
              <Avatar.Image
                source={{}}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>{ user.email.split('@')[0].toUpperCase() }</Title>
                <Caption style={styles.caption}>{ user.email }</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="flower-tulip-outline"
                  size={size}
                  color={color}
                />
              )}
              label="Mes Fleurs"
              onPress={() => {
                props.navigation.navigate("Mes Fleurs");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <AntDesign name="profile" size={size} color={color} />
              )}
              label="Profil"
              onPress={() => {
                props.navigation.navigate("Mes Fleurs");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            unlogUser();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
