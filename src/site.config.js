

export const demo = {
    ativo: true,
    faixa: "Site de demonstração. Todos os dados são fictícios.",
    tituloPrefixo: "Demonstração",
    avisoFormulario:
        "Na demonstração, a mensagem é preparada para um número de teste fictício. Nenhum dado é enviado a servidor algum.",
}

export const clinica = {
    nome: "Nome da Clínica",
    slogan: "Realçar, nunca transformar.",
    cidade: "Cidade",
    uf: "UF",

    url: "https://luizdev10.github.io/template-estetica",
}

export const hero = {
    sobretitulo: "Harmonização facial & estética avançada",
    tituloInicio: "A arte de",
    tituloDestaque: "ser você.",
    texto: "Avaliação individual e procedimentos feitos para realçar o que já é seu.",
    botao: "Agendar avaliação",
    imagem: "imagens/hero.webp",
}

export const imagens = {
    hero: { arquivo: "imagens/hero", largura: 1856, altura: 2304 },
    profissional: { arquivo: "imagens/profissional", largura: 1856, altura: 2304 },
    avaliacaoForm: {
        arquivo: "imagens/avaliacao-form",
        largura: 1856,
        altura: 2304,
        alt: "Sala de espera em tons neutros, com poltrona, cortina translúcida e planta, criando um ambiente calmo",
    },
    contatoDestaque: {
        arquivo: "imagens/contato-destaque",
        largura: 2048,
        altura: 2048,
        alt: "Close do rosto de uma mulher, com a pele iluminada por luz natural",
    },
}

export const profissional = {
    nome: "Dra. Nome Sobrenome",
    area: "Harmonização facial",
    imagem: imagens.profissional,
    alt: "Retrato da Dra. Nome Sobrenome, em fundo neutro e luz natural",
    posicao: "center 20%",
    bio: "Cada atendimento começa com uma avaliação detalhada. A proposta é respeitar as proporções do seu rosto e indicar apenas o que faz sentido para você, com calma e sem pressa.",
    frase: "Realçar, nunca transformar.",

    registro: {
        conselho: "CRO",
        numero: "UF-00000",
    },

    credenciais: [
        { rotulo: "Graduação", valor: "Curso e instituição" },
        { rotulo: "Cursos", valor: "Cursos e especializações" },
        { rotulo: "Pós-graduação", valor: "Curso e instituição" },
    ],
}

const whatsapp = "5500000000000"

const formatarWhatsapp = (numero) => {
    const local = numero.replace(/\D/g, "").replace(/^55/, "")
    const ddd = local.slice(0, 2)
    const resto = local.slice(2)
    const corte = resto.length - 4
    return `(${ddd}) ${resto.slice(0, corte)}-${resto.slice(corte)}`
}

export const contato = {
    whatsapp,
    whatsappExibicao: formatarWhatsapp(whatsapp),
    telefone: "",
    instagram: "exemplo.estetica",
    email: "contato@exemplo.com",
    atendimento: "Cidade, UF · com hora marcada",
    horario: "Seg a sáb, 9h às 19h",

    horarioSchema: "Mo-Sa 09:00-19:00",
    endereco: "Rua Exemplo, 123 - Bairro, Cidade - UF",

    enderecoPartes: {
        rua: "Rua Exemplo, 123",
        bairro: "Bairro",
        cidade: "Cidade",
        uf: "UF",
        cep: "00000-000",
    },

    mapaLink: "",

    mensagemFlutuante: "Olá! Vi o site e gostaria de saber mais.",
}

export const menu = [
    { text: "Início", link: "#inicio" },
    { text: "Procedimentos", link: "#procedimentos" },
    { text: "Sobre", link: "#sobre" },
    { text: "Dúvidas", link: "#faq", ocultoNoTopo: true },
    { text: "Localização", link: "#localizacao" },
    { text: "Contato", link: "#contato" },
]

export const rotulos = {

    maisProcurado: "Mais procurado",
}

export const procedimentos = [
    {
        nome: "Toxina botulínica",
        descricao: "Suavização de linhas de expressão com naturalidade, conforme avaliação.",
        detalhe:
            "Procedimento realizado somente após avaliação individual, em que o profissional explica indicações, limites e cuidados. A indicação depende de cada pessoa.",
        imagem: { arquivo: "imagens/toxina-botulinica", largura: 1856, altura: 2304 },
        alt: "Close do rosto de uma mulher, com foco na testa e nos olhos, em expressão relaxada",
    },
    {
        nome: "Preenchimento facial",
        descricao: "Reposição de volume e definição de contornos, em proporção com o seu rosto.",
        detalhe:
            "A indicação, a área e a quantidade são definidas pelo profissional após avaliação. Os resultados variam de pessoa para pessoa.",
        imagem: { arquivo: "imagens/preenchimento-facial", largura: 1856, altura: 2304 },
        alt: "Mulher em três quartos, com luz lateral destacando o contorno do rosto",
    },
    {
        nome: "Bioestimuladores de colágeno",
        descricao: "Estímulo gradual à produção natural de colágeno, conforme cada pele.",
        detalhe:
            "O número de sessões e o intervalo entre elas são definidos pelo profissional, de acordo com a avaliação de cada pessoa.",
        imagem: { arquivo: "imagens/bioestimuladores-colageno", largura: 1856, altura: 2304 },
        alt: "Mulher com a mão apoiada suavemente na bochecha, pele com brilho natural",
        posicao: "center 15%",
    },
    {
        nome: "Skinbooster",
        descricao: "Hidratação profunda da pele, com protocolo definido em avaliação.",
        detalhe:
            "O protocolo é definido pelo profissional após conversar sobre o histórico e as necessidades da sua pele.",
        imagem: { arquivo: "imagens/skinbooster", largura: 1856, altura: 2304 },
        alt: "Close da bochecha e dos lábios de uma mulher, com a pele iluminada",
    },
    {
        nome: "Fios de PDO",
        descricao: "Sustentação para áreas com flacidez, indicada caso a caso.",
        detalhe:
            "Nem todas as pessoas têm indicação. A avaliação com o profissional esclarece se faz sentido no seu caso.",
        imagem: { arquivo: "imagens/fios-pdo", largura: 1856, altura: 2304 },
        alt: "Mulher de perfil, com o queixo levemente elevado e o cabelo preso",
        posicao: "center 15%",
    },
    {
        nome: "Avaliação facial",
        descricao: "Conversa e análise individual para definir o que faz sentido para você.",
        detalhe:
            "Primeiro passo de qualquer atendimento: o profissional conversa com você, analisa o rosto e explica as opções, sem compromisso de realizar qualquer procedimento.",
        imagem: { arquivo: "imagens/hero", largura: 1856, altura: 2304 },
        alt: "Retrato de uma mulher olhando para a câmera, com as mãos juntas sob o queixo",
        destaque: true,
    },
]

export const avisoProcedimentos =
    "Texto modelo, a ser revisado pelo profissional responsável. As informações são gerais e não substituem a avaliação individual."

export const faq = {
    titulo: "Perguntas frequentes",
    aviso: "Modelo a ser revisado pelo profissional de saúde responsável.",
    itens: [
        {
            pergunta: "Como funciona a avaliação?",
            resposta:
                "É uma conversa individual em que o profissional conhece o seu histórico, ouve o que você deseja e explica as opções adequadas ao seu caso. Fazer a avaliação não obriga a realizar nenhum procedimento.",
        },
        {
            pergunta: "Quanto tempo dura o atendimento?",
            resposta:
                "A duração varia conforme o caso. O tempo estimado é informado na hora do agendamento.",
        },
        {
            pergunta: "O que devo levar?",
            resposta:
                "Um documento com foto e, se houver, informações sobre medicamentos, alergias e procedimentos anteriores. O profissional pode pedir outros itens ao confirmar o horário.",
        },
        {
            pergunta: "Como é feito o agendamento?",
            resposta:
                "Pelo formulário deste site, que prepara uma mensagem no WhatsApp, ou direto pelo número de contato. A equipe responde com os horários disponíveis.",
        },
        {
            pergunta: "Quem deve conversar com o profissional antes?",
            resposta:
                "Gestantes, lactantes, pessoas com doenças crônicas, que usam medicamentos contínuos ou com histórico de alergias devem informar isso antes de qualquer procedimento. Em caso de dúvida, converse com o profissional.",
        },
    ],
}

export const rodape = {
    aviso:
        "Conteúdo informativo. Não substitui consulta, avaliação ou orientação de profissional de saúde. Os resultados variam de pessoa para pessoa.",
}

export const seo = {
    titulo: `Harmonização Facial e Estética em ${clinica.cidade}, ${clinica.uf}`,
    descricao:
        `Clínica de harmonização facial e estética avançada em ${clinica.cidade}, ${clinica.uf}. Avaliação individual, com calma e sem pressa.`,
    ogImagem: "og-image.jpg",
    ogImagemAlt: "Retrato de uma mulher em tons neutros, com luz natural",
    tipoSchema: "MedicalClinic",
}

export const privacidade = {
    responsavel: "PREENCHER PELO RESPONSÁVEL",
    cnpjCpf: "PREENCHER PELO RESPONSÁVEL",
    canalTitular: "PREENCHER PELO RESPONSÁVEL",
    atualizadoEm: "PREENCHER PELO RESPONSÁVEL",
}
