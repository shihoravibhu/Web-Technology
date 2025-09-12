import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, BookOpen, Heart, Star } from 'lucide-react';
import './Ai.css';

const BhagavadGitaChatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "🙏 Namaste! I am here to share the eternal wisdom of the Bhagavad Gita with you. Ask me about dharma, karma, devotion, or any life guidance you seek. How may I help you on your spiritual journey today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sampleQuestions = [
    "What is dharma?",
    "How to find inner peace?",
    "What does Krishna say about karma?",
    "How to overcome fear and doubt?"
  ];

  const getKrishnaResponse = (userMessage) => {
    const responses = [
      "\"You have a right to perform your prescribed duty, but not to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.\" (BG 2.47)\n\nThis verse teaches us about performing our duties without attachment to results. Focus on your actions with sincerity, and let the universe handle the outcomes.",
      
      "\"For the soul there is neither birth nor death nor having once been does it ever cease to be. It is unborn, eternal, permanent and primeval.\" (BG 2.20)\n\nRemember that you are an eternal soul, not just this temporary body. This understanding brings peace and removes the fear of death.",
      
      "\"When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.\" (BG 6.19)\n\nCultivate inner stillness through regular meditation and spiritual practice. A calm mind reflects divine wisdom clearly.",
      
      "\"Those who are free from anger and all material desires, who are self-realized, self-disciplined and constantly endeavoring for perfection, are assured of liberation in the Supreme.\" (BG 5.26)\n\nTrue freedom comes from mastering your emotions and desires, not being enslaved by them.",
      
      "\"Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.\" (BG 18.66)\n\nComplete surrender to the Divine removes all fears and burdens. Trust in the Supreme consciousness that guides all existence."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        content: getKrishnaResponse(input),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuestionClick = (question) => {
    setInput(question);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="ai-bg min-h-screen">
      {/* Header */}
      <header className="ai-header">
        <div className="ai-header-content">
          <BookOpen className="ai-header-icon" />
          <Sparkles className="ai-header-sparkle" />
          <h1 className="ai-title">Bhagavad Gita AI</h1>
          <p className="ai-subtitle">Eternal Wisdom from Lord Krishna</p>
        </div>
      </header>

      <div className="ai-container">
        {/* Introduction */}
        <div className="ai-intro">
          <Star className="ai-intro-star" />
          <h2 className="ai-intro-title">Seek Divine Guidance</h2>
          <Star className="ai-intro-star" />
          <p className="ai-intro-text">
            Welcome to the timeless wisdom of the Bhagavad Gita. Ask any question about life, dharma, 
            spirituality, or personal growth, and receive guidance inspired by Lord Krishna's teachings 
            to Arjuna on the battlefield of Kurukshetra.
          </p>
        </div>

        {/* Sample Questions */}
        <div className="ai-sample-questions">
          <h3 className="ai-sample-title">Popular Questions</h3>
          <div className="ai-sample-list">
            {sampleQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuestionClick(question)}
                className="ai-sample-btn"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Messages */}
        <div className="ai-chatbox">
          <div className="ai-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`ai-message ${message.type === 'user' ? 'ai-message-user' : 'ai-message-bot'}`}
              >
                {message.type === 'bot' && (
                  <div className="ai-message-label">
                    <Heart className="ai-message-heart" />
                    <span>Krishna's Wisdom</span>
                  </div>
                )}
                <div className="ai-message-content">{message.content}</div>
              </div>
            ))}
            {isTyping && (
              <div className="ai-message ai-message-bot">
                <div className="ai-message-label">
                  <Heart className="ai-message-heart" />
                  <span>Krishna is reflecting...</span>
                </div>
                <div className="ai-typing-dots">
                  <span className="ai-dot"></span>
                  <span className="ai-dot"></span>
                  <span className="ai-dot"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="ai-input-area">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask for Krishna's wisdom... (e.g., How can I find my purpose in life?)"
              className="ai-input"
              rows={2}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="ai-send-btn"
            >
              <Send className="ai-send-icon" />
              <span>Send</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="ai-footer">
          <p>
            🕉️ "You are what you believe in. You become that which you believe you can become." 
            <br />
            <span>- Bhagavad Gita</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BhagavadGitaChatbot;