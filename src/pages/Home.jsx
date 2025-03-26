function Home() {
    return (
      <div style={styles.wrapper}>
        <h1 style={styles.heading}>Dear You,</h1>
        <p style={styles.subheading}>You are loved. You are enough. You belong here.</p>
  
        <button style={styles.button}>
          Read a Letter 💌
        </button>
      </div>
    );
  }
  
  const styles = {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      padding: '2rem',
      textAlign: 'center',
      background: '#fdf6f0',
      fontFamily: '"Segoe UI", sans-serif',
    },
    heading: {
      fontSize: '3rem',
      marginBottom: '1rem',
      color: '#333',
    },
    subheading: {
      fontSize: '1.5rem',
      marginBottom: '2rem',
      color: '#666',
      maxWidth: '600px',
    },
    button: {
      padding: '0.8rem 1.5rem',
      fontSize: '1rem',
      border: 'none',
      borderRadius: '999px',
      backgroundColor: '#ffb6b6',
      color: '#fff',
      cursor: 'pointer',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    }
  };
  
  export default Home;
  