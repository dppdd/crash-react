export default function TableHead (props) {
  const classNamesMap = {
    large: 'thead--large',
    light: 'thead--light',
    dark: 'thead--dark'
  }
  const { ev } = props
  const classes = ev
    ? ev
        .map(e => {
          return classNamesMap[e] ? classNamesMap[e] : ''
        })
        .join(' ')
    : []

  return ev ? (
    <thead className={classes}>{props.children}</thead>
  ) : (
    <thead>{props.children}</thead>
  )
}
