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

// Only change code below this line
function updateRecords(records, id, prop, value) {
  let copy = records;
  
    if(prop!=='tracks'){
      copy[id][prop] = value;
      
    } else { 
      copy[id].hasOwnProperty('tracks')?true:copy[id]['tracks']=[];
      copy[id]['tracks'].push(value)
    }
    if(value==''){
      console.log(copy[id][prop])
      delete copy[id][prop];
      console.log(copy[id])
    }
  return copy;
}
updateRecords(recordCollection, 2548, "artist", "")