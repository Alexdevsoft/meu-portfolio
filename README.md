# 🎨 Alexsandro Almeida - Portfólio

## 📋 Visão Geral

Portfólio pessoal interativo desenvolvido com Hono Framework e Cloudflare Pages, apresentando 5 projetos completos em HTML, CSS e JavaScript puro.

## 🌐 URLs

- **GitHub**: [(Alexdevsoft](https://github.com/Alexdevsoft/meu-portfolio)

## 👨‍💻 Informações de Contato

- **Nome**: Alexsandro Almeida
- **Email**: alexhavilla2022@gmail.com

## ✨ Funcionalidades Implementadas

### Página Principal do Portfólio
- ✅ Header com foto de perfil, nome e informações de contato
- ✅ Sistema de navegação por títulos clicáveis
- ✅ Animação de expansão suave dos projetos (slide down)
- ✅ Design responsivo com fundo #423C3C e textos brancos
- ✅ Arquitetura separada: HTML, CSS e JavaScript em arquivos distintos

### 1. 🔢 Calculadora Básica
- Operações matemáticas básicas (+, -, ×, ÷, %)
- Display com histórico de operações
- Suporte a teclado
- Design moderno com gradiente roxo
- Tratamento de erros (divisão por zero)

### 2. 📇 CRUD - Gerenciador de Contatos
- Criar, Ler, Atualizar e Deletar contatos
- Campos: Nome, Email e Telefone
- Validação de email
- Armazenamento local (localStorage)
- Interface com cards animados
- Confirmação antes de excluir

### 3. ✅ Lista de Tarefas (TO DO LIST)
- Adicionar e remover tarefas
- Marcar tarefas como concluídas
- Filtros: Todas, Pendentes, Concluídas
- Estatísticas em tempo real
- Persistência de dados (localStorage)
- Animações suaves

### 4. 🐍 Jogo Snake
- Jogo clássico da cobrinha
- Sistema de pontuação com recorde
- Controles por teclado (setas/WASD) ou botões
- Canvas com animações fluidas
- Detecção de colisões
- Sistema de pause/resume
- Salvamento de high score

### 5. 🔐 Gerador de Senhas
- Geração de senhas fortes e personalizadas
- Comprimento ajustável (4-32 caracteres)
- Opções: Maiúsculas, Minúsculas, Números, Símbolos
- Medidor de força da senha
- Função de copiar para área de transferência
- Histórico das últimas 10 senhas geradas
- Persistência de histórico

## 🎨 Arquitetura de Dados

### Estrutura do Projeto

```mermaid
graph TD
    A[alexsandro.almeida/] --> B[src/]
    B --> B1[index.tsx]

    A --> C[public/]
    C --> C1[static/]
    C1 --> C2[css/]
    C2 --> C2a[style.css]
    C1 --> C3[js/]
    C3 --> C3a[main.js]
    C1 --> C4[projects/]
    C4 --> C4a[calculadora.html]
    C4 --> C4b[crud.html]
    C4 --> C4c[todo.html]
    C4 --> C4d[snake.html]
    C4 --> C4e[password.html]

    A --> D[ecosystem.config.cjs]
    A --> E[wrangler.jsonc]
    A --> F[package.json]

    %% Estilos visuais
    classDef folder fill:#3b82f6,stroke:#1e3a8a,stroke-width:1px,color:#fff;
    classDef file fill:#facc15,stroke:#92400e,stroke-width:1px,color:#111;

    class A,B,C,C1,C2,C3,C4 folder;
    class B1,C2a,C3a,C4a,C4b,C4c,C4d,C4e,D,E,F file;
```

### Armazenamento de Dados
- **localStorage** para persistência no navegador
- Dados salvos por projeto:
  - CRUD: Array de contatos
  - TO DO LIST: Array de tarefas
  - Snake: High score
  - Gerador de Senhas: Histórico de senhas

## 🎨 Design e Cores

### Página Principal
- **Background**: #423C3C (marrom escuro)
- **Textos**: Branco (#fff)
- **Links**: Azul claro (#87CEEB)
- **Cards**: Fundo semitransparente com hover effects

### Projetos (Paleta de Cores)
1. **Calculadora**: Gradiente roxo (#667eea → #764ba2)
2. **CRUD**: Gradiente rosa (#f093fb → #f5576c)
3. **TO DO LIST**: Gradiente roxo (#667eea → #764ba2)
4. **Snake**: Gradiente verde (#11998e → #38ef7d)
5. **Gerador de Senhas**: Gradiente amarelo-rosa (#fa709a → #fee140)

## 📖 Guia de Uso

### Para Visitantes
1. Acesse o portfólio pela URL
2. Navegue pela lista de projetos
3. Clique no título de qualquer projeto para expandi-lo
4. Interaja com cada projeto diretamente na página
5. Clique novamente no título para recolher o projeto

### Funcionalidades Específicas
- **Calculadora**: Digite números e operadores, ou use o teclado
- **CRUD**: Preencha o formulário e gerencie seus contatos
- **TO DO LIST**: Digite tarefas e use os filtros para organizar
- **Snake**: Use as setas ou botões para controlar a cobra
- **Gerador de Senhas**: Ajuste as opções e gere senhas seguras

## 🚀 Status do Deployment

- **Ambiente de Desenvolvimento**: ✅ Ativo e funcionando
- **Build do Projeto**: ✅ Completo
- **Servidor Local**: ✅ Rodando com PM2 na porta 3000
- **Git Repository**: ✅ Inicializado e commitado
- **GitHub**: ⏳ Aguardando deploy
- **Cloudflare Pages**: ⏳ Aguardando deploy

## 🛠️ Stack Tecnológica

- **Backend**: Hono Framework (TypeScript)
- **Runtime**: Cloudflare Workers/Pages
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Process Manager**: PM2
- **Build Tool**: Vite
- **Version Control**: Git

## 📊 Recursos Implementados

### Funcionalidades Completadas ✅
- [x] Página principal do portfólio com perfil
- [x] Sistema de expansão animada de projetos
- [x] Calculadora básica completa
- [x] CRUD de contatos com validação
- [x] Lista de tarefas com filtros
- [x] Jogo Snake com pontuação
- [x] Gerador de senhas com medidor de força
- [x] Responsividade para dispositivos móveis
- [x] Persistência de dados com localStorage
- [x] Animações e transições suaves

### Próximos Passos Recomendados 🎯
1. Deploy para GitHub Pages ou GitHub Repository
2. Deploy para Cloudflare Pages (produção)
3. Adicionar analytics para rastreamento de visitantes
4. Implementar tema escuro/claro (opcional)
5. Adicionar mais projetos ao portfólio
6. Criar seção "Sobre Mim" expandida
7. Adicionar seção de habilidades/tecnologias
8. Implementar formulário de contato

## 🧪 Como Executar Localmente

```bash
# Instalar dependências
npm install

# Build do projeto
npm run build

# Iniciar servidor de desenvolvimento (PM2)
pm2 start ecosystem.config.cjs

# Testar
curl http://localhost:5173

# Verificar logs
pm2 logs alexsandro.almeida --nostream

# Parar servidor
pm2 delete alexsandro.almeida
```

## 📝 Comandos Úteis

```bash
# Limpar porta 5173
fuser -k 5173/tcp

# Rebuild e restart
npm run build && pm2 restart alexsandro.almeida

# Ver status do PM2
pm2 list

# Deploy para Cloudflare Pages
npm run deploy
```

## 🎉 Última Atualização

- **Data**: 2025-10-26
- **Status**: Desenvolvimento concluído, pronto para deploy
- **Versão**: 1.0.0
