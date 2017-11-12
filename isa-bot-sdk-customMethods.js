function getMessageHistory() {
  var DBOpenRequest = window.indexedDB.open("inbentaBot",2);
  DBOpenRequest.onsuccess = function(event) {
  // Run this function to get the transcript from the opened IndexedDB 
  // Transcript is located at: 
  // table = keyvaluepairs; key = avatar
    var objectStoreRequest = getIndexedDBObject("keyvaluepairs", "avatar");
    objectStoreRequest.onsuccess = function(event) {
      var myRecord = objectStoreRequest.result;
      var messages = objectStoreRequest.result.messages;
      return messages
    };
  };
}

function sendMessageHistory(messages, format) {
  if (format==undefined) format='JSON';
  if (messages!=undefined){
    // Use this are if you send a message in the argument
  }else{
    var DBOpenRequest = window.indexedDB.open("inbentaBot",2);
    DBOpenRequest.onsuccess = function(event) {
      // Run this function to get the transcript from the opened IndexedDB 
      // Transcript is located at: 
      // table = keyvaluepairs; key = avatar
      var objectStoreRequest = getIndexedDBObject("keyvaluepairs", "avatar");
      objectStoreRequest.onsuccess = function(event) {
        // Get the result of the transaction
        var myRecord = objectStoreRequest.result;
        // Get the messages JSON object
        var messages = objectStoreRequest.result.messages;
        console.log(messages);
        if(format=='JSON'){}else if (format=='HTML'){
          // If you wan to send the information formatted for an agent to see
          // This function will convert it into a simple HTML table
          messages = CreateTableFromJSON(messages);
        }
        else if (format=='text'){messages=JSON.stringify(messages);}
          // Send the transcript of the data to whichever endpoint. 
          // This example adds text to the body of an email. 
          // Note: HTML canNOT be added to an email using JavaScript
          window.open('mailto:test@example.com?subject=ISA Conversation Transcript&body='+messages);
          return messages

    };
  }
}

function getIndexedDBObject(table, key){
    console.log('Database initialised');
    // store the result of opening the database in the db variable.
    // This is used a lot below
    db = DBOpenRequest.result;
    // open a read/write db transaction, ready for retrieving the data
    var transaction = db.transaction(table, "readwrite");
    // report on the success of the transaction completing, when everything is done
    transaction.oncomplete = function(event) {
      console.log('Transaction completed');
    };
    transaction.onerror = function(event) {
      console.log('Transaction not opened due to error: ' + transaction.error);
    };
    // create an object store on the transaction
    var objectStore = transaction.objectStore(table);
    // Make a request to get a record by key="avatar" from the object store "keyvaluepairs"
    return objectStore.get(key);
}

function CreateTableFromJSON(messages) {
  var col = [];
  for (var i = 0; i < messages.length; i++) {
    for (var key in messages[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }
  var table = document.createElement("table");
  var tr = table.insertRow(-1);
  for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");
    th.innerHTML = col[i];
    tr.appendChild(th);
  }
  for (var i = 0; i < messages.length; i++) {
    tr = table.insertRow(-1);
    for (var j = 0; j < col.length; j++) {
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = messages[i][col[j]];
    }
  }
  return table;
}