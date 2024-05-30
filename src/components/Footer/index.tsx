import Image from 'next/image';

import styles from './styles.module.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h4 className={styles.title}>CONTATOS</h4>
            {/* Inserir informações de contato aqui */}
          </div>
          <div className={styles.column}>
            <h4 className={styles.title}>Políticas e Segurança</h4>
            {/* Inserir informações de políticas e segurança aqui */}
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles.grid}>
          <div className={styles.flex}>
            <Image
              src="/homeLogo.svg"
              alt="foto da logo portfolioManager"
              width={48}
              height={48}
            />
            <span>{currentYear} - Portfoda, Todos os Direitos Reservados©</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
