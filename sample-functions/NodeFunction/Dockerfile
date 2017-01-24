FROM alexellis2/faas-alpinefunction

RUN apk --update add nodejs

ENV fprocess="node main.js"
CMD npm i && fwatchdog
