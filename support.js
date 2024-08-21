        // Toggle Chat Window
        const supportBot = document.getElementById('supportBot');
        const chatWindow = document.getElementById('chatWindow');

        supportBot.addEventListener('click', () => {
            chatWindow.style.display = chatWindow.style.display === 'none' || chatWindow.style.display === '' ? 'flex' : 'none';
        });

        // Chat Bot Functionality
        const chatInput = document.getElementById('chatInput');
        const chatMessages = document.getElementById('chatMessages');
        const sendButton = document.getElementById('sendButton');

        sendButton.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                sendMessage();
            }
        });

        function sendMessage() {
            const userMessage = chatInput.value.trim();
            if (userMessage) {
                // Display user message
                const userMessageElem = document.createElement('p');
                userMessageElem.textContent = `You: ${userMessage}`;
                chatMessages.appendChild(userMessageElem);
                chatInput.value = '';

                // Simulate bot response
                setTimeout(() => {
                    const botMessageElem = document.createElement('p');
                    botMessageElem.textContent = 'Bot: Thank you for your message. Our support team will get back to you shortly.';
                    chatMessages.appendChild(botMessageElem);
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 1000);
            }
        }