import '../styles/Card.css'

const AdvCard = (props) => {

  const { card } = props;
  console.log(card)

  return (
    <div className='card'>
      <div className='card-header'>
        <div className='card-header-name'>
          {/* Bonecrusher */}
          {props.card.name}
        </div>
        <div className='card-header-cmc'>
          {props.card.cmc}
        </div>
      </div>
      <div className='adv-card'>
        <div className='adv-card-header'>
          <div className='adv-card-header-name'>
            {/* Stomp */}
            {props.card.advname}
          </div>
          <div className='adv-card-header-cmc'>
            {props.card.advcmc}
          </div>
        </div>
        <div className={`adv-card-body`}>
          <div className='card-body-type'>
            {props.card.advtype}
          </div>
          {/* {props.card.advbody.map((line) => {
            <div className='adv-card-body-line'>
              {line}
            </div>
          })} */}
          {/* {props.card.advbody ? 'pebis': 'not pebis'} */}

          {props.card.advbody[0]}
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
        {props.card.pt ? props.card.pt : props.card.loyalty}
      </div>
    </div>
  );
}

export default AdvCard;