import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { EnhancedTableHead, Columns, Order } from './tableHead';
import { EnhancedTableToolbar } from './tableToolBar';

interface TableModel {
    tableTile: string,
    columns: Columns[],
    rows: Row[],
    totalRow: number,
    handleChangePage(page: number): void,
    handleChangeRowsPerPage(rowsPerPage: number): void,
    handleSelect(selected: readonly number[]): void,
    handleRequestSort(column: string, order: string): void,
    onDeleteRow(e: any):void
}

export interface Row {
    key: number,
    model: any
}

export function InfoTable(param: TableModel) {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<string>();
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        columnName: string,
    ) => {
        const isAsc = orderBy === columnName && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(columnName);
        param.handleRequestSort(columnName, isAsc ? 'desc' : 'asc');
    };

    const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = param.rows.map((n) => n.key);
            setSelected(newSelected);
            param.handleSelect(newSelected);
            return;
        }
        setSelected([]);
        param.handleSelect([]);
    };

    const handleSelect = (event: React.MouseEvent<unknown>, id: any) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: readonly number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
        param.handleSelect(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        param.handleChangePage(newPage);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        param.handleChangeRowsPerPage(parseInt(event.target.value, 10));
        param.handleChangePage(0);
        setPage(0);
    };

    const isSelected = (id: any) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - param.totalRow) : 0;

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar numSelected={selected.length} tableTile={param.tableTile} onDelete={ (e) => { param.onDeleteRow(e); setSelected([]); } } />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle">
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAll}
                            onRequestSort={handleRequestSort}
                            rowCount={param.totalRow}
                            columns={param.columns} />
                        <TableBody>
                            {
                                param.rows.map((row, index, array) => {
                                    const isItemSelected = isSelected(row.key);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleSelect(event, row.key)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.key}
                                            selected={isItemSelected}
                                            sx={{ cursor: 'pointer' }}>
                                            <TableCell key={0} padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>
                                            {
                                                param.columns.map((col, index, array) => {
                                                    return (
                                                        <TableCell key={index + 1} align={col.align}>{row.model[col.id]}</TableCell>
                                                    )
                                                })
                                            }
                                        </TableRow>
                                    );
                                })
                            }
                            {
                                emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: 53 * emptyRows,
                                        }}>
                                        <TableCell colSpan={param.columns.length} />
                                    </TableRow>)
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={param.totalRow}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box >
    );
}

