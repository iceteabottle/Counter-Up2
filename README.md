# Counter-Up-3

Counter-Up-3 is a lightweight module that counts up to a targeted number e.g. when the number becomes visible.
It's based on [Counter-Up2](https://github.com/bfintal/Counter-Up2)


### Count up what you want

* Floats: `1.234`
* Integers: `1234`
* ~~Formatted numbers~: `1.234,56` (not available for now)
* With non-numeric characters: `$1234.56`
* Multiple countable values: `604.800 seconds in 10.080 minutes in 168 hours in 7 days`

### Features
* There's a build in formatter: e.g.
  * with german locale: `1234.56` => `1.234,56`
  * with US locale: `1234.56` => `1,234.56`
* The formatter isn't optional for now
* The counter prevent flickering by keeping the fraction digits all the time

### Usage

**Install**
```bash
npm install --save counterup2
```

**HTML**
```html
<div class="counter">1,123,456 downloads</div>
```

**JS**
```js
import counterUp from 'counterup2'

const el = document.querySelector( '.counter' )

// Start counting, do this on DOM ready or with Waypoints.
counterUp( el, {
    duration: 1000,
    delay: 16,
} )
```

If you want to stop the counter immediately:

```js
// Stop counting. This brings back the original value.
counterUp( el, { action: 'stop' } )
```

### Use with Waypoints

The counting is performed when `counterUp` is called. To make the counting start when the element becomes visible, use a visibility library like [Waypoints](https://www.npmjs.com/package/waypoints)

For example:

```js
// On DOM ready.
require( 'waypoints/lib/noframework.waypoints.js' )
const el = document.querySelector( '.counter' )
new Waypoint( {
    element: el,
    handler: function() { 
        counterUp( el ) 
        this.destroy()
    },
    offset: 'bottom-in-view',
} )
```

### ToDo
* Make the formatting optional
