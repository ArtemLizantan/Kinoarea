import Container from "../../components/container/Container";
import HeaderCategories from "./components/headerCategories/HeaderCategories";
import styles from "./categories.module.scss";
import Items from "./components/items/Items";

const Categories = () => {
  return (
    <section className={styles.categories}>
      <Container>
        <div className={styles.categories__body}>
          <HeaderCategories />
          <Items />
        </div>
      </Container>
    </section>
  );
};

export default Categories;
