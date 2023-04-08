export interface ICredentials {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
}

export interface IService {
    name: string;
    description: string;
    slug: string;
    location: string;
    charge: number;
    availability: { day: string; time: string }[];
    keywords: string[];
    banner: string;
}

export interface Profiledataprops {
    _id: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    servicesprovided: string[];
    charge: number;
    keywords: string[];
    slug: string;
    profilepic: string;
    availability: string[];
    createdAt: string;
    __v: number;
}