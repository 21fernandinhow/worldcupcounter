import { HiShare } from "react-icons/hi";

export default function ShareBtn (props) {
    const message = `Faltam ${props.days} para a Copa do Mundo! Acompanhe a contagem regressiva em: https://quantofaltapracopa.netlify.app/`

    return (
        <a 
            id="shareBtn" 
            target="_blank" 
            rel="noopener noreferrer" 
            href={`https://web.whatsapp.com/send?text=${encodeURIComponent(message)}`}
        >
            <HiShare />
        </a>
    )
}