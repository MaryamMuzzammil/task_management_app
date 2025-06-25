import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { EyeIcon, PencilIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { countTask, getAllTask } from '@/app/actions/task';
import DeleteDialog from '@/components/custom/DeleteDialog';

const TaskList = async () => {
  const task = await getAllTask();
  const count = await  countTask();
  return (

    <div className='flex justify-center items-center h-screen'>
        <div className=' className="w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden p-6"'>
            
             <div className=' m-1 w-[230px]'>
                <Card className='bg-blue-100'>
  <CardHeader>
    <CardTitle className='font-extrabold text-2xl'>Total Task</CardTitle>
  </CardHeader>
  <CardContent>
    <p className='font text-[30px]'>{count.total}</p>
  </CardContent>
</Card>
             </div>

      <div className='flex justify-center items-center mt-[10px]' >
                <Button asChild>
        <Link href={"/Task/create"}>Create</Link>

      </Button>
             </div>
      <div className='w-[650px] p-8 m-2'>
        <Table>
          <TableHeader >
            <TableRow >
              <TableHead className='font-bold'>Student Id</TableHead>
              <TableHead className='font-bold'>Task Name</TableHead>
              <TableHead className=" font-bold">View</TableHead>
              <TableHead className="text-right font-bold">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {task.data.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.taskName}</TableCell>
                <TableCell>{task.taskstatus}</TableCell>
               
                <TableCell>
                  <Button
                    asChild
                    variant="outline"
                    className="bg-green-100 hover:bg-green-200 text-green-700 rounded-lg px-3 py-1"
                  >
                    <Link href={`/Task/${task.id}`}>
                      <EyeIcon />
                    </Link>
                  </Button>
                </TableCell>
                

                <TableCell>
                  <DeleteDialog id={task.id} />
                </TableCell>
              </TableRow>
            ))

            }
          </TableBody>
        </Table>
        </div>
        </div>
     
      </div>

  
  )
}
export default TaskList