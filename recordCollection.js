function updateRecords(records, id, prop, value) {
  if(prop !== "tracks"){
    if(value !== ""){
      records[id][prop] = value;
    }else{
      // delete the key
      delete records[id][prop];
    }
  }else{
    if(!Object.keys(records[id]).includes("tracks") && value !== ""){
      records[id]["tracks"] = [value] //creating a tracks key and intialising it an empty array
    }else{
      // if it contains tracks key
      if(value !== ""){
        records[id][prop].push(value);
      }else{
        delete records[id][prop];
      }
    }
  }
  return records;
}

// Setup
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

console.log(updateRecords(recordCollection, 5439, 'tracks', 'ABBA'));
