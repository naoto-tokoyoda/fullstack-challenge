import '../styles/globals.css'
import Layout from "../components/layout"
import { AuthProvider } from '../components/AuthProvider';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </AuthProvider>
        
    )
}

export default MyApp