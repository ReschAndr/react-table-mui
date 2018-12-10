import * as React from "react";
import { TablePlain, TableProps, IColDef } from "react-table-plain";
import { extend } from "lodash";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import { TableFooter } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export class TableMui extends React.Component<TableProps> {
  render() {
    const ps = {
      rootElement: Table,
      rowElement: TableRow,
      cellElement: TableCell,
      headerCellElement: TableCell,
      headerElement: TableHead,
      bodyElement: TableBody,
      footerElement: TableFooter,
      renderSortLabel: (colDef: IColDef, desc: boolean) => (
        <TableSortLabel active direction={desc ? "desc" : "asc"} />
      ),
      renderExpansionIndicator: (expanded: boolean) => (
        <IconButton
          style={{
            transition: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            transform: `rotate(${expanded ? 180 : 0}deg)`
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      )
    };
    const result = extend(ps, this.props);
    return <TablePlain {...result} />;
  }
}
