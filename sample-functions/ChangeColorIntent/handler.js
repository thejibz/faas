"use strict"
let fs = require('fs');
let sample = require("./sample.json");
let SendColor = require('./sendColor');
let sendColor = new SendColor("alexellis.io/tree1")

const getStdin = require('get-stdin');
 
getStdin().then(content => {
  let request = JSON.parse(content);
  handle(request, request.request.intent);
});

function tellWithCard(speechOutput) {
  sample.response.outputSpeech.text = speechOutput
  sample.response.card.content = speechOutput
  sample.response.card.title = "Christmas Lights";
  console.log(JSON.stringify(sample));
  process.exit(0);
}

function handle(request, intent) {
  let colorRequested = intent.slots.LedColor.value;
  let req = {r:0,g:0,b:0};
  if(colorRequested == "red") { 
    req.r = 255;
  } else if(colorRequested== "blue") {
      req.b = 255;
  } else if (colorRequested == "green") {
      req.g = 255;
  }
  else {
      return tellWithCard("I heard "+colorRequested+ " but can only do: red, green, blue.", "I heard "+colorRequested+ " but can only do: red, green, blue.");
  }
  sendColor.sendColor(req, () => {
    var speechOutput = "OK, " + colorRequested + ".";
    return tellWithCard(speechOutput);
  });
}