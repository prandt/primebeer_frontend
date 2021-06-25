import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VolumeModel } from 'app/model/volume.model';
import { VolumeService } from 'app/service/volume.service';

@Component({
  selector: 'app-volume-detalhes',
  templateUrl: './volume-detalhes.component.html',
  styleUrls: ['./volume-detalhes.component.css']
})
export class VolumeDetalhesComponent implements OnInit {

  volume: VolumeModel = new VolumeModel()
  constructor(private service: VolumeService, private router: Router) { }

  ngOnInit(): void {
  }
  save(){
    this.service.save(this.volume).subscribe(
      x => this.router.navigate(['admin/volume'])
    )
  }

}
