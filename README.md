# isa-bot-sdk
Example of use of the **Inbenta SDK**, and **webhooks / callbacks** that can be used in the Chatbot.
For a simpler example, please check **[This Gist](https://gist.github.com/jalcantarab/e56f059455468094509c54fc951329dc)**. 
For API examples, please check **[This Other One](https://gist.github.com/jalcantarab/0550eb938456c5d91cb28e2db4784eb1)**

# Chatbot SDK Example - Custom initialization
Simple example of a functioning chatbot SDK User Interface 
This example is meant to show how to: 
* Custom configuration of the SDK build, 
* Customize the labels to align with your desired language and personality, 
* Customize some CSS to fit your colors and icons,
* How to use the /auth API method to retrieve the API Token. 

## Set up 
Either the HTML and add it to your page, or store the JavaScript and CSS in separate files and call them from the page you want ot integrate the chatbot in. 

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
v0.1.1 Documentation updated and (some) comments added
v0.1.1 Inclusion of customMethods for callbacks and getTranscripts()
v0.1.0 First functional version using the createFromAccessToken().
v0.0.27 First Version in Git. 
