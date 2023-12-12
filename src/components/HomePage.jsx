import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css"
import "./homePage.css"

export default function HomePage() {
	return (
		<>
			<h1>Welcome to Custom Scroll System </h1>
			<SimpleBar
				style={{ width: 400, height: 100 }}
				classNames={{
					// defaults
					content: "simplebar-content",
					scrollContent: "simplebar-scroll-content",
					scrollbar: "simplebar-scrollbar",
					track: "simplebar-track",
				}}
				className='custom-scroll'
				autoHide={false}
			>
				<table className='text-3xl'>
					<thead>
						<tr>
							<th>Data 1</th>
							<th>Data2</th>
							<th>Data 3</th>
							<th>Data4</th>
							<th>Data5</th>
							<th>Data6</th>
							<th>Data7</th>
							<th>Data8</th>
							<th>Data9</th>
							<th>Data10</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Value 1</td>
							<td>Value 2</td>
							<td>Value 3</td>
							<td>Value 4</td>
							<td>Value 5</td>
							<td>Value 6</td>
							<td>Value 7</td>
							<td>Value 8</td>
							<td>Value 9</td>
							<td>Value 10</td>
						</tr>
					</tbody>
				</table>
			</SimpleBar>
		</>
	)
}
{
	/* </Scrollbars> */
}
