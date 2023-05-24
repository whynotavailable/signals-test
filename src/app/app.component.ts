import {Component, OnDestroy, OnInit, signal, WritableSignal} from '@angular/core';
import {Axios} from 'axios';
import {TimeInterval} from "rxjs/internal/operators/timeInterval";
import {interval, map, switchMap} from "rxjs";
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import {PopsService} from "./pops.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'signals-test';

  configSignal: WritableSignal<Config | null> = signal(null);

  timer = interval(5000)
    .pipe(switchMap(x => {
      return fromPromise(this.reload(x))
    })).subscribe()

  async reload(val: number) {
    this.pops.add(`${val} `);
  }

  get config() {
    return this.configSignal();
  }

  constructor(private axios: Axios, public pops: PopsService) {}

  ngOnInit() {
    window.setTimeout(() => {
      this.onInit().then();
    }, 5000)
  }

  ngOnDestroy() {
    if (this.timer) {
      this.timer.unsubscribe();
    }
  }

  async onInit(): Promise<void> {
    const response = await this.axios.get<ConfigCollection>("/assets/config.json");

    const config = response.data[window.location.hostname];

    this.configSignal.set(config);
  }

  protected readonly JSON = JSON;
}

type ConfigCollection = Record<string, Config>;

interface Config {
  test: string
}


