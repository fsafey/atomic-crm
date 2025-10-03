import { useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
} from '@tanstack/react-table';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { DataTable } from '@/components/data-table/data-table';
import { DataTablePagination } from '@/components/data-table/data-table-pagination';
import { DataTableColumnHeader } from '@/components/data-table/data-table-column-header';
import { Badge } from '@/components/ui/badge';

// Sample data type for deals analytics
export type DealAnalytics = {
  id: string;
  dealName: string;
  company: string;
  value: number;
  status: 'won' | 'lost' | 'in-progress' | 'pending';
  closeDate: string;
  probability: number;
};

// Sample analytics data
const sampleDeals: DealAnalytics[] = [
  {
    id: '1',
    dealName: 'Enterprise License Q1',
    company: 'TechCorp Inc',
    value: 125000,
    status: 'won',
    closeDate: '2025-09-15',
    probability: 100,
  },
  {
    id: '2',
    dealName: 'Annual Subscription',
    company: 'StartupXYZ',
    value: 45000,
    status: 'in-progress',
    closeDate: '2025-10-20',
    probability: 75,
  },
  {
    id: '3',
    dealName: 'Cloud Migration',
    company: 'Global Solutions',
    value: 89000,
    status: 'pending',
    closeDate: '2025-11-05',
    probability: 50,
  },
  {
    id: '4',
    dealName: 'Support Package',
    company: 'MediaCo Ltd',
    value: 32000,
    status: 'won',
    closeDate: '2025-09-28',
    probability: 100,
  },
  {
    id: '5',
    dealName: 'Consulting Services',
    company: 'Finance Group',
    value: 67000,
    status: 'lost',
    closeDate: '2025-09-10',
    probability: 0,
  },
];

// Format currency
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(value);
};

// Status badge component
const StatusBadge = ({ status }: { status: DealAnalytics['status'] }) => {
  const variants: Record<DealAnalytics['status'], string> = {
    won: 'default',
    lost: 'destructive',
    'in-progress': 'secondary',
    pending: 'outline',
  };

  return (
    <Badge variant={variants[status] as any}>
      {status === 'in-progress' ? 'In Progress' : status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
};

export function RecentDealsWidget() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  // Define columns
  const columns = useMemo<ColumnDef<DealAnalytics>[]>(
    () => [
      {
        accessorKey: 'dealName',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Deal Name" />,
        cell: ({ row }) => <div className="font-medium">{row.getValue('dealName')}</div>,
      },
      {
        accessorKey: 'company',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Company" />,
        cell: ({ row }) => <div className="text-muted-foreground">{row.getValue('company')}</div>,
      },
      {
        accessorKey: 'value',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Value" />,
        cell: ({ row }) => {
          const value = row.getValue('value') as number;
          return <div className="font-semibold">{formatCurrency(value)}</div>;
        },
      },
      {
        accessorKey: 'status',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
        cell: ({ row }) => <StatusBadge status={row.getValue('status')} />,
        filterFn: (row, id, value) => {
          return value.includes(row.getValue(id));
        },
      },
      {
        accessorKey: 'probability',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Probability" />,
        cell: ({ row }) => {
          const probability = row.getValue('probability') as number;
          return <div>{probability}%</div>;
        },
      },
      {
        accessorKey: 'closeDate',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Close Date" />,
        cell: ({ row }) => {
          const date = new Date(row.getValue('closeDate'));
          return <div>{date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>;
        },
      },
    ],
    []
  );

  // Create table instance
  const table = useReactTable({
    data: sampleDeals,
    columns,
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  return (
    <Card className="p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Recent Deals Analytics</h3>
        <p className="text-sm text-muted-foreground">Overview of recent deal pipeline activity</p>
      </div>

      <div className="space-y-4">
        <DataTable table={table} columns={columns} />
        <DataTablePagination table={table} />
      </div>
    </Card>
  );
}
