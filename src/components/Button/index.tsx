import * as S from './styles'

type Props = {
  type: 'button' | 'submit'
  title: string
  onClick?: () => void
  disabled?: boolean
  children: string
}

const Button = ({ type, onClick, children, title, disabled }: Props) => {
  return (
    <S.ButtonContainer
      type={type}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </S.ButtonContainer>
  )
}

export default Button
