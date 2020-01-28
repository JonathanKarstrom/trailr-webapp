import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { circle, geoJSON, icon, latLng, Layer, marker, polygon, tileLayer } from 'leaflet';

import { User } from '@/_models';
import { UserService, AuthenticationService } from '@/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    users = [];

    options = {
        layers: [
            tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
        ],
        zoom: 15,
        center: latLng(62.391, 17.297)
    };

    layersControl = {
        baseLayers: {
            'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
            'Open Cycle Map': tileLayer('http://{s}.tiles.wmflabs.org/hikebike/${z}/${x}/${y}.png', { maxZoom: 18, attribution: '...' })
        },
        overlays: {
            'Big Circle': circle([ 62.391, 17.297 ], { radius: 5000 }),
            'Big Square': polygon([[ 62.391, 17.297 ], [ 61.391, 17.297 ], [ 61.391, 16.297 ], [ 62.391, 1.297 ]])
        }
    }


    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
    }


}