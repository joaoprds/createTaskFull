# # Gerenciador de Tarefas - Task Manager

## 🌍 Important Links:

- **Frontend (Login and Task Management):** https://frontaskbyjoao.netlify.app
- **Backend (API):** [https://createtaskfull.onrender.com](https://createtaskfull.onrender.com)
- **API Documentation (Swagger):** [https://createtaskfull.onrender.com/api-docs/](https://createtaskfull.onrender.com/api-docs/)

### ⚙️ Default Login Credentials:
- **User:** `admin`
- **Password:** `admin123`

---

## 📖 Instrucciones en Español:

### 🚀 Cómo Ejecutar Localmente:
1. Clona el repositorio:
   ```bash
   git clone [<enlace-del-repositorio>](https://github.com/joaoprds/createTaskFull)
   cd backend
   ```

2. Instala las dependencias para el **Backend**:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la carpeta **backend** con el siguiente contenido:
   ```env
   MONGO_URI=<tu-cadena-de-conexión-a-mongodb>
   JWT_SECRET=secreto
   PORT=5000
   ```

4. Ejecuta el backend:
   ```bash
   npm run dev
   ```

5. Ahora, ve a la carpeta del frontend:
   ```bash
   cd ../frontend
   ```

6. Instala las dependencias para el **Frontend**:
   ```bash
   npm install
   ```

7. Ejecuta el frontend:
   ```bash
   npm run dev
   ```

8. Accede a las URLs locales:
   - **Frontend:** [http://localhost:5173](http://localhost:5173)
   - **Backend:** [http://localhost:5000](http://localhost:5000)
   - **Swagger:** [http://localhost:5000/api-docs](http://localhost:5000/api-docs)
  
   - ## 📖 Instructions in English:

### 🚀 How to Run Locally:
1. Clone the repository:
   ```bash
   git clone [<repository-link>](https://github.com/joaoprds/createTaskFull)
   cd backend
   ```

2. Install the dependencies for the **Backend**:
   ```bash
   npm install
   ```

3. Create a `.env` file in the **backend** folder with the following content:
   ```env
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=secret
   PORT=5000
   ```

4. Run the backend:
   ```bash
   npm run dev
   ```

5. Now, navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```

6. Install the dependencies for the **Frontend**:
   ```bash
   npm install
   ```

7. Run the frontend:
   ```bash
   npm run dev
   ```

8. Access the local URLs:
   - **Frontend:** [http://localhost:5173](http://localhost:5173)
   - **Backend:** [http://localhost:5000](http://localhost:5000)
   - **Swagger:** [http://localhost:5000/api-docs](http://localhost:5000/api-docs)

---

## 📖 Instruções em Português:

### 🚀 Como Rodar Localmente:
1. Clone o repositório:
   ```bash
   git clone [<link-do-repositorio>](https://github.com/joaoprds/createTaskFull)
   cd backend
   ```

2. Instale as dependências para o **Backend**:
   ```bash
   npm install
   ```

3. Crie o arquivo `.env` na pasta **backend** com o seguinte conteúdo:
   ```env
   MONGO_URI=<sua-string-de-conexão-mongodb>
   JWT_SECRET=secreto
   PORT=5000
   ```

4. Rode o backend:
   ```bash
   npm run dev
   ```

5. Agora, vá para a pasta do frontend:
   ```bash
   cd ../frontend
   ```

6. Instale as dependências para o **Frontend**:
   ```bash
   npm install
   ```

7. Rode o frontend:
   ```bash
   npm run dev
   ```

8. Acesse as URLs locais:
   - **Frontend:** [http://localhost:5173](http://localhost:5173)
   - **Backend:** [http://localhost:5000](http://localhost:5000)
   - **Swagger:** [http://localhost:5000/api-docs](http://localhost:5000/api-docs)

---

### 🛠️ Used Technologies:
- **Frontend:** React, Vite, TailwindCSS
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Autenticação:** JSON Web Tokens (JWT)
- **Documentação:** Swagger

> **Note:** Make sure you have MongoDB running locally or use a remote instance configured in the `.env` file.
