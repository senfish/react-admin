

export const EllipsisCode = `
import Ellipsis from './Ellipsis';
const EllipsisPage = () => {
  return <div>
    <Ellipsis style={{ width: 200 }} title={text} line={2}>
      <span>{text}</span>
    </Ellipsis>
  </div>
}

export default EllipsisPage;
`