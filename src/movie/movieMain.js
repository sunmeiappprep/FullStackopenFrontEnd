import { useState,useEffect } from "react";
import axios from "axios";
import MovieDisplay from "./movieDisplay";
import MovieSearch from "./movieSearch";
import '../css/moviesDisplay.css'; 
import { useSelector } from "react-redux";

const MovieMain = () => {
    const dark = [
        {
            "title": "Pretty Cure All Stars Sing Together Miracle Magic!",
            "img": "https://occ-0-1007-1360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABVbx1uVEU_WRfrbwY0g0VVPqFmFs2k-OfkUhonFEXlxp3emo6NJDEI30UoMPQQCGBKQb_rauShOlgp4za2cWRhTq8w.jpg?r=b0c",
            "title_type": "movie",
            "netflix_id": 80173597,
            "synopsis": "The Precure warrior girls can&#39;t wait to see the cherry blossoms, but evil forces have other plans, and everyone must unite to fight their dark magic.",
            "rating": "0",
            "year": "2016",
            "runtime": "4235",
            "imdb_id": "notfound",
            "poster": "",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2017-04-01"
        },
        {
            "title": "Pretty Cure All Stars DX2: Light of Hope Protect the Rainbow Jewels!",
            "img": "https://occ-0-1007-1360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRE0diZlFhiZZ05kV-yfkEj349xVaRGy-Q-SAJLeQp7QKlOGJqrtQE8Rfuxoa4fVf90swLRrD7BOqg0271_Nu8iMtw.jpg?r=944",
            "title_type": "movie",
            "netflix_id": 80173586,
            "synopsis": "While two girl warriors are at a beautiful amusement park floating in the sea, a dark enemy destroys it, spurring the pair to get revenge.",
            "rating": "0",
            "year": "2010",
            "runtime": "4264",
            "imdb_id": "notfound",
            "poster": "",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2017-04-01"
        },
        {
            "title": "The Chalet",
            "img": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABWU3xPSjnL2vI585FGQkTAX5smiTjJ2jRZZFkIFVxWZdvZ0bsg6gdgA5u5oV9p3u8WGICJtByZaYPBLzAeRYqmLQ-HVI_cvMd3pbGKm-FGOMiTF8pmDUoGwk3ng.jpg?r=d31",
            "title_type": "series",
            "netflix_id": 80232914,
            "synopsis": "Friends gathered at a remote chalet in the French Alps for a summer getaway are caught in a deadly trap as a dark secret from the past comes to light.",
            "rating": "0",
            "year": "2018",
            "runtime": "0",
            "imdb_id": "tt8168678",
            "poster": "",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2018-04-17"
        },
        {
            "title": "Daniel Sloss: Live Shows",
            "img": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbBU7ELGrA85WIVV_AZoAKZD1Euyrw105IKI3TnCq0P_r1MCxE2XKem0eW7FZBXR2Ac9EMVOGj2jjB64Hfj6ACufzNumRjEQ-IqVpS_Epb_cZr3yOWRq8Z3t1r0.jpg?r=c4b",
            "title_type": "series",
            "netflix_id": 80223685,
            "synopsis": "Comedian Daniel Sloss is ready to find the funny in some very dark topics, from the deeply personal to the truly irreverent.",
            "rating": "0",
            "year": "2018",
            "runtime": "0",
            "imdb_id": "tt8858472",
            "poster": "",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2018-09-11"
        },
        {
            "title": "REA(L)OVE",
            "img": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABfG0PylY2F1CPK9NfiGrLXtQGxgpToEELzX9SjfrYNnj1eu2s2op8bAJCfEsErcT9lBCM1iAjF6FpDNzzOG484QNAQ.jpg?r=ad0",
            "title_type": "series",
            "netflix_id": 80226927,
            "synopsis": "A group of men and women, each burdened with a dark secret, look for love in this dating show with a twist. Hosted by reformed playboy Atsushi Tamura.",
            "rating": "0",
            "year": "2018",
            "runtime": "0",
            "imdb_id": "notfound",
            "poster": "",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2018-04-27"
        },
        {
            "title": "Bomb Scared",
            "img": "https://occ-0-2717-360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXqIbyJi6ddeGz--ihc4BGPa4D6tPtb-ROzqmnbeWdiaU3hLq64e040iq9L-_LGviP39fJQaE3Y8a7dkDysYN86kAD-pYVGB4Uxk8vQt-WEePV6bh6m3iPrO9po.jpg?r=ac6",
            "title_type": "movie",
            "netflix_id": 80134526,
            "synopsis": "In this dark comedy, a dysfunctional group of wannabe Basque terrorists awaits word about a new mission while Spain makes a run at the World Cup title.",
            "rating": "0",
            "year": "2017",
            "runtime": "5357",
            "imdb_id": "notfound",
            "poster": "",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2017-10-12"
        },
        {
            "title": "Crayon Shin-chan the Movie: Pursuit of the Balls of Darkness",
            "img": "https://occ-0-2772-1007.1.nflxso.net/art/3b8de/a461e7b5497e4bc7752fa575a3c5b5367d43b8de.jpg",
            "title_type": "movie",
            "netflix_id": 80243205,
            "synopsis": "The Noharas get caught between two rival clans when Himawari swallows a pretty bead that turns out to be a mysterious ball with hidden powers.",
            "rating": "0",
            "year": "1997",
            "runtime": "5941",
            "imdb_id": "notfound",
            "poster": "",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2018-04-07"
        },
        {
            "title": "Kidan: Piece of Darkness",
            "img": "https://occ-0-1007-1360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABZIQ0mcGvACM_vkmX83dH1_VPLM8-0R0mxtT9XTw8OqU75OPaooxDXSzf22scbpFvSHDZ_4FaQw5X8EO7DBXNEXVvQ.jpg?r=e61",
            "title_type": "movie",
            "netflix_id": 80099270,
            "synopsis": "Based on Fuyumi Ono&#39;s best-selling books, these 10 tales of spookiness by six Japanese horror directors are designed to chill viewers to the bone.",
            "rating": "2.875",
            "year": "2016",
            "runtime": "6030",
            "imdb_id": "notfound",
            "poster": "",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2016-12-16"
        },
        {
            "title": "The Privilege",
            "img": "https://occ-0-1000-2567.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABc2HesvJ1BD_clHaUwEUAuy76Zdlcgtj6vkh_5yL9CfhWA-n3sBW7EckH7cxJWt7WOQhJphZ5BNx8IwcWx92c2C0mYfsC3Fu9VsxAfeFw7FADbOTKDpikoA5ViU.jpg?r=862",
            "title_type": "movie",
            "netflix_id": 81410539,
            "synopsis": "A wealthy teen and his friends attending an elite private school uncover a dark conspiracy while looking into a series of strange supernatural events.",
            "rating": "0",
            "year": "2022",
            "runtime": "6448",
            "imdb_id": "tt0216117",
            "poster": "0",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2022-02-09"
        },
        {
            "title": "Social Syndrome",
            "img": "https://occ-0-1168-299.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABfouFKQoOlWn9i7mQkLzsQF5OrOcICq_Cvwhl47PoK8jiRQB3zkGKM_pZOS1IbJGkVRRCOMwHNyL47_zb2Iuw11nng.jpg?r=8cf",
            "title_type": "series",
            "netflix_id": 81278560,
            "synopsis": "Eight chilling stories about obsession, secrets and unsettling truths collide and intertwine as the dark side of social media comes to light.",
            "rating": "0",
            "year": "2018",
            "runtime": "0",
            "imdb_id": "tt9214598",
            "poster": "https://m.media-amazon.com/images/M/MV5BNjJmNmNiZTItZmY5OC00ZTMyLWI0ZDEtNmYxZTkyZjE5ZjFlXkEyXkFqcGdeQXVyNTA2NjYxMjI@._V1_SX300.jpg",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2020-09-05"
        },
        {
            "title": "Cosmic Rescue: The Moonlight Generations",
            "img": "https://occ-0-3467-3466.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQd20EGVlRp6lfS3k2me63vbjPRawhjYZKYNeiFuGw0bgwSY5nAoAegxVZdz0R-z7vsRUqkDf_N_o_3r1tmk1odPKA.jpg?r=3fb",
            "title_type": "movie",
            "netflix_id": 81343755,
            "synopsis": "A rebellious team of space rescuers find themselves embroiled in a dark conspiracy when they intercept a strange SOS call from a young woman.",
            "rating": "0",
            "year": "2003",
            "runtime": "5042",
            "imdb_id": "tt2826304",
            "poster": "",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2020-11-27"
        },
        {
            "title": "Social Distance",
            "img": "https://occ-0-2851-1432.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeXv_x6uBTw6ownCJPapHdjD4hZbL1AKrVLf2DL3mx_UEpGz6LE2A44mRYHohPTZWoW3VMszeigjZurpjmMStnXB30Nw9SIs5Mnw3cgV9RdobOGuEn0dlfXtOlc.jpg?r=621",
            "title_type": "series",
            "netflix_id": 81277835,
            "synopsis": "Filmed in isolation, this narrative anthology series features both dark and funny takes on how people strive to stay connected while staying apart.",
            "rating": "0",
            "year": "2020",
            "runtime": "0",
            "imdb_id": "tt12313074",
            "poster": "",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2020-10-15"
        },
        {
            "title": "Seven Souls in the Skull Castle",
            "img": "https://occ-0-993-988.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABZ6dPcNI2Mu--RWwIQFN8P8XLROEZhkWeHJrGY9MVQE4r7WLNl_t42_2rDCtny_u2jOuBTmVQ0BA6vSvvgEEblhctQ.jpg?r=99f",
            "title_type": "movie",
            "netflix_id": 81351465,
            "synopsis": "In this cinematic distillation of the electrifying stage performance, seven spirited souls take on the dark threat growing in shadowy Skull Castle.",
            "rating": "0",
            "year": "2011",
            "runtime": "10647",
            "imdb_id": "tt4576040",
            "poster": "",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2020-12-25"
        },
        {
            "title": "Light in the Dark",
            "img": "https://occ-0-2851-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcVcB1r6lHiUDY4_kA4S2HWvD59G1kpv6yIVbzV5nT3SYYNFUj4c8LFPejlAo9XJboRhxls_gYCWycDXiKNFgk1UDA.jpg?r=6f1",
            "title_type": "movie",
            "netflix_id": 81052231,
            "synopsis": "A terrifying home invasion shatters a couple&#39;s happy family life and brings their marriage to the brink as painful fallout unfolds.",
            "rating": "0",
            "year": "2019",
            "runtime": "6298",
            "imdb_id": "tt8530796",
            "poster": "https://m.media-amazon.com/images/M/MV5BODM3ZGZhMDMtYmQyNy00NzdiLTkwZWMtOGM3NTdlMGMzNmI3XkEyXkFqcGdeQXVyNDM5NDgwODk@._V1_SX300.jpg",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2020-05-18"
        },
        {
            "title": "Old Prague Legends",
            "img": "https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABYqZgzpFCwVixzaoU8Mr9-SdGMNdq-4p6nV9r0aqpvNwar4o4qODkyTzY2BmR3o6q_h2_M5FvPcAyCPYjWs3CajRFg.jpg?r=d2d",
            "title_type": "movie",
            "netflix_id": 81192855,
            "synopsis": "Set in Prague, this animated collection of stories brings the dark, magical legends of the beautiful and ancient city to life.",
            "rating": "0",
            "year": "2013",
            "runtime": "2981",
            "imdb_id": "tt3101002",
            "poster": "N/A",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2019-10-29"
        },
        {
            "title": "ThirTEEN Terrors",
            "img": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXjqw_mW0zYdbhsFuMbYH12TcrEURcZTlA7t5EBaZagzx7DZvjF20Gv2gh8dITwZdKMppgCxErHGNmlSU9zljhuEmw.jpg?r=366",
            "title_type": "series",
            "netflix_id": 80994738,
            "synopsis": "A group of teens searches for the dark truth behind their school&#39;s mysterious and brutal history.",
            "rating": "0",
            "year": "2014",
            "runtime": "0",
            "imdb_id": "tt5040974",
            "poster": "N/A",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2019-02-21"
        },
        {
            "title": "RESIDENT EVIL: Infinite Darkness",
            "img": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABftf_PwSHJv5Jb-hb-AYH4AjBCDqXrE9Hijl4mht1BXMPX9oiarMzI-aylmMzk5mkw_2exxY8IliZ1OWNYyhj92rvJrUhFu4Hn13pbqdk29_Uu4TlZWvHSMF3JU.jpg?r=2c0",
            "title_type": "series",
            "netflix_id": 80987064,
            "synopsis": "Years after the horrors of Raccoon City, Leon and Claire find themselves consumed by a dark conspiracy when a viral attack ravages the White House.",
            "rating": "0",
            "year": "2021",
            "runtime": "0",
            "imdb_id": "tt13173456",
            "poster": "https://m.media-amazon.com/images/M/MV5BN2NjYjJjZDAtNDI1ZS00MzY5LWFhMzItZjdlM2I0ZDkxMzdlXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2021-07-09"
        },
        {
            "title": "Feria: The Darkest Light",
            "img": "https://occ-0-1738-2567.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRPvXlm44Wzp_HItlU5-Z9tlJkBgoSnt9IIsStr3ZLQViO6NALdP6TeW8PyWJxcPosqzGOOJcxA3WLEBCJ12DlGtjK_aja43ovvhZn7h7Jiv-8f6Z1xvAR7v624.jpg?r=c4e",
            "title_type": "series",
            "netflix_id": 81059720,
            "synopsis": "Two sisters must face a new reality — and supernatural elements — when it&#39;s revealed their parents participated in a cult ritual ending in death.",
            "rating": "0",
            "year": "2022",
            "runtime": "0",
            "imdb_id": "tt13323004",
            "poster": "https://m.media-amazon.com/images/M/MV5BYTg3YzA2ZGQtYjI1MS00NTY4LTg1ODEtOWVjZDJjZTFkOWI3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2022-01-28"
        },
        {
            "title": "Hasmukh",
            "img": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABTJS7BonlrG0Z-avd2HKqg5e9Sh1qPhELVTUMOlNDff4RkxufZnHdBmRatNBLvqz1LRFzSIq4WLKLFyAzVU-Sh9oRls2CHsXJVVpVTWz55S8sZvEPV9U3YwsmCQ.jpg?r=cc3",
            "title_type": "series",
            "netflix_id": 80236782,
            "synopsis": "A timid, small-town comedian&#39;s long-awaited big break takes a dark turn when he realizes committing murder is the only way to keep his onstage mojo.",
            "rating": "0",
            "year": "2020",
            "runtime": "0",
            "imdb_id": "tt9359294",
            "poster": "https://m.media-amazon.com/images/M/MV5BM2JiMjU3NmQtNzM3Mi00MGVjLThiMWMtMjk3YWZhMTYxYmM0XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_SX300.jpg",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2020-04-17"
        },
        {
            "title": "big love",
            "img": "https://occ-0-2506-1432.1.nflxso.net/art/e4e7a/653ccad988f0795505b7157681f28683167e4e7a.jpg",
            "title_type": "movie",
            "netflix_id": 80108169,
            "synopsis": "Teen Emilia falls for an older man who awakens her sexuality. But as Emilia gains her independence, their bright passion turns into dark obsession.",
            "rating": "3",
            "year": "2011",
            "runtime": "5725",
            "imdb_id": "tt1837751",
            "poster": "N/A",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2016-09-20"
        },
        {
            "title": "PIECES OF HER",
            "img": "https://occ-0-821-2567.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABSAbFZcWvNNBCCfyP3wFFbZPki9iS-OQ8HyjqIHa-gIBDPEE1nkdeBoEJohENFJ-5UHxSoFqfZDZw920D6LGqOogXYwSnjP6Uqh90tpuqmPSgE-2Ktf8iOH2NqU.jpg?r=205",
            "title_type": "series",
            "netflix_id": 81015514,
            "synopsis": "A woman pieces together her mother&#39;s dark past after a violent attack in their small town brings hidden threats and deadly secrets to light.",
            "rating": "0",
            "year": "2022",
            "runtime": "0",
            "imdb_id": "tt8528144",
            "poster": "0",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2022-03-04"
        },
        {
            "title": "Hummingbird",
            "img": "https://occ-0-1926-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABUw8Z-QNy5V71CrEbU1xim8VXjFMEQJn3jtyjFZdjtZ0uzqZwOSEwZK8FpB0ImEl4L09TZANHIIbt-nc1pkUjJjCWQ.jpg?r=42a",
            "title_type": "movie",
            "netflix_id": 70262785,
            "synopsis": "An Afghanistan veteran haunted by his dark past takes on an assumed identity but must risk stepping into the light when his girlfriend is murdered.",
            "rating": "3.6372771",
            "year": "2013",
            "runtime": "6021",
            "imdb_id": "tt4425484",
            "poster": "N/A",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2015-04-14"
        },
        {
            "title": "A Tale Dark & Grimm",
            "img": "https://occ-0-3938-1432.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABYY0Dhgy-vMwNYjfOlXrGcXqM79OsmPYzOz4r4vgS8a0WsgWCNTC8N-F-rzDhyfQGE_4YsC3pfulLPvDLBgS8Ejr5tVGjJZTRbx9YJE_Ueo0cFtrJYLGsE0EdjE.jpg?r=fe9",
            "title_type": "series",
            "netflix_id": 81076952,
            "synopsis": "Follow Hansel and Gretel as they walk out of their own story into a winding and wickedly witty tale full of strange — and scary — surprises.",
            "rating": "0",
            "year": "2021",
            "runtime": "0",
            "imdb_id": "tt2386826",
            "poster": "0",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2021-10-09"
        },
        {
            "title": "The Dark House",
            "img": "https://occ-0-3938-1432.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABUaWfPUx7wYQ-U7u4W5ODCqsRBXdq4h4ZjmqkAwYX5LtMK1ReabMlm8BaeGQAHdWjAFmf4flksfyfHOF6XXerRdemg.jpg?r=5bd",
            "title_type": "movie",
            "netflix_id": 81500098,
            "synopsis": "When the officers of a citizens&#39; militia investigate a multiple-murder case, it quickly becomes apparent they’re not interested in finding the truth.",
            "rating": "0",
            "year": "2009",
            "runtime": "6311",
            "imdb_id": "tt8348118",
            "poster": "0",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2021-10-25"
        },
        {
            "title": "Trese",
            "img": "https://occ-0-2851-2774.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABYQdD5YvbUWTZUWBZsKWQz8F71AxVVMO5eZGsqWC2dh5wOzUFL2EebaAry_P1TtnGJG0NfeCzQ0ZaNTtoawdfai3tN4SKvNHJ7TNhMjNlCmYmrJ9zTb792l8aew.jpg?r=001",
            "title_type": "series",
            "netflix_id": 81012541,
            "synopsis": "In Manila, where dark supernatural forces pervade the criminal underworld, it’s up to Alexandra Trese to keep the peace — but there’s a storm brewing.",
            "rating": "0",
            "year": "2021",
            "runtime": "0",
            "imdb_id": "tt9310336",
            "poster": "https://m.media-amazon.com/images/M/MV5BYmJkMzJmMzktYjJkZS00ODM1LWJiNjktYTU0ZjAxYTIyYTA5XkEyXkFqcGdeQXVyNzEzNjU1NDg@._V1_SX300.jpg",
            "top250": 0,
            "top250tv": 0,
            "title_date": "2021-06-11"
        }
    ]
    const searchTerm = useSelector(state => state.search)
    const [movies,setMovies] = useState(dark)
    const [movieSearch,setmovieSearch] = useState("")
    

    const handleOnSubmit = () => {
    var options = {
        method: 'GET',
        url: 'https://unogs-unogs-v1.p.rapidapi.com/search/titles',
        params: {title: searchTerm, order_by: 'rating', limit: '25'},
        headers: {
            'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_REACT_KEY
        }
      };
      
      axios.request(options).then(function (response) {
              console.log(response.data.results.filter(movie => movie.img));
              setMovies(response.data.results.filter(movie => movie.img))
      }).catch(function (error) {
          console.error(error);
      });
    }

    useEffect(() => {
        handleOnSubmit()
      }, [searchTerm]); // Only re-run the effect if count changes

    // let extraImg = (movies.map(movie => movie.netflix_id))
    let moviesWithPictureOnly = (movies.filter(movie => !movie.img))
    console.log(moviesWithPictureOnly)
    
    return (
        <div>
            <MovieSearch movieSearch={movieSearch} setmovieSearch={setmovieSearch} handleOnSubmit={handleOnSubmit}/>
            {
            movies 
            ? <div className='movieDisplay'>
                {movies.map(movie =>
                    <div key={movie.title} >
                        <MovieDisplay movie={movie} />
                    </div>
                    )
                }
            </div> 
       
            :<h1>There are no search result for this movie</h1>
            }

        </div>
    )
}

export default MovieMain