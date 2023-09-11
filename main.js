const building = document.getElementById('building');
const numberOfFloors = 20;
const floorHeight = 25;
const numberOfPeople = 5;

// Elevators
const elevators = [0, 1, 2].map((id) => {
    const elevatorDiv = document.createElement('div');
    elevatorDiv.className = 'elevator';
    elevatorDiv.style.left = `${id * 100 + 35}px`;
    elevatorDiv.style.bottom = `${0}px`;
    building.appendChild(elevatorDiv);
    const floor = Math.floor(Math.random() * numberOfFloors);
    return { id, div: elevatorDiv, currentFloor: floor, targetFloor: floor, moving: false, queue: [] };
});

// People
const people = [];
for (let i = 0; i < numberOfPeople; i++) {
    const personDiv = document.createElement('div');
    personDiv.className = 'person';
    personDiv.style.left = `${300 + (i * 15) % 100}px`;
    personDiv.style.bottom = `${30}px`; // Positioned on grass
    building.appendChild(personDiv);
    const targetFloor = i % numberOfFloors;
    people.push({ div: personDiv, targetFloor, targetRoom: i % 10, state: 'outside' });
}

// Simulation Loop
function update() {
    // Update elevators
    elevators.forEach(elevator => {
        if (elevator.moving) {
            // Logic to move the elevator
        } else if (elevator.queue.length > 0) {
            // Logic to handle queued requests
        }
    });

    // Update people
    people.forEach(person => {
        if (person.state === 'outside') {
            // Logic to request an elevator and enter the building
        } else if (person.state === 'moving') {
            // Logic to move between floors and rooms
        }
    });

    requestAnimationFrame(update);
}

update();

// Additional logic to handle interactions between people, elevators, floors, and rooms