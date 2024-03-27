import { useContext } from 'react';
import { AddButton } from './styled'
import State from '../contexts/State';
import { CREATE_POST } from '../constants';

const AddPost = () => {
  const { setRightSide, setPostId } = useContext(State);

  const handleClick:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setRightSide(CREATE_POST)
    setPostId(null);
  }

  return (
    <AddButton onClick={handleClick}>
      +
    </AddButton>
  )
}

export default AddPost