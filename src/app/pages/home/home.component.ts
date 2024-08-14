import { Component, OnInit } from '@angular/core';
import { ServiceFeedService } from '../../service/service-feed.service';
import { Base, Opcao, Pergunta } from '../../model/feedz';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {


  title : string ='';
  questions: string ='';
  indexOfDados: number = 0;
  options : Opcao[] =[{id: 0, name: "", alias: ""}];
  viewResult : boolean = false;
  result : string =''
  select = [{
    idQuestions: 0,
    idOptions: 0,
    results : ''
  }]; 



  dados: Base[] = [{
    title: '',
    questions: [],
    results : {A: "", B:""}
  }];


  constructor(private request : ServiceFeedService){}
  ngOnInit(): void {

    this.select.shift();
    
    if(this.dados[0].title === ''){
      this.getDadosService();
      
    }

    
  }

  writeDados(){
    this.title = this.dados[0].title
    this.questions = this.dados[0].questions[this.indexOfDados].question
    this.options = this.dados[0].questions[this.indexOfDados].options


  }


  getDadosService(){
    
    this.request.getBase().subscribe(response=>{      
      this.dados = response;
      this.writeDados()
    })
  }

  selectOption(idQuestions: number, idOption : number, results:string){


    if(this.select.filter(item=>  item.idQuestions ===idQuestions && item.idOptions === idOption).length ===0)
      this.select.push({idQuestions: idQuestions, idOptions:idOption, results: results})

    
    if(this.indexOfDados < this.dados[0].questions.length-1){
      this.indexOfDados++
      this.writeDados()
    }else{
      this.viewResult = true;
      this.setResult()
    }
  }

  setResult(){
   this.result = this.select.filter(item=> item.results === 'A').length > this.select.filter(item=> item.results === 'B').length ?  'A' : 'B';

  }



}
