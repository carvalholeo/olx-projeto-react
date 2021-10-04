import MeusTiposPrediletos from 'prop-types';

function CardStats({ icone = "", valor, cor, titulo, children }) {
  console.log(children)
  return (
    <>
      <div className="col-md-4 mb-4">
        <div className={"card shadow h-100 py-2 border-left-" + cor}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className={"text-xs font-weight-bold text-uppercase mb-1 text-" + cor}>{titulo}</div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{valor}</div>
              </div>
              <div className="col-auto">
                <i className={"fas fa-2x text-gray-300 " + icone}></i>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

CardStats.propTypes = {
  icone: MeusTiposPrediletos.string,
  valor: MeusTiposPrediletos.string,
  cor: MeusTiposPrediletos.string,
  titulo: MeusTiposPrediletos.string.isRequired
}

CardStats.defaultProps = {
  titulo: 'AQUI VAI O TÍTULO',
  valor: 'QUANTIDADE EM STRING',
  icone: 'ICONE A SER USADO DO FONT-AWESOME',
  cor: 'danger'
}

export default CardStats;