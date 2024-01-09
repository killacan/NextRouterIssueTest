import Nav from "./components/nav"

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
