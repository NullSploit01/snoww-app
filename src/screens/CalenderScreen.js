import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { Button, Dialog, CheckBox, ListItem, Avatar } from "@rneui/themed";

const CalendarScreen = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [selectedDate, setDate] = useState(null);
  const toggleDialogVisibility = (date = null) => {
    setDialogVisible(!dialogVisible);
    console.log(date);
    setDate(date);
  };

  return (
    <View style={styles.container}>
      <Calendar onDayPress={(date) => toggleDialogVisibility(date)} />
      <Dialog
        isVisible={dialogVisible}
        onBackdropPress={toggleDialogVisibility}
      >
        <Dialog.Title title="Date" />
        <Text>{selectedDate ? selectedDate.dateString : null}</Text>
      </Dialog>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: 10 },
  heading: { fontSize: 38, textAlign: "center", padding: 10 },
});

export default CalendarScreen;
