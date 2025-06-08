import { StyleSheet } from 'react-native';

export const customHeaderStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 70, // Adjust for status bar
    paddingBottom: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#333',
    flex: 1,
  },
  menuButton: {
    padding: 5,
  },
});
