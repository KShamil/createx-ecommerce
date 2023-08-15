import { Categories } from "@/widgets/Categories/Categories";
import styles from "./page.module.css";
import { HeroSlider } from "@/widgets/HeroSlider/HeroSlider";
import { NewArrivalsItems } from "@/features/NewArrivalsItems/NewArrivalsItems";
import { NewArrivals } from "@/widgets/NewArrivals/NewArrivals";
import { PopularCategories } from "@/widgets/PopularCategories/PopularCategories";
import { InfoSection } from "@/widgets/InfoSection/InfoSection";
import { TrendingNow } from "@/widgets/TrendingNow/TrendingNow";
import { FashionBlog } from "@/widgets/FashionBlog/FashionBlog";
import { SaleUp } from "@/widgets/SaleUp/SaleUp";
import { MobileShopping } from "@/widgets/MobileShopping/MobileShopping";
import { ServicesSection } from "@/widgets/ServicesSection/ServicesSection";
import { Contacts } from "@/widgets/Contacts/Contacts";
import { Subscribe } from "@/widgets/Subscribe/Subscribe";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSlider />
      <Categories />
      <NewArrivals />
      <InfoSection />
      <PopularCategories />
      <TrendingNow />
      <SaleUp />
      <MobileShopping />
      <ServicesSection />
      <Contacts />
      <FashionBlog />
      <Subscribe />
    </main>
  );
}
