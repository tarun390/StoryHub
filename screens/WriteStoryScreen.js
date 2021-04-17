import * as React from 'react';
import { StyleSheet, Text,KeyboardAvoidingView ,View ,TextInput, TouchableOpacity} from 'react-native';

export default class WriteStoryScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          text: null,
        };
    }
    render(){
        return (
            <View>
                <KeyboardAvoidingView style={styles.container}>
                    <TextInput
                        style={styles.inputBox}
                        value={this.state.text}
                        placeholder={"Title"}
                        onChangeText={(text) => {
                            this.setState({ text: text });
                        }}
                    />
                    <TextInput
                        style={styles.inputBox}
                        value={this.state.text}
                        placeholder={"Author"}
                        onChangeText={(text) => {
                            this.setState({ text: text });
                        }}
                    />
                    <TextInput
                        style={styles.inputBox}
                        value={this.state.text}
                        placeholder={"Story"}
                        onChangeText={(text) => {
                            this.setState({ text: text });
                        }}
                        multiline={true}
                    />
                </KeyboardAvoidingView>
                <View>
                    <TouchableOpacity style={styles.goButton}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      height: 600,
      backgroundColor: 'yellow',
      padding: 8,
    },
    buttonText: {
      margin: 18,
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    goButton: {
      marginBottom: 350,
      width: 80,
      height: 80,
      borderWidth: 4,
      borderColor: 'lightgreen',
      alignSelf: 'center',
      marginTop: 20,
      borderRadius: 40,
      alignItems: 'center',
      backgroundColor: '#ecffff',
    },
    inputBox: {
      width: '80%',
      alignSelf: 'center',
      height: 60,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      borderWidth: 4,
      borderColor: 'lightgreen',
      backgroundColor: '#ecffff',
    },
  });
  