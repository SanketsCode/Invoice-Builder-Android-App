import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik';
import ImageInput from '../../ImageInput/ImageInput';

interface ImagePickerData {
    name:string
}

export default function FormImagePicker({name}:ImagePickerData) {

    const {errors , setFieldValue, touched, values} : any = useFormikContext();


    const handleAdd = (uri:string | null) :void => {
        if(uri) setFieldValue(name,uri);
    }
  return (
   <>
        <ImageInput
         imageUri={values[name]}
         onChangeImage={handleAdd}
        />
   </>
  )
}

const styles = StyleSheet.create({})