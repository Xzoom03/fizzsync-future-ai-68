
import { useEffect } from 'react';

const NewChatBot = () => {
  useEffect(() => {
    // Load the N8N Chat components
    const loadChat = () => {
      try {
        // Add the stylesheet
        const link = document.createElement('link');
        link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);
        
        // Add the script and create chat instance
        const script = document.createElement('script');
        script.type = "module";
        script.textContent = `
          import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

          createChat({
            webhookUrl: 'https://n8n.srv817113.hstgr.cloud/webhook/f64cefa7-a08c-47dd-a7fe-060100cc3690/chat'
          });
        `;
        document.body.appendChild(script);
        
        console.info('n8n chat script loaded');
      } catch (error) {
        console.error('Failed to load n8n chat:', error);
      }
    };

    // Make sure to wait for DOM to be fully loaded
    if (document.readyState === 'complete') {
      loadChat();
    } else {
      window.addEventListener('load', loadChat);
      return () => window.removeEventListener('load', loadChat);
    }

    // Cleanup function
    return () => {
      const linkElement = document.querySelector('link[href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css"]');
      if (linkElement) {
        linkElement.remove();
      }
      
      const scriptElements = document.querySelectorAll('script[type="module"]');
      scriptElements.forEach(script => {
        if (script.textContent && script.textContent.includes('createChat')) {
          script.remove();
        }
      });
      
      const chatElement = document.querySelector('.n8n-chat');
      if (chatElement) {
        chatElement.remove();
      }
    };
  }, []);

  return <div className="n8n-chat-container" />;
};

export default NewChatBot;
