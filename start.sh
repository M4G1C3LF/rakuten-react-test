#!/bin/bash
docker image rm -f rakuten-react-test
docker build -t rakuten-react-test .
docker-compose up -d
