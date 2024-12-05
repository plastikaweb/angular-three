import { Component } from '@angular/core';
import { SceneComponent } from './scene/scene.component';
import { NgtCanvas, extend } from 'angular-three';
import * as THREE from 'three';

 extend(THREE);

/* the rest of the code remains the same */
@Component({
  selector: 'app-root',
  imports: [NgtCanvas],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  protected sceneGraph = SceneComponent;
}
