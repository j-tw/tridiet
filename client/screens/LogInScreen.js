import React from 'react';
import { MonoText } from '../components/StyledText';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


export default function LogInScreen() {
    return (
        <View style={{paddingTop:80}}>
        <Text style={styles.welcometext}>
          Welcome to
        </Text>
        <Text style={styles.triDiet}>
         TriDiet
        </Text>
        <Text style={styles.welcometext}>
          a better way to track your health
        </Text>
        </View>
    );
}

LogInScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
    welcometext: {
        paddingTop: 30,
        fontSize: 27,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
        fontFamily: 'space-mono',
      },
      triDiet: {
        paddingTop: 30,
        fontWeight: '900',
        fontSize: 27,
        color: '#0644F9',
        textAlign: 'center',
        fontFamily: 'space-mono',
      },
});
