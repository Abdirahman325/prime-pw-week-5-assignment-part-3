console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished, track){
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        track: track,
    }
    collection.push(album);
    return album;
}

console.log(addToCollection('Meet the Woo 2', 'Pop Smoke', '2020', 'Dior'));
console.log(addToCollection('My Beautiful Dark Twisted Fantasy', 'Kanye', '2010', 'Devil in a new dress'));
console.log(addToCollection('Astroworld', 'Travis Scott', '2018', 'Sicko mode'));
console.log(addToCollection('Views', 'Drake', '2016', 'One Dance'));
console.log(addToCollection('Damn', 'Kendrick Lamar', '2017', 'DNA'));
console.log(addToCollection('7220', 'Lil Durk', '2022', 'Blocklist'));
console.log(collection)

function showCollection(array) {
    console.log(array.length);
    for(let i=0;i<array.length; i++){
            console.log
    }
}