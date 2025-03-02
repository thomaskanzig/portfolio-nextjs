# Portfolio Next.js & Bootstrap

This is a simple portfolio project using [Next.js](https://nextjs.org) and [Bootstrap](https://getbootstrap.com).  

**Note:** This project is still under development and an official release will be coming soon. 🚧✨  

![Screenshot of the home page](./screenshots/screenshot_home.jpg)

### Requirements
- [Docker Compose](https://docs.docker.com/compose/install/)

### Running applications:

Start the Docker containers:
```bash
docker-compose up -d
```

On this stage you should access already the application on the browser by the following URL: [http://localhost:3000](http://localhost:3000)

### Stop the Docker containers:
```bash
docker-compose down
```

### Execute npm commands into the node container:
```bash
docker exec -it node-container bash
```

#### It will open the bash terminal of the php container, and you can run any kind fo commands you want.
```bash
root@370c11910f26:/app# 
```

```bash
root@370c11910f26:/app# node -v
```

Output:

```bash
v22.9.0
```

To finish or exit the docker exec session, you can simply type exit in the terminal where the session is running.
```bash
root@370c11910f26:/app# exit
```


#### Check status of all containers:
```bash
docker ps
```

Or one specific container name:

```bash
docker ps --filter "name=node-container"
```

### Environment Variables

Create a `.env.local` file in the root project (`portfolio/`) with the following content:

```dotenv
NEXT_PUBLIC_API_URL=http://localhost:3000
```