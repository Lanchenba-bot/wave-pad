//--------padList-------------

const padList = ['pad1', 'pad2', 'pad3', 'pad4'];

for (let i = 0; i < padList.length; i++) {
  const pad = padList[i];
  const button = document.getElementById(`${pad}`);
  const audio = document.getElementById(`${pad}-player`);
  const audioSource = document.getElementById(`${pad}-audioSource`);
  const optionsList = document.getElementById(`${pad}List`);

  optionsList.addEventListener('click', (e) => {

    e.preventDefault();
    const elm = e.target;
    audioSource.src = elm.getAttribute('data-value');
  });

  button.addEventListener('click', () => {
    playPause(button, audio);
  });

  button.addEventListener('touchstart', function(e) {
    e.preventDefault();  
    playPause(button, audio);
  });

  window.addEventListener('keypress', (event) => {
    if (event.key === String(i + 1)) {
      playPause(button, audio);
    }
  });

  window[`thisVolume${pad}`] = (volumeValue) => {
    audio.volume = volumeValue / 100;
  };
}


// --------drum-list----------

const drumList = ['drum1', 'drum2', 'drum3', 'drum4'];

for (let i = 0; i < drumList.length; i++) {
  const drum = drumList[i];
  const keys = ['q', 'w', 'e', 'r'];
  const button = document.getElementById(`${drum}`);
  const audio = document.getElementById(`${drum}-player`);
  const audioSource = document.getElementById(`${drum}-audioSource`);
  const optionsList = document.getElementById(`${drum}List`);

  optionsList.addEventListener('click', (e) => {
    e.preventDefault();
    const elm = e.target;
    audioSource.src = elm.getAttribute('data-value');
  });

  button.addEventListener('click', () => {  
    playOnlyPlay(button, audio);
  });

  button.addEventListener('touchstart', function(e) {
    e.preventDefault();  
    playOnlyPlay(button, audio);
  });

  window.addEventListener('keypress', (event) => {
    if (event.key === keys[i]) {
      playOnlyPlay(button, audio);
    }
  });

  window[`thisVolume${drum}`] = (volumeValue) => {
    audio.volume = volumeValue / 100;
  };
}

// -----------bass-list------------
const bassList = ['bass1', 'bass2', 'bass3', 'bass4'];

for (let i = 0; i < bassList.length; i++) {
  const bass = bassList[i];
  const keys = ['a', 's', 'd', 'f'];
  const button = document.getElementById(`${bass}`);
  const audio = document.getElementById(`${bass}-player`);
  const audioSource = document.getElementById(`${bass}-audioSource`);
  const optionsList = document.getElementById(`${bass}List`);

  optionsList.addEventListener('click', (e) => {
    e.preventDefault();
    const elm = e.target;
    audioSource.src = elm.getAttribute('data-value');
  });

  button.addEventListener('click', () => { 
    playOnlyPlaybass(button, audio);
  });

  button.addEventListener('touchstart', function(e) {
    e.preventDefault();  
    playOnlyPlaybass(button, audio);
  });

  window.addEventListener('keypress', (event) => {
    
    if (event.key === keys[i]) {
      playOnlyPlaybass(button, audio);
    }
  });

  window[`thisVolume${bass}`] = (volumeValue) => {
    audio.volume = volumeValue / 100;
  };
}

// ----------------fx-list--------------

const fxList = ['fx1', 'fx2', 'fx3', 'fx4'];

for (let i = 0; i < fxList.length; i++) {
  const fx = fxList[i];
  const keys = ['z', 'x', 'c', 'v'];
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
    playOnlyPlayfx(button, audio);
  });

  button.addEventListener('touchstart', function(e) {
    e.preventDefault();  
    playOnlyPlayfx(button, audio);
  });

  window.addEventListener('keypress', (event) => {
    if (event.key === keys[i]) {
      playOnlyPlayfx(button, audio);
    }
  });

  window[`thisVolume${fx}`] = (volumeValue) => {
    audio.volume = volumeValue / 100;
  };
}


//-----global-funtion-for-pad------

const padColorClicked = "radial-gradient(circle, rgb(241, 136, 191) 0%, rgb(106, 161, 223) 100%)";
const padColor = "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)";
const padBoxShadow = "0px 0px 14px 2px rgba(35, 122, 228, 0.8)";

function playPause(button,audio){
  if(audio.paused){
    audio.load();
    audio.play();
    button.style.background = padColorClicked;
    button.style.boxShadow = padBoxShadow;
    button.innerHTML = "playing";
  } else {
    audio.pause(); 
    button.style.background = padColor;
    button.style.boxShadow = "0px 0px 0px 0px black";
    button.innerHTML = "pause";
  }
}


//-----global-funtion-for-drums------

const drumColorClicked = "radial-gradient(circle, rgb(255, 197, 8) 0%, rgb(51, 255, 0) 100%)";
const drumColor = "radial-gradient(circle, rgba(255,214,10,1) 0%, rgba(48,209,88,1) 100%)";
const drumBoxShadow = "0px 0px 14px 2px rgba(76,175,80,0.8)";

function playOnlyPlay(button,audio){
  if(audio.paused){
    audio.load();
    audio.play();
    button.style.background = drumColorClicked;
    button.style.boxShadow = drumBoxShadow;
  }else{
    audio.load();
    audio.play();
    button.style.background = drumColorClicked;
    
  }
  audio.addEventListener('ended', (event)=>{
    button.style.background = drumColor;
    button.style.boxShadow = "0px 0px 0px 0px black";
  });

}

//-----global-funtion-for-basss------

const bassColorClicked = "radial-gradient(circle, rgb(255, 194, 97) 0%, rgb(255, 0, 0) 100%)";
const bassColor = "radial-gradient(circle, rgba(255,159,10,1) 0%, rgba(255,69,58,1) 100%)";
const bassBoxShadow = "0px 0px 14px 2px rgba(225,0,0,0.8)";

function playOnlyPlaybass(button, audio){
  if(audio.paused){
    audio.load();
    audio.play();
    button.style.background = bassColorClicked;
    button.style.boxShadow = bassBoxShadow;
  }else{
    audio.load();
    audio.play();
    button.style.background = bassColorClicked;
    
  }
  audio.addEventListener('ended', (event)=>{
    button.style.background = bassColor;
    button.style.boxShadow = "0px 0px 0px 0px black";
  });

}

//-----global-funtion-for-fxs------

const fxColorClicked = "radial-gradient(circle, rgba(255,115,143,1) 0%, rgba(169,0,255,1) 100%)";
const fxColor = "radial-gradient(circle, rgba(255,167,185,1) 0%, rgba(186,60,249,1) 100%)";
const fxBoxShadow = "0px 0px 14px 2px rgba(169,0,255)";

function playOnlyPlayfx(button, audio){
  if(audio.paused){
    audio.load();
    audio.play();
    button.style.background = fxColorClicked;
    button.style.boxShadow = fxBoxShadow;
  }else{
    audio.load();
    audio.play();
    button.style.background = fxColorClicked;
    
  }
  audio.addEventListener('ended', (event)=>{
    button.style.background = fxColor;
    button.style.boxShadow = "0px 0px 0px 0px black";
  });

}
// //----------------switch-----------
const controlHeading = document.getElementById("control-heading");;

const switch1 = document.getElementById("switch1");
const switch2 = document.getElementById("switch2");
const switch3 = document.getElementById("switch3");
const switch4 = document.getElementById("switch4");
const noBoxShadow = "0px 0px 0px 0px black";
const padSection = document.getElementById("pad-section");
const drumSection = document.getElementById("drum-section");
const bassSection = document.getElementById("bass-section");
const fxSection = document.getElementById("fx-section");

drumSection.style.display="none";
bassSection.style.display="none";
fxSection.style.display="none";




const switchList = ['switch1', 'switch2', 'switch3', 'switch4'];
const sectionList = ['pad', 'drum', 'bass', 'fx'];

for (let i = 0; i < switchList.length; i++) {
  const switcher = document.getElementById(switchList[i]);
  const section = document.getElementById(`${sectionList[i]}-section`);

  switcher.addEventListener('click', function() {
    for (const otherSwitch of switchList) {
      document.getElementById(otherSwitch).style.color = 'black';
    }
    for (const otherSection of sectionList) {
      document.getElementById(`${otherSection}-section`).style.display = 'none';
    }
    switcher.style.color = 'white';
    section.style.display = 'grid';
    document.getElementById('control-heading').innerHTML = `[ ${sectionList[i]} Samples ]`;
  });
}