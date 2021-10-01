function myMood(){
document.getElementById("myAudio").src = "";
var genre = document.modd.moods.value;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var albumNumber = getRandomInt(30);
console.log(albumNumber)

console.log(genre)

const apiAlbums = `http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${genre}&api_key=4425e763ff6cd49e5f0f14ed57c94ee5&format=json`;
async function getData(){
    const response = await fetch(apiAlbums);
    const data = await response.json();

    var artistName = data.albums.album[`${albumNumber}`].artist.name
    var albumName = data.albums.album[`${albumNumber}`].name

    const responset = await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=4425e763ff6cd49e5f0f14ed57c94ee5&artist=${artistName}&album=${albumName}&format=json`);
    const info = await responset.json();

    const apiSimilare = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artistName}&api_key=4425e763ff6cd49e5f0f14ed57c94ee5&format=json`;
    const rresponse = await fetch(apiSimilare);
    const dataa = await rresponse.json();

    const apiAlbum = `https://api.deezer.com/search/album?q=${albumName}%20${artistName}`;
    const rreesponse = await fetch(apiAlbum);
    const dattaa = await rreesponse.json();

    var albumId = dattaa.data[0].id
    console.log(albumId)

    const apiTrack = `https://api.deezer.com/album/${albumId}`;
    const rreessponse = await fetch(apiTrack);
    const daattaa = await rreessponse.json();

    console.log(data)
    console.log(data.albums.album[0].name)
    console.log(data.albums.album[0].artist.name)
    console.log(info)
    console.log(dataa)
    console.log(dattaa)
    console.log(daattaa)

    var bbak = info.album.image[5]["#text"];

    var albse = dataa.topalbums.album[0].image[2]["#text"]
    var albfi = dataa.topalbums.album[1].image[2]["#text"]
    var albfo = dataa.topalbums.album[2].image[2]["#text"]
    var albth = dataa.topalbums.album[3].image[2]["#text"]
   
    var palbse = dataa.topalbums.album[0].name
    var palbfi = dataa.topalbums.album[1].name
    var palbfo = dataa.topalbums.album[2].name
    var palbth = dataa.topalbums.album[3].name


    document.getElementById("albname").innerHTML = data.albums.album[albumNumber].name;
    document.getElementById("albumName").innerHTML = data.albums.album[albumNumber].name;
    document.getElementById("artistName").innerHTML = data.albums.album[albumNumber].artist.name;
    document.getElementById("medd").src= info.album.image[2]["#text"];
    document.getElementById("conn").style.backgroundImage= `url(${bbak})`;
    document.getElementById("llnse").style.backgroundImage= `url(${albse})`;
    document.getElementById("llnfi").style.backgroundImage= `url(${albfi})`;
    document.getElementById("llnfo").style.backgroundImage= `url(${albfo})`;
    document.getElementById("llnth").style.backgroundImage= `url(${albth})`;
    document.getElementById("albpse").innerHTML = `${palbse}`
    document.getElementById("albpfi").innerHTML = `${palbfi}`
    document.getElementById("albpfo").innerHTML = `${palbfo}`
    document.getElementById("albpth").innerHTML = `${palbth}`

    var trackdata = daattaa.tracks.data
    var tracklen = trackdata.length
    console.log(tracklen)

    function getRandomtrack(max) {
        return Math.floor(Math.random() * max);
    }
    var tracklenght = getRandomtrack(tracklen);
    console.log(tracklenght)

    let trackId = daattaa.tracks.data[`${tracklenght}`].preview
    console.log(trackId)

    document.getElementById("myAudio").src = `${trackId}`
   
}getData();}


function togglePlay() {
    console.log("clicked")
    myAudio.play();
 }
   




function clearMood(){
    document.getElementById("albname").innerHTML = "albumName"
    document.getElementById("albumName").innerHTML = "Album name"
    document.getElementById("artistName").innerHTML = "Artist name"
    document.getElementById("medd").src= "/img/bg_visual1.jpg"
    document.getElementById("conn").style.backgroundImage= `url(/img/bg_visual1.jpg)`;
    document.getElementById("llnse").style.backgroundImage= `url(/img/bg_visual1.jpg)`;
    document.getElementById("llnfi").style.backgroundImage= `url(/img/bg_visual1.jpg)`;
    document.getElementById("llnfo").style.backgroundImage= `url(/img/bg_visual1.jpg)`;
    document.getElementById("llnth").style.backgroundImage= `url(/img/bg_visual1.jpg)`;
    document.getElementById("albpse").innerHTML = `albumName`;
    document.getElementById("albpfi").innerHTML = `albumName`;
    document.getElementById("albpfo").innerHTML = `albumName`;
    document.getElementById("albpth").innerHTML = `albumName`;
    document.getElementById("myAudio").src = ``;

}
/*
    isPlaying ? myAudio.pause() : myAudio.play();
  };
  myAudio.onplaying = function() {
    isPlaying = true;
  };
  myAudio.onpause = function() {
    isPlaying = false;
*/



function mySe(){
    console.log('Se-clicked')

    async function getSe(){

    
        var artistName1 = document.getElementById('artistName').textContent
        var albumName1 = document.getElementById('albpse').textContent
    
        const responset1 = await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=4425e763ff6cd49e5f0f14ed57c94ee5&artist=${artistName1}&album=${albumName1}&format=json`);
        const info1 = await responset1.json();
    
        const apiSimilare1 = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artistName1}&api_key=4425e763ff6cd49e5f0f14ed57c94ee5&format=json`;
        const rresponse1 = await fetch(apiSimilare1);
        const dataa1 = await rresponse1.json();
    
        const apiAlbum1 = `https://api.deezer.com/search/album?q=${albumName1}%20${artistName1}`;
        const rreesponse1 = await fetch(apiAlbum1);
        const dattaa1 = await rreesponse1.json();
        console.log(dattaa1)
        var albumId1 = dattaa1.data[0].id
        console.log(albumId1)
    
        const apiTrack1 = `https://api.deezer.com/album/${albumId1}`;
        const rreessponse1 = await fetch(apiTrack1);
        const daattaa1 = await rreessponse1.json();
        console.log(info1)
        console.log(dataa1)
        console.log(dattaa1)
        console.log(daattaa1)
    
        var bbak1 = info1.album.image[5]["#text"];
    
        var albse1 = dataa1.topalbums.album[0].image[2]["#text"]
        var albfi1 = dataa1.topalbums.album[1].image[2]["#text"]
        var albfo1 = dataa1.topalbums.album[2].image[2]["#text"]
        var albth1 = dataa1.topalbums.album[3].image[2]["#text"]
       
        var palbse1 = dataa1.topalbums.album[0].name
        var palbfi1 = dataa1.topalbums.album[1].name
        var palbfo1 = dataa1.topalbums.album[2].name
        var palbth1 = dataa1.topalbums.album[3].name
    
    
        document.getElementById("albname").innerHTML = daattaa1.title;
        document.getElementById("albumName").innerHTML = daattaa1.title;
        document.getElementById("artistName").innerHTML = daattaa1.artist.name;
        document.getElementById("medd").src= info1.album.image[2]["#text"];
        document.getElementById("conn").style.backgroundImage= `url(${bbak1})`;
        document.getElementById("llnse").style.backgroundImage= `url(${albse1})`;
        document.getElementById("llnfi").style.backgroundImage= `url(${albfi1})`;
        document.getElementById("llnfo").style.backgroundImage= `url(${albfo1})`;
        document.getElementById("llnth").style.backgroundImage= `url(${albth1})`;
        document.getElementById("albpse").innerHTML = `${palbse1}`
        document.getElementById("albpfi").innerHTML = `${palbfi1}`
        document.getElementById("albpfo").innerHTML = `${palbfo1}`
        document.getElementById("albpth").innerHTML = `${palbth1}`
    
        var trackdata1 = daattaa1.tracks.data
        var tracklen1 = trackdata1.length
        console.log(tracklen1)
    
        function getRandomtrack(max) {
            return Math.floor(Math.random() * max);
        }
        var tracklenght1 = getRandomtrack(tracklen1);
        console.log(tracklenght1)
    
        let trackId1 = daattaa1.tracks.data[`${tracklenght1}`].preview
        console.log(trackId1)
    
        document.getElementById("myAudio").src = `${trackId1}`
           
    }getSe();
}

function myFi(){
    console.log('Fi-clicked')
    async function getSe(){

    
        var artistName1 = document.getElementById('artistName').textContent
        var albumName1 = document.getElementById('albpfi').textContent
    
        const responset1 = await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=4425e763ff6cd49e5f0f14ed57c94ee5&artist=${artistName1}&album=${albumName1}&format=json`);
        const info1 = await responset1.json();
    
        const apiSimilare1 = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artistName1}&api_key=4425e763ff6cd49e5f0f14ed57c94ee5&format=json`;
        const rresponse1 = await fetch(apiSimilare1);
        const dataa1 = await rresponse1.json();
    
        const apiAlbum1 = `https://api.deezer.com/search/album?q=${albumName1}%20${artistName1}`;
        const rreesponse1 = await fetch(apiAlbum1);
        const dattaa1 = await rreesponse1.json();
        console.log(dattaa1)
        var albumId1 = dattaa1.data[0].id
        console.log(albumId1)
    
        const apiTrack1 = `https://api.deezer.com/album/${albumId1}`;
        const rreessponse1 = await fetch(apiTrack1);
        const daattaa1 = await rreessponse1.json();
        console.log(info1)
        console.log(dataa1)
        console.log(dattaa1)
        console.log(daattaa1)
    
        var bbak1 = info1.album.image[5]["#text"];
    
        var albse1 = dataa1.topalbums.album[0].image[2]["#text"]
        var albfi1 = dataa1.topalbums.album[1].image[2]["#text"]
        var albfo1 = dataa1.topalbums.album[2].image[2]["#text"]
        var albth1 = dataa1.topalbums.album[3].image[2]["#text"]
       
        var palbse1 = dataa1.topalbums.album[0].name
        var palbfi1 = dataa1.topalbums.album[1].name
        var palbfo1 = dataa1.topalbums.album[2].name
        var palbth1 = dataa1.topalbums.album[3].name
    
    
        document.getElementById("albname").innerHTML = daattaa1.title;
        document.getElementById("albumName").innerHTML = daattaa1.title;
        document.getElementById("artistName").innerHTML = daattaa1.artist.name;
        document.getElementById("medd").src= info1.album.image[2]["#text"];
        document.getElementById("conn").style.backgroundImage= `url(${bbak1})`;
        document.getElementById("llnse").style.backgroundImage= `url(${albse1})`;
        document.getElementById("llnfi").style.backgroundImage= `url(${albfi1})`;
        document.getElementById("llnfo").style.backgroundImage= `url(${albfo1})`;
        document.getElementById("llnth").style.backgroundImage= `url(${albth1})`;
        document.getElementById("albpse").innerHTML = `${palbse1}`
        document.getElementById("albpfi").innerHTML = `${palbfi1}`
        document.getElementById("albpfo").innerHTML = `${palbfo1}`
        document.getElementById("albpth").innerHTML = `${palbth1}`
    
        var trackdata1 = daattaa1.tracks.data
        var tracklen1 = trackdata1.length
        console.log(tracklen1)
    
        function getRandomtrack(max) {
            return Math.floor(Math.random() * max);
        }
        var tracklenght1 = getRandomtrack(tracklen1);
        console.log(tracklenght1)
    
        let trackId1 = daattaa1.tracks.data[`${tracklenght1}`].preview
        console.log(trackId1)
    
        document.getElementById("myAudio").src = `${trackId1}`
       
    }getSe();
}

function myFo(){
    console.log('Fo-clicked')

    async function getSe(){

    
        var artistName1 = document.getElementById('artistName').textContent
        var albumName1 = document.getElementById('albpfo').textContent
    
        const responset1 = await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=4425e763ff6cd49e5f0f14ed57c94ee5&artist=${artistName1}&album=${albumName1}&format=json`);
        const info1 = await responset1.json();
    
        const apiSimilare1 = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artistName1}&api_key=4425e763ff6cd49e5f0f14ed57c94ee5&format=json`;
        const rresponse1 = await fetch(apiSimilare1);
        const dataa1 = await rresponse1.json();
    
        const apiAlbum1 = `https://api.deezer.com/search/album?q=${albumName1}%20${artistName1}`;
        const rreesponse1 = await fetch(apiAlbum1);
        const dattaa1 = await rreesponse1.json();
        console.log(dattaa1)
        var albumId1 = dattaa1.data[0].id
        console.log(albumId1)
    
        const apiTrack1 = `https://api.deezer.com/album/${albumId1}`;
        const rreessponse1 = await fetch(apiTrack1);
        const daattaa1 = await rreessponse1.json();
        console.log(info1)
        console.log(dataa1)
        console.log(dattaa1)
        console.log(daattaa1)
    
        var bbak1 = info1.album.image[5]["#text"];
    
        var albse1 = dataa1.topalbums.album[0].image[2]["#text"]
        var albfi1 = dataa1.topalbums.album[1].image[2]["#text"]
        var albfo1 = dataa1.topalbums.album[2].image[2]["#text"]
        var albth1 = dataa1.topalbums.album[3].image[2]["#text"]
       
        var palbse1 = dataa1.topalbums.album[0].name
        var palbfi1 = dataa1.topalbums.album[1].name
        var palbfo1 = dataa1.topalbums.album[2].name
        var palbth1 = dataa1.topalbums.album[3].name
    
    
        document.getElementById("albname").innerHTML = daattaa1.title;
        document.getElementById("albumName").innerHTML = daattaa1.title;
        document.getElementById("artistName").innerHTML = daattaa1.artist.name;
        document.getElementById("medd").src= info1.album.image[2]["#text"];
        document.getElementById("conn").style.backgroundImage= `url(${bbak1})`;
        document.getElementById("llnse").style.backgroundImage= `url(${albse1})`;
        document.getElementById("llnfi").style.backgroundImage= `url(${albfi1})`;
        document.getElementById("llnfo").style.backgroundImage= `url(${albfo1})`;
        document.getElementById("llnth").style.backgroundImage= `url(${albth1})`;
        document.getElementById("albpse").innerHTML = `${palbse1}`
        document.getElementById("albpfi").innerHTML = `${palbfi1}`
        document.getElementById("albpfo").innerHTML = `${palbfo1}`
        document.getElementById("albpth").innerHTML = `${palbth1}`
    
        var trackdata1 = daattaa1.tracks.data
        var tracklen1 = trackdata1.length
        console.log(tracklen1)

    
        function getRandomtrack(max) {
            return Math.floor(Math.random() * max);
        }
        
        var tracklenght1 = getRandomtrack(tracklen1);
        console.log(tracklenght1)
    
        let trackId1 = daattaa1.tracks.data[`${tracklenght1}`].preview
        console.log(trackId1)
    
        document.getElementById("myAudio").src = `${trackId1}`
       
    }getSe();
    
}

function myTh(){
    console.log('Th-clicked')

    async function getSe(){

    
        var artistName1 = document.getElementById('artistName').textContent
        var albumName1 = document.getElementById('albpth').textContent
    
        const responset1 = await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=4425e763ff6cd49e5f0f14ed57c94ee5&artist=${artistName1}&album=${albumName1}&format=json`);
        const info1 = await responset1.json();
    
        const apiSimilare1 = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artistName1}&api_key=4425e763ff6cd49e5f0f14ed57c94ee5&format=json`;
        const rresponse1 = await fetch(apiSimilare1);
        const dataa1 = await rresponse1.json();
    
        const apiAlbum1 = `https://api.deezer.com/search/album?q=${albumName1}%20${artistName1}`;
        const rreesponse1 = await fetch(apiAlbum1);
        const dattaa1 = await rreesponse1.json();
        console.log(dattaa1)
        var albumId1 = dattaa1.data[0].id
        console.log(albumId1)
    
        const apiTrack1 = `https://api.deezer.com/album/${albumId1}`;
        const rreessponse1 = await fetch(apiTrack1);
        const daattaa1 = await rreessponse1.json();
        console.log(info1)
        console.log(dataa1)
        console.log(dattaa1)
        console.log(daattaa1)
    
        var bbak1 = info1.album.image[5]["#text"];
    
        var albse1 = dataa1.topalbums.album[0].image[2]["#text"]
        var albfi1 = dataa1.topalbums.album[1].image[2]["#text"]
        var albfo1 = dataa1.topalbums.album[2].image[2]["#text"]
        var albth1 = dataa1.topalbums.album[3].image[2]["#text"]
       
        var palbse1 = dataa1.topalbums.album[0].name
        var palbfi1 = dataa1.topalbums.album[1].name
        var palbfo1 = dataa1.topalbums.album[2].name
        var palbth1 = dataa1.topalbums.album[3].name
    
    
        document.getElementById("albname").innerHTML = daattaa1.title;
        document.getElementById("albumName").innerHTML = daattaa1.title;
        document.getElementById("artistName").innerHTML = daattaa1.artist.name;
        document.getElementById("medd").src= info1.album.image[2]["#text"];
        document.getElementById("conn").style.backgroundImage= `url(${bbak1})`;
        document.getElementById("llnse").style.backgroundImage= `url(${albse1})`;
        document.getElementById("llnfi").style.backgroundImage= `url(${albfi1})`;
        document.getElementById("llnfo").style.backgroundImage= `url(${albfo1})`;
        document.getElementById("llnth").style.backgroundImage= `url(${albth1})`;
        document.getElementById("albpse").innerHTML = `${palbse1}`
        document.getElementById("albpfi").innerHTML = `${palbfi1}`
        document.getElementById("albpfo").innerHTML = `${palbfo1}`
        document.getElementById("albpth").innerHTML = `${palbth1}`
    
        var trackdata1 = daattaa1.tracks.data
        var tracklen1 = trackdata1.length
        console.log('lenght =' + tracklen1)
    
        function getRandomtrack(max) {
            return Math.floor(Math.random() * max);
        }
        var tracklenght1 = getRandomtrack(tracklen1);
        console.log('selected =' + tracklenght1)
    
        let trackId1 = daattaa1.tracks.data[`${tracklenght1}`].preview
        console.log(trackId1)
    
        document.getElementById("myAudio").src = `${trackId1}`
       
    }getSe();
}


function rrest(){
    myAudio.pause();

    let albumRe = document.getElementById('albname').textContent
    let artistRe = document.getElementById('artistName').textContent
    console.log(albumRe)
    console.log(artistRe)


    const apiTrackRe = `https://api.deezer.com/search/album?q=${albumRe}%20${artistRe}`;
    async function getother(){
        const ress = await fetch(apiTrackRe);
        const ddti = await ress.json();
        console.log(ddti)

        var albumIdRe = ddti.data[0].id
    
        const apiTrackPlay = `https://api.deezer.com/album/${albumIdRe}`;
        const rres = await fetch(apiTrackPlay);
        const dtti = await rres.json();
        var trackdataRe = dtti.tracks.data
        var tracklenRe = trackdataRe.length
        console.log(tracklenRe)
    
        function getRandomtrack(max) {
            return Math.floor(Math.random() * max);
        }
        var reTracklenght = getRandomtrack(tracklenRe);
        console.log(reTracklenght)
        let trackIdRe = dtti.tracks.data[`${reTracklenght}`].preview
        console.log(trackIdRe)
    
        document.getElementById("myAudio").src = `${trackIdRe}`
    
        function togglePlay() {
            console.log("clicked")
            myAudio.play();
         }
        
    
    }getother()
    }
    







/*
var artistse = document.getElementById('artistName')

var albumse = document.getElementById('albpse')
var albumfi = document.getElementById('albpfi')
var albumfo = document.getElementById('albpfo')
var albumth = document.getElementById('albpth')


function mySe(){
    const apise = `https://api.deezer.com/search/album?q=${albumse}%20${artistse}`;
    const reeso = await fetch(apise);
    const dato = await reeso.json();
    var seId = dato.data[0].id

    const seinfo = `https://api.deezer.com/album/${seId}`;
    const sefetch = await fetch(apiTrack);
    const doto = await sefetch.json();
    console.log(doto)

    document.getElementById("medd").src= info.album.image[2]["#text"];
    document.getElementById("albumName").innerHTML = data.albums.album[albumNumber].name;
    document.getElementById("artistName").innerHTML = data.albums.album[albumNumber].artist.name;
    document.getElementById("albname").innerHTML = data.albums.album[albumNumber].name;
    document.getElementById("conn").style.backgroundImage= `url(${bbak})`;

    
    document.getElementById("albpse").innerHTML = `${palbse}`
    document.getElementById("albpfi").innerHTML = `${palbfi}`
    document.getElementById("albpfo").innerHTML = `${palbfo}`
    document.getElementById("albpth").innerHTML = `${palbth}`    
////////////
    document.getElementById("llnse").style.backgroundImage= `url(${albse})`;
    document.getElementById("llnfi").style.backgroundImage= `url(${albfi})`;
    document.getElementById("llnfo").style.backgroundImage= `url(${albfo})`;
    document.getElementById("llnth").style.backgroundImage= `url(${albth})`;

}
function myFi(){


    document.getElementById("medd").src= info.album.image[2]["#text"];
    document.getElementById("albumName").innerHTML = data.albums.album[albumNumber].name;
    document.getElementById("artistName").innerHTML = data.albums.album[albumNumber].artist.name;
    document.getElementById("albname").innerHTML = data.albums.album[albumNumber].name;
    document.getElementById("conn").style.backgroundImage= `url(${bbak})`;

    
    document.getElementById("albpse").innerHTML = `${palbse}`
    document.getElementById("albpfi").innerHTML = `${palbfi}`
    document.getElementById("albpfo").innerHTML = `${palbfo}`
    document.getElementById("albpth").innerHTML = `${palbth}`    
//////
    document.getElementById("llnse").style.backgroundImage= `url(${albse})`;
    document.getElementById("llnfi").style.backgroundImage= `url(${albfi})`;
    document.getElementById("llnfo").style.backgroundImage= `url(${albfo})`;
    document.getElementById("llnth").style.backgroundImage= `url(${albth})`;
*/

/*
function myFo(){

    document.getElementById("medd").src= info.album.image[2]["#text"];
    document.getElementById("albumName").innerHTML = data.albums.album[albumNumber].name;
    document.getElementById("artistName").innerHTML = data.albums.album[albumNumber].artist.name;
    document.getElementById("albname").innerHTML = data.albums.album[albumNumber].name;
    document.getElementById("conn").style.backgroundImage= `url(${bbak})`;

    
    document.getElementById("albpse").innerHTML = `${palbse}`
    document.getElementById("albpfi").innerHTML = `${palbfi}`
    document.getElementById("albpfo").innerHTML = `${palbfo}`
    document.getElementById("albpth").innerHTML = `${palbth}`    
//////
    document.getElementById("llnse").style.backgroundImage= `url(${albse})`;
    document.getElementById("llnfi").style.backgroundImage= `url(${albfi})`;
    document.getElementById("llnfo").style.backgroundImage= `url(${albfo})`;
    document.getElementById("llnth").style.backgroundImage= `url(${albth})`;

}
function myTh(){

    document.getElementById("medd").src= info.album.image[2]["#text"];
    document.getElementById("albumName").innerHTML = data.albums.album[albumNumber].name;
    document.getElementById("artistName").innerHTML = data.albums.album[albumNumber].artist.name;
    document.getElementById("albname").innerHTML = data.albums.album[albumNumber].name;
    document.getElementById("conn").style.backgroundImage= `url(${bbak})`;

    
    document.getElementById("albpse").innerHTML = `${palbse}`
    document.getElementById("albpfi").innerHTML = `${palbfi}`
    document.getElementById("albpfo").innerHTML = `${palbfo}`
    document.getElementById("albpth").innerHTML = `${palbth}`    
//////
    document.getElementById("llnse").style.backgroundImage= `url(${albse})`;
    document.getElementById("llnfi").style.backgroundImage= `url(${albfi})`;
    document.getElementById("llnfo").style.backgroundImage= `url(${albfo})`;
    document.getElementById("llnth").style.backgroundImage= `url(${albth})`;

}



*/