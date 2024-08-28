/* General Styles */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f4f4f4;
    color: #333;
}

header {
    background-color: #333;
}

.header-image img {
    width: 100%;
    height: auto;
}

.nav-links {
    display: flex;
    justify-content: center;
    background-color: #444;
    padding: 10px 0;
}

.nav-links li {
    list-style: none;
    margin: 0 15px;
}

.nav-links a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: #e67e22;
}

/* Hero Section */
.hero {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 80px 20px;
    position: relative;
}

.hero-content {
    max-width: 600px;
    margin: 0 auto;
    animation: fadeInUp 1s ease-in-out;
}

.hero h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 30px;
}

.btn {
    background-color: #e67e22;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btn:hover {
    background-color: #d35400;
}

/* Sections */
.section {
    padding: 60px 20px;
    text-align: center;
}

.about {
    background-color: #fff;
}

.schedule {
    background-color: #f9f9f9;
}

.schedule-timeline {
    max-width: 800px;
    margin: 0 auto;
}

.timeline-item {
    margin-bottom: 30px;
    padding-left: 20px;
    border-left: 3px solid #e67e22;
    text-align: left;
}

.timeline-item h3 {
    margin-bottom: 5px;
}

.speakers {
    background-color: #fff;
}

.speakers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    max-width: 1000px;
    margin: 0 auto;
}

.speaker img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    margin-bottom: 15px;
}

.register {
    background-color: #333;
    color: #fff;
}

/* Footer */
footer {
    background-color: #444;
    color: #fff;
    padding: 30px 20px;
    text-align: center;
}

/* Animations */
@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
