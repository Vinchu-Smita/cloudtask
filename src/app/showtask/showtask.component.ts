import { Component, OnInit } from '@angular/core';
import { CrudService } from '../sevices/crud.service';
import { StoringdataService } from '../sevices/storingdata.service';

@Component({
  selector: 'app-showtask',
  templateUrl: './showtask.component.html',
  styleUrls: ['./showtask.component.css']
})
export class ShowtaskComponent implements OnInit {
 public result:any;
 public InProgress:any=[];
 public done:any=[];



  constructor(private crud:CrudService,private store:StoringdataService) { }
  Addtask(extra:any){
    this.crud.getData('addtask'+extra).subscribe((res:any)=>{
      console.log(res)
      this.result=res;
   },
   (err:any)=>{
     console.log(err)
   })
 }
 Addtask1(extra:any){
  this.crud.getData('addtask'+extra).subscribe((res:any)=>{
    console.log(res)
    this.InProgress=res;
 },
 (err:any)=>{
   console.log(err)
 })
}
 Addtask2(extra:any){
  this.crud.getData('addtask'+extra).subscribe((res:any)=>{
    console.log(res)
    this.done=res;
 },
 (err:any)=>{
   console.log(err)
 })
}
  ngOnInit(): void {
  this.Addtask("?status=1");
  this.Addtask1("?status=2");
  this.Addtask2("?status=3");

  }
  onDrag(ev: any) {
   var obj=ev.target.attributes.for.value.split('#'); 
    console.log("fromdrag")
    console.log(obj); 
    localStorage.setItem("title",obj[0]);
    localStorage.setItem("description",obj[1]);
    localStorage.setItem("status",obj[2]);
    localStorage.setItem("datetime",obj[3]);
    localStorage.setItem("id",obj[4]);
   
    console.log(ev.target);
  }
  
  onDrop(drop: any) {  
      var ans=this.InProgress.push(drop.dragData); 
      console.log(ans)
      console.log("drg data "+drop.dragData);
      console.log(this.InProgress)
      console.log(this.result);

    this.result.splice(this.result.indexOf(drop.dragData),1);
        console.log(this.result);

      localStorage.setItem("status","2");
      var obj={ 
              title:localStorage.getItem("title"),
              description:localStorage.getItem("description"),
              status:localStorage.getItem("status"),
              datetime:localStorage.getItem("datetime"),
              id:localStorage.getItem("id")
      }
      console.log(obj)
      console.log("collection name");
      console.log(`addtask?id=${obj.id}`,obj);
      
      this.crud.putData(`addtask/${obj.id}`,obj).subscribe(
        (response:any)=>{
      console.log(response);
     
      
    
      },(error:any)=>{
  
      }
      )
      
    }
    onDropComplete(cmpdrag:any) {
      console.log(cmpdrag);
      this.done.push(cmpdrag.dragData);
      var position=this.result.indexOf(cmpdrag.dragData);
       this.result.splice(position,1);
        console.log(this.result);
      console.log(cmpdrag.dragData);
      console.log(this.done);
      localStorage.setItem("status","3");

      var obj={ title:localStorage.getItem("title"),
              description:localStorage.getItem("description"),
              status:localStorage.getItem("status"),
              datetime:localStorage.getItem("datetime"),
              id:localStorage.getItem("id")
      }
      console.log(obj)
      this.crud.putData("addtask/"+obj.id,obj).subscribe(
        (response:any)=>{
      console.log(response);
      
      },(error:any)=>{
  
      }
      )
    } 
   
}