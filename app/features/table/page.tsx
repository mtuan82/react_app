'use client'
import * as React from 'react';
import { InfoTable, Row } from '../shared/table/InfoTable';
import { Columns } from '../shared/table/tableHead';

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

var rows: Row[] = [
    { key:1, model: { id:1, name:'Cupcake', calories:305, carbs:3.7, fat:67, protein: 100 }},
    { key:2, model: { id:2, name:'Donut', calories:452, carbs:25.0, fat:24,protein: 25 }},
    { key:3, model: { id:3, name:'Eclair', calories:305, carbs:3.7, fat:67, protein: 4. }},
    { key:4, model: { id:4, name:'Frozen yoghurt', calories:305, carbs:3.7, fat:67, protein: 4.3 }},
    { key:5, model: { id:5, name:'Gingerbread', calories:305, carbs:3.7, fat:67, protein: 4.3 }},
    { key:6, model: { id:6, name:'Honeycomb', calories:305, carbs:3.7, fat:67, protein: 4.3 }},
    { key:7, model: { id:7, name:'Ice cream sandwich', calories:305, carbs:3.7, fat:67, protein: 4.3 }},
    { key:8, model: { id:8, name:'Jelly Bean', calories:305, carbs:3.7, fat:67, protein: 4.3 }},
    { key:9, model: { id:9, name:'KitKat', calories:305, carbs:3.7, fat:67, protein: 4.3 }},
    { key:10, model: { id:10, name:'Lollipop', calories:305, carbs:3.7, fat:67, protein: 4.3 }},
    { key:11, model: { id:11, name:'Marshmallow', calories:305, carbs:3.7, fat:67, protein: 4.3 }},
    { key:12, model: { id:12, name:'Nougat', calories:305, carbs:3.7, fat:67, protein: 4.3 }},
    { key:13, model: { id:13, name:'Oreo', calories:305, carbs:3.7, fat:67, protein: 4.3 }},
];

export default function Table() {
    return (
        <InfoTable
            tableTile='Table Title'
            columns={cols}
            rows={rows}>
        </InfoTable>
    );
}



