initSDK();

function initSDK() {
  // retrieve the secret and key from server-side or do the rest of this process server-side
  var inbenta_secret="<inbenta_secret>";
  var inbenta_key="<inbenta_key>";
  /* authPOST gets the bearer token 
   * authenticates the SDK build by passing it as a callback
   * This authentication mechanism is for TESTS ONLY. 
   * A Production environment should authenticate server-side
  */ 
  var inbenta_token = authPOST(inbenta_key, inbenta_secret, initBot);
  // x-inbenta-token, x-inbenta-key added to document.cookies
}

function initBot(inbenta_token, inbenta_key) {
  // Create authentication variable from bearer token and key
  var InbentaAuth =  InbentaChatbotSDK.createFromAccessToken(inbenta_token,inbenta_key);
  // Customize the configuration of your chatbot here, learn more at apidocs.inbenta.io/chatbot/sdk
  var InbentaConfiguration = {
    // Language of the interface. Currently only English has all tags defined
      lang:'en',
    // answers object, defines which fields from the content are shown to the user as results
      "answers":{
        // answerAttributes marks which field will be used for in-dialog responses
        "answerAttributes": ["ANSWER_TEXT"],
        //sideBubbleAttributes marks which for side-bubble responses
        "sideBubbleAttributes": ["SIDEBUBBLE_TEXT"]
      },
    // The Audience level of the users for this chatbot. If your instance doesn't use profiles, use always 0 (or leave empty)
      usertype: 0,
      environment: "production",
    // Customize the hovering widget (launcher)
      launcher: {
        // Add a title to display by the icon
        title:""
      },
    // 'labels' Overrides the label values from the SDK template
      labels: {
        en: {
          'yes' : 'Sure',
          'no' : 'Nope',
          'generic-error-message' : "I'm still in training, please try again",
          'enter-question' : 'Ask Me!',
          'interface-title' : 'I.S.A 0099',
          'guest-name' : 'You',
          'help-question' : "Hello!, I'm Inbenta Support Agent v0.1.53, what can I do for you?",
          'thanks' : 'Thank you!',
          'rate-content' : 'Did I help you?',
          'form-message' : 'Please tell me how I can get better at my job',
          'submit' : 'Send it!'
        }
      }
    }; 
  // Build the Chatbot interface using the above configuration and auth variables 
  InbentaChatbotSDK.build(InbentaAuth, InbentaConfiguration);
}

function authPOST(inbenta_key, inbenta_secret, callback) {
  var inbenta_token, token_expiration = "";
  // Include the secret on the payload
  var data = {"secret":inbenta_secret}; 
  var xhr = new XMLHttpRequest();
  
  xhr.open("POST", "https://api.inbenta.io/v1/auth");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("x-inbenta-key", inbenta_key);

  xhr.onreadystatechange = function() {       //Call a function when the state changes.
  if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
    // If POST to /auth successful, then get the token and its expiration value
    var token_expiration = JSON.stringify(JSON.parse(xhr.responseText).expiration);
    var inbenta_token = JSON.stringify(JSON.parse(xhr.responseText).accessToken);
    // Store the token in a Browser Cookie
    setCookie("x-inbenta-token",inbenta_token,token_expiration);
    // Run the function defined in the arguments
    callback(inbenta_token, inbenta_key);
    return;
  }};
  xhr.send(JSON.stringify(data));
  setCookie("x-inbenta-key",inbenta_key);
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length).replace(/^"(.*)"$/, '$1');
        }
    }
    return "";
}
