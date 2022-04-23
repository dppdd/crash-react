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

export default function BootstrapTable(props) {
	const { tableStructure, tableData } = props.data
	// ! FIX KEYS
	// ! Add scope attribute to body TableCell.

	return (
		<div>
			<Table ev={['striped']}>
				<TableHead>
					<TableRow>
						{tableStructure.map(col => <TableCell scope={'thead'} key={col.metaKey}>{col.name}</TableCell>)}
					</TableRow>
				</TableHead>
				<TableBody>
					{
						tableData.map(row => {
							return (
								<TableRow key={row.id}>
									{
										tableStructure.map(itemKey => <TableCell>{row[itemKey.metaKey]}</TableCell>)
									}
								</TableRow>
							)
						})
					}
				</TableBody>
			</Table>
		</div>
	)
}
