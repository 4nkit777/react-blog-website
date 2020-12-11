import  ImageOne  from '../src/assets/3345102.jpg';
import  ImageTwo  from '../src/assets/4051260.jpg';
import  ImageThree  from '../src/assets/4057699.jpg';
import ImageFour from '../src/assets/gsmarena_001.jpg';
import ImageFive from '../src/assets/gsmarena_002.jpg';
import ImageSix from '../src/assets/gsmarena_003.jpg';
import ImageSeven from '../src/assets/gsmarena_006.jpg';
// import { get } from './fetch';

const getRandomID = () => `${Math.random()}-${Math.random()}`;

const getRandomNumber = (min, range) => Math.floor((Math.random() * 100 * range) / 100) + min;

const randomFromList = (list) => list[getRandomNumber(0, list.length)];

const images = [ImageOne, ImageTwo, ImageThree];

const asideTitles = ['Top 10 graphics', 'Top 10 GPUs', 'New December releases'];

const src = ['GSMArena', 'Wire.in', 'Times of Inda'];



const getAsideItems = () => ({
    id: getRandomID(),
    title: randomFromList(asideTitles),
    source: randomFromList(src),
    imgSrc: randomFromList(images),
    
});

const getCenterItems = () => ({
    id: getRandomID(),
    title: randomFromList(asideTitles),
    // title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    source: randomFromList(src),
    readTime: '5 min',
    subText: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    imgSrc: randomFromList(images)
});

const getAsideRightItems = () => ({
    id: getRandomID(),
    title: randomFromList(asideTitles),
    message: 'message about the item',
    imgSrc: ImageThree
});

const leftSideData = [
    {
        id: getRandomID(),
        image: ImageFour,
        title: 'Top trending phones of the week',
        source: 'GSMArena',
        minuteRead: '4 min',
    },
    {
        id: getRandomID(),
        image: ImageFive,
        title: 'Poco M# in for review',
        source: 'Times of India',
        minuteRead: '3 min',
    },
    {
        id: getRandomID(),
        image: ImageSix,
        title: 'Know all about Snapdragon 888',
        source: 'Washington Post',
        minuteRead: '5 min',
    },
    {
        id: getRandomID(),
        image: ImageSix,
        title: 'Know all about Snapdragon 888',
        source: 'Washington Post',
        minuteRead: '5 min',
    }
];

const centerSideData = [
    {
        id: getRandomID(),
        image: ImageOne,
        title: 'Do you know about this abstract design..?',
        source: 'Google News',
        minuteRead: '5 min',
        subText: 'Lets dig in to this design...'
    },
    {
        id: getRandomID(),
        image: ImageTwo,
        title: 'Way down we go',
        source: 'CNN',
        minuteRead: '3 min',
        subText: 'This is what the new song is all about...'
    }
];

const DiscoverData = ['Samsung', 'COVID-19', 'Business', 'Career', 'Tech'];

const FascinatingData = [
    {
        id: getRandomID(),
        image: ImageFour,
        title: 'I got my hip replaced at 39. This might be a problem',
        source: ' Science',
        readTime: '5 min',
        subText: 'Turns out, Im hip tasdasdasdo a new friend'
    },
    {
        id: getRandomID(),
        image: ImageFive,
        title: 'I got my hip replaced at 39. This asdaf be a problem',
        source: 'Popular Science',
        readTime: '9 min',
        subText: 'Turns out, Im hip to a new friend'
    },
    {
        id: getRandomID(),
        image: ImageSeven,
        title: 'This is survival of the fittest, this is do or die',
        source: 'The Times of India',
        readTime: '3 min',
        subText: 'Eminem is making rounds doing raps!'
    },
];

// Footer Data

export const Products = [
    <h3 style={{ fontWeight: "600" }}>Products</h3>,
    'Must-read articles',
    'Daily newsletter',
    'Blog Premium',
    'Save to Pocket extensions'
];

export const Company = [ <h3 style={{ fontWeight: "600" }}>Company</h3>,'About', 'Careers', 'Blog'];

export const Resources = [ <h3 style={{ fontWeight: "600" }}>Resources</h3>,'Get Help', 'Developer API', 'Pocket for publishers', 'Advertise'];

export const AppPlatforms = [
    <h3 style={{ fontWeight: "600" }}>Download</h3>,
    <span><i class="fab fa-android fa-2x"></i></span>,
    <span><i class="fab fa-app-store-ios fa-2x"></i></span>
];

export default {
    // '/aside-feed': Array.from({ length: 3 }, getAsideItems),
    // './center-feed': Array.from({ length: 1 }, getCenterItems),
    './right-aside-feed': Array.from({ length: 4 }, getAsideRightItems),
    '/left-feed': leftSideData,
    './center-data-feed': centerSideData,
    './discover-feed': DiscoverData,
    './fascinating-feed': FascinatingData
}