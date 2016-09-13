import React from 'react';
import HTTPClient from './HTTPClient';
import {Tabs, Tab} from 'material-ui/Tabs';
import TableView from './TableView';
import TabData from './data/TabData';
import EarthQuakeData from './data/EarthQuakeData';

const tabsData = HTTPClient.get(TabData());
const tableData = {
  earthquake: HTTPClient.get(EarthQuakeData()),
};

class MainTabs extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      key: tabsData[0].key,
    };
  }

  _handleChange(key) {
    this.setState({
      key: key,
    });
  }

  render() {
    return (
      <Tabs key={this.state.key} onChange={this._handleChange.bind(this)}>
        {tabsData.map( (tab) => (
            <Tab label={tab.name} key={tab.key} >
              <div>
                <TableView header={tableData[tab.contents].header} list={tableData[tab.contents].list}/>
                <p></p>
              </div>
            </Tab>
          )
        )}
      </Tabs>
    );
  }
}

export default MainTabs;
