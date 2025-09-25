/* styles.css */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #1a2a6c, #b21f1f, #1a2a6c);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.navbar-container {
    position: relative;
    width: 100%;
    max-width: 800px;
    z-index: 10;
}

.navbar-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 50px;
    padding: 15px 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.18);
    width: 180px;
    margin: 0 auto;
}

.navbar-trigger:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
}

.navbar-trigger span {
    color: white;
    font-weight: 600;
    font-size: 18px;
}

.navbar-trigger i {
    color: white;
    font-size: 24px;
}

.navbar-reveal {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 20px;
    margin-top: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.18);
    transform: translateY(-20px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    overflow: hidden;
}

.navbar-reveal.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
}

.navbar-content {
    display: flex;
    justify-content: center;
    gap: 25px;
    flex-wrap: wrap;
}

.nav-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: white;
    transition: all 0.3s ease;
    padding: 15px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    min-width: 100px;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.nav-icon:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.nav-icon i {
    font-size: 32px;
    margin-bottom: 10px;
}

.nav-icon span {
    font-weight: 500;
    font-size: 14px;
}

/* Responsive design */
@media (max-width: 768px) {
    .navbar-trigger {
        padding: 12px 25px;
        width: 150px;
    }
    
    .navbar-trigger span {
        font-size: 16px;
    }
    
    .navbar-content {
        gap: 15px;
    }
    
    .nav-icon {
        min-width: 80px;
        padding: 12px;
    }
    
    .nav-icon i {
        font-size: 24px;
    }
    
    .nav-icon span {
        font-size: 12px;
    }
}

@media (max-width: 480px) {
    .navbar-trigger {
        padding: 10px 20px;
        width: 130px;
    }
    
    .navbar-trigger span {
        font-size: 14px;
    }
    
    .navbar-content {
        gap: 10px;
    }
    
    .nav-icon {
        min-width: 70px;
        padding: 10px;
    }
    
    .nav-icon i {
        font-size: 20px;
    }
    
    .nav-icon span {
        font-size: 10px;
    }
}
