"use client"
import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from '../ui/button'
import { TrashIcon } from 'lucide-react'
import { number, string } from 'zod'
import { deleteTaskByID } from '@/app/actions/task'
import {useRouter} from "next/navigation";

  interface DeleteDialogProps{
    id: number;
  }
  

const DeleteDialog = ( {id } : DeleteDialogProps) => {
  const router = useRouter();
  const handleDelete = async () => {
    await deleteTaskByID(id);
    router.refresh();
  }

  return (
    <AlertDialog>
  <AlertDialogTrigger asChild>
    <Button className='bg-red-300' variant={"outline"}>
              <TrashIcon/>
            </Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={handleDelete} className='bg-red-400'>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

    
  )
}

export default DeleteDialog