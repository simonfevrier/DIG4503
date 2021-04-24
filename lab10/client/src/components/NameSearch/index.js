import React from "react";

class NameSearch extends React.Component {
  readName(event) {
    event.preventDefault();

    let element = document.querySelector("#name");

    fetch("api/employee/name" + element.value)
    .then((res) => {
      return res.json();
    })
    .then((processed) => {

      // Find the element with 'id="reportngArea"'
      let reporting = document.querySelector("#reportingArea");

      // Does the 'processed' object have a property
      if(processed.error) {
        reporting.innerHTML = processed.error;
      } else {
          reporting.innerHTML = processed.age;
      }

    });
          element.value = "";
    }
    render() {
      return(
          <div>
            <h2>Name</h2>
          <form onSubmit={this.readName}>
            <input id="name" type="text"/>
            <button>Submit</button>
          </form>
          </div>
      )
    }
  }

  export default NameSearch;
