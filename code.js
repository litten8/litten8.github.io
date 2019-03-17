function randint(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}
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
var things=0;
var stuff=0;
var lives=1;
var thingsrate=0.05;
var stuffrate=1;
var thingscost = 3;
var stuffcost = 3;
var smarts = 0;
var youknow=false;
var dead=false;
var know=false;
var bark=0;
var sticks=0;
var vines=0;
var apples=0;
var goop=0;
var meat=0;
var fatderps=0;
var gatherers=0;
var choppers=0;
var axes=0;
var logs=0;
var houses=0;
var treechop=0;
var crush=0;
var axecraft=0;
var study=0;
var axebreak=0;
var crafters=0;
var underps=0;
var unrising=false;
var pinned=false;
var studiers=0;
var warderps=0;
var crushers=0;
var unkill=0;
var ungoop = 0;
var statues=0;
var loyalty=0;
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
    thingsn.innerHTML=Math.floor(things);
    stuffn.innerHTML=Math.floor(stuff);
    smartsn.innerHTML=Math.floor(smarts);
    thingscostn.innerHTML=thingscost;
    stuffcostn.innerHTML=stuffcost;
    livesn.innerHTML=lives;
    sticksn.innerHTML=sticks;
    barkn.innerHTML=bark;
    vinesn.innerHTML=vines;
    applesn.innerHTML=Math.floor(apples);
    goopn.innerHTML=goop;
    meatn.innerHTML=meat;
    gatherern.innerHTML=gatherers;
    chopn.innerHTML=choppers;
    fatderpn.innerHTML=Math.floor(fatderps);
    axen.innerHTML=axes;
    logn.innerHTML=logs;
    housen.innerHTML=houses;
    craftn.innerHTML=crafters;
    studyn.innerHTML=studiers;
    warn.innerHTML=warderps;
    crushn.innerHTML=crushers;
    underpn.innerHTML=Math.floor(underps);
    ungoopn.innerHTML=ungoop;
    statuen.innerHTML=statues;
    loyaltyn.innerHTML=loyalty;
    if(smarts<0){
        alert("The unthings have taken all of your smarts.")
        Die();
        dead=false;
        unrising=false;
        underps=0;
        smarts=0;
        lives=1;
        thingsrate=0.05;
        stuffrate=1
    }
    if(smarts<17){
        youknow=false;
    }
    if(smarts<51){
        know=false;
    }
    if(!dead && !pinned){
        stuffbutton.style.display='block';
    }else{
        stuffbutton.style.display='none';
    }
    if(dead){
        derpylion.style.display='block';
    }else{
        derpylion.style.display='none';
    }
    if(stuff>0 && things>0 && !know){
        ponderbutton.style.display='block';
    }else{
        ponderbutton.style.display='none';
    }
    if(smarts>0){
        smarty.style.display='block';
    }else{
        smarty.style.display='none';
    }
    if(smarts>=17 && !youknow){
        youbutton.style.display='block';
    }else{
        youbutton.style.display='none';
    }
    if(youknow && stuff>=1 && !dead){
        diebutton.style.display='block';
    }else{
        diebutton.style.display='none';
    }
    if(axes>=1 && !dead){
        axediebutton.style.display='block';
    }else{
        axediebutton.style.display='none';
    }
    if(dead){
        rebirthbutton.style.display='block';
    }else{
        rebirthbutton.style.display='none';
    }
    if(stuff>=thingscost){
        thingsratebutton.style.display='block';
    }else{
        thingsratebutton.style.display='none';
    }
    if(things>=stuffcost){
        stuffratebutton.style.display='block';
    }else{
        stuffratebutton.style.display='none';
    }
    if(lives>1){
        livesdisplay.style.display='block';
    }else{
        livesdisplay.style.display='none';
    }
    if(stuff>=1 && smarts>=34 && !dead){
        studystuffbutton.style.display='block';
    }else{
        studystuffbutton.style.display='none';
    }
    if(things>=1 && smarts>=34){
        studythingbutton.style.display='block';
    }else{
        studythingbutton.style.display='none';
    }
    if(dead && smarts>=51 && !know){
        knowbutton.style.display='block';
    }else{
        knowbutton.style.display='none';
    }
    if(know && stuff>0 && !dead){
        throwbutton.style.display='block';
    }else{
        throwbutton.style.display='none';
    }
    if(bark>0){
        barkdisplay.style.display='block';
    }else{
        barkdisplay.style.display='none';
    }
    if(logs>0){
        logdisplay.style.display='block';
    }else{
        logdisplay.style.display='none';
    }
    if(houses>0){
        housedisplay.style.display='block';
    }else{
        housedisplay.style.display='none';
    }
    if(axes>0){
        axedisplay.style.display='block';
    }else{
        axedisplay.style.display='none';
    }
    if(fatderps>0){
        fatdisplay.style.display='block';
    }else{
        fatdisplay.style.display='none';
    }
    if(sticks>0){
        sticksdisplay.style.display='block';
    }else{
        sticksdisplay.style.display='none';
    }
    if(vines>0){
        vinesdisplay.style.display='block';
    }else{
        vinesdisplay.style.display='none';
    }
    if(apples>0){
        applesdisplay.style.display='block';
    }else{
        applesdisplay.style.display='none';
    }
    if(gatherers>0){
        gatherdisplay.style.display='block';
    }else{
        gatherdisplay.style.display='none';
    }
    if(choppers>0){
        chopdisplay.style.display='block';
    }else{
        chopdisplay.style.display='none';
    }
    if(crafters>0){
        craftdisplay.style.display='block';
    }else{
        craftdisplay.style.display='none';
    }
    if(studiers>0){
        studydisplay.style.display='block';
    }else{
        studydisplay.style.display='none';
    }
    if(warderps>0){
        wardisplay.style.display='block';
    }else{
        wardisplay.style.display='none';
    }
    if(crushers>0){
        crushdisplay.style.display='block';
    }else{
        crushdisplay.style.display='none';
    }
    if(goop>0){
        goopdisplay.style.display='block';
    }else{
        goopdisplay.style.display='none';
    }
    if(meat>0){
        meatdisplay.style.display='block';
    }else{
        meatdisplay.style.display='none';
    }
    if(loyalty>0){
        loyaltydisplay.style.display='block';
    }else{
        loyaltydisplay.style.display='none';
    }
    if(stuff>0 && things>0 && know){
        crushbutton.style.display='block';
    }else{
        crushbutton.style.display='none';
    }
    if(meat>0 && things>0 && smarts>=85){
        trainbutton.style.display='block';
    }else{
        trainbutton.style.display='none';
    }
    if(logs>=50 && stuff>=1 && vines>=10 && smarts>=527){
        crusherbutton.style.display='block';
    }else{
        crusherbutton.style.display='none';
    }
    if(meat>=10 && things>0 && smarts>=204 && axes>0){
        choptrainbutton.style.display='block';
    }else{
        choptrainbutton.style.display='none';
    }
    if(meat>=20 && things>0 && smarts>=255 && houses>0){
        crafttrainbutton.style.display='block';
    }else{
        crafttrainbutton.style.display='none';
    }
    if(meat>=40 && smarts>=323){
        studytrainbutton.style.display='block';
    }else{
        studytrainbutton.style.display='none';
    }
    if(meat>=10 && smarts>=408 && unrising){
        wartrainbutton.style.display='block';
    }else{
        wartrainbutton.style.display='none';
    }
    if(stuff>0 && fatderps>0){
        fatcrushbutton.style.display='block';
    }else{
        fatcrushbutton.style.display='none';
    }
    if(axes>0 && !dead && !pinned){
        chopbutton.style.display='block';
    }else{
        chopbutton.style.display='none';
    }
    if(apples>0 && things>0 && know){
        feedbutton.style.display='block';
    }else{
        feedbutton.style.display='none';
    }
    if(goop>0 && sticks>0 && stuff>0 && smarts>=119){
        goopaxebutton.style.display='block';
    }else{
        goopaxebutton.style.display='none';
    }
    if(goop>=50 && logs>=500 && bark>2500 && smarts>=170){
        housebutton.style.display='block';
    }else{
        housebutton.style.display='none';
    }
    if(vines>0 && sticks>0 && stuff>0 && smarts>=119){
        vineaxebutton.style.display='block';
    }else{
        vineaxebutton.style.display='none';
    }
    if(ungoop>=100 && smarts>=187){
        statuebutton.style.display='block';
    }else{
        statuebutton.style.display='none';
    }
    if(pinned){
        unpinbutton.style.display='block';
    }else{
        unpinbutton.style.display='none';
    }
    if(axes>=1 && underps>=1 && unrising && !pinned){
        battlebutton.style.display='block';
    }else{
        battlebutton.style.display='none';
    }
    if(ungoop>0){
        ungoopdisplay.style.display='block';
    }else{
        ungoopdisplay.style.display='none';
    }
    if(statues>0){
        statuedisplay.style.display='block';
    }else{
        statuedisplay.style.display='none';
    }
    if(know){
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
    if(unrising && !dead){
        underpdisplay.style.display='block';
    }else{
        underpdisplay.style.display='none';
    }
    if(unrising && !dead && know){
        abandonbutton.style.display='block';
    }else{
        abandonbutton.style.display='none';
    }
}
function Crush(){
    things-=1
    stuff-=1
    goop+=1
}
function FatCrush(){
    fatderps-=1
    stuff-=1
    if(Math.random()<0.5){
        goop+=2;
    }else{
        meat+=1;
    }
}
function Feed(){
    things-=1;
    apples-=1;
    fatderps+=1;
}
function Chop(){
    axebreak+=1
    logs+=randint(1,5);
    bark+=randint(5,20);
    sticks+=randint(3,15);
    vines+=randint(0,5);
    apples+=randint(0,2);
    if(axebreak==10){
        axes-=1;
        axebreak=0;
    }
}
function Train(){
    things-=1;
    meat-=1;
    gatherers+=1;
}
function ChopTrain(){
    things-=1;
    meat-=10;
    choppers+=1;
}
function CraftTrain(){
    things-=1;
    houses-=1;
    meat-=20;
    crafters+=1;
}
function StudyTrain(){
    things-=1;
    smarts-=10;
    meat-=40;
    studiers+=1;
}
function WarTrain(){
    things-=1;
    meat-=10;
    warderps+=1;
}
function House(){
    bark-=2500;
    goop-=50;
    logs-=500;
    houses+=1;
}
function Crusher(){
    vines-=10;
    logs-=50;
    crushers+=1;
}
function Unpin(){
    axes-=1;
    pinned=false;
}
function Abandon(){
    things-=1;
    underps+=1;
}
function KillUnderp(){
    if(houses>0){
        var dcmod=houses;
    }else{
        var dcmod=1;
    }
    if(Math.random()<0.005/dcmod){
        goop+=2;
        meat+=1;
        warderps-=1;
        axebreak+=1;
        if(axebreak==10){
            axes-=1;
            axebreak=0;
        }
    }else if(Math.random()<1-(0.95/dcmod)){
        underps-=1
        meat+=1;
        ungoop+=2;
        if(Math.random()<0.1){
            axes+=1;
        }
        axebreak+=1;
        if(axebreak==10){
            axes-=1;
            axebreak=0;
        }
    }
}
function Battle(){
    if(Math.random()<0.001){
        pinned=true;
        axebreak+=1;
        if(axebreak==10){
            axes-=1;
            axebreak=0;
        }
    }else if(Math.random()<0.99){
        underps-=1
        meat+=1;
        ungoop+=2;
        if(Math.random()<0.1){
            axes+=1;
        }
        axebreak+=1;
        if(axebreak==10){
            axes-=1;
            axebreak=0;
        }
    }
}
function GoopAxe(){
    stuff-=1;
    goop-=1;
    sticks-=1;
    axes+=1;
}
function VineAxe(){
    stuff-=1;
    vines-=1;
    sticks-=1;
    axes+=1;
}
function RockDie(){
    Die();
    stuff=1;
}
function AxeDie(){
    Die();
    axes=1;
}
function Die(){
    pinned=false;
    stuff=0;
    smarts-=10
    things=0;
    bark=0;
    sticks=0;
    vines=0;
    apples=0;
    goop=0;
    meat=0;
    fatderps=0;
    axes=0;
    logs=0;
    thingscost = 3;
    stuffcost = 3;
    var nunderps = 0
    nunderps+=gatherers;
    gatherers=0;
    nunderps+=choppers;
    choppers=0;
    nunderps+=crafters;
    crafters=0;
    nunderps+=studiers;
    studiers=0;
    nunderps+=warderps;
    if (nunderps >= loyalty) {
      things += nunderps;
      nunderps -= loyalty;
      loyalty = 0;
      underps += nunderps;
    } else {
      things = nunderps
      loyalty -= nunderps
      nunderps = 0
    }
    warderps=0;
    houses=0;
    crushers=0;
    ungoop=0;
    statues-=10;
    dead=true;
}
function Rebirth(){
    dead=false;
    lives+=1
    if(underps>=16 || unrising){
        underps = 16
        unrising=true;
        alert("A strange looking derp holding an axe to your neck says that it was one of the derps you have abandoned by dying. It says that all the derps you have abandoned have made an empire, and are calling themselves underps. They are starting an uprising, or actually, an unrising. Then the underps pin you down and start to gather away your smarts.")
        pinned=true;
        alert("A derp offers to help you, it appears to have learned from the underps but it is still loyal to you. It starts to gather rocks for you, one of its friends starts to chop trees for you using an axe it stole from the underps, another few begin to study some rocks, and a couple more begin to defend you from the underps with axes.")
        gatherers+=1;
        choppers+=1;
        studiers+=3;
        warderps+=2;
        axes+=warderps+1;
    }
    for (var i = 0; i<loyalty; i++) {
      if (Math.random()<0.01) {
        gatherers+=1;
      }if (Math.random()<0.01) {
        choppers+=1;
        axes+=1;
      }if (Math.random()<0.01) {
        choppers+=1;
        warderps+=1;
        axes+=1;
      }if (Math.random()<0.01) {
        studiers+=1;
      }
    }
}
function Throw(){
    stuff-=1;
    if(Math.random()<0.5){
        bark+=1;
    }else if(Math.random()<0.5){
        sticks+=1;
    }else if(Math.random()<0.8){
        vines+=1;
    }else{
        apples+=1;
    }
}
function Learn(){
    smarts+=20;
    alert("The derpy lion explains to you everything about the world. They explain that the stuff you are holding is called a rock, and that what you called things are actually animals called derps. They also explain how the pillars around you are called trees. They explain to you many more things that will probably come in handy soon.")
    know=true;
}
function Stuff(){
    stuff+=stuffrate;
}
function StudyThing(){
    things-=1;
    smarts+=Math.floor(Math.random()*3*lives)+1
}
function StudyStuff(){
    stuff-=1;
    smarts+=Math.floor(Math.random()*6*lives)
}
function Smarts(){
    stuff-=1;
    things-=1;
    smarts+=1;
}
function You(){
    youknow=true;
    smarts+=5
}
function ThingsUp(){
    stuff-=thingscost;
    thingsrate+=0.05;
    thingscost*=2;
}
function StuffUp(){
    things-=stuffcost;
    stuffrate+=1;
    stuffcost*=2;
}
function Statue(){
  ungoop -= 100
  statues += 1
  loyalty += 1
}
function always(){
    if(!dead){
        things+=thingsrate;
        if(gatherers>0){
            stuff+=(gatherers*(stuffrate/40))*(2**houses);
        }
        if(choppers>0 && axes>0){
            treechop+=(choppers/40)*(2**houses);
            if(treechop>=1){
                var chops = Math.floor(treechop);
                for(var i = 0; i<=chops; i++){
                    treechop-=1;
                    if(axes>0){
                        Chop();
                    }
                }
            }
        }
        if(crafters>0 && vines>0 && sticks>0 && stuff>0){
            axecraft+=(crafters/40)*(2**crafters);
            if(axecraft>=1){
                var crafts = Math.floor(axecraft);
                for(var i = 0; i<=crafts; i++){
                    axecraft-=1;
                    if(vines>0 && sticks>0 && stuff>0){
                        VineAxe();
                    }
                }
            }
        }
        if(houses>0 && things>houses/40 && apples>houses/40){
            things-=houses/40;
            apples-=houses/40;
            fatderps+=houses/40;
        }
        if(unrising && underps>9 && pinned){
            smarts-=underps/800;
        }
        if(unrising && underps>8 && !pinned && Math.random()>0.999) {
          pinned = true;
        }
        if(studiers>0 && stuff>=1){
            study+=(studiers/40)*(2**houses);
            if(study>=1){
                var studies = Math.floor(study);
                for(var i = 0; i<=studies; i++){
                    study-=1;
                    if(stuff>=1){
                        StudyStuff();
                    }
                }
            }
        }
        if(warderps>0 && axes>=1 && underps>=1 && unrising){
            unkill+=(warderps/40)*(2**houses);
            if(unkill>=1){
                var kills = Math.floor(unkill);
                for(var i = 0; i<=kills; i++){
                    unkill-=1;
                    if(underps>=1 && axes>=1){
                        KillUnderp();
                    }
                }
            }
        }
        if(crushers>0 && stuff>=1 && fatderps>=1){
            crush+=(crushers/800);
            if(crush>=1){
                var crushes = Math.floor(crush);
                for(var i = 0; i<=crushes; i++){
                    crush-=1;
                    if(fatderps>=1 && stuff>=1){
                        FatCrush();
                    }else{
                        stuff-=1
                    }
                }
            }
        }
        if(statues>0) {
          loyalty += statues/100
        }
    }
    if(underps>0){
        underps*=1.0005;
    }
    update();
    requestAnimationFrame(always);
}
always();
