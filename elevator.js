let currentFloor = 0;
let targetFloor;

self.onmessage = (event) => {
  if (event.data.action === 'initialize') {
    currentFloor = event.data.floor;
  } else if (event.data.action === 'moveToFloor') {
    targetFloor = event.data.targetFloor;
    move();
  }
};

function move() {
  // Logic to move the elevator to the target floor
  // Post a message to update the main script when movement is complete
  self.postMessage({ action: 'move', targetFloor });
}