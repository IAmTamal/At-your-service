export interface ICredentials {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
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