import { Stack } from 'expo-router';
import { View, SafeAreaView, StatusBar } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import Footer from '../components/Footer';

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Global Header */}
      <CustomHeader />

      {/* Main Content Area */}
      <View style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerShown: false, // Hide default header since we have global header
          }}
        />
      </View>

      {/* Global Footer */}
      <Footer />
    </SafeAreaView>
  );
}
