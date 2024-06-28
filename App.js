import * as React from "react";
import { Text, View, Button, Image, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import cac from "./cactas";
import luck from "./lucky";
import mini from "./minimal";
import airr from "./air";
import inhome from "./luckyinhome";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Card, Title, Paragraph } from "react-native-paper";
import { LogBox, LogBoxNotification } from "react-native-web-log-box";

console.disableYellowBox = true;

LogBox.ignoreLogs(["Keywords or regexes ignore"]);
LogBox.install();

function HomeScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/font/FC-Subject/FC-black.ttf"),
    "Inter-Black-bold": require("./assets/font/FC-Subject/FC-bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <ScrollView>
        <Text
          style={{
            fontSize: 23,
            padding: 14,
            fontFamily: "Inter-Black-bold",
            textAlign: "center",
          }}
        >
          พันธุ์ไม้ที่น่าสนใจ
        </Text>
        {/* <Image
        style={{ width: 500, height: 200 }}
        source={require("./assets/cactas.jpg")}
      /> */}

        <Card>
          <Card.Content
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Title style={{ fontFamily: "Inter-Black" }}>
              กระบองเพชร (Cactas)
            </Title>
            <Paragraph>----------</Paragraph>
          </Card.Content>
          <Card.Cover source={require("./assets/cactas-2.jpg")} />
          <Card.Actions
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Button
              title="🌵 กระบองเพชร (Cactas) 🌵"
              color="#5F9EA0"
              onPress={() => navigation.navigate("กระบองเพชร (Cactas)")}
            />
          </Card.Actions>
        </Card>

        {/* style={{ flex: 1 ,justifyContent: "center" }} */}
        <Card>
          <Card.Content
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Title style={{ fontFamily: "Inter-Black" }}>ต้นไม้มงคล</Title>
            <Paragraph>----------</Paragraph>
          </Card.Content>
          <Card.Cover source={require("./assets/luckyyy.png")} />
          <Card.Actions
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Button
              title="🌱 ต้นไม้มงคล 🌱"
              color="#5F9EA0"
              onPress={() => navigation.navigate("ต้นไม้มงคล")}
            />
          </Card.Actions>
        </Card>

        <Card>
          <Card.Content
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Title style={{ fontFamily: "Inter-Black" }}>
              ต้นไม้แต่งห้องมินิมอล
            </Title>
            <Paragraph>----------</Paragraph>
          </Card.Content>
          <Card.Cover source={require("./assets/mini.png")} />
          <Card.Actions
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Button
              title="🌾 ต้นไม้แต่งห้องมินิมอล 🌾"
              color="#5F9EA0"
              onPress={() => navigation.navigate("ต้นไม้แต่งห้องมินิมอล")}
            />
          </Card.Actions>
        </Card>

        <Card>
          <Card.Content
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Title style={{ fontFamily: "Inter-Black" }}>ต้นไม้ฟอกอากาศ</Title>
            <Paragraph>----------</Paragraph>
          </Card.Content>
          <Card.Cover source={require("./assets/air.png")} />
          <Card.Actions
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Button
              title="🌳 ต้นไม้ฟอกอากาศ 🌳"
              color="#5F9EA0"
              onPress={() => navigation.navigate("ต้นไม้ฟอกอากาศ")}
            />
          </Card.Actions>
        </Card>

        <Card>
          <Card.Content
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Title style={{ fontFamily: "Inter-Black" }}>
              ต้นไม้มงคลปลูกในบ้าน
            </Title>
            <Paragraph>----------</Paragraph>
          </Card.Content>
          <Card.Cover source={require("./assets/luckinhome.png")} />
          <Card.Actions
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Button
              title="🍀 ต้นไม้มงคลปลูกในบ้าน 🍀"
              color="#5F9EA0"
              onPress={() => navigation.navigate("ต้นไม้มงคลปลูกในบ้าน")}
            />
          </Card.Actions>
        </Card>
      </ScrollView>
    </View>
  );
}

function DetailscactasScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detailscactas Screen</Text>
      <Button
        title="กระบองเพชร (Cactas)"
        onPress={() => navigation.push("กระบองเพชร (Cactas)")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      {/* <Button title="Go back" onPress={() => navigation.goBack("HomeScreen")} /> */}
    </View>
  );
}

function DetailsluckyScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detailslucky Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("ต้นไม้มงคล")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      {/* <Button title="Go back" onPress={() => navigation.goBack("HomeScreen")} /> */}
    </View>
  );
}

function DetailsminimalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detailsminimal Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("ต้นไม้แต่งห้องมินิมอล")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      {/* <Button title="Go back" onPress={() => navigation.goBack("HomeScreen")} /> */}
    </View>
  );
}

function DetailsairScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>DetailsairScreen Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("ต้นไม้ฟอกอากาศ")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      {/* <Button title="Go back" onPress={() => navigation.goBack("HomeScreen")} /> */}
    </View>
  );
}

function DetailsluckyinhomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>DetailsluckyinhomeScreen Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("ต้นไม้มงคลปลูกในบ้าน")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      {/* <Button title="Go back" onPress={() => navigation.goBack("HomeScreen")} /> */}
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="กระบองเพชร (Cactas)" component={cac} />
        <Stack.Screen name="ต้นไม้มงคล" component={luck} />
        <Stack.Screen name="ต้นไม้แต่งห้องมินิมอล" component={mini} />
        <Stack.Screen name="ต้นไม้ฟอกอากาศ" component={airr} />
        <Stack.Screen name="ต้นไม้มงคลปลูกในบ้าน" component={inhome} />
      </Stack.Navigator>
      <LogBoxNotification />
    </NavigationContainer>
  );
}

export default App;
