const dayjs = require('dayjs');

function Counter() {

    let now = dayjs();
    let worldcup = dayjs('2026-06-03');
    let difference = dayjs(worldcup).diff(now, 'day');

    document.title = `${difference} dias para a copa!`; 

    return (
        <div className="container">
            <div className="main">
                <img className="trophy" src='https://png.pngtree.com/png-vector/20221117/ourmid/pngtree-fifa-world-cup-trophy-clipart-illustration-png-image_6455581.png' alt='trophy' />
                <h1>Faltam {difference} dias para a copa! </h1>
                <p>A próxima copa do mundo será sediada nos EUA, Canadá e México, com início em 3 de Junho de 2026. Laura é linda</p>
            </div>
        </div>
    )
}

export default Counter;