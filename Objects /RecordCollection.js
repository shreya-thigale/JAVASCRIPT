const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  // 1. If value is empty, delete the property
  if (value === "") {
    delete records[id][prop];
  } 
  // 2. If property isn't 'tracks' and value isn't empty, update normally
  else if (prop !== "tracks") {
    records[id][prop] = value;
  } 
  // 3. If property is 'tracks', handle the array
  else {
    // Create the tracks array if it doesn't exist
    if (!records[id].hasOwnProperty("tracks")) {
      records[id].tracks = [];
    }
    // Add the new track to the end
    records[id].tracks.push(value);
  }

  // Always return the entire records object
  return records;
}

console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"))