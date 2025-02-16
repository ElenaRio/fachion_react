import styles from './Blog.module.css';
import imgBlog from './../../img/images/promo-01.jpg';
import Title from '../title/Title';

function Blog() {
  return (
    <section className={styles.blog}>
      <div className="container">
        <div className={styles.blogContainer}>
          <Title title="Young’s Favourite" />
        </div>
        <div className={styles.container}>
          <img src={imgBlog} alt="Blog" />
          <div>
            <h3 className={styles.blogTitle}>
              "What to Wear This Season? Trends You Should Try!"
            </h3>
            <p className={styles.blogDesc}>
              As the season shifts, so do the fashion trends, and this year
              promises an exciting array of styles to experiment with. From bold
              colors to sustainable fabrics, there are plenty of ways to refresh
              your wardrobe. Here are a few of the hottest trends you should
              consider adding to your closet:
            </p>
            <ul>
              <li className={styles.blogItem}>
                <span>1. Vibrant Colors –</span> Bright hues are making a
                comeback! Think fiery reds, electric blues, and sunny yellows.
                Don’t shy away from mixing and matching these statement colors
                to create bold, eye-catching outfits.
              </li>
              <li className={styles.blogItem}>
                <span>2. Sustainable Fashion – </span> The demand for
                eco-friendly materials continues to rise. Opt for pieces made
                from organic cotton, recycled fabrics, or vegan leather to help
                reduce your environmental footprint while staying stylish.
              </li>
              <li className={styles.blogItem}>
                <span>3. Oversized Fits –</span>Comfort meets style with
                oversized clothing. From baggy blazers to relaxed trousers, this
                trend offers both ease and elegance. Pair with sleek accessories
                to balance out the look.
              </li>
              <li className={styles.blogItem}>
                <span>4. Tech-Inspired Fashion – </span>The rise of wearable
                technology is inspiring fashion choices this season. Think
                jackets with LED accents or pants with built-in charging ports.
                The blend of utility and style is perfect for tech enthusiasts.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Blog;
