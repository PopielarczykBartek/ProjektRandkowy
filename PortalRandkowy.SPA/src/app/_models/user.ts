import { Photo } from './photo';

export interface User {
    /** podstaawowe informacje */
    id: number;
    username: string;
    gender: string;
    age: number;
    zodiacSign: string;
    created: Date;
    lastActive: Date;
    city: string;
    country: string;
    /** zakladka info */
    growth: string;
    eyeColor: string;
    hairColore?: any;
    martialStatus: string;
    education: string;
    profession: string;
    children: string;
    languages: string;
    /** zakladka o mnie */
    motto: string;
    description: string;
    personality: string;
    lookingFor: string;
    /** zakladka pasje zainteresowania */
    intrests?: any;
    freeTime: string;
    sport: string;
    movies: string;
    music: string;
    /** zakladka preferencje */
    iLike: string;
    iDoNotLike: string;
    makesMeLaugh: string;
    itFeelsBestIn: string;
    friendsWouldDescribeMe?: any;
    /** zakladka zdjecia */
    photos: Photo[];
    photoUrl: string;
}
