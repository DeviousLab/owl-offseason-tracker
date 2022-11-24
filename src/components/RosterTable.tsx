import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
	getFilteredRowModel,
	getFacetedRowModel,
	getFacetedUniqueValues,
	getFacetedMinMaxValues,
	getPaginationRowModel,
	getSortedRowModel,
	FilterFn,
} from '@tanstack/react-table';
import { useState } from 'react';
import { RankingInfo, rankItem } from '@tanstack/match-sorter-utils';

import ReferenceTweet from './ReferenceTweet';
import TeamDisplay from './TeamDisplay';
import PlayerStatus from './PlayerStatus';
import RoleDisplay from './RoleDisplay';
import { DebouncedInput } from './DebouncedInput';

type RosterTableChanges = {
	date: string;
	player: {
		username: string;
		currentStatus: string;
		role: string;
		formerTeam: {
			name: string;
		};
		newTeam: {
			name: string;
		};
	};
	transactionDetails: string;
	reference: string;
};

declare module '@tanstack/table-core' {
	interface FilterFns {
		fuzzy: FilterFn<unknown>;
	}
	interface FilterMeta {
		itemRank: RankingInfo;
	}
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
	const itemRank = rankItem(row.getValue(columnId), value);

	addMeta({
		itemRank,
	});

	return itemRank.passed;
};

const columnHelper = createColumnHelper<RosterTableChanges>();

const columns = [
	columnHelper.accessor((rosterChanges) => rosterChanges.date, {
		header: 'Date',
		cell: (info) => info.getValue(),
		footer: (info) => info.column.id,
	}),
	columnHelper.accessor((rosterChanges) => rosterChanges.player.username, {
		header: 'Username',
		cell: (info) => info.getValue(),
		footer: (info) => info.column.id,
	}),
	columnHelper.accessor((rosterChanges) => rosterChanges.player.role, {
		header: 'Role',
		cell: (info) => <RoleDisplay value={info.getValue()} />,
		footer: (info) => info.column.id,
	}),
	columnHelper.accessor((rosterChanges) => rosterChanges.player.currentStatus, {
		header: 'Status',
		footer: (info) => info.column.id,
		cell: (info) => <PlayerStatus value={info.getValue()} />,
	}),
	columnHelper.accessor(
		(rosterChanges) => rosterChanges.player.formerTeam.name,
		{
			header: 'Old Team',
			footer: (info) => info.column.id,
			cell: (info) => <TeamDisplay value={info.getValue()} />,
		}
	),
	columnHelper.display({
		id: 'arrow',
		cell: (info) => <span>⟶</span>,
	}),
	columnHelper.accessor((rosterChanges) => rosterChanges.player.newTeam.name, {
		header: 'New Team',
		footer: (info) => info.column.id,
		cell: (info) => <TeamDisplay value={info.getValue()} />,
	}),
	columnHelper.accessor((rosterChanges) => rosterChanges.transactionDetails, {
		header: 'Transaction Details',
		footer: (info) => info.column.id,
	}),
	columnHelper.accessor('reference', {
		header: 'Reference Tweet',
		footer: (info) => info.column.id,
		cell: (info) => <ReferenceTweet value={info.getValue()} />,
	}),
];

const RosterTable = ({ rosterChanges }: any) => {
	const [data, setData] = useState(() => [...rosterChanges]);
	const [globalFilter, setGlobalFilter] = useState('');
	const table = useReactTable({
		data,
		columns,
		filterFns: {
			fuzzy: fuzzyFilter,
		},
		state: {
			globalFilter,
		},
		onGlobalFilterChange: setGlobalFilter,
		globalFilterFn: fuzzyFilter,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getFacetedRowModel: getFacetedRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		getFacetedMinMaxValues: getFacetedMinMaxValues(),
	});

	return (
		<div className='p-3 text-center font-Industry'>
			<div className='inline-block'>
				<DebouncedInput
					value={globalFilter ?? ''}
					onChange={(value) => setGlobalFilter(String(value))}
					className='p-2 font-lg shadow border border-block'
					placeholder='Search...'
				/>
			</div>
			<div className='h-2' />
			<div className='overflow-x-auto'>
				<table className='text-center inline-block'>
					<thead>
						{table.getHeaderGroups().map((headerGroup) => (
							<tr
								key={headerGroup.id}
								className='text-md font-semibold tracking-wide text-[#E8E6E3] bg-[#272B2B] text-left uppercase border-b border-gray-100'
							>
								{headerGroup.headers.map((header) => {
									return (
										<th key={header.id} className='px-4 py-2'>
											{header.isPlaceholder ? null : (
												<>
													<div
														{...{
															className: header.column.getCanSort()
																? 'cursor-pointer select-none'
																: '',
															onClick: header.column.getToggleSortingHandler(),
														}}
													>
														{flexRender(
															header.column.columnDef.header,
															header.getContext()
														)}
														{{
															asc: ' 🔼',
															desc: ' 🔽',
														}[header.column.getIsSorted() as string] ?? null}
													</div>
												</>
											)}
										</th>
									);
								})}
							</tr>
						))}
					</thead>
					<tbody>
						{table.getRowModel().rows.map((row) => {
							return (
								<tr key={row.id}>
									{row.getVisibleCells().map((cell) => {
										return (
											<td
												key={cell.id}
												className='p-2 border-b border-gray-100 dark:text-gray-900 bg-gray-400'
											>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext()
												)}
											</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<div className='h-2' />
			<div className='inline-block text-gray-700 dark:text-gray-200'>
				<div className='flex items-center gap-2'>
					<button
						className='border rounded p-1 border-gray-700 dark:border-gray-200 cursor-pointer'
						onClick={() => table.setPageIndex(0)}
						disabled={!table.getCanPreviousPage()}
					>
						{'<<'}
					</button>
					<button
						className='border rounded p-1 border-gray-700 dark:border-gray-200 cursor-pointer'
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						{'<'}
					</button>
					<button
						className='border rounded p-1 border-gray-700 dark:border-gray-200 cursor-pointer'
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						{'>'}
					</button>
					<button
						className='border rounded p-1 border-gray-700 dark:border-gray-200 cursor-pointer'
						onClick={() => table.setPageIndex(table.getPageCount() - 1)}
						disabled={!table.getCanNextPage()}
					>
						{'>>'}
					</button>
					<span className='flex items-center gap-1'>
						<div>Page</div>
						<strong>
							{table.getState().pagination.pageIndex + 1} of{' '}
							{table.getPageCount()}
						</strong>
					</span>
					<span className='flex items-center gap-1'>
						| Go to page:
						<input
							type='number'
							defaultValue={table.getState().pagination.pageIndex + 1}
							onChange={(e) => {
								const page = e.target.value ? Number(e.target.value) - 1 : 0;
								table.setPageIndex(page);
							}}
							className='border p-1 rounded w-16 dark:text-white bg-gray-300 dark:bg-[#6B6B6B]'
						/>
					</span>
					<select
						value={table.getState().pagination.pageSize}
						onChange={(e) => {
							table.setPageSize(Number(e.target.value));
						}}
						className='dark:text-white border bg-gray-300 dark:bg-[#6B6B6B] py-2 rounded'
					>
						{[10, 20, 30, 40, 50].map((pageSize) => (
							<option key={pageSize} value={pageSize}>
								Show {pageSize}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className='text-gray-700 dark:text-gray-200'>
				{table.getPrePaginationRowModel().rows.length} Rows
			</div>
		</div>
	);
};

export default RosterTable;
