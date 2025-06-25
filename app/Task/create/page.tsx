"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createTask } from "@/app/actions/task"
import { task } from "@/app/generated/prisma"
import Link from "next/link"

const formSchema = z.object({
  taskName: z.string().min(2, {
    message: "taskName must be at least 2 characters.",
  }),
  taskstatus: z.string().min(2, {
    message: "taskstatus must be at least 2 characters.",
  }),
   
})

export default function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      taskName: "",
      taskstatus: "",
    
    
    },
  })
 
  // 2. Define a submit handler.
 async function onSubmit(values: z.infer<typeof formSchema>) {
   await createTask(values as task)
   form.reset();
    console.log(values)
  }

  return (
   <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <div className="w-100 bg-white p-15 m-2 rounded-2xl">
          <FormField
          control={form.control}
          name="taskName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task Name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> <br />
        <FormField
          control={form.control}
          name="taskstatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task status</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> 
        
        <br />
      
        <Button type="submit">Submit</Button>
        <Button asChild className="ml-2">
            <Link href="/Task/list">
            List
            </Link>
        </Button>
      </div>
      </form>
    </Form>
   </div>
  )
}