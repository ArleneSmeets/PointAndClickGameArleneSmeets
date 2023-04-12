document.getElementById("mainTitle").innerText = "Point and click adventure";

const offsetCharacter = 16;

const sec = 1000;

const mainCharacter = document.getElementById("mainCharacter");
const gameWindow = document.getElementById("gameWindow");
const characterAudio = document.getElementById("characterAudio");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");

const counterSpeech = document.getElementById("counterSpeech");
const counterAudio = document.getElementById("counterAudio");
const counterCharacter = document.getElementById("counterCharacter");
let tilemapIMG = document.getElementById("tilemapIMG");


let inventory = [];
const inventoryList = document.getElementById("inventoryList");

gameWindow.onclick = function (e) {
    if (mainCharacterSpeech.style.opacity == 0 && counterSpeech.style.opacity == 0) {
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        mainCharacter.style.left = x - offsetCharacter + "px";
        mainCharacter.style.top = y - offsetCharacter + "px";

        switch (e.target.id) {
            case "door":
                //something insert here
                if (checkItem("house key")) {
                    showSpeech(mainCharacterSpeech, characterAudio, "OMG it fits.. This door now open.");
                    setTimeout(function () { tilemapIMG.src = "img/tilemap1.png" }, 1 * sec);
                    //window.location.href = "pages/insideHouse2.html";
                } else {
                    showSpeech(mainCharacterSpeech, characterAudio, "this should be my new house...<br> But the door is locked? maybe I need to look for");
                }
                break;
            case "boat":
                //something insert here
                showSpeech(mainCharacterSpeech, characterAudio, "A boat!<br> I would love to travel around the sea once.");
                break;

                case "floor":
                //something insert here
                showSpeech(mainCharacterSpeech, characterAudio, "omg <br> This house is so pretty!");
                break;

            case "iee":
                //something insert here
                showSpeech(mainCharacterSpeech, characterAudio, "This place is so pretty!!");
                break;

                case "iee2":
                //something insert here
                showSpeech(mainCharacterSpeech, characterAudio, "This place is so pretty!!");
                break;

            case "person":
                //something insert here
                showSpeech(mainCharacterSpeech, characterAudio, "Hello!");
                setTimeout(function () { counterCharacter.style.opacity = 1; }, 4 * sec);
                setTimeout(showSpeech, 4 * sec, counterSpeech, counterAudio, "Hey!");
                setTimeout(showSpeech, 8 * sec, mainCharacterSpeech, characterAudio, "I was wondering if you have a key for that house?");
                setTimeout(showSpeech, 12 * sec, counterSpeech, counterAudio, "you are the new owner right? here ya go!");
                getItem("house key", "houseKey");
                setTimeout(function () { counterCharacter.style.opacity = 0; }, 16 * sec);
                break;
            case "platform":
                document.getElementById("platform").style.opacity = 0.5;
                break;
            default:
                // do something when it doesn't have a case
                document.getElementById("platform").style.opacity = 1;
                hideSpeech();
                break;
        }
    }
}

function showSpeech(targetBubble, targetAudio, dialogue) {
    //trigger speech bubble and audio
    targetBubble.style.opacity = 1;
    targetBubble.innerHTML = dialogue;
    targetAudio.currentTime = 0;
    targetAudio.play();
    //stop after 4 seconds the dialogue bubble and audio
    setTimeout(hideSpeech, 4 * sec, targetBubble, targetAudio);
}

function hideSpeech(targetBubble, targetAudio) {
    targetBubble.style.opacity = 0;
    targetBubble.innerHTML = "...";
    targetAudio.pause();
}


function getItem(itemName, itemId) {
    if (!checkItem(itemName)) {
        inventory.push(itemName);
        showItem(itemName, itemId);
    }
}

function checkItem(item) {
    return inventory.includes(item);
}

function showItem(itemName, itemId) {
    let listItem = document.createElement("li");
    listItem.id = itemId;
    listItem.appendChild(document.createTextNode(itemName));
    inventoryList.appendChild(listItem);
}

function removeItem(itemName, itemId) {
    //remove item in Array
    inventory = inventory.filter(function (newInventory) {
        return newInventory !== itemName;
    });
    //removes list element in HTML
    document.getElementById(itemId).remove();
}

function inOrOut() {

}