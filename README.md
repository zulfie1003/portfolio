# 🎨 3D Personal Portfolio Website

A stunning, interactive personal portfolio website built with **vanilla HTML, CSS, and JavaScript** featuring 3D animations, glassmorphism effects, and modern UI design.

![Portfolio Preview](https://via.placeholder.com/800x400/6366f1/ffffff?text=Portfolio+Preview)

## ✨ Features

### 🎯 **Interactive 3D Elements**
- **VanillaTilt.js** integration for 3D card tilting effects
- **3D flip cards** for education, experience, and projects
- **Glassmorphism** design with backdrop blur effects
- **Neon glow buttons** with hover animations

### 🌟 **Visual Effects & Animations**
- **ScrollReveal.js** for section animations
- **Parallax scrolling** effects
- **Animated skill bars** that fill on scroll
- **Smooth transitions** and micro-interactions
- **Dark/Light theme toggle** with local storage

### 📱 **Responsive Design**
- **Mobile-first** approach
- **Hamburger menu** for mobile navigation
- **Touch-friendly** interactions
- **Cross-browser** compatibility

### 🎨 **Modern UI/UX**
- **Gradient backgrounds** and text effects
- **Floating labels** on form inputs
- **Real-time form validation**
- **Active navigation** highlighting
- **Custom scrollbar** styling

## 🚀 Quick Start

### Prerequisites
- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone or download** the project files
2. **Open** `index.html` in your browser
3. **Customize** the content to match your information

### File Structure
```
portfolio/
├── index.html          # Main HTML file
├── style.css           # All styles and animations
├── script.js           # Interactive functionality
├── README.md           # This file
└── assets/
    ├── images/         # Your images and photos
    └── resume.pdf      # Your resume (optional)
```

## 🎨 Customization Guide

### 1. **Personal Information**
Edit the following sections in `index.html`:

```html
<!-- Update your name -->
<span class="name">Your Name</span>

<!-- Update your title -->
<p class="hero-subtitle">Full Stack Developer & UI/UX Designer</p>

<!-- Update your description -->
<p class="hero-description">Crafting digital experiences with code and creativity</p>
```

### 2. **Profile Photo**
Replace the placeholder image:
```html
<img src="assets/images/your-photo.jpg" alt="Julfekar Ali">
```

### 3. **Skills Section**
Update the skill percentages in `index.html`:
```html
<div class="skill-fill" data-percent="95"></div>
```

### 4. **Projects**
Add your projects in the projects section:
```html
<div class="project-card" data-tilt data-tilt-max="15" data-tilt-speed="400">
    <div class="project-image">
        <img src="assets/images/project1.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description here...</p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
        </div>
        <div class="project-links">
            <a href="your-github-link" class="project-link">
                <i class="fab fa-github"></i> Code
            </a>
            <a href="your-live-link" class="project-link">
                <i class="fas fa-external-link-alt"></i> Live
            </a>
        </div>
    </div>
</div>
```

### 5. **Contact Information**
Update your contact details:
```html
<p>your.email@example.com</p>
<p>+91 7054370104</p>
<p>Greater Noida , Uttar Pardesh INDIA</p>
```

### 6. **Social Links**
Update your social media links:
```html
<a href="yourhttps://github.com/zulfie1003" class="social-link">
    <i class="fab fa-github"></i>
</a>
<a href="https://www.linkedin.com/in/zulfiquar-ali-931774281/" class="social-link">
    <i class="fab fa-linkedin"></i>
</a>
```

### 7. **Color Scheme**
Customize colors in `style.css`:
```css
:root {
    --primary-color: #6366f1;    /* Main brand color */
    --secondary-color: #8b5cf6;  /* Secondary color */
    --accent-color: #ec4899;     /* Accent color */
}
```

### 8. **Resume Download**
Add your resume file:
1. Place your resume PDF in `assets/resume.pdf`
2. Update the filename in `script.js`:
```javascript
link.download = 'YourName_Resume.pdf';
```

## 🔧 Advanced Customization

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `style.css`
3. Add scroll reveal animations in `script.js`

### Custom Animations
Add new CSS animations:
```css
@keyframes yourAnimation {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}
```

### Form Integration
To enable real form submission, uncomment and configure the fetch code in `script.js`:
```javascript
fetch('https://formspree.io/f/your-form-id', {
    method: 'POST',
    body: formData,
    headers: {
        'Accept': 'application/json'
    }
})
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ Internet Explorer (not supported)

## 🎯 Performance Tips

1. **Optimize images** before adding to `assets/images/`
2. **Compress CSS/JS** for production
3. **Use WebP format** for images when possible
4. **Minify files** before deployment

## 🚀 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Your site will be deployed instantly
3. Get a custom domain if needed

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy your site
3. Get a custom domain and SSL certificate

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you make improvements, consider sharing them with the community!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **VanillaTilt.js** for 3D tilt effects
- **ScrollReveal.js** for scroll animations
- **Font Awesome** for icons
- **Google Fonts** for typography

## 📞 Support

If you need help customizing this portfolio or have questions, feel free to reach out!

---

**Made with ❤️ using HTML, CSS, and JavaScript**

*Perfect for developers, designers, and creatives looking to showcase their work with style!* 