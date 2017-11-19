# isa-bot-sdk
Example of use of the **Inbenta SDK**, and **webhooks** defined called from Inbenta's chatbot management tool. The Webhooks are programmed using Google Apps Script (similar to JS). 
* isa-bot-sdk.html - Empty page with the calls to the Inbenta Chatbot SDK and the below css/js files.
* isa-bot-sdk.js - JavaScript that defines the configuration of the chatbot and launches the methods to build it on the page.
* isa-bot-sdk.css - CSS that overrides the Inbenta template with custom styling. 
* isa-bot-sdk-CustomMethods.js - Custom methods for added functionality. So far:
* * getMessageHistory
* * sendMessageHistory

For the simplest possible example, please go to **[This Gist](https://gist.github.com/jalcantarab/e56f059455468094509c54fc951329dc)**. 

For API examples, please check **[This Other One](https://gist.github.com/jalcantarab/0550eb938456c5d91cb28e2db4784eb1)**

# Chatbot SDK Example - Custom initialization
Simple example of a functioning chatbot SDK User Interface 
This example is meant to show how to: 
* Custom configuration of the SDK build, 
* Customize the labels to align with your desired language and personality, 
* Customize some CSS to fit your colors and icons,
* How to use the /auth API method to retrieve the API Token. 
* Create custom JS methods that interact with the Chatbot

## Set up 
Either: 
* Publish the at least the HTML and JS somewhere, and call the JS from the HTML. 
* Copy the call to the SDK from the HTML to your page's HTML and the JavaScript
  `<script type="text/javascript" src="https://sdk.inbenta.io/chatbot/1/inbenta-chatbot-sdk.js"></script>`
  and add the JavaScript file `isa-bot-sdk.js` either inside the HTML (inside `<script>` tags) or in a file then called from the page. 
  

## Usage
Replace the Secret <inbenta-secret> and API key <inbenta-key> with your instance's Secret and API key.

## Contributing 
If you have useful new methods, webhooks, or better ways of doing what this sample does, please feel free to...

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History
v0.0.1 Documentation updated and (some) comments added
v0.1.1 Inclusion of customMethods for callbacks and getTranscripts()
v0.1.12 First functional version using the createFromAccessToken().
v0.1.27 First Version in Git. 
v0.1.53 Webhooks ready to be included; Authentication corrected; CSS expanded for webhooks; bug fixes
