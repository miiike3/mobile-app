 import React, { StyleSheet, Text, View, TextInput } from 'react-native';
  import { useEffect, useState } from 'react';
  import { Appbar, Button } from 'react-native-paper';
  import axios from 'axios';
  
  const EditSong = ({ onAdd }) => {
  
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const songname = "Grief";
    const artistname = "Earl Sweatshirt"
  
  
    const onSubmit = (e) => {
      e.preventDefault();
      let item = {
        'title': title, 
        'artist': artist};   
      axios.put('https://mandm-reviews.herokuapp.com/api/songs/${title}', item)
      .catch((err) => alert(err));       
    };
  
    return(
      <View style={{ flex: 1, padding: 24}}>
        <Text style={{fontSize: 50}}>Edit Song</Text> 
        <View>
          <TextInput
            style={styles.input}
            onChangeText = {currentSong => setTitle(currentSong)}
            placeholder={songname} />
          <TextInput
            style={styles.input}
            onChangeText = {currentArtist => setArtist(currentArtist)}
            placeholder={artistname} />
          <Button
            onPress={onSubmit}
          ><Text style={{fontSize: 25}}>Edit Song</Text>
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
  
  export default EditSong