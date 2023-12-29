import { Container } from './styles'

export function ButtonText({ title, icon: Icon, children, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon />}
      {children}
      {title}
    </Container>
  )
}
