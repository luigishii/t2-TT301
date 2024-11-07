# Usando a imagem oficial do Node.js
FROM node:18

# Definindo o diretório de trabalho
WORKDIR /usr/src/app

# Copiando o package.json e o package-lock.json (se existir)
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando todos os arquivos do projeto para o contêiner
COPY . .

# Expõe a porta em que o servidor Express vai rodar
EXPOSE 2000

# Comando para rodar o servidor Express
CMD [ "node", "index.js" ]
