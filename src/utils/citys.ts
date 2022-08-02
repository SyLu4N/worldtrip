interface EuropaProps {
  name: string;
  country: string;
  description: string;
}

interface Citys {
  europa: EuropaProps[];
}

export const citys: Citys = {
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
};
