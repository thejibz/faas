FROM jibz/faas-alpinefunction

RUN apk --update add nodejs

COPY ./nodejsFunc.js .

ENV fprocess="node main.js"
CMD npm i && fwatchdog 2>&1
