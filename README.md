# extract-data-from-text
Extract emails, prices, numbers, geo locations and other from texts by regular expressions

## Installation

  Install with npm:

    $ npm install extract-data-from-text --save

## API

#### Example:

```javascript
	var string = require('extract-data-from-text')
    string.emails('lorem ipsum a@domain.com aaa b@domain.com') // returns => ['a@domain.com', 'b@domain.com']
    string.phones('+1 123 456 789 john john +1 432 456 789') // returns => ['+1123456789', '+1432456789']
```
