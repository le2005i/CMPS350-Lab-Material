import Accounts from './accounts/page'
import NavBar from './components/NavBar'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" />
      </head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
