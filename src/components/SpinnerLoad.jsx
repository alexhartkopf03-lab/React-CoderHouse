import Spinner from 'react-bootstrap/Spinner';

function SpinnerLoad() {
  return (
    <div className='contSpinner'>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}

export default SpinnerLoad;