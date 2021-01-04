if (!(window.innerWidth/window.innerHeight === 1440/732)) {
    var wc = document.getElementById("EverythingFitter")
    if (window.innerWidth < 1440) {
        wc.style.width = window.innerWidth
        wc.style.height = (window.innerWidth/(1440/732)).toString()+"px"
    }
}
wc = document.getElementById("EverythingFitter")
wc.style.width = window.innerWidth.toString()+"px";
wc.style.height = (window.innerWidth/(1440/732)).toString()+"px";
News = "Greetings Beta Testers! Version 1.3.0 is out now!<br><br> \
    New Features:<br>A menu<br>New zombie - the Gargantuar<br>Remaining seeds from seed spit will now hit the zombie behind the zombie they vanquished<br>there are now visual changes for when a zombie is gooped or chomper is frozen<br>Armor Chomper can now use two attacks per turn<br>Levels are now called Waves<br>Swag Zombie has been renamed to Gangsta Zombie<br><br> \
    Bug Fixes:<br>Gangsta Zombie now more properly aligned on tile<br>Ability window has been moved to the bottom of the screen to prevent window from blocking view<br>Console now displays how many shots have missed for multi shot attacks<br>Zombies will now not move two spaces after being caught behind another zombie<br><br>\
    Balance Changes:<br>Gangsta Zombie’s melee attack is now called “Fist Fight” and does 30 damage with no cooldown<br> \
    Gangsta Zombie’s gun accuracy increased from 55% to 60%<br> \
    Gangsta Zombie’s gun now takes one turn to reload<br> \
    Gangsta Zombie is now more common<br> \
    Yeti Zombie’s snowball now stuns 33% of the time instead of 25%<br> \
    Yeti Zombie’s snowball accuracy decreased from 100% to 90%<br> \
    Buckethead Zombie’s health decreased from 200 to 175"; 
function LoadInstructions() {
    wc = document.getElementById("EverythingFitter");
    MessageContainer = document.createElement("div");
    wc.appendChild(MessageContainer);
    MessageContainer.className = "HTP";
    MessageContainer.style.display = "block";
    MessageContainer.id = "LoadGame";
    Message = document.createElement("div");
    Message.className = "Message";
    Message.style.width = "40%";
    MessageContainer.appendChild(Message);
    CloseButton = document.createElement("span");
    CloseButton.className= "close";
    CloseButton.innerHTML = "&times;"
    CloseButton.onclick = function() {
        document.getElementById("LoadGame").remove();
    }
    Message.appendChild(CloseButton);
    TrollFace = document.createElement("img");
    TrollFace.src = "instructions.png"
    TrollFace.style.width = "100%";
    TrollFace.style.height = "auto";
    Message.appendChild(TrollFace);
}
function LoadNew() {
    wc = document.getElementById("EverythingFitter");
    MessageContainer = document.createElement("div");
    wc.appendChild(MessageContainer);
    MessageContainer.className = "HTP";
    MessageContainer.style.display = "block";
    MessageContainer.id = "LoadGame";
    Message = document.createElement("div");
    Message.className = "Message";
    Message.style.width = "55%";
    MessageContainer.appendChild(Message);
    CloseButton = document.createElement("span");
    CloseButton.className= "close";
    CloseButton.innerHTML = "&times;"
    CloseButton.onclick = function() {
        document.getElementById("LoadGame").remove();
    }
    Message.appendChild(CloseButton);
    MessageHeader = document.createElement("p");
    MessageHeader.className = "MessageHeader";
    MessageHeader.innerHTML = "What's new in Version 1.3.0";
    Message.appendChild(MessageHeader);
    MessageText = document.createElement("p");
    MessageText.className = "MessageText";
    MessageText.innerHTML = News;
    Message.appendChild(MessageText);
}
function StartGame() {
wc = document.getElementById("EverythingFitter")
wc.innerHTML = '';
ac = document.createElement("img")
ac.src = "ArmorChomperRight.PNG";
ac.id="ArmorChomper"
ac.className="Fighter";
wc.appendChild(ac);
turnc = document.createElement("header");
turnc.id="TurnCounter";
wc.appendChild(turnc);
tc = document.createElement("div");
tc.id="AttackContainer";
wc.appendChild(tc);
t = document.createElement("header");
t.id="AttackLabel";
t.innerHTML="Attacks:";
tc.appendChild(t);
ab = document.createElement("div");
ab.id="AbilityButtons";
wc.appendChild(ab);
et = document.createElement("button");
et.className="AbilityButton";
et.id="EndTurn";
et.innerHTML="End Turn";
ab.appendChild(et);
ha = document.createElement("div");
ha.id="HealthArea";
wc.appendChild(ha);
hi = document.createElement("img");
hi.src="HealthIcon1.PNG";
hi.id="HealthIcon";
ha.appendChild(hi);
ham = document.createElement("p");
ham.innerHTML="225";
ham.id="HealthAmount";
ha.appendChild(ham);
lc = document.createElement("p");
lc.innerHTML="Wave 1";
lc.id="LevelCount";
wc.appendChild(lc);
ctc = document.createElement("div");
ctc.id="ConsoleTextContainer";
wc.appendChild(ctc);
function randomint(start, end) {
    end = end + 0.5
    start = start - 0.5
    var randomnum = (Math.random() * end);
    while (randomnum < start) {
        var randomnum = (Math.random() * end);  
    }
    return Math.round(randomnum);
}
function CreateModal(modalID,modalheader,modaltext,modalimage,modalbuttons) { //first one is necessary, other 3 are optional to not have them use ""
        MessageContainer = document.createElement("div");
        wc.appendChild(MessageContainer);
        MessageContainer.className = "MessageContainer";
        MessageContainer.style.display = "block";
        MessageContainer.id = "atakmodal";
        Message = document.createElement("div");
        Message.className = "Message";
        Message.style.width = "30%";
        MessageContainer.appendChild(Message);
        CloseButton = document.createElement("span");
        CloseButton.className= "close";
        CloseButton.innerHTML = "&times;"
        if (CanMove) {
            CloseButton.onclick = function() {
                CanMove = true;
                updategrid();
                UpdateTurnCount();
                document.getElementById("atakmodal").remove();
            }
        }
        else {
            CloseButton.onclick = function() {
                updategrid();
                document.getElementById("atakmodal").remove();
            }
        }
        CanMove = false;
        Message.appendChild(CloseButton);
        MessageImage = document.createElement("img");
        MessageImage.src = modalimage;
        Message.appendChild(MessageImage);
        MessageImage.style.width = "25%";
        MessageImage.style.float = "right"; 
        MessageHeader = document.createElement("p");
        MessageHeader.className = "MessageHeader";
        MessageHeader.style.display = "inline";
        //MessageHeader.style.float = "left";
        MessageHeader.innerHTML = modalheader;
        Message.appendChild(MessageHeader);
        for (b in modalbuttons) {
            MessageButton = document.createElement("button");
            MessageButton.innerHTML = modalbuttons[b][0];
            MessageButton.style.display = "block";
            MessageButton.onclick = modalbuttons[b][1];
            Message.appendChild(MessageButton);
        }
        MessageText = document.createElement("p");
        //MessageText.style.display = "block";
        MessageText.className = "MessageText";
        MessageText.innerHTML = modaltext;
        Message.appendChild(MessageText);
}
function FireProjectile() {
    missedshots = 0;
    if (!(CanAbility[0]) && !(CanAbility[1])) {
        CreateConsoleText("You have already used both abilities this turn.");
    }
    else if (currentProjectile.TimeUntilReady > 0) {
        if (currentProjectile.TimeUntilReady == currentProjectile.reloadTime+1) {
            CreateConsoleText("This ability will be ready in "+(parseInt(currentProjectile.TimeUntilReady)-1)+" turn(s)."); 
        }
        else {
            CreateConsoleText("This ability will be ready in "+currentProjectile.TimeUntilReady+" turn(s)."); 
        }
    }
    else {
        willhit = false;
        gt = false;
        currentProjectile.shotsLeft = currentProjectile.shots;
        for (g in griditemarray) {
            gi = griditemarray[g];
            if (gi.sprite == "RedTile.PNG") {
                console.log(currentProjectile.shotsLeft, currentProjectile.name)
                if (willhit && currentProjectile.shotsLeft <= 0) {
                    break;
                }
                else if (!(willhit && currentProjectile.shotsLeft > 0)) {
                    CreateConsoleText("Armor Chomper has used "+currentProjectile.name+".");
                    willhit = true;
                    if (CanAbility[0]) {
                        CanAbility[0] = false;
                    }
                    else if (CanAbility[1]) {
                        CanAbility[1] = false;
                    }
                    for (shot = 0; shot < currentProjectile.shots; shot++) {
                        if (randomint(0, 100) > currentProjectile.accuracy) {
                            missedshots += 1;
                            currentProjectile.shotsLeft -= 1;
                            if (currentProjectile.shots == 1) {
                                CreateConsoleText("Armor Chomper has missed.");
                            }
                        }
                    }
                    if (currentProjectile.shots > 1) {
                        CreateConsoleText("Armor Chomper has missed "+missedshots+" out of his "+currentProjectile.shots+" shots.");
                    }
                }
                if (missedshots != currentProjectile.shots) {
                    damagedone = (currentProjectile.shotsLeft)*(currentProjectile.damage*((100-gi.character.defense)/100))
                    if ((gi.character.health-damagedone) <= 0) {
                        damageneeded = 0;
                        while (gi.character.health > 0) {
                            gi.character.health -= currentProjectile.damage;
                            currentProjectile.shotsLeft -= 1;
                            damageneeded += currentProjectile.damage;
                            if (currentProjectile.shotsLeft <= 0) {
                                //console.log("run out of projectile")
                                //damagedone = currentProjectile.damage;
                                break;
                            }
                            else {
                                damagedone = damageneeded;
                            }
                        }
                    }
                    CreateConsoleText("Armor Chomper has hit "+gi.character.name+" for "+damagedone+" damage.");
                    gi.character.health -= damagedone;
                    //updategrid();
                    if (gi.character.health <= 0) {
                        CreateConsoleText("Armor chomper has vanquished "+gi.character.name+".")
                        gt = true;
                        wc.removeChild((fighterPhysArray[fighterArray.indexOf(gi.character)]));
                        fighterPhysArray.splice(fighterArray.indexOf(gi.character), 1);
                        fighterArray.splice(fighterArray.indexOf(gi.character), 1);
                        zhealtharray[ZombieArray.indexOf(gi.character)].remove();
                        zhealtharray.splice(ZombieArray.indexOf(gi.character), 1);
                        zhealthbararray[ZombieArray.indexOf(gi.character)].remove();
                        zhealthbararray.splice(ZombieArray.indexOf(gi.character), 1);
                        ZombieArray.splice(ZombieArray.indexOf(gi.character), 1);
                        gi.character = "";
                        CheckForWin();
                    }
                    else if (randomint(0, 100) < currentProjectile.stunChance) {
                        currentProjectile.shotsLeft -= (damagedone/currentProjectile.damage);
                        CreateConsoleText("Armor Chomper has stunned "+gi.character.name+" for one turn.") 
                        fighterPhysArray[fighterArray.indexOf(gi.character)].src = currentProjectile.name+(fighterPhysArray[fighterArray.indexOf(gi.character)].src).split("/")[(fighterPhysArray[fighterArray.indexOf(gi.character)].src).split("/").length-1]
                        gi.character.stunned = true;
                    }
                    else {
                        currentProjectile.shotsLeft -= (damagedone/currentProjectile.damage);
                    }
                }
                currentProjectile.TimeUntilReady = currentProjectile.reloadTime+1;
            }
        }
        updategrid();
        if (!(willhit)) {
            CreateConsoleText("Chomper did not use this ability, because there are no zombies in range.");
        }
        UpdateTurnCount();
    }
    CloseButton.click();     
}
function ResetGame() {
    ZTS = [];
    CPL = 0;
    difficultylevel += 1;
    if (turntime > 300) {
        turntime -= 75;
    }
    document.getElementById("LevelCount").innerHTML = "Wave "+difficultylevel
    Browncoat.health = 50;
    Conehead.health = 125;
    Imp.health = 25;
    Buckethead.health = 175;
    Yeti.health = 150;
    GunZomb.health = 100;
    Gargantuar.health = 350;
    ZombieArray = [Browncoat, Conehead, Imp, Buckethead, Yeti, GunZomb, Gargantuar];
    //ZombieArray = [Imp, Conehead];
    AC.coords = [2,2]; 
    availablecoords = [];
    for (x=4; x<9; x++) {
        for (y=0; y<4; y++) {
            availablecoords.push([x,y]);
        }
    }
    while (CPL != difficultylevel) {
        NZ = clone(ZombieArray[randomint(0,ZombieArray.length-1)])
        if (!(NZ.powerLevel + CPL > difficultylevel)) {
            coordchosen = availablecoords[randomint(0, availablecoords.length-1)];
            NZ.coords = coordchosen;
            availablecoords.splice(availablecoords.indexOf(coordchosen), 1);
            ZTS.push(NZ);
            CPL += NZ.powerLevel;
        }
    }
    ZombieArray = ZTS;
    prevzposes = [];
    zhealtharray = [];
    zhealthbararray = [];
    fighterPhysArray = [acs];
    ctc.innerHTML = "";
    chomperhealth.innerHTML = 225;
    CanZAbility = [];
    for (z in ZombieArray) {
        for (attack in ZombieArray[z].attacks) {
            ZombieArray[z].attacks[attack].TimeUntilReady = 0;
        }
        prevzposes.push(ZombieArray[z].coords)
        CanZAbility.push(true);
        var zombi = document.createElement("img");
        zombi.className = "Fighter";
        zombi.style.height = ZombieArray[z].height;
        zombi.src = ZombieArray[z].aliveSprite;
        wc.appendChild(zombi);
        fighterPhysArray.push(zombi);
        var zhealth = document.createElement("p")
        var zhealthbar = document.createElement("img")
        zhealthbar.src = "HeartIcon.PNG";
        zhealthbar.style.position = "absolute";
        zhealthbar.style.width = "4%";
        zhealthbar.style.zIndex = 9001;
        wc.appendChild(zhealthbar);
        zhealth.style.position = "absolute";
        zhealth.style.fontFamily =  'Marker Felt';
        zhealth.style.fontSize = "1.7vw";
        zhealth.style.zIndex = 9002;
        wc.appendChild(zhealth)
        zhealtharray.push(zhealth);
        zhealthbararray.push(zhealthbar);
    }
    fighterArray = [AC].concat(ZombieArray);
    for (attack in AC.attacks) {
        AC.attacks[attack].TimeUntilReady = 0;
    }
    IsPlayerTurn = true;
    CanMove = true;
    CanAbility = [true, true];
    directionright = true;
    prevppos = AC.coords.slice(0);
    currentProjectile = "";
    consolemessages = [];
    abilitybuttons.style.display = "block";
    UpdateTurnCount();
    CheckZindexes();
    document.getElementById("Goop").click();
    setTimeout(function() {
        CloseButton.onclick();
        updategrid();
    }, 1)
}
function CheckForWin() {
    if (ZombieArray.length == 0) {
        abilitybuttons.style.display = "none";
        IsPlayerTurn = false;
        CanMove = false;
        CreateConsoleText("Armor Chomper has beat wave "+difficultylevel+"!")
        endtext = document.createElement("p");
        endtext.id = "EndText";
        endtext.innerHTML = "Wave Complete!";
        wc.appendChild(endtext);
        retrybutton = document.createElement("button");
        retrybutton.id = "RetryButton";
        retrybutton.innerHTML = "Next wave";
        retrybutton.onclick = function() {
            wc.removeChild(endtext);
            wc.removeChild(retrybutton);
            ResetGame();
        }
        wc.appendChild(retrybutton);
        
    }
}
function CheckForLoss() {
    if (chomperhealth.innerHTML <= 0) {
        chomperhealth.innerHTML = 0;
        wc.removeChild(fighterPhysArray[fighterArray.indexOf(AC)]);
        abilitybuttons.style.display = "none";
        IsPlayerTurn = false;
        CanMove = false;
        CreateConsoleText("Armor Chomper has died on wave "+difficultylevel+".")
        endtext = document.createElement("p");
        endtext.id = "EndText";
        endtext.innerHTML = "You Lose";
        wc.appendChild(endtext);
        return true;
    }
    return false;
}
function CreateConsoleText(text, conjoin=false) {
    ctc = document.getElementById("ConsoleTextContainer");
    if (conjoin && (text.replace(/[0-9]/g, '') == consolemessages[consolemessages.length-1].innerHTML.replace(/[0-9]/g, ''))) {
        newnum = parseInt(text.replace(/\D/g,''))
        nindex = text.indexOf(newnum);
        edittext = text.replace(/[0-9]/g, '')
        edittext = edittext.slice(0, nindex)+(newnum+parseInt(consolemessages[consolemessages.length-1].innerHTML.replace(/\D/g,'')))+edittext.slice(nindex);
        consolemessages[consolemessages.length-1].innerHTML = edittext;
        
    }
    else {
        if (consolemessages.length > 3) {
            ctc.removeChild(consolemessages[0]);
            consolemessages.shift();
        }
        Message = document.createElement("div");
        Message.className = "consoletext";
        Message.innerHTML = text;
        consolemessages.push(Message);
        ctc.appendChild(Message)
    }
}
function UpdateTurnCount() {
    if (IsPlayerTurn) {
        al = 0;
        ml = 0;
        if (CanAbility[0]) {
            al += 1;
        }
        if (CanAbility[1]) {
            al += 1;
        }
        if (CanMove) {
            ml = 1;
        }
        turncounter.innerHTML = "Chomper's Turn: "+ml+" move left and "+al+" ability left";
    }
}
class griditem {
    constructor() {
        this.codx = 0; //x pos in terms of the grid
        this.cody = 0;//y pos in terms of the grid
        this.sprite = "";
        this.character = ""; //the character on the grid spot
    }
}
class AttackType {
    constructor() {
        this.damage = 0;
        this.name = "";
        this.desc = ""; //only for chomper's abilities
        this.range = 0; //how many squares it travels
        this.shots = 1; //how many times the attack triggers
        this.shotsLeft = 1;
        this.pierces = false; // whether the attack goes through zombs or not
        this.accuracy = 101; //percentage
        this.reloadTime = -1; //how many turns it takes until it's ready again
        this.TimeUntilReady = 0;
        this.stunChance = 0; //percent chance to stun
        this.displaySprite = ""; //sprite displaying ability
    }
}
class Fighter {
    constructor() {
        this.name = "";
        this.plant = false; //determine if it's a plant or zombie, boolean because idk :/
        this.health = 0;
        this.height = 0; //how tall it is
        this.wb = 1;
        this.powerLevel = 0; //To compare strengths between fighters
        this.movement = 1; //how many squares it can move
        this.stunned = false; //if the fighter is stunned or not
        this.coords = []; //x and y positions on the grid
        this.defense = 0; //how much incoming damage is reduced by (percentage)
        this.attacks = []; //what attacks this character has
        this.movesLeft = 0;
        this.aliveSprite = ""; //hmm why is this specified to be alive? unless..
        this.deadSprite = ""; //NOOOOO I don't wanna see the poor plants dead :(

    }
}
function clone(obj) {
    return Object.create(
      Object.getPrototypeOf(obj), 
      Object.getOwnPropertyDescriptors(obj) 
    );
}
fighterArray = [];
//armor chomper things
Goop = new AttackType();
Goop.name = "Goop";
Goop.desc = "Spit your slobber at a zombie to cover them in sticky goop that stops them from moving, making them vunerable. <br>Dmg: 25 ∫ Range: 4 spaces ∫ Cooldown: 1 turn ∫ Stuns for 1 turn ∫ 95% chance to hit";
Goop.damage = 25;
Goop.range = 4;
Goop.accuracy = 95;
Goop.reloadTime = 1;
Goop.stunChance = 101;
Goop.displaySprite = "GoopIcon.PNG";
Chomp = new AttackType();
Chomp.name = "Chomp";
Chomp.desc = "Bite a zombie with your sharp metal teeth. <br>Dmg: 75 ∫ range: Melee (1 space) ∫ No cooldown";
Chomp.damage = 75;
Chomp.range = 1;
Chomp.pierces = false;
Chomp.displaySprite = "ChompIcon.PNG";
Seed = new AttackType();
Seed.name = "Seed Spit";
Seed.desc = "Armor Chomper chews up some seeds and spits them out at the zombies. <br>Dmg: 25 per seed ∫ range: 6 spaces ∫ fires 3 seeds ∫ Cooldown: 2 turns ∫ 85% chance for each seed to hit";
Seed.damage = 25;
Seed.range = 6;
Seed.accuracy = 85;
Seed.reloadTime = 2;
Seed.shots = 3;
Seed.displaySprite = "SeedSpitIcon.PNG";
AC = new Fighter();
AC.plant = true;
AC.name = "Armor Chomper";
AC.health = 225;
AC.powerLevel = 9001;
AC.coords = [2,2];
AC.attacks.push(Goop,Chomp,Seed); /*Add special swallow attack*/
AC.aliveSprite = "ArmorChomperRight.PNG";
//zombie attacks
Bite = new AttackType();
Bite.name = "Bite";
Bite.damage = 25;
Bite.range = 1;
AnkBite = new AttackType();
AnkBite.name = "Ankle Bite";
AnkBite.damage = 20;
AnkBite.range = 1;
Rock = new AttackType();
Rock.name = "Rock";
Rock.damage = 10;
Rock.range = 3;
Rock.accuracy = 75;
Rock.reloadTime = 1;
Snowball = new AttackType();
Snowball.name = "Snowball";
Snowball.damage = 20;
Snowball.range = 4;
Snowball.stunChance = 33;
Snowball.accuracy = 90;
Gun = new AttackType();
Gun.name = "Bullet Fire";
Gun.damage = 25;
Gun.range = 5;
Gun.shots = 2;
Gun.accuracy = 60;
Gun.reloadTime = 1;
Fists = new AttackType();
Fists.name = "Fist Fight";
Fists.damage = 30;
Fists.range = 1;
IceDagger = new AttackType();
IceDagger.name = "Ice Dagger";
IceDagger.damage = 40;
IceDagger.range = 1;
IceDagger.reloadTime = 1;
PoleSmash = new AttackType();
PoleSmash.name = "Pole Smash";
PoleSmash.damage = 75;
PoleSmash.range = 2;
PoleSmash.reloadTime = 3;
ImpThrow = new AttackType();
ImpThrow.name = "Exploding Imp Toss";
ImpThrow.damage = 30;
ImpThrow.range = 6;
ImpThrow.reloadTime = 2;
ImpThrow.accuracy = 70;
//zombies
Browncoat = new Fighter();
Browncoat.name = "Browncoat Zombie";
Browncoat.health = 50;
Browncoat.powerLevel = 1;
Browncoat.coords = [7,2];
Browncoat.height = "25%";
Browncoat.attacks.push(Bite, Rock);
Browncoat.aliveSprite = "RegZomb.PNG";
Conehead = new Fighter();
Conehead.name = "Conehead Zombie";
Conehead.health = 125;
Conehead.height = "30%";
Conehead.powerLevel = 2;
Conehead.attacks.push(Bite, clone(Rock));
Conehead.aliveSprite = "Conehead.PNG";
Buckethead = new Fighter();
Buckethead.name = "Buckethead Zombie";
Buckethead.health = 175;
Buckethead.height = "28%";
Buckethead.powerLevel = 3;
Buckethead.attacks.push(Bite, clone(Rock));
Buckethead.aliveSprite = "Buckethead.PNG";
Yeti = new Fighter();
Yeti.name = "Yeti Zombie";
Yeti.health = 150;
Yeti.height = "32%";
Yeti.powerLevel = 5;
Yeti.attacks.push(IceDagger,Snowball);
Yeti.aliveSprite = "YetiZombie.PNG";
GunZomb = new Fighter();
GunZomb.name = "Gangsta Zombie";
GunZomb.health = 100;
GunZomb.height = "28%";
GunZomb.powerLevel = 4;
GunZomb.wb = 1.3;
GunZomb.attacks.push(Fists,Gun);
GunZomb.aliveSprite = "GunZombie.PNG";
Imp = new Fighter();
Imp.name = "Imp";
Imp.health = 25;
Imp.powerLevel = 0.5;
Imp.movement = 2;
Imp.height = "15%";
Imp.attacks.push(AnkBite)
Imp.aliveSprite = "Imp.PNG";
Gargantuar = new Fighter();
Gargantuar.name = "Gargantuar";
Gargantuar.health = 350;
Gargantuar.powerLevel = 10;
Gargantuar.height = "40%";
Gargantuar.wb = 1.6;
Gargantuar.attacks.push(PoleSmash,ImpThrow)
Gargantuar.aliveSprite = "Gargantuar.PNG";
fighterArray.push(AC, Browncoat)
griditemarray = [];
phygriditems = [];
ZombieArray = [];
ZombieArray.push(Browncoat)
gridx = 9
gridy = 5
gridsize = 1.45
currentx = 0
currenty = 0
prevzposes = [];
difficultylevel = 1;
turntime = 1500;
var wc = document.getElementById("EverythingFitter");
var acs = document.getElementById("ArmorChomper");
var zhealtharray = [];
var zhealthbararray = [];
fighterPhysArray = [acs];
CanZAbility = [];
for (z in ZombieArray) {
    prevzposes.push(ZombieArray[z].coords)
    CanZAbility.push(true);
    var zombi = document.createElement("img");
    zombi.className = "Fighter";
    zombi.style.height = ZombieArray[z].height;
    zombi.src = ZombieArray[z].aliveSprite;
    wc.appendChild(zombi);
    fighterPhysArray.push(zombi);
    var zhealth = document.createElement("p")
    var zhealthbar = document.createElement("img")
    zhealthbar.src = "HeartIcon.PNG";
    zhealthbar.style.position = "absolute";
    zhealthbar.style.width = "4%";
    zhealthbar.style.zIndex = 9001;
    wc.appendChild(zhealthbar);
    zhealth.style.position = "absolute";
    zhealth.style.fontFamily =  'Marker Felt';
    zhealth.style.fontSize = "1.7vw";
    zhealth.style.zIndex = 9002;
    wc.appendChild(zhealth)
    zhealtharray.push(zhealth);
    zhealthbararray.push(zhealthbar);
}
IsPlayerTurn = true;
CanMove = true;
CanAbility = [true, true];
StopTurn = false;
directionright = true;
prevppos = AC.coords.slice(0);
currentProjectile = "";
consolemessages = [];
function updategrid() {
    for (is in phygriditems) {
        phygriditems[is].remove();
    }
    phygriditems = [];
    griditemarray = [];
    currentx = 0
    currenty = 0
    for (i = 0; i < gridx*gridy; i++) {
        currentx += 1;
        ItemSprite = document.createElement("img");
        newgi = new griditem();
        newgi.codx = currentx;
        newgi.cody = currenty;
        newgi.sprite = "BlankTile.PNG"
        griditemarray.push(newgi);
        ItemSprite.src = "BlankTile.PNG";
        wc.appendChild(ItemSprite);
        ItemSprite.className = "gridTile";
        ItemSprite.onclick = tryToMove;
        ItemSprite.style.height = (8*gridsize).toString()+"%";
        ItemSprite.style.top = (gridsize*(12+(currenty)*8)).toString()+"%";
        ItemSprite.style.left = (window.innerWidth*((gridsize*currentx)+gridy/(gridsize*2)-currenty*gridsize*0.7)*(1/18)).toString()+"px"
        for (f in fighterArray) {
            fighter = fighterArray[f];
            if (currentx === fighter.coords[0] && currenty === fighter.coords[1] && fighter.plant) {
                newgi.sprite = "GreenTile.PNG"
                newgi.character = fighter;
                fighterPhysArray[f].style.top = (parseInt(ItemSprite.style.top)-0.088*fighterPhysArray[f].height).toString()+"%";
                fighterPhysArray[f].style.left = (parseInt(ItemSprite.style.left)+0.4*fighterPhysArray[f].width).toString()+"px";
                ItemSprite.src = "GreenTile.PNG";
            }
            if (currentx === fighter.coords[0] && currenty === fighter.coords[1] && !(fighter.plant)) {
                newgi.sprite = "PurpleTile.PNG"
                newgi.character = fighter;
                fighterPhysArray[f].style.top = (((30-parseInt(fighter.height))/10)+parseInt(ItemSprite.style.top)-0.088*fighterPhysArray[f].height).toString()+"%";
                //fighterPhysArray[f].style.top = ((fighterPhysArray[f].getBoundingClientRect().top/36.396)*(((30-parseInt(fighter.height))/10)+parseInt(ItemSprite.style.top)-0.088*fighterPhysArray[f].height)).toString()+"px";
                fighterPhysArray[f].style.left = ((3*(30-(fighter.wb*parseInt(fighter.height))))+parseInt(ItemSprite.style.left)).toString()+"px";//+0.1*fighter.wb*fighterPhysArray[f].width).toString()+"px";
                zhealtharray[f-1].style.top = parseInt(ItemSprite.style.top).toString()+"%";
                zhealtharray[f-1].style.left = (parseInt(ItemSprite.style.left)+0.4*fighterPhysArray[f].width).toString()+"px";
                zhealtharray[f-1].innerHTML = fighter.health;
                zhealthbararray[f-1].style.top = parseInt(ItemSprite.style.top).toString()+"%";
                zhealthbararray[f-1].style.left = (parseInt(ItemSprite.style.left)+0.3*fighterPhysArray[f].width).toString()+"px";
                ItemSprite.src = "PurpleTile.PNG";
            }
        }
        phygriditems.push(ItemSprite);
        if (currentx%gridx == 0) {
            currenty += 1;
            currentx = 0;
        }
    }
}
function CheckIfCollision(p,zombi) {
    for (z in ZombieArray) {
        if ((ZombieArray[z].coords[0] == AC.coords[0]) && (ZombieArray[z].coords[1] == AC.coords[1])) {
            if (p == "plant") {
                CreateConsoleText("You cannot move on top of a zombie.")
                CanMove = true;
                AC.coords = prevppos.slice(0);
                updategrid();
            }
            else {
                ZombieArray[z].coords = prevzposes[z].slice(0);
                updategrid();
                return true;
            }
        }
        if (p == "Zombie") {
            for (zom in ZombieArray) {
                if (zom == z) {
                    continue;
                }
                if (ZombieArray[z].coords[0] == ZombieArray[zom].coords[0] && ZombieArray[z].coords[1] == ZombieArray[zom].coords[1]) {
                    zombi.coords = prevzposes[ZombieArray.indexOf(zombi)].slice(0);
                    updategrid();
                    return true;
                }
            }
        }
    }
    return false;
}
wc.style.width = window.innerWidth.toString()+"px";
wc.style.height = (window.innerWidth/(1440/732)).toString()+"px";
var turnbutton = document.getElementById("EndTurn");
var turncounter = document.getElementById("TurnCounter");
var abilitybuttons = document.getElementById("AbilityButtons");
var chomperhealth = document.getElementById("HealthAmount");
for (a in AC.attacks) {
    atak = AC.attacks[a];
    attackbutton = document.createElement("button");
    attackbutton.className = "AbilityButton";
    attackbutton.innerHTML = atak.name;
    attackbutton.id = atak.name;
    abilitybuttons.appendChild(attackbutton);
    attackbutton.onclick = function(event) {
        for (a in AC.attacks) {
            if (event.target.id == AC.attacks[a].name) {
                attack = AC.attacks[a];
            }
        }
        currentProjectile = attack;
        CreateModal((attack.name+"Info"),attack.name,attack.desc,attack.displaySprite,[["Use",FireProjectile]]);//,["Switch Directions",SwitchAD]]);
        for (is in phygriditems) {
            phygriditems[is].remove();
        }
        phygriditems = [];
        griditemarray = [];
        currentx = 0
        currenty = 0
        for (i = 0; i < gridx*gridy; i++) {
            currentx += 1;
            ItemSprite = document.createElement("img");
            newgi = new griditem();
            newgi.codx = currentx;
            newgi.cody = currenty;
            newgi.sprite = "BlankTile.PNG"
            griditemarray.push(newgi);
            ItemSprite.src = "BlankTile.PNG";
            wc.appendChild(ItemSprite);
            ItemSprite.style.position = "absolute";
            ItemSprite.className = "gridTile";
            ItemSprite.onclick = tryToMove;
            ItemSprite.style.height = (8*gridsize).toString()+"%";
            ItemSprite.style.top = (gridsize*(12+(currenty)*8)).toString()+"%";
            ItemSprite.style.left = (window.innerWidth*((gridsize*currentx)+gridy/(gridsize*2)-currenty*gridsize*0.7)*(1/18)).toString()+"px"
            for (f in fighterArray) {
                fighter = fighterArray[f];
                if (currentx === fighter.coords[0] && currenty === fighter.coords[1] && fighter.plant) {
                    newgi.sprite = "GreenTile.PNG"
                    newgi.character = fighter;
                    ItemSprite.src = "GreenTile.PNG";
                }
                if (currentx === fighter.coords[0] && currenty === fighter.coords[1] && !(fighter.plant)) {
                    newgi.sprite = "PurpleTile.PNG"
                    newgi.character = fighter;
                    ItemSprite.src = "PurpleTile.PNG";
                }
            }
            if((AC.coords[0]+1 <= currentx && currentx <= AC.coords[0]+attack.range) && currenty === AC.coords[1]) {
                if (newgi.sprite == "PurpleTile.PNG") {
                    newgi.sprite = "RedTile.PNG";
                    ItemSprite.src = "RedTile.PNG";
                }
                else {
                    newgi.sprite = "BlueTile.PNG";
                    ItemSprite.src = "BlueTile.PNG";
                }
            }
            phygriditems.push(ItemSprite);
            if (currentx%gridx == 0) {
                currenty += 1;
                currentx = 0;
            }
        }
    }
}
function TestAttack(zombie, attack) { /*add down and up attacking*/
    willhit = false;
    currenty = 0;
    currentx = 0;
    missedshots = 0;
    for (i = 0; i < gridx*gridy; i++) {
        currentx += 1;
        if ((zombie.coords[0]-1 >= currentx && currentx >= zombie.coords[0]-attack.range) && currenty === zombie.coords[1]) {
            if (griditemarray[i].sprite == "GreenTile.PNG" && attack.TimeUntilReady == 0) {
                willhit = true;
                griditemarray[i].sprite = "RedTile.PNG";
                phygriditems[i].src = "RedTile.PNG";
                CreateConsoleText(zombie.name+" has used "+attack.name+".")
                for (shot = 0; shot < attack.shots; shot++) {
                    if (randomint(0, 100) > attack.accuracy) {
                        missedshots += 1;
                        if (attack.shots == 1) {
                            CreateConsoleText(zombie.name+" has missed.");
                        }
                    }
                }
                if (attack.shots > 1) {
                    CreateConsoleText(zombie.name+" has missed "+missedshots+" out of his "+attack.shots+" shots.");
                }
                if (missedshots != attack.shots) {
                    griditemarray[i].character.health -= attack.damage;
                    chomperhealth.innerHTML = (parseInt(chomperhealth.innerHTML) - attack.damage).toString();
                    CreateConsoleText(zombie.name+" has hit Armor Chomper for "+attack.damage.toString()+" damage.",true);
                    if (!(CheckForLoss())) {
                        if (randomint(0, 100) < attack.stunChance) {
                            CreateConsoleText(zombie.name+" has stunned Armor Chomper for one turn.") 
                            AC.aliveSprite = "FrozenChomperRight.PNG";
                            fighterPhysArray[fighterArray.indexOf(AC)].src = "FrozenChomperRight.PNG";
                            AC.stunned = true;
                        }
                    }
                    else {
                        StopTurn = true;
                    }
                }
                attack.TimeUntilReady = attack.reloadTime+1;
                CanZAbility[ZombieArray.indexOf(zombie)] = false;

            }
            else {
                griditemarray[i].sprite = "BlueTile.PNG";
                phygriditems[i].src = "BlueTile.PNG";
            }
        }
        if (currentx%gridx == 0) {
            currenty += 1;
            currentx = 0;
        }
    }
    if (!(willhit)) {
        for (i = 0; i < gridx*gridy; i++) {
            currentx += 1;
            if ((zombie.coords[0]-1 >= currentx && currentx >= zombie.coords[0]-attack.range) && currenty === zombie.coords[1]) {
                griditemarray[i].sprite = "BlankTile.PNG";
                phygriditems[i].src = "BlankTile.PNG";
            }
            if (currentx%gridx == 0) {
                currenty += 1;
                currentx = 0;
            }
        }
        updategrid();
    }
}
function CheckZindexes() {
    fc = [];
    zindex = 666;
    tempvar = 0;
    issorted = false;
    for (f in fighterArray) {
        fighter = fighterArray[f];
        fc.push(fighter);
    }
    while (issorted == false) {
        issorted = true;
        for (c in fc) {
            if (!(c >= fc.length-1)) {
                if (fc[c].coords[1] > fc[(parseInt(c)+1)].coords[1]) {
                    tempvar = fc[c];
                    fc[c] = fc[(parseInt(c)+1)];
                    fc[(parseInt(c)+1)] = tempvar;
                    issorted = false;
                }
            }
        }
    }
    for (yc in fc) { 
      fyc = fc[yc];
      fighterPhysArray[fighterArray.indexOf(fyc)].style.zIndex = (parseInt(zindex) + parseInt(yc));
    }
}
function CalculateMoves(zombie) {
    if (zombie.coords[0] <= AC.coords[0]) {
        MoveZombie(zombie, [1,0])
        return;
    }
    if (zombie.coords[1] != AC.coords[1]) {
        if (Math.random() > ((zombie.coords[0]-AC.coords[0])/10)/(AC.coords[1]-zombie.coords[1])) {
            if (!(MoveZombie(zombie,[0, RoundToOne(AC.coords[1]-zombie.coords[1])]))) {
                if (zombie.coords[0] > AC.coords[0]) {
                    MoveZombie(zombie, [-1,0])
                }
                else {
                    MoveZombie(zombie, [1,0]) 
                }
            } 
        }
        else {
            if (zombie.coords[0] > AC.coords[0]) {
                if (!(MoveZombie(zombie, [-1,0]))) {
                    MoveZombie(zombie,[0, RoundToOne(AC.coords[1]-zombie.coords[1])])
                }
            }
            else {
                if (!(MoveZombie(zombie, [1,0]))) {
                    MoveZombie(zombie,[0, RoundToOne(AC.coords[1]-zombie.coords[1])])
                }
            }
        }
    }
    else {
        if (zombie.coords[0] > AC.coords[0]) {
            MoveZombie(zombie, [-1,0])
        }
        else {
            MoveZombie(zombie, [1,0])
        }
    }
    CheckZindexes();
}
function MoveZombie(zombie, direction) { /*fix bug where zombie not moving keeps movement*/
    if (zombie.movesLeft >= 1) {
        zombie.movesLeft -= 1;
        createtext = true;
        prevzposes[ZombieArray.indexOf(zombie)] = zombie.coords.slice(0);
        zombie.coords[0] += direction[0];
        zombie.coords[1] += direction[1];
        if (CheckIfCollision("Zombie",zombie)) {
            zombie.movesLeft += 1;
            updategrid();
            return false;
        }
        if (createtext) {
            if (direction[1] > 0) {
                CreateConsoleText(zombie.name+" has moved 1 unit down.",true)
            }
            else if (direction[1] < 0) {
                CreateConsoleText(zombie.name+" has moved 1 unit up.",true)
            }
            if (direction[0] > 0) {
                CreateConsoleText(zombie.name+" has moved 1 unit right.",true)
            }
            else if (direction[0] < 0) {
                CreateConsoleText(zombie.name+" has moved 1 unit left.",true)
            }
        }
        if (zombie.movesLeft >= 1) {
            CalculateMoves(zombie);
            createtext = false;
        }
        updategrid();
        return true;
    }
}
function RoundToOne(num) {
    if (num > 0) {
        return 1;
    }
    else {
        return -1;
    }
}
function ZombieTurn(z) {
    zombie = ZombieArray[z];
    CanZAbility[z] = true;
    if (zombie.stunned) {
        setTimeout(function() {
            CreateConsoleText(zombie.name+" did not do anything as they are stunned.")
            zombie.stunned = false;
            for (a in zombie.attacks) {
                if (zombie.attacks[a].TimeUntilReady > 0) {
                    zombie.attacks[a].TimeUntilReady -= 1;
                }
            }
            fighterPhysArray[fighterArray.indexOf(zombie)].src = (fighterPhysArray[fighterArray.indexOf(zombie)].src).split("/")[(fighterPhysArray[fighterArray.indexOf(zombie)].src).split("/").length-1].substring(4);

            setTimeout(function() {
                CreateConsoleText(zombie.name+" has ended their turn.")
                if (z == ZombieArray.length-1) {
                    if (AC.stunned == true) {
                        setTimeout(function() {
                            CreateConsoleText("Armor Chomper did not do anything as they are stunned.")
                            for (attack in AC.attacks) {
                                attack = AC.attacks[attack];
                                if (attack.TimeUntilReady > 0) {
                                    attack.TimeUntilReady -= 1;
                                }
                            }
                            AC.stunned = false;
                            ZombieTurn(0);
                            AC.aliveSprite = "ArmorChomperRight.PNG";
                            fighterPhysArray[fighterArray.indexOf(AC)].src = "ArmorChomperRight.PNG";
                        }, turntime);
                    }
                    else {
                        IsPlayerTurn = true;
                        CanMove = true;
                        CanAbility = [true, true];
                        abilitybuttons.style.display = "block";
                        UpdateTurnCount();
                    }
                    updategrid();
                }
                else {
                    ZombieTurn(z+1);
                }
            }, turntime);
        }, turntime);
    }
    else {
        if (zombie.movesLeft < 1) {
            zombie.movesLeft += zombie.movement;
        }
        setTimeout(function() {
            for (a in zombie.attacks) {
                if (zombie.attacks[a].TimeUntilReady > 0) {
                    zombie.attacks[a].TimeUntilReady -= 1;
                }
                if (CanZAbility[z]) {
                    TestAttack(zombie,zombie.attacks[a]);
                    if (StopTurn) {
                        break;
                    }
                }
            }
            if (!(StopTurn)) {
                setTimeout(function() {
                    CalculateMoves(zombie)
                    setTimeout(function() {
                        if (CanZAbility[z]) {
                            for (a in zombie.attacks) {
                                TestAttack(zombie,zombie.attacks[a]);
                                if (StopTurn) {
                                    break;
                                }
                            }
                        }
                        if (!(StopTurn)) {
                            setTimeout(function() {
                                CreateConsoleText(zombie.name+" has ended their turn.")
                                if (z == ZombieArray.length-1) {
                                    if (AC.stunned == true) {
                                        setTimeout(function() {
                                            CreateConsoleText("Armor Chomper did not do anything as they are stunned.")
                                            for (attack in AC.attacks) {
                                                attack = AC.attacks[attack];
                                                if (attack.TimeUntilReady > 0) {
                                                    attack.TimeUntilReady -= 1;
                                                }
                                            }
                                            AC.stunned = false;
                                            ZombieTurn(0);
                                            AC.aliveSprite = "ArmorChomperRight.PNG";
                                            fighterPhysArray[fighterArray.indexOf(AC)].src = "ArmorChomperRight.PNG";
                                        }, turntime);
                                    }
                                    else {
                                        IsPlayerTurn = true;
                                        CanMove = true;
                                        CanAbility = [true,true];
                                        abilitybuttons.style.display = "block";
                                        UpdateTurnCount();
                                    }
                                    updategrid();
                                }
                                else {
                                    ZombieTurn(z+1);
                                }
                            }, turntime);
                        }
                    }, turntime);
                }, turntime);
            } 
        }, turntime);
    }
}
function SortZArray() {
    sa = [];
    tempvar = 0;
    issorted = false;
    for (z in ZombieArray) {
        zombie = ZombieArray[z];
        sa.push(zombie);
    }
    while (issorted == false) {
        issorted = true;
        for (z in sa) {
            if (!(z >= sa.length-1)) {
                if (sa[z].coords[0] > sa[(parseInt(z)+1)].coords[0]) {
                    tempvar = sa[z];
                    sa[z] = sa[(parseInt(z)+1)];
                    sa[(parseInt(z)+1)] = tempvar;
                    issorted = false;
                }
            }
        }
    }
    return sa;
}
turnbutton.onclick = function() {
    turncounter.innerHTML = "Zombie's Turn";
    abilitybuttons.style.display = "none";
    IsPlayerTurn = false;
    CanMove = false;
    CreateConsoleText("Armor Chomper has ended their turn.")
    for (attack in AC.attacks) {
        attack = AC.attacks[attack];
        if (attack.TimeUntilReady > 0) {
            attack.TimeUntilReady -= 1;
        }
    }
    ZombieArray = SortZArray();
    ZombieTurn(0);
}

function tryToMove() {
    if (CanMove) {
        prevppos = AC.coords.slice(0);
        newspot = [griditemarray[phygriditems.indexOf(event.target)].codx,griditemarray[phygriditems.indexOf(event.target)].cody];
        gs = false;
        if (newspot[0] == AC.coords[0]) {
            if (newspot[1]-1 == AC.coords[1]) {
                CreateConsoleText("Armor Chomper has moved 1 unit down.");
                gs = true;
            }
            if (newspot[1]+1 == AC.coords[1]) {
                CreateConsoleText("Armor Chomper has moved 1 unit up.");
                gs = true;
            }
        }
        else if (newspot[1] == AC.coords[1]) {
            if (newspot[0]-1 == AC.coords[0]) {
                CreateConsoleText("Armor Chomper has moved 1 unit to the right.");
                gs = true;
            }
            if (newspot[0]+1 == AC.coords[0]) {
                CreateConsoleText("Armor Chomper has moved 1 unit to the left.");
                gs = true;
            }
        }
        if (!(gs)) {
            CreateConsoleText("You cannot move there.");
        }
        else {
            AC.coords[0] = newspot[0];
            AC.coords[1] = newspot[1];
            CanMove = false;
            CheckIfCollision("plant","");
            updategrid();
            UpdateTurnCount();
            CheckZindexes();
        }
    }
}

document.addEventListener('keydown', function(event) {
    if (CanMove) {
        prevppos = AC.coords.slice(0);
        if(event.keyCode == 37) {
            if (AC.coords[0] > 1) {
                AC.coords[0] = AC.coords[0]-1;
            }        
            CreateConsoleText("Armor Chomper has moved 1 unit to the left.");
        }
        else if(event.keyCode == 38) {
            if (AC.coords[1] > 0) {
                AC.coords[1] = AC.coords[1]-1;
            }
            CreateConsoleText("Armor Chomper has moved 1 unit up.");
        }
        else if(event.keyCode == 39) {
            if (AC.coords[0] < gridx) {
                AC.coords[0] = AC.coords[0]+1;
            }
            CreateConsoleText("Armor Chomper has moved 1 unit to the right.");
        }
        else if(event.keyCode == 40) {
            if (AC.coords[1] < gridy-1) {
                AC.coords[1] = AC.coords[1]+1;
            }
            CreateConsoleText("Armor Chomper has moved 1 unit down.");
        }
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
            CanMove = false;
            CheckIfCollision("plant","");
            updategrid();
            UpdateTurnCount();
            CheckZindexes();
        }
    }
});
UpdateTurnCount();
updategrid();
document.getElementById("Goop").click();
setTimeout(function() {
    CloseButton.onclick();
}, 1)
}

