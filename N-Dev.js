
function myMood(){


    for (let i = 0; i < 8; i++) {
        if(document.getElementsByName('mood')[i].checked){
            genre = document.getElementsByName('mood')[i].value;
            }
        }
          for (let i = 0; i < 8; i++) {
            if(document.getElementsByName('genre')[i].checked){
                genre = document.getElementsByName('genre')[i].value;
            }
        }




    var divtrackVide1 = document.getElementById('myAudio');
var trackVide1 = divtrackVide1.src

var oldAlbN = document.getElementById('albumName').textContent;
document.getElementById('lload').style = 'display: flex;';

setTimeout(function() { clearLload() }, 6000);
function clearLload(){
    document.getElementById('lload').style = 'display: none;'; 

};
setTimeout(function() { Fatalerrors() }, 8000);
setTimeout(function() { nopre() }, 8005);



document.getElementById("myAudio").src = 'https://cdns-preview-8.dzcdn.net/stream/c-8b68a0fa81dcb1f3d66042292291c697-4.mp3';

async function getData(){




    const apiAlbums = `https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${genre}&api_key=4425e763ff6cd49e5f0f14ed57c94ee5&format=json&btnI=Im+Feeling+Lucky`;
    const response = await fetch(apiAlbums);
        const data = await response.json();    
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    var lenghtalb = data.albums.album.length
    var albumNumber = getRandomInt(lenghtalb);
    
    var artistName = data.albums.album[`${albumNumber}`].artist.name
    var albumName = data.albums.album[`${albumNumber}`].name


    


    const responset = await fetch(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=4425e763ff6cd49e5f0f14ed57c94ee5&artist=${artistName}&album=${albumName}&format=json&btnI=Im+Feeling+Lucky`);
    const info = await responset.json();

    const apiSimilare = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artistName}&api_key=4425e763ff6cd49e5f0f14ed57c94ee5&format=json`;
    const rresponse = await fetch(apiSimilare);
    const dataa = await rresponse.json();

    var bbak = data.albums.album[`${albumNumber}`].image[2]["#text"];

    var albse = dataa.topalbums.album[0].image[2]["#text"]
    var albfi = dataa.topalbums.album[1].image[2]["#text"]
    var albfo = dataa.topalbums.album[2].image[2]["#text"]
    var albth = dataa.topalbums.album[3].image[2]["#text"]
   
    var palbse = dataa.topalbums.album[0].name
    var palbfi = dataa.topalbums.album[1].name
    var palbfo = dataa.topalbums.album[2].name
    var palbth = dataa.topalbums.album[3].name
    document.getElementById('similaire').style = 'display: none;';
    document.getElementById('lleftid').style = 'display: flex;';
    var lenalb = dataa.topalbums.album.length;

    if(lenalb >= 4){
        document.getElementById('lleftid').innerHTML = `      <div id="llnth" class="llitem-n" onclick="myTh()"><p id="albpth">nameAlbum</p></div>

        <div id="llnfo" class="llitem-n" onclick="myFo()"><p id="albpfo">nameAlbum</p></div>

        <div id="llnfi" class="llitem-n" onclick="myFi()"><p id="albpfi">nameAlbum</p></div>

        <div id="llnse" class="llitem-n" onclick="mySe()"><p id="albpse">nameAlbum</p></div>
  `
  document.getElementById("llnse").style.backgroundImage= `url(${albse}), url('https://decizia.com/blog/wp-content/uploads/2017/06/default-placeholder.png')`;

  document.getElementById("llnfi").style.backgroundImage= `url(${albfi}), url('https://decizia.com/blog/wp-content/uploads/2017/06/default-placeholder.png')`;


  document.getElementById("llnfo").style.backgroundImage= `url(${albfo}), url('https://decizia.com/blog/wp-content/uploads/2017/06/default-placeholder.png')`;


  document.getElementById("llnth").style.backgroundImage= `url(${albth}), url('https://decizia.com/blog/wp-content/uploads/2017/06/default-placeholder.png')`;


  document.getElementById("albpse").innerHTML = `${palbse}`
  document.getElementById("albpfi").innerHTML = `${palbfi}`
  document.getElementById("albpfo").innerHTML = `${palbfo}`
  document.getElementById("albpth").innerHTML = `${palbth}`
    }
    if(lenalb == 3){
        document.getElementById('lleftid').innerHTML = `
        <div id="llnfo" class="llitem-n" onclick="myFo()"><p id="albpfo">nameAlbum</p></div>
        <div id="llnfi" class="llitem-n" onclick="myFi()"><p id="albpfi">nameAlbum</p></div>
        <div id="llnse" class="llitem-n" onclick="mySe()"><p id="albpse">nameAlbum</p></div>
  `
  document.getElementById("llnse").style.backgroundImage= `url(${albse}), url('https://decizia.com/blog/wp-content/uploads/2017/06/default-placeholder.png')`;
  document.getElementById("llnfi").style.backgroundImage= `url(${albfi}), url('https://decizia.com/blog/wp-content/uploads/2017/06/default-placeholder.png')`;
  document.getElementById("llnfo").style.backgroundImage= `url(${albfo}), url('https://decizia.com/blog/wp-content/uploads/2017/06/default-placeholder.png')`;
  document.getElementById("albpse").innerHTML = `${palbse}`
  document.getElementById("albpfi").innerHTML = `${palbfi}`
  document.getElementById("albpfo").innerHTML = `${palbfo}`
    }
    if(lenalb == 2){
        document.getElementById('lleftid').innerHTML = `
        <div id="llnfi" class="llitem-n" onclick="myFi()"><p id="albpfi">nameAlbum</p></div>
        <div id="llnse" class="llitem-n" onclick="mySe()"><p id="albpse">nameAlbum</p></div>
  `
  document.getElementById("llnse").style.backgroundImage= `url(${albse}), url('https://decizia.com/blog/wp-content/uploads/2017/06/default-placeholder.png')`;
  document.getElementById("llnfi").style.backgroundImage= `url(${albfi}), url('https://decizia.com/blog/wp-content/uploads/2017/06/default-placeholder.png')`;
  document.getElementById("albpse").innerHTML = `${palbse}, url('https://decizia.com/blog/wp-content/uploads/2017/06/default-placeholder.png')`
  document.getElementById("albpfi").innerHTML = `${palbfi}, url('https://decizia.com/blog/wp-content/uploads/2017/06/default-placeholder.png')`
    }
    if(lenalb == 1){
        document.getElementById('lleftid').innerHTML = `
        <div id="llnse" class="llitem-n" onclick="mySe()"><p id="albpse">nameAlbum</p></div>
  `
  document.getElementById("llnse").style.backgroundImage= `url(${albse}), url('https://decizia.com/blog/wp-content/uploads/2017/06/default-placeholder.png')`;
  document.getElementById("albpse").innerHTML = `${palbse}`

    }



    document.getElementById("albname").innerHTML = data.albums.album[albumNumber].name;
    document.getElementById("albumName").innerHTML = data.albums.album[albumNumber].name;
    document.getElementById("artistName").innerHTML = data.albums.album[albumNumber].artist.name;
    document.getElementById("medd").src= data.albums.album[`${albumNumber}`].image[2]["#text"];
    document.getElementById("conn").style.backgroundImage= `url(${bbak})`;


    const apiAlbum = `https://api.deezer.com/search/album?q=${albumName}%20${artistName}`;
    const rreesponse = await fetch(apiAlbum);
    const dattaa = await rreesponse.json();

    var albumId = dattaa.data[0].id
    if (albumId == null){
    }

    const apiTrack = `https://api.deezer.com/album/${albumId}`;
    const rreessponse = await fetch(apiTrack);
    const daattaa = await rreessponse.json();


    var trackdata = daattaa.tracks.data
    var tracklen = trackdata.length
    function getRandomtrack(max) {
    return Math.floor(Math.random() * max);
    }
    var tracklenght = getRandomtrack(tracklen);
    let trackId = daattaa.tracks.data[`${tracklenght}`].preview
    var trackName = daattaa.tracks.data[`${tracklenght}`].title
    document.getElementById('trackName').innerHTML = trackName
    document.getElementById("myAudio").src = `${trackId}`
}getData();

$(document).ready(function()
{
    $("#medd").on("error", function(){
        $(this).attr('src', 'https://decizia.com/blog/wp-content/uploads/2017/06/default-placeholder.png');
    });
    
});



async function Fatalerrors(){
    var albN = document.getElementById('albumName').textContent;
    var closeLload = document.getElementById('lload')
    if(albN == oldAlbN){
        closeLload.onclick = function() { document.getElementById('lload').style = 'display: none;'; document.getElementById('lloading').innerHTML = 'Load'; document.getElementById('lloadingTry').innerHTML = ' ';};
        document.getElementById('lload').style = 'display: flex;';
        document.getElementById('lloading').innerHTML = 'A fatal error';
        document.getElementById('lloadingTry').innerHTML = 'Please try again or another condition'
    }
};
function nopre(){
var divtrackVide = document.getElementById('myAudio');
var trackVide = divtrackVide.src

if(trackVide == trackVide1){
    document.getElementById('trackName').innerHTML = 'no-preview';
    document.getElementById('myAudio').src = 'https://cdns-preview-8.dzcdn.net/stream/c-8b68a0fa81dcb1f3d66042292291c697-4.mp3';
}}

}
function togglePlay() {
    var nonopp = "no-preview";
    var nopp = document.getElementById('trackName').textContent;

    if(nopp === nonopp){

        var closeLload = document.getElementById('lload');

        closeLload.onclick = function() { 
            document.getElementById('lload').style = 'display: none;'; document.getElementById('lloading').innerHTML = 'Load'; document.getElementById('lloadingTry').innerHTML = ' ';};
        document.getElementById('lload').style = 'display: flex;';
        document.getElementById('lloading').innerHTML = 'there no preview for this track';
        document.getElementById('lloadingTry').innerHTML = ''

    }else{
        myAudio.play();

    }
 }

function clearMood(){

    document.getElementById("albname").innerHTML = "albumName"
    document.getElementById("albumName").innerHTML = "Album name"
    document.getElementById("artistName").innerHTML = "Artist name"
    document.getElementById("medd").src= "https://tlgur.com/d/4RmQk56g"
    document.getElementById("conn").style.backgroundImage= `url(https://tlgur.com/d/4RmQk56g)`;
    document.getElementById("llnse").style.backgroundImage= `url(https://tlgur.com/d/4RmQk56g)`;
    document.getElementById("llnfi").style.backgroundImage= `url(https://tlgur.com/d/4RmQk56g)`;
    document.getElementById("llnfo").style.backgroundImage= `url(https://tlgur.com/d/4RmQk56g)`;
    document.getElementById("llnth").style.backgroundImage= `url(https://tlgur.com/d/4RmQk56g)`;
    document.getElementById("albpse").innerHTML = `albumName`;
    document.getElementById("albpfo").innerHTML = `albumName`;
    document.getElementById("albpfi").innerHTML = `albumName`;
    document.getElementById("albpth").innerHTML = `albumName`;
    document.getElementById("myAudio").src = `https://cdns-preview-8.dzcdn.net/stream/c-8b68a0fa81dcb1f3d66042292291c697-4.mp3`;
    document.getElementById('trackName').innerHTML = 'trackName'
    document.getElementById('lleftid').style = 'display: none;';
    document.getElementById('similaire').style = 'display: block;';

/*     disabled = true
 */
    if(screen.width < 600){
        document.getElementById('pTop').style = 'margin-top: .8vw; padding-top: -2vw;';
    }

    document.getElementById('conta').innerHTML = `          <div class="cat">
       <label onclick="myDark()">
          <input name="mood" type="radio" value="dark"><span >Dark</span>
       </label>
    </div>
    
    <div class="cat">
       <label onclick="myClassic()">
          <input name="mood" type="radio" disabled="false" value="Classic"><span>Classic</span>
       </label>
    </div>
    
    <div class="cat">
       <label onclick="myChill()">
          <input name="mood" type="radio" value="Chill"><span>Chill</span>
       </label>
    </div>
    
    <div class="cat">
       <label onclick="mySad()">
          <input name="mood" type="radio" value="Sad"><span>Sad</span>
       </label>
    </div>
    
    <div class="cat">
       <label onclick="myCLoud()">
          <input name="mood" type="radio" value="Cloud"><span>Cloud</span>
       </label>
    </div>
    
    <div class="cat">
       <label onclick="myFrench()">
          <input name="mood" type="radio" value="French"><span>French</span>
       </label>
    </div>
    
      <div class="cat">
       <label onclick="myArabic()">
          <input name="mood" type="radio" value="Arabic"><span>Arabic</span>
       </label>
    </div>
    
      <div class="cat">
       <label onclick="myJapan()">
          <input name="mood" type="radio" value="Japan"><span>Japan</span>
       </label>
    </div>
    
`
document.getElementById('ggr').innerHTML = `        

<div class="cat">
   <label id="inp1">
      <input name="mood" type="radio" disabled="true" value="1"><span>Dont</span>
   </label>
</div>

<div class="cat">
   <label id="inp2">
      <input id="inp2" name="mood" type="radio" disabled="true" value="1"><span>Be</span>
   </label>
</div>

<div class="cat">
   <label id="inp3">
      <input id="inp3" name="mood" type="radio" disabled="true" value="1"><span>Just</span>
   </label>
</div>

<div class="cat">
   <label id="inp4">
      <input id="inp4" name="mood" type="radio" disabled="true" value="1"><span>Wath</span>
   </label>
</div>

<div class="cat">
   <label id="inp5">
      <input id="inp5" name="mood" type="radio" disabled="true" value="1"><span>You</span>
   </label>
</div>

<div class="cat">
   <label id="inp6">
      <input id="inp6" name="mood" type="radio" disabled="true" value="1"><span>Want</span>
   </label>
</div>

  <div class="cat">
   <label id="inp7">
      <input id="inp7" name="mood" type="radio" disabled="true" value="1"><span>To</span>
   </label>
</div>

  <div class="cat">
   <label id="inp8">
      <input id="inp8" name="mood" type="radio" disabled="true" value="1"><span>Be</span>
   </label>
</div>

`
document.getElementById('ggr').style.cursor = 'default';       


}



function mySe(){

    async function getSe(){

    
        var artistName1 = document.getElementById('artistName').textContent
        var albumName1 = document.getElementById('albpse').textContent
    
        const responset1 = await fetch(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=4425e763ff6cd49e5f0f14ed57c94ee5&artist=${artistName1}&album=${albumName1}&format=json`);
        const info1 = await responset1.json();
    
        const apiSimilare1 = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artistName1}&api_key=4425e763ff6cd49e5f0f14ed57c94ee5&format=json`;
        const rresponse1 = await fetch(apiSimilare1);
        const dataa1 = await rresponse1.json();
    
        var bbak1 = info1.album.image[5]["#text"];
    
        var albse1 = dataa1.topalbums.album[0].image[2]["#text"]
        var albfi1 = dataa1.topalbums.album[1].image[2]["#text"]
        var albfo1 = dataa1.topalbums.album[2].image[2]["#text"]
        var albth1 = dataa1.topalbums.album[3].image[2]["#text"]
       
        var palbse1 = dataa1.topalbums.album[0].name
        var palbfi1 = dataa1.topalbums.album[1].name
        var palbfo1 = dataa1.topalbums.album[2].name
        var palbth1 = dataa1.topalbums.album[3].name
    
        document.getElementById("albname").innerHTML = info1.album.name;
        document.getElementById("albumName").innerHTML = info1.album.name;
        document.getElementById("artistName").innerHTML = info1.album.artist;
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


        const apiAlbum1 = `https://api.deezer.com/search/album?q=${albumName1}%20${artistName1}`;
        const rreesponse1 = await fetch(apiAlbum1);
        const dattaa1 = await rreesponse1.json();
        var albumId1 = dattaa1.data[0].id
    
        const apiTrack1 = `https://api.deezer.com/album/${albumId1}`;
        const rreessponse1 = await fetch(apiTrack1);
        const daattaa1 = await rreessponse1.json();

    
        var trackdata1 = daattaa1.tracks.data
        var tracklen1 = trackdata1.length

        function getRandomtrack(max) {
            return Math.floor(Math.random() * max);
        }
        var tracklenght1 = getRandomtrack(tracklen1);
    
        let trackId1 = daattaa1.tracks.data[`${tracklenght1}`].preview

        var trackName = daattaa1.tracks.data[`${tracklenght1}`].title
    document.getElementById('trackName').innerHTML = trackName

        document.getElementById("myAudio").src = `${trackId1}`
           
    }getSe();
}
function myFi(){

    async function getSe(){

    
        var artistName1 = document.getElementById('artistName').textContent
        var albumName1 = document.getElementById('albpfi').textContent
    
        const responset1 = await fetch(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=4425e763ff6cd49e5f0f14ed57c94ee5&artist=${artistName1}&album=${albumName1}&format=json`);
        const info1 = await responset1.json();
    
        const apiSimilare1 = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artistName1}&api_key=4425e763ff6cd49e5f0f14ed57c94ee5&format=json`;
        const rresponse1 = await fetch(apiSimilare1);
        const dataa1 = await rresponse1.json();

        
        var bbak1 = info1.album.image[5]["#text"];
    
        var albse1 = dataa1.topalbums.album[0].image[2]["#text"]
        var albfi1 = dataa1.topalbums.album[1].image[2]["#text"]
        var albfo1 = dataa1.topalbums.album[2].image[2]["#text"]
        var albth1 = dataa1.topalbums.album[3].image[2]["#text"]
       
        var palbse1 = dataa1.topalbums.album[0].name
        var palbfi1 = dataa1.topalbums.album[1].name
        var palbfo1 = dataa1.topalbums.album[2].name
        var palbth1 = dataa1.topalbums.album[3].name
    
            document.getElementById("albname").innerHTML = info1.album.name;
        document.getElementById("albumName").innerHTML = info1.album.name;
        document.getElementById("artistName").innerHTML = info1.album.artist;
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


        const apiAlbum1 = `https://api.deezer.com/search/album?q=${albumName1}%20${artistName1}`;
        const rreesponse1 = await fetch(apiAlbum1);
        const dattaa1 = await rreesponse1.json();

        var albumId1 = dattaa1.data[0].id

        
        const apiTrack1 = `https://api.deezer.com/album/${albumId1}`;
        const rreessponse1 = await fetch(apiTrack1);
        const daattaa1 = await rreessponse1.json();


    
        var trackdata1 = daattaa1.tracks.data
        var tracklen1 = trackdata1.length

        
        function getRandomtrack(max) {
            return Math.floor(Math.random() * max);
        }
        var tracklenght1 = getRandomtrack(tracklen1);

        
        let trackId1 = daattaa1.tracks.data[`${tracklenght1}`].preview

        var trackName = daattaa1.tracks.data[`${tracklenght1}`].title
    document.getElementById('trackName').innerHTML = trackName

        document.getElementById("myAudio").src = `${trackId1}`
       
    }getSe();
}
function myFo(){

    
    async function getSe(){

    
        var artistName1 = document.getElementById('artistName').textContent
        var albumName1 = document.getElementById('albpfo').textContent
    
        const responset1 = await fetch(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=4425e763ff6cd49e5f0f14ed57c94ee5&artist=${artistName1}&album=${albumName1}&format=json`);
        const info1 = await responset1.json();
    
        const apiSimilare1 = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artistName1}&api_key=4425e763ff6cd49e5f0f14ed57c94ee5&format=json`;
        const rresponse1 = await fetch(apiSimilare1);
        const dataa1 = await rresponse1.json();

        
        var bbak1 = info1.album.image[5]["#text"];
    
        var albse1 = dataa1.topalbums.album[0].image[2]["#text"]
        var albfi1 = dataa1.topalbums.album[1].image[2]["#text"]
        var albfo1 = dataa1.topalbums.album[2].image[2]["#text"]
        var albth1 = dataa1.topalbums.album[3].image[2]["#text"]
       
        var palbse1 = dataa1.topalbums.album[0].name
        var palbfi1 = dataa1.topalbums.album[1].name
        var palbfo1 = dataa1.topalbums.album[2].name
        var palbth1 = dataa1.topalbums.album[3].name
    
            document.getElementById("albname").innerHTML = info1.album.name;
        document.getElementById("albumName").innerHTML = info1.album.name;
        document.getElementById("artistName").innerHTML = info1.album.artist;
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


        const apiAlbum1 = `https://api.deezer.com/search/album?q=${albumName1}%20${artistName1}`;
        const rreesponse1 = await fetch(apiAlbum1);
        const dattaa1 = await rreesponse1.json();

        var albumId1 = dattaa1.data[0].id
    
        const apiTrack1 = `https://api.deezer.com/album/${albumId1}`;
        const rreessponse1 = await fetch(apiTrack1);
        const daattaa1 = await rreessponse1.json();

        
    
        var trackdata1 = daattaa1.tracks.data
        var tracklen1 = trackdata1.length

        
        function getRandomtrack(max) {
            return Math.floor(Math.random() * max);
        }
        var tracklenght1 = getRandomtrack(tracklen1);

        
        let trackId1 = daattaa1.tracks.data[`${tracklenght1}`].preview

        var trackName = daattaa1.tracks.data[`${tracklenght1}`].title
    document.getElementById('trackName').innerHTML = trackName

        document.getElementById("myAudio").src = `${trackId1}`
       
    }getSe();
    
}
function myTh(){

    
    async function getSe(){

    
        var artistName1 = document.getElementById('artistName').textContent
        var albumName1 = document.getElementById('albpth').textContent
    
        const responset1 = await fetch(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=4425e763ff6cd49e5f0f14ed57c94ee5&artist=${artistName1}&album=${albumName1}&format=json`);
        const info1 = await responset1.json();
    
        const apiSimilare1 = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artistName1}&api_key=4425e763ff6cd49e5f0f14ed57c94ee5&format=json`;
        const rresponse1 = await fetch(apiSimilare1);
        const dataa1 = await rresponse1.json();

        
        var bbak1 = info1.album.image[5]["#text"];
    
        var albse1 = dataa1.topalbums.album[0].image[2]["#text"]
        var albfi1 = dataa1.topalbums.album[1].image[2]["#text"]
        var albfo1 = dataa1.topalbums.album[2].image[2]["#text"]
        var albth1 = dataa1.topalbums.album[3].image[2]["#text"]
       
        var palbse1 = dataa1.topalbums.album[0].name
        var palbfi1 = dataa1.topalbums.album[1].name
        var palbfo1 = dataa1.topalbums.album[2].name
        var palbth1 = dataa1.topalbums.album[3].name
    
            document.getElementById("albname").innerHTML = info1.album.name;
        document.getElementById("albumName").innerHTML = info1.album.name;
        document.getElementById("artistName").innerHTML = info1.album.artist;
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


        const apiAlbum1 = `https://api.deezer.com/search/album?q=${albumName1}%20${artistName1}`;
        const rreesponse1 = await fetch(apiAlbum1);
        const dattaa1 = await rreesponse1.json();
        var albumId1 = dattaa1.data[0].id
    
        const apiTrack1 = `https://api.deezer.com/album/${albumId1}`;
        const rreessponse1 = await fetch(apiTrack1);
        const daattaa1 = await rreessponse1.json();


    
        var trackdata1 = daattaa1.tracks.data
        var tracklen1 = trackdata1.length
    
        function getRandomtrack(max) {
            return Math.floor(Math.random() * max);
        }
        var tracklenght1 = getRandomtrack(tracklen1);
    
        let trackId1 = daattaa1.tracks.data[`${tracklenght1}`].preview

        var trackName = daattaa1.tracks.data[`${tracklenght1}`].title
    document.getElementById('trackName').innerHTML = trackName

        document.getElementById("myAudio").src = `${trackId1}`
       
    }getSe();
}
function rrest(){
    myAudio.pause();

    let albumRe = document.getElementById('albname').textContent
    let artistRe = document.getElementById('artistName').textContent

    

    const apiTrackRe = `https://api.deezer.com/search/album?q=${albumRe}%20${artistRe}`;
    async function getother(){
        const ress = await fetch(apiTrackRe);
        const ddti = await ress.json();

        var albumIdRe = ddti.data[0].id
    
        const apiTrackPlay = `https://api.deezer.com/album/${albumIdRe}`;
        const rres = await fetch(apiTrackPlay);
        const dtti = await rres.json();
        var trackdataRe = dtti.tracks.data
        var tracklenRe = trackdataRe.length

        
        function getRandomtrack(max) {
            return Math.floor(Math.random() * max);
        }
        var reTracklenght = getRandomtrack(tracklenRe);

        let trackIdRe = dtti.tracks.data[`${reTracklenght}`].preview

        
        document.getElementById("myAudio").src = `${trackIdRe}`
        var trackName = dtti.tracks.data[`${reTracklenght}`].title
    document.getElementById('trackName').innerHTML = trackName

        function togglePlay() {

            myAudio.play();
         }
        
    
    }getother()
}
    




