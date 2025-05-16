
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

    // Add custom animation keyframes
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @keyframes pulse-glow {
        0% { box-shadow: 0 0 0 0 rgba(155, 77, 255, 0.7); }
        70% { box-shadow: 0 0 0 10px rgba(155, 77, 255, 0); }
        100% { box-shadow: 0 0 0 0 rgba(155, 77, 255, 0); }
      }
      
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .n8n-chat-widget-launcher {
        animation: pulse-glow 2s infinite, float 6s ease-in-out infinite !important;
        transition: all 0.3s ease !important;
      }
      
      .n8n-chat-widget-launcher:hover {
        transform: scale(1.1) translateY(-5px) !important;
      }
      
      .n8n-chat-widget-container {
        animation: fadeIn 0.5s ease-out forwards !important;
        transition: all 0.3s ease !important;
      }
      
      .n8n-chat-message {
        transition: all 0.3s ease !important;
        animation: fadeIn 0.3s ease-out forwards !important;
      }
      
      .n8n-chat-widget-header {
        background-image: linear-gradient(to right, #2D0058, #4B0082) !important;
        transition: all 0.3s ease !important;
      }
    `;
    document.head.appendChild(styleElement);

    // Load n8n chat script
    const script = document.createElement('script');
    script.type = 'module';
    script.onload = () => {
      // Script loaded, now create chat with custom theme
      import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js')
        .then(module => {
          const { createChat } = module;
          createChat({
            webhookUrl: 'https://n8n.srv817113.hstgr.cloud/webhook/f64cefa7-a08c-47dd-a7fe-060100cc3690/chat',
            theme: {
              customStyles: `
                :root {
                  --n8n-chat-border-radius: 16px;
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
                
                /* Modern rounded corners and effects */
                .n8n-chat-widget-launcher {
                  box-shadow: 0 4px 20px rgba(155, 77, 255, 0.5) !important;
                  border-radius: 50% !important;
                  width: 60px !important;
                  height: 60px !important;
                  display: flex !important;
                  align-items: center !important;
                  justify-content: center !important;
                  background: linear-gradient(135deg, #9B4DFF, #6A0DAD) !important;
                  cursor: pointer !important;
                }
                
                .n8n-chat-widget-container {
                  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4) !important;
                  border: 1px solid rgba(155, 77, 255, 0.3) !important;
                  border-radius: 20px !important;
                  overflow: hidden !important;
                }
                
                .n8n-chat-widget-header {
                  padding: 16px !important;
                  border-bottom: 1px solid rgba(155, 77, 255, 0.2) !important;
                }
                
                .n8n-chat-message-bot {
                  border-radius: 18px 18px 18px 4px !important;
                  backdrop-filter: blur(10px) !important;
                }
                
                .n8n-chat-message-user {
                  border-radius: 18px 18px 4px 18px !important;
                  background-image: linear-gradient(135deg, #9B4DFF, #8A3DFF) !important;
                }
                
                .n8n-chat-input {
                  border-radius: 30px !important;
                  padding: 12px 20px !important;
                  backdrop-filter: blur(5px) !important;
                  border: 1px solid rgba(155, 77, 255, 0.4) !important;
                  margin: 10px !important;
                  transition: all 0.3s ease !important;
                }
                
                .n8n-chat-input:focus {
                  border: 1px solid rgba(155, 77, 255, 0.8) !important;
                  box-shadow: 0 0 0 2px rgba(155, 77, 255, 0.2) !important;
                }
                
                .n8n-chat-button {
                  border-radius: 30px !important;
                  transition: all 0.3s !important;
                }
                
                .n8n-chat-button:hover {
                  background-color: #8A3DFF !important;
                  transform: translateY(-2px) !important;
                  box-shadow: 0 5px 15px rgba(155, 77, 255, 0.4) !important;
                }
                
                /* Message bubble shimmer effect */
                .n8n-chat-message-bot::before {
                  content: '';
                  position: absolute;
                  top: 0;
                  right: 0;
                  bottom: 0;
                  left: 0;
                  background: linear-gradient(
                    to right,
                    rgba(155, 77, 255, 0) 0%,
                    rgba(155, 77, 255, 0.1) 50%,
                    rgba(155, 77, 255, 0) 100%
                  );
                  z-index: 1;
                  transform: translateX(-100%);
                  animation: shimmer 3s infinite;
                }
                
                @keyframes shimmer {
                  100% {
                    transform: translateX(100%);
                  }
                }
                
                /* Typing indicator animation */
                .n8n-chat-typing-indicator span {
                  background-color: rgba(255, 255, 255, 0.7) !important;
                  width: 8px !important;
                  height: 8px !important;
                  border-radius: 50% !important;
                  display: inline-block !important;
                  margin: 0 2px !important;
                }
              `
            }
          });
        })
        .catch(error => {
          console.error('Error loading n8n chat:', error);
        });
    };
    
    script.src = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(linkElement)) {
        document.head.removeChild(linkElement);
      }
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything itself
};

export default ChatbotWidget;
