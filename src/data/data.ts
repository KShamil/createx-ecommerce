import { IContactsCardData, IFashionBlogData, IHeroData, IPhotoCardData, IPopularCategoriesData, IServicesData } from '@/interfaces/interfaces';
import { v4 as uuidv4 } from "uuid";
import PhotoImg1 from '../../public/photo-card-img/image.png'
import PhotoImg2 from '../../public/photo-card-img/image (1).png'
import PhotoImg3 from '../../public/photo-card-img/image (2).png'
import HeroSliderImg from '../../public/hero-img/image.png';
import PopulatCategoriesImg from '../../public/popular-categories-img/image.png'
import PopulatCategoriesImg2 from '../../public/popular-categories-img/image (1).png'
import PopulatCategoriesImg3 from '../../public/popular-categories-img/image (2).png'
import PopulatCategoriesImg4 from '../../public/popular-categories-img/image (3).png'
import PopulatCategoriesImg5 from '../../public/popular-categories-img/image (4).png'
import PopulatCategoriesImg6 from '../../public/popular-categories-img/image (5).png'
import FashionBlogImg from '../../public/fashion-blog-img/image.png'
import FashionBlogImg2 from '../../public/fashion-blog-img/image (1).png'
import ServicesIcon from '../../public/services-card-img/ic-delivery.png';
import ServicesIcon2 from '../../public/services-card-img/ic-call-center.png';
import ServicesIcon3 from '../../public/services-card-img/ic-shield.png';
import ServicesIcon4 from '../../public/services-card-img/ic-credit-card.png';
import ContactsImg from '../../public/contacts-img/image.png'
import ContactsImg2 from '../../public/contacts-img/image (1).png'
import ContactsImg3 from '../../public/contacts-img/image (2).png'

export const heroData: IHeroData[] = [
    {
        id: uuidv4(),
        subtitle: 'New collection',
        title: 'Menswear 2020',
        img: "../../../public/hero-img/image.png",
        link1: 'Shop sale',
        link2: 'Shop the menswear'
    }
]

export const PhotoCardData: IPhotoCardData[] = [
    {
        id: uuidv4(),
        img: PhotoImg1,
        text: 'Women’s'
    },
    {
        id: uuidv4(),
        img: PhotoImg2,
        text: 'Men’s'
    },
    {
        id: uuidv4(),
        img: PhotoImg3,
        text: 'Kids’'
    },
]

export const populatCategoriesData: IPopularCategoriesData[] = [
    {
        id: uuidv4(),
        img: PopulatCategoriesImg,
        name: 'Tops'
    },
    {
        id: uuidv4(),
        img: PopulatCategoriesImg2,
        name: 'T-shirts'
    },
    {
        id: uuidv4(),
        img: PopulatCategoriesImg3,
        name: 'Caps'
    },
    {
        id: uuidv4(),
        img: PopulatCategoriesImg4,
        name: 'Sandals'
    },
    {
        id: uuidv4(),
        img: PopulatCategoriesImg5,
        name: 'Jackets'
    },
    {
        id: uuidv4(),
        img: PopulatCategoriesImg6,
        name: 'Coats'
    }

]


export const fashionBlogData: IFashionBlogData[] = [
    {
        id: uuidv4(),
        img: FashionBlogImg,
        title: "Bag Trends for Summer 2020",
        subtitle: 'Fashion | August 24, 2020 | No comments',
        description: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...'
    },
    {
        id: uuidv4(),
        img: FashionBlogImg2,
        title: "Top 10 of This Season’s Hottest Sneakers",
        subtitle: 'Lifestyle | July 16, 2020 | 4 comments',
        description: 'Porta habitant vitae quam interdum. Leo viverra non volutpat rhoncus placerat vitae scelerisque. Rhoncus augue faucibus maecenas lacus...'
    },
]

export const servicesData: IServicesData[] = [
    {
        id: uuidv4(),
        img: ServicesIcon,
        title: "Fast Worldwide Shipping",
        subtitle: "Get free shipping over $250"
    },
    {
        id: uuidv4(),
        img: ServicesIcon2,
        title: "24/7 Customer Support",
        subtitle: "Friendly 24/7 customer support"
    },
    {
        id: uuidv4(),
        img: ServicesIcon3,
        title: "Money Back Guarantee",
        subtitle: "We return money within 30 days"
    },
    {
        id: uuidv4(),
        img: ServicesIcon4,
        title: "Secure Online Payment",
        subtitle: "Accept all major credit cards"
    }
]

export const contactsCardData: IContactsCardData[] = [
    {
        img: ContactsImg
    },
    {
        img: ContactsImg2
    },
    {
        img: ContactsImg3
    },
]