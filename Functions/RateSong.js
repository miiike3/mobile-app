import React, { StyleSheet, Text, View, TextInput, AsyncStorage } from 'react-native';
import { useEffect, useState } from 'react';
import { Button } from 'react-native-paper';
import axios from 'axios';


const RateSong = ({ onAdd }) => {

  const [rating, setRating] = useState(5);
  const [song, setTitle] = useState("");
  const [ratings, setRatings] = useState([]);

  const userid = 1;
  const username = "mike"
  // const userid = AsyncStorage.getItem('user_id');
  // const username = AsyncStorage.getItem('username');

  useEffect(() => {
    refreshSongs();
  }, []);

  const refreshSongs = () => {
    fetch("http://localhost:8000/api/songs/")
      .then((res) => res.json())
      .then((json) => setSongs(json))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
    fetch("http://localhost:8000/api/ratings/")
      .then((res) => res.json())
      .then((json) => setRatings(json))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let lst = []
    lst = ratings.filter(item => item.username == userid);
    lst = lst.filter(item => item.song == song);
    if (lst.length == 0) {
      let item = {
        'username' : userid,
        'song' : song,
        'rating' : rating};   
      axios.post("http://localhost:8000/api/ratings/", item)
      .then(alert("Rating Submitted"))
      .catch((err) => alert(err));   
    }
    else {
      for (let i in lst) {
        axios.put(`http://localhost:8000/api/ratings/${i.rating_id}/`, item)
        .then(alert("Rating Changes"))
        .catch((err) => alert(err));
    }    
  }
  };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   let item = {
  //     'username' : userid,
  //     'song' : song,
  //     'rating' : rating};   
  //   axios.post("http://localhost:8000/api/ratings/", item)
  //   .then(alert("Rating Submitted"))
  //   .catch((err) => alert(err));       
  // };

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