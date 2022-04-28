import React, { StyleSheet, Text, View, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import { Button } from 'react-native-paper';
import axios from 'axios';


const RateSong = ({ onAdd }) => {

  const [rating, setRating] = useState(5);

  const userid = 1; 
  const username = "mike";
  const song = "Grief";
  const artist = "Earl Sweatshirt"


  const onSubmit = (e) => {
    e.preventDefault();
    let item = {
      'username' : userid,
      'song' : song,
      'rating' : rating};   
    axios.post("https://mandm-reviews.herokuapp.com/api/songs/", item)
    .catch((err) => alert(err));       
  };

  return(
    <View style={{ flex: 1, padding: 24}}>
      <Text style={{fontSize: 50}}>Rate Song:</Text> 
      <Text style={{fontSize: 25}}>{song} by {artist}</Text>
      <View>
        <Text style={{fontSize: 25}}>Current User: {username}</Text>
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