import { formatter } from "../util/investment";  // Import formatter

export default function TableRow({ results }) {
  return (
    <tr>
      <td>{results.year}</td>
      <td>{formatter.format(results.interest)}</td>
      <td>{formatter.format(results.valueEndOfYear)}</td>
      <td>{formatter.format(results.annualInvestment)}</td>
    </tr>
  );
}