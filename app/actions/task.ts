"use server"

import prisma from "@/lib/Prisma" 
import {  task } from "../generated/prisma"



export async function createTask(FormData:task) {
    await prisma.task.create({
           data: {
            taskName: FormData.taskName, 
            taskstatus: FormData.taskstatus,
            status: FormData.status,
          
           }
    })

}
export async function getAllTask() {
  const data = await prisma.task.findMany({});
  return {
    success: true,
    data
  };
}
export async function getTaskById(id:number){
    const task = await prisma.task.findUnique({
        where:{
            id: id,
    }}
)
return {
    success: true,
    data:task
  };
}

export async function deleteTaskByID(id: number){
    const task = await prisma.task.delete({
        where: {
            id: id
        }
    })
}
export async function countTask(){
    const counter = await prisma.task.count()
   return{
   total: counter
   }
} 


