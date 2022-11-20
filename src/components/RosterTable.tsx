import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react';

import ReferenceTweet from './ReferenceTweet';

type RosterTableChanges = {
  date: string,
  player: {
    username: string,
    currentStatus: string,
    formerTeam: {
      name: string,
    },
    newTeam: {
      name: string,
    }
  }
  transactionDetails: string,
  reference: string,
}

const columnHelper = createColumnHelper<RosterTableChanges>();

const columns = [
  columnHelper.accessor(rosterChanges => rosterChanges.date, {
    header: 'Date',
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor(rosterChanges => rosterChanges.player.username, {
    header: 'Player Username',
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor(rosterChanges => rosterChanges.player.currentStatus, {
    header: 'Player Status',
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor(rosterChanges => rosterChanges.player.formerTeam.name, {
    header: 'Old Team',
    footer: info => info.column.id,
  }),
  columnHelper.accessor(rosterChanges => rosterChanges.player.newTeam.name, {
    header: 'New Team',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('transactionDetails', {
    header: 'Transaction Details',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('reference', {
    header: 'Reference Tweet',
    footer: info => info.column.id,
    cell: info => <ReferenceTweet value={info.getValue()} />
  }),
]

const RosterTable = ({ rosterChanges }: any) => {
  const [data, setData] = useState(() => [...rosterChanges]);
  console.log(rosterChanges);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="p-2 flex justify-center align-middle">
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className=''>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-4" />
    </div>
  )
}

export default RosterTable