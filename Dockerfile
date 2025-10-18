# Use uma imagem base oficial do Node.js
FROM node:22 AS builder

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie os arquivos package.json 
COPY package.json ./

# Instale as dependências
RUN npm install --force

COPY tsconfig.json ./  
COPY tailwind.config.js ./

# Copie o restante do código da aplicação
COPY . .

# Compile o projeto para produção 
RUN npm run build

# Agora, crie uma imagem final com o código de produção
FROM node:22 AS runner

WORKDIR /app

# Copie apenas os arquivos necessários da build anterior
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
# After copying the files in the runner stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public 

RUN chmod -R 755 .next

# Exponha a porta onde a aplicação vai rodar
EXPOSE 3001

# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]
