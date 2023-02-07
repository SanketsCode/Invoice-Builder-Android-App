import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Screen from "../components/Screen/Screen";
import * as Yup from "yup";
import {
  Form,
  FormImagePicker,
  FormField,
  SubmitButton,
} from "../components/Forms";
import AppText from "../components/AppText/AppText";
import colors from "../config/colors";
import CompanyAuth from "../config/auth";
import Firebase from "../config/firebase";
import ActivityIndicator from "../components/ActivityIndicator/Activityindicator";
import Toast from "react-native-root-toast";

const ValidationSchema = Yup.object().shape({
  Company_name: Yup.string().label("Company Name"),
  Company_Contact: Yup.string().label("Company Contact"),
  Company_address: Yup.string().label("Company Address"),
  Company_logo: Yup.string().label("Company Logo"),
  Company_email: Yup.string().label("Company Email"),
});

export default function CreateCompany() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { logIn } = CompanyAuth();

  const handleSubmit = async ({
    Company_Contact,
    Company_name,
    Company_email,
    Company_address,
    Company_logo,
  }) => {
    setLoading(true);
    if (
      !Company_Contact ||
      !Company_name ||
      !Company_email ||
      !Company_address
    ) {
      setLoading(false);
      return Toast.show("Please Fill All Fields", Toast.durations.SHORT);
    } else {
      try {
        let link = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
        if (Company_logo) {
          let response = await fetch(Company_logo);
          let blob = await response.blob();
          let ref = Firebase.storage()
            .ref()
            .child(`Invoice_User/${Date.now()}`);
          await ref.put(blob);
          link = await ref.getDownloadURL();
          Toast.show("Your Image Added", Toast.durations.SHORT);
        }

        console.log("Work");
        const Company = {
          Company_Contact,
          Company_name,
          Company_email,
          Company_address,
          Company_logo: link,
        };
        logIn(Company);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.container}>
        <Form
          initialValues={{
            Company_name: "",
            Company_address: "",
            Company_Contact: "",
            Company_email: "",
            Company_logo: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={ValidationSchema}
        >
          <AppText style={{ marginTop: 10, marginBottom: 10 }}>
            Company Logo -{" "}
          </AppText>
          <FormImagePicker name="Company_logo" extra="large" />
          <FormField
            icon="person"
            maxLength={255}
            name="Company_name"
            placeholder="Company Name"
          />
          <FormField
            icon="mail"
            maxLength={255}
            name="Company_email"
            placeholder="Company Email"
          />
          <FormField
            icon="perm-contact-cal"
            name="Company_Contact"
            placeholder="Company Contact"
          />
          <FormField
            icon="directions"
            name="Company_address"
            placeholder="Company Address"
          />
          <SubmitButton title="Submit" />
        </Form>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: colors.gray,
  },
  logo: {
    height: 150,
    width: 150,
    alignSelf: "center",
  },
  ImageContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  ImageContaint: {
    flexDirection: "column",
    textAlign: "center",
    textAlignVertical: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
