import { SimpleGrid } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';

import { City } from '../components/City';
import { Error404 } from '../components/Error404';
import { Main } from '../components/Main';
import { citys, DataProps, SummaryProps } from '../utils/citys';

interface ContinentProps {
  data: {
    citys: DataProps[];
    summary: SummaryProps;
  };
}

export default function Continent({ data }: ContinentProps) {
  if (!data) {
    return <Error404 />;
  }

  return (
    <Main
      country={{
        name: `${data.summary.name}`,
        number: `${data.summary.country}`,
      }}
      languages={`${data.summary.languages}`}
      citys={`${data.summary.citys}`}
      description={`${data.summary.text}`}
    >
      <SimpleGrid
        columns={[1, 1, 2, 3, 4]}
        m={['0 1rem', '0 8rem']}
        spacing="5"
      >
        {data.citys.map((city) => (
          <City
            key={city.name}
            city={city.name}
            country={city.country}
            description={city.description}
          />
        ))}
      </SimpleGrid>
    </Main>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = ({ params }: any) => {
  const rout = params.continent;
  const routsValids = ['europa', 'americadoNorte', 'americadoSul'];

  let data = {};

  if (rout !== routsValids)
    return {
      props: { data: null },
    };

  if (rout === 'europa') data = citys.europa;
  if (rout === 'americadoNorte') data = citys.americadoNorte;
  if (rout === 'americadoSul') data = citys.americadoSul;

  return {
    props: { data },
  };
};
