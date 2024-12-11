const isBrowser = typeof window !== "undefined";
const globalContext = isBrowser ? window : global;

globalContext.Game = function() {
    const players = new Array();
    const places = new Array(6);
    const purses = new Array(6);
    const inPenaltyBox = new Array(6);

    const popQuestions = new Array();
    const scienceQuestions = new Array();
    const sportsQuestions = new Array();
    const rockQuestions = new Array();

    let currentPlayer = 0;
    let isGettingOutOfPenaltyBox = false;

    const didPlayerWin = function(){
        return !(purses[currentPlayer] == 6)
    };


    const currentCategory = function(){
        switch (places[currentPlayer]) {
            case 0, 4, 8:
                return 'Pop';
            case 1, 5, 9:
                return 'Science';
            case 2, 6, 10:
                return 'Sports';
            default:
                return 'Rock';
        };
    }



    this.createRockQuestion = function(index) {
        return "Rock Question " + index;
    }

    for (let i = 0; i < 50; i++) {
        popQuestions.push("Pop Question " + i);
        scienceQuestions.push("Science Question " + i);
        sportsQuestions.push("Sports Question " + i);
        rockQuestions.push(this.createRockQuestion(i));
    }

    this.isPlayable = function(howManyPlayers) {
        return howManyPlayers >= 2;
    }
    
}