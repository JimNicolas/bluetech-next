import Image from 'next/image';
import ButtonAddCart from '../../common/Button/Button';
import styles from './ArticleSection.module.css';
export default function ArticleSection({ title, paragraph, srcImage }) {
  return (
    <>
      <section className={styles.container} id='article'>
        <article className={styles.containerArticle}>
          <div className={styles.containerText}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.paragraph}>{paragraph}</p>
            <div>
              <ButtonAddCart text={'SHOP NOW'} />
            </div>
          </div>
          <Image
            className={styles.image}
            src={srcImage}
            alt={title}
            width={628}
            height={330}
            style={{ objectFit: 'cover' }}
          ></Image>
        </article>
      </section>
    </>
  );
}
