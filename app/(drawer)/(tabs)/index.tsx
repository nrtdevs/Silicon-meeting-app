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
import { useQuery } from "@apollo/client";
import { GetMeetingDashboardDocument } from "@/graphql/generated";

const index = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const { loading, error, data } = useQuery(GetMeetingDashboardDocument, {
    variables: { filters: {} },
  });
  if (loading) return <ThemedText>Loading...</ThemedText>;
  if (error) return <ThemedText>Error: {error.message}</ThemedText>;
  const userCount = data?.getMeetingDashboard || {};
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
              <ThemedText style={styles.cardTitle}>Active Meetings</ThemedText>
              <View style={{ borderRadius: 10, borderColor: "grey", borderWidth: 0.5, paddingHorizontal: 10 }}>
                <ThemedText style={styles.cardHeading}>+ 10%</ThemedText>
              </View>
            </View>
            <ThemedText style={styles.cardSub}>{userCount.activeMeetings}</ThemedText>
          </View>

          <View style={[styles.cardStyle, { backgroundColor: Colors[theme].cartBg }]}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
              <ThemedText style={styles.cardTitle}>Total Meetings</ThemedText>
              <View style={{ borderRadius: 10, borderColor: "grey", borderWidth: 0.5, paddingHorizontal: 10 }}>
                <ThemedText style={styles.cardHeading}>- 20%</ThemedText>
              </View>
            </View>
            <ThemedText style={styles.cardSub}>{userCount.totalMeetings}</ThemedText>
          </View>

          <View style={[styles.cardStyle, { backgroundColor: Colors[theme].cartBg }]}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
              <ThemedText style={styles.cardTitle}>Today Meetings</ThemedText>
              <View style={{ borderRadius: 10, borderColor: "grey", borderWidth: 0.5, paddingHorizontal: 10 }}>
                <ThemedText style={styles.cardHeading}>- 20%</ThemedText>
              </View>
            </View>
            <ThemedText style={styles.cardSub}>{userCount.todayMeeting}</ThemedText>
          </View>

          <View style={[styles.cardStyle, { backgroundColor: Colors[theme].cartBg }]}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
              <ThemedText style={styles.cardTitle}>Upcoming Meeting</ThemedText>
              <View style={{ borderRadius: 10, borderColor: "grey", borderWidth: 0.5, paddingHorizontal: 10 }}>
                <ThemedText style={styles.cardHeading}>- 20%</ThemedText>
              </View>
            </View>
            <ThemedText style={styles.cardSub}>{userCount.upComingMeeting}</ThemedText>
          </View>

          <View style={[styles.cardStyle, { backgroundColor: Colors[theme].cartBg }]}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
              <ThemedText style={styles.cardTitle}>Complete Meetings</ThemedText>
              <View style={{ borderRadius: 10, borderColor: "grey", borderWidth: 0.5, paddingHorizontal: 10 }}>
                <ThemedText style={styles.cardHeading}>- 20%</ThemedText>
              </View>
            </View>
            <ThemedText style={styles.cardSub}>{userCount.completedMeeting}</ThemedText>
          </View>

          <View style={[styles.cardStyle, { backgroundColor: Colors[theme].cartBg }]}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
              <ThemedText style={styles.cardTitle}>Inactive Meetings</ThemedText>
              <View style={{ borderRadius: 10, borderColor: "grey", borderWidth: 0.5, paddingHorizontal: 10 }}>
                <ThemedText style={styles.cardHeading}>- 20%</ThemedText>
              </View>
            </View>
            <ThemedText style={styles.cardSub}>{userCount.inactiveMeetings}</ThemedText>
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