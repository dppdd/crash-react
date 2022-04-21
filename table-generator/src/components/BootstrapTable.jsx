import { Table, TableHead, TableRow, TableBody, TableCell } from './Table'

/* 

	For now, the CSS of the entire table will be saved into Table.css.

	Also, no react context could be used with this structure,
	and I want to avoid CloneElement and mapping children.
	This is the reason behind the scope prop in TableCell component.
	We choose between <th> and <td> easily that way.
	This is nice to be refactored/tweaked and Context API used.

	Available props, mainly for styles:
	Component
		- attribute - BEM Class
	
	Table
		- dark  - table--dark
		- striped - table--striped

	TableHead
		- light - thead--light
		- dark  - thead--dark

	TableCell 
		- scope - options: thead

*/

export default function BootstrapTable () {
  return (
    <div>
      <Table striped>
        <TableHead large dark>
          <TableRow>
            <TableCell light scope={'thead'}>N</TableCell>
            <TableCell scope={'thead'}>First</TableCell>
            <TableCell scope={'thead'}>Last</TableCell>
            <TableCell scope={'thead'}>Handle</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
					<TableCell scope={'thead'}>1</TableCell>
            <TableCell>Dimitar</TableCell>
            <TableCell>Dimitrov</TableCell>
            <TableCell>Handle</TableCell>
          </TableRow>
					<TableRow>
					<TableCell scope={'thead'}>1</TableCell>
            <TableCell>Dimitar</TableCell>
            <TableCell>Dimitrov</TableCell>
            <TableCell>Handle</TableCell>
          </TableRow>
					<TableRow>
					<TableCell scope={'thead'}>1</TableCell>
            <TableCell>Dimitar</TableCell>
            <TableCell>Dimitrov</TableCell>
            <TableCell>Handle</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
