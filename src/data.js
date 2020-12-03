import  ImageOne  from '../src/assets/3345102.jpg';
import  ImageTwo  from '../src/assets/4051260.jpg';
import  ImageThree  from '../src/assets/4057699.jpg';
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
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    source: randomFromList(src),
    readTime: '5 min',
    subText: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    imgSrc: ImageTwo
});

const getAsideRightItems = () => ({
    id: getRandomID(),
    title: 'title',
    message: 'message about the item',
    imgSrc: ImageThree
});

export default {
    '/aside-feed': Array.from({ length: 3 }, getAsideItems),
    './center-feed': Array.from({ length: 1 }, getCenterItems),
    './right-aside-feed': Array.from({ length: 3 }, getAsideRightItems)
}