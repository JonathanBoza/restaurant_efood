import { MoonLoader } from 'react-spinners'

import { Container } from './styles'
import { colors } from '../../stylos'

const Loader = () => {
  return (
    <Container>
      <MoonLoader color={colors.lightBeige} />
    </Container>
  )
}

export default Loader
