#!/bin/bash
curl -s https://nodejs.org/static/logos/jsIconGreen.svg > nodejs-logo.svg

encoded_svg=$(cat nodejs-logo.svg | base64)

echo "encoded svg:"
echo "$encoded_svg"

