function randint(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}
try {
 state = JSON.parse(window.localStorage.getItem('state'));
} catch(err) {
 state = undefined;
 window.localStorage.clear();
}
if (!state) {
 state = {
   things: 0,
   stuff: 0,
   lives: 1,
   thingsrate: 0.05,
   stuffrate: 1,
   thingscost: 3,
   stuffcost: 3,
   smarts: 0,
   youknow: false,
   dead: false,
   know: false,
   bark: 0,
   sticks: 0,
   vines: 0,
   apples: 0,
   goop: 0,
   meat: 0,
   fatderps: 0,
   gatherers: 0,
   choppers: 0,
   axes: 0,
   logs: 0,
   houses: 0,
   treechop: 0,
   crush: 0,
   axecraft: 0,
   study: 0,
   axebreak: 0,
   crafters: 0,
   underps: 0,
   unrising: false,
   pinned: false,
   studiers: 0,
   warderps: 0,
   crushers: 0,
   unkill: 0,
   ungoop: 0,
   statues: 0,
   loyalty: 0,
 };
}
window.localStorage.setItem('state', JSON.stringify(state));

var derpylion = document.getElementById("derpylion");
var thingsn = document.getElementById("number");
var stuffn = document.getElementById("number2");
var barkn = document.getElementById("barkn");
var sticksn = document.getElementById("sticksn");
var vinesn = document.getElementById("vinesn");
var applesn = document.getElementById("applesn");
var goopn = document.getElementById("goopn");
var meatn = document.getElementById("meatn");
var axen = document.getElementById("axen");
var logn = document.getElementById("logn");
var thingcreation = document.getElementById("thingcreation");
var smartsn = document.getElementById("smartsn");
var fatderpn = document.getElementById("fatderpn");
var housen = document.getElementById("housen");
var livesn = document.getElementById("livesn");
var gatherern = document.getElementById("gatherern");
var chopn = document.getElementById("chopn");
var craftn = document.getElementById("craftn");
var studyn = document.getElementById("studyn");
var warn = document.getElementById("warn");
var crushn = document.getElementById("crushn");
var underpn = document.getElementById("underpn");
var ungoopn = document.getElementById("ungoopn");
var statuen = document.getElementById("statuen");
var loyaltyn = document.getElementById("loyaltyn");
var smartdisplay = document.getElementById("smarty");
var sticksdisplay = document.getElementById("sticksy");
var barkdisplay = document.getElementById("barky");
var vinesdisplay = document.getElementById("vinesy");
var axedisplay = document.getElementById("axey");
var applesdisplay = document.getElementById("applesy");
var goopdisplay = document.getElementById("goopy");
var meatdisplay = document.getElementById("meaty");
var livesdisplay = document.getElementById("livesy");
var fatdisplay = document.getElementById("fatderpy");
var logdisplay = document.getElementById("logy");
var crushdisplay = document.getElementById("crushy");
var housedisplay = document.getElementById("housey");
var gatherdisplay = document.getElementById("gathery");
var chopdisplay = document.getElementById("chopy");
var craftdisplay = document.getElementById("crafty");
var studydisplay = document.getElementById("studyy");
var wardisplay = document.getElementById("wary");
var underpdisplay = document.getElementById("underpy");
var ungoopdisplay = document.getElementById("ungoopy");
var statuedisplay = document.getElementById("statuey");
var loyaltydisplay = document.getElementById("loyaltyy");
var stuffbutton = document.getElementById("stuffbutton");
var thingsratebutton = document.getElementById("thingsratebutton");
var stuffratebutton = document.getElementById("stuffratebutton");
var ponderbutton = document.getElementById("ponderbutton");
var youbutton = document.getElementById("youbutton");
var diebutton = document.getElementById("diebutton");
var knowbutton = document.getElementById("knowbutton");
var throwbutton = document.getElementById("throwbutton");
var studystuffbutton = document.getElementById("studystuffbutton");
var studythingbutton = document.getElementById("studythingbutton");
var rebirthbutton = document.getElementById("rebirthbutton");
var crushbutton = document.getElementById("crushbutton");
var goopaxebutton = document.getElementById("goopaxebutton");
var vineaxebutton = document.getElementById("vineaxebutton");
var housebutton = document.getElementById("housebutton");
var unpinbutton = document.getElementById("unpinbutton");
var battlebutton = document.getElementById("battlebutton");
var fatcrushbutton = document.getElementById("fatcrushbutton");
var feedbutton = document.getElementById("feedbutton");
var chopbutton = document.getElementById("chopbutton");
var trainbutton = document.getElementById("trainbutton");
var crusherbutton = document.getElementById("crusherbutton");
var choptrainbutton = document.getElementById("choptrainbutton");
var crafttrainbutton = document.getElementById("crafttrainbutton");
var studytrainbutton = document.getElementById("studytrainbutton");
var wartrainbutton = document.getElementById("wartrainbutton");
var abandonbutton = document.getElementById("abandonbutton");
var statuebutton = document.getElementById("statuebutton");
var thingscostn = document.getElementById("thingscostn");
var stuffcostn = document.getElementById("stuffcostn");
stuffbutton.addEventListener("click", Stuff);
thingsratebutton.addEventListener("click", ThingsUp);
stuffratebutton.addEventListener("click", StuffUp);
ponderbutton.addEventListener("click", Smarts);
youbutton.addEventListener("click", You);
diebutton.addEventListener("click", RockDie);
axediebutton.addEventListener("click", AxeDie);
studystuffbutton.addEventListener("click", StudyStuff);
studythingbutton.addEventListener("click", StudyThing);
rebirthbutton.addEventListener("click", Rebirth);
knowbutton.addEventListener("click", Learn);
throwbutton.addEventListener("click", Throw);
crushbutton.addEventListener("click", Crush);
trainbutton.addEventListener("click", Train);
choptrainbutton.addEventListener("click", ChopTrain);
crafttrainbutton.addEventListener("click", CraftTrain);
studytrainbutton.addEventListener("click", StudyTrain);
wartrainbutton.addEventListener("click", WarTrain);
fatcrushbutton.addEventListener("click", FatCrush);
feedbutton.addEventListener("click", Feed);
chopbutton.addEventListener("click", Chop);
housebutton.addEventListener("click", House);
unpinbutton.addEventListener("click", Unpin);
crusherbutton.addEventListener("click", Crusher);
battlebutton.addEventListener("click", Battle);
abandonbutton.addEventListener("click", Abandon);
goopaxebutton.addEventListener("click", GoopAxe);
vineaxebutton.addEventListener("click", VineAxe);
statuebutton.addEventListener("click", Statue);
function update(){
    thingsn.innerHTML=Math.floor(state.things);
    stuffn.innerHTML=Math.floor(state.stuff);
    smartsn.innerHTML=Math.floor(state.smarts);
    thingscostn.innerHTML=state.thingscost;
    stuffcostn.innerHTML=state.stuffcost;
    livesn.innerHTML=state.lives;
    sticksn.innerHTML=state.sticks;
    barkn.innerHTML=state.bark;
    vinesn.innerHTML=state.vines;
    applesn.innerHTML=Math.floor(state.apples);
    goopn.innerHTML=state.goop;
    meatn.innerHTML=state.meat;
    gatherern.innerHTML=state.gatherers;
    chopn.innerHTML=state.choppers;
    fatderpn.innerHTML=Math.floor(state.fatderps);
    axen.innerHTML=state.axes;
    logn.innerHTML=state.logs;
    housen.innerHTML=state.houses;
    craftn.innerHTML=state.crafters;
    studyn.innerHTML=state.studiers;
    warn.innerHTML=state.warderps;
    crushn.innerHTML=state.crushers;
    underpn.innerHTML=Math.floor(state.underps);
    ungoopn.innerHTML=state.ungoop;
    statuen.innerHTML=state.statues;
    loyaltyn.innerHTML=Math.floor(state.loyalty);
    if(state.smarts<0){
        alert("The unthings have taken all of your smarts.")
        Die();
        state.dead=false;
        state.unrising=false;
        state.underps=0;
        state.smarts=0;
        state.lives=1;
        state.thingsrate=0.05;
        state.stuffrate=1
    }
    if(state.smarts<17){
        state.youknow=false;
    }
    if(state.smarts<51){
        state.know=false;
    }
    if(!state.dead && !state.pinned){
        stuffbutton.style.visibility='visible';
    }else{
        stuffbutton.style.visibility='hidden';
    }
    if(state.dead){
        derpylion.style.display='block';
    }else{
        derpylion.style.display='none';
    }
    if(state.stuff>0 && state.things>0 && !state.know){
        ponderbutton.style.visibility='visible';
    }else{
        ponderbutton.style.visibility='hidden';
    }
    if(state.smarts>0){
        smarty.style.visibility='visible';
    }else{
        smarty.style.visibility='hidden';
    }
    if(state.smarts>=17 && !state.youknow){
        youbutton.style.visibility='visible';
    }else{
        youbutton.style.visibility='hidden';
    }
    if(state.youknow && state.stuff>=1 && !state.dead){
        diebutton.style.visibility='visible';
    }else{
        diebutton.style.visibility='hidden';
    }
    if(state.axes>=1 && !state.dead){
        axediebutton.style.visibility='visible';
    }else{
        axediebutton.style.visibility='hidden';
    }
    if(state.dead){
        rebirthbutton.style.visibility='visible';
    }else{
        rebirthbutton.style.visibility='hidden';
    }
    if(state.stuff>=state.thingscost){
        thingsratebutton.style.visibility='visible';
    }else{
        thingsratebutton.style.visibility='hidden';
    }
    if(state.things>=state.stuffcost){
        stuffratebutton.style.visibility='visible';
    }else{
        stuffratebutton.style.visibility='hidden';
    }
    if(state.lives>1){
        livesdisplay.style.visibility='visible';
    }else{
        livesdisplay.style.visibility='hidden';
    }
    if(state.stuff>=1 && state.smarts>=34 && !state.dead){
        studystuffbutton.style.visibility='visible';
    }else{
        studystuffbutton.style.visibility='hidden';
    }
    if(state.things>=1 && state.smarts>=34){
        studythingbutton.style.visibility='visible';
    }else{
        studythingbutton.style.visibility='hidden';
    }
    if(state.dead && state.smarts>=51 && !state.know){
        knowbutton.style.visibility='visible';
    }else{
        knowbutton.style.visibility='hidden';
    }
    if(state.know && state.stuff>0 && !state.dead){
        throwbutton.style.visibility='visible';
    }else{
        throwbutton.style.visibility='hidden';
    }
    if(state.bark>0){
        barkdisplay.style.visibility='visible';
    }else{
        barkdisplay.style.visibility='hidden';
    }
    if(state.logs>0){
        logdisplay.style.visibility='visible';
    }else{
        logdisplay.style.visibility='hidden';
    }
    if(state.houses>0){
        housedisplay.style.visibility='visible';
    }else{
        housedisplay.style.visibility='hidden';
    }
    if(state.axes>0){
        axedisplay.style.visibility='visible';
    }else{
        axedisplay.style.visibility='hidden';
    }
    if(state.fatderps>0){
        fatdisplay.style.visibility='visible';
    }else{
        fatdisplay.style.visibility='hidden';
    }
    if(state.sticks>0){
        sticksdisplay.style.visibility='visible';
    }else{
        sticksdisplay.style.visibility='hidden';
    }
    if(state.vines>0){
        vinesdisplay.style.visibility='visible';
    }else{
        vinesdisplay.style.visibility='hidden';
    }
    if(state.apples>0){
        applesdisplay.style.visibility='visible';
    }else{
        applesdisplay.style.visibility='hidden';
    }
    if(state.gatherers>0){
        gatherdisplay.style.visibility='visible';
    }else{
        gatherdisplay.style.visibility='hidden';
    }
    if(state.choppers>0){
        chopdisplay.style.visibility='visible';
    }else{
        chopdisplay.style.visibility='hidden';
    }
    if(state.crafters>0){
        craftdisplay.style.visibility='visible';
    }else{
        craftdisplay.style.visibility='hidden';
    }
    if(state.studiers>0){
        studydisplay.style.visibility='visible';
    }else{
        studydisplay.style.visibility='hidden';
    }
    if(state.warderps>0){
        wardisplay.style.visibility='visible';
    }else{
        wardisplay.style.visibility='hidden';
    }
    if(state.crushers>0){
        crushdisplay.style.visibility='visible';
    }else{
        crushdisplay.style.visibility='hidden';
    }
    if(state.goop>0){
        goopdisplay.style.visibility='visible';
    }else{
        goopdisplay.style.visibility='hidden';
    }
    if(state.meat>0){
        meatdisplay.style.visibility='visible';
    }else{
        meatdisplay.style.visibility='hidden';
    }
    if(state.loyalty>0){
        loyaltydisplay.style.visibility='visible';
    }else{
        loyaltydisplay.style.visibility='hidden';
    }
    if(state.stuff>0 && state.things>0 && state.know){
        crushbutton.style.visibility='visible';
    }else{
        crushbutton.style.visibility='hidden';
    }
    if(state.meat>0 && state.things>0 && state.smarts>=85){
        trainbutton.style.visibility='visible';
    }else{
        trainbutton.style.visibility='hidden';
    }
    if(state.logs>=50 && state.stuff>=1 && state.vines>=10 && state.smarts>=527){
        crusherbutton.style.visibility='visible';
    }else{
        crusherbutton.style.visibility='hidden';
    }
    if(state.meat>=10 && state.things>0 && state.smarts>=204 && state.axes>0){
        choptrainbutton.style.visibility='visible';
    }else{
        choptrainbutton.style.visibility='hidden';
    }
    if(state.meat>=20 && state.things>0 && state.smarts>=255 && state.houses>0){
        crafttrainbutton.style.visibility='visible';
    }else{
        crafttrainbutton.style.visibility='hidden';
    }
    if(state.meat>=40 && state.smarts>=323){
        studytrainbutton.style.visibility='visible';
    }else{
        studytrainbutton.style.visibility='hidden';
    }
    if(state.meat>=10 && state.smarts>=408 && state.unrising){
        wartrainbutton.style.visibility='visible';
    }else{
        wartrainbutton.style.visibility='hidden';
    }
    if(state.stuff>0 && state.fatderps>0){
        fatcrushbutton.style.visibility='visible';
    }else{
        fatcrushbutton.style.visibility='hidden';
    }
    if(state.axes>0 && !state.dead && !state.pinned){
        chopbutton.style.visibility='visible';
    }else{
        chopbutton.style.visibility='hidden';
    }
    if(state.apples>0 && state.things>0 && state.know){
        feedbutton.style.visibility='visible';
    }else{
        feedbutton.style.visibility='hidden';
    }
    if(state.goop>0 && state.sticks>0 && state.stuff>0 && state.smarts>=119){
        goopaxebutton.style.visibility='visible';
    }else{
        goopaxebutton.style.visibility='hidden';
    }
    if(state.goop>=50 && state.logs>=500 && state.bark>2500 && state.smarts>=170){
        housebutton.style.visibility='visible';
    }else{
        housebutton.style.visibility='hidden';
    }
    if(state.vines>0 && state.sticks>0 && state.stuff>0 && state.smarts>=119){
        vineaxebutton.style.visibility='visible';
    }else{
        vineaxebutton.style.visibility='hidden';
    }
    if(state.ungoop>=100 && state.smarts>=187){
        statuebutton.style.visibility='visible';
    }else{
        statuebutton.style.visibility='hidden';
    }
    if(state.pinned){
        unpinbutton.style.visibility='visible';
    }else{
        unpinbutton.style.visibility='hidden';
    }
    if(state.axes>=1 && state.underps>=1 && state.unrising && !state.pinned){
        battlebutton.style.visibility='visible';
    }else{
        battlebutton.style.visibility='hidden';
    }
    if(state.ungoop>0){
        ungoopdisplay.style.visibility='visible';
    }else{
        ungoopdisplay.style.visibility='hidden';
    }
    if(state.statues>0){
        statuedisplay.style.visibility='visible';
    }else{
        statuedisplay.style.visibility='hidden';
    }
    if(state.know){
        document.querySelectorAll('.things').forEach(function(e) {
            e.innerHTML="derps";
        });
        document.querySelectorAll('.stuff').forEach(function(e) {
            e.innerHTML="rocks";
        });
        thingcreation.innerHTML="derp breeding"
    }else{
        document.querySelectorAll('.things').forEach(function(e) {
            e.innerHTML="things";
        });
        document.querySelectorAll('.stuff').forEach(function(e) {
            e.innerHTML="stuff";
        });
        thingcreation.innerHTML="thing creation"
    }
    if(state.unrising && !state.dead){
        underpdisplay.style.visibility='visible';
    }else{
        underpdisplay.style.visibility='hidden';
    }
    if(state.unrising && !state.dead && state.know){
        abandonbutton.style.visibility='visible';
    }else{
        abandonbutton.style.visibility='hidden';
    }
}
function Crush(){
    state.things-=1
    state.stuff-=1
    state.goop+=1
}
function FatCrush(){
    state.fatderps-=1
    state.stuff-=1
    if(Math.random()<0.5){
        state.goop+=2;
    }else{
        state.meat+=1;
    }
}
function Feed(){
    state.things-=1;
    state.apples-=1;
    state.fatderps+=1;
}
function Chop(){
    state.axebreak+=1
    state.logs+=randint(1,5);
    state.bark+=randint(5,20);
    state.sticks+=randint(3,15);
    state.vines+=randint(0,5);
    state.apples+=randint(0,2);
    if(state.axebreak==10){
        state.axes-=1;
        state.axebreak=0;
    }
}
function Train(){
    state.things-=1;
    state.meat-=1;
    state.gatherers+=1;
}
function ChopTrain(){
    state.things-=1;
    state.meat-=10;
    state.choppers+=1;
}
function CraftTrain(){
    state.things-=1;
    state.houses-=1;
    state.meat-=20;
    state.crafters+=1;
}
function StudyTrain(){
    state.things-=1;
    state.smarts-=10;
    state.meat-=40;
    state.studiers+=1;
}
function WarTrain(){
    state.things-=1;
    state.meat-=10;
    state.warderps+=1;
}
function House(){
    state.bark-=2500;
    state.goop-=50;
    state.logs-=500;
    state.houses+=1;
}
function Crusher(){
    state.vines-=10;
    state.logs-=50;
    state.crushers+=1;
}
function Unpin(){
    state.axes-=1;
    state.pinned=false;
}
function Abandon(){
    state.things-=1;
    state.underps+=1;
}
function KillUnderp(){
    if(state.houses>0){
        var dcmod=state.houses;
    }else{
        var dcmod=1;
    }
    if(Math.random()<0.005/dcmod){
        state.goop+=2;
        state.meat+=1;
        state.warderps-=1;
        state.axebreak+=1;
        if(state.axebreak==10){
            state.axes-=1;
            state.axebreak=0;
        }
    }else if(Math.random()<1-(0.95/dcmod)){
        state.underps-=1
        state.meat+=1;
        state.ungoop+=2;
        if(Math.random()<0.1){
            state.axes+=1;
        }
        state.axebreak+=1;
        if(state.axebreak==10){
            state.axes-=1;
            state.axebreak=0;
        }
    }
}
function Battle(){
    if(Math.random()<0.001){
        state.pinned=true;
        state.axebreak+=1;
        if(state.axebreak==10){
            state.axes-=1;
            state.axebreak=0;
        }
    }else if(Math.random()<0.99){
        state.underps-=1
        state.meat+=1;
        state.ungoop+=2;
        if(Math.random()<0.1){
            state.axes+=1;
        }
        state.axebreak+=1;
        if(state.axebreak==10){
            state.axes-=1;
            state.axebreak=0;
        }
    }
}
function GoopAxe(){
    state.stuff-=1;
    state.goop-=1;
    state.sticks-=1;
    state.axes+=1;
}
function VineAxe(){
    state.stuff-=1;
    state.vines-=1;
    state.sticks-=1;
    state.axes+=1;
}
function RockDie(){
    Die();
    state.stuff=1;
}
function AxeDie(){
    Die();
    state.axes=1;
}
function Die(){
    state.pinned=false;
    state.stuff=0;
    state.smarts-=10
    state.things=0;
    state.bark=0;
    state.sticks=0;
    state.vines=0;
    state.apples=0;
    state.goop=0;
    state.meat=0;
    state.fatderps=0;
    state.axes=0;
    state.logs=0;
    state.thingscost = 3;
    state.stuffcost = 3;
    var nunderps = 0
    nunderps+=state.gatherers;
    state.gatherers=0;
    nunderps+=state.choppers;
    state.choppers=0;
    nunderps+=state.crafters;
    state.crafters=0;
    nunderps+=state.studiers;
    state.studiers=0;
    nunderps+=state.warderps;
    if (nunderps >= state.loyalty) {
      state.things += nunderps;
      nunderps -= state.loyalty;
      state.loyalty = 0;
      state.underps += nunderps;
    } else {
      state.things = nunderps
      state.loyalty -= nunderps
      nunderps = 0
    }
    state.warderps=0;
    state.houses=0;
    state.crushers=0;
    state.ungoop=0;
    state.statues-=10;
    state.dead=true;
}
function Rebirth(){
    state.dead=false;
    state.lives+=1
    if(state.underps>=16 || state.unrising){
        state.underps = 16
        state.unrising=true;
        alert("A strange looking derp holding an axe to your neck says that it was one of the derps you have abandoned by dying. It says that all the derps you have abandoned have made an empire, and are calling themselves underps. They are starting an uprising, or actually, an unrising. Then the underps pin you down and start to gather away your smarts.")
        state.pinned=true;
        alert("A derp offers to help you, it appears to have learned from the underps but it is still loyal to you. It starts to gather rocks for you, one of its friends starts to chop trees for you using an axe it stole from the underps, another few begin to study some rocks, and a couple more begin to defend you from the underps with axes.")
        state.gatherers+=1;
        state.choppers+=1;
        state.studiers+=3;
        state.warderps+=2;
        state.axes+=state.warderps+1;
    }
    for (var i = 0; i<state.loyalty; i++) {
      if (Math.random()<0.01) {
        state.gatherers+=1;
      }if (Math.random()<0.01) {
        state.choppers+=1;
        state.axes+=1;
      }if (Math.random()<0.01) {
        state.choppers+=1;
        state.warderps+=1;
        state.axes+=1;
      }if (Math.random()<0.01) {
        state.studiers+=1;
      }
    }
}
function Throw(){
    state.stuff-=1;
    if(Math.random()<0.5){
        state.bark+=1;
    }else if(Math.random()<0.5){
        state.sticks+=1;
    }else if(Math.random()<0.8){
        state.vines+=1;
    }else{
        state.apples+=1;
    }
}
function Learn(){
    state.smarts+=20;
    alert("The derpy lion explains to you everything about the world. They explain that the stuff you are holding is called a rock, and that what you called things are actually animals called derps. They also explain how the pillars around you are called trees. They explain to you many more things that will probably come in handy soon.")
    state.know=true;
}
function Stuff(){
    state.stuff+=state.stuffrate;
}
function StudyThing(){
    state.things-=1;
    state.smarts+=Math.floor(Math.random()*3*state.lives)+1
}
function StudyStuff(){
    state.stuff-=1;
    state.smarts+=Math.floor(Math.random()*6*state.lives)
}
function Smarts(){
    state.stuff-=1;
    state.things-=1;
    state.smarts+=1;
}
function You(){
    state.youknow=true;
    state.smarts+=5
}
function ThingsUp(){
    state.stuff-=state.thingscost;
    state.thingsrate+=0.05;
    state.thingscost*=2;
}
function StuffUp(){
    state.things-=state.stuffcost;
    state.stuffrate+=1;
    state.stuffcost*=2;
}
function Statue(){
  state.ungoop -= 100
  state.statues += 1
  state.loyalty += 1
}
function always(){
    if(!state.dead){
        state.things+=state.thingsrate;
        if(state.gatherers>0){
            state.stuff+=(state.gatherers*(state.stuffrate/40))*(2**state.houses);
        }
        if(state.choppers>0 && state.axes>0){
            state.treechop+=(state.choppers/40)*(2**state.houses);
            if(state.treechop>=1){
                var chops = Math.floor(state.treechop);
                for(var i = 0; i<=chops; i++){
                    state.treechop-=1;
                    if(state.axes>0){
                        Chop();
                    }
                }
            }
        }
        if(state.crafters>0 && state.vines>0 && state.sticks>0 && state.stuff>0){
            state.axecraft+=(state.crafters/40)*(2**state.crafters);
            if(state.axecraft>=1){
                var crafts = Math.floor(state.axecraft);
                for(var i = 0; i<=crafts; i++){
                    state.axecraft-=1;
                    if(state.vines>0 && state.sticks>0 && state.stuff>0){
                        VineAxe();
                    }
                }
            }
        }
        if(state.houses>0 && state.things>state.houses/40 && state.apples>state.houses/40){
            state.things-=state.houses/40;
            state.apples-=state.houses/40;
            state.fatderps+=state.houses/40;
        }
        if(state.unrising && state.underps>9 && state.pinned){
            state.smarts-=state.underps/800;
        }
        if(state.unrising && state.underps>8 && !state.pinned && Math.random()>0.999) {
          state.pinned = true;
        }
        if(state.studiers>0 && state.stuff>=1){
            state.study+=(state.studiers/40)*(2**state.houses);
            if(state.study>=1){
                var studies = Math.floor(state.study);
                for(var i = 0; i<=studies; i++){
                    state.study-=1;
                    if(state.stuff>=1){
                        StudyStuff();
                    }
                }
            }
        }
        if(state.warderps>0 && state.axes>=1 && state.underps>=1 && state.unrising){
            state.unkill+=(state.warderps/40)*(2**state.houses);
            if(state.unkill>=1){
                var kills = Math.floor(state.unkill);
                for(var i = 0; i<=kills; i++){
                    state.unkill-=1;
                    if(state.underps>=1 && state.axes>=1){
                        KillUnderp();
                    }
                }
            }
        }
        if(state.crushers>0 && state.stuff>=1 && state.fatderps>=1){
            state.crush+=(state.crushers/800);
            if(state.crush>=1){
                var crushes = Math.floor(state.crush);
                for(var i = 0; i<=crushes; i++){
                    state.crush-=1;
                    if(state.fatderps>=1 && state.stuff>=1){
                        FatCrush();
                    }else{
                        state.stuff-=1
                    }
                }
            }
        }
        if(state.statues>0) {
          state.loyalty += state.statues/100
        }
    }
    if(state.underps>0){
        state.underps*=1.0005;
    }
    update();
    window.localStorage.setItem('state', JSON.stringify(state));
    requestAnimationFrame(always);
}
always();
