import { Footer } from '../footer/footer'
import { HeadMetadata } from '../head/head'
import { Header } from '../header/header'

const MainLayout = ({ children }) => {
  return (
    <>
      <HeadMetadata />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default MainLayout
