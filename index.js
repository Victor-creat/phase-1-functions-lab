// Code your solution in this file!
// Define constants
const hq = 42; // Headquarters located at 42nd street
const blockLength = 264; // Each block is 264 feet

// Function to calculate distance in blocks
function distanceFromHqInBlocks(block) {
    return Math.abs(block - hq);
}

// Function to calculate distance in feet
function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * blockLength;
}

// Function to calculate distance travelled in feet
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * blockLength;
}

// Function to calculate fare price
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0; // First 400 feet are free
    } else if (distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot for distance between 400 and 2000 feet
    } else if (distance <= 2500) {
        return 25; // 25 dollars for distance over 2000 feet
    } else {
        return 'cannot travel that far'; // Not allowed to travel over 2500 feet
    }
}