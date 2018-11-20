import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar,
    ImageBackground,
    Image,
    TouchableHighlight,
    Alert,
    TextInput
} from 'react-native';

const profileImg = require('./src/images/pro-dummy-img.png');
const submit = 'SUBMIT';
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Enter Your Name',
            mobile: 'Enter Mobile No',
            email: 'Enter Email Id',
            isNameFocused : false,
            isNumberFocused : false,
            isEmailFocused : false,
        };
    }

    onFocusChangeName = () => {
        this.setState({isNameFocused: true});
    }
    onFocusChangeNumber = () => {
        this.setState({isNumberFocused: true});
    }
    onFocusChangeEmail = () => {
        this.setState({isEmailFocused: true});
    }
    validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            alert("Email is Not Correct");
            this.setState({ email: text })
            return false;
        }
        else {
            this.setState({ email: text })
            alert("Email is Correct");
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#388e3c"
                />
                <Image source={profileImg} style={styles.profileImg} />
                <View style={styles.paddingHorizontal}>
                
                <TextInput
                    onFocus={() => this.onFocusChangeName()}
                    placeholder={this.state.name}
                    style={(this.state.isNameFocused) ? styles.inputTextActive : styles.inputTextGrey}
                />
                <TextInput
                    onFocus={() => this.onFocusChangeNumber()}
                    placeholder={this.state.mobile}
                    keyboardType='numeric'
                    style={(this.state.isNumberFocused) ? styles.inputTextActive : styles.inputTextGrey}
                />
                {/* onChangeText={(text) => this.validate(text)} */}
                <TextInput
                    onFocus={() => this.onFocusChangeEmail()}
                    placeholder={this.state.email}
                    style={(this.state.isEmailFocused) ? styles.inputTextActive : styles.inputTextGrey}
                />
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.submitText}>{submit}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto',
    },
    profileImg: {
        width: 135,
        height: 135,
        marginBottom: 24,
    },
    inputTextGrey: {
        width: '100%',
        borderBottomColor: '#d4d4d4',
        borderBottomWidth: 1,
        textAlign: 'center',
        marginBottom: 24,
        color: '#d4d4d4',
        fontWeight: 'bold',
        fontSize: 18,
    },
    inputTextActive: {
        width: '100%',
        borderBottomColor: '#fe9a44',
        borderBottomWidth: 1,
        textAlign: 'center',
        marginBottom: 24,
        color: '#767676',
        fontWeight: 'normal',
        fontSize: 18,
    },
    bottom: {
        marginTop: 24,
        position: 'absolute',
        margin: 'auto',
        bottom: 0,
        width: '98%',
        backgroundColor: '#188b0c',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        color: '#FFFFFF',
    },
    paddingHorizontal: {
        width:'100%',
        paddingHorizontal:32,
      },

});