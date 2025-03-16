
// SuccessPage.js
import React from 'react';

function SuccessPage() {
  // Inline styles
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg,rgb(243, 106, 115),rgb(127, 11, 14))',
      padding: '20px',
    },
    card: {
      background: 'white',
      padding: '40px',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      maxWidth: '500px',
      width: '100%',
      animation: 'fadeIn 1s ease-in-out',
    },
    title: {
      fontSize: '2.5rem',
      color: '#333',
      marginBottom: '20px',
    },
    message: {
      fontSize: '1.2rem',
      color: '#555',
      marginBottom: '30px',
    },
    animationContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '30px',
    },
    checkmark: {
      fontSize: '5rem',
      color: '#4caf50',
      animation: 'bounce 1s ease-in-out',
    },
    button: {
      background: '#6a11cb',
      color: 'white',
      border: 'none',
      padding: '15px 30px',
      fontSize: '1rem',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    },
    buttonHover: {
      background: '#2575fc',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>تم ارسال الطلب بنجاح ! 🎉</h1>
        <p style={styles.message}>
        شكرًا لطلبك. سيتم معالجته قريبًا.
        .
        </p>
        <div style={styles.animationContainer}>
          <div style={styles.checkmark}>✓</div>
        </div>
        <button
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.background = styles.buttonHover.background)}
          onMouseLeave={(e) => (e.target.style.background = styles.button.background)}
          onClick={() => (window.location.href = '/')}
        >
          الرجوع للصفحه الرئيسيه
        </button>
      </div>
    </div>
  );
}

export default SuccessPage;