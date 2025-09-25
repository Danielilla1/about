// Update time every second
function showTime() {
    document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
    showTime();
}, 1000);

// Handle form submission
document.getElementById('submit-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input');
    const responseElement = document.getElementById('ai-response');
    
    if (userInput.value.trim() === '') return;
    
    // Add typing animation
    responseElement.innerHTML = '';
    responseElement.classList.add('typing');
    
    // Simulate AI processing
    setTimeout(() => {
        // Remove typing animation
        responseElement.classList.remove('typing');
        
        // Generate response based on input
        const responses = [
            "I've analyzed your query about \"" + userInput.value + "\". Based on YouTube trends, I can provide insights on this topic.",
            "Thanks for asking about \"" + userInput.value + "\". I've found relevant YouTube content that might help you understand this better.",
            "Regarding \"" + userInput.value + "\", I've processed your request and found popular videos discussing this subject.",
            "I've received your question about \"" + userInput.value + "\". Here's what YouTube data shows: This is a trending topic with significant engagement.",
            "Great question about \"" + userInput.value + "\"! Based on YouTube analytics, I can share the most relevant content and insights."
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        responseElement.innerHTML = randomResponse;
        
        // Add animation to response
        responseElement.style.opacity = '0';
        responseElement.style.transform = 'translateY(10px)';
        setTimeout(() => {
            responseElement.style.transition = 'all 0.5s ease';
            responseElement.style.opacity = '1';
            responseElement.style.transform = 'translateY(0)';
        }, 10);
        
        // Clear input
        userInput.value = '';
    }, 1500);
});

// Add Enter key support
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('submit-btn').click();
    }
});

// Add animation to feature cards on scroll
const featureCards = document.querySelectorAll('.feature-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

featureCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Add hover effect to input field
const inputField = document.getElementById('user-input');
inputField.addEventListener('focus', function() {
    this.style.background = 'rgba(255, 255, 255, 0.15)';
    this.style.boxShadow = '0 0 0 2px #ff0000';
});

inputField.addEventListener('blur', function() {
    this.style.background = 'rgba(255, 255, 255, 0.1)';
    this.style.boxShadow = 'none';
});

// Add hover effect to video cards
const videoCards = document.querySelectorAll('.video-card');
videoCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// YouTube API Integration
const API_KEY = 'YOUR_YOUTUBE_API_KEY'; // Replace with your actual YouTube API key
const TRENDING_VIDEOS_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=US&maxResults=6&key=${API_KEY}`;

// Function to fetch trending videos
async function fetchTrendingVideos() {
    const videosContainer = document.getElementById('trending-videos');
    
    // Show loading state
    videosContainer.innerHTML = '<div class="loading">Loading trending videos...</div>';
    
    try {
        const response = await fetch(TRENDING_VIDEOS_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!data.items || data.items.length === 0) {
            throw new Error('No videos found');
        }
        
        // Clear loading state
        videosContainer.innerHTML = '';
        
        // Create video cards
        data.items.forEach(video => {
            const videoCard = document.createElement('div');
            videoCard.className = 'video-card';
            
            const snippet = video.snippet;
            const statistics = video.statistics;
            
            videoCard.innerHTML = `
                <div class="thumbnail">
                    <i class="fas fa-play-circle"></i>
                </div>
                <div class="video-info">
                    <h3>${snippet.title}</h3>
                    <p>${snippet.channelTitle}</p>
                    <p>${parseInt(statistics.viewCount).toLocaleString()} views • ${formatDate(snippet.publishedAt)}</p>
                </div>
            `;
            
            videosContainer.appendChild(videoCard);
        });
        
    } catch (error) {
        console.error('Error fetching videos:', error);
        videosContainer.innerHTML = '<div class="error">Failed to load trending videos. Please try again later.</div>';
    }
}

// Helper function to format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return '1 day ago';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    
    return date.toLocaleDateString();
}

// Load trending videos when page loads
document.addEventListener('DOMContentLoaded', fetchTrendingVideos);
