import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";

const Separator = () => <View style={styles.separator} />;

const signal = () => {
  // #1
  // fetch("http://localhost:3500/")
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     console.log("getting data from fetch", responseJson);
  //   })
  //   .catch((error) => console.log(error));
  /////////////
  //#2
  fetch("http://10.0.0.55:3500/", {
    method: "POST",
  })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
  // //////////////// #3
  //   const data = { location: "value" };
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   };
  //   fetch("http://10.0.0.55:3500/", options)
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       () => console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log("Error : " + err);
  //     });
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}></Text>
        <View style={styles.fixToText}>
          <Button title="Presione para cruzar" onPress={() => signal()} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
