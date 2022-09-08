import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../../Components/Screen/Screen'
import * as Yup from "yup";

interface CompanyData {
  Company_name: string;
  Company_email: string;
  Company_phone: string;
  Company_Address: string;
  Company_logo: string;
  Company_sign: string;
  Company_stamp: string;
}

const validationSchema = {
  Company_name: Yup.string().min(1).label("Name").required(),
  Company_email: Yup.string().email().required().,
}

export default function CreateCompany() {
  return (
    <Screen>
      <Text>CreateCompany</Text>
    </Screen>
  )
}

