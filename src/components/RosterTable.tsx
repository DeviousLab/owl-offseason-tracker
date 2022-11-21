import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react';

import ReferenceTweet from './ReferenceTweet';
import TeamDisplay from './TeamDisplay';
import PlayerStatus from './PlayerStatus';
import RoleDisplay from './RoleDisplay';

type RosterTableChanges = {
  date: string,
  player: {
    username: string,
    currentStatus: string,
    role: string,
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
    header: 'Username',
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor(rosterChanges => rosterChanges.player.role, {
    header: 'Role',
    cell: info => <RoleDisplay value={info.getValue()} />,
    footer: info => info.column.id,
  }),
  columnHelper.accessor(rosterChanges => rosterChanges.player.currentStatus, {
    header: 'Status',
    footer: info => info.column.id,
    cell: info => <PlayerStatus value={info.getValue()} />,
  }),
  columnHelper.accessor(rosterChanges => rosterChanges.player.formerTeam.name, {
    header: 'Old Team',
    footer: info => info.column.id,
    cell: info => <TeamDisplay value={info.getValue()} />
  }),
  columnHelper.display({
    id: 'arrow',
    cell: info => <span>⟶</span>
  }),
  columnHelper.accessor(rosterChanges => rosterChanges.player.newTeam.name, {
    header: 'New Team',
    footer: info => info.column.id,
    cell: info => <TeamDisplay value={info.getValue()} />
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
    <div className="p-3 flex justify-center align-middle font-Industry">
      <table className='text-center'>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className="text-md font-semibold tracking-wide text-[#E8E6E3] bg-[#272B2B] text-left uppercase border-b border-gray-600">
              {headerGroup.headers.map(header => (
                <th key={header.id} className='px-4 py-2'>
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
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="p-2 border-b">
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