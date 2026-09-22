// MochiMori 1.2 content and Android sharing update.
littleStory=function(){
  const items=[
    'Warum trägt die Bohnen-Puppe einen Schal? Damit sie nicht aus der Reihe tanzt! 🫘',
    'Heute hat der Mini-Mimic versucht, sich als Keks zu verkleiden. Fast hätte ich ihn gegessen! 🍪',
    'Im Wohnzimmer hat der Sternfuchs einen Stern gesucht. Er lag die ganze Zeit auf seinem Schweif. 🦊',
    'Die Wolkenball-Pets wollten kochen. Am Ende gab es nur Luftsuppe. ☁️',
    'Was macht ein Schleimi im Kühlschrank? Er chillt! 🫧',
    'Warum ist der Mondflatterer so gut in Mathe? Er kann mit Flügelzahlen rechnen! 🦇',
    'Was bestellt ein Chibi im Café? Einen Mini-Kakao mit extra Freude! ☕',
    'Warum gewinnt die Bohnen-Puppe jedes Versteckspiel? Weil sie sich perfekt in den Sitzsack kuschelt!',
    'Was sagt der Sternfuchs beim Aufräumen? Das sieht ja fabelhaft aus! 🦊',
    'Warum hat der Mini-Mimic Schluckauf? Er hat eine Münze erschreckt! 🧰',
    'Was macht ein Pet nach einem langen Spiel? Es legt eine Pfötchenpause ein. 🐾',
    'Warum ging das Chibi in die Küche? Es wollte seinen Hunger-Balken kennenlernen! 🍱',
    'Der Wolkenball wollte baden. Jetzt regnet es im Badezimmer! ☁️',
    'Was ist das Lieblingsfach vom Sternfuchs? Sternenkunde – natürlich! ⭐',
    'Warum erzählt die Bohnen-Puppe so leise Witze? Damit die anderen Bohnen nicht platzen vor Lachen!'
  ];
  const t=items[Math.floor(Math.random()*items.length)];
  document.querySelectorAll('#chatBubble,#voiceStatus').forEach(e=>e.textContent=t);
  s.expression='laugh';save();render();speak(t);
};
document.querySelectorAll('#storyBtn').forEach(b=>b.onclick=littleStory);
shareBtn.onclick=async()=>{
  const d={title:'MochiMori App',text:'Lade dir die MochiMori-App für Android herunter!',url:'https://github.com/finnneufert-maker/Chibi-Game-v1-/releases/latest'};
  if(navigator.share)await navigator.share(d);
  else{await navigator.clipboard.writeText(d.url);toast('App-Downloadlink kopiert!')}
};
