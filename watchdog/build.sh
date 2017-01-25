#!/bin/sh

# Below makes use of "builder pattern" so that binary is extracted separate
# from the golang runtime/SDK

echo "building jibz/faas-watchdog image"
docker build --build-arg https_proxy=$https_proxy --build-arg http_proxy=$http_proxy \
    -t jibz/faas-watchdog .
docker create --name buildoutput jibz/faas-watchdog
docker cp buildoutput:/go/src/app/app ./fwatchdog
docker rm buildoutput
