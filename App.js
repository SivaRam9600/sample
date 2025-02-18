import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

class App extends Component {
  render() {
    const isDarkMode = useColorScheme() === 'dark';

    return (
      <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}> 
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Test 12345</Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Step One</Text>
            <Text style={styles.sectionDescription}>Edit and customize your app.</Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>See Your Changes</Text>
            <Text style={styles.sectionDescription}>Save your file to see changes instantly.</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#007bff',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '400',
    color: '#666',
  },
});

export default App;
