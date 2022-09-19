import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';
import { Image } from 'components/Image';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import Mango from 'assets/logo.png';
import { media } from 'utils/style';


export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <div className={styles.image}>
    <Image
      reveal
      delay={100}
      placeholder={profileImgPlaceholder}
      srcSet={[Mango]}
      sizes={`(max-width: ${media.mobile}px) 7vw, 50px`}
      alt="mm"
    />
    
  </div>
  );
});
