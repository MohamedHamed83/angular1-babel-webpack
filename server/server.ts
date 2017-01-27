import { CallbackLogger } from 'typedoc/dist/lib/utils/loggers';
declare const require;


var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
import { BackLog } from './data';


var app = express();

app.use(express.static('.'));
app.use(bodyParser.json());
app.use(bodyParser.text());


const ListItems = BackLog;


app.route('/api/listItems')
  .get((req, res) => {

    let filtered = ListItems;

    if (req.query.search) {
      console.log(req.query.search);
      filtered = filtered.filter(
        lesson => lesson.description.indexOf(req.query.search) !== - 1);
    }

    res.status(200).json(filtered);
  })
  .post((req, res) => {
    ListItems.push(req.body);
    res.status(200).send();
  });

app.route('/api/listItems/:itemId')
  .delete((req, res) => {
    const itemId = req.params.itemId;
    console.log('deleting lesson ', itemId);
    const index = _.find(ListItems,
      lesson => lesson.id === itemId
    );
    ListItems.splice(index, 1);
    res.status(200).send();
  });


app.route('/api/flakylistItems')
  .get((req, res) => {

    const num = Math.round(Math.random() * 10);

    if (num % 2 === 0) {
      res.status(200).json(ListItems);
    }
    else {
      res.status(500).send();
    }

  });




app.route('/api/delayedlistItems')
  .get((req, res) => {

    setTimeout(() => {

      let filtered = ListItems;

      if (req.query.search) {
        console.log(req.query.search);
        filtered = filtered.filter(
          lesson => lesson.description.indexOf(req.query.search) !== - 1);
      }

      res.status(200).json(filtered);

    }, 1000);

  });


var server = app.listen(9090, function () {
  console.log('Server running at http://localhost:' + server.address().port);
});