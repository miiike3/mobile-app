import React, { Text, View, Button, AsyncStorage } from 'react-native';
import { useEffect, useState } from 'react';
import { DataTable } from 'react-native-paper';

const SongList = ({ onAdd }) => {
    const [songs, setSongs] = useState([]);
    const [ratings, setRatings] = useState([]);
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
      fetch("https://mandm-reviews.herokuapp.com/api/ratings/")
        .then((res) => res.json())
        .then((json) => setRatings(json))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    };

    function avgrating(title)  {
        let lst = [];
        lst = ratings.filter(item => item.song == title);
        let lstrate = [];
        for (let rate in lst) {
          console.log(rate.rating)
          lstrate.push(rate.rating);
        };
        let len = 1 ;
        if (lst.length != 0) {
          len = lst.length;
        };
        let total = 0
        total = lstrate.reduce((a,b) => a+b, 0)
        console.log(lst, lstrate, total, len)
        return total/len
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
        {/* <Button title="Refresh" onPress={refreshSongs()}>Refresh</Button> */}
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