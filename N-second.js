//////////////////////////////////////|
//////////////////////////////////////|
//////////////////////////////////////|
const apiip = `http://api.ipstack.com/check?access_key=34efa93ccb4ef3a0f27abc2777b276da`;
async function getIp(){
    const ipcity = await fetch(apiip);
    const idip = await ipcity.json();
    console.log(idip);
    
    var ciity = idip.city
    var coountry = idip.country_name
    console.log(ciity)
    console.log(coountry) 
    const apiWeather = `https://api.openweathermap.org/data/2.5/weather?q=${ciity},${coountry}&units=metric&appid=640dd62032cdb0fa31d41c05f34c215a`;
    async function getWeather(){
        const reweather = await fetch(apiWeather);
        const uniit = await reweather.json();
        console.log(uniit)
    
    }getWeather()
    

var genrre = "chill"
const apiChart = `http://api.deezer.com/chart`;
async function getChart(){
    const reesponse = await fetch(apiChart);
    const daata = await reesponse.json();
    console.log(daata)
    
    document.getElementById('art1').src = daata.albums.data[0].cover_big;
    document.getElementById('art2').src = daata.albums.data[1].cover_big;
    document.getElementById('art3').src = daata.albums.data[2].cover_big;
    document.getElementById('art4').src = daata.albums.data[3].cover_big;
    document.getElementById('art5').src = daata.albums.data[4].cover_big;
    document.getElementById('art6').src = daata.albums.data[5].cover_big;
    document.getElementById('art7').src = daata.albums.data[6].cover_big;
    document.getElementById('art8').src = daata.albums.data[7].cover_big;
    document.getElementById('art9').src = daata.albums.data[8].cover_big;

    document.getElementById('artp1').innerHTML = '1. ' + daata.albums.data[0].artist.name;
    document.getElementById('artp2').innerHTML = '2. ' + daata.albums.data[1].artist.name;
    document.getElementById('artp3').innerHTML = '3. ' + daata.albums.data[2].artist.name;
    document.getElementById('artp4').innerHTML = '4. ' + daata.albums.data[3].artist.name;
    document.getElementById('artp5').innerHTML = '5. ' + daata.albums.data[4].artist.name;
    document.getElementById('artp6').innerHTML = '6. ' + daata.albums.data[5].artist.name;
    document.getElementById('artp7').innerHTML = '7. ' + daata.albums.data[6].artist.name;
    document.getElementById('artp8').innerHTML = '8. ' + daata.albums.data[7].artist.name;
    document.getElementById('artp9').innerHTML = '9. ' + daata.albums.data[8].artist.name;


}getChart()
}
getIp()
//////////////////////////////////////|
//////////////////////////////////////|
//////////////////////////////////////|
function onecho(){
    console.log("t1 clicked")
    document.getElementById("twogenre").innerHTML = `<input
    label="Rock"
    type="radio"
    id="t1"
    name="genres"
    value="dark"
  />
  <input label="electronic" type="radio" id="t8" name="genres" value="calm" />
  <input
    label="Metal"
    type="radio"
    id="t2"
    name="genres"
    value="chill"
  />
  <input
    label="Aambient"
    type="radio"
    id="t3"
    name="genres"
    value="sad"
  />
  <input
    label="Pop"
    type="radio"
    id="t4"
    name="genres"
    value="gung"
  />
  <input
    label="Music"
    type="radio"
    id="t5"
    name="genres"
    value="peace"
  />
  <input
    label="Rap"
    type="radio"
    id="t6"
    name="genres"
    value="stars"
  />
  <input
    label="folk"
    type="radio"
    id="t7"
    name="genres"
    value="space"
  />`

}
function foocho(){
    console.log("t4 clicked")
    document.getElementById("twogenre").innerHTML = `<input
    label="Trap"
    type="radio"
    id="t1"
    name="genres"
    value="dark"
  />
  <input label="electronic" type="radio" id="t8" name="genres" value="calm" />
  <input
    label="Rap"
    type="radio"
    id="t2"
    name="genres"
    value="chill"
  />
  <input
    label="Pop"
    type="radio"
    id="t3"
    name="genres"
    value="sad"
  />
  <input
    label="rock"
    type="radio"
    id="t4"
    name="genres"
    value="gung"
  />
  <input
    label="Music"
    type="radio"
    id="t5"
    name="genres"
    value="peace"
  />
  <input
    label="folk"
    type="radio"
    id="t6"
    name="genres"
    value="stars"
  />
  <input
    label="piano"
    type="radio"
    id="t7"
    name="genres"
    value="space"
  />`

}
function fivcho(){
    console.log("t5 clicked")
    document.getElementById("twogenre").innerHTML = `<input
    label="Rap"
    type="radio"
    id="t1"
    name="genres"
    value="dark"
  />
  <input label="electronic" type="radio" id="t8" name="genres" value="calm" />
  <input
    label="Trap"
    type="radio"
    id="t2"
    name="genres"
    value="chill"
  />
  <input
    label="Autotune"
    type="radio"
    id="t3"
    name="genres"
    value="sad"
  />
  <input
    label="hip-hop"
    type="radio"
    id="t4"
    name="genres"
    value="gung"
  />
  <input
    label="sky"
    type="radio"
    id="t5"
    name="genres"
    value="peace"
  />
  <input
    label="smoke"
    type="radio"
    id="t6"
    name="genres"
    value="stars"
  />
  <input
    label="gangsta"
    type="radio"
    id="t7"
    name="genres"
    value="space"
    disabled = true
  />`

}

function thrcho(){
    console.log("t5 clicked")
    document.getElementById("twogenre").innerHTML = `<input
    label="Rap"
    type="radio"
    id="t1"
    name="genres"
    value="dark"
  />
  <input label="electronic" type="radio" id="t8" name="genres" value="calm" />
  <input
    label="Lofi"
    type="radio"
    id="t2"
    name="genres"
    value="chill"
  />
  <input
    label="Hip-Hop"
    type="radio"
    id="t3"
    name="genres"
    value="sad"
  />
  <input
    label="Pop"
    type="radio"
    id="t4"
    name="genres"
    value="gung"
  />
  <input
    label="Chillout"
    type="radio"
    id="t5"
    name="genres"
    value="peace"
  />
  <input
    label="night"
    type="radio"
    id="t6"
    name="genres"
    value="stars"
  />
  <input
    label="ballad"
    type="radio"
    id="t7"
    name="genres"
    value="space"
  />`

}

function sixcho(){
    console.log("t6 clicked")
    document.getElementById("twogenre").innerHTML = `<input
    label="trap"
    type="radio"
    id="t1"
    name="genres"
    value="french+trap"
  />
  <input label="chanson" type="radio" id="t8" name="genres" value="calm" />
  <input
    label="rap"
    type="radio"
    id="t2"
    name="genres"
    value="rap+francais"
  />
  <input
    label="Hip-Hop"
    type="radio"
    id="t3"
    name="genres"
    value="sad"
  />
  <input
    label="Pop"
    type="radio"
    id="t4"
    name="genres"
    value="gung"
  />
  <input
    label="spleen"
    type="radio"
    id="t5"
    name="genres"
    value="peace"
  />
  <input
    label="Rap"
    type="radio"
    id="t6"
    name="genres"
    value="stars"
  />
  <input
    label="algeria"
    type="radio"
    id="t7"
    name="genres"
    value="space"
  />`

}
function eigcho(){
    console.log("t6 clicked")
    document.getElementById("twogenre").innerHTML = `<input
    label="anime"
    type="radio"
    id="t1"
    name="genres"
    value="french+trap"
  />
  <input label="chanson" type="radio" id="t8" name="genres" value="calm" />
  <input
    label="japanese"
    type="radio"
    id="t2"
    name="genres"
    value="rap+francais"
  />
  <input
    label="Hip-Hop"
    type="radio"
    id="t3"
    name="genres"
    value="J-hiphop"
  />
  <input
    label="j-rock"
    type="radio"
    id="t4"
    name="genres"
    value="gung"
  />
  <input
    label="Asian"
    type="radio"
    id="t5"
    name="genres"
    value="peace"
  />
  <input
    label="Pop"
    type="radio"
    id="t6"
    name="genres"
    value="stars"
  />
  <input
    label="Shibuya-kei"
    type="radio"
    id="t7"
    name="genres"
    value="space"
  />`

}
function sevcho(){
    console.log("t6 clicked")
    document.getElementById("twogenre").innerHTML = `<input
    label="egyptian"
    type="radio"
    id="t1"
    name="genres"
    value="french+trap"
  />
  <input label="lebanese" type="radio" id="t8" name="genres" value="calm" />
  <input
    label="moroccan"
    type="radio"
    id="t2"
    name="genres"
    value="moroccan+rap"
  />
  <input
    label="maghrebp"
    type="radio"
    id="t3"
    name="genres"
    value="J-hiphop"
  />
  <input
    label="rai"
    type="radio"
    id="t4"
    name="genres"
    value="gung"
  />
  <input
    label="Pop"
    type="radio"
    id="t5"
    name="genres"
    value="arabic+pop"
  />
  <input
    label="khaleeji"
    type="radio"
    id="t6"
    name="genres"
    value="khaleeji"
  />
  <input
    label="nasheed"
    type="radio"
    id="t7"
    name="genres"
    value="nasheed"
  />`

}
function twocho(){
    console.log("t6 clicked")
    document.getElementById("twogenre").innerHTML = `<input
    label="Beethoven"
    type="radio"
    id="t1"
    name="genres"
    value="french+trap"
  />
  <input label="piano" type="radio" id="t8" name="genres" value="calm" />
  <input
    label="opera"
    type="radio"
    id="t2"
    name="genres"
    value="moroccan+rap"
  />
  <input
    label="Baroque"
    type="radio"
    id="t3"
    name="genres"
    value="J-hiphop"
  />
  <input
    label="Bach"
    type="radio"
    id="t4"
    name="genres"
    value="gung"
  />
  <input
    label="Violin"
    type="radio"
    id="t5"
    name="genres"
    value="arabic+pop"
  />
  <input
    label="jazz"
    type="radio"
    id="t6"
    name="genres"
    value="khaleeji"
  />
  <input
    label="Swing"
    type="radio"
    id="t7"
    name="genres"
    value="nasheed"
  />`

}




/*
//play audio with out html audio tag
var myAudio = new Audio('https://cdns-preview-b.dzcdn.net/stream/c-bdaa6502a127ad8312acaeb89def7206-0.mp3');
myAudio.play();
*/
