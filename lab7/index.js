import Express from "express";
import {totalmen} from "os";

const App = Express();
const port = 45030;



const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

App.get('/people/:person', (req, res) => {
let person = req.params.person;
if (people.includes(person)){
  res.json({Person: person})
} else
    res.json({Person:"Not available"});
}
});


App.get('/search/:name', (req, res) => {
  const result = people.filter(str => str.includes(req.params.person)});

    if (result !=0) {
      res.json({ search: result});
    } else {
        res.json({ search: "Not available"});
    }
})

App.listen(port, () => {

});
