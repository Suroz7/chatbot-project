# AI Chat Generation Project

A modern, responsive chat interface that leverages the DeepSeek-R1 model for AI-powered conversations.

## Features

- 🌓 Dark theme modern UI
- 💬 Real-time chat interface
- 🤖 Powered by DeepSeek-R1 AI model
- ⚡ Fast and responsive design
- 🎯 Simple and intuitive user experience
- ⌨️ Enter key support for sending messages

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/chatbot-project.git
cd chatbot-project
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

### Environment Setup

1. Get your HuggingFace API key:
   
   - Create a new API token

2. Create a `.env` file in the root directory:
```bash
REACT_APP_HUGGINGFACE_API_KEY=your_api_key_here
```

⚠️ Important:
- Keep your API key secret and secure
- See [HuggingFace API documentation](https://huggingface.co/docs/api-inference/quicktour) for more details

### Running the Application

3. Start the development server:
```bash
npm start
# or
yarn start
```

## Project Structure

```
chatbot-project/
├── src/
│   ├── ai/
│   │   └── huggingface.ts    # AI model integration
│   ├── assets/
│   │   └── chatpage.css      # Styling
│   ├── pages/
│   │   └── ChatPage.tsx      # Main chat interface
│   └── App.tsx
├── public/
└── package.json
```

## Technology Stack

- React
- TypeScript
- HuggingFace API
- CSS3 with modern features

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
 -Hugging face for API
- DeepSeek-R1 for the AI model
- React community for the awesome framework
