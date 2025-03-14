import TableRow from "./TableRow"

export default function Result({results}) {

    console.log(results)

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Interest</th>
                    <th>Value of the year</th>
                    <th>Annual Investment</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result, index) => (
                    <TableRow key={index} results={result} />
                ))}
            </tbody>
        </table>
    )
}