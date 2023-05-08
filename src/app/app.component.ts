import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {Axios} from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'signals-test';

  configSignal: WritableSignal<Config | null> = signal(null);

  constructor(private axios: Axios) {}

  ngOnInit(): void {
    this.onInit().then();
  }

  async onInit(): Promise<void> {
    const response = await this.axios.get<ConfigCollection>("/assets/config.json");

    const config = response.data[window.location.hostname];

    this.configSignal.set(config);
  }
}

type ConfigCollection = Record<string, Config>;

interface Config {
  test: string
}
