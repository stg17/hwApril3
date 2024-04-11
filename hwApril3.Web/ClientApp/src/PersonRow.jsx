import React from "react";




class PersonRow extends React.Component {

    fillRows = () => {
        return   this.props.people.map(p => 
         <tr className={this.addClass(p.age)}>
             <td>{p.firstName}</td>
             <td>{p.lastName}</td>
             <td>{p.age}</td>
         </tr>)
     }
     
     addClass = (age) => {
         if (age >= 65) {
             return "table-danger";
         }
         return '';
     }

    render() {
        return this.fillRows();
    }
}

export default PersonRow;