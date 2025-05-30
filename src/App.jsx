import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CardProfissao from './components/CardProfissao'; // Importa o CardProfissao
import './App.css'; // Estilos específicos para o App

function App() {
  // Dados de exemplo para as profissões
  const profissoes = [
    {
      nome: "Desenvolvedor de Software",
      descricao: "Cria, mantém e aprimora programas de computador e sistemas digitais, desde aplicativos móveis até grandes infraestruturas de servidor.",
      habilidades: ["Programação", "Resolução de Problemas", "Lógica", "Colaboração", "Frameworks"]
    },
    {
      nome: "Designer Gráfico",
      descricao: "Desenvolve conceitos visuais para comunicar ideias que inspiram, informam ou cativam consumidores. Trabalha com logotipos, sites, publicações e muito mais.",
      habilidades: ["Criatividade", "Photoshop", "Illustrator", "Tipografia", "UX/UI"]
    },
    {
      nome: "Enfermeiro(a)",
      descricao: "Presta assistência a pacientes, administra medicamentos, monitora sinais vitais e educa sobre cuidados de saúde, atuando em hospitais, clínicas ou home care.",
      habilidades: ["Empatia", "Conhecimento Clínico", "Comunicação", "Organização", "Pressão"]
    },
    {
      nome: "Arquiteto(a)",
      descricao: "Planeja e projeta edifícios e outros espaços físicos, combinando estética com funcionalidade e segurança, e supervisiona a construção.",
      habilidades: ["Desenho", "Espacial", "Criatividade", "Regulamentação", "Gestão de Projetos"]
    },
    {
      nome: "Cientista de Dados",
      descricao: "Analisa e interpreta grandes volumes de dados para extrair insights valiosos e ajudar na tomada de decisões estratégicas para empresas.",
      habilidades: ["Estatística", "Programação (Python/R)", "SQL", "Machine Learning", "Visualização de Dados"]
    },
    {
      nome: "Chef de Cozinha",
      descricao: "Cria e prepara pratos, gerencia a equipe de cozinha e supervisiona a operação de um restaurante ou serviço de alimentação, garantindo qualidade e sabor.",
      habilidades: ["Criatividade Culinária", "Organização", "Liderança", "Pressão", "Higiene"]
    },
    {
      nome: "Marketing Digital",
      descricao: "Desenvolve e executa estratégias online para promover produtos, serviços ou marcas, utilizando ferramentas como SEO, mídias sociais e e-mail marketing.",
      habilidades: ["SEO", "Mídias Sociais", "Análise de Dados", "Conteúdo", "Comunicação"]
    },
    {
      nome: "Psicólogo(a)",
      descricao: "Estuda o comportamento humano e os processos mentais, aplicando esse conhecimento para ajudar indivíduos a lidar com problemas emocionais, mentais e comportamentais.",
      habilidades: ["Escuta Ativa", "Empatia", "Análise", "Ética", "Resolução de Conflitos"]
    },
    {
      nome: "Eletricista",
      descricao: "Instala, mantém e repara sistemas elétricos em residências, edifícios comerciais e industriais, garantindo a segurança e o funcionamento adequado.",
      habilidades: ["Eletricidade", "Segurança", "Diagnóstico", "Ferramentas", "Regulamentação"]
    },
    {
      nome: "Professor(a)",
      descricao: "Educa e orienta alunos em diversas disciplinas, desenvolvendo e aplicando métodos de ensino que estimulam o aprendizado e o desenvolvimento pessoal.",
      habilidades: ["Didática", "Paciência", "Comunicação", "Planejamento", "Adaptação"]
    },
    {
      nome: "Fisioterapeuta",
      descricao: "Ajuda pacientes a recuperar o movimento e a função física após lesões, doenças ou cirurgias, através de exercícios, terapias manuais e equipamentos.",
      habilidades: ["Anatomia", "Terapia Manual", "Paciência", "Observação", "Plano de Tratamento"]
    },
    {
      nome: "Empreendedor(a)",
      descricao: "Identifica oportunidades de negócio, cria e gerencia sua própria empresa, assumindo riscos e buscando inovação para desenvolver produtos ou serviços.",
      habilidades: ["Visão de Negócios", "Liderança", "Inovação", "Gestão de Riscos", "Resiliência"]
    }
  ];

  return (
    <>
      <Header />
      <main className="main-content">
        <section id="profissoes" className="profissoes-section">
          <h2>Descubra Novas Profissões</h2>
          <p className="intro-text">Explore uma variedade de carreiras e encontre a que mais se encaixa com seus interesses e habilidades.</p>
          <div className="profissoes-grid">
            {profissoes.map((profissao, index) => (
              <CardProfissao
                key={index}
                nome={profissao.nome}
                descricao={profissao.descricao}
                habilidades={profissao.habilidades}
              />
            ))}
          </div>
        </section>
        {/* Você pode adicionar mais seções aqui: Categorias, Sobre Nós, etc. */}
      </main>
      <Footer />
    </>
  );
}

export default App;
