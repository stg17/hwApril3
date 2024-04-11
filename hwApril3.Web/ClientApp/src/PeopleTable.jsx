import React from "react";
import PeopleForm from "./PeopleForm";
import PersonRow from "./PersonRow";

class PeopleTable extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        age: "",
        people: [] 
    }

    firstNameTextbox = e => {
        this.setState({ firstName: e.target.value });
    }

    lastNameTextbox = e => {
        this.setState({ lastName: e.target.value });
    }

    ageTextbox = e => {
        this.setState({ age: e.target.value });
    }

    onAddClick = () => {
        const copy = [...this.state.people, {firstName: this.state.firstName,lastName: this.state.lastName, age: this.state.age}];
        this.setState({ people: copy, firstName: '', lastName: '', age: '' });
    }

    onClearClick = () => {
        this.setState({ people: [], firstName: '', lastName: '', age: '' });
    }

    tableFill = () => {
        if (this.state.people.length === 0)
        {
            return <h1>No people...</h1>;
        }
        return (
           
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <PersonRow people={this.state.people}/>
                    </tbody>
                </table>
               
        );
    }

    render() {
        return (
            <>
                <PeopleForm
                firstName = {this.state.firstName}
                lastName = {this.state.lastName}
                age = {this.state.age}
                firstNameTextbox = {this.firstNameTextbox}
                lastNameTextbox = {this.lastNameTextbox}
                ageTextbox = {this.ageTextbox}
                onAddClick = {this.onAddClick}
                onClearClick = {this.onClearClick}
                />
                 <div className="container mt-3">
                    <div className="col-md-12">
                         {this.tableFill()}
                    </div>
                </div>
            </>
        );
    }
}

export default PeopleTable;