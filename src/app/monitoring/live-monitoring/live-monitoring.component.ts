/// <reference types="@types/googlemaps" />
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-live-monitoring',
  templateUrl: './live-monitoring.component.html',
  styleUrls: ['./live-monitoring.component.css'],
})
export class LiveMonitoringComponent implements OnInit {
  @ViewChild('mapElement', { static: true }) mapElement!: ElementRef;

  map!: google.maps.Map;

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    const coordinates = new google.maps.LatLng(12.912566, 77.648841);
    const mapOptions: google.maps.MapOptions = {
      center: coordinates,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    const marker = new google.maps.Marker({
      position: coordinates,
      map: this.map,
      title: 'Your Location',
    });
  }
}
