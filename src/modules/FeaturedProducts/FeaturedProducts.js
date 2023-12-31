import styles from "./FeaturedProducts.module.scss";

import Button from "../../components/Button/Buttton";
import { fetchData } from "@/api/productsFetch";
import Product from "@/components/Product/Product";
import randomizeArray from "@/utility/randomizeArray";
import { apiProductOrigin } from "@/api/api";
import Link from "next/link";

const FeaturedProducts = async () => {
  const data = await fetchData(apiProductOrigin);
  const shuffledData = randomizeArray(data);

  return (
    <div className={styles["FeaturedProducts"]}>
      <div className={styles["FeaturedProducts-Container"]}>
        <h2 className={styles["FeaturedProducts-Title"]}>featured products</h2>
        <div className={styles["FeaturedProducts-Underline"]}></div>
      </div>
      <div className={styles["FeaturedProducts-Grid"]}>
        {shuffledData.slice(0, 3).map(({ id, name, image, price }) => {
          return (
            <Product key={id} id={id} name={name} image={image} price={price} />
          );
        })}
      </div>
      <Link href={"/products"} className={styles["FeaturedProducts-Button"]}>
        <Button>all products</Button>
      </Link>
    </div>
  );
};

export default FeaturedProducts;
