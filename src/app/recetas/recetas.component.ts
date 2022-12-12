import { Component } from '@angular/core';
import { Recetas } from '../api/models';
import { RecetasControllerService } from '../api/services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {
  receta: Recetas [] = [];
  Visible: boolean= false;

  constructor(
    private recetaService: RecetasControllerService,
    private messageService: NzMessageService,
    private fb: FormBuilder
  ) { }

    formreceta: FormGroup = this.fb.group({
    id: [],
    nombre: [],
    preparacion: [],
    tiempo: [],
    porciones: [],
    });

  ngOnInit(): void {
    
    this.recetaService.find().subscribe(
      data => this.receta = data
    )
  }

  eliminar(id:string): void{
    this.recetaService.deleteById({id}).subscribe(()=>{
      this.receta = this.receta.filter(receta => receta.id !== id);
    });
    this.messageService.info('Eliminado');
  }
  
  cancel():void{
    this.messageService.info('Tu receta está a salvo');
  }

  hide():void{
    this.Visible = false;
    this.formreceta.reset();
  }

  show(data?:Recetas):void{
    if(data?.id){
      this.formreceta.setValue(data);
    }
    this.Visible = true;
  }

  save(): void{
    if(this.formreceta.value.id){
      console.log(this.formreceta.value),
            this.recetaService.updateById({'id':this.formreceta.value.id, 'body': this.formreceta.value}).subscribe(()=>{
              this.receta = this.receta.map(obj => {
                if(obj.id === this.formreceta.value.id){
                  return this.formreceta.value;}
                  return obj;
              }); this.messageService.success('Receta actualizada, por favor refresque la pagina')
              this.formreceta.reset();
            })
        } else {
          delete this.formreceta.value.id
          this.recetaService.create({body: this.formreceta.value}).subscribe((nuevoregistro)=>{
            this.receta = [ ...this.receta, nuevoregistro]
            this.messageService.success('Receta añadida, por favor refresque la pagina')
            this.formreceta.reset();
          });
        }
    this.Visible = false;
  }

}

