# Gunakan Node.js versi 20
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install Expo CLI secara global
RUN npm install -g expo-cli

# Copy package.json dan yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy seluruh kode project
COPY . .

# Ekspos port yang digunakan Expo
EXPOSE 8081
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

# Jalankan Expo dalam mode tunnel agar bisa di-scan dari HP luar
CMD ["npx", "expo", "start", "--tunnel"]