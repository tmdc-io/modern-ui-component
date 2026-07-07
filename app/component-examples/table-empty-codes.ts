export const tableEmptyCodes = {
  install: `npx shadcn@latest add tmdc-io/modern-ui-component/table
npx shadcn@latest add tmdc-io/modern-ui-component/input`,
  full: `<TableBody>
  {rows.length ? (
    rows.map((row) => (
      <TableRow key={row.id}>
        <TableCell>{row.name}</TableCell>
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell colSpan={columns.length} className="h-24 text-center">
        No results.
      </TableCell>
    </TableRow>
  )}
</TableBody>
`,
}
