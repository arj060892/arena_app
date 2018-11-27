import React from 'react'
import BottomNavigation, {
  FullTab,
} from 'react-native-material-bottom-navigation'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

const profileImg = require('./src/images/pro-dummy-img.png');
const morningIcon = require('./src/icons/morning.png');
const midDayIcon = require('./src/icons/mid_day.png');
const eveningIcon = require('./src/icons/evening.png');

const edit_proIcon = require('./src/icons/edit_pro.png');

const home_act = require('./src/icons/home_act.png');
const home_deact = require('./src/icons/home_deact.png');

const list_act = require('./src/icons/booking_list_act.png');
const list_deact = require('./src/icons/booking_list_deact.png');

const contact_act = require('./src/icons/contact_act.png');
const contact_deact = require('./src/icons/contact_deact.png');

const menu_list_act = require('./src/icons/menu_list_act.png');
const menu_list_deact = require('./src/icons/menu_list_deact.png');


export default class App extends React.Component {
  tabs = [
    {
      key: 'home',
      icon: home_deact,
      label: 'Home',
      barColor: '#FFFFFF',
      pressColor: 'green',
      color: 'green',
      fontSize: '30',
    },
    {
      key: 'list',
      icon: list_deact,
      label: 'List',
      barColor: '#FFFFFF',
      pressColor: '#FFFFFF',
      borderColor: 'red',

    },
    {
      key: 'contact',
      icon: contact_deact,
      label: 'Contact',
      barColor: '#FFFFFF',
      pressColor: '#FFFFFF',
    },
    {
      key: 'menu',
      icon: menu_list_deact,
      label: 'Menu',
      barColor: '#FFFFFF',
      pressColor: '#FFFFFF',
      
    }
  ]

  renderIcon = icon => ({ isActive }) => (
    <Image source={icon} />

  )

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  )

  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="#388e3c"
          />

          <ScrollView
            ref='scrollView'
            onContentSizeChange={(w, h) => this.contentHeight = h}
            onLayout={ev => this.scrollViewHeight = ev.nativeEvent.layout.height}>
            <Image source={edit_proIcon} style={styles.editIcon} />
            <Image source={profileImg} style={styles.profileImg} />
            <View style={[styles.userprofile, styles.paddingVertical]}>
              <Text style={styles.username}>User Name</Text>
              <Text style={styles.userdetails}>User Email Id  -  User Ph no: </Text>
            </View>
            <View style={styles.grayPaddingBox}></View>

            <View style={[styles.paddingVertical, styles.paddingHorizontal]}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.getMore} >
                  <Text style={styles.dontMissText}>Don't Miss Out!</Text>
                  <Text style={styles.getMoreText}>Get more slots</Text>
                </View>
                <View style={styles.bookCourt} >
                  <Text style={styles.textButton} >Book Court</Text>
                </View>
              </View>
            </View>

            <View style={styles.grayPaddingBox}></View>

            <View style={[styles.paddingVertical, styles.paddingHorizontal]}>
              <Text style={styles.dontMissText}>Available Slots </Text>
              <Text style={styles.getMoreText}>Get more slots and discount</Text>

            </View>



            <ScrollView directionalLockEnabled={false} horizontal={true}>
              <View style={{ flexDirection: 'row' }}>

                <View style={[styles.slotWidth]}>
                  <View style={[styles.morningSlot, styles.paddingHorizontal16]}>
                    <Text style={{ textAlign: 'right', lineHeight: 30 }}>
                      <Image source={morningIcon} />
                    </Text>
                    <Text style={[styles.fontSize18, styles.fontColorWhite]}>Morning</Text>
                    <Text style={styles.timeText}>06:00 am - 12:00 pm</Text>
                  </View>
                  <Text style={styles.peopleChecked}>270 People Checked</Text>
                  <Text style={styles.bookedSlotMsg}>Booked 51 Slots</Text>
                </View>

                <View style={styles.slotWidth}>
                  <View style={[styles.midDaySlot, styles.paddingHorizontal16]}>
                    <Text style={{ textAlign: 'right', lineHeight: 30 }}>
                      <Image source={midDayIcon} />
                    </Text>
                    <Text style={[styles.fontSize18, styles.fontColorDarkGrey]}>Mid Day</Text>
                    <Text style={styles.timeTextGrey}>12:00 pm - 06:00 pm</Text>
                  </View>
                  <Text style={styles.peopleChecked}>270 People Checked</Text>
                  <Text style={styles.bookedSlotMsg}>Booked 51 Slots</Text>
                </View>

                <View style={styles.slotWidth}>
                  <View style={[styles.eveningSlot, styles.paddingHorizontal16]}>
                    <Text style={{ textAlign: 'right', lineHeight: 30 }}>
                      <Image source={eveningIcon} />
                    </Text>
                    <Text style={[styles.fontSize18, styles.fontColorWhite]}>Evening</Text>
                    <Text style={styles.timeText}>06:00 pm - 11:00 pm</Text>
                  </View>
                  <Text style={styles.peopleChecked}>270 People Checked</Text>
                  <Text style={styles.bookedSlotMsg}>Booked 51 Slots</Text>
                </View>
              </View>
            </ScrollView>

          </ScrollView>
        </View>

        <BottomNavigation
          onTabPress={newTab => this.setState({ activeTab: newTab.key })}
          renderTab={this.renderTab}
          tabs={this.tabs}
        />
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: 'Roboto',
  },
  editIcon: {
    alignSelf: 'flex-end',
    marginTop: 0,
    marginTop: 16,
    marginRight: 16,
    width: 50,
    height: 50,
  },
  profileImg: {
    marginTop: -21,
    width: 135,
    height: 135,
    alignSelf: 'center',
  },
  grayPaddingBox: {
    margin: 'auto',
    width: '100%',
    backgroundColor: '#d4d4d4',
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    bottom: 0,
    width: '98%',
    backgroundColor: '#188b0c',
    height: 60,
  },
  username: {
    fontSize: 22,
    color: '#363636',
  },
  userdetails: {
    fontSize: 16,
    color: '#767676',
  },
  userprofile: {
    justifyContent: "center",
    alignItems: "center",
  },
  paddingVertical: {
    paddingVertical: 24
  },
  paddingHorizontal: {
    paddingHorizontal: 24
  },
  getMore: {
    width: '60%',
    height: 60,
    justifyContent: 'center',
    alignContent: 'center'
  },
  dontMissText: {
    fontSize: 22,
    color: '#363636',
  },
  getMoreText: {
    fontSize: 16,
    color: '#767676',
    fontWeight: 'bold',
  },
  bookCourt: {
    width: '40%',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row'
  },
  textButton: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    color: '#FFFFFF',
    backgroundColor: '#188b0c',
    borderRadius: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  slotWidth: {
    width: 200,
  },
  peopleChecked: {
    fontSize: 14,
    color: '#767676',
    marginBottom: 4,
  },
  bookedSlotMsg: {
    color: '#188b0c',
    fontSize: 16,
    fontWeight: 'bold',
  },
  morningSlot: {
    height: 90,
    backgroundColor: '#fe9a44',
    borderRadius: 5,
    marginRight: 16,
    marginBottom: 8,
  },
  midDaySlot: {
    height: 90,
    borderColor: '#d4d4d4',
    borderWidth: 2,
    borderRadius: 5,
    marginRight: 16,
    marginBottom: 8,
  },
  eveningSlot: {
    height: 90,
    backgroundColor: '#188b0c',
    borderRadius: 5,
    marginBottom: 8,
  },
  paddingHorizontal16: {
    paddingHorizontal: 16
  },
  timeText: {
    color: '#ffffff',
    fontSize: 13,
  },
  timeTextGrey: {
    fontSize: 13,
    color: '#767676',
  },
  fontSize18: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  fontColorWhite: {
    color: '#ffffff',
  },
  fontColorDarkGrey: {
    color: '#767676',
  },

}); 