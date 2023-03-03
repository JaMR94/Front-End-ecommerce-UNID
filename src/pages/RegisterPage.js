import { Inter } from '@next/font/google'
import RegisterPage from "@/components/RegisterPage";
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
            <Layout>
            <RegisterPage/>
            </Layout>
            )
        }