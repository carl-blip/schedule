import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const App = () => {
  const groupActivities = [
    {
      time: '09:00 AM',
      activity: 'Coding Class',
      participants: ['Austine', 'Jillcris', 'Jiji'],
    },
    {
      time: '11:00 AM',
      activity: 'Math Study Group',
      participants: ['Gyan', 'Francis', 'John'],
    },
    {
      time: '01:00 PM',
      activity: 'Team Meeting',
      participants: ['Grace', 'Hannah', 'Isaac'],
    },
    {
      time: '03:00 PM',
      activity: 'Group Coding Session',
      participants: ['Austine', 'Jillcris', 'At ako carl'],
    },
    {
      time: '05:00 PM',
      activity: 'Dance Practice',
      participants: ['Mike', 'Nina', 'Olivia'],
    },
  ];

  return (
    <ScrollView className="flex-grow p-5 bg-gray-100">
      <Text className="text-2xl font-bold mb-5 text-center">
        Group Activities
      </Text>
      {groupActivities.map((activity, index) => (
        <View
          key={index}
          className="p-4 mb-3 bg-white rounded-lg shadow-md"
        >
          <Text className="text-lg text-gray-600">Time: {activity.time}</Text>
          <Text className="text-xl font-medium mt-2">{activity.activity}</Text>
          <Text className="text-lg font-semibold mt-2">Participants:</Text>
          <View className="flex-row flex-wrap">
            {activity.participants.map((participant, i) => (
              <Text key={i} className="text-base text-gray-700 mr-2">
                {participant}
              </Text>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default App;
