import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import Screen from '../Components/Screen/Screen'
import * as Yup from "yup";
import { Form, FormField, FormImagePicker, SubmitButton } from '../Components/Forms';
import colors from '../config/colors';
import AppText from '../Components/AppText/AppText';
import CompanyAuth from '../config/auth';



const validationSchema = Yup.object().shape({
  Company_name:Yup.string().required().min(1).label("Company Name"),
  Company_Contact:Yup.string().required().label("Company Contact"),
  Company_address:Yup.string().required().label("Company Address"),
  Company_logo:Yup.string().required().label("Company Logo"),
  Company_email:Yup.string().required().label("Company Email"),
  Company_stamp:Yup.string().required().label("Company Stamp"),
  Owner_Signature:Yup.string().required().label("Owner_Signature")
})


export default function CreateCompany() {
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);
  const {logIn,logOut} = CompanyAuth();

  //handle submit
  const HandleSubmit = async({Company_Contact,Company_stamp,Company_name,Company_email,Company_address,Company_logo,Owner_Signature}) => {
    
    //Error Handle need to be done
    const Company = {Company_Contact,Company_stamp,Company_name,Company_email,Company_address,Company_logo,Owner_Signature};
    logIn(Company);
    // console.log(Company_Contact,Company_stamp,Company_name,Company_email,Company_address,Company_logo,Owner_Signature);
  }

  return (
  <>
   <Screen style={styles.container}>
      <ScrollView>
        <Form 
        initialValues={{
          Company_name:'',
          Company_Contact:'',
          Company_address:'',
          Company_logo:'',
          Company_email:'',
          Company_stamp:'',
          Owner_Signature:'',
        }}
        onSubmit={HandleSubmit}
        validationSchema={validationSchema}
        >
          <AppText style={{marginTop:10,marginBottom:10}}>Company Logo - </AppText>
          <FormImagePicker name="Company_logo" extra="large"/>
          <FormField icon="person" maxLength={255} name="Company_name" placeholder="Company Name" />
          <FormField icon="mail" maxLength={255} name="Company_email" placeholder="Company Email" />
          <FormField icon="perm-contact-cal" name="Company_Contact" placeholder="Company Contact" />
          <FormField icon="directions" name="Company_address" placeholder="Company Address" />
          <View style={styles.ImageContainer}>
              <View style={styles.ImageContaint}>
              <FormImagePicker name="Company_stamp" />
              <AppText style={{marginTop:-4}}>STAMP(.png)</AppText>
              </View>
              <View style={styles.ImageContaint}>
              <FormImagePicker name="Owner_Signature" />
              <AppText style={{marginTop:-4}}>SIGN(.png)</AppText>
              </View>
          </View>
          <SubmitButton title="Submit" />
        </Form>
      </ScrollView>
    </Screen>
  </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    paddingLeft:10,
    paddingRight:10,
    paddingTop:30,
    paddingBottom:10,
    backgroundColor:colors.gray
  },
  logo: {
    height: 150,
    width: 150,
    alignSelf:"center"
  },
  ImageContainer:{
    marginTop:10,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  ImageContaint:{
    flexDirection:'column',
    textAlign:'center',
    textAlignVertical:'center',
    alignContent:'center',
    alignItems:'center'
  }
})