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

const asideTitles = ['10 enormously consequential things Biden can do without the Senate', 'If I make less money, should I do more Child care?', 'Hello, Friend. I am Mr. Robot.'];

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
    title: 'title',
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

export default {
    // '/aside-feed': Array.from({ length: 3 }, getAsideItems),
    // './center-feed': Array.from({ length: 1 }, getCenterItems),
    './right-aside-feed': Array.from({ length: 4 }, getAsideRightItems),
    '/left-feed': leftSideData,
    './center-data-feed': centerSideData,
    './discover-feed': DiscoverData
}