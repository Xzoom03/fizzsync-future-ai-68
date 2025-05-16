
import React, { useEffect } from 'react';

interface ChatConfig {
  webhookUrl: string;
  webhookConfig?: {
    method: string;
    headers: Record<string, string>;
  };
  target?: string;
  mode?: 'window';
  chatInputKey?: string;
  chatSessionKey?: string;
  metadata?: Record<string, any>;
  showWelcomeScreen?: boolean;
  defaultLanguage?: string;
  initialMessages?: string[];
  i18n?: Record<string, any>;
}

const ChatbotWidget = () => {
  useEffect(() => {
    // Load the stylesheet
    const styleLink = document.createElement('link');
    styleLink.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    styleLink.rel = 'stylesheet';
    document.head.appendChild(styleLink);

    // Load the script and initialize the chat
    const script = document.createElement('script');
    script.type = 'module';
    script.onload = () => {
      console.log('n8n chat script loaded');
    };
    script.onerror = () => {
      console.error('Failed to load n8n chat script');
    };

    // Create and execute the script content
    const scriptContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      
      createChat({
        webhookUrl: 'https://n8n.srv817113.hstgr.cloud/webhook/f64cefa7-a08c-47dd-a7fe-060100cc3690/chat',
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
          'Hi there! 👋',
          'My name is Fizzer. How can I help you automate your business today?'
        ],
        i18n: {
          en: {
            title: 'Hey there! 👋',
            subtitle: "Chat with Fizzer, your AI automation assistant. I'm here 24/7.",
            footer: '',
            getStarted: 'New Conversation',
            inputPlaceholder: 'Ask me about FizzSync automation...',
          },
        },
      });
    `;
    
    // Create a blob from the script content and create an object URL
    const blob = new Blob([scriptContent], { type: 'text/javascript' });
    script.src = URL.createObjectURL(blob);
    document.body.appendChild(script);
    
    // Clean up on component unmount
    return () => {
      document.head.removeChild(styleLink);
      document.body.removeChild(script);
    };
  }, []);

  return <div id="n8n-chat" className="fizz-chat"></div>;
};

export default ChatbotWidget;
