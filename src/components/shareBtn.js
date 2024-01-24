import { HiShare } from "react-icons/hi";

export default function ShareBtn (props) {
    const message = `Faltam ${props.days} dias para a Copa do Mundo! Acompanhe a contagem regressiva em: https://quantofaltapracopa.netlify.app/`

    return (
        <a 
            id="shareBtn" 
            target="_blank" 
            rel="noopener noreferrer" 
            href={`https://wa.me/?text=${encodeURIComponent(message)}`}
        >
            <HiShare />
        </a>
    )
}