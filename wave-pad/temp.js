// -------------fx-4-------------

var fx4Button = document.getElementById("fx-4");
var fx4Audio = document.getElementById("fx4-player");
var fx4AudioSource = document.getElementById('fx4-audioSource');

fx4List.onclick = function(e) {
  e.preventDefault();
  var elm = e.target;
  fx4AudioSource.src = elm.getAttribute('data-value');

};

fx4Button.addEventListener("click", function(){
    // console.log("fx4Button clicked");
    playOnlyPlayfx(fx4Button , fx4Audio);
});
addEventListener("keypress", function(event){
  if (event.key === "v"){
    playOnlyPlayfx(fx4Button , fx4Audio);
    
  }  

});
function thisVolumefx4(volume_value){

  fx4Audio.volume = volume_value / 100; 
}


// switch1.addEventListener("click", function(){
//   switch1.style.color="white";
//   switch2.style.color="black";
//   switch3.style.color="black";
//   switch4.style.color="black";

//   padSection.style.display="grid";
//   drumSection.style.display="none";
//   bassSection.style.display="none";
//   fxSection.style.display="none";

//   switch1.style.boxShadow=padBoxShadow;
//   switch2.style.boxShadow=noBoxShadow;
//   switch3.style.boxShadow=noBoxShadow;
//   switch4.style.boxShadow=noBoxShadow;
  
//   controlHeading.innerHTML="[ Pad Samples ]";

// });
// switch2.addEventListener("click", function(){
//   switch1.style.color="black";
//   switch2.style.color="white";
//   switch3.style.color="black";
//   switch4.style.color="black";

//   drumSection.style.display="grid";
//   padSection.style.display="none";
//   bassSection.style.display="none";
//   fxSection.style.display="none";

//   switch1.style.boxShadow=noBoxShadow;
//   switch2.style.boxShadow=drumBoxShadow;
//   switch3.style.boxShadow=noBoxShadow;
//   switch4.style.boxShadow=noBoxShadow;

//   controlHeading.innerHTML="[ Drum Samples ]";


// });
// switch3.addEventListener("click", function(){

//   switch1.style.color="black";
//   switch2.style.color="black";
//   switch3.style.color="white";
 
//   switch4.style.color="black";

//   bassSection.style.display="grid";
//   drumSection.style.display="none";
//   padSection.style.display="none";
//   fxSection.style.display="none";
//   switch3.style.color="white";
  
//   switch1.style.boxShadow=noBoxShadow;
//   switch2.style.boxShadow=noBoxShadow;
//   switch3.style.boxShadow=bassBoxShadow;
//   switch4.style.boxShadow=noBoxShadow;

//   controlHeading.innerHTML="[ bass Samples ]";


 
// });
// switch4.addEventListener("click", function(){
//   switch1.style.color="black";
//   switch2.style.color="black";
//   switch3.style.color="black";
//   switch4.style.color="white";

//   drumSection.style.display="none";
//   padSection.style.display="none";
//   bassSection.style.display="none";
//   fxSection.style.display="grid";
//   switch4.style.color="white";
  
//   switch1.style.boxShadow=noBoxShadow;
//   switch2.style.boxShadow=noBoxShadow;
//   switch3.style.boxShadow=noBoxShadow;
//   switch4.style.boxShadow=fxBoxShadow;

//   controlHeading.innerHTML="[ FX Samples ]";



// });



const fxList = ['fx1', 'fx2', 'fx3', 'fx4'];

for (let i = 0; i < fxList.length; i++) {
  const fx = fxList[i];
  const button = document.getElementById(`${fx}`);
  const audio = document.getElementById(`${fx}-player`);
  const audioSource = document.getElementById(`${fx}-audioSource`);
  const optionsList = document.getElementById(`${fx}List`);

  optionsList.addEventListener('click', (e) => {
    e.preventDefault();
    const elm = e.target;
    audioSource.src = elm.getAttribute('data-value');
  });

  button.addEventListener('click', () => {
    playPause(button, audio);
  });

  window.addEventListener('keypress', (event) => {
    if (event.key === String(i + 1)) {
      playPause(button, audio);
    }
  });

  window[`thisVolume${fx}`] = (volumeValue) => {
    audio.volume = volumeValue / 100;
  };
}