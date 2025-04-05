# 💆‍♀️ Plataforma de Agendamento - Dra. Aline Cristina | Biomédica Esteta

Aplicação completa desenvolvida para a clínica da Dra. Aline Cristina, com foco em agendamentos online, catálogo de serviços estéticos e gestão de clientes. O sistema inclui um site institucional, API com autenticação e um aplicativo mobile simples.

---

## 📦 Estrutura do Projeto

```
draaline-estetica/
├── backend/        # API com NestJS + Prisma
├── web/            # Frontend React (site institucional e agendamentos)
├── mobile/         # App React Native (gestão básica de clientes)
```

---

## 🧪 Tecnologias Utilizadas

### 🖥️ Backend
- NestJS
- Prisma ORM
- MySQL
- JWT (autenticação)
- Google OAuth (login com Google)

### 🌐 Web
- React
- TypeScript
- Tailwind CSS
- Axios

### 📱 Mobile
- React Native com Expo
- Expo Router
- Axios

---

## 📅 Funcionalidades

- Catálogo visual de procedimentos estéticos com valores
- Agendamento online com data e horário
- Login com Google e e-mail/senha
- Painel administrativo da clínica
- Aplicativo mobile para clientes e consultas

---

## 🚀 Como Rodar o Projeto

### 1. Backend
```bash
cd backend
npm install
npx prisma migrate dev
npm run start:dev
```

### 2. Web
```bash
cd web
npm install
npm run dev
```

### 3. Mobile
```bash
cd mobile
npm install
npx expo start
```

---

## 🌍 Deploy (futuramente)

- **Railway** para hospedagem da API e banco de dados
- **Vercel** ou **Netlify** para o site
- **Expo** para o app mobile

---

## 👩‍⚕️ Sobre a Cliente

Dra. Aline Cristina é uma biomédica esteta que atua com procedimentos como peeling, lipo enzimática, entre outros. Este sistema foi desenvolvido para facilitar o contato com os clientes e otimizar a gestão da clínica.

---

## 👤 Desenvolvedor

**Lucas Sousa Silva**  
Desenvolvedor Web & Mobile  
[GitHub](https://github.com/Lucas-SousaS) · [LinkedIn](https://www.linkedin.com/in/lucas-sousa-0796a4308/)

---

## 📄 Licença

Este projeto está licenciado sob os termos da licença MIT.
