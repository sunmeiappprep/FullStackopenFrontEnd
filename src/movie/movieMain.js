import { useState,useEffect } from "react";
import axios from "axios";
import MovieDisplay from "./movieDisplay";
import MovieSearch from "./movieSearch";
import '../css/moviesDisplay.css'; 
import { useSelector,useDispatch } from "react-redux";
import { UPDATEMOVIELIST } from "../actions/movielist";
import { APIADD } from "../actions/apicallcounter";
import MovieGenre from "./movieGenre";
import MovieGenreSelection from "./movieGenreSelection";
import { useRef } from 'react';
import MovieCarousel from './movieCarousel'
import anime from '../JSONdata/tvshows/anime.json'
import action from '../JSONdata/tvshows/action.json'
import teen from '../JSONdata/tvshows/teen.json'
import british from '../JSONdata/tvshows/british.json'
// import classiccult from '../JSONdata/tvshows/classiccult.json'
import comedies from '../JSONdata/tvshows/comedies.json'
import crime from '../JSONdata/tvshows/crime.json'
import documentary from '../JSONdata/tvshows/documentary.json'
import dramas from '../JSONdata/tvshows/dramas.json'
import fantasy from '../JSONdata/tvshows/fantasy.json'
import food from '../JSONdata/tvshows/food.json'
import horror from '../JSONdata/tvshows/horror.json'
import indian from '../JSONdata/tvshows/indian.json'
import japanese from '../JSONdata/tvshows/japanese.json'
import international from '../JSONdata/tvshows/international.json'
import kdrama from '../JSONdata/tvshows/kdrama.json'
import kids from '../JSONdata/tvshows/kids.json'
import lgbt from '../JSONdata/tvshows/lgbt.json'
import romance from '../JSONdata/tvshows/romance.json'
import science from '../JSONdata/tvshows/science.json'
import spanish from '../JSONdata/tvshows/spanish.json'
import standup from '../JSONdata/tvshows/standup.json'
import thriller from '../JSONdata/tvshows/thriller.json'
import compete from '../JSONdata/tvshows/compete.json'

import AfricanF from '../JSONdata/movies/African.json'
import AnimeF from '../JSONdata/movies/Anime.json'
import ArgentinianF from '../JSONdata/movies/Argentinian.json'
import AsianF from '../JSONdata/movies/Asian.json'
import AwardF from '../JSONdata/movies/Award.json'
import BollywoodF from '../JSONdata/movies/Bollywood.json'
import BritishF from '../JSONdata/movies/British.json'
import ClassicF from '../JSONdata/movies/Classic.json'
import CrimeF from '../JSONdata/movies/Crime.json'
import DanishF from '../JSONdata/movies/Danish.json'
// import Horror from '../JSONdata/movies/Horror.json'
import JapaneseF from '../JSONdata/movies/Japanese.json'
import LGBTF from '../JSONdata/movies/LGBT.json'
import PolishF from '../JSONdata/movies/Polish.json'
import RomanticF from '../JSONdata/movies/Romantic.json'
import ScandinavianF from '../JSONdata/movies/Scandinavian.json'
import SpanishF from '../JSONdata/movies/Spanish.json'
import SportF from '../JSONdata/movies/Sports.json'
import SupernaturalF from '../JSONdata/movies/Supernatural.json'
import SwedishF from '../JSONdata/movies/Swedish.json'
import TeenF from '../JSONdata/movies/Teen.json'
import ThaiF from '../JSONdata/movies/Thai.json'
import TurkishF from '../JSONdata/movies/Turkish.json'
import SciFiF from '../JSONdata/movies/Sci-Fi.json'
import DutchF from '../JSONdata/movies/Dutch.json'
import BrazilianF from '../JSONdata/movies/Brazilian.json'

const MovieMain = ({width}) => {

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

    const search = useSelector(state => state.search)
    const [movies,setMovies] = useState()
    const dispatch = useDispatch()
    const absoluteValue = useSelector(state => state.playerHeight.height)
    const typeOfMedia = useSelector(state => state.typeOfMedia)

    //this handleonsubmit , 
    // if the search term is inside genrekeysearchvalue we assume that it is a genre
    //so we will axios request with those options for genre
    //if it is not found we assume it is a search for movie
    //so we axios search for movie title
    //
    const handleOnSubmit = () => {
        var options;
        let mappingNameToObj = 
            {
                'Anime':anime,
                'Action':action,
                'British':british,
                'Crime':crime,
                'Comedies':comedies,
                'Teen':teen,
                'Documentary':documentary,
                'Dramas':dramas,
                'Fantasy':fantasy,
                'Food':food,
                'Horror':horror,
                'Indian':indian,
                'Japanese':japanese,
                'International':international,
                'K-drama':kdrama,
                'Kids':kids,
                'LGBTQ':lgbt,
                'Romance':romance,
                'Science':science,
                'Spanish':spanish,
                'Standup':standup,
                'Thriller':thriller,
                "Compete":compete,
                "African Films":AfricanF,
                "Crime Films":CrimeF,
                "Sci-Fi Films":SciFiF,
                "Anime Films":AnimeF,
                "Danish Films":DanishF,
                "Spanish Films":SpanishF,
                "Argentinian Films":ArgentinianF,
                "Dutch Films":DutchF,
                "Sports Films":SportF,
                "Asian Movies":AsianF,
                "Classic Films":ClassicF,
                "Supernatural Horror Films":SupernaturalF,
                "Academy Award-Winning Films":AwardF,
                "Japanese Films":JapaneseF,
                "Swedish Films":SwedishF,
                "Bollywood Films":BollywoodF,
                "LGBTQ Films":LGBTF,
                "Teen Films":TeenF,
                "British Films":BritishF,
                "Turkish Films":TurkishF,
                "Scandinavian Films":ScandinavianF,
                "Thai Films":ThaiF,
                "Polish Films":PolishF,
                "Romantic Films":RomanticF,
                "Brazilian Flims":BrazilianF
            }
    
    
        if(search.length !== 0){
            if(mappingNameToObj[search]){
                console.log(search)
                setMovies(mappingNameToObj[search])
                // options = {
                //     method: 'GET',
                //     url: 'https://unogs-unogs-v1.p.rapidapi.com/search/titles',
                //     params: {genre_list: genreKeySearchValue[search], order_by: 'rating', limit: '25',type: typeOfMedia},
                //     headers: {
                //       'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com',
                //       'x-rapidapi-key': 'b49a84c68fmshcd0c0ae889304fep1f8400jsncfc1f5dbf1ce'
                //     }
                //   };  
                // console.log(genreKeySearchValue[search],search)
            }else {
                let modifedSearch = search.split(" ").join("_")
                options = {
                    method: 'GET',
                    url: 'https://unogs-unogs-v1.p.rapidapi.com/search/titles',
                    params: {title: modifedSearch, order_by: 'rating', limit: '15'},
                    headers: {
                        'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com',
                        'x-rapidapi-key': process.env.REACT_APP_REACT_KEY
                    }
                };
                dispatch(APIADD())
                axios.request(options).then(function (response) {
                        if(response.data.results){
                            console.log(response.data.results.filter(movie => movie.img));
                            setMovies(response.data.results.filter(movie => movie.img))
                            dispatch(UPDATEMOVIELIST(response.data.results.filter(movie => movie.img)))
                        }
                        else{
                            setMovies([])
                        }
                       
                }).catch(function (error) {
                    console.error(error);
                });
            }
            
            
            //this will add one to the redux state

        }
        

    }
    //this only triggers when a new search is made.
    //this will change the setmovie state ment for the render.map below
    useEffect(() => {
        handleOnSubmit()
      }, [search]); 

    

      
    
     


    if (!movies) return false
    return (
        <div>

        {/* <MovieGenre genre={10499}/> */}
        {   
        movies.length > 0
            ?
            // Why I need this absoluteValue?
            // cause I need to make the div shrink as the
            // window shrink
            <div >
                <div className="searchStatement">You search for {search.charAt(0).toUpperCase() + search.slice(1)}</div>
                <div className='movieDisplay'>
                    {/* <MovieCarousel array={movies}/> */}
                    {movies.map(movie =>
                        <div key={movie.title+movie.netflix_id} >
                            <MovieDisplay movie={movie} width={width} />
                        </div>
                        )
                    }
                </div> 
            </div>

            :<div className="searchStatement">You search for {search.charAt(0).toUpperCase() + search.slice(1)} but there are no result</div>

        }
        </div>
    )
}

export default MovieMain