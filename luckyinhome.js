import { useEffect, useState, React } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
  Button,
} from "react-native";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue } from "firebase/database";
import firebase from "firebase/compat/app";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Card } from "react-native-paper";

var firebaseConfig = {
  apiKey: "AIzaSyCiEJZ4E9u-sGyDU3ufQPFfnS9Uv_RYWqs",
  authDomain: "mobilweb-project.firebaseapp.com",
  databaseURL:
    "https://mobilweb-project-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mobilweb-project",
  storageBucket: "mobilweb-project.appspot.com",
  messagingSenderId: "223109190780",
  appId: "1:223109190780:web:876bd0b37679f5efda65f9",
  measurementId: "G-9YSH768NLF",
};

// Initialize Firebase

function renderInhome({ item }) {
  return (
    <View>
      <Text
        style={{
          fontSize: 15,
          padding: 5,
          fontFamily: "Inter-Black",
          lineHeight: 23,
        }}
      >
        🍀 ชื่อ : {item.tree} {"\n"}☀ แสงแดด : {item.sunlight} {"\n"}💧 การรดน้ำ
        : {item.water} {"\n"}🔶 รายละเอียด : {item.detail}{"\n"}
      </Text>
    </View>
  );
}
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const inhome = () => {
  const [luckyin, setname] = useState(null);
  const navigation = useNavigation();
  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "luckyinhome/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setname(data);
      console.log(data);
    });
  }, []);
  return (
    <View style={styles.container}>
      {/* <Text style={{ fontWeight: "bold", fontSize: 30, paddingBottom: 10 }}>
      ต้นไม้มงคลปลูกในบ้าน
      </Text> */}
      <ScrollView style={styles.scrollView}>
        <Card style={{ marginBottom: 30 }}>
          <Card.Cover source={require("./assets/luckyinhome.png")} />
        </Card>

        <FlatList data={luckyin} renderItem={renderInhome}></FlatList>
        {/* <Button title="Go back" onPress={() => navigator.goBack()} /> */}
        {/* <Text>{JSON.stringify(cactas)}</Text> */}
      </ScrollView>
    </View>
  );
};
export default inhome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingTop: 10,
    lineHeight: 20,
  },
  stretch: {
    width: 370,
    height: 250,
    resizeMode: "contain",
  },
  scrollView: {
    marginHorizontal: 5,
    paddingHorizontal: 5,
  },
});
