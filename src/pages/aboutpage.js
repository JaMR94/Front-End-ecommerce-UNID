import { Inter } from '@next/font/google'
import Aboutustitulo from '@/components/aboutustitulo'
import Aboutlifestory from '@/components/aboutlifestory'
import Aboutimg from '@/components/aboutimg'
import Abouturphilosophy from '@/components/aboutourphilosophy'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <Layout>
      <Aboutustitulo />
      <Aboutlifestory />
      <Aboutimg />
      <Abouturphilosophy />
      </Layout>
  )
}
