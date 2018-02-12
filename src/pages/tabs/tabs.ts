import { Component } from '@angular/core';

import { UpgradePage } from './../upgrade/upgrade';
import { AttaquePage } from './../attaque/attaque';
import { JournalPage } from '../journal/journal';
import { ClassementPage } from '../classement/classement';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = JournalPage;
  tab2Root = AttaquePage;
  tab3Root = UpgradePage;
  tab4Root = ClassementPage;

  constructor() {

  }
}
