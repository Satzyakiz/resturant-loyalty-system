import React from "react";

import DatePicker from 'react-date-picker';
import { Multiselect } from 'multiselect-react-dropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import "../css/AddVisit.css";


class AddVisit extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: new Date(),
            options: this.props.data
        }
    }
    
    updateParentState = ()=>{
        this.props.update();
        this.props.updateDate(this.state.date);
    }
    onDateChange = date => {
        this.setState({ date });
    }
    onSelect(selectedList, selectedItem) {
        console.log("1")
    }

    onRemove(selectedList, removedItem) {
        console.log("2")
        if(selectedList.length)
        console.log(selectedList)
    }
    render(){
        
        return(
            <Container fluid className="add-visit-container">
                <h3>Select Date of Last Visit</h3>
                <DatePicker 
                    onChange={this.onDateChange}
                    value={this.state.date}
                    maxDate={new Date()}
                    required={true}
                    className="date-picker-custom"
                />
                <h3>Select Items ordered during last visit</h3>
                <Multiselect
                    options={this.state.options} // Options to display in the dropdown
                    selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                    onSelect={this.onSelect} // Function will trigger on select event
                    onRemove={this.onRemove} // Function will trigger on remove event
                    displayValue="name" // Property name to display in the dropdown options
                    
                />
                <Button variant="primary" size="lg" onClick={this.updateParentState} className="add-visit-button">
                    Add Visit
                </Button>
            </Container>
        )
    }
}

export default AddVisit;