
import { NgxPaginationModule } from '../ngx-pagination';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators  } from '@angular/forms';   
import {Component, OnInit } from '@angular/core';
import { Medlem } from "../medlem";
import { MedlemsService } from "../medlems.service";
import {
  FormGroup,
  FormControl
} from '@angular/forms';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
medlems: Medlem[] = [];
  createForm;  
  constructor(public medlemsService: MedlemsService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
	this.createForm = this.formBuilder.group({   
	mnavn: [null, Validators.required],
    });  
  } 
  ngOnInit(): void {    
    this.medlemsService.getMedlems().subscribe((data: Medlem[]) => {
    this.medlems = data;
    document.getElementById("mList").style.visibility="hidden";
    document.getElementById("mnavn").addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
    event.preventDefault();	
  }
});  
  });
const alphaOnlyInput : any = document.getElementById('mnavn'),
  alphaOnlyPattern = new RegExp('^[a-zA-Z ]+$')
  let previousValue = ''
alphaOnlyInput.addEventListener('input', (event) => {
  let currentValue = alphaOnlyInput.value
  if (event.inputType.includes('delete') || alphaOnlyPattern.test(currentValue)) {
    previousValue = currentValue
  }
  alphaOnlyInput.value = previousValue
})		    
 }
  deleteMedlem(id) {
	  if(window.confirm('Are sure you want to delete this item ?')){
        this.medlemsService.deleteMedlem(id).subscribe(res => {
          this.medlems = this.medlems.filter(item => item.medlem_Id !== id);
      });
      }    
  } 
 filterItems(arr, query) {
  return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}
  getList() {
   this.medlemsService.getMedlems().subscribe((data: Medlem[]) => {
   this.medlems = data;
   document.getElementById("re-List").style.visibility="visible";
   document.getElementById("sok").style.visibility="visible";
   document.getElementById("mList").style.visibility="hidden";   
});
}
}
  action() {	
	this.router.navigateByUrl('/medlems/list' );
  }
  actionen() {  
	this.router.navigateByUrl('/en/list2' );
  }
  onSubmit(formData) {
    console.log(formData.value);
	var inputValue = document.querySelector<HTMLInputElement>('#mnavn')!.value;
    var inputValueSpace =   inputValue.toLowerCase( )  +  '   '  +  '   ';
    var input = document.getElementById("mnavn");
    this.medlemsService.getMedlemFullnavn(inputValueSpace).subscribe(res => {
    if(res['fornavn'] == undefined) {
	if(res['fornavn'] != undefined) {
 	   document.getElementById("re-List").style.visibility="hidden";
	   document.getElementById("sok").style.visibility="hidden";   
       document.getElementById("mList").style.visibility="visible";  
    }				   
	this.medlems =  this.medlems.filter(item =>item.fornavn +  ' '  + item.etternavn 
	   == res['fornavn'].toString() + ' ' + res['etternavn'].toString() );
 });
}    
}