import { Injectable } from '@angular/core';

import { BakeryAPIEpics } from '../bakeries/api/epics';

@Injectable()
export class RootEpics {
  constructor(private bakeryEpics: BakeryAPIEpics) {}

  public createEpics() {
    return [
      this.bakeryEpics.createEpicBakeries(),
      this.bakeryEpics.createEpicSelectedBakeryCakes(),
    ];
  }
}
