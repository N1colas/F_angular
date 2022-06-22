import { AppUser } from "./app-user";

export interface AppMessage {
  id:number;
  userId: number;
  title:string;
  content:string;
}

const x: AppMessage = {
  id:1,
  userId:2,
  title:'',
  content:''
}
