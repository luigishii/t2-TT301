# Usando a imagem oficial do Node.js
FROM node:14

# Diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia o package.json e o package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todos os arquivos da aplicação
COPY . .

# Expondo a porta de execução do serviço
EXPOSE 9000

# Comando para rodar a aplicação
CMD ["node", "index.js"]
