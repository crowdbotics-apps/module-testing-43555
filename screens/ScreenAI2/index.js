
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, FlatList } from 'react-native';

const songs = [
  { id: '1', title: 'Song 1', artist: 'Artist 1' },
  { id: '2', title: 'Song 2', artist: 'Artist 2' },
  { id: '3', title: 'Song 3', artist: 'Artist 3' },
  // Add more songs as needed
];

const SongAppHomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Song App</Text>
      </View>
      <FlatList
        data={songs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.songContainer}>
            <Image
              style={styles.songImage}
              source={{ uri: 'https://tinyurl.com/42evm3m3' }}
            />
            <View style={styles.songInfo}>
              <Text style={styles.songTitle}>{item.title}</Text>
              <Text style={styles.songArtist}>{item.artist}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 20,
    backgroundColor: '#1DB954',
  },
  headerText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  songContainer: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  songImage: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  songInfo: {
    justifyContent: 'center',
  },
  songTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  songArtist: {
    color: '#888888',
  },
});

export default SongAppHomePage;
