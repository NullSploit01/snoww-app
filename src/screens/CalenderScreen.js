import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button, Platform } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key: 'workout', color: 'green'};

const CalendarScreen = () => {
  return (
    <View style={styles.container}>
      <Calendar onDayPress={day => {
        console.log(day)
      }} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: 10},
  heading: {fontSize: 38, textAlign: 'center', padding: 10}
});

export default CalendarScreen;
