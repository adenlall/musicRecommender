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

  var countyName = idip.location.country.name;

  const clientId = '3b7adf8af5b64346a05e69bf5b4551de';
  const clientSecret = '8ecaf8d7e30a4b549cfc603012bffe90';
  
  //get token
  const rreesponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
          'Content-Type' : 'application/x-www-form-urlencoded', 
          'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
      },
      body: 'grant_type=client_credentials'
  });;
  const dattaa = await rreesponse.json();
  var token = dattaa.access_token;


  const chart = await fetch(`https://api.spotify.com/v1/search?query=top%2050%20${countyName}&type=playlist&market=us&limit=50&offset=0`, {
          method: 'GET',
          headers: { 'Authorization' : 'Bearer ' + token}
      });
      const searchChart = await chart.json();
      var playlistId = searchChart.playlists.items[0].id;


      const playlistInfoAPI = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
          method: 'GET',
          headers: { 'Authorization' : 'Bearer ' + token}
      });

      const playlistInfo = await playlistInfoAPI.json();

      document.getElementById(`art1`).src = playlistInfo.tracks.items[0].track.album.images[2].url;
      document.getElementById(`art2`).src = playlistInfo.tracks.items[1].track.album.images[2].url;
      document.getElementById(`art3`).src = playlistInfo.tracks.items[2].track.album.images[2].url;
      document.getElementById(`art4`).src = playlistInfo.tracks.items[3].track.album.images[2].url;
      document.getElementById(`art5`).src = playlistInfo.tracks.items[4].track.album.images[2].url;
      document.getElementById(`art6`).src = playlistInfo.tracks.items[5].track.album.images[2].url;
      document.getElementById(`art7`).src = playlistInfo.tracks.items[6].track.album.images[2].url;
      document.getElementById(`art8`).src = playlistInfo.tracks.items[7].track.album.images[2].url;
      document.getElementById(`art9`).src = playlistInfo.tracks.items[8].track.album.images[2].url;

    
      document.getElementById('artp1').innerHTML = '🥇 ' + playlistInfo.tracks.items[0].track.name;
      document.getElementById('artp2').innerHTML = '🥈 ' +playlistInfo.tracks.items[1].track.name;
      document.getElementById('artp3').innerHTML = '🥉 ' +playlistInfo.tracks.items[2].track.name;
      for(i=3; i<10; i++){
      document.getElementById(`artp${i+1}`).innerHTML = `${i+1}. ` +playlistInfo.tracks.items[i].track.name;
      }
  





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