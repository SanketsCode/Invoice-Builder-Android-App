import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Screen from '../Components/Screen/Screen'
import AppTextInput from '../Components/TextInput/TextInput'
import CircleButton from '../Components/CircleButton/CircleButton'
import BackButton from '../Components/BackButton/BackButton'
import Toast from 'react-native-root-toast'

export default function FeedBack({navigation}) {
  const [feedback,setFeedback] = useState('');

  const onSubmit = () => {
    if(!feedback){
      return Toast.show("Enter some details");
    }
    Toast.show("Your Feedback is Saved",Toast.durations.SHORT);
    setFeedback('');
  }

  return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        {/* <BackButton /> */}
        <AppTextInput
        placeholder="Feedback"
        icon="android"
        onChangeText={(e) => setFeedback(e)}
        value={feedback}
        />

<View style={{width:'50%',flexDirection:'row',justifyContent:'space-between'}}>
<BackButton onPress={() => navigation.goBack()}/>
<CircleButton onPress={() => onSubmit()} />
</View>

      </View>

  )
}

const styles = StyleSheet.create({})