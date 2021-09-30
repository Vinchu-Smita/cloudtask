import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder,Validators,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../sevices/crud.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  public  errMsg:String="";
  public AddtaskForm:any
  constructor(private crud:CrudService,private route:Router,private fb:FormBuilder) { 
    this.AddtaskForm=new FormGroup({
      titlename:new FormControl(''),
      desname:new FormControl(''),
      statusname:new FormControl('')
    })
  }
  
  ngOnInit(): void {
    console.log(this.fb);
    this.AddtaskForm=this.fb.group({
      titlename:['',[Validators.required,Validators.minLength(3)]],
      Desname:['',[Validators.required,Validators.minLength(4)]],
      statusname:['',[Validators.required]]
    })
  }
  onsumbit(T:any,D:any,S:any){
    console.log(T,D,S);
    var obj={title:T.value,description:D.value,status:S.value,datetime:Date.now()};
    console.log(obj);
    this.crud.postData('addtask',obj).subscribe((res:any)=>{
      console.log(res);
      this.errMsg="Task Added";
      // this.route.navigate(['showcmp'])
    },(err:any)=>{
      console.log(err)
    })
  }

  }

