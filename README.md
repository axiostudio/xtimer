# xTimer

`xTimer` is a JavaScript class that implements a simple timer with functionalities for starting, stopping, adding time, displaying elapsed time, and resetting. This class is useful for tracking time in various scenarios such as stopwatches, timers, or time management in applications.

The xTimer class offers a simple and flexible way to manage a timer in JavaScript applications. It can be extended and modified to suit various use cases as needed.

## Features

The `xTimer` class provides the following methods:

### `start(start_at)`

Starts the timer. If a date (`start_at`) is provided, the timer will start from that specific time. Otherwise, the timer starts from the current time.

- **Parameters:**
  - `start_at` (optional): An optional date from which to start the timer. If omitted, the current date is used.
  
- **Behavior:**
  - If the timer is not already running, it starts counting seconds.
  - Logs the start action in the `history`.

### `stop()`

Stops the timer and accumulates the elapsed seconds into the offset.

- **Behavior:**
  - Stops the counting interval.
  - Updates the offset with the elapsed seconds.
  - Resets the current seconds to 0.
  - Logs the stop action in the `history`.

### `add(seconds)`

Adds a specified number of seconds to the current offset.

- **Parameters:**
  - `seconds`: Number of seconds to add to the timer.
  
- **Behavior:**
  - Updates the offset with the specified number of seconds.
  - Logs the add action in the `history`.

### `elapsed()`

Returns the total elapsed time in seconds.

- **Behavior:**
  - Returns the sum of the offset and the current seconds.

### `display()`

Returns the total elapsed time in `HH:MM:SS` format.

- **Behavior:**
  - Calculates the total elapsed time.
  - Converts the time into a string in `HH:MM:SS` format.

### `reset()`

Resets the timer by clearing the offset and the seconds.

- **Behavior:**
  - Stops the counting interval if active.
  - Resets the offset and seconds to 0.
  - Sets the timer state to not running.
  - Logs the reset action in the `history`.

## Usage Example

```javascript
import { xTimer } from './xtimer.js';

const timer = new xTimer();
timer.start();
// ... after a few seconds
console.log(timer.display()); // Shows the elapsed time
timer.add(120); // Adds 120 seconds (2 minutes)
console.log(timer.display()); // Shows the updated time
timer.stop(); // Stops the timer
timer.reset(); // Resets the timer
```

### Action History

Every method that modifies the timer state logs the action in the history property, which tracks all operations performed on the timer.