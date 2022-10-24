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

console.log(addToCollection('Meet the Woo 2', 'Pop Smoke', '2020', 'Dior: 2:53'));
console.log(addToCollection('My Beautiful Dark Twisted Fantasy', 'Kanye', '2010', 'Devil in a new dress: 5:53'));
console.log(addToCollection('Astroworld', 'Travis Scott', '2018', 'Sicko mode: 5:23'));
console.log(addToCollection('Views', 'Drake', '2016', 'One Dance: 2:55'));
console.log(addToCollection('Damn', 'Kendrick Lamar', '2017', 'DNA: 4:46'));
console.log(addToCollection('7220', 'Lil Durk', '2022', 'Blocklist: 2:20'));
console.log(collection);

function showCollection(array) {
    console.log(array.length);
    for(let i=0;i<array.length; i++){
     console.log(`${array[i].title} by ${array[i].artist} published in ${array[i].yearPublished}
      ${array[i].tracks}`);
    }
}
showCollection (collection)

function findByArtist(artist) {
    let results = [];
    for (title of collection) {
        if(title.artist === artist) {
            results.push(title)
        }
    }
    return results;
}

console.log(findByArtist('Pop Smoke'));
console.log(findByArtist('Kanye west'))
console.log(findByArtist('Travis Scott'));
console.log(findByArtist('Drake'));