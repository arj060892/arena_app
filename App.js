import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const left_arrow = require('./src/icons/left_arrow.png');
const kabab_memu = require('./src/icons/kabab_memu.png');
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#388e3c"
        />

        <View>
          <View style={styles.topNav} >
            <View style={[styles.colStyle, styles.dailySelect]} >
              <Text style={styles.textColor}>Daily</Text>
            </View>
            <View style={[styles.colStyle, styles.trainingSelect]} >
              <Text style={styles.textColor}  >Training</Text>
            </View>
            <View style={[styles.colStyle, styles.monthlySelect, styles.activeButton]} >
              <Text style={[styles.textColor, styles.activeTextColor]} >Monthly</Text>
            </View>
          </View>
          <View style={{ marginHorizontal: 16, justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ marginBottom: 16 }}><Text style={styles.blachBoldText16}>Select Slots</Text></View>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.circleAvailable}><Text style={styles.greenText14}>center</Text></View>
              <View style={styles.circleNotAvailable}><Text style={styles.grayText14} >center</Text></View>
              <View style={styles.circleAllAvailable}><Text style={styles.whiteText14}>center</Text></View>
            </View>
          </View>
          <View style={{ marginHorizontal: 16, marginVertical: 16, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <View style={styles.avilableSmall}></View>
            <Text style={{ marginHorizontal: 8, }}>Available</Text>
            <View style={styles.notavilableSmall}></View>
            <Text>Not Available</Text>

          </View>

          <View style={{ marginHorizontal: 16, }}>
            <Text style={styles.blachBoldText16}>Select Dates</Text>

            <Calendar
              // Date marking style [simple/period/multi-dot/single]. Default = 'simple'
              markingType={'custom'}
              markedDates={{
                '2018-03-28': {
                  customStyles: {
                    container: {
                      backgroundColor: 'green',
                    },
                    text: {
                      color: 'black',
                      fontWeight: 'bold'
                    },
                  },
                },
                '2018-03-29': {
                  customStyles: {
                    container: {
                      backgroundColor: 'white',
                      elevation: 2
                    },
                    text: {
                      color: 'blue',
                    },
                  }
                }
              }}
            />
          </View>
          <View style={{bottom:0,borderColor:'green',borderWidth:2,position:''}}>
            <Text>Bottom</Text>
          </View>
        </View>



      </View >



    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    fontFamily: 'Roboto',
    minHeight: '100%',
  },
  topNav: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    height: 56,
    marginHorizontal: 16,
    marginVertical: 16,
  },
  colStyle: {
    width: '33%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaeaea'
  },

  dailySelect: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eaeaea',
    borderTopLeftRadius: 48,
    borderBottomLeftRadius: 48,
  },
  trainingSelect: {
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eaeaea',
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  monthlySelect: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eaeaea',
    borderTopRightRadius: 48,
    borderBottomRightRadius: 48,
  },
  textColor: {
    color: '#767676',
    fontFamily: 'Roboto Medium',
    fontSize: 14,
  },
  activeButton: {
    backgroundColor: '#188b0c',
    borderWidth: 1,
    borderColor: '#188b0c',
  },
  activeTextColor: {
    color: '#FFFFFF',
    fontFamily: 'Roboto Medium',
    fontSize: 13,
  },
  circleNotAvailable: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    borderColor: '#eaeaea',
    backgroundColor: '#eaeaea',
    borderWidth: 2,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',

  },

  circleAvailable: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    borderColor: '#188b0c',
    borderWidth: 2,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#188b0c',
  },
  circleAllAvailable: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    borderColor: '#188b0c',
    borderWidth: 2,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#188b0c',
  },
  greenText14: {
    color: '#188b0c',
    fontSize: 16,
  },
  grayText14: {
    color: '#767676',
    fontSize: 16,
  },
  whiteText14: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  blachBoldText16: {
    color: '#363636',
    fontSize: 16,
    fontWeight: 'bold'
  },
  avilableSmall: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    borderColor: '#188b0c',
    borderWidth: 2,
  },
  notavilableSmall: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: '#d4d4d4',
    borderColor: '#d4d4d4',
    borderWidth: 2,
    marginHorizontal: 8,
  },
});

