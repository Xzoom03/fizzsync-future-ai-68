
import React, { useEffect, useState } from 'react';
import { useToast } from "@/components/ui/use-toast";

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
  const { toast } = useToast();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add a container div for the chat widget if it doesn't exist
    let chatContainer = document.getElementById('n8n-chat-container');
    if (!chatContainer) {
      chatContainer = document.createElement('div');
      chatContainer.id = 'n8n-chat-container';
      document.body.appendChild(chatContainer);
    }

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
      console.log("N8N Chat script loaded successfully");
      // Add a longer delay to ensure the script is fully loaded and the global function is available
      setTimeout(() => {
        try {
          // Script loaded, now initialize chat
          if (window.createChat) {
            console.log("Creating chat widget...");
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
                    position: fixed !important;
                    bottom: 20px !important;
                    right: 20px !important;
                    display: block !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                    pointer-events: auto !important;
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
            
            setIsLoaded(true);
            
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
                pointer-events: auto !important;
              }
              
              .n8n-chat-widget-launcher {
                width: 60px !important;
                height: 60px !important;
                border-radius: 30px !important;
                background-color: #9B4DFF !important;
                box-shadow: 0 4px 20px rgba(155, 77, 255, 0.5) !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                cursor: pointer !important;
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
            `;
            document.head.appendChild(styleElement);
            
            console.log("Chat widget initialized successfully!");
          } else {
            console.error('Chat widget could not be initialized. createChat is not available.');
            // Add a fallback option - a simple button that alerts the user
            addFallbackChatButton();
          }
        } catch (error) {
          console.error('Error initializing chat:', error);
          addFallbackChatButton();
        }
      }, 1000); // Increased delay to ensure script is fully loaded
    };
    
    script.async = true;
    document.body.appendChild(script);
    
    // Function to add a fallback chat button if the n8n chat fails to initialize
    const addFallbackChatButton = () => {
      const fallbackButton = document.createElement('div');
      fallbackButton.id = 'fallback-chat-button';
      fallbackButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      `;
      fallbackButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 30px;
        background-color: #9B4DFF;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 4px 20px rgba(155, 77, 255, 0.5);
        z-index: 9999;
        animation: pulse 2s infinite;
      `;
      
      fallbackButton.onclick = () => {
        toast({
          title: "Chat Support",
          description: "Our chat system is currently loading. Please try again in a moment.",
          duration: 5000,
        });
      };
      
      document.body.appendChild(fallbackButton);
      console.log("Added fallback chat button");
    };

    return () => {
      // Cleanup
      document.head.removeChild(linkElement);
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      
      // Remove any chat widget elements that might have been created
      const chatElements = document.querySelectorAll('.n8n-chat-widget');
      chatElements.forEach(el => el.parentNode?.removeChild(el));
      
      // Remove fallback button if it exists
      const fallbackButton = document.getElementById('fallback-chat-button');
      if (fallbackButton) {
        document.body.removeChild(fallbackButton);
      }
    };
  }, []);

  return null; // This component doesn't render anything itself
};

export default ChatbotWidget;
