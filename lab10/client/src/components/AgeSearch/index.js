import React from "react";

class AgeSearch extends React.Component {
  readAge(event)

      // Stop (prevent) the "default" form action
      event.preventDefault();

      // Find the element with 'id="age"'
      let element = document.querySelector("#age");

      fetch("/employee/name/age" + element.value)
      .then(res) => {
        return res.json();
      })

        .then((processed) => {

            let reporting = document.querySelector("reportingArea");

            if (processed.error) {
              reporting.innerHTML = processed.error;
            } else {
                reporting.innerHTML = processed.name;
            }
        });
            element.value = "";
    }
    render() {
      return (
          <div>
          <h2>Age</h2>
          <form onSubmit={this.readAge}>
            <input id="age" type="text"/>
            <button>Submit</button>
            </form>
          </div>
      )
    }
}
export default AgeSearch;
