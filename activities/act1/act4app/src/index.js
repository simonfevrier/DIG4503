import React from 'react';

import ReactDOM from 'react-dom';

const customer = {

  first_name: "Alex",

  last_name: "DeVille"

};

//              your code inside these <div> tags

const output = <div>
    <h1>My name is Alex</h1>
    <h2>My last name is DeVille</h2>
    </div>;

ReactDOM.render(output, document.querySelector("#root"));
