import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'


const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Main portfolio page
app.get('/', (c) => {
    return c.html(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Alexsandro Almeida - Portfólio</title>
        <link rel="stylesheet" href="/static/css/style.css">
    </head>
    <body>
        <div class="container">
            <!-- Header/Profile Section -->
            <header class="profile-section">
                <div class="profile-image">
                    <img src="https://i.postimg.cc/G2TVyWW9/alexfulljpg.jpg" alt="Alexsandro Almeida">
                </div>
                <div class="profile-info">
                    <h1>Alexsandro Almeida</h1>
                    <div class="contact-info">
                        <p><i class="icon">📧</i> <a href="mailto:alexhavilla2022@gmail.com">alexhavilla2022@gmail.com</a></p>
                        <p><i class="icon">💻</i> <a href="https://github.com/Alexdevsoft" target="_blank">github.com/Alexdevsoft</a></p>
                        <p><i class="icon">💻</i> <a href="https://www.linkedin.com/in/alexsandro-j-a-almeida" target="_blank">linkedin.com/in/alexsandro-j-a-almeida/Alexdevsoft</a></p>
                    </div>
                </div>
            </header>

            <!-- Projects Section -->
            <main class="projects-section">
                <h2>Meus Projetos</h2>
                <div class="projects-list">
                    <div class="project-item" data-project="calculadora">
                        <h3 class="project-title">1. Calculadora Básica</h3>
                        <div class="project-content">
                            <iframe src="/static/projects/calculadora.html"></iframe>
                        </div>
                    </div>

                    <div class="project-item" data-project="crud">
                        <h3 class="project-title">2. CRUD</h3>
                        <div class="project-content">
                            <iframe src="/static/projects/crud.html"></iframe>
                        </div>
                    </div>

                    <div class="project-item" data-project="todo">
                        <h3 class="project-title">3. Lista de Tarefas (TO DO LIST)</h3>
                        <div class="project-content">
                            <iframe src="/static/projects/todo.html"></iframe>
                        </div>
                    </div>

                    <div class="project-item" data-project="snake">
                        <h3 class="project-title">4. Jogo Snake</h3>
                        <div class="project-content">
                            <iframe src="/static/projects/snake.html"></iframe>
                        </div>
                    </div>

                    <div class="project-item" data-project="password">
                        <h3 class="project-title">5. Gerador de Senhas</h3>
                        <div class="project-content">
                            <iframe src="/static/projects/password.html"></iframe>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <p>&copy; 2025 Alexsandro Almeida. Todos os direitos reservados.</p>
            </footer>
        </div>

        <script src="/static/js/main.js"></script>
    </body>
    </html>
  `)
})

export default app
