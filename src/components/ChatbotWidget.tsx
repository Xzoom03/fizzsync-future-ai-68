
import React, { useEffect } from 'react';

declare global {
  interface Window {
    createChat: (config: {
      webhookUrl: string;
      theme?: {
        customStyles?: string;
      };
    }) => void;
  }
}

const ChatbotWidget = () => {
  useEffect(() => {
    // Load n8n chat stylesheet
    const linkElement = document.createElement('link');
    linkElement.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    linkElement.rel = 'stylesheet';
    document.head.appendChild(linkElement);

    // Load n8n chat script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
    script.type = 'module';
    script.onload = () => {
      // Add a small delay to ensure the script is fully loaded
      setTimeout(() => {
        // Script loaded, now initialize chat
        if (window.createChat) {
          window.createChat({
            webhookUrl: 'https://n8n.srv817113.hstgr.cloud/webhook/f64cefa7-a08c-47dd-a7fe-060100cc3690/chat',
            theme: {
              customStyles: `
                :root {
                  --n8n-chat-border-radius: 12px;
                  --n8n-chat-primary-color: #9B4DFF;
                  --n8n-chat-button-color: #9B4DFF;
                  --n8n-chat-font-family: 'Inter', sans-serif;
                  --n8n-chat-header-background-color: #2D0058;
                  --n8n-chat-background-color: #1A0033;
                  --n8n-chat-message-user-background-color: #9B4DFF;
                  --n8n-chat-message-bot-background-color: rgba(155, 77, 255, 0.2);
                  --n8n-chat-message-bot-text-color: #fff;
                  --n8n-chat-message-user-text-color: #fff;
                  --n8n-chat-button-background-color: #9B4DFF;
                  --n8n-chat-button-color: white;
                  --n8n-chat-launcher-background-color: #9B4DFF;
                  --n8n-chat-input-background-color: rgba(155, 77, 255, 0.1);
                  --n8n-chat-input-text-color: white;
                  --n8n-chat-input-border-color: rgba(155, 77, 255, 0.3);
                  --n8n-chat-header-title-color: white;
                  --n8n-chat-header-subtitle-color: rgba(255, 255, 255, 0.8);
                }
                
                .n8n-chat-widget {
                  z-index: 9999 !important;
                }

                .n8n-chat-widget-launcher {
                  box-shadow: 0 4px 20px rgba(155, 77, 255, 0.5) !important;
                  animation: pulse 2s infinite !important;
                }

                @keyframes pulse {
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
                
                .n8n-chat-widget-container {
                  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5) !important;
                  border: 1px solid rgba(155, 77, 255, 0.3) !important;
                  backdrop-filter: blur(10px) !important;
                }

                .n8n-chat-header {
                  border-bottom: 1px solid rgba(155, 77, 255, 0.2) !important;
                }

                .n8n-chat-footer {
                  border-top: 1px solid rgba(155, 77, 255, 0.2) !important;
                }
              `
            }
          });
          
          // Add a custom style to ensure the chat is visible and above other elements
          const styleElement = document.createElement('style');
          styleElement.textContent = `
            .n8n-chat-widget {
              z-index: 9999 !important;
              position: fixed !important;
              bottom: 20px !important;
              right: 20px !important;
              display: block !important;
              visibility: visible !important;
              opacity: 1 !important;
            }
          `;
          document.head.appendChild(styleElement);
        } else {
          console.error('Chat widget could not be initialized. createChat is not available.');
        }
      }, 500);
    };
    
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.head.removeChild(linkElement);
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      // Remove any chat widget elements that might have been created
      const chatElements = document.querySelectorAll('.n8n-chat-widget');
      chatElements.forEach(el => el.parentNode?.removeChild(el));
    };
  }, []);

  return null; // This component doesn't render anything itself
};

export default ChatbotWidget;
