# mlbboxscores
Retrieve MLB Boxscores for a given day

## Install
```
npm install mlbboxscores
```

## Usage
```
const MLBBoxscores = require('mlbboxscores');

var options = {
  path: 'year_2011/month_07/day_23/'
};

var mlbboxscores = new MLBBoxscores(options);
mlbboxscores.get((err, boxscores) => {

  //... do something
});
```
