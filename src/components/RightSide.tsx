import { useContext } from 'react'

import { CREATE_POST, DETAILS, UPDATE_POST } from '../constants';
import State from '../contexts/State'
import { RightSideContainer } from './styled'
import Details from './Details';
import CreatePostForm from './CreatePostForm';

const RightSide = () => {
  const { rightSide } = useContext(State);

  return (
    <RightSideContainer>
      {(rightSide === CREATE_POST || rightSide === UPDATE_POST) && <CreatePostForm />}
      {rightSide === DETAILS && <Details />}
    </RightSideContainer>
  )
}

export default RightSide