// Generate random email address for user

var email = generateEmail();

function generateEmail() {
  var num = Math.floor(Math.random() * 5000) + 1;
  var str = 'tester' + num + '@test.com';

  return str;

}

function send_statement(verbId, verb,objectId, name, description){  
        var conf = {  
             "endpoint" : "https://trial-lrs.yetanalytics.io/xapi/",  // Put your LRS endpoint here with a / after xapi.
             "auth" : "Basic " + toBase64("5561d03eb26637a909f66ef5669d33e3:1ebcc13832ea0e4d415e1709426aaa1c") // Put your LRS username in, then a colon, and then your password. No spaces. 
             };  
  
        ADL.XAPIWrapper.changeConfig(conf);  
           
        //define the xapi statement being sent  
        var statement = {  
            "actor": {  
                "mbox": 'mailto:' + email,
                "name": "Your Name Here",  
                "objectType": "Agent"  
            },  
            "verb": {  
                "id": verbId,  
                "display": {"en-US": verb}  
            },  
            "object": {  
                "id": objectId,  
                "definition": {  
                    "name": {"en-US": name},  
                    "description": {"en-US": description}  
                },  
                "objectType": "Activity"  
            }  
        }; //end statement definition  
   
        // Dispatch the statement to the LRS  
        var result = ADL.XAPIWrapper.sendStatement(statement);  
        }  