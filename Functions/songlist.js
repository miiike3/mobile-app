import React, { Text, View, Button, Pressable, AsyncStorage } from 'react-native';
import { useEffect, useState } from 'react';
import { DataTable } from 'react-native-paper';
import axios from 'axios';

const SongList = ({ onAdd }) => {
    const [songs, setSongs] = useState([]);
    const [ratings, setRatings] = useState([]);
    const [isLoading, setLoading] = useState(true);
  
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

    const handleDelete = (item) => {
      axios.delete(`http://localhost:8000/api/songs/${item}/`).then((res) => refreshSongs()).catch((err) => alert(err));
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
        <Pressable
          onPress={() => refreshSongs()}
        >
          <Text>Refresh Songs</Text>
        </Pressable>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Song</DataTable.Title>
                <DataTable.Title>Artist</DataTable.Title>
                <DataTable.Title>Average Rating</DataTable.Title>
                <DataTable.Title>Delete Songs</DataTable.Title>
              </DataTable.Header>
                {songs.map((song, index) => { 
                  return (
                  <DataTable.Row>
                    <DataTable.Cell>{song.title}</DataTable.Cell>
                    <DataTable.Cell>{song.artist}</DataTable.Cell>
                    <DataTable.Cell>{song.rating_average}</DataTable.Cell>
                    <DataTable.Cell
                      onPress={() => handleDelete(song.title)}
                    >Delete</DataTable.Cell>
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