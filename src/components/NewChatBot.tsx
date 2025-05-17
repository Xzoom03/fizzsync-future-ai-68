
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
            webhookUrl: 'https://n8n.srv817113.hstgr.cloud/webhook/f64cefa7-a08c-47dd-a7fe-060100cc3690/chat',
            botName: 'Fizzer'
          });
        `;
        document.body.appendChild(script);

        // Add custom styles for chatbot
        const styleElement = document.createElement('style');
        styleElement.textContent = `
          .n8n-chat__toggle {
            border-radius: 50% !important;
            box-shadow: 0 0 20px rgba(155, 77, 255, 0.6), 
                        0 0 10px rgba(155, 77, 255, 0.4),
                        0 0 5px rgba(155, 77, 255, 0.3) !important;
            background: linear-gradient(135deg, #9B4DFF, #6A0DAD) !important;
            animation: pulse-purple 2s infinite ease-in-out !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out !important;
            position: fixed !important;
            bottom: 20px !important;
            right: 20px !important;
            z-index: 1000 !important;
          }

          .n8n-chat__toggle:hover {
            transform: scale(1.05) !important;
            box-shadow: 0 0 25px rgba(155, 77, 255, 0.8), 
                        0 0 15px rgba(155, 77, 255, 0.6),
                        0 0 10px rgba(155, 77, 255, 0.4) !important;
          }

          .n8n-chat__toggle::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: rgba(155, 77, 255, 0.4);
            z-index: -1;
            animation: pulse-ring 2.5s infinite ease-out;
          }

          .n8n-chat__window {
            border-radius: 1rem !important;
            overflow: hidden !important;
            backdrop-filter: blur(10px) !important;
            box-shadow: 0 0 30px rgba(155, 77, 255, 0.4), 
                        0 0 15px rgba(155, 77, 255, 0.3),
                        0 0 5px rgba(155, 77, 255, 0.2) !important;
            border: 1px solid rgba(155, 77, 255, 0.2) !important;
            background: rgba(26, 0, 51, 0.85) !important;
          }

          .n8n-chat__messages {
            background: linear-gradient(180deg, rgba(26, 0, 51, 0.95), rgba(45, 0, 88, 0.85)) !important;
            padding: 1rem !important;
          }

          .n8n-chat__message-bubble--bot {
            position: relative !important;
            background: rgba(155, 77, 255, 0.15) !important;
            border: 1px solid rgba(155, 77, 255, 0.2) !important;
            color: #D4AFFF !important;
            border-radius: 1.2rem 1.2rem 1.2rem 0 !important;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) !important;
            backdrop-filter: blur(5px) !important;
          }

          .n8n-chat__message-bubble--user {
            background: linear-gradient(135deg, #6A0DAD, #9B4DFF) !important;
            border-radius: 1.2rem 1.2rem 0 1.2rem !important;
            color: white !important;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15) !important;
          }

          .n8n-chat__header {
            background: linear-gradient(135deg, #1A0033, #2D0058) !important;
            position: relative !important;
            overflow: hidden !important;
          }

          .n8n-chat__header::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, 
                      transparent 30%, 
                      rgba(155, 77, 255, 0.1) 45%, 
                      rgba(155, 77, 255, 0.2) 50%, 
                      rgba(155, 77, 255, 0.1) 55%, 
                      transparent 70%);
            background-size: 200% 200%;
            animation: shine 3s infinite linear;
          }

          .n8n-chat__input-wrapper {
            background: rgba(26, 0, 51, 0.8) !important;
            border-top: 1px solid rgba(155, 77, 255, 0.2) !important;
            padding: 1rem !important;
          }

          .n8n-chat__textarea {
            background: rgba(155, 77, 255, 0.1) !important;
            border: 1px solid rgba(155, 77, 255, 0.2) !important;
            border-radius: 1rem !important;
            color: #D4AFFF !important;
            transition: border-color 0.3s, box-shadow 0.3s !important;
          }

          .n8n-chat__textarea:focus {
            border-color: rgba(155, 77, 255, 0.4) !important;
            box-shadow: 0 0 0 2px rgba(155, 77, 255, 0.2) !important;
            outline: none !important;
          }

          .n8n-chat__send-button {
            background: linear-gradient(135deg, #9B4DFF, #6A0DAD) !important;
            border-radius: 50% !important;
            box-shadow: 0 0 10px rgba(155, 77, 255, 0.3) !important;
            transition: transform 0.3s !important;
          }

          .n8n-chat__send-button:hover {
            transform: scale(1.1) !important;
          }

          @keyframes pulse-purple {
            0% {
              box-shadow: 0 0 0 0 rgba(155, 77, 255, 0.7);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(155, 77, 255, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(155, 77, 255, 0);
            }
          }

          @keyframes pulse-ring {
            0% {
              transform: scale(1);
              opacity: 0.7;
            }
            70% {
              transform: scale(1.5);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 0;
            }
          }

          @keyframes shine {
            0% {
              background-position: 200% 0;
            }
            100% {
              background-position: -200% 0;
            }
          }
        `;
        document.head.appendChild(styleElement);
        
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
      
      const styleElement = document.querySelector('style');
      if (styleElement && styleElement.textContent.includes('n8n-chat')) {
        styleElement.remove();
      }
      
      const chatElement = document.querySelector('.n8n-chat');
      if (chatElement) {
        chatElement.remove();
      }
    };
  }, []);

  return <div className="n8n-chat-container" />;
};

export default NewChatBot;
