import style from './Footer.module.scss';

const Footer = () => (
  <div className={style.Footer}>
    2022 | By Maks Klimov | Open Source |
    {' '}
    <a href="https://github.com/MaksKlimov/zonal" target="_blank" rel="noreferrer">GitHub</a>
  </div>
);

export default Footer;
