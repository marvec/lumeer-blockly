/*
 * Lumeer: Modern Data Definition and Processing Platform
 *
 * Copyright (C) since 2017 Answer Institute, s.r.o. and/or its affiliates.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { Component } from '@angular/core';
import {Collection, LinkType, Variable} from './model/model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public name = 'Angular';

  public collections: Collection[] = [
    {
      "id": "5b45e1c52ab79c005f7932e2",
      "code": "0f504bc265f28958",
      "name": "measurements",
      "description": "",
      "color": "#8e7cc3",
      "icon": "fas fa-hand-spock",
      "attributes": [
        {"id": "a1", "name": "A"},
        {"id": "a2", "name": "B"},
        {"id": "a3", "name": "C"},
        {"id": "a4", "name": "D"}
        ],
      "defaultAttributeId": "a2",
    },
    {
      "id": "5b58a2c82ab79c005fc0e70a",
      "code": "aabe76f1f4ec532b",
      "name": "Customers",
      "description": "",
      "color": "#0b5394",
      "icon": "fas fa-graduation-cap",
      "attributes": [
        {"id": "a1", "name": "Company"},
        {"id": "a2", "name": "Address"},
        {"id": "a3", "name": "City"},
        {"id": "a4", "name": "ZIP"},
        {"id": "a5", "name": "Country"}
      ],
      "defaultAttributeId": "a1"
    },
    {
      "id": "5bb35d24a7b11b00615b9ed5",
      "code": "ec45bbdcf18b7ed1",
      "name": "Tweaks and magic",
      "description": "",
      "color": "#cc0000",
      "icon": "fas fa-sliders-h",
      "attributes": [
        {"id": "a1", "name": "A"},
        {"id": "a2", "name": "B"}
      ],
      "defaultAttributeId": "a1"
    },
    {
      "id": "5bb73672a7b11b00613debcb",
      "code": "5d6b77c824bee146",
      "name": "Tajná kolekce",
      "description": "",
      "color": "#d5a6bd",
      "icon": "fas fa-external-link-alt",
      "attributes": [
        {"id": "a1", "name": "A"}
      ],
      "defaultAttributeId": "a1",
    },
    {
      "id": "5bb737fea7b11b00613debd2",
      "code": "a3b6cb52ce986ff4",
      "name": "Flowers",
      "description": "",
      "color": "#b4a7d6",
      "icon": "fas fa-sitemap",
      "attributes": [
        {"id": "a1", "name": "A"},
        {"id": "a2", "name": "B"},
        {"id": "a3", "name": "C"},
        {"id": "a4", "name": "D"}
      ],
      "defaultAttributeId": "a1"
    },
    {
      "id": "5bbddeeaa7b11b0061f19008",
      "code": "efe12b4d7097c644",
      "name": "stomach",
      "description": "",
      "color": "#e69138",
      "icon": "fas fa-stream",
      "attributes": [
        {"id": "a1", "name": "Kind"},
        {"id": "a2", "name": "Capacity"},
        {"id": "a3", "name": "Počet obyvatel"}
      ],
      "defaultAttributeId": "a2"
    },
    {
      "id": "5bbfbc88a7b11b00614266be",
      "code": "a0e866c4fd86795b",
      "name": "placka",
      "description": "",
      "color": "#ffd966",
      "icon": "fas fa-rectangle-portrait",
      "attributes": [
        {"id": "a1", "name": "A"}
      ],
      "defaultAttributeId": "a1"
    }];

  public linkTypes: LinkType[] = [
    {
      "id": "5b58a3fd2ab79c005fc0e70c",
      "name": "Customers Measurements",
      "collectionIds": ["5b58a2c82ab79c005fc0e70a", "5b45e1c52ab79c005f7932e2"]
    },
    {
      "id": "6b58a3fd2ab79c005fc0e70c",
      "name": "placka Customers",
      "collectionIds": ["5bbfbc88a7b11b00614266be", "5b58a2c82ab79c005fc0e70a"]
    },
    {
      "id": "7b58a3fd2ab79c005fc0e70c",
      "name": "placka flowers",
      "collectionIds": ["5bbfbc88a7b11b00614266be", "5bb737fea7b11b00613debd2"]
    },
    {
      "id": "6b58a3fd2ab79c005fc0e70c",
      "name": "Tajné propojení ěščřž",
      "collectionIds": ["5bb73672a7b11b00613debcb", "5b58a2c82ab79c005fc0e70a"]
    },
  ];

  public variables: Variable[] = [
    {
      name: 'oldDocument',
      collectionId: '5b58a2c82ab79c005fc0e70a'
    },
    {
      name: 'newDocument',
      collectionId: '5b58a2c82ab79c005fc0e70a'
    },
  ];

}
