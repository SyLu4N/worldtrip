import { GetStaticPaths, GetStaticProps } from 'next';

import { citys } from '../utils/citys';

interface TesteProps {
  teste: string;
}

export default function Teste({ teste }: TesteProps) {
  return <h1>{teste}</h1>;
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = ({ params }: any) => {
  const tes = params.teste;

  const test = citys;
  console.log(tes);
  console.log(test.tes);

  const nada = '';

  return {
    props: { nada },
  };
};
