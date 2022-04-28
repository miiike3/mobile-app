import { StatusBar } from 'expo-status-bar';
import React, { StyleSheet, Text, View, Button } from 'react-native';
import { useEffect, useState } from 'react';
import { DataTable } from 'react-native-paper';

const SongList = ({ onAdd }) => {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [songs, setSongs] = useState([]);
    const [users, setUsers] = useState([]);
    const [rating, setRating] = useState(0);
    const [ratings, setRatings] = useState([])
    const [user, currentUser] = useState([]);
    const [song, currentSong] = useState([]);
    const [isLoading, setLoading] = useState(true);
  
    useEffect(() => {
      refreshSongs();
    }, []);
  
    const refreshSongs = () => {
      fetch("https://mandm-reviews.herokuapp.com/api/songs/")
        .then((res) => res.json())
        .then((json) => setSongs(json))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    };
  
    return (
      <View style={{ flex: 1, padding: 24}}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
        <Button title="Refresh" onPress={refreshSongs()}>Refresh</Button>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Song</DataTable.Title>
                <DataTable.Title>Artist</DataTable.Title>
                <DataTable.Title>Average Rating</DataTable.Title>
              </DataTable.Header>
                {songs.map((song, index) => { 
                  return (
                  <DataTable.Row>
                    <DataTable.Cell>{song.title}</DataTable.Cell>
                    <DataTable.Cell>{song.artist}</DataTable.Cell>
                    <DataTable.Cell>{song.rating_average}</DataTable.Cell>
                  </DataTable.Row>
                  )
                })}               
              </DataTable>
      </View>
    )}
    </View>
    );
}

export default SongList