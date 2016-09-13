import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';

export default class TableView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectable: false,
      showCheckboxes: false,
    };
  }

  render() {
    return (
      <div>
        <Table
          selectable={this.state.selectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
          >
            <TableRow>
            {this.props.header.map( (row, index) => (
                <TableHeaderColumn key={index} tooltip={row.name}>{row.name}</TableHeaderColumn>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
          >
            {this.props.list.map( (row, index) => (
              <TableRow key={index}>
              {this.props.header.map( (header, index) => (
                <TableRowColumn key={header.key}>{row[header.key]}</TableRowColumn>
              ))}
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

TableView.defaultProps = {
  header: [],
  list: [],
};
