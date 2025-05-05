import {
  Pressable,
  Text,
  View
} from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ScaledSheet } from 'react-native-size-matters';
import CustomHeader from "@/components/CustomHeader";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useTheme } from "@/context/ThemeContext";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router/build/useNavigation";
import { ScrollView } from "react-native-gesture-handler";
import { ThemedText } from "@/components/ThemedText";

const index = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  return (
    <CustomHeader>
      <ThemedView style={{ paddingTop: 0 }}>
        <ScrollView style={{ flexGrow: 1, paddingTop: 0 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 15,
              paddingVertical: 10,
            }}
          >
            <Pressable
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              <Entypo name="menu" size={34} color={Colors[theme].text} />
            </Pressable>
            <ThemedText >Dashboard</ThemedText>
          </View>

          <View style={[styles.cardStyle, { backgroundColor: Colors[theme].cartBg }]}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
              <ThemedText style={styles.cardTitle}>Meeting</ThemedText>
              <View style={{ borderRadius: 10, borderColor: "grey", borderWidth: 0.5, paddingHorizontal: 10 }}>
                <ThemedText style={styles.cardHeading}>+ 10%</ThemedText>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <ThemedText style={styles.cardSub}>Trending up this month </ThemedText>
              <MaterialIcons name="show-chart"  size={24} />
            </View>
          </View>

          <View style={[styles.cardStyle, { backgroundColor: Colors[theme].cartBg }]}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
              <ThemedText style={styles.cardTitle}>Task</ThemedText>
              <View style={{ borderRadius: 10, borderColor: "grey", borderWidth: 0.5, paddingHorizontal: 10 }}>
                <ThemedText style={styles.cardHeading}>- 20%</ThemedText>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <ThemedText style={styles.cardSub}>Down 20% this period </ThemedText>
              <MaterialIcons name="show-chart"  size={24} />
            </View>
          </View>

          <View style={[styles.cardStyle, { backgroundColor: Colors[theme].cartBg }]}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
              <ThemedText style={styles.cardTitle}>Meeting Type</ThemedText>
              <View style={{ borderRadius: 10, borderColor: "grey", borderWidth: 0.5, paddingHorizontal: 10 }}>
                <ThemedText style={styles.cardHeading}>- 20%</ThemedText>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <ThemedText style={styles.cardSub}>Strong user retention </ThemedText>
              <MaterialIcons name="show-chart"  size={24} />
            </View>
          </View>

          <View style={[styles.cardStyle, { backgroundColor: Colors[theme].cartBg }]}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
              <ThemedText style={styles.cardTitle}>Meeting Venue</ThemedText>
              <View style={{ borderRadius: 10, borderColor: "grey", borderWidth: 0.5, paddingHorizontal: 10 }}>
                <ThemedText style={styles.cardHeading}>- 20%</ThemedText>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <ThemedText style={styles.cardSub}>Strong user retention </ThemedText>
              <MaterialIcons name="show-chart"  size={24} />
            </View>
          </View>

          <View style={[styles.cardStyle, { backgroundColor: Colors[theme].cartBg }]}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
              <ThemedText style={styles.cardTitle}>Organization</ThemedText>
              <View style={{ borderRadius: 10, borderColor: "grey", borderWidth: 0.5, paddingHorizontal: 10 }}>
                <ThemedText style={styles.cardHeading}>- 20%</ThemedText>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <ThemedText style={styles.cardSub}>Strong user retention </ThemedText>
              <MaterialIcons name="show-chart"  size={24} />
            </View>
          </View>

          <View style={[styles.cardStyle, { backgroundColor: Colors[theme].cartBg }]}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
              <ThemedText style={styles.cardTitle}>Assigned Permission</ThemedText>
              <View style={{ borderRadius: 10, borderColor: "grey", borderWidth: 0.5, paddingHorizontal: 10 }}>
                <ThemedText style={styles.cardHeading}>- 20%</ThemedText>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <ThemedText style={styles.cardSub}>Strong user retention </ThemedText>
              <MaterialIcons name="show-chart" color="#000" size={24} />
            </View>
          </View>
        </ScrollView>
      </ThemedView>
    </CustomHeader>
  );
};

const styles = ScaledSheet.create({
  appBar: {
    fontSize: "18@ms",
    fontWeight: "500",
    
  },
  cardStyle: {
    backgroundColor: "#C9C9C9",
    borderRadius: 8,
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 5
  },
  cardTitle: {
    fontSize: "18@ms",
    fontWeight: '500'
  },
  cardSub: {
    fontSize: "16@ms",
    fontWeight: '500'
  },
  cardHeading: {
    fontSize: "14@ms",
    
    fontWeight: "normal"
  },
});
export default index;