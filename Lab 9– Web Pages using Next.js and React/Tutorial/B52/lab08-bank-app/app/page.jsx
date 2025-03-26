import { Inter } from 'next/font/google'
import AccountsTable from './components/AccountsTable'
const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  // we will fetch the data here


  // we will get the data
  const accounts = [1, 2, 3]
  return (
    <>
      <AccountsTable initialAccounts={accounts}></AccountsTable>
    </>
  )
}

