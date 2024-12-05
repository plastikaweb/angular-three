import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CubeComponent } from "../cube/cube.component";
import { injectStore, extend, NgtArgs } from 'angular-three';
import { OrbitControls } from 'three-stdlib';

extend({ OrbitControls });

@Component({
  selector: 'app-scene',
  imports: [CubeComponent, NgtArgs],
  templateUrl: './scene.component.html',
  styleUrl: './scene.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SceneComponent {
  protected readonly Math = Math;

  private store = injectStore();
  protected camera = this.store.select('camera');
  protected glDomElement = this.store.select('gl', 'domElement');
}
