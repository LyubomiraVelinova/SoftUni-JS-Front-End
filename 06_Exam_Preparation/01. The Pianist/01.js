function pianist(input) {
    let n = Number(input.shift());
    let piecesCollection = {};
    let commandParser = {
        'Add': addPiece,
        'Remove': removePiece,
        'ChangeKey': changeKey
    };

    for (let index = 0; index < n; index++) {
        let [ piece, composer, key ] = input.shift().split('|');
        
        let command = commandLineTokens[0];
        
    }

    function addPiece(piece, composer, key) {

    }

    function removePiece(piece){

    }

    function changeKey(piecem newKey) {

    }
}