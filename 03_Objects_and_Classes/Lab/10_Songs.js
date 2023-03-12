// FIRST VAR

// function solve(array) {
//     class Song {
//         constructor(type, name, time) {
//             this.type = type;
//             this.name = name;
//             this.time = time;
//         }
//     }

//     let songNumber = array[0];
//     let songsInfo = {};
//     let searchedType = array.pop();
//     for (let i = 1; i <= songNumber; i++) {
//         let [currentSongType, name, time] = array[i].split('_');
//         if (currentSongType === searchedType || searchedType === 'all') {
//             songsInfo[name] = [time];
//         }
//     }
//     for (const key in songsInfo) {
//         console.log(key);  
//     }
// }


// SECOND VAR

function solve(array) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songNumber = array.shift();
    let songs = [];
    let searchedType = array.pop();
    for (let i = 0; i < songNumber; i++) {
        let [currentSongType, name, time] = array[i].split('_');
        let song = new Song(currentSongType, name, time);
        songs.push(song);
    }
    if (searchedType == 'all') {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.type === searchedType);
        filtered.forEach((i) => console.log(i.name));
    }
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
)
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);
solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
);