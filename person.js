let targetFloor, targetRoom, currentFloor = 0;
let state = 'waiting';

self.onmessage = (event) => {
  if (event.data.action === 'initialize') {
    targetFloor = event.data.targetFloor;
    targetRoom = event.data.targetRoom;
  } else if (event.data.action === 'enter') {
    state = 'entering';
    requestElevator();
  } // Additional handling for other actions
};

function requestElevator() {
  self.postMessage({ action: 'requestElevator', currentFloor });
}

// Additional functions for person's behavior