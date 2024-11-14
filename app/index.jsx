import { Text, View,Image,} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


export default function App() {
  return (
      
      <View className="justify-center items-center text-center flex-1 bg-stone-500">
        <View className=" w-50 h-full flex-1 pt-10">
          <Image source={require('../assets/cutie.jpg')}></Image>
        </View>
        
        <View className="flex-1">
        <Text className="text-4xl font-rblack text-yellow-500">Welcome to your</Text>
        <Text className="text-5xl font-rblack text-blue-500">Schedule</Text>
        <Link href="/login" className="text-2xl font-bold text-white bg-black pl-12">Go to login</Link>
        <Link href="/sign-up" className="text-2xl font-bold text-white">Go to signup</Link>
        </View>
      </View>
      
    
  )
}