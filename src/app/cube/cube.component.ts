import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, input, signal, viewChild } from '@angular/core';
import { Mesh } from 'three';
import { injectBeforeRender, NgtVector3 } from 'angular-three';

@Component({
  selector: 'app-cube',
  imports: [],
  templateUrl: './cube.component.html',
  styleUrl: './cube.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CubeComponent {
  meshRef = viewChild.required<ElementRef<Mesh>>('mesh');
  hovered = signal(false);
  clicked = signal(false);
  position = input<NgtVector3>([0, 0, 0]);

  constructor() {
    injectBeforeRender(() => {
      const mesh = this.meshRef().nativeElement;
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
    });
  }

}
