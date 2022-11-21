import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? 20 : 0
    },
    inputText: {
      fontSize: 40,
      color: 'black'
    },
    resultText: {
      fontSize: 28,
      color: 'black',
    },
    numrow: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    input: {
      flex: 0.35,
      backgroundColor: '#e9e8e7',
      justifyContent: 'center',
      alignItems: 'flex-end'
    },
    result: {
      flex: 0.2,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'flex-end'
    },
    buttons: {
      flexGrow: 1,
      flexDirection: 'row'
    },
    btnText: {
      fontSize: 36,
      color: 'white'
    },
    numbers: {
      flex: 3,
      backgroundColor: '#1e1f25',
      justifyContent: 'space-around',
      alignItems: 'stretch'
    },
    operators: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#f18519',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    touch: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'stretch'
    }
  });

export default styles;