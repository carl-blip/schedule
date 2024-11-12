import React, { useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

const homie = () => {
  const [classSchedule, setClassSchedule] = useState([
    {
        time: '06:00 PM - 08:30 PM',
        subject: 'SIA',
        instructor: 'Mr.Diomar Lariosa',
        location: 'Lecture Room',
        profilePic: 'https://lh3.googleusercontent.com/a-/ALV-UjVN0qEcy1va8ySZhQAbPNabCOgWmEOKobPyz4y6NiqcKeMuR41T=s75-c',
        
    },
    {
      time: '3:00 PM - 4:30 PM',
      subject: 'ED_Programming',
      instructor: 'Mr.Procoro Gonzaga',
      location: 'Lecture Room',
      profilePic: 'https://lh3.googleusercontent.com/a-/ALV-UjU4sUVrTekhU9Vvsg50xt1Emrbfrw6IkQr4YdZDotw3C1AdOuTa=s75-c',
    },
    {
      time: '09:00 AM - 11:30 AM',
      subject: 'SAD',
      instructor: 'Ms.Mitchillie Cabigas',
      location: 'Lecture Room 2nd Floor',
      profilePic: 'https://lh3.googleusercontent.com/a-/ALV-UjW6uZ0MukWVysOPYOas45-9m1wdxwiU_NjTNr3BepF3VmuvLZiP=s75-c',
    },
    {
      time: '04:30 PM - 05:30 PM',
      subject: 'App Dev',
      instructor: 'Mr.Daniel Bert Uy',
      location: 'Lecture Room',
      profilePic: 'https://lh3.googleusercontent.com/a-/ALV-UjWmIE0RMNcjtlzAGJ8T74wCJCfCr7gtY8LicW7O8zeU06NI4zvF=s75-c',
    },
    {
      time: '04:00 PM - 05:30 PM',
      subject: 'Ethics',
      instructor: 'Ms.Mitchillie Cabigas',
      location: 'Lecture',
      profilePic: 'https://lh3.googleusercontent.com/a-/ALV-UjW6uZ0MukWVysOPYOas45-9m1wdxwiU_NjTNr3BepF3VmuvLZiP=s75-c',
    },
    {
      time: '01:00 PM - 05:30 PM',
      subject: 'OS',
      instructor: 'Mr. Mauril Alferez',
      location: 'Lecture',
      profilePic: 'https://lh3.googleusercontent.com/a-/ALV-UjWuYAi-p8vzXFlfPXav7pxzkuPFbbyh0X7LnJdAhn1SCnsassFn=s75-c',
    },
    {
        time: '01:00 PM - 02:30 PM',
        subject: 'IT-Professinal',
        instructor: 'Mr. Mauril Alferez',
        location: 'Lecture Room',
        profilePic: 'https://lh3.googleusercontent.com/a-/ALV-UjWuYAi-p8vzXFlfPXav7pxzkuPFbbyh0X7LnJdAhn1SCnsassFn=s75-c',
    },
    {
        time: '04:00 PM - 05:30 PM',
        subject: 'REED',
        instructor: 'Mr. Michael Musico',
        location: 'Humss',
        profilePic: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg',
    },
    {
        time: '09:00 PM - 12:00 PM',
        subject: 'NET-2',
        instructor: 'Mr. Orland Jude Quindao',
        location: 'Lecture Room',
        profilePic: 'https://mynamepixs.com/uploads/cea5db243e2e34b8a452e25f03c914ee.jpg',
    },
  ]);

  return (
    <ScrollView className="flex-grow p-5 bg-gray-500">
      <Text className="text-2xl font-bold mb-5 text-center text-white">
         Your Class Schedules
      </Text>
      {classSchedule.map((classItem, index) => (
        <View
          key={index}
          className="p-4 mb-4 bg-white rounded-lg shadow-md"
        >
          
           <Image
            source={{ uri: classItem.profilePic, }}
            className="w-12 h-12 rounded-full mr-4"
          />

          <Text className="text-lg text-gray-600">Time: {classItem.time}</Text>
          <Text className="text-xl font-medium mt-2">{classItem.subject}</Text>
          <Text className="text-base text-gray-700 mt-1">
            Instructor: {classItem.instructor}
          </Text>
          <Text className="text-base text-gray-700 mt-1">
            Location: {classItem.location}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default homie;