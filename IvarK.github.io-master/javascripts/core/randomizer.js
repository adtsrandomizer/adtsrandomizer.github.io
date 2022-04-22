//i am warning you. DO NOT try to read this code if you do not want to be left with no brain cells
//seriously

const TIME_STUDY_DESCRIPTIONS = [ null,
'Tickspeed affects 1st Time Dimension with reduced effect<span id="11desc">Currently: 1x</span>Cost: <span id="ts1cost">B Time Theorem</span>',
'Replicanti multiplier formula is better (log2(x)^2 -> x^0.032)<span>Cost: <span id="ts2cost">3 Time Theorems</span>',
'Replicanti interval limit 50ms -> 1ms<span>Cost: <span id="ts3cost">2 Time Theorems</span>',
'You keep half of your replicanti galaxies on infinity<span>Cost: <span id="ts4cost">2 Time Theorems</span>',
'Powers up bonuses that are based on your infinitied stat (to the power of 4)<span>Cost: <span id="ts5cost">3 Time Theorems</span>',
'<span id="32desc">You gain x1 more infinitied stat (based on dimension boosts)</span>Cost: <span id="ts6cost">2 Time Theorems</span>',
'Each galaxy gives a 1.2x multiplier on IP gained. <span>Cost: <span id="ts7cost">4 Time Theorems</span>',
'Galaxy requirement goes up 52 8ths instead of 60.<span>Cost: <span id="ts8cost">6 Time Theorems</span>',
'<span id=51desc>You gain 1e15 times more IP</span>Cost: <span id="ts9cost">3 Time Theorems</span>',
// "Eternity Challenge 5<span>Requirement: 200 galaxies<span>Cost: 100 Time Theorems",
'You gain 10x more EP<span>Cost: <span id="ts10cost">3 Time Theorems</span>',
'You gain replicanti 3 times faster<span>Cost: <span id="ts11cost">3 Time Theorems</span>',
'Sacrifice affects all other normal dimensions with reduced effect<span id="71desc">Currently: 1x</span>Cost:<span id="ts12cost"> 4 Time Theorems</span>',
'Sacrifice affects 4th Infinity Dimension with greatly reduced effect<span id="72desc">Currently: 1x</span>Cost: <span id="ts13cost">6 Time Theorems</span>',
'Sacrifice affects 3rd Time Dimension with greatly reduced effect<span id="73desc">Currently: 1x</span>Cost: <span id="ts14cost">5 Time Theorems</span>',
'Dimensional boost power becomes 10x<span>Cost: <span id="ts15cost">4 Time Theorems</span>',
'Dimensional boosts affect Infinity Dimensions<span id="82desc">Currently: 1x</span>Cost: <span id="ts16cost">6 Time Theorems</span>',
'Dimensional boosts are 0.04% more effective for each tick upgrade gained from Time Dimensions<span>Cost: <span id="ts17cost">5 Time Theorems</span>',
'Normal dimensions gain a multiplier based on time spent this eternity<span id="91desc">Currently: 1x</span>Cost: <span id="ts18cost">4 Time Theorems</span>',
'Infinity dimensions gain a multiplier based on fastest eternity time<span id="92desc">Currently: 1x</span>Cost: <span id="ts19cost">5 Time Theorems</span>',
'Time dimensions gain a multiplier based on tick upgrades gained<span id="93desc">Currently: 1x</span>Cost: <span id="ts20cost">7 Time Theorems</span>',
'Replicantis give multiplier to normal dims equal to their amount.<span>Cost: <span id="ts21cost">4 Time Theorems</span>',
'Replicanti galaxies power replicanti multiplier<span>Cost: <span id="ts22cost">6 Time Theorems</span>',
'Time dimensions gain a multiplier equal to replicanti galaxy amount<span>Cost: <span id="ts23cost">6 Time Theorems</p></span>',
// "Eternity Challenge 7<span>Requirement: 1e550,000 antimatter<span>Cost: 115 Time Theorems",
'Make the IP formula better<span>Cost: <span id="ts24cost">12 Time Theorems</span>',
'The worse your average EP/min is, the more EP you get<span id="121desc">Currently: 1x</span>Cost: <span id="ts25cost">9 Time Theorems</span>',
'You gain 35x more EP<span>Cost: <span id="ts26cost">9 Time Theorems</span>',
'You gain more EP based on time spent this eternity<span id="123desc">Currently: 1x</span>Cost: <span id="ts27cost">9 Time Theorems</span>',
// "Eternity Challenge 6<span>Requirement: 40 replicanti galaxies<span>Cost: 100 Time Theorems",
'Automatic replicanti galaxies are disabled, but you can get 50% more<span>Cost: <span id="ts28cost">5 Time Theorems</span>',
'Replicanti galaxies are 40% more effective<span>Cost: <span id="ts29cost">5 Time Theorems</span>',
'Replicanti are 10x slower until infinity, but their galaxies are 50% stronger<span>Cost: <span id="ts30cost">5 Time Theorems</span>',
// "Eternity Challenge 8<span>Cost: 100 Time Theorems",
'Multiplier to IP, decaying over this infinity<span id="141desc">Currently 1x</span>Cost: <span id="ts31cost">4 Time Theorems</span>',
'<span id="142desc">You gain 1e25x more IP</span>Cost: <span id="ts32cost">4 Time Theorems</span>',
'Multiplier to IP, increasing over this infinity<span id="143desc">Currently 1x</span>Cost: <span id="ts33cost">4 Time Theorems</span>',
// "Eternity Challenge 9<span>Requirement: 1e6000 infinity power<span>Cost: 100 Time Theorems",
'<span id="151desc">1e4x multiplier on all Time Dimensions</span>Cost: <span id="ts34cost">8 Time Theorems</span>',
// "Eternity Challenge 4<span>Requirement: 100,000,000 infinities<span>Cost: 85 Time Theorems",
'<span id="161desc">1e616x multiplier on all normal dimensions</span>Cost: <span id="ts35cost">7 Time Theorems</span>',
'<span id="162desc">1e11x multiplier on all Infinity Dimensions</span>Cost: <span id="ts36cost">7 Time Theorems</span>',
'Time shard requirement for the next tickspeed upgrade goes up slower<span>Cost: <span id="ts37cost">15 Time Theorems</span>',
// "Eternity Challenge 1<span>Requirement: 25,000 Eternities<span>Cost: 20 Time Theorems",
// "Eternity Challenge 2<span>Requirement: 1,300 Time upgrades gained from time dimensions<span>Cost: 25 Time Theorems",
// "Eternity Challenge 3<span>Requirement: 30 dicks in your ass<span>Cost: 30 Time Theorems",
'You gain 1% of your IP gained on crunch each second.<span>Cost: <span id="ts38cost">Time Theorems</span>',
// "Eternity Challenge 10<span>Requirement: 1e100 EP<span>Cost: 200 Time Theorems",
'After eternity you permanently keep 5% of your infinities<span>Cost: <span id="ts39cost">400 Time Theorems</span>',
'<span id="192desc">You can get beyond 1.8e308 replicantis, but the interval is increased the more you have</span>Cost: <span id="ts40cost">730 Time Theorems</span>',
'Normal dimension boost based on eternities<span id="193desc">Currently: 1x</span>Cost: <span id="ts41cost">300 Time Theorems</span>',
'Pick another path from the first split.<span id="201desc"></span>Cost: <span id="ts42cost">900 Time Theorems</span>',
'Dimensional boost requirement scaling is reduced by 5<span>Cost: <span id="ts43cost">120 Time Theorems</span>',
'Galaxies are more effective based on your timeshards<span id="212desc">Currently: 1x</span>Cost: <span id="ts44cost">150 Time Theorems</span>',
'You gain replicanti 20 times faster<span>Cost: <span id="ts45cost">200 Time Theorems</span>',
'Sacrifice boosts the 8th dimension even more<span id="214desc">Currently: 1x</span>Cost: <span id="ts46cost">120 Time Theorems</span>',
'Dimensional boosts affect time dimensions with reduced power.<span>Cost: <span id="ts47cost">900 Time Theorems</span>',
'Dimensional boost costs scale by another 2 less.<span>Cost: <span id="ts48cost">900 Time Theorems</span>',
'Galaxy cost scaling starts 7 galaxies later.<span>Cost: <span id="ts49cost">900 Time Theorems</span>',
'Galaxy cost scaling starts 1 galaxy later for every 2000 dimensional boosts.<span>Cost: <span id="ts50cost">900 Time Theorems</span>',
'You gain extra RGs based on how high above infinity your replicanti are.<span>Cost: <span id="ts51cost">900 Time Theorems</span>',
'You gain extra RGs based on your max RGs.<span>Cost: <span id="ts52cost">900 Time Theorems</span>',
'Sacrifice affects the 4th Time Dimension with reduced effect.<span>Cost: <span id="ts53cost">900 Time Theorems</span>',
'Sacrifice scales better.<span>Cost: <span id="ts54cost">900 Time Theorems</span>',
'Dimensional boosts are more effective based on their amount.<span>Cost: <span id="ts55cost">500 Time Theorems</span>',
'Galaxies are more effective based on non-replicated galaxies.<span>Cost: <span id="ts56cost">500 Time Theorems</span>',
'Max replicanti galaxy upgrade cost is reduced based on replicanti amount.<span>Cost: <span id="ts57cost">500 Time Theorems</span>',
'Sacrifice boosts First Dimension.<span>Cost: <span id="ts58cost">500 Time Theorems</span>',
// "Eternity Challenge 11<span>Requirement: Use only the Normal Dimension path<span>Cost: 1 Time Theorem",
// "Eternity Challenge 12<span>Requirement: Use only the Infinity Dimension path<span>Cost: 1 Time Theorem",
]

//This array contains numbers up to 58. It is shuffled on randomization, each TS being associated with one number here
time_study_desc_seeded = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58];

time_study_costs_vanilla = [1, 3, 2, 2, 3, 2, 4, 6, 3, 3, 3, 4, 6, 5, 4, 6, 5, 4, 5, 6, 4, 6, 6, 12, 9, 9, 9, 5, 5, 5, 4, 4, 4, 8, 7, 7,
15, 200, 400, 730, 300, 900, 120, 150, 200, 120, 900, 900, 900, 900, 900, 900, 900, 900, 500, 500, 500, 500]

time_study_numbers_vanilla = [11, 21, 22, 33, 31, 32, 41, 42, 51, 61, 62, 71, 72, 73, 81, 82, 83, 91, 92, 93, 101, 102, 103,
111, 121, 122, 123, 131, 132, 133, 141, 142, 143, 151, 161, 162, 171, 181, 191, 192, 193, 201, 211, 212, 213, 214,
221, 222, 223, 224, 225, 226, 227, 228, 231, 232, 233, 234]

//Column 1: vanilla TS numbers | Column 2: associated TS index | Column 3: price
seed = [ null,
11, null, 1,
21, null, 3,
22, null, 2,
33, null, 2,
31, null, 3,
32, null, 2,
41, null, 4,
42, null, 6,
51, null, 3,
61, null, 3,
62, null, 3,
71, null, 4,
72, null, 6,
73, null, 5,
81, null, 4,
82, null, 6,
83, null, 5,
91, null, 4,
92, null, 5,
93, null, 7,
101, null, 4,
102, null, 6,
103, null, 6,
111, null, 12,
121, null, 9,
122, null, 9,
123, null, 9,
131, null, 5,
132, null, 5,
133, null, 5,
141, null, 4,
142, null, 4,
143, null, 4,
151, null, 8,
161, null, 7,
162, null, 7,
171, null, 15,
181, null, 200,
191, null, 400,
192, null, 730,
193, null, 300,
201, null, 900,
211, null, 120,
212, null, 150,
213, null, 200,
214, null, 120,
221, null, 900,
222, null, 900,
223, null, 900,
224, null, 900,
225, null, 900,
226, null, 900,
227, null, 900,
228, null, 900,
231, null, 500,
232, null, 500,
233, null, 500,
234, null, 500
]

function getCostsArray() { //get an array of every price in the tree
    var costs = [];
    let index = 1;
    for(var i = 0; i < 58; i++) {
        costs.push(seed[index + 2]);
        index += 3;
    }
    return costs;
}

function randomizeArray(array) { //randomize order of elements in an array
  let index = array.length;
  while (index != 0) {
    let rand = Math.floor(Math.random()*index);
    index--;
    let temp = array[index];
    array[index] = array[rand];
    array[rand] = temp;
  }
  return array;
}

function buyRandomizedStudy(number) { //buy a study after it has been randomized
    index = 1;
    var effective = "Wait, what do you mean wrong game? This is the right game. Anyway we have 5 checks in this room, hope for Right Nail!"
    var cost = "Alright chat, no luck so far, but we have one more check, we only got lore in this room, please please be Right Nail---"
    for(var i = 0; i < 58; i++) {
        if(seed[index] == number) {
            effective = time_study_numbers_vanilla[seed[index + 1] - 1];
            cost = seed[index + 2];
        }
        index += 3;
    }
    buyTimeStudy(number, cost);
    player.effectiveStudies.push(effective);
    updateTimeStudyButtons()
}

//THE most horrible code you have seen yet
function populateTree(setting, seedg) {
    index = 1;
    var numbers_up_to_58 = [];
    if(!seedg) {
    for(var i = 1; i <= 58; i++) {
        numbers_up_to_58.push(i);
    } //FAQ || Q: Why not declare this as a constant? || A: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31...
    time_study_desc_seeded = randomizeArray(numbers_up_to_58);
    }
    var temp = "WHAT DO I NEED 1 FREAKING GEO FOR I HATE THIS RANDOMIZER AND THIS STUPID GAME GOD DANG IT!!!! Okay guys, we're going to EGuardian";
    var s = "This boss so easy with shade cloak chat. Easy peasy. HEY RIGHT NAIL FINALLY! P5 TIME!!! Wait I didn't do the flower quest? COME ON";
    for(var i = 0; i <= 57; i++) {
        if(!seedg) {
        seed[index + 1] = time_study_desc_seeded[i];
        }
            document.getElementById(seed[index]).innerHTML = TIME_STUDY_DESCRIPTIONS[time_study_desc_seeded[i]];
        if(!seedg) { switch(setting) {
            case 1: //vanilla-like position, anywhere between 7/8 cost and 9/8 cost of vanilla time study at position
                seed[index + 2] = Math.ceil(time_study_costs_vanilla[i] + (((Math.random()/4) - 0.125) * time_study_costs_vanilla[i]));
                break;
            case 2: //balanced position, anywhere between 3/4 and 5/4 the cost of vanilla time study at position
                seed[index + 2] = Math.ceil(time_study_costs_vanilla[i] + (((Math.random()/2) - 0.25) * time_study_costs_vanilla[i]));
                break;
            case 3: //risky position, anywhere between 1/2 and 3/2 the cost of vanilla time study at position
                seed[index + 2] = Math.ceil(time_study_costs_vanilla[i] + ((Math.random() - 0.5) * time_study_costs_vanilla[i]));
                break;
            case 4: //chaos position, anywhere between 1 and double the cost of vanilla time study at position
                seed[index + 2] = Math.ceil((Math.random() * 2 * time_study_costs_vanilla[i] + 0.001));
                break;
            case 5: //reduced, anywhere between 1 and normal cost of vanilla time study at position
                seed[index + 2] = Math.ceil((Math.random() * time_study_costs_vanilla[i] + 0.001));
                break;
            case 6: //stucko1000, vanilla time study NOT AT POSITION
                seed[index + 2] = time_study_costs_vanilla[i];
                break;
        } }
        index += 3;
    }
    for(var i = 1; i <= 58; i++) {
        temp = seed[i*3];
        if(setting != 6) {
            for(var j = 1; j <= 58; j++) {
                if(seed[j*3-1] == i) {
                    temp = seed[j*3];
                    break;
                }
            }
        }
        s = (temp > 1) ? "s" : ""; //add the plural if needed
        try {
        document.getElementById('ts'+i+'cost').innerHTML = temp + " Time Theorem" + s;
        } catch(ex) { }
    }
    if(!seedg) player.randomizerSeed = getSeed();
    save_game();
}

function randomizeStudies() {
    if(confirm("Randomizer will generate another Time Tree layout based on your configuration. This action will reset your Time Theorem costs to 1e20000/1e100/1, but also reset your Time Theorem number to 0. Confirm randomization?")) {
        var sed = prompt("Enter seed. Leave blank for no seed.");
        if(sed == null) return;
        respecTimeStudies();
        player.timestudy.theorem = 0;
        player.timestudy.amcost.e = 20000;
        player.timestudy.ipcost.e = 100;
        player.timestudy.epcost = new Decimal(1);
        if(sed == "") {
            populateTree(player.randomizerMode, false);
        } else {
            setSeed(sed);
            populateTree(player.randomizerMode, true);
        }
        updateTimeStudyButtons();
        save_game();
    }
}

function getSeed() {
    var sed = ""
    for(var i = 0; i < seed.length; i++) {
        sed = sed + seed[i] + "|";
    }
    sed = sed + "$";
    for(var i = 0; i < time_study_desc_seeded.length; i++) {
        sed = sed + time_study_desc_seeded[i] + "|";
    }
    return sed;
}

function copySeed() {
    var sed = getSeed();
    let output = document.getElementById('seedoutput');
    let parent = output.parentElement;
    parent.style.display = "";
    output.value = sed
    output.onblur = function() {
        parent.style.display = "none";
    }
    output.focus();
    output.select();
    try {
        if (document.execCommand('copy')) {
            $.notify("Exported to clipboard", "info");
            output.blur();
        }
    } catch(ex) {
        // bald
    }
}

//THE best variable names you have seen
function setSeed(ns) {
    var blb = ns.split("$")[0];
    var blbl = ns.split("$")[1];
    var blblb = blb.split("|");
    var blblbl = blbl.split("|");
    for(var i = 0; i < blblb.length; i++) {
        if(blblb[i] === "null") { seed[i] = null; } else {
        seed[i] = blblb[i]; }
    }
    for(var i = 0; i < blblbl.length; i++) {
        time_study_desc_seeded[i] = blblbl[i];
    }
}