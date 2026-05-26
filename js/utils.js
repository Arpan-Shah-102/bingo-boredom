function getBingoBoards() {
    return JSON.parse(localStorage.getItem('bingoBoards')) || {"numbers": {'name': "Numbers", "values": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]}};
}
function addBingoBoard(name, values) {
    const bingoBoards = getBingoBoards();
    bingoBoards[name] = { 'name': name, 'values': values };
    localStorage.setItem('bingoBoards', JSON.stringify(bingoBoards));
}
function removeBingoBoard(name) {
    const bingoBoards = getBingoBoards();
    delete bingoBoards[name];
    localStorage.setItem('bingoBoards', JSON.stringify(bingoBoards));
}
function getDefaultBoards() {
    return localStorage.getItem('defaultBoards') ? JSON.parse(localStorage.getItem('defaultBoards')) : {
        "numbers": {
            "name": "Numbers",
            "values": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
        },
        "finance": {
            "name": "Finance",
            "values": ["Asset", "Liability", "Equity", "Revenue", "Expense", "Profit", "Loss", "Budget", "Dividend", "Interest", "Principal", "Loan", "Mortgage", "Credit", "Debit", "Deposit", "Withdrawal", "Savings", "Investment", "Portfolio", "Stock", "Bond", "Share", "Market", "Capital", "Inflation", "Deflation", "Currency", "Exchange", "Risk", "Return", "Tax", "Cashflow", "Balance", "Audit", "Bankruptcy", "Forecast", "Brokerage", "Hedge", "Commission", "Insurance", "Pension", "Retirement", "Valuation", "Statement", "Ledger", "Account", "Transaction"]
        },
        "tech": {
            "name": "Tech",
            "values": ["Algorithm", "Application", "Bandwidth", "Browser", "Cloud", "Code", "Database", "Debug", "Encryption", "Firewall", "Framework", "Hardware", "Interface", "Internet", "Keyboard", "Laptop", "Memory", "Network", "OperatingSystem", "Protocol", "Processor", "Server", "Software", "SourceCode", "Upload", "Download", "WiFi", "Website", "BrowserTab", "Cache", "Cursor", "Data", "Device", "Function", "Gadget", "Git", "Input", "Output", "Monitor", "Module", "Pixel", "Platform", "Plugin", "Script", "Sensor", "Shortcut", "System", "Terminal"]
        },
        "animals": {
            "name": "Animals",
            "values": ["Elephant", "Lion", "Tiger", "Giraffe", "Zebra", "Penguin", "Dolphin", "Whale", "Shark", "Otter", "Rabbit", "Fox", "Bear", "Wolf", "Monkey", "Koala", "Kangaroo", "Panda", "Leopard", "Cheetah", "Raccoon", "Hedgehog", "Squirrel", "Mongoose", "Gorilla", "Parrot", "Eagle", "Falcon", "Owl", "Flamingo", "Peacock", "Camel", "Horse", "Cow", "Goat", "Sheep", "Pig", "Chicken", "Duck", "Goose", "Turkey", "Frog", "Toad", "Salmon", "Crab", "Octopus", "Lizard", "Turtle"]
        },
        "food": {
            "name": "Food",
            "values": ["Pizza", "Burger", "Pasta", "Salad", "Sandwich", "Soup", "Taco", "Burrito", "Sushi", "Rice", "Curry", "Noodles", "Steak", "Chicken", "Fish", "Bread", "Cheese", "Yogurt", "Apple", "Banana", "Orange", "Grapes", "Strawberry", "Blueberry", "Mango", "Pineapple", "Avocado", "Carrot", "Broccoli", "Spinach", "Tomato", "Potato", "Onion", "Garlic", "Pepper", "Corn", "Beans", "Peas", "Cookie", "Cake", "Pie", "Donut", "Chocolate", "IceCream", "Cupcake", "Pretzel", "Popcorn", "Oatmeal"]
        },
        "sports": {
            "name": "Sports",
            "values": ["Soccer", "Basketball", "Baseball", "Tennis", "Volleyball", "Cricket", "Hockey", "Rugby", "Golf", "Swimming", "Running", "Cycling", "Skating", "Skiing", "Boxing", "Wrestling", "Gymnastics", "Badminton", "Surfing", "Rowing", "Diving", "Archery", "Fencing", "Football", "Handball", "Lacrosse", "Marathon", "Sprint", "Skateboarding", "Climbing", "Kayaking", "Sailing", "Bowling", "Darts", "Karate", "Judo", "Taekwondo", "Pilates", "Yoga", "Triathlon", "Race", "Coach", "Team", "Stadium", "Referee", "Medal", "Score", "Training"]
        },
        "travel": {
            "name": "Travel",
            "values": ["Airport", "Passport", "Suitcase", "Ticket", "BoardingPass", "Hotel", "Resort", "Hostel", "Map", "Compass", "Train", "Bus", "Taxi", "Subway", "Car", "Motorbike", "Cruise", "Backpack", "Journey", "Adventure", "Destination", "Tourist", "Sightseeing", "Landmark", "Museum", "Beach", "Mountain", "Forest", "Desert", "City", "Village", "Bridge", "Route", "Departure", "Arrival", "Luggage", "Guide", "Itinerary", "Vacation", "Trip", "RoadTrip", "Reservation", "WindowSeat", "AdventurePark", "Campground", "Hiking", "Picnic", "TravelBlog"]
        },
        "music": {
            "name": "Music",
            "values": ["Melody", "Rhythm", "Harmony", "Tempo", "Beat", "Chord", "Scale", "Note", "Lyrics", "Singer", "Band", "Album", "Concert", "Guitar", "Piano", "Drums", "Violin", "Bass", "Mic", "Studio", "Playlist", "Opera", "Jazz", "Rock", "Pop", "HipHop", "Classical", "Viola", "Cello", "Saxophone", "Trumpet", "Flute", "Synthesizer", "Composer", "Audience", "Encore", "Rehearsal", "Chorus", "Bridge", "Verse", "Solo", "Record", "Track", "Sound", "Speaker", "Headphones", "DJ", "Festival"]
        },
        "space": {
            "name": "Space",
            "values": ["Planet", "Star", "Galaxy", "Moon", "Sun", "Orbit", "Rocket", "Astronaut", "Satellite", "Telescope", "Comet", "Asteroid", "Nebula", "Universe", "Spacecraft", "Launch", "Gravity", "Mars", "Venus", "Earth", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Cosmos", "Alien", "Mission", "Capsule", "Station", "Eclipse", "Meteor", "BlackHole", "Constellation", "Meteorite", "Lunar", "Solar", "Probe", "Docking", "Thruster", "Shuttle", "GalaxyMap", "Spacewalk", "Astronomy", "RocketFuel", "ZeroGravity", "Astrophysics", "Vacuum"]
        },
        "history": {
            "name": "History",
            "values": ["Ancient", "Civilization", "Empire", "King", "Queen", "Battle", "War", "Treaty", "Revolution", "Colony", "Discovery", "Invention", "Artifact", "Archive", "Chronology", "Dynasty", "Reign", "Freedom", "Monument", "Museum", "Library", "Plague", "Voyage", "Trade", "Alliance", "Rebellion", "Legion", "Republic", "Calendar", "Era", "Medieval", "Renaissance", "Industrial", "Progress", "Constitution", "Democracy", "Heritage", "Legacy", "Diplomacy", "General", "Soldier", "Crown", "Temple", "Pyramid", "Scroll", "Settlement", "Expansion", "Independence"]
        },
        "argument": {
            "name": "Argument",
            "values": ["Whatever", "That is not what I said", "You always do this", "No, listen", "I am calm", "You started it", "That is not fair", "I am not arguing", "Fine, whatever", "Because I said so", "You are impossible", "That is not the point", "Now you care?", "You never listen", "Let me finish", "I did not mean it", "This is getting ridiculous", "Forget it", "You know what I mean", "Stop twisting my words", "We are done here", "I am leaving", "You are overreacting", "Can we not do this right now"]
        },
        "school": {
            "name": "School",
            "values": ["Pop quiz", "Homework due tomorrow", "Group project", "Open your notebooks", "Class is almost over", "You will need this later", "Take out a pencil", "No talking", "I forgot my homework", "Did you study?", "The bell rang early", "This is on the test", "Can I go to the bathroom", "Who is presenting", "Due next Monday", "Lined paper only", "Please be quiet", "Read the instructions", "Extra credit", "Hall pass", "Lunch line", "Assembly", "Detention", "Study guide"]
        },
        "disappointedParents": {
            "name": "Disappointed Parents",
            "values": ["I am not mad", "We expected more", "I am disappointed", "Why did you do that", "We need to talk", "After everything we do", "At your age I was", "What were you thinking", "This is not like you", "You should know better", "I am tired of this", "We raised you better", "Do you hear yourself", "You had one job", "I am shaking my head", "Do not roll your eyes", "I cannot believe this", "You know the rules", "We are not your friends", "I am speechless", "Go to your room", "Take a minute", "We are very disappointed", "This conversation is not over"]
        },
        "groupProject": {
            "name": "Group Project",
            "values": ["I can make the slides", "Who is doing the presentation", "Did anyone start yet", "Let us meet tomorrow", "I thought you were doing that", "Can someone share the doc", "We need a backup plan", "What is the deadline", "I did my part", "We should keep it simple", "My internet crashed", "I was waiting on you", "Can you turn on your camera", "We need one more source", "I will do the title slide", "This is due tonight", "Let us just wing it", "Who is submitting it", "I wrote the intro", "Please stop changing the font", "Nobody is replying", "I have a conflict", "Did you check the rubric", "Can we split the work"]
        },
        "groupChatDrama": {
            "name": "Group Chat Drama",
            "values": ["Who started this", "Screenshots were taken", "I was just joking", "That was for the group", "Read the room", "Why are you being weird", "You left me on read", "I said what I said", "Do not drag me into this", "This is embarrassing", "Can we move on", "Why are you on my side", "Now everybody is typing", "That was unnecessary", "Mute this chat", "Check private messages", "Who added them", "I was not even talking", "The energy changed", "This is why I left", "Please stop spamming", "Context matters", "You know exactly what I meant", "Let us not do this here"]
        }
    };
}
function setDefaultBoards(boards) {
    localStorage.setItem('defaultBoards', JSON.stringify(boards));
}

function getCurrentBoard() {
    return JSON.parse(localStorage.getItem('currentBoard')) || "numbers";
}
function setCurrentBoard(name) {
    localStorage.setItem('currentBoard', JSON.stringify(name));
}

function changeBoardName(oldName, newName) {
    const bingoBoards = getBingoBoards();
    if (bingoBoards[newName]) {
        alert("A board with this name already exists. Please choose a different name.");
        return;
    }
    bingoBoards[newName] = bingoBoards[oldName];
    bingoBoards[newName].name = newName;
    delete bingoBoards[oldName];
    localStorage.setItem('bingoBoards', JSON.stringify(bingoBoards));
}

function exportBoard(name) {
    const bingoBoards = getDefaultBoards();
    const board = bingoBoards[name];
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(board));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", name + ".json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}
function importBoard(file) {
    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const board = JSON.parse(event.target.result);
            if (!board.name || !board.values) {
                alert("Invalid board format. Please ensure the JSON has 'name' and 'values' properties.");
                return;
            }
            addBingoBoard(board.name, board.values);
            setCurrentBoard(board.name);
            alert("Board imported successfully!");
        } catch (e) {
            alert("Error parsing JSON file. Please ensure it's a valid board format.");
        }
    };
    reader.readAsText(file);
}
