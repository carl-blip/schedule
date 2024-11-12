import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect, focused} from 'expo-router'
import { icons } from '../../constants'

const TabIcon= ({icon,color,name,focused}) => {
  return (
    <View>
      <Image
      source={icon}
      resizeMode="contain"
      className="w-7 h-7"
      tintColor={color}
      />
    </View>
  )
}



const TabsLayout = () => {
  return (
   <>
     <Tabs
        screenOptions={{
          tabBarStyle: { backgroundColor: '#36454F' },
        }}
      >
        <Tabs.Screen
            name="homie"
            options={{
            title:'Home',
            headerShown:false,
            tabBarIcon: ({color,focused}) =>(
                <TabIcon
                icon={icons.home}
                color={color}
                name="Homie"
                focused={focused}
                />
            )
         }}
            /> //end of home icon

        <Tabs.Screen
        name="calendar"
        options={{
          title:'Calendar',
          headerShown:false,
          tabBarIcon: ({color,focused}) =>(
            <TabIcon
            icon={icons.calendar}
            color={color}
            name="Calendar"
            focused={focused}
            />
          )
        }}
        /> //end of calendar icon
        <Tabs.Screen
        name="classroom"
        options={{
          title:'Classroom',
          headerShown:false,
          tabBarIcon: ({color,focused}) =>(
            <TabIcon
            icon={icons.classroom}
            color={color}
            name="Classroom"
            focused={focused}
            />
          )
        }}
        />//end of classroom icon
         <Tabs.Screen
        name="teacher"
        options={{
          title:'Teacher',
          headerShown:false,
          tabBarIcon: ({color,focused}) =>(
            <TabIcon
            icon={icons.teacher}
            color={color}
            name="Teacher"
            focused={focused}
            />
          )
        }}
        /> //end of teacher icons
        <Tabs.Screen
        name="clock"
        options={{
          title:'Clock',
          headerShown:false,
          tabBarIcon: ({color,focused}) =>(
            <TabIcon
            icon={icons.clock}
            color={color}
            name="Clock"
            focused={focused}
            />
          )
        }}
        /> //end of clock icon
    </Tabs>
   </>
  )
}

export default TabsLayout