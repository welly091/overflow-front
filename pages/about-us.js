import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image'
import Gary from '../images/test.jpg'

export default function AboutUs() {
    return (
        <>
            <Header />
            <div>
                <Image src={Gary} alt="bruh" width='400px' height='400px'/>
                <p>The man, The myth, The legend</p>
                {/* <img></img>
                <p></p>
                <img></img>
                <p></p> */}
            </div>
            <Footer />
        </>
    )
}