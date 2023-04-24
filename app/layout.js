import '../style/globals.css'

export const metadata = {
  title: 'Jonathan Theron',
  description: 'portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      {children}
      </body>
    </html>
  )
}
