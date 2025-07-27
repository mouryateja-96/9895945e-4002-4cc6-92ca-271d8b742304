```bash

nvm use 18.19.0
npm i

# Build image
docker build -t ampd-savings-api .

# Run container
docker run -p 3000:3000 ampd-savings-api

npm run test
npm run dev