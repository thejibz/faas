FROM alpine:latest

ADD https://github.com/thejibz/faas/releases/download/v0.1-alpha/fwatchdog /usr/bin
RUN chmod +x /usr/bin/fwatchdog

# Populate example here
# ENV fprocess="wc -l"
CMD fwatchdog 2>&1
