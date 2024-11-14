import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const Signup = () => {
  const router = useRouter();
  
  const handleSignup = () => {
    router.push('/homie'); 
    Alert.alert('Signup Successful', `Welcome to Your Schedules!`);
  };

  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full h-full flex-1 position-relative pl-6">
      </View>

      <View className="flex-1 w-full h-12 pl-4 pr-4 pb-24 mt-10">
        <Text className="mb-2 text-lg font-bold pl-4">Username</Text>
        <TextInput 
          placeholder='Username' 
          className="h-50 border border-white-400 rounded-lg p-4 w-full mb-4"
          autoCapitalize='none'
        />

        <Text className="mb-2 text-lg font-bold pl-4">Email</Text>
        <TextInput 
          placeholder='Email' 
          className="h-50 border border-white-400 rounded-lg p-4 w-full mb-4"
          keyboardType='email-address'
          autoCapitalize='none'
        />

        <Text className="mb-2 text-lg font-bold pl-4">Password</Text>
        <TextInput 
          placeholder='Password' 
          className="h-50 border border-white-400 rounded-lg p-4 w-full mb-4"
          secureTextEntry={true}
        />

        <Button 
          title="Sign Up" 
          onPress={handleSignup}
        />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
