# Skycast 90d 🌤️

> Plataforma inteligente de previsão meteorológica com análise de tendências e histórico de 90 dias.

O **Skycast 90d** é uma aplicação focada em **Data Visualization** e consumo de dados geográficos. O projeto demonstra a capacidade de integrar APIs externas de clima para fornecer previsões precisas, utilizando uma interface moderna e intuitiva para transformar dados brutos em informações úteis ao usuário.

---

## 🔗 Links e Deploy
- **🚀 Visualizar Projeto:** https://falasembloqueio-create.github.io/skycast-90d/
- **📂 Repositório Atual:** `https://github.com/davigomes06/skycast-90d`

---

## 🛠️ Stack Tecnológica

- **React.js:** Para uma interface reativa e componentes modulares.
- **TypeScript:** Tipagem de dados climáticos para evitar inconsistências.
- **Tailwind CSS:** Design focado em UX, com suporte a temas e responsividade total.
- **OpenWeather / WeatherStack API:** Integração com endpoints de meteorologia global.
- **Chart.js / Recharts:** Para renderização de gráficos de temperatura e umidade.

---

## 🚀 Engenharia e Funcionalidades

- **Data Fetching em Tempo Real:** Sincronização com servidores meteorológicos via Fetch/Axios.
- **Filtro de Localização:** Sistema de busca por cidade com geocodificação reversa.
- **Visualização de Tendências:** Gráficos interativos que mostram a evolução climática ao longo dos dias.
- **Cache de Dados:** Implementação básica para reduzir chamadas desnecessárias à API e melhorar a velocidade.

---

## 🧠 Desafios Técnicos e Soluções

O maior desafio neste projeto foi a **Padronização de Dados de Terceiros**. APIs de clima costumam retornar objetos complexos e variados. Implementei uma camada de **Data Mapping (Transformação)** que limpa e formata esses dados antes que eles cheguem aos componentes, garantindo que a aplicação seja resiliente a mudanças na API. 

Além disso, a renderização de gráficos em dispositivos mobile exigiu ajustes finos em **CSS Grid e Flexbox** para manter a experiência visual consistente.

---

### 👤 Autor
**davigomes06** - Desenvolvedor Full Stack focado em soluções baseadas em dados.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/davi-gomes-b326b139b/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/davigomes06)
