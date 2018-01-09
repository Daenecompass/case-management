import React from 'react';
import {
  DropDownField,
  Cards,
  DateTimePicker,
  RaceFormContainer,
  CheckboxRadioGroup,
} from 'react-wood-duck';
import Table from '../../_components/Table';

const county = [
  { value: 'Los Angeles County', label: 'Los Angeles County' },
  { value: 'Sacramento County', label: 'Sacramento County' },
  { value: 'El Dorado County', label: 'El Dorado County' },
  { value: 'Yuba County', label: 'Yuba County' },
  { value: 'Merced County', label: 'Merced County' },
];

export default class Ethnicity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      counties: ['Yes', 'No', 'Not Asked', 'Pending'],
      selected: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  handleDropdownChange(name) {
    return ({ value }) => this.setState({ [name]: value });
  }
  handleChange(event) {
    const newSelection = event.target.value;
    let newSelectionArray;
    if (this.state.selected.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.selected.filter(s => s !== newSelection);
    } else {
      newSelectionArray = [...this.state.selected, newSelection];
    }
    this.setState({ selected: newSelectionArray });
  }

  render() {
    return (
      <Cards cardHeaderText="Race & Ethnicity" cardbgcolor="transparent">
        <div>
          <RaceFormContainer />
          <div>
            <label htmlFor="ICWA Eligible">ICWA Eligible</label>
            <CheckboxRadioGroup
              id="checkbox1"
              name={'child'}
              type={'radio'}
              handleOnChange={this.handleChange}
              options={this.state.countys}
              selectedOptions={this.state.selected}
            />
            <Table colNames={['County', 'Date']} />
            <div>
              <DropDownField
                id="dropdown1"
                gridClassName="col-md-6 col-sm-6 col-xs-12"
                selectedOption={this.state.primaryLanguage}
                options={county}
                label="Primary Language"
                onChange={this.handleDropdownChange('county')}
              />
              <div className="col-md-6 col-sm-6 col-xs-12">
                <label htmlFor="Date Informed">Date Informed</label>
                <DateTimePicker />
              </div>
            </div>
          </div>
        </div>
      </Cards>
    );
  }
}
