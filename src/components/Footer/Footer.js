import styles from "./Footer.module.scss";
function Footer() {
  return (
    <footer className={styles.footer}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d637.6395115354966!2d28.6972823!3d50.2628381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c64a804870d65%3A0xea160eb6d5433034!2z0YPQuy4g0JHQvtGA0LjRgdCwINCi0LXQvdCwLCAxMjUsINCW0LjRgtC-0LzQuNGALCDQltC40YLQvtC80LjRgNGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAxMDAwMQ!5e0!3m2!1sru!2sua!4v1690724522403!5m2!1sru!2sua"
        width="100%"
        height="auto"
        style={{ border: 0, minHeight: "250px", }}
        title="КОД БАЗА"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </footer>
  );
}

export default Footer;
