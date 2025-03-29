import { AfterViewInit, Component, ElementRef,OnInit,viewChild,ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import{FormsModule} from '@angular/forms'
@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit{


  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
    //private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

    ngOnInit(){
      console.log('OnINIT');
      console.log(this.form?.nativeElement);
    }

    ngAfterViewInit(){
      console.log('AFTER VIeW INIT');
      console.log(this.form?.nativeElement);
    }


    onSubmit(title:string, ticketText: String){
    console.log('SUBMITED!!!')
    console.log(title);
    console.log(ticketText);
    this.form?.nativeElement.reset();


  // onSubmit(titleElement: HTMLInputElement){
  //   console.log('SUBMITED!!!')
  //  // console.dir(titleElement);
  //   const enteredTitle = titleElement.value;
  //   console.log('ENTERED TITLE:'+enteredTitle);

  }
}

