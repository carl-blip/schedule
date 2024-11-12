import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const clock = () => {
  const reminders = [
    { time: '08:00 AM', task: 'Morning Jog', deadline: '08:30 AM' },
    { time: '10:00 AM', task: 'Team Meeting', deadline: '11:00 AM' },
    { time: '12:00 PM', task: 'Lunch with With Friends', deadline: '01:00 PM' },
    { time: '03:00 PM', task: 'Project Deadline', deadline: '04:00 PM' },
    { time: '06:00 PM', task: 'Gym', deadline: '07:00 PM' },
    { time: '09:00 PM', task: 'Reading', deadline: '10:00 PM' },
  ];

  return (
    <ScrollView className="flex-grow p-5 bg-gray-100">
      <Text className="text-2xl font-bold mb-5 text-center">Reminders & Deadlines</Text>
      {reminders.map((item, index) => (
        <View key={index} className="p-4 mb-3 bg-white rounded-lg shadow-md">
          <Text className="text-lg text-gray-600">Start: {item.time}</Text>
          <Text className="text-xl font-medium mt-2">{item.task}</Text>
          <Text className="text-lg text-red-600 mt-1">Deadline: {item.deadline}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default clock;