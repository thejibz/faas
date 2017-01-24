#!/bin/bash

docker build --build-arg http_proxy=${http_proxy} -t jibz/faas-nodefunction .
