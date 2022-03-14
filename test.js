// function twoNumberSum(array, targetSum) {
//     array.sort((a,b) => a - b)
//     let l = 0
//     let r = array.length - 1

//     while (r > l){
//         if (array[l]+array[r] === targetSum){
//             return [array[l],array[r]]
//         }
//         else if (array[l]+array[r] < targetSum){
//             l++
//         }
//         else{
//             r--
//         }
//     }    
//     return []
// }


// console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6],10))


// function isValidSubsequence(array, sequence) {
//     let arrayIdx = 0
//     let sequenceIdx = 0
//     while(arrayIdx < array.length && sequenceIdx < sequence.length){
//         if (array[arrayIdx] === sequence[sequenceIdx]) sequenceIdx++
//         arrayIdx++
//     }
//     return sequenceIdx === sequence.length
//   }

// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[5, 1, 22, 22, 25, 6, -1, 8, 10]));

// function tournamentWinner(competitions, results) {
//     const bookKeeping = {}
    
//     for (let index = 0; index < results.length; index++) {
//         const element = results[index];
//         let temp;
//         if (element === 1) temp = 0
//         if (element === 0) temp = 1
//         if (bookKeeping[competitions[index][temp]]){
//         bookKeeping[competitions[index][temp]] += 1
//         }
//         else{
//             bookKeeping[competitions[index][temp]] = 1
//         }


//     }
//     return(Object.keys(bookKeeping).reduce((a, b) => bookKeeping[a] > bookKeeping[b] ? a : b))
//   }

// console.log(tournamentWinner([["HTML", "C#"],
// ["C#", "Python"],
// ["Python", "HTML"]],[0, 0, 1]));

// function nonConstructibleChange(coins) {
//     coins.sort((a,b) => a-b)
//     let currentSum = 0
//     for (coin in coins){
//         let currentCoin = coins[coin]
//         if (currentCoin > currentSum+1) return currentSum+1
//         currentSum+=currentCoin
//     }
//     return currentSum+1;
//   }

// console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]))

// class BST {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
//   let nodes = [
//     {"id": "10", "left": "5", "right": "15", "value": 10},
//     {"id": "15", "left": "13", "right": "22", "value": 15},
//     {"id": "22", "left": null, "right": null, "value": 22},
//     {"id": "13", "left": null, "right": "14", "value": 13},
//     {"id": "14", "left": null, "right": null, "value": 14},
//     {"id": "5", "left": "2", "right": "5-2", "value": 5},
//     {"id": "5-2", "left": null, "right": null, "value": 5},
//     {"id": "2", "left": "1", "right": null, "value": 2},
//     {"id": "1", "left": null, "right": null, "value": 1}
//   ]

// let tree = new BST (nodes[0])
// let tree1 = new BST (nodes[1])
// if (tree.left || tree.right){
//     console.log(tree)
//     console.log(tree.left)
//     console.log(tree.right)

// }
//   console.log(tree)
// var axios = require("axios").default;

// var options = {
//     method: 'GET',
//     url: 'https://unogs-unogs-v1.p.rapidapi.com/static/genres',
//     headers: {
//       'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com',
//       'x-rapidapi-key': 'b49a84c68fmshcd0c0ae889304fep1f8400jsncfc1f5dbf1ce'
//     }
//   };
  
//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });

    let results = [
        {
            "netflix_id": 12739,
            "genre": "20th Century Period Pieces"
        },
        {
            "netflix_id": 77213,
            "genre": "Absurd Comedies"
        },
        {
            "netflix_id": 51063,
            "genre": "Academy Award-Winning Films"
        },
        {
            "netflix_id": 1365,
            "genre": "Acción y aventuras"
        },
        {
            "netflix_id": 2125,
            "genre": "Acción y aventuras militares"
        },
        {
            "netflix_id": 801362,
            "genre": "Action"
        },
        {
            "netflix_id": 10673,
            "genre": "Action & Adventure Programmes"
        },
        {
            "netflix_id": 2653,
            "genre": "Action Anime"
        },
        {
            "netflix_id": 43040,
            "genre": "Action Comedies"
        },
        {
            "netflix_id": 1568,
            "genre": "Action Sci-Fi & Fantasy"
        },
        {
            "netflix_id": 43048,
            "genre": "Action Thrillers"
        },
        {
            "netflix_id": 788212,
            "genre": "Actionkrimis"
        },
        {
            "netflix_id": 11881,
            "genre": "Adult Animation"
        },
        {
            "netflix_id": 7442,
            "genre": "Adventures"
        },
        {
            "netflix_id": 3761,
            "genre": "African Films"
        },
        {
            "netflix_id": 4906,
            "genre": "African-American Comedies"
        },
        {
            "netflix_id": 10778,
            "genre": "African-American Stand-up Comedy"
        },
        {
            "netflix_id": 3327,
            "genre": "Alien Sci-Fi"
        },
        {
            "netflix_id": 12123,
            "genre": "Ambientadas en otra época"
        },
        {
            "netflix_id": 72404,
            "genre": "American Programmes"
        },
        {
            "netflix_id": 5507,
            "genre": "Animal Tales"
        },
        {
            "netflix_id": 786708,
            "genre": "Animated Movies"
        },
        {
            "netflix_id": 4698,
            "genre": "Animation"
        },
        {
            "netflix_id": 7424,
            "genre": "Anime"
        },
        {
            "netflix_id": 1819777,
            "genre": "Anime based on a Video Game"
        },
        {
            "netflix_id": 1819776,
            "genre": "Anime based on Books"
        },
        {
            "netflix_id": 2316199,
            "genre": "Anime based on Comics"
        },
        {
            "netflix_id": 2867325,
            "genre": "Anime Based on Light Novels"
        },
        {
            "netflix_id": 9302,
            "genre": "Anime Comedies"
        },
        {
            "netflix_id": 452,
            "genre": "Anime Dramas"
        },
        {
            "netflix_id": 11146,
            "genre": "Anime Fantasies"
        },
        {
            "netflix_id": 3063,
            "genre": "Anime Feature Films"
        },
        {
            "netflix_id": 2797624,
            "genre": "Anime for Gamers"
        },
        {
            "netflix_id": 10695,
            "genre": "Anime Horror Films"
        },
        {
            "netflix_id": 2246382,
            "genre": "Anime released in 2017"
        },
        {
            "netflix_id": 2729,
            "genre": "Anime Sci-Fi"
        },
        {
            "netflix_id": 1433679,
            "genre": "Anime Sci-Fi & Fantasy"
        },
        {
            "netflix_id": 6721,
            "genre": "Anime Series"
        },
        {
            "netflix_id": 6133,
            "genre": "Argentinian Films"
        },
        {
            "netflix_id": 69616,
            "genre": "Argentinian TV Shows"
        },
        {
            "netflix_id": 29764,
            "genre": "Art House Films"
        },
        {
            "netflix_id": 77232,
            "genre": "Asian Action Films"
        },
        {
            "netflix_id": 78104,
            "genre": "Asian Movies"
        },
        {
            "netflix_id": 78103,
            "genre": "Asian Programmes"
        },
        {
            "netflix_id": 81427741,
            "genre": "Australian"
        },
        {
            "netflix_id": 2030,
            "genre": "Australian Comedies"
        },
        {
            "netflix_id": 17672,
            "genre": "Australian Documentaries"
        },
        {
            "netflix_id": 11075,
            "genre": "Australian Dramas"
        },
        {
            "netflix_id": 5230,
            "genre": "Australian Films"
        },
        {
            "netflix_id": 10719,
            "genre": "Australian Thrillers"
        },
        {
            "netflix_id": 52387,
            "genre": "Australian TV Programmes"
        },
        {
            "netflix_id": 89844,
            "genre": "Award-films"
        },
        {
            "netflix_id": 89804,
            "genre": "Award-winning Dramas"
        },
        {
            "netflix_id": 8195,
            "genre": "B-Horror Films"
        },
        {
            "netflix_id": 2300348,
            "genre": "Baeksang Arts Awards Winners"
        },
        {
            "netflix_id": 69946,
            "genre": "BAFTA Award-Winning Films"
        },
        {
            "netflix_id": 27346,
            "genre": "Barne-TV"
        },
        {
            "netflix_id": 12339,
            "genre": "Baseball Films"
        },
        {
            "netflix_id": 12762,
            "genre": "Basketball Films"
        },
        {
            "netflix_id": 81427743,
            "genre": "Belgian"
        },
        {
            "netflix_id": 262,
            "genre": "Belgian Films"
        },
        {
            "netflix_id": 60594,
            "genre": "Bengali-language Films"
        },
        {
            "netflix_id": 846815,
            "genre": "Berlin Film Festival Award-winning Movies"
        },
        {
            "netflix_id": 3652,
            "genre": "Biographical Documentaries"
        },
        {
            "netflix_id": 3179,
            "genre": "Biographical Dramas"
        },
        {
            "netflix_id": 1096,
            "genre": "Biographical Movies"
        },
        {
            "netflix_id": 90176,
            "genre": "Blockbuster Action & Adventure"
        },
        {
            "netflix_id": 90139,
            "genre": "Blockbuster Movies"
        },
        {
            "netflix_id": 90166,
            "genre": "Blockbuster Sci-Fi & Fantasy"
        },
        {
            "netflix_id": 2300054,
            "genre": "Blue Dragon Film Award-winning Movies"
        },
        {
            "netflix_id": 5480,
            "genre": "Bollywood Films"
        },
        {
            "netflix_id": 12443,
            "genre": "Boxing Films"
        },
        {
            "netflix_id": 81417793,
            "genre": "Brazilian"
        },
        {
            "netflix_id": 17648,
            "genre": "Brazilian Comedies"
        },
        {
            "netflix_id": 28269,
            "genre": "Brazilian Documentaries"
        },
        {
            "netflix_id": 4425,
            "genre": "Brazilian Dramas"
        },
        {
            "netflix_id": 798,
            "genre": "Brazilian Films"
        },
        {
            "netflix_id": 84488,
            "genre": "Brazilian Music & Musicals"
        },
        {
            "netflix_id": 84489,
            "genre": "Brazilian Music and Concert Movies"
        },
        {
            "netflix_id": 69624,
            "genre": "Brazilian TV Programmes"
        },
        {
            "netflix_id": 10757,
            "genre": "Britische Filme"
        },
        {
            "netflix_id": 81399656,
            "genre": "British"
        },
        {
            "netflix_id": 1302,
            "genre": "British Action & Adventure"
        },
        {
            "netflix_id": 1009,
            "genre": "British Comedies"
        },
        {
            "netflix_id": 6051,
            "genre": "British Crime Films"
        },
        {
            "netflix_id": 3682,
            "genre": "British Dramas"
        },
        {
            "netflix_id": 52508,
            "genre": "British Miniseries"
        },
        {
            "netflix_id": 12433,
            "genre": "British Period Pieces"
        },
        {
            "netflix_id": 52117,
            "genre": "British Programmes"
        },
        {
            "netflix_id": 1774,
            "genre": "British Thrillers"
        },
        {
            "netflix_id": 52140,
            "genre": "British TV Comedies"
        },
        {
            "netflix_id": 52148,
            "genre": "British TV Dramas"
        },
        {
            "netflix_id": 52120,
            "genre": "British TV Mysteries"
        },
        {
            "netflix_id": 28134,
            "genre": "Buddy Comedies"
        },
        {
            "netflix_id": 81427748,
            "genre": "Bulgarian"
        },
        {
            "netflix_id": 1252,
            "genre": "Camp Films"
        },
        {
            "netflix_id": 81418152,
            "genre": "Canadian"
        },
        {
            "netflix_id": 56174,
            "genre": "Canadian Comedies"
        },
        {
            "netflix_id": 56178,
            "genre": "Canadian Documentaries"
        },
        {
            "netflix_id": 56169,
            "genre": "Canadian Dramas"
        },
        {
            "netflix_id": 56181,
            "genre": "Canadian Films"
        },
        {
            "netflix_id": 56184,
            "genre": "Canadian Independent Films"
        },
        {
            "netflix_id": 58704,
            "genre": "Canadian TV Programmes"
        },
        {
            "netflix_id": 846810,
            "genre": "Cannes Film Festival Award-winning Movies"
        },
        {
            "netflix_id": 702387,
            "genre": "Cannes Film Festival Winners"
        },
        {
            "netflix_id": 783,
            "genre": "Children & Family Films"
        },
        {
            "netflix_id": 1305303,
            "genre": "Chilean Films & TV"
        },
        {
            "netflix_id": 90848,
            "genre": "Chilling Horror Films"
        },
        {
            "netflix_id": 80353,
            "genre": "Chinese  Programmes"
        },
        {
            "netflix_id": 8999,
            "genre": "Chinese Action & Adventure"
        },
        {
            "netflix_id": 9229,
            "genre": "Chinese Comedies"
        },
        {
            "netflix_id": 5572,
            "genre": "Chinese Dramas"
        },
        {
            "netflix_id": 3960,
            "genre": "Chinese Films"
        },
        {
            "netflix_id": 1372,
            "genre": "Ciencia ficción y fantasía para TV"
        },
        {
            "netflix_id": 46576,
            "genre": "Classic Action & Adventure"
        },
        {
            "netflix_id": 46560,
            "genre": "Classic British Films"
        },
        {
            "netflix_id": 48586,
            "genre": "Classic Children & Family Films"
        },
        {
            "netflix_id": 31694,
            "genre": "Classic Comedies"
        },
        {
            "netflix_id": 29809,
            "genre": "Classic Dramas"
        },
        {
            "netflix_id": 31574,
            "genre": "Classic Films"
        },
        {
            "netflix_id": 48303,
            "genre": "Classic Horror Films"
        },
        {
            "netflix_id": 1476390,
            "genre": "Classic International Movies"
        },
        {
            "netflix_id": 31853,
            "genre": "Classic Japanese Movies"
        },
        {
            "netflix_id": 32392,
            "genre": "Classic Musicals"
        },
        {
            "netflix_id": 31273,
            "genre": "Classic Romantic Films"
        },
        {
            "netflix_id": 47147,
            "genre": "Classic Sci-Fi & Fantasy"
        },
        {
            "netflix_id": 46588,
            "genre": "Classic Thrillers"
        },
        {
            "netflix_id": 46553,
            "genre": "Classic TV Programmes"
        },
        {
            "netflix_id": 48744,
            "genre": "Classic War Films"
        },
        {
            "netflix_id": 47465,
            "genre": "Classic Westerns"
        },
        {
            "netflix_id": 69636,
            "genre": "Colombian Movies"
        },
        {
            "netflix_id": 69622,
            "genre": "Colombian TV Programmes"
        },
        {
            "netflix_id": 6548,
            "genre": "Comedias"
        },
        {
            "netflix_id": 3519,
            "genre": "Comedias adolescentes"
        },
        {
            "netflix_id": 9434,
            "genre": "Comedias de culto"
        },
        {
            "netflix_id": 4195,
            "genre": "Comedias independientes"
        },
        {
            "netflix_id": 5475,
            "genre": "Comedias románticas"
        },
        {
            "netflix_id": 1003219,
            "genre": "Comedy Blockbusters"
        },
        {
            "netflix_id": 78163,
            "genre": "Comedy Jams"
        },
        {
            "netflix_id": 10375,
            "genre": "Comedy Programmes"
        },
        {
            "netflix_id": 53717,
            "genre": "Comic Book & Superhero TV"
        },
        {
            "netflix_id": 10118,
            "genre": "Comic Book and Superhero Films"
        },
        {
            "netflix_id": 49266,
            "genre": "Competition Reality TV"
        },
        {
            "netflix_id": 81248636,
            "genre": "Concerts"
        },
        {
            "netflix_id": 1105,
            "genre": "Country & Western/Folk"
        },
        {
            "netflix_id": 2748,
            "genre": "Courtroom Dramas"
        },
        {
            "netflix_id": 10714,
            "genre": "Courtroom Films"
        },
        {
            "netflix_id": 25955,
            "genre": "Courtroom TV Dramas"
        },
        {
            "netflix_id": 6895,
            "genre": "Creature Features"
        },
        {
            "netflix_id": 9584,
            "genre": "Crime Action & Adventure"
        },
        {
            "netflix_id": 4058,
            "genre": "Crime Comedies"
        },
        {
            "netflix_id": 9875,
            "genre": "Crime Documentaries"
        },
        {
            "netflix_id": 26126,
            "genre": "Crime Docuseries"
        },
        {
            "netflix_id": 6889,
            "genre": "Crime Dramas"
        },
        {
            "netflix_id": 5824,
            "genre": "Crime Films"
        },
        {
            "netflix_id": 10185,
            "genre": "Crime Films based on real life"
        },
        {
            "netflix_id": 26146,
            "genre": "Crime Programmes"
        },
        {
            "netflix_id": 10499,
            "genre": "Crime Thrillers"
        },
        {
            "netflix_id": 26009,
            "genre": "Crime TV Dramas"
        },
        {
            "netflix_id": 37938,
            "genre": "Crime TV Soaps"
        },
        {
            "netflix_id": 9736,
            "genre": "Critically Acclaimed Comedies"
        },
        {
            "netflix_id": 6206,
            "genre": "Critically Acclaimed Dramas"
        },
        {
            "netflix_id": 3979,
            "genre": "Critically Acclaimed Films"
        },
        {
            "netflix_id": 899,
            "genre": "Critically-acclaimed Action & Adventure"
        },
        {
            "netflix_id": 8673,
            "genre": "Critically-acclaimed Documentaries"
        },
        {
            "netflix_id": 875,
            "genre": "Critically-acclaimed Independent Films"
        },
        {
            "netflix_id": 5903,
            "genre": "Critically-acclaimed Sci-Fi & Fantasy"
        },
        {
            "netflix_id": 7627,
            "genre": "Cult Films"
        },
        {
            "netflix_id": 10944,
            "genre": "Cult Horror Films"
        },
        {
            "netflix_id": 4734,
            "genre": "Cult Sci-Fi & Fantasy"
        },
        {
            "netflix_id": 74652,
            "genre": "Cult TV Programmes"
        },
        {
            "netflix_id": 1964512,
            "genre": "Cyberpunk"
        },
        {
            "netflix_id": 1522235,
            "genre": "Cyborg & Robot Anime"
        },
        {
            "netflix_id": 81444566,
            "genre": "Czech"
        },
        {
            "netflix_id": 1697,
            "genre": "Czech Movies"
        },
        {
            "netflix_id": 8451,
            "genre": "Dance"
        },
        {
            "netflix_id": 59169,
            "genre": "Danish Comedies"
        },
        {
            "netflix_id": 58700,
            "genre": "Danish Films"
        },
        {
            "netflix_id": 77951,
            "genre": "Danish TV Shows"
        },
        {
            "netflix_id": 869,
            "genre": "Dark Comedies"
        },
        {
            "netflix_id": 45028,
            "genre": "Deep Sea Horror Films"
        },
        {
            "netflix_id": 11177,
            "genre": "Dibujos animados"
        },
        {
            "netflix_id": 67673,
            "genre": "Disney"
        },
        {
            "netflix_id": 65218,
            "genre": "Disney Family Features"
        },
        {
            "netflix_id": 65437,
            "genre": "Disney Films"
        },
        {
            "netflix_id": 6839,
            "genre": "Documentaries"
        },
        {
            "netflix_id": 2243108,
            "genre": "Documentaries"
        },
        {
            "netflix_id": 10105,
            "genre": "Documentary Programmes"
        },
        {
            "netflix_id": 5763,
            "genre": "Drama"
        },
        {
            "netflix_id": 11714,
            "genre": "Drama Programmes"
        },
        {
            "netflix_id": 3653,
            "genre": "Dramas basados en la vida real"
        },
        {
            "netflix_id": 4961,
            "genre": "Dramas baseados em livros"
        },
        {
            "netflix_id": 13158,
            "genre": "Dramas based on classic literature"
        },
        {
            "netflix_id": 12994,
            "genre": "Dramas based on contemporary literature"
        },
        {
            "netflix_id": 11,
            "genre": "Dramas militares"
        },
        {
            "netflix_id": 75459,
            "genre": "Dramas policiais"
        },
        {
            "netflix_id": 6616,
            "genre": "Dramas políticos"
        },
        {
            "netflix_id": 1255,
            "genre": "Dramas románticos"
        },
        {
            "netflix_id": 81422104,
            "genre": "Dutch"
        },
        {
            "netflix_id": 89513,
            "genre": "Dutch Children & Family Movies"
        },
        {
            "netflix_id": 79871,
            "genre": "Dutch Comedies"
        },
        {
            "netflix_id": 9873,
            "genre": "Dutch Dramas"
        },
        {
            "netflix_id": 10606,
            "genre": "Dutch Films"
        },
        {
            "netflix_id": 89442,
            "genre": "Dutch TV Shows"
        },
        {
            "netflix_id": 5254,
            "genre": "Eastern European Films"
        },
        {
            "netflix_id": 10659,
            "genre": "Educación y orientación"
        },
        {
            "netflix_id": 81444569,
            "genre": "Egyptian"
        },
        {
            "netflix_id": 81237077,
            "genre": "Egyptian Movies"
        },
        {
            "netflix_id": 81257861,
            "genre": "Egyptian TV Shows"
        },
        {
            "netflix_id": 52858,
            "genre": "Epics"
        },
        {
            "netflix_id": 89682,
            "genre": "European Comedies"
        },
        {
            "netflix_id": 89680,
            "genre": "European Dramas"
        },
        {
            "netflix_id": 89708,
            "genre": "European Movies"
        },
        {
            "netflix_id": 89692,
            "genre": "European Thrillers"
        },
        {
            "netflix_id": 89663,
            "genre": "European TV Shows"
        },
        {
            "netflix_id": 11079,
            "genre": "Experimental Films"
        },
        {
            "netflix_id": 26835,
            "genre": "Faith & Spirituality"
        },
        {
            "netflix_id": 52804,
            "genre": "Faith & Spirituality Films"
        },
        {
            "netflix_id": 52855,
            "genre": "Familieavonturen"
        },
        {
            "netflix_id": 52847,
            "genre": "Familiecomedy"
        },
        {
            "netflix_id": 58879,
            "genre": "Family Animation"
        },
        {
            "netflix_id": 2245805,
            "genre": "Family Cozy Time"
        },
        {
            "netflix_id": 31901,
            "genre": "Family Dramas"
        },
        {
            "netflix_id": 51058,
            "genre": "Family Feature Animation"
        },
        {
            "netflix_id": 51056,
            "genre": "Family Features"
        },
        {
            "netflix_id": 52849,
            "genre": "Family Sci-Fi & Fantasy"
        },
        {
            "netflix_id": 2072262,
            "genre": "Family Watch Together TV"
        },
        {
            "netflix_id": 9744,
            "genre": "Fantasy"
        },
        {
            "netflix_id": 1002031,
            "genre": "Fantasy TV Programmes"
        },
        {
            "netflix_id": 77599,
            "genre": "Female Stand-up Comedy"
        },
        {
            "netflix_id": 107985,
            "genre": "Festive Favourites"
        },
        {
            "netflix_id": 81422106,
            "genre": "Filipino"
        },
        {
            "netflix_id": 10869,
            "genre": "Filipino Films"
        },
        {
            "netflix_id": 80380,
            "genre": "Filipino TV Shows"
        },
        {
            "netflix_id": 7687,
            "genre": "Film Noir"
        },
        {
            "netflix_id": 31851,
            "genre": "Filmes sobre máfia"
        },
        {
            "netflix_id": 9889,
            "genre": "Films Based on Books"
        },
        {
            "netflix_id": 10056,
            "genre": "Films based on childrens books"
        },
        {
            "netflix_id": 920,
            "genre": "Films Based on Real Life"
        },
        {
            "netflix_id": 6796,
            "genre": "Films for ages 0 to 2"
        },
        {
            "netflix_id": 6962,
            "genre": "Films for ages 11 to 12"
        },
        {
            "netflix_id": 6218,
            "genre": "Films for ages 2 to 4"
        },
        {
            "netflix_id": 5455,
            "genre": "Films for ages 5 to 7"
        },
        {
            "netflix_id": 561,
            "genre": "Films for ages 8 to 10"
        },
        {
            "netflix_id": 62285,
            "genre": "Finnish Movies"
        },
        {
            "netflix_id": 78503,
            "genre": "Finnish TV Shows"
        },
        {
            "netflix_id": 1515639,
            "genre": "Food & Travel Docs"
        },
        {
            "netflix_id": 72436,
            "genre": "Food & Travel TV"
        },
        {
            "netflix_id": 3890,
            "genre": "Food & Wine"
        },
        {
            "netflix_id": 12803,
            "genre": "Football Films"
        },
        {
            "netflix_id": 12549,
            "genre": "Football Films"
        },
        {
            "netflix_id": 4426,
            "genre": "Foreign Comedies"
        },
        {
            "netflix_id": 5161,
            "genre": "Foreign Documentaries"
        },
        {
            "netflix_id": 10306,
            "genre": "Foreign Thrillers"
        },
        {
            "netflix_id": 58807,
            "genre": "Franse films"
        },
        {
            "netflix_id": 81399454,
            "genre": "French"
        },
        {
            "netflix_id": 58905,
            "genre": "French Comedies"
        },
        {
            "netflix_id": 58710,
            "genre": "French Documentaries"
        },
        {
            "netflix_id": 58677,
            "genre": "French Dramas"
        },
        {
            "netflix_id": 58798,
            "genre": "French Thrillers"
        },
        {
            "netflix_id": 62041,
            "genre": "French TV Programmes"
        },
        {
            "netflix_id": 1626246,
            "genre": "Futuristic Sci-Fi"
        },
        {
            "netflix_id": 30140,
            "genre": "Gangster Action & Adventure"
        },
        {
            "netflix_id": 7120,
            "genre": "Gay & Lesbian Comedies"
        },
        {
            "netflix_id": 4720,
            "genre": "Gay & Lesbian Documentaries"
        },
        {
            "netflix_id": 500,
            "genre": "Gay & Lesbian Dramas"
        },
        {
            "netflix_id": 5977,
            "genre": "Gay & Lesbian Films"
        },
        {
            "netflix_id": 65263,
            "genre": "Gay & Lesbian TV Programmes"
        },
        {
            "netflix_id": 81417795,
            "genre": "German"
        },
        {
            "netflix_id": 63115,
            "genre": "German Comedies"
        },
        {
            "netflix_id": 61695,
            "genre": "German Crime Movies"
        },
        {
            "netflix_id": 63286,
            "genre": "German Documentaries"
        },
        {
            "netflix_id": 58755,
            "genre": "German Dramas"
        },
        {
            "netflix_id": 58886,
            "genre": "German Films"
        },
        {
            "netflix_id": 65198,
            "genre": "German TV Programmes"
        },
        {
            "netflix_id": 82489,
            "genre": "Golden Globe Award-winning Films"
        },
        {
            "netflix_id": 6197,
            "genre": "Goofy Comedies"
        },
        {
            "netflix_id": 9509,
            "genre": "Gory Horror Films"
        },
        {
            "netflix_id": 27756,
            "genre": "Heist Action & Adventure"
        },
        {
            "netflix_id": 27018,
            "genre": "Heist Films"
        },
        {
            "netflix_id": 58806,
            "genre": "Hindi-Language Films"
        },
        {
            "netflix_id": 80307,
            "genre": "Hindi-language TV Programmes"
        },
        {
            "netflix_id": 6073,
            "genre": "Hip-Hop"
        },
        {
            "netflix_id": 2075446,
            "genre": "Historical Anime"
        },
        {
            "netflix_id": 5349,
            "genre": "Historical Documentaries"
        },
        {
            "netflix_id": 71591,
            "genre": "Historical Dramas"
        },
        {
            "netflix_id": 71590,
            "genre": "Historical Films"
        },
        {
            "netflix_id": 1023212,
            "genre": "Home & Garden Reality TV"
        },
        {
            "netflix_id": 58676,
            "genre": "Hong Kong Films"
        },
        {
            "netflix_id": 89585,
            "genre": "Horror Comedies"
        },
        {
            "netflix_id": 8711,
            "genre": "Horror Films"
        },
        {
            "netflix_id": 83059,
            "genre": "Horror Programmes"
        },
        {
            "netflix_id": 81448926,
            "genre": "Hungarian"
        },
        {
            "netflix_id": 59954,
            "genre": "Hungarian Movies"
        },
        {
            "netflix_id": 11804,
            "genre": "Independent Action & Adventure"
        },
        {
            "netflix_id": 384,
            "genre": "Independent Dramas"
        },
        {
            "netflix_id": 7077,
            "genre": "Independent Films"
        },
        {
            "netflix_id": 3269,
            "genre": "Independent Thrillers"
        },
        {
            "netflix_id": 81418683,
            "genre": "Indian"
        },
        {
            "netflix_id": 9942,
            "genre": "Indian Comedies"
        },
        {
            "netflix_id": 5051,
            "genre": "Indian Dramas"
        },
        {
            "netflix_id": 10463,
            "genre": "Indian Films"
        },
        {
            "netflix_id": 59872,
            "genre": "Indian Programmes"
        },
        {
            "netflix_id": 81458611,
            "genre": "Indonesian"
        },
        {
            "netflix_id": 2867320,
            "genre": "Indonesian Films"
        },
        {
            "netflix_id": 78367,
            "genre": "Internationaal"
        },
        {
            "netflix_id": 852490,
            "genre": "International Action & Adventure"
        },
        {
            "netflix_id": 852492,
            "genre": "International Comedies"
        },
        {
            "netflix_id": 852494,
            "genre": "International Documentaries"
        },
        {
            "netflix_id": 852493,
            "genre": "International Dramas"
        },
        {
            "netflix_id": 1208621,
            "genre": "International Historical TV Dramas"
        },
        {
            "netflix_id": 1475312,
            "genre": "International Horror Movies"
        },
        {
            "netflix_id": 1218090,
            "genre": "International Kids TV"
        },
        {
            "netflix_id": 1475315,
            "genre": "International Period Pieces"
        },
        {
            "netflix_id": 1195213,
            "genre": "International Programmes"
        },
        {
            "netflix_id": 2070375,
            "genre": "International Reality, Talk & Variety Shows"
        },
        {
            "netflix_id": 852491,
            "genre": "International Sci-Fi & Fantasy"
        },
        {
            "netflix_id": 852488,
            "genre": "International Thrillers"
        },
        {
            "netflix_id": 1208951,
            "genre": "International TV Comedies"
        },
        {
            "netflix_id": 1208954,
            "genre": "International TV Dramas"
        },
        {
            "netflix_id": 1192483,
            "genre": "International TV Sci-Fi & Fantasy"
        },
        {
            "netflix_id": 1461986,
            "genre": "International TV Thrillers & Mysteries"
        },
        {
            "netflix_id": 48785,
            "genre": "Investigative Reality TV"
        },
        {
            "netflix_id": 58750,
            "genre": "Irish Films"
        },
        {
            "netflix_id": 11039,
            "genre": "Irreverent Stand-up Comedy"
        },
        {
            "netflix_id": 2710229,
            "genre": "Israeli TV Shows"
        },
        {
            "netflix_id": 81417798,
            "genre": "Italian"
        },
        {
            "netflix_id": 3300,
            "genre": "Italian Comedies"
        },
        {
            "netflix_id": 4282,
            "genre": "Italian Dramas"
        },
        {
            "netflix_id": 8221,
            "genre": "Italian Films"
        },
        {
            "netflix_id": 6867,
            "genre": "Italian Thrillers"
        },
        {
            "netflix_id": 62866,
            "genre": "Italian TV Programmes"
        },
        {
            "netflix_id": 81418687,
            "genre": "Japanese"
        },
        {
            "netflix_id": 1293326,
            "genre": "Japanese Academy Award-winning Movies"
        },
        {
            "netflix_id": 4344,
            "genre": "Japanese Action & Adventure"
        },
        {
            "netflix_id": 1747,
            "genre": "Japanese Comedies"
        },
        {
            "netflix_id": 1650093,
            "genre": "Japanese Documentary Movies"
        },
        {
            "netflix_id": 2893,
            "genre": "Japanese Dramas"
        },
        {
            "netflix_id": 10398,
            "genre": "Japanese Films"
        },
        {
            "netflix_id": 31244,
            "genre": "Japanese Gangster Movies"
        },
        {
            "netflix_id": 10750,
            "genre": "Japanese Horror Films"
        },
        {
            "netflix_id": 65925,
            "genre": "Japanese Kids TV"
        },
        {
            "netflix_id": 1519160,
            "genre": "Japanese Movies based on Comics"
        },
        {
            "netflix_id": 1402191,
            "genre": "Japanese Period Dramas"
        },
        {
            "netflix_id": 64256,
            "genre": "Japanese Programmes"
        },
        {
            "netflix_id": 6000,
            "genre": "Japanese Sci-Fi & Fantasy"
        },
        {
            "netflix_id": 799,
            "genre": "Japanese Thrillers"
        },
        {
            "netflix_id": 711366,
            "genre": "Japanese TV Comedies"
        },
        {
            "netflix_id": 1648599,
            "genre": "Japanese TV Documentaries"
        },
        {
            "netflix_id": 711367,
            "genre": "Japanese TV Dramas"
        },
        {
            "netflix_id": 1592212,
            "genre": "Japanese TV Reality & Variety"
        },
        {
            "netflix_id": 1461923,
            "genre": "Japanese TV Sci-Fi & Fantasy"
        },
        {
            "netflix_id": 2691923,
            "genre": "Japanese TV Series"
        },
        {
            "netflix_id": 1627743,
            "genre": "Japanese TV Shows Based on Comics"
        },
        {
            "netflix_id": 1138506,
            "genre": "Japanese TV Thrillers"
        },
        {
            "netflix_id": 1652485,
            "genre": "Japanese Youth Dramas"
        },
        {
            "netflix_id": 2070663,
            "genre": "Japanese Youth TV Dramas"
        },
        {
            "netflix_id": 10271,
            "genre": "Jazz & Easy Listening"
        },
        {
            "netflix_id": 2638104,
            "genre": "K-dramas"
        },
        {
            "netflix_id": 2936382,
            "genre": "K-dramas based on Webtoon"
        },
        {
            "netflix_id": 413820,
            "genre": "Kids Anime"
        },
        {
            "netflix_id": 751423,
            "genre": "Kids Faith & Spirituality"
        },
        {
            "netflix_id": 52843,
            "genre": "Kids Music"
        },
        {
            "netflix_id": 28233,
            "genre": "Kids TV for ages 0 to 2"
        },
        {
            "netflix_id": 27950,
            "genre": "Kids TV for ages 11 to 12"
        },
        {
            "netflix_id": 27480,
            "genre": "Kids TV for ages 2 to 4"
        },
        {
            "netflix_id": 28034,
            "genre": "Kids TV for ages 5 to 7"
        },
        {
            "netflix_id": 28083,
            "genre": "Kids TV for ages 8 to 10"
        },
        {
            "netflix_id": 81427756,
            "genre": "Korean"
        },
        {
            "netflix_id": 8248,
            "genre": "Korean Action & Adventure"
        },
        {
            "netflix_id": 6626,
            "genre": "Korean Comedies"
        },
        {
            "netflix_id": 1989,
            "genre": "Korean Drama Movies"
        },
        {
            "netflix_id": 5685,
            "genre": "Korean Films"
        },
        {
            "netflix_id": 67879,
            "genre": "Korean Programmes"
        },
        {
            "netflix_id": 2072269,
            "genre": "Korean Reality, Variety & Talk Shows"
        },
        {
            "netflix_id": 11283,
            "genre": "Korean Thrillers"
        },
        {
            "netflix_id": 68699,
            "genre": "Korean TV Dramas"
        },
        {
            "netflix_id": 1402,
            "genre": "Late Night Comedies"
        },
        {
            "netflix_id": 3996,
            "genre": "Latin American Comedies"
        },
        {
            "netflix_id": 15456,
            "genre": "Latin American Documentaries"
        },
        {
            "netflix_id": 6763,
            "genre": "Latin American Dramas"
        },
        {
            "netflix_id": 1613,
            "genre": "Latin American Films"
        },
        {
            "netflix_id": 88635,
            "genre": "Latin American Music & Musicals"
        },
        {
            "netflix_id": 67708,
            "genre": "Latin American TV Programmes"
        },
        {
            "netflix_id": 10741,
            "genre": "Latin Music"
        },
        {
            "netflix_id": 1333288,
            "genre": "Laugh-Out-Loud Comedies"
        },
        {
            "netflix_id": 2738568,
            "genre": "Lifestyle"
        },
        {
            "netflix_id": 74253,
            "genre": "Little Kids"
        },
        {
            "netflix_id": 2199520,
            "genre": "Mainland Chinese Movies"
        },
        {
            "netflix_id": 2199564,
            "genre": "Mainland Chinese TV Shows"
        },
        {
            "netflix_id": 49296,
            "genre": "Makeover Reality TV"
        },
        {
            "netflix_id": 59849,
            "genre": "Malayalam-Language Films"
        },
        {
            "netflix_id": 81458634,
            "genre": "Malaysian"
        },
        {
            "netflix_id": 3057773,
            "genre": "Malaysian Films"
        },
        {
            "netflix_id": 2199042,
            "genre": "Malaysian Programmes"
        },
        {
            "netflix_id": 2190064,
            "genre": "Marathi-language Films"
        },
        {
            "netflix_id": 8985,
            "genre": "Martial Arts Films"
        },
        {
            "netflix_id": 6695,
            "genre": "Martial Arts, Boxing & Wrestling"
        },
        {
            "netflix_id": 34204,
            "genre": "Medical TV Dramas"
        },
        {
            "netflix_id": 81417800,
            "genre": "Mexican"
        },
        {
            "netflix_id": 105,
            "genre": "Mexican Comedies"
        },
        {
            "netflix_id": 2757,
            "genre": "Mexican Dramas"
        },
        {
            "netflix_id": 7825,
            "genre": "Mexican Films"
        },
        {
            "netflix_id": 67644,
            "genre": "Mexican TV Programmes"
        },
        {
            "netflix_id": 5875,
            "genre": "Middle Eastern Movies"
        },
        {
            "netflix_id": 1476847,
            "genre": "Middle Eastern TV Programmes"
        },
        {
            "netflix_id": 76501,
            "genre": "Military & War Action & Adventure"
        },
        {
            "netflix_id": 76507,
            "genre": "Military & War Dramas"
        },
        {
            "netflix_id": 76510,
            "genre": "Military & War Movies"
        },
        {
            "netflix_id": 4006,
            "genre": "Military Documentaries"
        },
        {
            "netflix_id": 5962,
            "genre": "Military Films"
        },
        {
            "netflix_id": 25804,
            "genre": "Military TV Programmes"
        },
        {
            "netflix_id": 81498,
            "genre": "Mind Game Thrillers"
        },
        {
            "netflix_id": 4814,
            "genre": "Miniseries"
        },
        {
            "netflix_id": 9994,
            "genre": "Mistérios"
        },
        {
            "netflix_id": 4366,
            "genre": "Misterios para TV"
        },
        {
            "netflix_id": 75415,
            "genre": "Mistérios policiais"
        },
        {
            "netflix_id": 26,
            "genre": "Mockumentaries"
        },
        {
            "netflix_id": 76186,
            "genre": "Modern Classic Movies"
        },
        {
            "netflix_id": 947,
            "genre": "Monster Films"
        },
        {
            "netflix_id": 1701,
            "genre": "Music"
        },
        {
            "netflix_id": 90361,
            "genre": "Music & Concert Documentaries"
        },
        {
            "netflix_id": 52852,
            "genre": "Music & Musicals"
        },
        {
            "netflix_id": 84483,
            "genre": "Music and Concert Films"
        },
        {
            "netflix_id": 13335,
            "genre": "Musicals"
        },
        {
            "netflix_id": 81216565,
            "genre": "Mystery & Thriller Anime"
        },
        {
            "netflix_id": 48768,
            "genre": "Nature & Ecology Documentaries"
        },
        {
            "netflix_id": 49547,
            "genre": "Nature & Ecology Docuseries"
        },
        {
            "netflix_id": 81404209,
            "genre": "Nollywood"
        },
        {
            "netflix_id": 1138254,
            "genre": "Nollywood Films"
        },
        {
            "netflix_id": 78655,
            "genre": "Nordic Comedies"
        },
        {
            "netflix_id": 78628,
            "genre": "Nordic Dramas"
        },
        {
            "netflix_id": 78141,
            "genre": "Nordic Movies"
        },
        {
            "netflix_id": 78634,
            "genre": "Nordic TV Shows"
        },
        {
            "netflix_id": 61132,
            "genre": "Norwegian Comedies"
        },
        {
            "netflix_id": 78463,
            "genre": "Norwegian Crime Movies"
        },
        {
            "netflix_id": 62235,
            "genre": "Norwegian Dramas"
        },
        {
            "netflix_id": 62510,
            "genre": "Norwegian Films"
        },
        {
            "netflix_id": 78507,
            "genre": "Norwegian Thrillers"
        },
        {
            "netflix_id": 1827694,
            "genre": "Owarai & Variety Shows"
        },
        {
            "netflix_id": 2778638,
            "genre": "Pakistani Films"
        },
        {
            "netflix_id": 8883,
            "genre": "Películas románticas"
        },
        {
            "netflix_id": 75418,
            "genre": "Police Action & Adventure"
        },
        {
            "netflix_id": 79049,
            "genre": "Police Detective Movies"
        },
        {
            "netflix_id": 75436,
            "genre": "Police Movies"
        },
        {
            "netflix_id": 75390,
            "genre": "Police Thrillers"
        },
        {
            "netflix_id": 75392,
            "genre": "Police TV Shows"
        },
        {
            "netflix_id": 81422107,
            "genre": "Polish"
        },
        {
            "netflix_id": 6102,
            "genre": "Polish Comedies"
        },
        {
            "netflix_id": 11729,
            "genre": "Polish Dramas"
        },
        {
            "netflix_id": 6299,
            "genre": "Polish Films"
        },
        {
            "netflix_id": 6047,
            "genre": "Polish Thrillers"
        },
        {
            "netflix_id": 1622170,
            "genre": "Polish TV Programmes"
        },
        {
            "netflix_id": 2700,
            "genre": "Political Comedies"
        },
        {
            "netflix_id": 7018,
            "genre": "Political Documentaries"
        },
        {
            "netflix_id": 10504,
            "genre": "Political Thrillers"
        },
        {
            "netflix_id": 55087,
            "genre": "Political TV Documentaries"
        },
        {
            "netflix_id": 25807,
            "genre": "Political TV Programmes"
        },
        {
            "netflix_id": 77230,
            "genre": "Politically Incorrect Stand-up Comedy"
        },
        {
            "netflix_id": 83,
            "genre": "Programas de TV y series"
        },
        {
            "netflix_id": 4809,
            "genre": "Psychological Horror Films"
        },
        {
            "netflix_id": 5505,
            "genre": "Psychological Thrillers"
        },
        {
            "netflix_id": 58982,
            "genre": "Punjabi-language Films"
        },
        {
            "netflix_id": 36103,
            "genre": "Quirky Romance"
        },
        {
            "netflix_id": 5756,
            "genre": "Raunchy Comedies"
        },
        {
            "netflix_id": 9833,
            "genre": "Reality Programmes"
        },
        {
            "netflix_id": 2070390,
            "genre": "Reality, Variety & Talk Shows"
        },
        {
            "netflix_id": 10005,
            "genre": "Religious Documentaries"
        },
        {
            "netflix_id": 1408777,
            "genre": "Retro Anime"
        },
        {
            "netflix_id": 3278,
            "genre": "Rock & Pop"
        },
        {
            "netflix_id": 4649,
            "genre": "Rockumentaries"
        },
        {
            "netflix_id": 1522234,
            "genre": "Romance Anime"
        },
        {
            "netflix_id": 26156,
            "genre": "Romance Programmes"
        },
        {
            "netflix_id": 502675,
            "genre": "Romances de siempre"
        },
        {
            "netflix_id": 81448928,
            "genre": "Romanian"
        },
        {
            "netflix_id": 61924,
            "genre": "Romanian Movies"
        },
        {
            "netflix_id": 10455,
            "genre": "Romantic British Films"
        },
        {
            "netflix_id": 81216629,
            "genre": "Romantic Comedy Anime"
        },
        {
            "netflix_id": 61656,
            "genre": "Romantic Danish Movies"
        },
        {
            "netflix_id": 62752,
            "genre": "Romantic Dutch Movies"
        },
        {
            "netflix_id": 89712,
            "genre": "Romantic European Movies"
        },
        {
            "netflix_id": 3830,
            "genre": "Romantic Films based on a book"
        },
        {
            "netflix_id": 58900,
            "genre": "Romantic French Films"
        },
        {
            "netflix_id": 3329,
            "genre": "Romantic Gay & Lesbian Films"
        },
        {
            "netflix_id": 9916,
            "genre": "Romantic Independent Films"
        },
        {
            "netflix_id": 1474327,
            "genre": "Romantic International Movies"
        },
        {
            "netflix_id": 1295410,
            "genre": "Romantic International TV Shows"
        },
        {
            "netflix_id": 7908,
            "genre": "Romantic Italian Films"
        },
        {
            "netflix_id": 17241,
            "genre": "Romantic Japanese Films"
        },
        {
            "netflix_id": 1458609,
            "genre": "Romantic Japanese TV Shows"
        },
        {
            "netflix_id": 16890,
            "genre": "Romantic Korean Movies"
        },
        {
            "netflix_id": 78250,
            "genre": "Romantic Nordic Movies"
        },
        {
            "netflix_id": 9257,
            "genre": "Romantic Tearjerkers"
        },
        {
            "netflix_id": 1630981,
            "genre": "Romantic Turkish Movies"
        },
        {
            "netflix_id": 26049,
            "genre": "Romantic TV Comedies"
        },
        {
            "netflix_id": 26056,
            "genre": "Romantic TV Dramas"
        },
        {
            "netflix_id": 26052,
            "genre": "Romantic TV Soaps"
        },
        {
            "netflix_id": 1655810,
            "genre": "Romantic Youth Drama"
        },
        {
            "netflix_id": 11567,
            "genre": "Russian"
        },
        {
            "netflix_id": 81427763,
            "genre": "Russian"
        },
        {
            "netflix_id": 1769574,
            "genre": "Russian TV Programmes"
        },
        {
            "netflix_id": 6998,
            "genre": "Satanic Stories"
        },
        {
            "netflix_id": 4922,
            "genre": "Satires"
        },
        {
            "netflix_id": 11755,
            "genre": "Scandinavian Comedies"
        },
        {
            "netflix_id": 1884,
            "genre": "Scandinavian Crime Films"
        },
        {
            "netflix_id": 2696,
            "genre": "Scandinavian Dramas"
        },
        {
            "netflix_id": 9292,
            "genre": "Scandinavian Films"
        },
        {
            "netflix_id": 69192,
            "genre": "Scandinavian Independent Movies"
        },
        {
            "netflix_id": 1321,
            "genre": "Scandinavian Thrillers"
        },
        {
            "netflix_id": 76802,
            "genre": "Scandinavian TV"
        },
        {
            "netflix_id": 1623841,
            "genre": "School Anime"
        },
        {
            "netflix_id": 108533,
            "genre": "Sci-Fi"
        },
        {
            "netflix_id": 1492,
            "genre": "Sci-Fi & Fantasy"
        },
        {
            "netflix_id": 6926,
            "genre": "Sci-Fi Adventure"
        },
        {
            "netflix_id": 3916,
            "genre": "Sci-Fi Dramas"
        },
        {
            "netflix_id": 3276033,
            "genre": "Sci-Fi Films"
        },
        {
            "netflix_id": 1694,
            "genre": "Sci-Fi Horror Films"
        },
        {
            "netflix_id": 11014,
            "genre": "Sci-Fi Thrillers"
        },
        {
            "netflix_id": 3300242,
            "genre": "Sci-Fi TV"
        },
        {
            "netflix_id": 2595,
            "genre": "Science & Nature Docs"
        },
        {
            "netflix_id": 52780,
            "genre": "Science & Nature TV"
        },
        {
            "netflix_id": 49110,
            "genre": "Science & Technology Documentaries"
        },
        {
            "netflix_id": 50232,
            "genre": "Science & Technology Docuseries"
        },
        {
            "netflix_id": 9702,
            "genre": "Screwball Comedies"
        },
        {
            "netflix_id": 2913945,
            "genre": "Seinen Anime"
        },
        {
            "netflix_id": 3292470,
            "genre": "Shoujo Anime"
        },
        {
            "netflix_id": 2867624,
            "genre": "Shounen Anime"
        },
        {
            "netflix_id": 25485,
            "genre": "Showbiz Documentaries"
        },
        {
            "netflix_id": 5012,
            "genre": "Showbiz Dramas"
        },
        {
            "netflix_id": 13573,
            "genre": "Showbiz Musicals"
        },
        {
            "netflix_id": 53310,
            "genre": "Silent Films"
        },
        {
            "netflix_id": 81422108,
            "genre": "Singaporean"
        },
        {
            "netflix_id": 81306797,
            "genre": "Singaporean Movies"
        },
        {
            "netflix_id": 1830680,
            "genre": "Singaporean Programmes"
        },
        {
            "netflix_id": 3903,
            "genre": "Sitcoms"
        },
        {
            "netflix_id": 10256,
            "genre": "Slapstick Comedies"
        },
        {
            "netflix_id": 8646,
            "genre": "Slasher & Serial Killer Movies"
        },
        {
            "netflix_id": 1519826,
            "genre": "Slice of Life Anime"
        },
        {
            "netflix_id": 3215,
            "genre": "Soccer Non-fiction"
        },
        {
            "netflix_id": 3675,
            "genre": "Social & Cultural Docs"
        },
        {
            "netflix_id": 3947,
            "genre": "Social Issue Dramas"
        },
        {
            "netflix_id": 2691116,
            "genre": "Social Issue TV Dramas"
        },
        {
            "netflix_id": 1159504,
            "genre": "South African Films"
        },
        {
            "netflix_id": 81300456,
            "genre": "South African TV Shows"
        },
        {
            "netflix_id": 9196,
            "genre": "Southeast Asian Films"
        },
        {
            "netflix_id": 81399657,
            "genre": "Spanish"
        },
        {
            "netflix_id": 61330,
            "genre": "Spanish Comedies"
        },
        {
            "netflix_id": 58796,
            "genre": "Spanish Dramas"
        },
        {
            "netflix_id": 58741,
            "genre": "Spanish Films"
        },
        {
            "netflix_id": 65558,
            "genre": "Spanish Thrillers"
        },
        {
            "netflix_id": 1193084,
            "genre": "Spanish TV Programmes"
        },
        {
            "netflix_id": 67675,
            "genre": "Spanish-Language TV Shows"
        },
        {
            "netflix_id": 6814,
            "genre": "Special Interest"
        },
        {
            "netflix_id": 2760,
            "genre": "Spiritual Documentaries"
        },
        {
            "netflix_id": 9327,
            "genre": "Sports & Fitness"
        },
        {
            "netflix_id": 1622375,
            "genre": "Sports Anime"
        },
        {
            "netflix_id": 5286,
            "genre": "Sports Comedies"
        },
        {
            "netflix_id": 180,
            "genre": "Sports Documentaries"
        },
        {
            "netflix_id": 7243,
            "genre": "Sports Dramas"
        },
        {
            "netflix_id": 4370,
            "genre": "Sports Films"
        },
        {
            "netflix_id": 10702,
            "genre": "Spy Action & Adventure"
        },
        {
            "netflix_id": 2477,
            "genre": "Spy Movies"
        },
        {
            "netflix_id": 9147,
            "genre": "Spy Thrillers"
        },
        {
            "netflix_id": 1516534,
            "genre": "Stand-up & Chat Shows"
        },
        {
            "netflix_id": 11559,
            "genre": "Stand-up Comedy"
        },
        {
            "netflix_id": 794,
            "genre": "Steamy Dramas"
        },
        {
            "netflix_id": 29281,
            "genre": "Steamy Romance"
        },
        {
            "netflix_id": 35800,
            "genre": "Steamy Romantic Films"
        },
        {
            "netflix_id": 972,
            "genre": "Steamy Thrillers"
        },
        {
            "netflix_id": 67698,
            "genre": "Superheroes"
        },
        {
            "netflix_id": 42023,
            "genre": "Supernatural Horror Films"
        },
        {
            "netflix_id": 11140,
            "genre": "Supernatural Thrillers"
        },
        {
            "netflix_id": 8933,
            "genre": "Suspenses"
        },
        {
            "netflix_id": 81418154,
            "genre": "Swedish"
        },
        {
            "netflix_id": 63092,
            "genre": "Swedish Comedies"
        },
        {
            "netflix_id": 62140,
            "genre": "Swedish Dramas"
        },
        {
            "netflix_id": 62016,
            "genre": "Swedish Films"
        },
        {
            "netflix_id": 76793,
            "genre": "Swedish TV Programmes"
        },
        {
            "netflix_id": 81417804,
            "genre": "Taiwanese"
        },
        {
            "netflix_id": 1461905,
            "genre": "Taiwanese Movies"
        },
        {
            "netflix_id": 667429,
            "genre": "Taiwanese TV Programmes"
        },
        {
            "netflix_id": 3030851,
            "genre": "Talk Shows"
        },
        {
            "netflix_id": 61904,
            "genre": "Tamil-Language Films"
        },
        {
            "netflix_id": 1412508,
            "genre": "Tear-jerking Romantic Movies"
        },
        {
            "netflix_id": 6384,
            "genre": "Tearjerkers"
        },
        {
            "netflix_id": 9299,
            "genre": "Teen Dramas"
        },
        {
            "netflix_id": 2340,
            "genre": "Teen Films"
        },
        {
            "netflix_id": 60951,
            "genre": "Teen Programmes"
        },
        {
            "netflix_id": 53915,
            "genre": "Teen Romance"
        },
        {
            "netflix_id": 52147,
            "genre": "Teen Screams"
        },
        {
            "netflix_id": 61091,
            "genre": "Teen TV Dramas"
        },
        {
            "netflix_id": 63676,
            "genre": "Telugu-Language Films"
        },
        {
            "netflix_id": 81422109,
            "genre": "Thai"
        },
        {
            "netflix_id": 63315,
            "genre": "Thai Action & Adventure"
        },
        {
            "netflix_id": 60724,
            "genre": "Thai Comedies"
        },
        {
            "netflix_id": 62116,
            "genre": "Thai Dramas"
        },
        {
            "netflix_id": 61205,
            "genre": "Thai Films"
        },
        {
            "netflix_id": 65209,
            "genre": "Thai Horror Films"
        },
        {
            "netflix_id": 2699150,
            "genre": "Thai TV Programmes"
        },
        {
            "netflix_id": 10832,
            "genre": "Theater Arts"
        },
        {
            "netflix_id": 1663282,
            "genre": "Thriller & Horror Anime"
        },
        {
            "netflix_id": 89811,
            "genre": "Thriller Programmes"
        },
        {
            "netflix_id": 651,
            "genre": "Thrillers based on a book"
        },
        {
            "netflix_id": 75448,
            "genre": "Time Travel Sci-Fi & Fantasy"
        },
        {
            "netflix_id": 2071073,
            "genre": "Tokusatsu Heroes"
        },
        {
            "netflix_id": 1159,
            "genre": "Travel & Adventure Documentaries"
        },
        {
            "netflix_id": 48762,
            "genre": "Travel & Adventure Reality TV"
        },
        {
            "netflix_id": 81050,
            "genre": "True Crime Documentaries"
        },
        {
            "netflix_id": 81417808,
            "genre": "Turkish"
        },
        {
            "netflix_id": 1133134,
            "genre": "Turkish Comedies"
        },
        {
            "netflix_id": 1133135,
            "genre": "Turkish Dramas"
        },
        {
            "netflix_id": 1133133,
            "genre": "Turkish Films"
        },
        {
            "netflix_id": 1295701,
            "genre": "Turkish TV Shows"
        },
        {
            "netflix_id": 7992,
            "genre": "TV Animated Comedies"
        },
        {
            "netflix_id": 7539,
            "genre": "TV Comedy Dramas"
        },
        {
            "netflix_id": 1819198,
            "genre": "TV Dramas based on Comics"
        },
        {
            "netflix_id": 1819174,
            "genre": "TV Programmes Based on Books"
        },
        {
            "netflix_id": 2951909,
            "genre": "TV Programmes Based on Manga"
        },
        {
            "netflix_id": 2192320,
            "genre": "TV Shows based on Comics"
        },
        {
            "netflix_id": 5610,
            "genre": "TV Sketch Comedies"
        },
        {
            "netflix_id": 10634,
            "genre": "TV Soaps"
        },
        {
            "netflix_id": 52904,
            "genre": "TV Teen Dramas"
        },
        {
            "netflix_id": 11627,
            "genre": "TV Variety & Chat Shows"
        },
        {
            "netflix_id": 9472,
            "genre": "Urban & Dance"
        },
        {
            "netflix_id": 2247011,
            "genre": "Urdu Films"
        },
        {
            "netflix_id": 1159493,
            "genre": "US Movies"
        },
        {
            "netflix_id": 75445,
            "genre": "US Police TV Shows"
        },
        {
            "netflix_id": 72407,
            "genre": "US TV Comedies"
        },
        {
            "netflix_id": 72384,
            "genre": "US TV Documentaries"
        },
        {
            "netflix_id": 72354,
            "genre": "US TV Dramas"
        },
        {
            "netflix_id": 75804,
            "genre": "Vampire Horror Films"
        },
        {
            "netflix_id": 2070675,
            "genre": "Variety Entertainment"
        },
        {
            "netflix_id": 81329745,
            "genre": "Variety TV"
        },
        {
            "netflix_id": 61336,
            "genre": "Vietnamese Films"
        },
        {
            "netflix_id": 50103,
            "genre": "Wedding & Romance Reality TV"
        },
        {
            "netflix_id": 75930,
            "genre": "Werewolf Horror Films"
        },
        {
            "netflix_id": 7700,
            "genre": "Westerns"
        },
        {
            "netflix_id": 2856,
            "genre": "World Music"
        },
        {
            "netflix_id": 70023,
            "genre": "WWII Films"
        },
        {
            "netflix_id": 1502288,
            "genre": "Youth Drama"
        },
        {
            "netflix_id": 75405,
            "genre": "Zombie Horror Films"
        },

      {
          "netflix_id": 12739,
          "genre": "20th Century Period Pieces"
      },
      {
          "netflix_id": 77213,
          "genre": "Absurd Comedies"
      },
      {
          "netflix_id": 51063,
          "genre": "Academy Award-Winning Films"
      },
      {
          "netflix_id": 1365,
          "genre": "Acción y aventuras"
      },
      {
          "netflix_id": 2125,
          "genre": "Acción y aventuras militares"
      },
      {
          "netflix_id": 801362,
          "genre": "Action"
      },
      {
          "netflix_id": 10673,
          "genre": "Action & Adventure Programmes"
      },
      {
          "netflix_id": 2653,
          "genre": "Action Anime"
      },
      {
          "netflix_id": 43040,
          "genre": "Action Comedies"
      },
      {
          "netflix_id": 1568,
          "genre": "Action Sci-Fi & Fantasy"
      },
      {
          "netflix_id": 43048,
          "genre": "Action Thrillers"
      },
      {
          "netflix_id": 788212,
          "genre": "Actionkrimis"
      },
      {
          "netflix_id": 11881,
          "genre": "Adult Animation"
      },
      {
          "netflix_id": 7442,
          "genre": "Adventures"
      },
      {
          "netflix_id": 3761,
          "genre": "African Films"
      },
      {
          "netflix_id": 4906,
          "genre": "African-American Comedies"
      },
      {
          "netflix_id": 10778,
          "genre": "African-American Stand-up Comedy"
      },
      {
          "netflix_id": 3327,
          "genre": "Alien Sci-Fi"
      },
      {
          "netflix_id": 12123,
          "genre": "Ambientadas en otra época"
      },
      {
          "netflix_id": 72404,
          "genre": "American Programmes"
      },
      {
          "netflix_id": 5507,
          "genre": "Animal Tales"
      },
      {
          "netflix_id": 786708,
          "genre": "Animated Movies"
      },
      {
          "netflix_id": 4698,
          "genre": "Animation"
      },
      {
          "netflix_id": 7424,
          "genre": "Anime"
      },
      {
          "netflix_id": 1819777,
          "genre": "Anime based on a Video Game"
      },
      {
          "netflix_id": 1819776,
          "genre": "Anime based on Books"
      },
      {
          "netflix_id": 2316199,
          "genre": "Anime based on Comics"
      },
      {
          "netflix_id": 2867325,
          "genre": "Anime Based on Light Novels"
      },
      {
          "netflix_id": 9302,
          "genre": "Anime Comedies"
      },
      {
          "netflix_id": 452,
          "genre": "Anime Dramas"
      },
      {
          "netflix_id": 11146,
          "genre": "Anime Fantasies"
      },
      {
          "netflix_id": 3063,
          "genre": "Anime Feature Films"
      },
      {
          "netflix_id": 2797624,
          "genre": "Anime for Gamers"
      },
      {
          "netflix_id": 10695,
          "genre": "Anime Horror Films"
      },
      {
          "netflix_id": 2246382,
          "genre": "Anime released in 2017"
      },
      {
          "netflix_id": 2729,
          "genre": "Anime Sci-Fi"
      },
      {
          "netflix_id": 1433679,
          "genre": "Anime Sci-Fi & Fantasy"
      },
      {
          "netflix_id": 6721,
          "genre": "Anime Series"
      },
      {
          "netflix_id": 6133,
          "genre": "Argentinian Films"
      },
      {
          "netflix_id": 69616,
          "genre": "Argentinian TV Shows"
      },
      {
          "netflix_id": 29764,
          "genre": "Art House Films"
      },
      {
          "netflix_id": 77232,
          "genre": "Asian Action Films"
      },
      {
          "netflix_id": 78104,
          "genre": "Asian Movies"
      },
      {
          "netflix_id": 78103,
          "genre": "Asian Programmes"
      },
      {
          "netflix_id": 81427741,
          "genre": "Australian"
      },
      {
          "netflix_id": 2030,
          "genre": "Australian Comedies"
      },
      {
          "netflix_id": 17672,
          "genre": "Australian Documentaries"
      },
      {
          "netflix_id": 11075,
          "genre": "Australian Dramas"
      },
      {
          "netflix_id": 5230,
          "genre": "Australian Films"
      },
      {
          "netflix_id": 10719,
          "genre": "Australian Thrillers"
      },
      {
          "netflix_id": 52387,
          "genre": "Australian TV Programmes"
      },
      {
          "netflix_id": 89844,
          "genre": "Award-films"
      },
      {
          "netflix_id": 89804,
          "genre": "Award-winning Dramas"
      },
      {
          "netflix_id": 8195,
          "genre": "B-Horror Films"
      },
      {
          "netflix_id": 2300348,
          "genre": "Baeksang Arts Awards Winners"
      },
      {
          "netflix_id": 69946,
          "genre": "BAFTA Award-Winning Films"
      },
      {
          "netflix_id": 27346,
          "genre": "Barne-TV"
      },
      {
          "netflix_id": 12339,
          "genre": "Baseball Films"
      },
      {
          "netflix_id": 12762,
          "genre": "Basketball Films"
      },
      {
          "netflix_id": 81427743,
          "genre": "Belgian"
      },
      {
          "netflix_id": 262,
          "genre": "Belgian Films"
      },
      {
          "netflix_id": 60594,
          "genre": "Bengali-language Films"
      },
      {
          "netflix_id": 846815,
          "genre": "Berlin Film Festival Award-winning Movies"
      },
      {
          "netflix_id": 3652,
          "genre": "Biographical Documentaries"
      },
      {
          "netflix_id": 3179,
          "genre": "Biographical Dramas"
      },
      {
          "netflix_id": 1096,
          "genre": "Biographical Movies"
      },
      {
          "netflix_id": 90176,
          "genre": "Blockbuster Action & Adventure"
      },
      {
          "netflix_id": 90139,
          "genre": "Blockbuster Movies"
      },
      {
          "netflix_id": 90166,
          "genre": "Blockbuster Sci-Fi & Fantasy"
      },
      {
          "netflix_id": 2300054,
          "genre": "Blue Dragon Film Award-winning Movies"
      },
      {
          "netflix_id": 5480,
          "genre": "Bollywood Films"
      },
      {
          "netflix_id": 12443,
          "genre": "Boxing Films"
      },
      {
          "netflix_id": 81417793,
          "genre": "Brazilian"
      },
      {
          "netflix_id": 17648,
          "genre": "Brazilian Comedies"
      },
      {
          "netflix_id": 28269,
          "genre": "Brazilian Documentaries"
      },
      {
          "netflix_id": 4425,
          "genre": "Brazilian Dramas"
      },
      {
          "netflix_id": 798,
          "genre": "Brazilian Films"
      },
      {
          "netflix_id": 84488,
          "genre": "Brazilian Music & Musicals"
      },
      {
          "netflix_id": 84489,
          "genre": "Brazilian Music and Concert Movies"
      },
      {
          "netflix_id": 69624,
          "genre": "Brazilian TV Programmes"
      },
      {
          "netflix_id": 10757,
          "genre": "Britische Filme"
      },
      {
          "netflix_id": 81399656,
          "genre": "British"
      },
      {
          "netflix_id": 1302,
          "genre": "British Action & Adventure"
      },
      {
          "netflix_id": 1009,
          "genre": "British Comedies"
      },
      {
          "netflix_id": 6051,
          "genre": "British Crime Films"
      },
      {
          "netflix_id": 3682,
          "genre": "British Dramas"
      },
      {
          "netflix_id": 52508,
          "genre": "British Miniseries"
      },
      {
          "netflix_id": 12433,
          "genre": "British Period Pieces"
      },
      {
          "netflix_id": 52117,
          "genre": "British Programmes"
      },
      {
          "netflix_id": 1774,
          "genre": "British Thrillers"
      },
      {
          "netflix_id": 52140,
          "genre": "British TV Comedies"
      },
      {
          "netflix_id": 52148,
          "genre": "British TV Dramas"
      },
      {
          "netflix_id": 52120,
          "genre": "British TV Mysteries"
      },
      {
          "netflix_id": 28134,
          "genre": "Buddy Comedies"
      },
      {
          "netflix_id": 81427748,
          "genre": "Bulgarian"
      },
      {
          "netflix_id": 1252,
          "genre": "Camp Films"
      },
      {
          "netflix_id": 81418152,
          "genre": "Canadian"
      },
      {
          "netflix_id": 56174,
          "genre": "Canadian Comedies"
      },
      {
          "netflix_id": 56178,
          "genre": "Canadian Documentaries"
      },
      {
          "netflix_id": 56169,
          "genre": "Canadian Dramas"
      },
      {
          "netflix_id": 56181,
          "genre": "Canadian Films"
      },
      {
          "netflix_id": 56184,
          "genre": "Canadian Independent Films"
      },
      {
          "netflix_id": 58704,
          "genre": "Canadian TV Programmes"
      },
      {
          "netflix_id": 846810,
          "genre": "Cannes Film Festival Award-winning Movies"
      },
      {
          "netflix_id": 702387,
          "genre": "Cannes Film Festival Winners"
      },
      {
          "netflix_id": 783,
          "genre": "Children & Family Films"
      },
      {
          "netflix_id": 1305303,
          "genre": "Chilean Films & TV"
      },
      {
          "netflix_id": 90848,
          "genre": "Chilling Horror Films"
      },
      {
          "netflix_id": 80353,
          "genre": "Chinese  Programmes"
      },
      {
          "netflix_id": 8999,
          "genre": "Chinese Action & Adventure"
      },
      {
          "netflix_id": 9229,
          "genre": "Chinese Comedies"
      },
      {
          "netflix_id": 5572,
          "genre": "Chinese Dramas"
      },
      {
          "netflix_id": 3960,
          "genre": "Chinese Films"
      },
      {
          "netflix_id": 1372,
          "genre": "Ciencia ficción y fantasía para TV"
      },
      {
          "netflix_id": 46576,
          "genre": "Classic Action & Adventure"
      },
      {
          "netflix_id": 46560,
          "genre": "Classic British Films"
      },
      {
          "netflix_id": 48586,
          "genre": "Classic Children & Family Films"
      },
      {
          "netflix_id": 31694,
          "genre": "Classic Comedies"
      },
      {
          "netflix_id": 29809,
          "genre": "Classic Dramas"
      },
      {
          "netflix_id": 31574,
          "genre": "Classic Films"
      },
      {
          "netflix_id": 48303,
          "genre": "Classic Horror Films"
      },
      {
          "netflix_id": 1476390,
          "genre": "Classic International Movies"
      },
      {
          "netflix_id": 31853,
          "genre": "Classic Japanese Movies"
      },
      {
          "netflix_id": 32392,
          "genre": "Classic Musicals"
      },
      {
          "netflix_id": 31273,
          "genre": "Classic Romantic Films"
      },
      {
          "netflix_id": 47147,
          "genre": "Classic Sci-Fi & Fantasy"
      },
      {
          "netflix_id": 46588,
          "genre": "Classic Thrillers"
      },
      {
          "netflix_id": 46553,
          "genre": "Classic TV Programmes"
      },
      {
          "netflix_id": 48744,
          "genre": "Classic War Films"
      },
      {
          "netflix_id": 47465,
          "genre": "Classic Westerns"
      },
      {
          "netflix_id": 69636,
          "genre": "Colombian Movies"
      },
      {
          "netflix_id": 69622,
          "genre": "Colombian TV Programmes"
      },
      {
          "netflix_id": 6548,
          "genre": "Comedias"
      },
      {
          "netflix_id": 3519,
          "genre": "Comedias adolescentes"
      },
      {
          "netflix_id": 9434,
          "genre": "Comedias de culto"
      },
      {
          "netflix_id": 4195,
          "genre": "Comedias independientes"
      },
      {
          "netflix_id": 5475,
          "genre": "Comedias románticas"
      },
      {
          "netflix_id": 1003219,
          "genre": "Comedy Blockbusters"
      },
      {
          "netflix_id": 78163,
          "genre": "Comedy Jams"
      },
      {
          "netflix_id": 10375,
          "genre": "Comedy Programmes"
      },
      {
          "netflix_id": 53717,
          "genre": "Comic Book & Superhero TV"
      },
      {
          "netflix_id": 10118,
          "genre": "Comic Book and Superhero Films"
      },
      {
          "netflix_id": 49266,
          "genre": "Competition Reality TV"
      },
      {
          "netflix_id": 81248636,
          "genre": "Concerts"
      },
      {
          "netflix_id": 1105,
          "genre": "Country & Western/Folk"
      },
      {
          "netflix_id": 2748,
          "genre": "Courtroom Dramas"
      },
      {
          "netflix_id": 10714,
          "genre": "Courtroom Films"
      },
      {
          "netflix_id": 25955,
          "genre": "Courtroom TV Dramas"
      },
      {
          "netflix_id": 6895,
          "genre": "Creature Features"
      },
      {
          "netflix_id": 9584,
          "genre": "Crime Action & Adventure"
      },
      {
          "netflix_id": 4058,
          "genre": "Crime Comedies"
      },
      {
          "netflix_id": 9875,
          "genre": "Crime Documentaries"
      },
      {
          "netflix_id": 26126,
          "genre": "Crime Docuseries"
      },
      {
          "netflix_id": 6889,
          "genre": "Crime Dramas"
      },
      {
          "netflix_id": 5824,
          "genre": "Crime Films"
      },
      {
          "netflix_id": 10185,
          "genre": "Crime Films based on real life"
      },
      {
          "netflix_id": 26146,
          "genre": "Crime Programmes"
      },
      {
          "netflix_id": 10499,
          "genre": "Crime Thrillers"
      },
      {
          "netflix_id": 26009,
          "genre": "Crime TV Dramas"
      },
      {
          "netflix_id": 37938,
          "genre": "Crime TV Soaps"
      },
      {
          "netflix_id": 9736,
          "genre": "Critically Acclaimed Comedies"
      },
      {
          "netflix_id": 6206,
          "genre": "Critically Acclaimed Dramas"
      },
      {
          "netflix_id": 3979,
          "genre": "Critically Acclaimed Films"
      },
      {
          "netflix_id": 899,
          "genre": "Critically-acclaimed Action & Adventure"
      },
      {
          "netflix_id": 8673,
          "genre": "Critically-acclaimed Documentaries"
      },
      {
          "netflix_id": 875,
          "genre": "Critically-acclaimed Independent Films"
      },
      {
          "netflix_id": 5903,
          "genre": "Critically-acclaimed Sci-Fi & Fantasy"
      },
      {
          "netflix_id": 7627,
          "genre": "Cult Films"
      },
      {
          "netflix_id": 10944,
          "genre": "Cult Horror Films"
      },
      {
          "netflix_id": 4734,
          "genre": "Cult Sci-Fi & Fantasy"
      },
      {
          "netflix_id": 74652,
          "genre": "Cult TV Programmes"
      },
      {
          "netflix_id": 1964512,
          "genre": "Cyberpunk"
      },
      {
          "netflix_id": 1522235,
          "genre": "Cyborg & Robot Anime"
      },
      {
          "netflix_id": 81444566,
          "genre": "Czech"
      },
      {
          "netflix_id": 1697,
          "genre": "Czech Movies"
      },
      {
          "netflix_id": 8451,
          "genre": "Dance"
      },
      {
          "netflix_id": 59169,
          "genre": "Danish Comedies"
      },
      {
          "netflix_id": 58700,
          "genre": "Danish Films"
      },
      {
          "netflix_id": 77951,
          "genre": "Danish TV Shows"
      },
      {
          "netflix_id": 869,
          "genre": "Dark Comedies"
      },
      {
          "netflix_id": 45028,
          "genre": "Deep Sea Horror Films"
      },
      {
          "netflix_id": 11177,
          "genre": "Dibujos animados"
      },
      {
          "netflix_id": 67673,
          "genre": "Disney"
      },
      {
          "netflix_id": 65218,
          "genre": "Disney Family Features"
      },
      {
          "netflix_id": 65437,
          "genre": "Disney Films"
      },
      {
          "netflix_id": 6839,
          "genre": "Documentaries"
      },
      {
          "netflix_id": 2243108,
          "genre": "Documentaries"
      },
      {
          "netflix_id": 10105,
          "genre": "Documentary Programmes"
      },
      {
          "netflix_id": 5763,
          "genre": "Drama"
      },
      {
          "netflix_id": 11714,
          "genre": "Drama Programmes"
      },
      {
          "netflix_id": 3653,
          "genre": "Dramas basados en la vida real"
      },
      {
          "netflix_id": 4961,
          "genre": "Dramas baseados em livros"
      },
      {
          "netflix_id": 13158,
          "genre": "Dramas based on classic literature"
      },
      {
          "netflix_id": 12994,
          "genre": "Dramas based on contemporary literature"
      },
      {
          "netflix_id": 11,
          "genre": "Dramas militares"
      },
      {
          "netflix_id": 75459,
          "genre": "Dramas policiais"
      },
      {
          "netflix_id": 6616,
          "genre": "Dramas políticos"
      },
      {
          "netflix_id": 1255,
          "genre": "Dramas románticos"
      },
      {
          "netflix_id": 81422104,
          "genre": "Dutch"
      },
      {
          "netflix_id": 89513,
          "genre": "Dutch Children & Family Movies"
      },
      {
          "netflix_id": 79871,
          "genre": "Dutch Comedies"
      },
      {
          "netflix_id": 9873,
          "genre": "Dutch Dramas"
      },
      {
          "netflix_id": 10606,
          "genre": "Dutch Films"
      },
      {
          "netflix_id": 89442,
          "genre": "Dutch TV Shows"
      },
      {
          "netflix_id": 5254,
          "genre": "Eastern European Films"
      },
      {
          "netflix_id": 10659,
          "genre": "Educación y orientación"
      },
      {
          "netflix_id": 81444569,
          "genre": "Egyptian"
      },
      {
          "netflix_id": 81237077,
          "genre": "Egyptian Movies"
      },
      {
          "netflix_id": 81257861,
          "genre": "Egyptian TV Shows"
      },
      {
          "netflix_id": 52858,
          "genre": "Epics"
      },
      {
          "netflix_id": 89682,
          "genre": "European Comedies"
      },
      {
          "netflix_id": 89680,
          "genre": "European Dramas"
      },
      {
          "netflix_id": 89708,
          "genre": "European Movies"
      },
      {
          "netflix_id": 89692,
          "genre": "European Thrillers"
      },
      {
          "netflix_id": 89663,
          "genre": "European TV Shows"
      },
      {
          "netflix_id": 11079,
          "genre": "Experimental Films"
      },
      {
          "netflix_id": 26835,
          "genre": "Faith & Spirituality"
      },
      {
          "netflix_id": 52804,
          "genre": "Faith & Spirituality Films"
      },
      {
          "netflix_id": 52855,
          "genre": "Familieavonturen"
      },
      {
          "netflix_id": 52847,
          "genre": "Familiecomedy"
      },
      {
          "netflix_id": 58879,
          "genre": "Family Animation"
      },
      {
          "netflix_id": 2245805,
          "genre": "Family Cozy Time"
      },
      {
          "netflix_id": 31901,
          "genre": "Family Dramas"
      },
      {
          "netflix_id": 51058,
          "genre": "Family Feature Animation"
      },
      {
          "netflix_id": 51056,
          "genre": "Family Features"
      },
      {
          "netflix_id": 52849,
          "genre": "Family Sci-Fi & Fantasy"
      },
      {
          "netflix_id": 2072262,
          "genre": "Family Watch Together TV"
      },
      {
          "netflix_id": 9744,
          "genre": "Fantasy"
      },
      {
          "netflix_id": 1002031,
          "genre": "Fantasy TV Programmes"
      },
      {
          "netflix_id": 77599,
          "genre": "Female Stand-up Comedy"
      },
      {
          "netflix_id": 107985,
          "genre": "Festive Favourites"
      },
      {
          "netflix_id": 81422106,
          "genre": "Filipino"
      },
      {
          "netflix_id": 10869,
          "genre": "Filipino Films"
      },
      {
          "netflix_id": 80380,
          "genre": "Filipino TV Shows"
      },
      {
          "netflix_id": 7687,
          "genre": "Film Noir"
      },
      {
          "netflix_id": 31851,
          "genre": "Filmes sobre máfia"
      },
      {
          "netflix_id": 9889,
          "genre": "Films Based on Books"
      },
      {
          "netflix_id": 10056,
          "genre": "Films based on childrens books"
      },
      {
          "netflix_id": 920,
          "genre": "Films Based on Real Life"
      },
      {
          "netflix_id": 6796,
          "genre": "Films for ages 0 to 2"
      },
      {
          "netflix_id": 6962,
          "genre": "Films for ages 11 to 12"
      },
      {
          "netflix_id": 6218,
          "genre": "Films for ages 2 to 4"
      },
      {
          "netflix_id": 5455,
          "genre": "Films for ages 5 to 7"
      },
      {
          "netflix_id": 561,
          "genre": "Films for ages 8 to 10"
      },
      {
          "netflix_id": 62285,
          "genre": "Finnish Movies"
      },
      {
          "netflix_id": 78503,
          "genre": "Finnish TV Shows"
      },
      {
          "netflix_id": 1515639,
          "genre": "Food & Travel Docs"
      },
      {
          "netflix_id": 72436,
          "genre": "Food & Travel TV"
      },
      {
          "netflix_id": 3890,
          "genre": "Food & Wine"
      },
      {
          "netflix_id": 12803,
          "genre": "Football Films"
      },
      {
          "netflix_id": 12549,
          "genre": "Football Films"
      },
      {
          "netflix_id": 4426,
          "genre": "Foreign Comedies"
      },
      {
          "netflix_id": 5161,
          "genre": "Foreign Documentaries"
      },
      {
          "netflix_id": 10306,
          "genre": "Foreign Thrillers"
      },
      {
          "netflix_id": 58807,
          "genre": "Franse films"
      },
      {
          "netflix_id": 81399454,
          "genre": "French"
      },
      {
          "netflix_id": 58905,
          "genre": "French Comedies"
      },
      {
          "netflix_id": 58710,
          "genre": "French Documentaries"
      },
      {
          "netflix_id": 58677,
          "genre": "French Dramas"
      },
      {
          "netflix_id": 58798,
          "genre": "French Thrillers"
      },
      {
          "netflix_id": 62041,
          "genre": "French TV Programmes"
      },
      {
          "netflix_id": 1626246,
          "genre": "Futuristic Sci-Fi"
      },
      {
          "netflix_id": 30140,
          "genre": "Gangster Action & Adventure"
      },
      {
          "netflix_id": 7120,
          "genre": "Gay & Lesbian Comedies"
      },
      {
          "netflix_id": 4720,
          "genre": "Gay & Lesbian Documentaries"
      },
      {
          "netflix_id": 500,
          "genre": "Gay & Lesbian Dramas"
      },
      {
          "netflix_id": 5977,
          "genre": "Gay & Lesbian Films"
      },
      {
          "netflix_id": 65263,
          "genre": "Gay & Lesbian TV Programmes"
      },
      {
          "netflix_id": 81417795,
          "genre": "German"
      },
      {
          "netflix_id": 63115,
          "genre": "German Comedies"
      },
      {
          "netflix_id": 61695,
          "genre": "German Crime Movies"
      },
      {
          "netflix_id": 63286,
          "genre": "German Documentaries"
      },
      {
          "netflix_id": 58755,
          "genre": "German Dramas"
      },
      {
          "netflix_id": 58886,
          "genre": "German Films"
      },
      {
          "netflix_id": 65198,
          "genre": "German TV Programmes"
      },
      {
          "netflix_id": 82489,
          "genre": "Golden Globe Award-winning Films"
      },
      {
          "netflix_id": 6197,
          "genre": "Goofy Comedies"
      },
      {
          "netflix_id": 9509,
          "genre": "Gory Horror Films"
      },
      {
          "netflix_id": 27756,
          "genre": "Heist Action & Adventure"
      },
      {
          "netflix_id": 27018,
          "genre": "Heist Films"
      },
      {
          "netflix_id": 58806,
          "genre": "Hindi-Language Films"
      },
      {
          "netflix_id": 80307,
          "genre": "Hindi-language TV Programmes"
      },
      {
          "netflix_id": 6073,
          "genre": "Hip-Hop"
      },
      {
          "netflix_id": 2075446,
          "genre": "Historical Anime"
      },
      {
          "netflix_id": 5349,
          "genre": "Historical Documentaries"
      },
      {
          "netflix_id": 71591,
          "genre": "Historical Dramas"
      },
      {
          "netflix_id": 71590,
          "genre": "Historical Films"
      },
      {
          "netflix_id": 1023212,
          "genre": "Home & Garden Reality TV"
      },
      {
          "netflix_id": 58676,
          "genre": "Hong Kong Films"
      },
      {
          "netflix_id": 89585,
          "genre": "Horror Comedies"
      },
      {
          "netflix_id": 8711,
          "genre": "Horror Films"
      },
      {
          "netflix_id": 83059,
          "genre": "Horror Programmes"
      },
      {
          "netflix_id": 81448926,
          "genre": "Hungarian"
      },
      {
          "netflix_id": 59954,
          "genre": "Hungarian Movies"
      },
      {
          "netflix_id": 11804,
          "genre": "Independent Action & Adventure"
      },
      {
          "netflix_id": 384,
          "genre": "Independent Dramas"
      },
      {
          "netflix_id": 7077,
          "genre": "Independent Films"
      },
      {
          "netflix_id": 3269,
          "genre": "Independent Thrillers"
      },
      {
          "netflix_id": 81418683,
          "genre": "Indian"
      },
      {
          "netflix_id": 9942,
          "genre": "Indian Comedies"
      },
      {
          "netflix_id": 5051,
          "genre": "Indian Dramas"
      },
      {
          "netflix_id": 10463,
          "genre": "Indian Films"
      },
      {
          "netflix_id": 59872,
          "genre": "Indian Programmes"
      },
      {
          "netflix_id": 81458611,
          "genre": "Indonesian"
      },
      {
          "netflix_id": 2867320,
          "genre": "Indonesian Films"
      },
      {
          "netflix_id": 78367,
          "genre": "Internationaal"
      },
      {
          "netflix_id": 852490,
          "genre": "International Action & Adventure"
      },
      {
          "netflix_id": 852492,
          "genre": "International Comedies"
      },
      {
          "netflix_id": 852494,
          "genre": "International Documentaries"
      },
      {
          "netflix_id": 852493,
          "genre": "International Dramas"
      },
      {
          "netflix_id": 1208621,
          "genre": "International Historical TV Dramas"
      },
      {
          "netflix_id": 1475312,
          "genre": "International Horror Movies"
      },
      {
          "netflix_id": 1218090,
          "genre": "International Kids TV"
      },
      {
          "netflix_id": 1475315,
          "genre": "International Period Pieces"
      },
      {
          "netflix_id": 1195213,
          "genre": "International Programmes"
      },
      {
          "netflix_id": 2070375,
          "genre": "International Reality, Talk & Variety Shows"
      },
      {
          "netflix_id": 852491,
          "genre": "International Sci-Fi & Fantasy"
      },
      {
          "netflix_id": 852488,
          "genre": "International Thrillers"
      },
      {
          "netflix_id": 1208951,
          "genre": "International TV Comedies"
      },
      {
          "netflix_id": 1208954,
          "genre": "International TV Dramas"
      },
      {
          "netflix_id": 1192483,
          "genre": "International TV Sci-Fi & Fantasy"
      },
      {
          "netflix_id": 1461986,
          "genre": "International TV Thrillers & Mysteries"
      },
      {
          "netflix_id": 48785,
          "genre": "Investigative Reality TV"
      },
      {
          "netflix_id": 58750,
          "genre": "Irish Films"
      },
      {
          "netflix_id": 11039,
          "genre": "Irreverent Stand-up Comedy"
      },
      {
          "netflix_id": 2710229,
          "genre": "Israeli TV Shows"
      },
      {
          "netflix_id": 81417798,
          "genre": "Italian"
      },
      {
          "netflix_id": 3300,
          "genre": "Italian Comedies"
      },
      {
          "netflix_id": 4282,
          "genre": "Italian Dramas"
      },
      {
          "netflix_id": 8221,
          "genre": "Italian Films"
      },
      {
          "netflix_id": 6867,
          "genre": "Italian Thrillers"
      },
      {
          "netflix_id": 62866,
          "genre": "Italian TV Programmes"
      },
      {
          "netflix_id": 81418687,
          "genre": "Japanese"
      },
      {
          "netflix_id": 1293326,
          "genre": "Japanese Academy Award-winning Movies"
      },
      {
          "netflix_id": 4344,
          "genre": "Japanese Action & Adventure"
      },
      {
          "netflix_id": 1747,
          "genre": "Japanese Comedies"
      },
      {
          "netflix_id": 1650093,
          "genre": "Japanese Documentary Movies"
      },
      {
          "netflix_id": 2893,
          "genre": "Japanese Dramas"
      },
      {
          "netflix_id": 10398,
          "genre": "Japanese Films"
      },
      {
          "netflix_id": 31244,
          "genre": "Japanese Gangster Movies"
      },
      {
          "netflix_id": 10750,
          "genre": "Japanese Horror Films"
      },
      {
          "netflix_id": 65925,
          "genre": "Japanese Kids TV"
      },
      {
          "netflix_id": 1519160,
          "genre": "Japanese Movies based on Comics"
      },
      {
          "netflix_id": 1402191,
          "genre": "Japanese Period Dramas"
      },
      {
          "netflix_id": 64256,
          "genre": "Japanese Programmes"
      },
      {
          "netflix_id": 6000,
          "genre": "Japanese Sci-Fi & Fantasy"
      },
      {
          "netflix_id": 799,
          "genre": "Japanese Thrillers"
      },
      {
          "netflix_id": 711366,
          "genre": "Japanese TV Comedies"
      },
      {
          "netflix_id": 1648599,
          "genre": "Japanese TV Documentaries"
      },
      {
          "netflix_id": 711367,
          "genre": "Japanese TV Dramas"
      },
      {
          "netflix_id": 1592212,
          "genre": "Japanese TV Reality & Variety"
      },
      {
          "netflix_id": 1461923,
          "genre": "Japanese TV Sci-Fi & Fantasy"
      },
      {
          "netflix_id": 2691923,
          "genre": "Japanese TV Series"
      },
      {
          "netflix_id": 1627743,
          "genre": "Japanese TV Shows Based on Comics"
      },
      {
          "netflix_id": 1138506,
          "genre": "Japanese TV Thrillers"
      },
      {
          "netflix_id": 1652485,
          "genre": "Japanese Youth Dramas"
      },
      {
          "netflix_id": 2070663,
          "genre": "Japanese Youth TV Dramas"
      },
      {
          "netflix_id": 10271,
          "genre": "Jazz & Easy Listening"
      },
      {
          "netflix_id": 2638104,
          "genre": "K-dramas"
      },
      {
          "netflix_id": 2936382,
          "genre": "K-dramas based on Webtoon"
      },
      {
          "netflix_id": 413820,
          "genre": "Kids Anime"
      },
      {
          "netflix_id": 751423,
          "genre": "Kids Faith & Spirituality"
      },
      {
          "netflix_id": 52843,
          "genre": "Kids Music"
      },
      {
          "netflix_id": 28233,
          "genre": "Kids TV for ages 0 to 2"
      },
      {
          "netflix_id": 27950,
          "genre": "Kids TV for ages 11 to 12"
      },
      {
          "netflix_id": 27480,
          "genre": "Kids TV for ages 2 to 4"
      },
      {
          "netflix_id": 28034,
          "genre": "Kids TV for ages 5 to 7"
      },
      {
          "netflix_id": 28083,
          "genre": "Kids TV for ages 8 to 10"
      },
      {
          "netflix_id": 81427756,
          "genre": "Korean"
      },
      {
          "netflix_id": 8248,
          "genre": "Korean Action & Adventure"
      },
      {
          "netflix_id": 6626,
          "genre": "Korean Comedies"
      },
      {
          "netflix_id": 1989,
          "genre": "Korean Drama Movies"
      },
      {
          "netflix_id": 5685,
          "genre": "Korean Films"
      },
      {
          "netflix_id": 67879,
          "genre": "Korean Programmes"
      },
      {
          "netflix_id": 2072269,
          "genre": "Korean Reality, Variety & Talk Shows"
      },
      {
          "netflix_id": 11283,
          "genre": "Korean Thrillers"
      },
      {
          "netflix_id": 68699,
          "genre": "Korean TV Dramas"
      },
      {
          "netflix_id": 1402,
          "genre": "Late Night Comedies"
      },
      {
          "netflix_id": 3996,
          "genre": "Latin American Comedies"
      },
      {
          "netflix_id": 15456,
          "genre": "Latin American Documentaries"
      },
      {
          "netflix_id": 6763,
          "genre": "Latin American Dramas"
      },
      {
          "netflix_id": 1613,
          "genre": "Latin American Films"
      },
      {
          "netflix_id": 88635,
          "genre": "Latin American Music & Musicals"
      },
      {
          "netflix_id": 67708,
          "genre": "Latin American TV Programmes"
      },
      {
          "netflix_id": 10741,
          "genre": "Latin Music"
      },
      {
          "netflix_id": 1333288,
          "genre": "Laugh-Out-Loud Comedies"
      },
      {
          "netflix_id": 2738568,
          "genre": "Lifestyle"
      },
      {
          "netflix_id": 74253,
          "genre": "Little Kids"
      },
      {
          "netflix_id": 2199520,
          "genre": "Mainland Chinese Movies"
      },
      {
          "netflix_id": 2199564,
          "genre": "Mainland Chinese TV Shows"
      },
      {
          "netflix_id": 49296,
          "genre": "Makeover Reality TV"
      },
      {
          "netflix_id": 59849,
          "genre": "Malayalam-Language Films"
      },
      {
          "netflix_id": 81458634,
          "genre": "Malaysian"
      },
      {
          "netflix_id": 3057773,
          "genre": "Malaysian Films"
      },
      {
          "netflix_id": 2199042,
          "genre": "Malaysian Programmes"
      },
      {
          "netflix_id": 2190064,
          "genre": "Marathi-language Films"
      },
      {
          "netflix_id": 8985,
          "genre": "Martial Arts Films"
      },
      {
          "netflix_id": 6695,
          "genre": "Martial Arts, Boxing & Wrestling"
      },
      {
          "netflix_id": 34204,
          "genre": "Medical TV Dramas"
      },
      {
          "netflix_id": 81417800,
          "genre": "Mexican"
      },
      {
          "netflix_id": 105,
          "genre": "Mexican Comedies"
      },
      {
          "netflix_id": 2757,
          "genre": "Mexican Dramas"
      },
      {
          "netflix_id": 7825,
          "genre": "Mexican Films"
      },
      {
          "netflix_id": 67644,
          "genre": "Mexican TV Programmes"
      },
      {
          "netflix_id": 5875,
          "genre": "Middle Eastern Movies"
      },
      {
          "netflix_id": 1476847,
          "genre": "Middle Eastern TV Programmes"
      },
      {
          "netflix_id": 76501,
          "genre": "Military & War Action & Adventure"
      },
      {
          "netflix_id": 76507,
          "genre": "Military & War Dramas"
      },
      {
          "netflix_id": 76510,
          "genre": "Military & War Movies"
      },
      {
          "netflix_id": 4006,
          "genre": "Military Documentaries"
      },
      {
          "netflix_id": 5962,
          "genre": "Military Films"
      },
      {
          "netflix_id": 25804,
          "genre": "Military TV Programmes"
      },
      {
          "netflix_id": 81498,
          "genre": "Mind Game Thrillers"
      },
      {
          "netflix_id": 4814,
          "genre": "Miniseries"
      },
      {
          "netflix_id": 9994,
          "genre": "Mistérios"
      },
      {
          "netflix_id": 4366,
          "genre": "Misterios para TV"
      },
      {
          "netflix_id": 75415,
          "genre": "Mistérios policiais"
      },
      {
          "netflix_id": 26,
          "genre": "Mockumentaries"
      },
      {
          "netflix_id": 76186,
          "genre": "Modern Classic Movies"
      },
      {
          "netflix_id": 947,
          "genre": "Monster Films"
      },
      {
          "netflix_id": 1701,
          "genre": "Music"
      },
      {
          "netflix_id": 90361,
          "genre": "Music & Concert Documentaries"
      },
      {
          "netflix_id": 52852,
          "genre": "Music & Musicals"
      },
      {
          "netflix_id": 84483,
          "genre": "Music and Concert Films"
      },
      {
          "netflix_id": 13335,
          "genre": "Musicals"
      },
      {
          "netflix_id": 81216565,
          "genre": "Mystery & Thriller Anime"
      },
      {
          "netflix_id": 48768,
          "genre": "Nature & Ecology Documentaries"
      },
      {
          "netflix_id": 49547,
          "genre": "Nature & Ecology Docuseries"
      },
      {
          "netflix_id": 81404209,
          "genre": "Nollywood"
      },
      {
          "netflix_id": 1138254,
          "genre": "Nollywood Films"
      },
      {
          "netflix_id": 78655,
          "genre": "Nordic Comedies"
      },
      {
          "netflix_id": 78628,
          "genre": "Nordic Dramas"
      },
      {
          "netflix_id": 78141,
          "genre": "Nordic Movies"
      },
      {
          "netflix_id": 78634,
          "genre": "Nordic TV Shows"
      },
      {
          "netflix_id": 61132,
          "genre": "Norwegian Comedies"
      },
      {
          "netflix_id": 78463,
          "genre": "Norwegian Crime Movies"
      },
      {
          "netflix_id": 62235,
          "genre": "Norwegian Dramas"
      },
      {
          "netflix_id": 62510,
          "genre": "Norwegian Films"
      },
      {
          "netflix_id": 78507,
          "genre": "Norwegian Thrillers"
      },
      {
          "netflix_id": 1827694,
          "genre": "Owarai & Variety Shows"
      },
      {
          "netflix_id": 2778638,
          "genre": "Pakistani Films"
      },
      {
          "netflix_id": 8883,
          "genre": "Películas románticas"
      },
      {
          "netflix_id": 75418,
          "genre": "Police Action & Adventure"
      },
      {
          "netflix_id": 79049,
          "genre": "Police Detective Movies"
      },
      {
          "netflix_id": 75436,
          "genre": "Police Movies"
      },
      {
          "netflix_id": 75390,
          "genre": "Police Thrillers"
      },
      {
          "netflix_id": 75392,
          "genre": "Police TV Shows"
      },
      {
          "netflix_id": 81422107,
          "genre": "Polish"
      },
      {
          "netflix_id": 6102,
          "genre": "Polish Comedies"
      },
      {
          "netflix_id": 11729,
          "genre": "Polish Dramas"
      },
      {
          "netflix_id": 6299,
          "genre": "Polish Films"
      },
      {
          "netflix_id": 6047,
          "genre": "Polish Thrillers"
      },
      {
          "netflix_id": 1622170,
          "genre": "Polish TV Programmes"
      },
      {
          "netflix_id": 2700,
          "genre": "Political Comedies"
      },
      {
          "netflix_id": 7018,
          "genre": "Political Documentaries"
      },
      {
          "netflix_id": 10504,
          "genre": "Political Thrillers"
      },
      {
          "netflix_id": 55087,
          "genre": "Political TV Documentaries"
      },
      {
          "netflix_id": 25807,
          "genre": "Political TV Programmes"
      },
      {
          "netflix_id": 77230,
          "genre": "Politically Incorrect Stand-up Comedy"
      },
      {
          "netflix_id": 83,
          "genre": "Programas de TV y series"
      },
      {
          "netflix_id": 4809,
          "genre": "Psychological Horror Films"
      },
      {
          "netflix_id": 5505,
          "genre": "Psychological Thrillers"
      },
      {
          "netflix_id": 58982,
          "genre": "Punjabi-language Films"
      },
      {
          "netflix_id": 36103,
          "genre": "Quirky Romance"
      },
      {
          "netflix_id": 5756,
          "genre": "Raunchy Comedies"
      },
      {
          "netflix_id": 9833,
          "genre": "Reality Programmes"
      },
      {
          "netflix_id": 2070390,
          "genre": "Reality, Variety & Talk Shows"
      },
      {
          "netflix_id": 10005,
          "genre": "Religious Documentaries"
      },
      {
          "netflix_id": 1408777,
          "genre": "Retro Anime"
      },
      {
          "netflix_id": 3278,
          "genre": "Rock & Pop"
      },
      {
          "netflix_id": 4649,
          "genre": "Rockumentaries"
      },
      {
          "netflix_id": 1522234,
          "genre": "Romance Anime"
      },
      {
          "netflix_id": 26156,
          "genre": "Romance Programmes"
      },
      {
          "netflix_id": 502675,
          "genre": "Romances de siempre"
      },
      {
          "netflix_id": 81448928,
          "genre": "Romanian"
      },
      {
          "netflix_id": 61924,
          "genre": "Romanian Movies"
      },
      {
          "netflix_id": 10455,
          "genre": "Romantic British Films"
      },
      {
          "netflix_id": 81216629,
          "genre": "Romantic Comedy Anime"
      },
      {
          "netflix_id": 61656,
          "genre": "Romantic Danish Movies"
      },
      {
          "netflix_id": 62752,
          "genre": "Romantic Dutch Movies"
      },
      {
          "netflix_id": 89712,
          "genre": "Romantic European Movies"
      },
      {
          "netflix_id": 3830,
          "genre": "Romantic Films based on a book"
      },
      {
          "netflix_id": 58900,
          "genre": "Romantic French Films"
      },
      {
          "netflix_id": 3329,
          "genre": "Romantic Gay & Lesbian Films"
      },
      {
          "netflix_id": 9916,
          "genre": "Romantic Independent Films"
      },
      {
          "netflix_id": 1474327,
          "genre": "Romantic International Movies"
      },
      {
          "netflix_id": 1295410,
          "genre": "Romantic International TV Shows"
      },
      {
          "netflix_id": 7908,
          "genre": "Romantic Italian Films"
      },
      {
          "netflix_id": 17241,
          "genre": "Romantic Japanese Films"
      },
      {
          "netflix_id": 1458609,
          "genre": "Romantic Japanese TV Shows"
      },
      {
          "netflix_id": 16890,
          "genre": "Romantic Korean Movies"
      },
      {
          "netflix_id": 78250,
          "genre": "Romantic Nordic Movies"
      },
      {
          "netflix_id": 9257,
          "genre": "Romantic Tearjerkers"
      },
      {
          "netflix_id": 1630981,
          "genre": "Romantic Turkish Movies"
      },
      {
          "netflix_id": 26049,
          "genre": "Romantic TV Comedies"
      },
      {
          "netflix_id": 26056,
          "genre": "Romantic TV Dramas"
      },
      {
          "netflix_id": 26052,
          "genre": "Romantic TV Soaps"
      },
      {
          "netflix_id": 1655810,
          "genre": "Romantic Youth Drama"
      },
      {
          "netflix_id": 11567,
          "genre": "Russian"
      },
      {
          "netflix_id": 81427763,
          "genre": "Russian"
      },
      {
          "netflix_id": 1769574,
          "genre": "Russian TV Programmes"
      },
      {
          "netflix_id": 6998,
          "genre": "Satanic Stories"
      },
      {
          "netflix_id": 4922,
          "genre": "Satires"
      },
      {
          "netflix_id": 11755,
          "genre": "Scandinavian Comedies"
      },
      {
          "netflix_id": 1884,
          "genre": "Scandinavian Crime Films"
      },
      {
          "netflix_id": 2696,
          "genre": "Scandinavian Dramas"
      },
      {
          "netflix_id": 9292,
          "genre": "Scandinavian Films"
      },
      {
          "netflix_id": 69192,
          "genre": "Scandinavian Independent Movies"
      },
      {
          "netflix_id": 1321,
          "genre": "Scandinavian Thrillers"
      },
      {
          "netflix_id": 76802,
          "genre": "Scandinavian TV"
      },
      {
          "netflix_id": 1623841,
          "genre": "School Anime"
      },
      {
          "netflix_id": 108533,
          "genre": "Sci-Fi"
      },
      {
          "netflix_id": 1492,
          "genre": "Sci-Fi & Fantasy"
      },
      {
          "netflix_id": 6926,
          "genre": "Sci-Fi Adventure"
      },
      {
          "netflix_id": 3916,
          "genre": "Sci-Fi Dramas"
      },
      {
          "netflix_id": 3276033,
          "genre": "Sci-Fi Films"
      },
      {
          "netflix_id": 1694,
          "genre": "Sci-Fi Horror Films"
      },
      {
          "netflix_id": 11014,
          "genre": "Sci-Fi Thrillers"
      },
      {
          "netflix_id": 3300242,
          "genre": "Sci-Fi TV"
      },
      {
          "netflix_id": 2595,
          "genre": "Science & Nature Docs"
      },
      {
          "netflix_id": 52780,
          "genre": "Science & Nature TV"
      },
      {
          "netflix_id": 49110,
          "genre": "Science & Technology Documentaries"
      },
      {
          "netflix_id": 50232,
          "genre": "Science & Technology Docuseries"
      },
      {
          "netflix_id": 9702,
          "genre": "Screwball Comedies"
      },
      {
          "netflix_id": 2913945,
          "genre": "Seinen Anime"
      },
      {
          "netflix_id": 3292470,
          "genre": "Shoujo Anime"
      },
      {
          "netflix_id": 2867624,
          "genre": "Shounen Anime"
      },
      {
          "netflix_id": 25485,
          "genre": "Showbiz Documentaries"
      },
      {
          "netflix_id": 5012,
          "genre": "Showbiz Dramas"
      },
      {
          "netflix_id": 13573,
          "genre": "Showbiz Musicals"
      },
      {
          "netflix_id": 53310,
          "genre": "Silent Films"
      },
      {
          "netflix_id": 81422108,
          "genre": "Singaporean"
      },
      {
          "netflix_id": 81306797,
          "genre": "Singaporean Movies"
      },
      {
          "netflix_id": 1830680,
          "genre": "Singaporean Programmes"
      },
      {
          "netflix_id": 3903,
          "genre": "Sitcoms"
      },
      {
          "netflix_id": 10256,
          "genre": "Slapstick Comedies"
      },
      {
          "netflix_id": 8646,
          "genre": "Slasher & Serial Killer Movies"
      },
      {
          "netflix_id": 1519826,
          "genre": "Slice of Life Anime"
      },
      {
          "netflix_id": 3215,
          "genre": "Soccer Non-fiction"
      },
      {
          "netflix_id": 3675,
          "genre": "Social & Cultural Docs"
      },
      {
          "netflix_id": 3947,
          "genre": "Social Issue Dramas"
      },
      {
          "netflix_id": 2691116,
          "genre": "Social Issue TV Dramas"
      },
      {
          "netflix_id": 1159504,
          "genre": "South African Films"
      },
      {
          "netflix_id": 81300456,
          "genre": "South African TV Shows"
      },
      {
          "netflix_id": 9196,
          "genre": "Southeast Asian Films"
      },
      {
          "netflix_id": 81399657,
          "genre": "Spanish"
      },
      {
          "netflix_id": 61330,
          "genre": "Spanish Comedies"
      },
      {
          "netflix_id": 58796,
          "genre": "Spanish Dramas"
      },
      {
          "netflix_id": 58741,
          "genre": "Spanish Films"
      },
      {
          "netflix_id": 65558,
          "genre": "Spanish Thrillers"
      },
      {
          "netflix_id": 1193084,
          "genre": "Spanish TV Programmes"
      },
      {
          "netflix_id": 67675,
          "genre": "Spanish-Language TV Shows"
      },
      {
          "netflix_id": 6814,
          "genre": "Special Interest"
      },
      {
          "netflix_id": 2760,
          "genre": "Spiritual Documentaries"
      },
      {
          "netflix_id": 9327,
          "genre": "Sports & Fitness"
      },
      {
          "netflix_id": 1622375,
          "genre": "Sports Anime"
      },
      {
          "netflix_id": 5286,
          "genre": "Sports Comedies"
      },
      {
          "netflix_id": 180,
          "genre": "Sports Documentaries"
      },
      {
          "netflix_id": 7243,
          "genre": "Sports Dramas"
      },
      {
          "netflix_id": 4370,
          "genre": "Sports Films"
      },
      {
          "netflix_id": 10702,
          "genre": "Spy Action & Adventure"
      },
      {
          "netflix_id": 2477,
          "genre": "Spy Movies"
      },
      {
          "netflix_id": 9147,
          "genre": "Spy Thrillers"
      },
      {
          "netflix_id": 1516534,
          "genre": "Stand-up & Chat Shows"
      },
      {
          "netflix_id": 11559,
          "genre": "Stand-up Comedy"
      },
      {
          "netflix_id": 794,
          "genre": "Steamy Dramas"
      },
      {
          "netflix_id": 29281,
          "genre": "Steamy Romance"
      },
      {
          "netflix_id": 35800,
          "genre": "Steamy Romantic Films"
      },
      {
          "netflix_id": 972,
          "genre": "Steamy Thrillers"
      },
      {
          "netflix_id": 67698,
          "genre": "Superheroes"
      },
      {
          "netflix_id": 42023,
          "genre": "Supernatural Horror Films"
      },
      {
          "netflix_id": 11140,
          "genre": "Supernatural Thrillers"
      },
      {
          "netflix_id": 8933,
          "genre": "Suspenses"
      },
      {
          "netflix_id": 81418154,
          "genre": "Swedish"
      },
      {
          "netflix_id": 63092,
          "genre": "Swedish Comedies"
      },
      {
          "netflix_id": 62140,
          "genre": "Swedish Dramas"
      },
      {
          "netflix_id": 62016,
          "genre": "Swedish Films"
      },
      {
          "netflix_id": 76793,
          "genre": "Swedish TV Programmes"
      },
      {
          "netflix_id": 81417804,
          "genre": "Taiwanese"
      },
      {
          "netflix_id": 1461905,
          "genre": "Taiwanese Movies"
      },
      {
          "netflix_id": 667429,
          "genre": "Taiwanese TV Programmes"
      },
      {
          "netflix_id": 3030851,
          "genre": "Talk Shows"
      },
      {
          "netflix_id": 61904,
          "genre": "Tamil-Language Films"
      },
      {
          "netflix_id": 1412508,
          "genre": "Tear-jerking Romantic Movies"
      },
      {
          "netflix_id": 6384,
          "genre": "Tearjerkers"
      },
      {
          "netflix_id": 9299,
          "genre": "Teen Dramas"
      },
      {
          "netflix_id": 2340,
          "genre": "Teen Films"
      },
      {
          "netflix_id": 60951,
          "genre": "Teen Programmes"
      },
      {
          "netflix_id": 53915,
          "genre": "Teen Romance"
      },
      {
          "netflix_id": 52147,
          "genre": "Teen Screams"
      },
      {
          "netflix_id": 61091,
          "genre": "Teen TV Dramas"
      },
      {
          "netflix_id": 63676,
          "genre": "Telugu-Language Films"
      },
      {
          "netflix_id": 81422109,
          "genre": "Thai"
      },
      {
          "netflix_id": 63315,
          "genre": "Thai Action & Adventure"
      },
      {
          "netflix_id": 60724,
          "genre": "Thai Comedies"
      },
      {
          "netflix_id": 62116,
          "genre": "Thai Dramas"
      },
      {
          "netflix_id": 61205,
          "genre": "Thai Films"
      },
      {
          "netflix_id": 65209,
          "genre": "Thai Horror Films"
      },
      {
          "netflix_id": 2699150,
          "genre": "Thai TV Programmes"
      },
      {
          "netflix_id": 10832,
          "genre": "Theater Arts"
      },
      {
          "netflix_id": 1663282,
          "genre": "Thriller & Horror Anime"
      },
      {
          "netflix_id": 89811,
          "genre": "Thriller Programmes"
      },
      {
          "netflix_id": 651,
          "genre": "Thrillers based on a book"
      },
      {
          "netflix_id": 75448,
          "genre": "Time Travel Sci-Fi & Fantasy"
      },
      {
          "netflix_id": 2071073,
          "genre": "Tokusatsu Heroes"
      },
      {
          "netflix_id": 1159,
          "genre": "Travel & Adventure Documentaries"
      },
      {
          "netflix_id": 48762,
          "genre": "Travel & Adventure Reality TV"
      },
      {
          "netflix_id": 81050,
          "genre": "True Crime Documentaries"
      },
      {
          "netflix_id": 81417808,
          "genre": "Turkish"
      },
      {
          "netflix_id": 1133134,
          "genre": "Turkish Comedies"
      },
      {
          "netflix_id": 1133135,
          "genre": "Turkish Dramas"
      },
      {
          "netflix_id": 1133133,
          "genre": "Turkish Films"
      },
      {
          "netflix_id": 1295701,
          "genre": "Turkish TV Shows"
      },
      {
          "netflix_id": 7992,
          "genre": "TV Animated Comedies"
      },
      {
          "netflix_id": 7539,
          "genre": "TV Comedy Dramas"
      },
      {
          "netflix_id": 1819198,
          "genre": "TV Dramas based on Comics"
      },
      {
          "netflix_id": 1819174,
          "genre": "TV Programmes Based on Books"
      },
      {
          "netflix_id": 2951909,
          "genre": "TV Programmes Based on Manga"
      },
      {
          "netflix_id": 2192320,
          "genre": "TV Shows based on Comics"
      },
      {
          "netflix_id": 5610,
          "genre": "TV Sketch Comedies"
      },
      {
          "netflix_id": 10634,
          "genre": "TV Soaps"
      },
      {
          "netflix_id": 52904,
          "genre": "TV Teen Dramas"
      },
      {
          "netflix_id": 11627,
          "genre": "TV Variety & Chat Shows"
      },
      {
          "netflix_id": 9472,
          "genre": "Urban & Dance"
      },
      {
          "netflix_id": 2247011,
          "genre": "Urdu Films"
      },
      {
          "netflix_id": 1159493,
          "genre": "US Movies"
      },
      {
          "netflix_id": 75445,
          "genre": "US Police TV Shows"
      },
      {
          "netflix_id": 72407,
          "genre": "US TV Comedies"
      },
      {
          "netflix_id": 72384,
          "genre": "US TV Documentaries"
      },
      {
          "netflix_id": 72354,
          "genre": "US TV Dramas"
      },
      {
          "netflix_id": 75804,
          "genre": "Vampire Horror Films"
      },
      {
          "netflix_id": 2070675,
          "genre": "Variety Entertainment"
      },
      {
          "netflix_id": 81329745,
          "genre": "Variety TV"
      },
      {
          "netflix_id": 61336,
          "genre": "Vietnamese Films"
      },
      {
          "netflix_id": 50103,
          "genre": "Wedding & Romance Reality TV"
      },
      {
          "netflix_id": 75930,
          "genre": "Werewolf Horror Films"
      },
      {
          "netflix_id": 7700,
          "genre": "Westerns"
      },
      {
          "netflix_id": 2856,
          "genre": "World Music"
      },
      {
          "netflix_id": 70023,
          "genre": "WWII Films"
      },
      {
          "netflix_id": 1502288,
          "genre": "Youth Drama"
      },
      {
          "netflix_id": 75405,
          "genre": "Zombie Horror Films"
      }
  ]
let genreHash = {}
let newObject = (results.map(ele =>({[ele.genre]:ele.netflix_id})))
for (let i = 0; i < newObject.length; i++) {
  const single = newObject[i];
  // console.log(single)
  let key = Object.keys(single)[0]
  let value = Object.values(single)[0]
  // console.log(key,value)
  genreHash[key] = value
}

console.log(genreHash)

let genreKeySearchValue = {
  "20th Century Period Pieces": 12739,
  "Absurd Comedies": 77213,
  "Academy Award-Winning Films": 51063,
  "Acción y aventuras": 1365,
  "Acción y aventuras militares": 2125,
  "Action": 801362,
  "Action & Adventure Programmes": 10673,
  "Action Anime": 2653,
  "Action Comedies": 43040,
  "Action Sci-Fi & Fantasy": 1568,
  "Action Thrillers": 43048,
  "Actionkrimis": 788212,
  "Adult Animation": 11881,
  "Adventures": 7442,
  "African Films": 3761,
  "African-American Comedies": 4906,
  "African-American Stand-up Comedy": 10778,
  "Alien Sci-Fi": 3327,
  "Ambientadas en otra época": 12123,
  "American Programmes": 72404,
  "Animal Tales": 5507,
  "Animated Movies": 786708,
  "Animation": 4698,
  "Anime": 7424,
  "Anime based on a Video Game": 1819777,
  "Anime based on Books": 1819776,
  "Anime based on Comics": 2316199,
  "Anime Based on Light Novels": 2867325,
  "Anime Comedies": 9302,
  "Anime Dramas": 452,
  "Anime Fantasies": 11146,
  "Anime Feature Films": 3063,
  "Anime for Gamers": 2797624,
  "Anime Horror Films": 10695,
  "Anime released in 2017": 2246382,
  "Anime Sci-Fi": 2729,
  "Anime Sci-Fi & Fantasy": 1433679,
  "Anime Series": 6721,
  "Argentinian Films": 6133,
  "Argentinian TV Shows": 69616,
  "Art House Films": 29764,
  "Asian Action Films": 77232,
  "Asian Movies": 78104,
  "Asian Programmes": 78103,
  "Australian": 81427741,
  "Australian Comedies": 2030,
  "Australian Documentaries": 17672,
  "Australian Dramas": 11075,
  "Australian Films": 5230,
  "Australian Thrillers": 10719,
  "Australian TV Programmes": 52387,
  "Award-films": 89844,
  "Award-winning Dramas": 89804,
  "B-Horror Films": 8195,
  "Baeksang Arts Awards Winners": 2300348,
  "BAFTA Award-Winning Films": 69946,
  "Barne-TV": 27346,
  "Baseball Films": 12339,
  "Basketball Films": 12762,
  "Belgian": 81427743,
  "Belgian Films": 262,
  "Bengali-language Films": 60594,
  "Berlin Film Festival Award-winning Movies": 846815,
  "Biographical Documentaries": 3652,
  "Biographical Dramas": 3179,
  "Biographical Movies": 1096,
  "Blockbuster Action & Adventure": 90176,
  "Blockbuster Movies": 90139,
  "Blockbuster Sci-Fi & Fantasy": 90166,
  "Blue Dragon Film Award-winning Movies": 2300054,
  "Bollywood Films": 5480,
  "Boxing Films": 12443,
  "Brazilian": 81417793,
  "Brazilian Comedies": 17648,
  "Brazilian Documentaries": 28269,
  "Brazilian Dramas": 4425,
  "Brazilian Films": 798,
  "Brazilian Music & Musicals": 84488,
  "Brazilian Music and Concert Movies": 84489,
  "Brazilian TV Programmes": 69624,
  "Britische Filme": 10757,
  "British": 81399656,
  "British Action & Adventure": 1302,
  "British Comedies": 1009,
  "British Crime Films": 6051,
  "British Dramas": 3682,
  "British Miniseries": 52508,
  "British Period Pieces": 12433,
  "British Programmes": 52117,
  "British Thrillers": 1774,
  "British TV Comedies": 52140,
  "British TV Dramas": 52148,
  "British TV Mysteries": 52120,
  "Buddy Comedies": 28134,
  "Bulgarian": 81427748,
  "Camp Films": 1252,
  "Canadian": 81418152,
  "Canadian Comedies": 56174,
  "Canadian Documentaries": 56178,
  "Canadian Dramas": 56169,
  "Canadian Films": 56181,
  "Canadian Independent Films": 56184,
  "Canadian TV Programmes": 58704,
  "Cannes Film Festival Award-winning Movies": 846810,
  "Cannes Film Festival Winners": 702387,
  "Children & Family Films": 783,
  "Chilean Films & TV": 1305303,
  "Chilling Horror Films": 90848,
  "Chinese  Programmes": 80353,
  "Chinese Action & Adventure": 8999,
  "Chinese Comedies": 9229,
  "Chinese Dramas": 5572,
  "Chinese Films": 3960,
  "Ciencia ficción y fantasía para TV": 1372,
  "Classic Action & Adventure": 46576,
  "Classic British Films": 46560,
  "Classic Children & Family Films": 48586,
  "Classic Comedies": 31694,
  "Classic Dramas": 29809,
  "Classic Films": 31574,
  "Classic Horror Films": 48303,
  "Classic International Movies": 1476390,
  "Classic Japanese Movies": 31853,
  "Classic Musicals": 32392,
  "Classic Romantic Films": 31273,
  "Classic Sci-Fi & Fantasy": 47147,
  "Classic Thrillers": 46588,
  "Classic TV Programmes": 46553,
  "Classic War Films": 48744,
  "Classic Westerns": 47465,
  "Colombian Movies": 69636,
  "Colombian TV Programmes": 69622,
  "Comedias": 6548,
  "Comedias adolescentes": 3519,
  "Comedias de culto": 9434,
  "Comedias independientes": 4195,
  "Comedias románticas": 5475,
  "Comedy Blockbusters": 1003219,
  "Comedy Jams": 78163,
  "Comedy Programmes": 10375,
  "Comic Book & Superhero TV": 53717,
  "Comic Book and Superhero Films": 10118,
  "Competition Reality TV": 49266,
  "Concerts": 81248636,
  "Country & Western/Folk": 1105,
  "Courtroom Dramas": 2748,
  "Courtroom Films": 10714,
  "Courtroom TV Dramas": 25955,
  "Creature Features": 6895,
  "Crime Action & Adventure": 9584,
  "Crime Comedies": 4058,
  "Crime Documentaries": 9875,
  "Crime Docuseries": 26126,
  "Crime Dramas": 6889,
  "Crime Films": 5824,
  "Crime Films based on real life": 10185,
  "Crime Programmes": 26146,
  "Crime Thrillers": 10499,
  "Crime TV Dramas": 26009,
  "Crime TV Soaps": 37938,
  "Critically Acclaimed Comedies": 9736,
  "Critically Acclaimed Dramas": 6206,
  "Critically Acclaimed Films": 3979,
  "Critically-acclaimed Action & Adventure": 899,
  "Critically-acclaimed Documentaries": 8673,
  "Critically-acclaimed Independent Films": 875,
  "Critically-acclaimed Sci-Fi & Fantasy": 5903,
  "Cult Films": 7627,
  "Cult Horror Films": 10944,
  "Cult Sci-Fi & Fantasy": 4734,
  "Cult TV Programmes": 74652,
  "Cyberpunk": 1964512,
  "Cyborg & Robot Anime": 1522235,
  "Czech": 81444566,
  "Czech Movies": 1697,
  "Dance": 8451,
  "Danish Comedies": 59169,
  "Danish Films": 58700,
  "Danish TV Shows": 77951,
  "Dark Comedies": 869,
  "Deep Sea Horror Films": 45028,
  "Dibujos animados": 11177,
  "Disney": 67673,
  "Disney Family Features": 65218,
  "Disney Films": 65437,
  "Documentaries": 2243108,
  "Documentary Programmes": 10105,
  "Drama": 5763,
  "Drama Programmes": 11714,
  "Dramas basados en la vida real": 3653,
  "Dramas baseados em livros": 4961,
  "Dramas based on classic literature": 13158,
  "Dramas based on contemporary literature": 12994,
  "Dramas militares": 11,
  "Dramas policiais": 75459,
  "Dramas políticos": 6616,
  "Dramas románticos": 1255,
  "Dutch": 81422104,
  "Dutch Children & Family Movies": 89513,
  "Dutch Comedies": 79871,
  "Dutch Dramas": 9873,
  "Dutch Films": 10606,
  "Dutch TV Shows": 89442,
  "Eastern European Films": 5254,
  "Educación y orientación": 10659,
  "Egyptian": 81444569,
  "Egyptian Movies": 81237077,
  "Egyptian TV Shows": 81257861,
  "Epics": 52858,
  "European Comedies": 89682,
  "European Dramas": 89680,
  "European Movies": 89708,
  "European Thrillers": 89692,
  "European TV Shows": 89663,
  "Experimental Films": 11079,
  "Faith & Spirituality": 26835,
  "Faith & Spirituality Films": 52804,
  "Familieavonturen": 52855,
  "Familiecomedy": 52847,
  "Family Animation": 58879,
  "Family Cozy Time": 2245805,
  "Family Dramas": 31901,
  "Family Feature Animation": 51058,
  "Family Features": 51056,
  "Family Sci-Fi & Fantasy": 52849,
  "Family Watch Together TV": 2072262,
  "Fantasy": 9744,
  "Fantasy TV Programmes": 1002031,
  "Female Stand-up Comedy": 77599,
  "Festive Favourites": 107985,
  "Filipino": 81422106,
  "Filipino Films": 10869,
  "Filipino TV Shows": 80380,
  "Film Noir": 7687,
  "Filmes sobre máfia": 31851,
  "Films Based on Books": 9889,
  "Films based on childrens books": 10056,
  "Films Based on Real Life": 920,
  "Films for ages 0 to 2": 6796,
  "Films for ages 11 to 12": 6962,
  "Films for ages 2 to 4": 6218,
  "Films for ages 5 to 7": 5455,
  "Films for ages 8 to 10": 561,
  "Finnish Movies": 62285,
  "Finnish TV Shows": 78503,
  "Food & Travel Docs": 1515639,
  "Food & Travel TV": 72436,
  "Food & Wine": 3890,
  "Football Films": 12549,
  "Foreign Comedies": 4426,
  "Foreign Documentaries": 5161,
  "Foreign Thrillers": 10306,
  "Franse films": 58807,
  "French": 81399454,
  "French Comedies": 58905,
  "French Documentaries": 58710,
  "French Dramas": 58677,
  "French Thrillers": 58798,
  "French TV Programmes": 62041,
  "Futuristic Sci-Fi": 1626246,
  "Gangster Action & Adventure": 30140,
  "Gay & Lesbian Comedies": 7120,
  "Gay & Lesbian Documentaries": 4720,
  "Gay & Lesbian Dramas": 500,
  "Gay & Lesbian Films": 5977,
  "Gay & Lesbian TV Programmes": 65263,
  "German": 81417795,
  "German Comedies": 63115,
  "German Crime Movies": 61695,
  "German Documentaries": 63286,
  "German Dramas": 58755,
  "German Films": 58886,
  "German TV Programmes": 65198,
  "Golden Globe Award-winning Films": 82489,
  "Goofy Comedies": 6197,
  "Gory Horror Films": 9509,
  "Heist Action & Adventure": 27756,
  "Heist Films": 27018,
  "Hindi-Language Films": 58806,
  "Hindi-language TV Programmes": 80307,
  "Hip-Hop": 6073,
  "Historical Anime": 2075446,
  "Historical Documentaries": 5349,
  "Historical Dramas": 71591,
  "Historical Films": 71590,
  "Home & Garden Reality TV": 1023212,
  "Hong Kong Films": 58676,
  "Horror Comedies": 89585,
  "Horror Films": 8711,
  "Horror Programmes": 83059,
  "Hungarian": 81448926,
  "Hungarian Movies": 59954,
  "Independent Action & Adventure": 11804,
  "Independent Dramas": 384,
  "Independent Films": 7077,
  "Independent Thrillers": 3269,
  "Indian": 81418683,
  "Indian Comedies": 9942,
  "Indian Dramas": 5051,
  "Indian Films": 10463,
  "Indian Programmes": 59872,
  "Indonesian": 81458611,
  "Indonesian Films": 2867320,
  "Internationaal": 78367,
  "International Action & Adventure": 852490,
  "International Comedies": 852492,
  "International Documentaries": 852494,
  "International Dramas": 852493,
  "International Historical TV Dramas": 1208621,
  "International Horror Movies": 1475312,
  "International Kids TV": 1218090,
  "International Period Pieces": 1475315,
  "International Programmes": 1195213,
  "International Reality, Talk & Variety Shows": 2070375,
  "International Sci-Fi & Fantasy": 852491,
  "International Thrillers": 852488,
  "International TV Comedies": 1208951,
  "International TV Dramas": 1208954,
  "International TV Sci-Fi & Fantasy": 1192483,
  "International TV Thrillers & Mysteries": 1461986,
  "Investigative Reality TV": 48785,
  "Irish Films": 58750,
  "Irreverent Stand-up Comedy": 11039,
  "Israeli TV Shows": 2710229,
  "Italian": 81417798,
  "Italian Comedies": 3300,
  "Italian Dramas": 4282,
  "Italian Films": 8221,
  "Italian Thrillers": 6867,
  "Italian TV Programmes": 62866,
  "Japanese": 81418687,
  "Japanese Academy Award-winning Movies": 1293326,
  "Japanese Action & Adventure": 4344,
  "Japanese Comedies": 1747,
  "Japanese Documentary Movies": 1650093,
  "Japanese Dramas": 2893,
  "Japanese Films": 10398,
  "Japanese Gangster Movies": 31244,
  "Japanese Horror Films": 10750,
  "Japanese Kids TV": 65925,
  "Japanese Movies based on Comics": 1519160,
  "Japanese Period Dramas": 1402191,
  "Japanese Programmes": 64256,
  "Japanese Sci-Fi & Fantasy": 6000,
  "Japanese Thrillers": 799,
  "Japanese TV Comedies": 711366,
  "Japanese TV Documentaries": 1648599,
  "Japanese TV Dramas": 711367,
  "Japanese TV Reality & Variety": 1592212,
  "Japanese TV Sci-Fi & Fantasy": 1461923,
  "Japanese TV Series": 2691923,
  "Japanese TV Shows Based on Comics": 1627743,
  "Japanese TV Thrillers": 1138506,
  "Japanese Youth Dramas": 1652485,
  "Japanese Youth TV Dramas": 2070663,
  "Jazz & Easy Listening": 10271,
  "K-dramas": 2638104,
  "K-dramas based on Webtoon": 2936382,
  "Kids Anime": 413820,
  "Kids Faith & Spirituality": 751423,
  "Kids Music": 52843,
  "Kids TV for ages 0 to 2": 28233,
  "Kids TV for ages 11 to 12": 27950,
  "Kids TV for ages 2 to 4": 27480,
  "Kids TV for ages 5 to 7": 28034,
  "Kids TV for ages 8 to 10": 28083,
  "Korean": 81427756,
  "Korean Action & Adventure": 8248,
  "Korean Comedies": 6626,
  "Korean Drama Movies": 1989,
  "Korean Films": 5685,
  "Korean Programmes": 67879,
  "Korean Reality, Variety & Talk Shows": 2072269,
  "Korean Thrillers": 11283,
  "Korean TV Dramas": 68699,
  "Late Night Comedies": 1402,
  "Latin American Comedies": 3996,
  "Latin American Documentaries": 15456,
  "Latin American Dramas": 6763,
  "Latin American Films": 1613,
  "Latin American Music & Musicals": 88635,
  "Latin American TV Programmes": 67708,
  "Latin Music": 10741,
  "Laugh-Out-Loud Comedies": 1333288,
  "Lifestyle": 2738568,
  "Little Kids": 74253,
  "Mainland Chinese Movies": 2199520,
  "Mainland Chinese TV Shows": 2199564,
  "Makeover Reality TV": 49296,
  "Malayalam-Language Films": 59849,
  "Malaysian": 81458634,
  "Malaysian Films": 3057773,
  "Malaysian Programmes": 2199042,
  "Marathi-language Films": 2190064,
  "Martial Arts Films": 8985,
  "Martial Arts, Boxing & Wrestling": 6695,
  "Medical TV Dramas": 34204,
  "Mexican": 81417800,
  "Mexican Comedies": 105,
  "Mexican Dramas": 2757,
  "Mexican Films": 7825,
  "Mexican TV Programmes": 67644,
  "Middle Eastern Movies": 5875,
  "Middle Eastern TV Programmes": 1476847,
  "Military & War Action & Adventure": 76501,
  "Military & War Dramas": 76507,
  "Military & War Movies": 76510,
  "Military Documentaries": 4006,
  "Military Films": 5962,
  "Military TV Programmes": 25804,
  "Mind Game Thrillers": 81498,
  "Miniseries": 4814,
  "Mistérios": 9994,
  "Misterios para TV": 4366,
  "Mistérios policiais": 75415,
  "Mockumentaries": 26,
  "Modern Classic Movies": 76186,
  "Monster Films": 947,
  "Music": 1701,
  "Music & Concert Documentaries": 90361,
  "Music & Musicals": 52852,
  "Music and Concert Films": 84483,
  "Musicals": 13335,
  "Mystery & Thriller Anime": 81216565,
  "Nature & Ecology Documentaries": 48768,
  "Nature & Ecology Docuseries": 49547,
  "Nollywood": 81404209,
  "Nollywood Films": 1138254,
  "Nordic Comedies": 78655,
  "Nordic Dramas": 78628,
  "Nordic Movies": 78141,
  "Nordic TV Shows": 78634,
  "Norwegian Comedies": 61132,
  "Norwegian Crime Movies": 78463,
  "Norwegian Dramas": 62235,
  "Norwegian Films": 62510,
  "Norwegian Thrillers": 78507,
  "Owarai & Variety Shows": 1827694,
  "Pakistani Films": 2778638,
  "Películas románticas": 8883,
  "Police Action & Adventure": 75418,
  "Police Detective Movies": 79049,
  "Police Movies": 75436,
  "Police Thrillers": 75390,
  "Police TV Shows": 75392,
  "Polish": 81422107,
  "Polish Comedies": 6102,
  "Polish Dramas": 11729,
  "Polish Films": 6299,
  "Polish Thrillers": 6047,
  "Polish TV Programmes": 1622170,
  "Political Comedies": 2700,
  "Political Documentaries": 7018,
  "Political Thrillers": 10504,
  "Political TV Documentaries": 55087,
  "Political TV Programmes": 25807,
  "Politically Incorrect Stand-up Comedy": 77230,
  "Programas de TV y series": 83,
  "Psychological Horror Films": 4809,
  "Psychological Thrillers": 5505,
  "Punjabi-language Films": 58982,
  "Quirky Romance": 36103,
  "Raunchy Comedies": 5756,
  "Reality Programmes": 9833,
  "Reality, Variety & Talk Shows": 2070390,
  "Religious Documentaries": 10005,
  "Retro Anime": 1408777,
  "Rock & Pop": 3278,
  "Rockumentaries": 4649,
  "Romance Anime": 1522234,
  "Romance Programmes": 26156,
  "Romances de siempre": 502675,
  "Romanian": 81448928,
  "Romanian Movies": 61924,
  "Romantic British Films": 10455,
  "Romantic Comedy Anime": 81216629,
  "Romantic Danish Movies": 61656,
  "Romantic Dutch Movies": 62752,
  "Romantic European Movies": 89712,
  "Romantic Films based on a book": 3830,
  "Romantic French Films": 58900,
  "Romantic Gay & Lesbian Films": 3329,
  "Romantic Independent Films": 9916,
  "Romantic International Movies": 1474327,
  "Romantic International TV Shows": 1295410,
  "Romantic Italian Films": 7908,
  "Romantic Japanese Films": 17241,
  "Romantic Japanese TV Shows": 1458609,
  "Romantic Korean Movies": 16890,
  "Romantic Nordic Movies": 78250,
  "Romantic Tearjerkers": 9257,
  "Romantic Turkish Movies": 1630981,
  "Romantic TV Comedies": 26049,
  "Romantic TV Dramas": 26056,
  "Romantic TV Soaps": 26052,
  "Romantic Youth Drama": 1655810,
  "Russian": 81427763,
  "Russian TV Programmes": 1769574,
  "Satanic Stories": 6998,
  "Satires": 4922,
  "Scandinavian Comedies": 11755,
  "Scandinavian Crime Films": 1884,
  "Scandinavian Dramas": 2696,
  "Scandinavian Films": 9292,
  "Scandinavian Independent Movies": 69192,
  "Scandinavian Thrillers": 1321,
  "Scandinavian TV": 76802,
  "School Anime": 1623841,
  "Sci-Fi": 108533,
  "Sci-Fi & Fantasy": 1492,
  "Sci-Fi Adventure": 6926,
  "Sci-Fi Dramas": 3916,
  "Sci-Fi Films": 3276033,
  "Sci-Fi Horror Films": 1694,
  "Sci-Fi Thrillers": 11014,
  "Sci-Fi TV": 3300242,
  "Science & Nature Docs": 2595,
  "Science & Nature TV": 52780,
  "Science & Technology Documentaries": 49110,
  "Science & Technology Docuseries": 50232,
  "Screwball Comedies": 9702,
  "Seinen Anime": 2913945,
  "Shoujo Anime": 3292470,
  "Shounen Anime": 2867624,
  "Showbiz Documentaries": 25485,
  "Showbiz Dramas": 5012,
  "Showbiz Musicals": 13573,
  "Silent Films": 53310,
  "Singaporean": 81422108,
  "Singaporean Movies": 81306797,
  "Singaporean Programmes": 1830680,
  "Sitcoms": 3903,
  "Slapstick Comedies": 10256,
  "Slasher & Serial Killer Movies": 8646,
  "Slice of Life Anime": 1519826,
  "Soccer Non-fiction": 3215,
  "Social & Cultural Docs": 3675,
  "Social Issue Dramas": 3947,
  "Social Issue TV Dramas": 2691116,
  "South African Films": 1159504,
  "South African TV Shows": 81300456,
  "Southeast Asian Films": 9196,
  "Spanish": 81399657,
  "Spanish Comedies": 61330,
  "Spanish Dramas": 58796,
  "Spanish Films": 58741,
  "Spanish Thrillers": 65558,
  "Spanish TV Programmes": 1193084,
  "Spanish-Language TV Shows": 67675,
  "Special Interest": 6814,
  "Spiritual Documentaries": 2760,
  "Sports & Fitness": 9327,
  "Sports Anime": 1622375,
  "Sports Comedies": 5286,
  "Sports Documentaries": 180,
  "Sports Dramas": 7243,
  "Sports Films": 4370,
  "Spy Action & Adventure": 10702,
  "Spy Movies": 2477,
  "Spy Thrillers": 9147,
  "Stand-up & Chat Shows": 1516534,
  "Stand-up Comedy": 11559,
  "Steamy Dramas": 794,
  "Steamy Romance": 29281,
  "Steamy Romantic Films": 35800,
  "Steamy Thrillers": 972,
  "Superheroes": 67698,
  "Supernatural Horror Films": 42023,
  "Supernatural Thrillers": 11140,
  "Suspenses": 8933,
  "Swedish": 81418154,
  "Swedish Comedies": 63092,
  "Swedish Dramas": 62140,
  "Swedish Films": 62016,
  "Swedish TV Programmes": 76793,
  "Taiwanese": 81417804,
  "Taiwanese Movies": 1461905,
  "Taiwanese TV Programmes": 667429,
  "Talk Shows": 3030851,
  "Tamil-Language Films": 61904,
  "Tear-jerking Romantic Movies": 1412508,
  "Tearjerkers": 6384,
  "Teen Dramas": 9299,
  "Teen Films": 2340,
  "Teen Programmes": 60951,
  "Teen Romance": 53915,
  "Teen Screams": 52147,
  "Teen TV Dramas": 61091,
  "Telugu-Language Films": 63676,
  "Thai": 81422109,
  "Thai Action & Adventure": 63315,
  "Thai Comedies": 60724,
  "Thai Dramas": 62116,
  "Thai Films": 61205,
  "Thai Horror Films": 65209,
  "Thai TV Programmes": 2699150,
  "Theater Arts": 10832,
  "Thriller & Horror Anime": 1663282,
  "Thriller Programmes": 89811,
  "Thrillers based on a book": 651,
  "Time Travel Sci-Fi & Fantasy": 75448,
  "Tokusatsu Heroes": 2071073,
  "Travel & Adventure Documentaries": 1159,
  "Travel & Adventure Reality TV": 48762,
  "True Crime Documentaries": 81050,
  "Turkish": 81417808,
  "Turkish Comedies": 1133134,
  "Turkish Dramas": 1133135,
  "Turkish Films": 1133133,
  "Turkish TV Shows": 1295701,
  "TV Animated Comedies": 7992,
  "TV Comedy Dramas": 7539,
  "TV Dramas based on Comics": 1819198,
  "TV Programmes Based on Books": 1819174,
  "TV Programmes Based on Manga": 2951909,
  "TV Shows based on Comics": 2192320,
  "TV Sketch Comedies": 5610,
  "TV Soaps": 10634,
  "TV Teen Dramas": 52904,
  "TV Variety & Chat Shows": 11627,
  "Urban & Dance": 9472,
  "Urdu Films": 2247011,
  "US Movies": 1159493,
  "US Police TV Shows": 75445,
  "US TV Comedies": 72407,
  "US TV Documentaries": 72384,
  "US TV Dramas": 72354,
  "Vampire Horror Films": 75804,
  "Variety Entertainment": 2070675,
  "Variety TV": 81329745,
  "Vietnamese Films": 61336,
  "Wedding & Romance Reality TV": 50103,
  "Werewolf Horror Films": 75930,
  "Westerns": 7700,
  "World Music": 2856,
  "WWII Films": 70023,
  "Youth Drama": 1502288,
  "Zombie Horror Films": 75405
}