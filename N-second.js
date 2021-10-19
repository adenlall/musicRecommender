//////////////////////////////////////|


function navDev() {
  document.getElementById("mmenu").style = `display:flex;`;
  document.getElementById("alla").style = `overflow-y: hidden;`;

}

function eaxtDev() {

  document.getElementById("mmenu").style = `display:none;`;
  document.getElementById("alla").style = `overflow-y: auto;`;

}

function navAbout() {
  document.getElementById("mmenu").style = `display:flex;`;
  document.getElementById("alla").style = `overflow-y: hidden;`;

}

function eaxtAbout() {

  document.getElementById("mmenu").style = `display:none;`;
  document.getElementById("alla").style = `overflow-y: auto;`;

}

function nav() {
  document.getElementById("mmenu").style = `display:flex;`;
  document.getElementById("alla").style = `overflow-y: hidden;`;

};

function eaxt() {

  document.getElementById("mmenu").style = `display:none;`;
  document.getElementById("alla").style = `overflow-y: auto;`;


}


//////////////////////////////////////|
//////////////////////////////////////|
const apiip = `https://api.ipregistry.co/?key=yhenjpzwtjz5pi2h`;
async function getIp() {
  const ipcity = await fetch(apiip);
  const idip = await ipcity.json();
  var imojj = idip.location.country_flag_emoji;
  document.getElementById('fflag').src = idip.location.country.flag.noto;



  var lon = idip.location.longitude;
  var lat = idip.location.latitude;


  const apiWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=640dd62032cdb0fa31d41c05f34c215a`;
  async function getWeather() {
    const reweather = await fetch(apiWeather);
    const uniit = await reweather.json();

  }
  getWeather()


  const apiChart = `https://api.deezer.com/chart`;
  async function getChart() {
    const reesponse = await fetch(apiChart);
    const daata = await reesponse.json();

    document.getElementById('art1').src = daata.albums.data[0].cover_big;
    document.getElementById('art2').src = daata.albums.data[1].cover_big;
    document.getElementById('art3').src = daata.albums.data[2].cover_big;
    document.getElementById('art4').src = daata.albums.data[3].cover_big;
    document.getElementById('art5').src = daata.albums.data[4].cover_big;
    document.getElementById('art6').src = daata.albums.data[5].cover_big;
    document.getElementById('art7').src = daata.albums.data[6].cover_big;
    document.getElementById('art8').src = daata.albums.data[7].cover_big;
    document.getElementById('art9').src = daata.albums.data[8].cover_big;

    document.getElementById('artp1').innerHTML = '🥇 ' + daata.albums.data[0].artist.name;
    document.getElementById('artp2').innerHTML = '🥈 ' + daata.albums.data[1].artist.name;
    document.getElementById('artp3').innerHTML = '🥉 ' + daata.albums.data[2].artist.name;
    document.getElementById('artp4').innerHTML = '4. ' + daata.albums.data[3].artist.name;
    document.getElementById('artp5').innerHTML = '5. ' + daata.albums.data[4].artist.name;
    document.getElementById('artp6').innerHTML = '6. ' + daata.albums.data[5].artist.name;
    document.getElementById('artp7').innerHTML = '7. ' + daata.albums.data[6].artist.name;
    document.getElementById('artp8').innerHTML = '8. ' + daata.albums.data[7].artist.name;
    document.getElementById('artp9').innerHTML = '9. ' + daata.albums.data[8].artist.name;


  }
  getChart()
}
getIp()
//////////////////////////////////////|
//////////////////////////////////////|
//////////////////////////////////////|























function myDark() {


  //the dispaly name of radio
  var span1 = 'Rock';
  var span2 = 'Electronic';
  var span3 = 'Metal';
  var span4 = 'Ambient';
  var span5 = 'Noise';
  var span6 = 'Music';
  var span7 = 'Rap';
  var span8 = 'Folk';

  //the value of input
  var val1 = 'dark+rock';
  var val2 = 'dark+electronic';
  var val3 = 'dark+metal';
  var val4 = 'dark+ambient';
  var val5 = 'dark+noise';
  var val6 = 'dark+music';
  var val7 = 'dark+rap';
  var val8 = 'dark+folk';


  //apply the function on related div

  document.getElementById("inp1").innerHTML = `<input name="genre" type="radio" value="${val1}"><span>${span1}</span>`;

  document.getElementById("inp2").innerHTML = `<input name="genre" type="radio" value="${val2}"><span>${span2}</span>`;

  document.getElementById("inp3").innerHTML = `<input name="genre" type="radio" value="${val3}"><span>${span3}</span>`;

  document.getElementById("inp4").innerHTML = `<input name="genre" type="radio" value="${val4}"><span>${span4}</span>`;

  document.getElementById("inp5").innerHTML = `<input name="genre" type="radio" value="${val5}"><span>${span5}</span>`;

  document.getElementById("inp6").innerHTML = `<input name="genre" type="radio" value="${val6}"><span>${span6}</span>`;

  document.getElementById("inp7").innerHTML = `<input name="genre" type="radio" value="${val7}"><span>${span7}</span>`;

  document.getElementById("inp8").innerHTML = `<input name="genre" type="radio" value="${val8}"><span>${span8}</span>`;

}

function myClassic() {

  //the dispaly name of radio
  var span1 = 'Beethoven';
  var span2 = 'Piano';
  var span3 = 'Opera';
  var span4 = 'Baroque';
  var span5 = 'Bach';
  var span6 = 'Violin';
  var span7 = 'Jazz';
  var span8 = 'Swing';

  //the value of input
  var val1 = 'Beethoven';
  var val2 = 'Piano';
  var val3 = 'Opera';
  var val4 = 'Baroque';
  var val5 = 'Bach';
  var val6 = 'Violin';
  var val7 = 'Jazz';
  var val8 = 'Swing';


  //apply the function on related div

  document.getElementById("inp1").innerHTML = `<input name="genre" type="radio" value="${val1}"><span>${span1}</span>`;

  document.getElementById("inp2").innerHTML = `<input name="genre" type="radio" value="${val2}"><span>${span2}</span>`;

  document.getElementById("inp3").innerHTML = `<input name="genre" type="radio" value="${val3}"><span>${span3}</span>`;

  document.getElementById("inp4").innerHTML = `<input name="genre" type="radio" value="${val4}"><span>${span4}</span>`;

  document.getElementById("inp5").innerHTML = `<input name="genre" type="radio" value="${val5}"><span>${span5}</span>`;

  document.getElementById("inp6").innerHTML = `<input name="genre" type="radio" value="${val6}"><span>${span6}</span>`;

  document.getElementById("inp7").innerHTML = `<input name="genre" type="radio" value="${val7}"><span>${span7}</span>`;

  document.getElementById("inp8").innerHTML = `<input name="genre" type="radio" value="${val8}"><span>${span8}</span>`;

}

function myChill() {

  //the dispaly name of radio
  var span1 = 'Rap';
  var span2 = 'Lofi';
  var span3 = 'Hip-Hop';
  var span4 = 'Pop';
  var span5 = 'Chillout';
  var span6 = 'Night';
  var span7 = 'Ballad';
  var span8 = 'calm';

  //the value of input
  var val1 = 'chill+rap';
  var val2 = 'lofi';
  var val3 = 'chill+Hip-Hop';
  var val4 = 'chill+pop';
  var val5 = 'Chillout';
  var val6 = 'Night';
  var val7 = 'Ballad';
  var val8 = 'calm';


  //apply the function on related div

  document.getElementById("inp1").innerHTML = `<input name="genre" type="radio" value="${val1}"><span>${span1}</span>`;

  document.getElementById("inp2").innerHTML = `<input name="genre" type="radio" value="${val2}"><span>${span2}</span>`;

  document.getElementById("inp3").innerHTML = `<input name="genre" type="radio" value="${val3}"><span>${span3}</span>`;

  document.getElementById("inp4").innerHTML = `<input name="genre" type="radio" value="${val4}"><span>${span4}</span>`;

  document.getElementById("inp5").innerHTML = `<input name="genre" type="radio" value="${val5}"><span>${span5}</span>`;

  document.getElementById("inp6").innerHTML = `<input name="genre" type="radio" value="${val6}"><span>${span6}</span>`;

  document.getElementById("inp7").innerHTML = `<input name="genre" type="radio" value="${val7}"><span>${span7}</span>`;

  document.getElementById("inp8").innerHTML = `<input name="genre" type="radio" value="${val8}"><span>${span8}</span>`;

}

function mySad() {

  //the dispaly name of radio
  var span1 = 'Trap';
  var span2 = 'Rap';
  var span3 = 'Pop';
  var span4 = 'Piano';
  var span5 = 'Music';
  var span6 = 'Mood';
  var span7 = 'alternative';
  var span8 = 'So sad';

  //the value of input
  var val1 = 'sad+trap';
  var val2 = 'sad+rap';
  var val3 = 'sad+pop';
  var val4 = 'sad+piano';
  var val5 = 'sad+music';
  var val6 = 'sad';
  var val7 = 'Alternative';
  var val8 = 'sad';


  //apply the function on related div

  document.getElementById("inp1").innerHTML = `<input name="genre" type="radio" value="${val1}"><span>${span1}</span>`;

  document.getElementById("inp2").innerHTML = `<input name="genre" type="radio" value="${val2}"><span>${span2}</span>`;

  document.getElementById("inp3").innerHTML = `<input name="genre" type="radio" value="${val3}"><span>${span3}</span>`;

  document.getElementById("inp4").innerHTML = `<input name="genre" type="radio" value="${val4}"><span>${span4}</span>`;

  document.getElementById("inp5").innerHTML = `<input name="genre" type="radio" value="${val5}"><span>${span5}</span>`;

  document.getElementById("inp6").innerHTML = `<input name="genre" type="radio" value="${val6}"><span>${span6}</span>`;

  document.getElementById("inp7").innerHTML = `<input name="genre" type="radio" value="${val7}"><span>${span7}</span>`;

  document.getElementById("inp8").innerHTML = `<input name="genre" type="radio" value="${val8}"><span>${span8}</span>`;

}

function myCLoud() {

  //the dispaly name of radio
  var span1 = 'Rap';
  var span2 = 'Trap';
  var span3 = 'Autotune';
  var span4 = 'Hip-hop';
  var span5 = 'Deep';
  var span6 = 'Smoke';
  var span7 = 'Jazz';
  var span8 = 'Sesh';

  //the value of input
  var val1 = 'cloud+rap';
  var val2 = 'cloud+trap';
  var val3 = 'Autotune';
  var val4 = 'cloud+Hip-hop';
  var val5 = 'Deep';
  var val6 = 'smoking';
  var val7 = 'Gangsta';
  var val8 = 'Sesh';


  //apply the function on related div

  document.getElementById("inp1").innerHTML = `<input name="genre" type="radio" value="${val1}"><span>${span1}</span>`;

  document.getElementById("inp2").innerHTML = `<input name="genre" type="radio" value="${val2}"><span>${span2}</span>`;

  document.getElementById("inp3").innerHTML = `<input name="genre" type="radio" value="${val3}"><span>${span3}</span>`;

  document.getElementById("inp4").innerHTML = `<input name="genre" type="radio" value="${val4}"><span>${span4}</span>`;

  document.getElementById("inp5").innerHTML = `<input name="genre" type="radio" value="${val5}"><span>${span5}</span>`;

  document.getElementById("inp6").innerHTML = `<input name="genre" type="radio" value="${val6}"><span>${span6}</span>`;

  document.getElementById("inp7").innerHTML = `<input name="genre" type="radio" value="${val7}"><span>${span7}</span>`;

  document.getElementById("inp8").innerHTML = `<input name="genre" type="radio" value="${val8}"><span>${span8}</span>`;

}


function myFrench() {

  //the dispaly name of radio
  var span1 = 'Trap';
  var span2 = 'Hip-Hop';
  var span3 = 'Rap';
  var span4 = 'Pop';
  var span5 = 'Chanson';
  var span6 = 'Marseille';
  var span7 = 'Jazz';
  var span8 = 'Paris';

  //the value of input
  var val1 = 'french+trap';
  var val2 = 'french+hip-hop';
  var val3 = 'french+rap';
  var val4 = 'french+pop';
  var val5 = 'Chanson';
  var val6 = 'Marseille';
  var val7 = 'french+jazz';
  var val8 = 'Paris';


  //apply the function on related div

  document.getElementById("inp1").innerHTML = `<input name="genre" type="radio" value="${val1}"><span>${span1}</span>`;

  document.getElementById("inp2").innerHTML = `<input name="genre" type="radio" value="${val2}"><span>${span2}</span>`;

  document.getElementById("inp3").innerHTML = `<input name="genre" type="radio" value="${val3}"><span>${span3}</span>`;

  document.getElementById("inp4").innerHTML = `<input name="genre" type="radio" value="${val4}"><span>${span4}</span>`;

  document.getElementById("inp5").innerHTML = `<input name="genre" type="radio" value="${val5}"><span>${span5}</span>`;

  document.getElementById("inp6").innerHTML = `<input name="genre" type="radio" value="${val6}"><span>${span6}</span>`;

  document.getElementById("inp7").innerHTML = `<input name="genre" type="radio" value="${val7}"><span>${span7}</span>`;

  document.getElementById("inp8").innerHTML = `<input name="genre" type="radio" value="${val8}"><span>${span8}</span>`;

}

function myArabic() {

  //the dispaly name of radio
  var span1 = 'Egyptian';
  var span2 = 'lebanese';
  var span3 = 'Moroccan';
  var span4 = 'Maghreb';
  var span5 = 'Rai';
  var span6 = 'Pop';
  var span7 = 'Khaleeji';
  var span8 = 'Nasheed';

  //the value of input
  var val1 = 'Egyptian';
  var val2 = 'lebanese';
  var val3 = 'Moroccan';
  var val4 = 'Maghreb';
  var val5 = 'Rai';
  var val6 = 'Pop';
  var val7 = 'Khaleeji';
  var val8 = 'Nasheed';


  //apply the function on related div

  document.getElementById("inp1").innerHTML = `<input name="genre" type="radio" value="${val1}"><span>${span1}</span>`;

  document.getElementById("inp2").innerHTML = `<input name="genre" type="radio" value="${val2}"><span>${span2}</span>`;

  document.getElementById("inp3").innerHTML = `<input name="genre" type="radio" value="${val3}"><span>${span3}</span>`;

  document.getElementById("inp4").innerHTML = `<input name="genre" type="radio" value="${val4}"><span>${span4}</span>`;

  document.getElementById("inp5").innerHTML = `<input name="genre" type="radio" value="${val5}"><span>${span5}</span>`;

  document.getElementById("inp6").innerHTML = `<input name="genre" type="radio" value="${val6}"><span>${span6}</span>`;

  document.getElementById("inp7").innerHTML = `<input name="genre" type="radio" value="${val7}"><span>${span7}</span>`;

  document.getElementById("inp8").innerHTML = `<input name="genre" type="radio" value="${val8}"><span>${span8}</span>`;

}

function myJapan() {

  //the dispaly name of radio
  var span1 = 'Anime';
  var span2 = 'Japanese';
  var span3 = 'Hip-Hop';
  var span4 = 'J-rock';
  var span5 = 'Asian';
  var span6 = 'Pop';
  var span7 = 'Jazz';
  var span8 = 'Shibuya-kei';

  //the value of input
  var val1 = 'Anime';
  var val2 = 'Japanese';
  var val3 = 'j-hiphop';
  var val4 = 'J-rock';
  var val5 = 'Asian';
  var val6 = 'asian+pop';
  var val7 = 'Jazz';
  var val8 = 'Shibuya-kei';


  //apply the function on related div

  document.getElementById("inp1").innerHTML = `<input name="genre" type="radio" value="${val1}"><span>${span1}</span>`;

  document.getElementById("inp2").innerHTML = `<input name="genre" type="radio" value="${val2}"><span>${span2}</span>`;

  document.getElementById("inp3").innerHTML = `<input name="genre" type="radio" value="${val3}"><span>${span3}</span>`;

  document.getElementById("inp4").innerHTML = `<input name="genre" type="radio" value="${val4}"><span>${span4}</span>`;

  document.getElementById("inp5").innerHTML = `<input name="genre" type="radio" value="${val5}"><span>${span5}</span>`;

  document.getElementById("inp6").innerHTML = `<input name="genre" type="radio" value="${val6}"><span>${span6}</span>`;

  document.getElementById("inp7").innerHTML = `<input name="genre" type="radio" value="${val7}"><span>${span7}</span>`;

  document.getElementById("inp8").innerHTML = `<input name="genre" type="radio" value="${val8}"><span>${span8}</span>`;

}