import Express from "express";
import {totalmen} from "os";

const App = Express();
const port = 3002;



const restaurants = [
    'Burger_King',
    'McDonalds',
    'Popeyes',
    'Chipotle',
    'Panara',
    'Red_Lobster',
    'Taco_Bell',
];

App.get('/restaurants/:title', (req, res) => {
let title = req.params.title;
if (restaurants.includes(title)){
  res.json({Title: title})
} else
    res.json({Title:"Not available"});
}
});


App.get('/search/:restaurant', (req, res) => {
  const result = restaurants.filter(str => str.includes(req.params.title)});

    if (result !=0) {
      res.json({ search: result});
    } else {
        res.json({ search: "Not available"});
    }
})

App.listen(port, () => {

});
