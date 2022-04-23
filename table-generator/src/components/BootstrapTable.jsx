import { Table, TableHead, TableRow, TableBody, TableCell } from './Table'

/* 

	For now, the CSS of the entire table will be saved into Table.css.

	Also, no react context could be used with this structure,
	and I want to avoid CloneElement and mapping children.
	This is the reason behind the scope prop in TableCell component.
	We choose between <th> and <td> easily that way.
	This is nice to be refactored/tweaked and Context API used.

	Available props, mainly for styles:
	ev - stands for Enhance Visuals, we use it to inject modifiers.
	It looks neat with boolean directly like <TableHead dark>
	But they are direct children of props and that should be avoided.
	We want to control the actual CSS Class names not here, but capsulated
	in every component, so the connection between CSS and Component 
	to be in once place.

	Component
		- attribute(string) - BEM Class(example, defined in every component)
	
	Table
		- 'dark'  - table--dark
		- 'striped' - table--striped

	TableHead
		- 'light' - thead--light
		- 'dark'  - thead--dark
		- 'large' - thead--large

	TableCell 
		- scope - options: thead
	
*/

/*

	helper structure.js or constants.js

	table-structure.js - here we add the column names and more specifics, for all tables in this app.

	"bootstrapTable": {
		columns: [{
			name: "#",
			meta: "meta data about the column",
			type: "string/url"
		},
			{ name: "First",
			meta: "meta data about the column",
			type: "string"},
		
			{ name: "Last",
			meta: "meta data about the column",
			type: "string"},
		
			{ name: "Handle",
			meta: "meta data about the column",
			type: "string"},
		]
	}


*/

export default function BootstrapTable () {
  return (
    <div>
      <Table ev={['striped']}>
        <TableHead>
          <TableRow>
            <TableCell light scope={'thead'}>
              #
            </TableCell>
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
            <TableCell scope={'thead'}>2</TableCell>
            <TableCell>Dimitar</TableCell>
            <TableCell>Dimitrov</TableCell>
            <TableCell>Handle</TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope={'thead'}>3</TableCell>
            <TableCell>Dimitar</TableCell>
            <TableCell>Dimitrov</TableCell>
            <TableCell>Handle</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
