import React, { useState } from "react";
import { View, Text } from "react-native";
import BackButton from "../components/BackButton/BackButton";
import AppTextInput from "../components/TextInput/TextInput";
import Toast from "react-native-root-toast";
import CircleButton from "../components/CircleButton/CircleButton";

export default function Feedback({ navigation }) {
  const [feedback, setFeedback] = useState("");

  const onSubmit = () => {
    if (!feedback || feedback === "") {
      return Toast.show("Enter some Details");
    }
    Toast.show("Your Details Saved");
    setFeedback("");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppTextInput
        placeholder="Feedback"
        icon="android"
        onChangeText={(e) => setFeedback(e)}
        value={feedback}
      />
      <View
        style={{
          width: "50%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <BackButton onPress={() => navigation.goBack()} />
        <CircleButton onPress={() => onSubmit()} />
      </View>
    </View>
  );
}
