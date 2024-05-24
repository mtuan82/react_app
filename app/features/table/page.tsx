'use client'
import * as React from 'react';
import { InfoTable, Row } from '../shared/table/InfoTable';
import { Columns } from '../shared/table/tableHead';
import Button from '@mui/material/Button';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import { addRow, deleteRow } from './rowSlice';

const cols: Columns[] = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'name',
        align: "left"
    },
    {
        id: 'calories',
        numeric: true,
        disablePadding: false,
        label: 'Calories',
        align: 'right'
    },
    {
        id: 'fat',
        numeric: true,
        disablePadding: false,
        label: 'Fat (g)',
        align: 'right'
    },
    {
        id: 'carbs',
        numeric: true,
        disablePadding: false,
        label: 'Carbs (g)',
        align: 'right'
    },
    {
        id: 'protein',
        numeric: true,
        disablePadding: false,
        label: 'Protein (g)',
        align: 'right'
    },
];

export default function Table() {
    const [order, setOrder] = React.useState<string>('asc');
    const [orderBy, setOrderBy] = React.useState<string>();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const rows = useAppSelector(state => state.rows);
    const dispatch = useAppDispatch();

    console.log("page:" + page + " rowsPerPage:" + rowsPerPage)
    console.log(selected)
    console.log("column:" + orderBy + " order:" + order)


    const onAddRow = (e: any): void => {
        //add element behind the last one
        let index = rows[rows.length -1]?.model["id"] + 1;
        dispatch(addRow({ key: index, model: { id: index, name: 'Oreo23', calories: 305, carbs: 3.7, fat: 67, protein: 4.3 } }));
    }

    const onDeleteRow = (e: any): void => {
        selected.map(key => dispatch(deleteRow(key)));
        setSelected([]);
    }

    return (
        <>
            <InfoTable
                tableTile='Table Title'
                totalRow={rows.length}
                columns={cols}
                rows={Object.values(rows).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)}
                handleChangeRowsPerPage={(rowsPerPage) => setRowsPerPage(rowsPerPage)}
                handleChangePage={(page) => setPage(page)}
                handleSelect={(seleted) => setSelected(seleted)}
                handleRequestSort={(column, order) => { setOrder(order); setOrderBy(column); }}
                onDeleteRow={(e) => onDeleteRow(e)}>
            </InfoTable>
            <Button type='button' variant='contained' onClick={(e) => onAddRow(e)}>add row</Button>
        </>
    );
}



