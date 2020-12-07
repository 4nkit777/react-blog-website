import  ImageOne  from '../src/assets/3345102.jpg';
import  ImageTwo  from '../src/assets/4051260.jpg';
import  ImageThree  from '../src/assets/4057699.jpg';

const getRandomID = () => `${Math.random()}-${Math.random()}`;

const leftSideData = [
    {
        id: getRandomID(),
        image: ImageOne,
        title: 'Top trending phones of the week',
        source: 'GSMArena',
        minuteRead: '4 min',
    },
    {
        id: getRandomID(),
        image: ImageTwo,
        title: 'Poco M# in for review',
        source: 'Times of India',
        minuteRead: '3 min',
    },
    {
        id: getRandomID(),
        image: ImageThree,
        title: 'Know all about Snapdragon 888',
        source: 'Washington Post',
        minuteRead: '5 min',
    }
];

export default {
    '/left-feed': Array.from({ length: 3 }, leftSideData)
}