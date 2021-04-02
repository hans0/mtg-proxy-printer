import '../styles/Card.css'

const lineAndTextCount = (card) => {
  let textCount = 0;
  card.body.forEach((l) => {
    textCount += l.length;
  })
  card.dfbody.forEach((l) => {
      textCount += l.length;
  })

  console.log('textCount: ', textCount)

  return {textLength: textCount};
  
}


const DFCard = (props) => {

  const { card } = props;
  console.log(card);
  const length = lineAndTextCount(card)['textLength'];
  console.log(length)

  const lengthThreshold = 450;

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
      {/* <div className='card-body tiny'>       */}
      <div className={`card-body ${length > lengthThreshold ? 'tiny' : ''}`}>
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
      <div className='df-card-power-toughness'>
        <div className='rotate'>
          {props.card.dfpt}
        </div>
        <div>
          {props.card.pt}
        </div>
      </div>
      {/* <div className='card-power-toughness'>
        {props.card.pt ? props.card.pt : props.card.loyalty}
      </div>
      {props.card.dfpt && 
        <div className='df-card-power-toughness'>
          {props.card.dfpt ? props.card.dfpt : props.card.dfloyalty}
        </div>
        
      } */}
      {/* <div className='df-card-body tiny'> */}
      <div className={`df-card-body ${length > lengthThreshold ? 'tiny' : ''}`}>

        <div className='card-body-type'>
          {props.card.dftype}
        </div>
      {/* <div className='df-card-body'> */}
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
        {/* {props.card.dfcmc ?
          <div className='card-header-cmc'>
            {props.card.dfcmc}
          </div>
          :
          <div className='card-header-cmc'>
            {props.card.cmc}
          </div>
        } */}
        <div className='card-header-cmc'>
          {props.card.dfcmc ? props.card.dfcmc : props.card.cmc}
        </div>
        
      </div>
      
    </div>
  );
}

export default DFCard;