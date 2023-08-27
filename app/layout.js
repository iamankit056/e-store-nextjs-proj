import Navbar from '@/components/navbar/page'
import MyProvider from '@/components/redux-provider/page';
import '@/styles/globals.css'

export const metadata = {
  title: 'E-Store',
  description: 'Best Shopping Platform for buying Products',
}

function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
            <MyProvider>
                <Navbar />
                <main>{children}</main>
            </MyProvider>
        </body>
        </html>
    )
}

export default RootLayout;