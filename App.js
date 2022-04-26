import { StatusBar } from 'expo-status-bar';
import React, { StyleSheet, Text, View, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { DataTable } from 'react-native-paper';
// import { useEffect, useState } from 'react/cjs/react.production.min';

export default function App() {

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

  const handleDelete = (item) => {
    fetch(`https://mandm-reviews.herokuapp.com/api/songs/${item}/`,
    { method: 'DELETE'})
    .then((res) => refreshSongs()).catch((err) => alert(err));
  }

  function selectSong(id) {
    let item = songs.filter((song) => song.title === id)[0];
    setTitle(item.title);
    setArtist(item.artist);
    currentSong([
        {
        title: item.title,
        artist: item.artist,
    }]);
}

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
                  <DataTable.Cell>
                    <Text onClick = {() => selectSong(song.title)}>Edit </Text>
                    <Text onClick = {() => handleDelete(song.title)}>Delete </Text>                  
                  </DataTable.Cell>
                </DataTable.Row>
                )
              })}
              
            </DataTable>
        {/* <FlatList
          data={songs}
          keyExtractor={({ title }, index) => title}
          renderItem={({ item }) => (
            <Text>{item.title + " " + item.artist + " " + item.rating_average}</Text>
          )}
        /> */}
    </View>
  )}
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// npm i react-native-table-component
