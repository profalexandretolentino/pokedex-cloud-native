# 📱 Pokédex Cloud-Native | Pokédex Full-Stack

**English:** A professional Full-Stack application designed to demonstrate modern cloud architecture, API integration, and containerization.  
**Português:** Uma aplicação Full-Stack profissional projetada para demonstrar arquitetura de nuvem moderna, integração de APIs e conteinerização.

---

## 🏗️ System Architecture | Arquitetura do Sistema

**EN:** The application follows a microservices-inspired architecture, decoupled for scalability.  
**PT:** A aplicação segue uma arquitetura inspirada em microsserviços, desacoplada para escalabilidade.

```mermaid
graph LR
    A[User / Usuário] --> B[React Frontend]
    B --> C[Python FastAPI]
    C --> D[External PokéAPI]
    C --> E[PostgreSQL / Redis]
    B -.-> F[Docker Containers]