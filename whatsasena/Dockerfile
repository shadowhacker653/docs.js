FROM fusuf/whatsasena:latest

RUN git clone https://github.com/shadowhacker653/pain-bot/root/pain-bot
WORKDIR /root/painbot/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
