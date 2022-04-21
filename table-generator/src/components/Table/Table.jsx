import './Table.css'

export default function Table (props) {
  const classNamesMap = {
    striped: 'table--striped',
    dark: 'table--dark'
  }
  const { ev } = props
	
	// TODO: Separate the following logic to be reused
  const classes = ev
    ? ev
        .map(e => {
          return classNamesMap[e] ? classNamesMap[e] : ''
        })
        .join(' ')
    : []

  return <table className={`table ${classes}`}>{props.children}</table>
}
