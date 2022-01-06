FROM node:14.17.6 

RUN apt-get update -y \
  && apt-get install -y \
  sudo \
  && npm install -g npm@7.23 \
  && echo "node:node" | chpasswd && usermod -aG sudo node

USER node

RUN sh -c "$(curl -fsSL https://gist.githubusercontent.com/denilson-santos/a7c94fa1c9eff8293d29820691110cba/raw/824b90ae2c5ad8d3b60d712252cbacdc654f5df2/install-oh-my-zsh-spaceship.sh)" "" -p node

WORKDIR /home/node/app