
import { useEffect } from 'react';

const ChatbotWidget = () => {
  useEffect(() => {
    // Load the N8N Chat script dynamically
    const loadChat = async () => {
      try {
        // Add the stylesheet
        const link = document.createElement('link');
        link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);
        
        // Load script dynamically
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js";
        script.type = "module";
        
        // Create and execute the chat initialization after script loads
        script.onload = () => {
          // Create a new script element to initialize the chat
          const initScript = document.createElement('script');
          initScript.type = "module";
          initScript.textContent = `
            import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
            
            createChat({
              webhookUrl: '',
              webhookConfig: {
                method: 'POST',
                headers: {}
              },
              target: '#n8n-chat',
              mode: 'window',
              chatInputKey: 'chatInput',
              chatSessionKey: 'sessionId',
              metadata: {},
              showWelcomeScreen: false,
              defaultLanguage: 'en',
              initialMessages: [
                'Hello there! 👋',
                'I\\'m Fizzer, your AI automation assistant. How can I help you automate your business tasks today?',
                'I can provide information about our AI automation solutions, integration options, or help you get started with FizzSync.'
              ],
              i18n: {
                en: {
                  title: 'Chat with Fizzer',
                  subtitle: "Your AI automation assistant is here to help 24/7.",
                  footer: 'Powered by FizzSync AI',
                  getStarted: 'New Conversation',
                  inputPlaceholder: 'Ask me about AI automation...',
                },
              },
            });
          `;
          document.head.appendChild(initScript);
        };
        
        document.head.appendChild(script);
        console.info('n8n chat script loading');
      } catch (error) {
        console.error('Failed to load n8n chat:', error);
      }
    };

    loadChat();
    
    // Clean up function
    return () => {
      // Remove the added elements if component unmounts
      const linkElement = document.querySelector('link[href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css"]');
      if (linkElement) {
        linkElement.remove();
      }
      
      // Remove any script elements we added
      const scripts = document.querySelectorAll('script[src="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js"]');
      scripts.forEach(script => script.remove());
      
      // Remove the chat widget if it exists
      const chatElement = document.querySelector('.n8n-chat');
      if (chatElement) {
        chatElement.remove();
      }
    };
  }, []);

  return (
    <div id="n8n-chat" className="chatbot-container"></div>
  );
};

export default ChatbotWidget;
