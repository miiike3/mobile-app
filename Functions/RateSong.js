import React, { StyleSheet, Text, View, TextInput, AsyncStorage } from 'react-native';
import { useEffect, useState } from 'react';
import { Button } from 'react-native-paper';
import axios from 'axios';


const RateSong = ({ onAdd }) => {

  const [rating, setRating] = useState(5);
  const [song, setTitle] = useState("");

  const userid = 1; 
  const username = "mike";


  const onSubmit = (e) => {
    e.preventDefault();
    let item = {
      'username' : userid,
      'song' : song,
      'rating' : rating};   
    axios.post("http://localhost:8000/api/ratings/", item)
    .then(alert("Rating Submitted"))
    .catch((err) => alert(err));       
  };

  return(
    <View style={{ flex: 1, padding: 24}}>
      <Text style={{fontSize: 50}}>Rate Song:</Text> 
      <Text style={{fontSize: 25}}>{song} </Text>
      <View>
        <Text style={{fontSize: 25}}>Current User: {username}</Text>
        <TextInput
          style={styles.input}
          onChangeText = {currentSong => setTitle(currentSong)}
          placeholder='Song Name' />
        <TextInput 
          style={styles.input}
          keyboardType="phone-pad"
          placeholder="Enter rating between 1 and 5" />
        <Button
          onPress={onSubmit}
        ><Text style={{fontSize: 25}}>Submit New Rating</Text>
        </Button>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 25,
  },

});

export default RateSong