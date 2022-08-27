import Head from 'next/head'
import Image from 'next/image'
import { PrismaClient } from '@prisma/client'

export default function Home() {
  return <h1>Next.Js</h1>;
}

export const getServerSideProps = async () => {
  const prisma = new PrismaClient()

  const categorias = await prisma.categoria.findMany();

  console.log(categorias);
}

