import Navbar from './navbar'
import Footer from './footer'
export default function Home({ children }) {
    return (
      <div>
          <Navbar />
          {children}
          <Footer />
      </div>
    );
  }