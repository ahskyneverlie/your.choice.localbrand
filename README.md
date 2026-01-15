# My Social Media Links - Linktree Clone

A beautiful, modern, and responsive social media link hub inspired by Linktree. Perfect for sharing all your social media profiles in one place!

## 🎨 Features

- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Modern UI** - Beautiful gradient backgrounds and smooth animations
- **Social Media Integration** - Direct links to Facebook, Instagram, TikTok, and Telegram
- **Interactive Elements** - Hover effects, tooltips, and animations
- **Additional Links** - Email and contact form functionality
- **Fast & Lightweight** - Pure HTML, CSS, and JavaScript (no frameworks)
- **Customizable** - Easy to personalize with your own links and information

## 📂 Project Structure

```
Link Tree/
├── index.html      # Main HTML file with social media links
├── styles.css      # Complete styling with animations and gradients
├── script.js       # JavaScript for interactivity and features
├── img/            # Folder for images (place your profile picture here)
└── README.md       # This file
```

## 🚀 Quick Start

1. **Download/Clone the Project** - Get all files to your computer

2. **Add Your Profile Picture**
   - Place your profile image in the `img/` folder
   - Name it `profile.jpg` (or update the filename in `index.html`)

3. **Update Your Information** - Open `index.html` and replace:
   - `Your Name Here` - with your actual name
   - Social media URLs:
     - `https://www.facebook.com/yourprofile`
     - `https://www.instagram.com/yourprofile`
     - `https://www.tiktok.com/@yourprofile`
     - `https://t.me/yourprofile`

4. **Open in Browser** - Simply double-click `index.html` or drag it to your browser

## 📝 How to Customize

### Change Your Name & Bio
```html
<h1 class="profile-name">Your Name Here</h1>
<p class="profile-bio">Connect with me on social media</p>
```

### Update Social Media Links
Find each social link section and replace the `href`:
```html
<a href="https://www.facebook.com/yourprofile" target="_blank" class="social-link facebook">
    <i class="fab fa-facebook-f"></i>
    <span>Facebook</span>
</a>
```

### Change Colors & Gradients
In `styles.css`, modify the background gradients in:
```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* Change these colors to your preference */
}
```

### Update Email Address
In `script.js`, find and update:
```javascript
window.location.href = `mailto:your.email@example.com?subject=Message from Your Portfolio`;
```

## 🎯 Customization Tips

1. **Profile Picture** - Use a square image for best results
2. **Colors** - Use online gradient generators to create custom color schemes
3. **Social Media URLs** - Get the correct URLs from your social profiles
4. **Bio Text** - Keep it short and catchy (1-2 lines)
5. **Footer** - Update the year and your name in the footer

## 🌟 Adding More Social Platforms

To add another social platform:

1. Find the links section in `index.html`
2. Copy a social link block and modify:
```html
<a href="YOUR_LINK_HERE" target="_blank" class="social-link youtube" data-tooltip="Subscribe on YouTube">
    <i class="fab fa-youtube"></i>
    <span>YouTube</span>
</a>
```

3. Add styling in `styles.css`:
```css
.social-link.youtube {
    background: linear-gradient(135deg, #FF0000 0%, #cc0000 100%);
}
```

## 📱 Responsive Breakpoints

The site is optimized for:
- **Desktop**: 1920px and above
- **Tablet**: 768px - 1024px
- **Mobile**: 320px - 767px

## 🎬 Features Explained

### Interactive Contact Form
Click "Contact Form" to open a modal where visitors can send you a message directly.

### Email Functionality
Click "Email Me" to prompt users to email you (requires email client configured on their device).

### Hover Effects
- Social links lift up on hover
- Icons scale smoothly
- Tooltips appear on hover
- Smooth color transitions

### Animations
- Smooth slide-up animation on page load
- Hover animations for all interactive elements
- Fade-in effects for modals and notifications
- Smooth scroll parallax effect

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Contact & Support

For questions or to customize further:
1. Edit the contact form email in `script.js`
2. Test all links before sharing
3. Check mobile view for responsiveness

## 📄 License

Free to use and customize for personal use.

## 🎓 Tips for Success

1. **Keep Profile Picture Updated** - Use a recent, professional photo
2. **Test All Links** - Make sure every social media link works
3. **Mobile First** - Always preview on mobile devices
4. **Share Your Link** - Update your bio on all platforms to direct people here
5. **Monitor Traffic** - Add analytics to track visitor engagement

---

**Happy sharing!** 🎉

Make your social presence centralized and easy to find!
