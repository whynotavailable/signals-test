import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopsService {
  popper: WritableSignal<string[]> = signal([]);
  constructor() { }

  add(str: string) {
    this.popper.mutate(x => x.push(str));
  }
}
