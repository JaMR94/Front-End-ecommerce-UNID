import { Inter } from '@next/font/google'
import LoginPage from "@/components/LoginPage";
import Layout from '@/components/Layout'
import Layout2 from '@/components/Layouts/Layout2'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
            <Layout2>
            <LoginPage/>
            </Layout2>
            )
        }