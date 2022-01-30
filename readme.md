Puesta en marcha de los servidores

Los siguientes comandos seran de Linux, por favor usar el equivalente en el S.O que este usando.

cd backend
npm install
npx prisma db push

cd frontend
npm install
npm start

Nota: En la carpeta backend crear un archivo .env con las siguientes lineas:

PORT=3001
DATABASE_URL="mysql://root:12345@localhost:3306/alkemy_challenge"

En la variable de entorno agregar los datos de conexión de su base de datos MySQL
