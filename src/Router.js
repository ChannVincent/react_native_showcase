import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Platform, Text } from 'react-native';
import ListPOI from './components/ListPOI';
import KeypadPOI from './components/KeypadPOI';
import WebView from './components/WebView';

class TabIcon extends React.Component {
    render() {
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

const RouterComponent = () => {
    return (
      <Router sceneStyle={ styles.sceneStyle }>
        <Scene key="tabbar" tabs={true} >
          <Scene key="tab1"  title="Tab #1" icon={TabIcon} navigationBarStyle={{backgroundColor:'red'}} titleStyle={{color:'white'}}>
            <Scene key="tab1_1" component={ListPOI} title="Tab #1_1" onRight={()=>alert("Right button")} rightTitle="Right" />
            <Scene key="tab1_2" component={KeypadPOI} title="Tab #1_2" titleStyle={{color:'black'}}/>
          </Scene>
          <Scene key="tab2" initial={true} title="Tab #2" icon={TabIcon}>
             <Scene key="tab2_1" component={KeypadPOI} title="Tab #2_1" onLeft={()=>alert("Left button!")} leftTitle="Left"/>
             <Scene key="tab2_2" component={WebView} title="Tab #2_2"/>
          </Scene>
          <Scene key="tab3" component={WebView} title="Tab #3" hideTabBar={true} icon={TabIcon}/>
          <Scene key="tab4" component={KeypadPOI} title="Tab #4" hideNavBar={true} icon={TabIcon}/>
          <Scene key="tab5" component={ListPOI} title="Tab #5" icon={TabIcon} />
        </Scene>
      </Router>
    )
}

const styles = {
  sceneStyle: {

  },
  tabBarStyle: {
    backgroundColor: '#fff'
  }
}

export default RouterComponent;
