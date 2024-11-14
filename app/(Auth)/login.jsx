import { StyleSheet, Text, View, TextInput, Button,Image,Alert } from 'react-native'
import { useRouter } from 'expo-router'

const Login = () => {
  const router = useRouter();  
  const handleLogin = () => {
    router.push('/homie'); 
    Alert.alert('Login Successful', `Welcome to Your Schedules,`);
  }

  return (
    <View className="flex-1 items-center justify-center ">
      <View className=" w-full h-full flex-1 position-relative pl-6">
          
        </View>
        
        <View className="flex-1 w-full h-12 pl-4 pr-4 pb-24 mt-10">
      <Text className="mb-2 text-lg font-bold pl-4 ">Email</Text>
      <TextInput 
        placeholder='Email' 
        className=" h-50 border border-white-400 rounded-lg p-4 w-full mb-4"
        keyboardType='email-address'
        autoCapitalize='none'
      />
      
      <Text className="mb-2 text-lg font-bold pl-4 ">Password</Text>
      <TextInput 
        placeholder='Password' 
        className=" h-50 border border-white-400 rounded-lg p-4 w-full mb-4"
        secureTextEntry={true}
      />
      
      <Button 
        title="Login" 
        onPress={handleLogin}
      />
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})