import React from "react";


class PeopleForm extends React.Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row bg-light p-4 rounded mb-3">
                    <div className="col-md-3">
                        <input type="text" placeholder="First Name" className="form-control" 
                        onChange={this.props.firstNameTextbox} 
                        value={this.props.firstName}
                        />
                    </div>
                    <div className="col-md-3">
                        <input type="text" placeholder="Last Name" className="form-control" 
                        onChange={this.props.lastNameTextbox} 
                        value={this.props.lastName}
                        />
                    </div>
                    <div className="col-md-3">
                        <input type="text" placeholder="Age" className="form-control" 
                        onChange={this.props.ageTextbox} 
                        value={this.props.age}
                        />
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-primary w-100" onClick={this.props.onAddClick}>Add</button>
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-warning w-100" onClick={this.props.onClearClick}>Clear</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PeopleForm;

// <input type='text'
//                         value={this.props.currentNumber}
//                         onChange={this.props.onTextChange}
//                         className='form-control'
//                         placeholder='Enter Number' />

//<div class="container" style="margin-top: 60px;">
//<div class="row bg-light p-4 rounded mb-3">
//<div class="col-md-3">
//<input type="text" placeholder="First Name" name="firstName" class="form-control" value="">
//</div>
//<div class="col-md-3">
//<input type="text" placeholder="Last Name" name="lastName" class="form-control" value="">
//</div>
//<div class="col-md-3">
//<input type="text" placeholder="Age" name="age" class="form-control" value="">
//</div>
//<div class="col-md-1">
//<button class="btn btn-primary">Add</button>
//</div>
//<div class="col-md-2">
//<button class="btn btn-warning ml-3">Clear All</button>
//</div>
//</div>
