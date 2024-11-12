import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styled } from 'nativewind'; // Import from nativewind

const calendar = () => {
  const schedule = [
    { time: '08:00 AM', event: 'Morning Jog' },
    { time: '09:00 AM', event: 'Breakfast' },
    { time: '10:00 AM', event: 'Team Meeting' },
    { time: '12:00 PM', event: 'Lunch' },
    { time: '02:00 PM', event: 'Project Work' },
    { time: '05:00 PM', event: 'Gym' },
    { time: '07:00 PM', event: 'Dinner' },
    { time: '09:00 PM', event: 'Reading' },
    { time: '11:00 PM', event: 'Sleep' },
  ];

  return (
    <ScrollView className="flex-grow p-5 bg-gray-100">
      <Text className="text-2xl font-bold mb-5 text-center">
        Overall Schedule
      </Text>
      {schedule.map((item, index) => (
        <View key={index} className="p-4 mb-3 bg-white rounded-lg shadow-md">
          <Text className="text-lg text-gray-600">{item.time}</Text>
          <Text className="text-xl font-medium mt-2">{item.event}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default calendar;