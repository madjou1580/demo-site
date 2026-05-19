#!/bin/bash

CONTAINER_NAME=my-demo-container

docker stop $CONTAINER_NAME
docker rm $CONTAINER_NAME

echo "Container verwijderd"
