import { Component, OnInit } from '@angular/core';
import { CervejaModel } from 'app/model/cerveja.model';
import { VolumeModel } from 'app/model/volume.model';
import { CervejaService } from 'app/service/cerveja.service';
import { VolumeService } from 'app/service/volume.service';


@Component({
  selector: 'app-cerveja-salvar',
  templateUrl: './cerveja-salvar.component.html',
  styleUrls: ['./cerveja-salvar.component.css']
})
export class CervejaSalvarComponent implements OnInit {

  cerveja: CervejaModel = new CervejaModel()
  fileToUpload: File | null = null;

  constructor(private service: CervejaService) { }

  ngOnInit(): void {
    ;
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  save() {
    this.service.upload(this.fileToUpload).subscribe(
      response => {
        const keys = response.headers.keys();
        const headers = keys.map(key =>
          `${response.headers.get(key)}`);
          this.cerveja.photoURL1 = headers[3]
          this.service.save(this.cerveja).subscribe()
          
      })

  }



}
