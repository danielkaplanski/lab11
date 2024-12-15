// components/MainHeader.js
import Link from 'next/link';
import Image from 'next/image'; // importujemy Image z Next.js
import styles from './main-header.module.css'; // importujemy plik CSS

import MealsIcon from '../assets/icons/meal.png';
import ShareIcon from '../assets/icons/events.png';
import CommunityIcon from '../assets/icons/community.png';

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link href="/meals" className={styles.menuLink}>
              <Image src={MealsIcon} alt="Meals Icon" className={styles.icon} />
              Meals
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/meals/share" className={styles.menuLink}>
              <Image src={ShareIcon} alt="Share Icon" className={styles.icon} />
              Share a Meal
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/community" className={styles.menuLink}>
              <Image src={CommunityIcon} alt="Community Icon" className={styles.icon} />
              Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
