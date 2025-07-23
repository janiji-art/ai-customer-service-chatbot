# AI Customer Service Chatbot 🤖

A modern conversational AI system for customer service with voice recognition and sentiment analysis capabilities.

![AI Customer Service](https://img.shields.io/badge/AI-Customer%20Service-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0.0-green?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

## 🌟 Features

- **🤖 Intelligent Chatbot**: Context-aware responses with pre-trained knowledge base
- **🎤 Voice Recognition**: Hands-free interaction using Web Speech API
- **😊 Sentiment Analysis**: Real-time emotion detection and adaptive responses
- **⚡ Quick Actions**: Pre-defined buttons for common customer queries
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **🎨 Modern UI**: Sleek design with smooth animations and gradients
- **🧠 Context Memory**: Remembers conversation history for better assistance
- **🔄 Real-time Feedback**: Typing indicators and visual status updates

## 🚀 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **APIs**: Web Speech Recognition API
- **AI Features**: Custom NLP for sentiment analysis and query categorization
- **Design**: CSS Grid, Flexbox, CSS Animations
- **Architecture**: Object-oriented JavaScript with modular design

## 📋 Knowledge Base Categories

The AI assistant can handle queries in these areas:

1. **📦 Order Management**
   - Order tracking and status
   - Delivery information
   - Order modifications

2. **🔧 Technical Support**
   - Troubleshooting issues
   - Bug reports
   - System problems

3. **💳 Billing & Payments**
   - Payment questions
   - Refund requests
   - Account billing

4. **↩️ Returns & Exchanges**
   - Return policy information
   - Exchange procedures
   - Defective item handling

## 🛠️ Installation & Setup

### Option 1: Direct Usage
1. Download the `index.html` file
2. Open it in any modern web browser
3. Start chatting with the AI assistant!

### Option 2: Local Development
```bash
# Clone the repository
git clone https://github.com/yourusername/ai-customer-service-chatbot.git

# Navigate to project directory
cd ai-customer-service-chatbot

# Open in browser
open index.html
# or
python -m http.server 8000  # For Python 3
# or
python -m SimpleHTTPServer 8000  # For Python 2
```

### Option 3: GitHub Pages
1. Fork this repository
2. Go to Settings → Pages
3. Select "Deploy from a branch" → main branch
4. Your site will be live at `https://yourusername.github.io/ai-customer-service-chatbot`

## 💡 How to Use

1. **Text Input**: Type your message in the input field and press Enter or click Send
2. **Voice Input**: Click the microphone button and speak your query
3. **Quick Actions**: Use the preset buttons for common questions
4. **Sentiment Feedback**: Notice the colored dots indicating conversation sentiment

## 🎯 Core Functionality

### Sentiment Analysis
The system analyzes customer messages and categorizes them as:
- 🟢 **Positive**: Happy, satisfied customers
- 🟠 **Neutral**: Standard inquiries
- 🔴 **Negative**: Frustrated or disappointed customers

### Response Generation
- **Context-Aware**: Remembers previous messages in the conversation
- **Category-Based**: Responds based on detected query type
- **Sentiment-Adaptive**: Adjusts tone based on customer emotion
- **Dynamic**: Generates varied responses to avoid repetition

## 🔧 Customization

### Adding New Categories
```javascript
// In the loadKnowledgeBase() method, add:
'new_category': {
    keywords: ['keyword1', 'keyword2', 'keyword3'],
    responses: [
        "Response 1 for this category",
        "Response 2 for this category",
        "Response 3 for this category"
    ]
}
```

### Modifying Sentiment Analysis
```javascript
// Update the word lists in analyzeSentiment() method
const positiveWords = ['great', 'good', 'excellent', /* add more */];
const negativeWords = ['bad', 'terrible', 'awful', /* add more */];
```

### Styling Customization
- Modify CSS variables in the `<style>` section
- Update color schemes, fonts, and animations
- Customize the gradient backgrounds and button styles

## 🌐 Browser Compatibility

- ✅ Chrome 25+
- ✅ Firefox 44+
- ✅ Safari 14.1+
- ✅ Edge 79+
- ⚠️ Voice recognition requires HTTPS in production

## 📱 Mobile Support

The application is fully responsive and includes:
- Touch-friendly interface
- Mobile-optimized layouts
- Gesture support for voice input
- Adaptive font sizes

## 🔒 Privacy & Security

- No data is stored on external servers
- All processing happens locally in the browser
- Voice data is processed by browser's built-in speech recognition
- No personal information is transmitted

## 🚀 Future Enhancements

- [ ] Integration with real AI models (GPT, Claude)
- [ ] Multi-language support
- [ ] Chat history persistence
- [ ] File upload capabilities
- [ ] Integration with ticketing systems
- [ ] Advanced analytics dashboard
- [ ] Custom voice training
- [ ] Webhook integrations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [janiji-art](https://github.com/janiji-art))
- LinkedIn: [jinil-jani](www.linkedin.com/in/jinil-jani-24b043267)
- Email: janijineel@gmail.com

## 🙏 Acknowledgments

- Web Speech API for voice recognition capabilities
- Modern CSS techniques for responsive design
- JavaScript ES6+ features for clean code architecture

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/ai-customer-service-chatbot?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/ai-customer-service-chatbot?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/ai-customer-service-chatbot)

---

⭐ **Star this repository if you found it helpful!**

[🚀 Live Demo](https://yourusername.github.io/ai-customer-service-chatbot) | [📝 Documentation](docs/) | [🐛 Report Bug](issues/) | [💡 Request Feature](issues/)
