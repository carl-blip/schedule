import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

const teacher = () => {
  const sessions = [
    {
      time: '10:00 AM',
      participant: 'Joebert Canceller',
      subject: 'Math Tutoring',
      details: 'Discussing calculus problems.',
    },
    {
      time: '12:00 PM',
      participant: 'Jillcris Smith',
      subject: 'Project Meeting',
      details: 'Reviewing project timeline.',
    },
    {
      time: '02:00 PM',
      participant: 'Danilo Villarosa',
      subject: 'Code Review',
      details: 'Reviewing React Native project.',
    },
    {
      time: '04:00 PM',
      participant: 'Austine Kino',
      subject: 'English Tutoring',
      details: 'Going over essay writing techniques.',
    },
    {
      time: '06:00 PM',
      participant: 'Mayor',
      subject: 'Career Advice',
      details: 'Discussing career options in tech.',
    },
  ];

  return (
    <ScrollView className="flex-grow p-5 bg-gray-100">
      <Text className="text-2xl font-bold mb-5 text-center">
        One-on-One Sessions
      </Text>
      {sessions.map((session, index) => (
        <View
          key={index}
          className="p-4 mb-4 bg-white rounded-lg shadow-md"
        >
          <Text className="text-lg text-gray-600">Time: {session.time}</Text>
          <Text className="text-xl font-medium mt-2">
            Participant: {session.participant}
          </Text>
          <Text className="text-lg font-semibold mt-1">Subject: {session.subject}</Text>
          <Text className="text-base text-gray-700 mt-1">Details: {session.details}</Text>

          {/* A button for additional actions like reschedule or cancel */}
          <View className="mt-3">
            <TouchableOpacity className="bg-blue-500 p-2 rounded">
              <Text className="text-white text-center">Reschedule</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default teacher;
