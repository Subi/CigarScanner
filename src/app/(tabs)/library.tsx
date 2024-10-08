import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/header';
import { NativeSearchBar, SearchBar } from 'react-native-screens';
import Searchbar from '../../components/searchbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import List from '../../components/Cigars/list';




export default function Tab() {
  return (
    <>
    <SafeAreaView style={styles.container}>
        <Header/>
        <Searchbar/>
        <List/>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
  },
});
