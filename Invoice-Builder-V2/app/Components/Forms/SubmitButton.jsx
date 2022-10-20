import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormikContext} from 'formik';
import Button from '../Button/Button';

export default function SubmitButton({title}) {
    const {handleSubmit} = useFormikContext();
  return (
   <Button  title={title} onPress={handleSubmit}/>
  )
}

const styles = StyleSheet.create({})