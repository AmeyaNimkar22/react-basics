import sampleI from './assets/pasta.png'

function Card(){
    return (
        <div className="card">
            <img src={sampleI} alt="sample image" className='card-image' />
            <h2 className='card-title'>Pasta</h2>
            <p className='card-text'>Lorem ipsum dolor sit amet.</p>
        </div>
    );

}

export default Card;