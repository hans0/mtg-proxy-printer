import '../styles/Card.css'

const DFCard = (props) => {

  const { card } = props;
  console.log(card);

  return(
    <div className='card'>
      <div className='card-header'>
        <div className='card-header-name'>
          {/* Lurrus of the Dream Den */}
          {props.card.name}
        </div>
        <div className='card-header-cmc'>
          {props.card.cmc}
        </div>
      </div>
      <div className='card-body'>
        <div className='card-body-type'>
          {props.card.type}
        </div>
        {props.card.body.map((line) => 
          <div className='card-body-line'>
            {line}
          </div>
        )}
      </div>
      {/* Leaving this in helps with layout for non-creature cards */}
      <div className='card-power-toughness'>
        {props.card.pt}
      </div>
      <div className='card-body'>
        {props.card.dfbody.map((line) => 
          <div className='card-body-line'>
            {line}
          </div>
        )}
      </div>
      
        <div className='df-card-header'>
          <div className='card-header-name'>
            {props.card.dfname}
          </div>
          <div className='card-header-cmc'>
            {props.card.dfcmc}
          </div>
        </div>
      
    </div>
  );
}

export default DFCard;