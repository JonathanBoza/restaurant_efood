import { SidebarComponents } from './styles'

type Props = {
  title?: string
  children: JSX.Element
  className: string
}

const Sidebar = ({ children, title, className }: Props) => {
  return (
    <>
      <SidebarComponents title={title} className={className}>
        <h4>{title}</h4>
        {children}
      </SidebarComponents>
    </>
  )
}

export default Sidebar
