// Assume you have a big integer for time in milliseconds
const bigIntTime = 1672531199000n; // JavaScript BigInt, for example

// Convert BigInt to regular number if it's safe (less than MAX_SAFE_INTEGER)
const timeInMilliseconds = Number(bigIntTime);

// Create a Date object from the milliseconds
const date = new Date(timeInMilliseconds);

// Format the date to a readable format
const formattedDate = date.toISOString(); // "2023-01-01T00:59:59.000Z"

console.log(formattedDate);

