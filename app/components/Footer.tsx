// components/Footer.js
import Image from 'next/image'

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.logoContainer}>
          <Image 
            src="/photos/logo1.webp" 
            alt="Logo 1" 
            width={100} 
            height={50} 
            style={styles.logo}
          />
          <Image 
            src="/photos/logo2.png" 
            alt="Logo 2" 
            width={100} 
            height={50} 
            style={styles.logo}
          />
          {/* Add more logos as needed */}
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    padding: '20px 0',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  logo: {
    objectFit: 'contain',
  },
}

export default Footer
