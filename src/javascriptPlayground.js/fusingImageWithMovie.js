let a = [
    {
        "title": "1942: A Love Story",
        "img": "https://occ-0-2042-299.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABa4cPLNp-A5KjgDX_fu7bVP-EAFigCEuYM9ZDBbF01HJDo4E3rulTUHgyTmACRWcc4nDN2SNvwxhxR4bwfFZP7kNmQ.jpg?r=f97",
        "title_type": "movie",
        "netflix_id": 206593,
        "synopsis": "In a small Himalayan town, Rajeshwari and Naren fall passionately in love -- even as the world around them crumbles. But when a band of revolutionaries with a charismatic leader comes to town, the spirit of freedom threatens their future together.",
        "rating": "0",
        "year": "1993",
        "runtime": "9113",
        "imdb_id": "tt0109010",
        "poster": "https://m.media-amazon.com/images/M/MV5BMjcxNTA4NDczNl5BMl5BanBnXkFtZTcwMDI2ODgzMQ@@._V1_SX300.jpg",
        "top250": 0,
        "top250tv": 0,
        "title_date": "2019-08-01"
    },
    {
        "title": "Ace Ventura: Pet Detective",
        "img": "https://occ-0-1926-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABR5C8rHk6ick0AtE2EbqL0KwLmy5hhdkDy6-wsNjDMh3ez5QvKcVIbgFlyNytcXUs4flgevCKbegxCvEq7Ai3K0Kxg.jpg?r=c6d",
        "title_type": "movie",
        "netflix_id": 215309,
        "synopsis": "Barely competent pet private eye Ace Ventura is put on the case when kidnappers with an ax to grind abduct Snowflake, the Miami Dolphins&#39; mascot.",
        "rating": "3.408591",
        "year": "1994",
        "runtime": "5157",
        "imdb_id": "tt0109040",
        "poster": "N/A",
        "top250": 0,
        "top250tv": 0,
        "title_date": "2016-09-24"
    },{
        "title": "Assassins",
        "img": "https://occ-0-2218-2794.1.nflxso.net/art/8470f/6f2aada37d55eb75d71bb7a9b68f448cec68470f.jpg",
        "title_type": "movie",
        "netflix_id": 265929,
        "synopsis": "Retiring hit man Robert Rath agrees to take one last job after encountering an eager competitor who has Rath on the top of his &#39;to do&#39; list.",
        "rating": "3.4390402",
        "year": "1995",
        "runtime": "7960",
        "imdb_id": "tt0112401",
        "poster": "http://ia.media-imdb.com/images/M/MV5BMTY4OTUwMDY0Ml5BMl5BanBnXkFtZTcwMTg1NDcyMQ@@._V1_SX300.jpg",
        "top250": 0,
        "top250tv": 0,
        "title_date": "2015-05-02"
    }


]

let b = [
    {
        "215309": "https://occ-0-784-778.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVLdFT22Am9QNxSe2uDrfMYTLo0fA8yySorpYaHepgJcKUtBScoJ8A85KApOfPUPnMGzrwgFRh4SZHL6CXMeP45TrIFP.jpg?r=283"
    },
    {
        "206593": "https://occ-0-1168-299.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABfyaoILnTeX4Puc0Zm5PfvfzhWb36UQ4de5rJjHh2cBC3oCj4xG2-81WNqWUtFzV0IUp4maslu2l_3NjBI8WxmAU1bUGGmoioA.jpg?r=1bb"
    },
    {
        "265929": "https://occ-0-1007-2705.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWvaguOsylwU9wCSqCsISWtzEFloz9reVQzigcMRmnGtyQyBgH_xAwXst3SBrheBocyeKHmOrpbYOu9qIeK_y7X147Nw.jpg?r=523"
    }
]

for (let i = 0; i < b.length; i++) {
    const netflix_id = Object.keys(b[i]);
    // console.log(netflix_id)
    for (let j = 0; j < a.length; j++) {
        const aObj = a[j];
        // console.log(aObj)
        if(aObj.netflix_id == netflix_id)
        aObj.bo = Object.values(b[i]).toString()
        continue
    }
    
    
}

console.log(a)
console.log('asd')
// 