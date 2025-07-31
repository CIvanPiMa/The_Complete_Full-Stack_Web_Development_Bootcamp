# Use Microsoft's development container base image with Node.js
FROM mcr.microsoft.com/devcontainers/javascript-node:1-20-bullseye

# # Install Google Chrome for testing (Puppeteer, etc.)
# RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
#     && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
#     && apt-get update \
#     && apt-get install -y google-chrome-stable

# Install additional dependencies
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y \
        pre-commit
