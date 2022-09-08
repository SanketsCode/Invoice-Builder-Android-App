import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageInput from '../ImageInput/ImageInput';
import { useFormikContext } from 'formik';

export default function FormImagePicker({name,extra}) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const imageUri = values[name];
    const handleAdd = (uri) => {
        setFieldValue(name, uri);
      };   
 
  return (
    <>
    <ImageInput imageUri={imageUri} onChangeImage={handleAdd} extra={extra}/>
    </>
  )
}

const styles = StyleSheet.create({})