import { StaticImageData } from 'next/image';

export interface IHeroData {
    id: string,
    subtitle: string,
    title: string,
    img: string,
    link1: string,
    link2: string
}


export interface IPhotoCardData {
    id: string,
    img: StaticImageData,
    text: string
}


export interface IProcuctData {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: Rating
}

export interface Rating {
    rate: number,
    count: number
}

export interface IPopularCategoriesData {
    id: string,
    img: StaticImageData,
    name: string
}

export interface IFashionBlogData {
    id: string,
    img: StaticImageData,
    title: string,
    subtitle: string,
    description: string
}

export interface IServicesData {
    id: string,
    img: StaticImageData,
    title: string,
    subtitle: string
}

export interface IContactsCardData {
    img: StaticImageData
}