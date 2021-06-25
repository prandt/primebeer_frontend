import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VolumeModel } from 'app/model/volume.model';
import { VolumeService } from 'app/service/volume.service';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.css']
})
export class VolumeComponent implements OnInit {

  volumes: VolumeModel[]
  constructor(private router: Router, private service: VolumeService) { }

  ngOnInit(): void {
    this.find()
  }

  novo(){
    this.router.navigate(['admin/volume/novo'])
  }
  find(){
    this.service.find().subscribe(x => this.volumes = x)
  }

}
