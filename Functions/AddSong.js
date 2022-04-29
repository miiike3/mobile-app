import React, { StyleSheet, Text, View, TextInput, AsyncStorage } from 'react-native';
import { useEffect, useState } from 'react';
import { Appbar, Button } from 'react-native-paper';
import axios from 'axios';

const AddSong = ({ onAdd }) => {

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [rating, setRating] = useState(0);


  const onSubmit = (e) => {
    e.preventDefault();
    let item = {
      'title': title, 
      'artist': artist};   
    axios.post("http://localhost:8000/api/songs/", item)
    .then((res) => alert("Song Submitted."))
    .catch((err) => alert(err));   
  };

  return(
    <View style={{ flex: 1, padding: 24}}>
      <Text style={{fontSize: 50}}>Add Song</Text> 
      <View>
        <TextInput
          style={styles.input}
          onChangeText = {currentSong => setTitle(currentSong)}
          placeholder='Song Name' />
        <TextInput
          style={styles.input}
          onChangeText = {currentArtist => setArtist(currentArtist)}
          placeholder='Artist' />
        <Button
          onPress={onSubmit}
        ><Text style={{fontSize: 25}}>Add New Song</Text>
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

export default AddSong