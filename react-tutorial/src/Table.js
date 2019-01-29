import React, { Component } from 'react';
import { PropTypes } from 'react'
import './App.css';

const TableHead = () => {
    return(
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Jobs</th>
            <th>Phone Number</th>
        </tr>
    </thead>
    );
}


const TableBody = props => {
    const personReturn = props.persons.map((singlePerson, index)=> {
        return (
            <tr key = {index}>
                <td>{singlePerson.name}</td>
                <td>{singlePerson.age}</td>
                <td>{singlePerson.job}</td>
                <td>{singlePerson.number}</td>
                <td ><button onClick = {() => printFunction(index)}> Button </button></td>
            </tr>
        );
    });

    const testValue = <h1>Emon</h1>
    return <tbody>{personReturn}</tbody>
}


let  printFunction = (index) => {
    console.log(index);
}

class Table extends Component {
    render() {
        const {personProps,removeCharacter} = this.props;

        return (
            <table>
                <TableHead/>
                <TableBody 
                    persons = {personProps} 
                    removeCharacter = {removeCharacter}
                />
            </table>
        );
    }
}

export default Table;