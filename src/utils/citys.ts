interface dataProps {
  name: string;
  country: string;
  description: string;
}

interface CitysProps {
  europa: dataProps[];
  americadoNorte: dataProps[];
  americadoSul: dataProps[];
}

export const citys: CitysProps = {
  europa: [
    {
      name: 'Londres',
      country: 'Reino Unido',
      description:
        'Londres, cidade localizada no sudeste da Inglaterra, é a capital do Reino Unido. O município é um dos principais centros econômicos e culturais de todo o planeta. Londres é a capital e maior cidade em população do Reino Unido.',
    },

    {
      name: 'Paris',
      country: 'França',
      description:
        'Desde o século XVII, Paris é um dos principais centros de finanças, diplomacia, comércio, moda, ciência e artes da Europa. A cidade de Paris é o centro e sede de governo da região administrativa de Ilha de França, que tem uma população estimada em 2020 de 12 278 210 habitantes, ou cerca de 18% da população da França',
    },

    {
      name: 'Roma',
      country: 'Itália',
      description:
        'Roma é a comuna mais populosa do país e a terceira cidade mais populosa da União Europeia. A Cidade Metropolitana de Roma, com uma população de 4 355 725 habitantes, é a cidade metropolitana mais populosa da Itália e sua área metropolitana é a terceira mais populosa do país.',
    },

    {
      name: 'Praga',
      country: 'República Tcheca',
      description:
        'Embora tenha outras cidades de mesmo nome no mundo, Praga é a capital da República Checa, no continente europeu. Conhecida como a “cidade dos cem pináculos”, Praga é muito famosa — principalmente por causa do seu centro histórico, que fica no coração do destino',
    },

    {
      name: 'Amsterdã',
      country: 'Holanda',
      description:
        'Como já sabemos, Amsterdã é a capital da Holanda. E, por mais que o estado reúna quase 17 milhões de habitantes, são pouco mais de 750 mil que moram na capital. A área é de apenas 219 km², e a sua administração também chama a atenção, uma vez que é dividida em 15 diferentes stadsdeel, ou melhor, bairros.',
    },
  ],

  americadoNorte: [
    {
      name: 'Nova York',
      country: 'Estados Unidos',
      description:
        'O estado de Nova York é o mais densamente povoado dos Estados Unidos. O Estado de Nova York situa-se na região atlântica média dos Estados Unidos, a mais densamente povoada do país. No Estado se localiza a cidade de Nova York, uma das maiores cidades e maior centro financeiro e comercial do mundo.',
    },

    {
      name: 'Cancun',
      country: 'México',
      description:
        'A cidade de Cancún é um dos destinos mais adorados por viajantes de todos os lugares do mundo. A região possui uma série de atrativos turísticos que deixam todos os visitantes apaixonados. Portanto, você deve incluir essa cidade no seu roteiro de viagem. Certamente vai ficar encantado com o cenário cinematográfico que essa cidade oferece.',
    },

    {
      name: 'Toronto',
      country: 'Canadá',
      description:
        'Toronto é a maior e principal cidade do Canadá, dinâmica e cosmopolita possui uma mistura de arquitetura moderna e histórica tornando-a fascinante. Com 5 milhões de habitantes é referência mundial em arquitetura, sistema de transportes, diversidade étnica, e também o maior centro cultural.',
    },
  ],

  americadoSul: [
    {
      name: 'Lima',
      country: 'Peru',
      description:
        'Com uma população de quase 12 milhões aprox. (2017), Lima é a região metropolitana mais populosa do Peru e a terceira maior cidade da América Latina (atrás de São Paulo e Cidade do México). 8,500,842 hab. Lima foi fundada pelo conquistador espanhol Francisco Pizarro em 18 de janeiro de 1535, como Ciudad de los Reyes.',
    },

    {
      name: 'Rio de Janeiro',
      country: 'Brasil',
      description:
        'O Rio de Janeiro é um estado brasileiro situado na região Sudeste do país. É a quarta menor unidade da federação em área, mas a terceira mais populosa, reunindo 17,3 milhões de habitantes. Sua capital já foi também sede do governo brasileiro, entre 1763 e 1960.',
    },
  ],
};
