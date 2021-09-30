import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../sevices/crud.service';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {
  public edittaskForm:any;
public errMsg:String="";
public T:any;
public D:any;
public S:any;
  constructor( private route:ActivatedRoute,private crud:CrudService,private router:Router) {
   }

  ngOnInit(): void {
    console.log(this.route);
    var EditId=this.route.snapshot.params['editId']
     console.log(EditId);
     this.crud.getData("addtask/"+EditId).subscribe((res:any)=>{
       console.log(res);
       this.T=res['title']
       this.D=res['description']
       this.S=res['status']
     },(err:any)=>{
       console.log(err)
     })
  }
  edit(x1:any,x2:any,x3:any){
    console.log(x1,x2,x3);
    var obj={
      title:x1,description:x2,status:x3,datatime:Date.now()
    }
    console.log(obj);
    var edit=this.route.snapshot.params['editId']
    this.crud.putData('addtask/'+edit,obj).subscribe((res:any)=>{
       console.log(res)
       this.errMsg="Task Update";
       this.router.navigate(['showcmp']);
    },(err:any)=>{
      console.log(err)
    })
  }
}
