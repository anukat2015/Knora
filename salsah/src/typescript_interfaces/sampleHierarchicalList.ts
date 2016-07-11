
/*
 * Copyright © 2015 Lukas Rosenthaler, Benjamin Geer, Ivan Subotic,
 * Tobias Schweizer, André Kilchenmann, and André Fatton.
 * This file is part of Knora.
 * Knora is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * Knora is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public
 * License along with Knora.  If not, see <http://www.gnu.org/licenses/>.
 */

import { hierarchicalListResponseFormats } from "./hierarchicalListResponseFormats"

// "Hierarchische Stichwortliste" images demo project
// http://localhost:3333/v1/hlists/http%3A%2F%2Fdata.knora.org%2Flists%2F73d0ec0302
var keywords_image: hierarchicalListResponseFormats.hierarchicalListResponse = {"hlist":[{"children":[{"id":"http://data.knora.org/lists/412821d3a6","name":"1","label":"BIBLIOTHEKEN ST. MORITZ","level":1},{"id":"http://data.knora.org/lists/da5b740ca7","name":"6","label":"SAMMELBÄNDE, FOTOALBEN","level":1}],"name":"1ALL","label":"ALLGEMEINES","id":"http://data.knora.org/lists/a8f4cd99a6","level":0},{"children":[{"children":[{"id":"http://data.knora.org/lists/a5f66db8a7","name":"1","label":"Personen","level":2}],"name":"1","label":"SCHWEIZ","id":"http://data.knora.org/lists/0cc31a7fa7","level":1},{"children":[{"id":"http://data.knora.org/lists/d75d142ba8","name":"1","label":"Persons","level":2}],"name":"2","label":"GRAUBÜNDEN","id":"http://data.knora.org/lists/3e2ac1f1a7","level":1},{"children":[{"id":"http://data.knora.org/lists/09c5ba9da8","name":"1","label":"Flugaufnahmen","level":2},{"id":"http://data.knora.org/lists/a2f80dd7a8","name":"2","label":"Landschaft Sommer ohne Ortschaften","level":2},{"id":"http://data.knora.org/lists/3b2c6110a9","name":"3","label":"Landschaft Sommer mit Ortschaften","level":2},{"id":"http://data.knora.org/lists/d45fb449a9","name":"4","label":"Landschaft Winter ohne Ortschaften","level":2},{"id":"http://data.knora.org/lists/6d930783a9","name":"5","label":"Landschaft Winter mit Ortschaften","level":2},{"id":"http://data.knora.org/lists/06c75abca9","name":"6","label":"Landschaft Seen","level":2},{"id":"http://data.knora.org/lists/9ffaadf5a9","name":"7","label":"Landschaft Berge","level":2},{"children":[{"id":"http://data.knora.org/lists/d1615468aa","name":"1","label":"Maloja","level":3},{"id":"http://data.knora.org/lists/6a95a7a1aa","name":"2","label":"Sils","level":3},{"id":"http://data.knora.org/lists/03c9fadaaa","name":"3","label":"Silvaplana","level":3},{"id":"http://data.knora.org/lists/9cfc4d14ab","name":"4","label":"Surlej","level":3},{"id":"http://data.knora.org/lists/3530a14dab","name":"5","label":"Champfèr","level":3},{"id":"http://data.knora.org/lists/ce63f486ab","name":"6","label":"Pontresina","level":3},{"id":"http://data.knora.org/lists/679747c0ab","name":"7","label":"Celerina","level":3},{"id":"http://data.knora.org/lists/00cb9af9ab","name":"8","label":"Samedan","level":3},{"id":"http://data.knora.org/lists/99feed32ac","name":"9","label":"Bever","level":3},{"id":"http://data.knora.org/lists/3232416cac","name":"10","label":"La Punt","level":3},{"id":"http://data.knora.org/lists/cb6594a5ac","name":"11","label":"Chamues-ch","level":3},{"id":"http://data.knora.org/lists/6499e7deac","name":"12","label":"Madulain","level":3},{"id":"http://data.knora.org/lists/fdcc3a18ad","name":"13","label":"Zuoz","level":3},{"id":"http://data.knora.org/lists/96008e51ad","name":"14","label":"S-chanf","level":3},{"id":"http://data.knora.org/lists/2f34e18aad","name":"15","label":"Cinous-chel","level":3},{"id":"http://data.knora.org/lists/c86734c4ad","name":"16","label":"Fex","level":3},{"id":"http://data.knora.org/lists/619b87fdad","name":"17","label":"Unterengadin","level":3},{"id":"http://data.knora.org/lists/faceda36ae","name":"18","label":"Personen","level":3}],"name":"8","label":"Ortschaften Sommer","id":"http://data.knora.org/lists/382e012faa","level":2},{"children":[{"id":"http://data.knora.org/lists/2c3681a9ae","name":"1","label":"Maloja","level":3},{"id":"http://data.knora.org/lists/c569d4e2ae","name":"2","label":"Sils","level":3},{"id":"http://data.knora.org/lists/5e9d271caf","name":"3","label":"Silvaplana","level":3},{"id":"http://data.knora.org/lists/f7d07a55af","name":"4","label":"Surlej","level":3},{"id":"http://data.knora.org/lists/9004ce8eaf","name":"5","label":"Champfèr","level":3},{"id":"http://data.knora.org/lists/293821c8af","name":"6","label":"Pontresina","level":3},{"id":"http://data.knora.org/lists/c26b7401b0","name":"7","label":"Celerina","level":3},{"id":"http://data.knora.org/lists/5b9fc73ab0","name":"8","label":"Samedan","level":3},{"id":"http://data.knora.org/lists/f4d21a74b0","name":"9","label":"Bever","level":3},{"id":"http://data.knora.org/lists/8d066eadb0","name":"10","label":"La Punt","level":3},{"id":"http://data.knora.org/lists/263ac1e6b0","name":"11","label":"Chamues-ch","level":3},{"id":"http://data.knora.org/lists/bf6d1420b1","name":"12","label":"Madulain","level":3},{"id":"http://data.knora.org/lists/58a16759b1","name":"13","label":"Zuoz","level":3},{"id":"http://data.knora.org/lists/f1d4ba92b1","name":"14","label":"S-chanf","level":3},{"id":"http://data.knora.org/lists/8a080eccb1","name":"15","label":"Cinous-chel","level":3},{"id":"http://data.knora.org/lists/233c6105b2","name":"16","label":"Fex","level":3},{"id":"http://data.knora.org/lists/bc6fb43eb2","name":"17","label":"Unterengadin","level":3},{"id":"http://data.knora.org/lists/55a30778b2","name":"18","label":"Personen","level":3}],"name":"9","label":"Ortschaften Winter","id":"http://data.knora.org/lists/93022e70ae","level":2}],"name":"3","label":"ENGADIN","id":"http://data.knora.org/lists/70916764a8","level":1},{"children":[{"id":"http://data.knora.org/lists/870aaeeab2","name":"1","label":"St. Moritz Dorf und Bad Winter","level":2},{"id":"http://data.knora.org/lists/203e0124b3","name":"2","label":"St. Moritz Dorf Sommer","level":2},{"id":"http://data.knora.org/lists/b971545db3","name":"3","label":"St. Moritz Bad Sommer","level":2},{"id":"http://data.knora.org/lists/52a5a796b3","name":"4","label":"St. Moritz Denkmäler","level":2},{"id":"http://data.knora.org/lists/ebd8facfb3","name":"5","label":"St. Moritz Landschaft Sommer","level":2},{"id":"http://data.knora.org/lists/840c4e09b4","name":"6","label":"St. Moritz Landschaft Winter","level":2},{"id":"http://data.knora.org/lists/1d40a142b4","name":"7","label":"St. Moritz Schulhäuser","level":2}],"name":"4","label":"ST. MORITZ","id":"http://data.knora.org/lists/eed65ab1b2","level":1},{"children":[{"id":"http://data.knora.org/lists/4fa747b5b4","name":"1","label":"Ortschaften","level":2},{"id":"http://data.knora.org/lists/e8da9aeeb4","name":"2","label":"Landschaften","level":2},{"id":"http://data.knora.org/lists/45cfa1df0401","name":"3","label":"Persons","level":2}],"name":"5","label":"SUEDTAELER","id":"http://data.knora.org/lists/b673f47bb4","level":1},{"children":[{"id":"http://data.knora.org/lists/1a424161b5","name":"1","label":"Landkarten","level":2},{"id":"http://data.knora.org/lists/b375949ab5","name":"2","label":"Panoramen","level":2}],"name":"6","label":"LANDKARTEN UND PANORAMEN","id":"http://data.knora.org/lists/810eee27b5","level":1}],"name":"2GEO","label":"GEOGRAPHIE","id":"http://data.knora.org/lists/738fc745a7","level":0},{"children":[{"id":"http://data.knora.org/lists/de02f5180501","name":"1","label":"SWITZERLAND","level":1},{"id":"http://data.knora.org/lists/773648520501","name":"2","label":"GRAUBÜNDEN","level":1},{"id":"http://data.knora.org/lists/106a9b8b0501","name":"3","label":"ENGADINE","level":1},{"id":"http://data.knora.org/lists/a99deec40501","name":"4","label":"ST. MORITZ","level":1},{"children":[{"children":[{"id":"http://data.knora.org/lists/1744e17fb6","name":"1","label":"Personen A","level":3},{"id":"http://data.knora.org/lists/b07734b9b6","name":"2","label":"Personen B","level":3},{"id":"http://data.knora.org/lists/49ab87f2b6","name":"3","label":"Personen C","level":3},{"id":"http://data.knora.org/lists/e2deda2bb7","name":"4","label":"Personen D","level":3},{"id":"http://data.knora.org/lists/7b122e65b7","name":"5","label":"Personen E","level":3},{"id":"http://data.knora.org/lists/1446819eb7","name":"6","label":"Personen F","level":3},{"id":"http://data.knora.org/lists/ad79d4d7b7","name":"7","label":"Personen G","level":3},{"id":"http://data.knora.org/lists/46ad2711b8","name":"8","label":"Personen H","level":3},{"id":"http://data.knora.org/lists/dfe07a4ab8","name":"9","label":"Personen I","level":3},{"id":"http://data.knora.org/lists/7814ce83b8","name":"10","label":"Personen J","level":3},{"id":"http://data.knora.org/lists/114821bdb8","name":"11","label":"Personen K","level":3},{"id":"http://data.knora.org/lists/aa7b74f6b8","name":"12","label":"Personen L","level":3},{"id":"http://data.knora.org/lists/43afc72fb9","name":"13","label":"Personen M","level":3},{"id":"http://data.knora.org/lists/dce21a69b9","name":"14","label":"Personen N","level":3},{"id":"http://data.knora.org/lists/75166ea2b9","name":"15","label":"Personen O","level":3},{"id":"http://data.knora.org/lists/0e4ac1dbb9","name":"16","label":"Personen P","level":3},{"id":"http://data.knora.org/lists/a77d1415ba","name":"17","label":"Personen Q","level":3},{"id":"http://data.knora.org/lists/40b1674eba","name":"18","label":"Personen R","level":3},{"id":"http://data.knora.org/lists/d9e4ba87ba","name":"19","label":"Personen S","level":3},{"id":"http://data.knora.org/lists/72180ec1ba","name":"20","label":"Personen T","level":3},{"id":"http://data.knora.org/lists/0b4c61faba","name":"21","label":"Personen U","level":3},{"id":"http://data.knora.org/lists/a47fb433bb","name":"22","label":"Personen V","level":3},{"id":"http://data.knora.org/lists/3db3076dbb","name":"23","label":"Personen W","level":3},{"id":"http://data.knora.org/lists/d6e65aa6bb","name":"24","label":"Personen X","level":3},{"id":"http://data.knora.org/lists/6f1aaedfbb","name":"25","label":"Personen Y","level":3},{"id":"http://data.knora.org/lists/084e0119bc","name":"26","label":"Personen Z","level":3}],"name":"1","label":"Personen A-Z","id":"http://data.knora.org/lists/7e108e46b6","level":2},{"id":"http://data.knora.org/lists/a1815452bc","name":"2","label":"Personen unbekannt","level":2},{"id":"http://data.knora.org/lists/3ab5a78bbc","name":"3","label":"Gruppen Einheimische","level":2},{"id":"http://data.knora.org/lists/d3e8fac4bc","name":"4","label":"Kinder Winter","level":2},{"id":"http://data.knora.org/lists/6c1c4efebc","name":"5","label":"Kinder Sommer","level":2},{"id":"http://data.knora.org/lists/0550a137bd","name":"6","label":"Sonnenbadende","level":2},{"id":"http://data.knora.org/lists/9e83f470bd","name":"7","label":"Zuschauer","level":2}],"name":"5","label":"BIOGRAPHIEN","id":"http://data.knora.org/lists/e5dc3a0db6","level":1},{"id":"http://data.knora.org/lists/37b747aabd","name":"7","label":"WAPPEN UND FAHNEN","level":1},{"id":"http://data.knora.org/lists/d0ea9ae3bd","name":"9","label":"KRIEGE UND MILITÄR","level":1}],"name":"3GES","label":"GESCHICHTE","id":"http://data.knora.org/lists/4ca9e7d3b5","level":0},{"children":[{"children":[{"id":"http://data.knora.org/lists/9b85948fbe","name":"1","label":"Ausstellungen","level":2},{"id":"http://data.knora.org/lists/34b9e7c8be","name":"2","label":"Gemälde","level":2},{"id":"http://data.knora.org/lists/cdec3a02bf","name":"3","label":"Karrikaturen und Kritik","level":2},{"id":"http://data.knora.org/lists/66208e3bbf","name":"4","label":"Segantini und Museum","level":2},{"id":"http://data.knora.org/lists/ff53e174bf","name":"5","label":"Sgrafitti","level":2}],"name":"5","label":"MALEREI","id":"http://data.knora.org/lists/02524156be","level":1},{"children":[{"id":"http://data.knora.org/lists/31bb87e7bf","name":"1","label":"Kurorchester","level":2},{"id":"http://data.knora.org/lists/caeeda20c0","name":"2","label":"Musik","level":2},{"id":"http://data.knora.org/lists/63222e5ac0","name":"3","label":"Zirkus","level":2},{"id":"http://data.knora.org/lists/fc558193c0","name":"4","label":"Theater","level":2},{"id":"http://data.knora.org/lists/9589d4ccc0","name":"5","label":"Tanz","level":2}],"name":"6","label":"MUSIK, THEATER UND RADIO","id":"http://data.knora.org/lists/988734aebf","level":1},{"children":[{"id":"http://data.knora.org/lists/c7f07a3fc1","name":"1","label":"Heidi Film","level":2},{"id":"http://data.knora.org/lists/6024ce78c1","name":"2","label":"Foto","level":2},{"id":"http://data.knora.org/lists/f95721b2c1","name":"3","label":"Film","level":2}],"name":"7","label":"FILM UND FOTO","id":"http://data.knora.org/lists/2ebd2706c1","level":1},{"children":[{"id":"http://data.knora.org/lists/2bbfc724c2","name":"1","label":"Modelle","level":2},{"id":"http://data.knora.org/lists/c4f21a5ec2","name":"2","label":"Schneeskulpturen","level":2},{"id":"http://data.knora.org/lists/5d266e97c2","name":"3","label":"Plastiken","level":2},{"id":"http://data.knora.org/lists/f659c1d0c2","name":"4","label":"Stiche","level":2},{"id":"http://data.knora.org/lists/8f8d140ac3","name":"5","label":"Bildhauerei","level":2},{"id":"http://data.knora.org/lists/28c16743c3","name":"6","label":"Kunstgewerbe","level":2}],"name":"8","label":"BILDHAUEREI UND KUNSTGEWERBE","id":"http://data.knora.org/lists/928b74ebc1","level":1},{"children":[{"id":"http://data.knora.org/lists/5a280eb6c3","name":"1","label":"Grafiken","level":2},{"id":"http://data.knora.org/lists/f35b61efc3","name":"2","label":"Holzschnitte","level":2},{"id":"http://data.knora.org/lists/8c8fb428c4","name":"3","label":"Plakate","level":2}],"name":"9","label":"ST. MORITZ GRAFIKEN UND PLAKATE","id":"http://data.knora.org/lists/c1f4ba7cc3","level":1},{"children":[{"id":"http://data.knora.org/lists/bef65a9bc4","name":"1","label":"Architektur / Inneneinrichtungen","level":2},{"id":"http://data.knora.org/lists/572aaed4c4","name":"2","label":"Pläne","level":2}],"name":"10","label":"ARCHITEKTUR","id":"http://data.knora.org/lists/25c30762c4","level":1}],"name":"4KUN","label":"ART","id":"http://data.knora.org/lists/691eee1cbe","level":0},{"children":[{"id":"http://data.knora.org/lists/89915447c5","name":"1","label":"MEDIZIN UND NATURHEILKUNDE","level":1},{"children":[{"id":"http://data.knora.org/lists/bbf8fab9c5","name":"1","label":"Heilbad aussen","level":2},{"id":"http://data.knora.org/lists/542c4ef3c5","name":"2","label":"Heilbad innen","level":2}],"name":"3","label":"HEILBAD UND QUELLEN","id":"http://data.knora.org/lists/22c5a780c5","level":1},{"id":"http://data.knora.org/lists/ed5fa12cc6","name":"4","label":"SPITAL UND KLINIKEN / KINDERHEIME","level":1}],"name":"5MED","label":"MEDIZIN","id":"http://data.knora.org/lists/f05d010ec5","level":0},{"children":[{"children":[{"id":"http://data.knora.org/lists/b8fa9ad8c6","name":"1","label":"Fischen","level":2},{"id":"http://data.knora.org/lists/512eee11c7","name":"2","label":"Jagen","level":2},{"id":"http://data.knora.org/lists/ea61414bc7","name":"3","label":"Tiere","level":2}],"name":"2","label":"FAUNA","id":"http://data.knora.org/lists/1fc7479fc6","level":1},{"children":[{"id":"http://data.knora.org/lists/1cc9e7bdc7","name":"1","label":"Blumen","level":2},{"id":"http://data.knora.org/lists/b5fc3af7c7","name":"2","label":"Bäume","level":2}],"name":"3","label":"FLORA","id":"http://data.knora.org/lists/83959484c7","level":1},{"id":"http://data.knora.org/lists/4e308e30c8","name":"4","label":"GEOLOGIE UND MINERALOGIE","level":1},{"children":[{"id":"http://data.knora.org/lists/809734a3c8","name":"1","label":"Gewässer und Überschwemmungen","level":2},{"id":"http://data.knora.org/lists/19cb87dcc8","name":"2","label":"Gletscher","level":2},{"id":"http://data.knora.org/lists/b2feda15c9","name":"3","label":"Lawinen","level":2},{"id":"http://data.knora.org/lists/4b322e4fc9","name":"4","label":"Schnee, Raureif, Eisblumen","level":2}],"name":"5","label":"KLIMATOLOGIE UND METEOROLOGIE","id":"http://data.knora.org/lists/e763e169c8","level":1},{"id":"http://data.knora.org/lists/e4658188c9","name":"6","label":"UMWELT","level":1}],"name":"6NAT","label":"NATURKUNDE","id":"http://data.knora.org/lists/8693f465c6","level":0},{"children":[{"children":[{"id":"http://data.knora.org/lists/af007b34ca","name":"1","label":"St. Moritz Kirchen","level":2}],"name":"1","label":"RELIGION UND KIRCHEN","id":"http://data.knora.org/lists/16cd27fbc9","level":1}],"name":"7REL","label":"RELIGION","id":"http://data.knora.org/lists/7d99d4c1c9","level":0},{"children":[{"id":"http://data.knora.org/lists/e16721a7ca","name":"1","label":"VERFASSUNGEN UND GESETZE","level":1},{"children":[{"id":"http://data.knora.org/lists/13cfc719cb","name":"1","label":"Wasserwirtschaft","level":2},{"id":"http://data.knora.org/lists/ac021b53cb","name":"2","label":"Feuer und Feuerwehr","level":2},{"id":"http://data.knora.org/lists/45366e8ccb","name":"3","label":"Polizei und Behörde","level":2},{"id":"http://data.knora.org/lists/de69c1c5cb","name":"4","label":"Abfallbewirtschaftung","level":2}],"name":"2","label":"GEMEINDEWESEN","id":"http://data.knora.org/lists/7a9b74e0ca","level":1},{"id":"http://data.knora.org/lists/779d14ffcb","name":"3","label":"SCHULWESEN","level":1},{"children":[{"id":"http://data.knora.org/lists/a904bb71cc","name":"1","label":"Bälle und Verkleidungen","level":2},{"id":"http://data.knora.org/lists/42380eabcc","name":"2","label":"Chalandamarz","level":2},{"id":"http://data.knora.org/lists/db6b61e4cc","name":"3","label":"Engadiner Museum","level":2},{"id":"http://data.knora.org/lists/749fb41dcd","name":"4","label":"Feste und Umzüge","level":2},{"id":"http://data.knora.org/lists/0dd30757cd","name":"5","label":"Schlitteda","level":2},{"id":"http://data.knora.org/lists/a6065b90cd","name":"6","label":"Trachten","level":2}],"name":"4","label":"VOLKSKUNDE","id":"http://data.knora.org/lists/10d16738cc","level":1},{"id":"http://data.knora.org/lists/3f3aaec9cd","name":"6","label":"PARTEIEN UND GRUPPIERUNGEN","level":1},{"id":"http://data.knora.org/lists/d86d0103ce","name":"7","label":"SCHWESTERNSTÄTDE","level":1}],"name":"8SOZ","label":"SOZIALES","id":"http://data.knora.org/lists/4834ce6dca","level":0},{"children":[{"children":[{"id":"http://data.knora.org/lists/a308fbaece","name":"1","label":"Bridge","level":2},{"id":"http://data.knora.org/lists/3c3c4ee8ce","name":"2","label":"Boxen","level":2},{"id":"http://data.knora.org/lists/d56fa121cf","name":"3","label":"Camping","level":2},{"id":"http://data.knora.org/lists/6ea3f45acf","name":"4","label":"Fechten","level":2},{"id":"http://data.knora.org/lists/07d74794cf","name":"5","label":"Fitness","level":2},{"id":"http://data.knora.org/lists/a00a9bcdcf","name":"6","label":"Höhentraining","level":2},{"id":"http://data.knora.org/lists/393eee06d0","name":"7","label":"Krafttraining","level":2},{"id":"http://data.knora.org/lists/d2714140d0","name":"8","label":"Leichtathletik","level":2},{"id":"http://data.knora.org/lists/6ba59479d0","name":"9","label":"Pokale, Preise, Medallien","level":2},{"id":"http://data.knora.org/lists/04d9e7b2d0","name":"10","label":"Schiessen","level":2},{"id":"http://data.knora.org/lists/9d0c3becd0","name":"11","label":"Turnen","level":2},{"id":"http://data.knora.org/lists/36408e25d1","name":"12","label":"Zeitmessung","level":2},{"id":"http://data.knora.org/lists/cf73e15ed1","name":"13","label":"Hornussen","level":2},{"id":"http://data.knora.org/lists/68a73498d1","name":"14","label":"Schwingen","level":2}],"name":"0","label":"SPORT","id":"http://data.knora.org/lists/0ad5a775ce","level":1},{"children":[{"id":"http://data.knora.org/lists/9a0edb0ad2","name":"1","label":"Cricket","level":2},{"id":"http://data.knora.org/lists/33422e44d2","name":"2","label":"Schlitteln","level":2},{"id":"http://data.knora.org/lists/cc75817dd2","name":"3","label":"Schneeschuhlaufen","level":2},{"id":"http://data.knora.org/lists/65a9d4b6d2","name":"4","label":"Tailing","level":2},{"id":"http://data.knora.org/lists/fedc27f0d2","name":"5","label":"Wind-, Schlittenhundrennen","level":2}],"name":"1","label":"WINTERSPORT","id":"http://data.knora.org/lists/01db87d1d1","level":1},{"children":[{"id":"http://data.knora.org/lists/3044ce62d3","name":"1","label":"Verschiedenes","level":2},{"id":"http://data.knora.org/lists/c977219cd3","name":"2","label":"Skiakrobatik","level":2},{"id":"http://data.knora.org/lists/62ab74d5d3","name":"3","label":"Ski Corvatsch","level":2},{"id":"http://data.knora.org/lists/fbdec70ed4","name":"4","label":"Skifahren","level":2},{"id":"http://data.knora.org/lists/94121b48d4","name":"5","label":"Ski Kilometer-Lancé","level":2},{"id":"http://data.knora.org/lists/2d466e81d4","name":"6","label":"Ski SOS","level":2},{"id":"http://data.knora.org/lists/c679c1bad4","name":"7","label":"Skitouren","level":2}],"name":"2","label":"SKI","id":"http://data.knora.org/lists/97107b29d3","level":1},{"id":"http://data.knora.org/lists/5fad14f4d4","name":"2-2","label":"SKISCHULE","level":1},{"children":[{"id":"http://data.knora.org/lists/9114bb66d5","name":"1","label":"Skirennen","level":2},{"id":"http://data.knora.org/lists/2a480ea0d5","name":"2","label":"Ski Rennpisten","level":2},{"id":"http://data.knora.org/lists/c37b61d9d5","name":"3","label":"Personen","level":2},{"id":"http://data.knora.org/lists/5cafb412d6","name":"4","label":"Guardia Grischa","level":2},{"id":"http://data.knora.org/lists/f5e2074cd6","name":"5","label":"Ski Vorweltmeisterschaft 1973","level":2},{"id":"http://data.knora.org/lists/8e165b85d6","name":"6","label":"Ski Weltmeisterschaft 1974","level":2},{"id":"http://data.knora.org/lists/274aaebed6","name":"7","label":"Ski Weltmeisterschaft 2003","level":2},{"id":"http://data.knora.org/lists/c07d01f8d6","name":"8","label":"Skispringen","level":2}],"name":"2-3","label":"SKIRENNEN UND SKISPRINGEN","id":"http://data.knora.org/lists/f8e0672dd5","level":1},{"children":[{"id":"http://data.knora.org/lists/f2e4a76ad7","name":"1","label":"Skilanglauf","level":2},{"id":"http://data.knora.org/lists/8b18fba3d7","name":"2","label":"Engadin Skimarathon","level":2}],"name":"2-4","label":"SKILANGLAUF UND ENGADIN SKIMARATHON","id":"http://data.knora.org/lists/59b15431d7","level":1},{"id":"http://data.knora.org/lists/244c4eddd7","name":"2-5","label":"SNOWBOARD UND SNOWBOARDSCHULE","level":1},{"children":[{"id":"http://data.knora.org/lists/56b3f44fd8","name":"1","label":"Olympiade 1928","level":2},{"id":"http://data.knora.org/lists/efe64789d8","name":"2","label":"Olympiade 1948","level":2}],"name":"3","label":"OLYMPIADEN","id":"http://data.knora.org/lists/bd7fa116d8","level":1},{"children":[{"id":"http://data.knora.org/lists/214eeefbd8","name":"1","label":"Eishockey und Bandy","level":2},{"children":[{"id":"http://data.knora.org/lists/53b5946ed9","name":"1","label":"Gefrorene Seen","level":3},{"id":"http://data.knora.org/lists/ece8e7a7d9","name":"2","label":"Gymkhana","level":3},{"id":"http://data.knora.org/lists/851c3be1d9","name":"3","label":"Eisrevue","level":3},{"id":"http://data.knora.org/lists/1e508e1ada","name":"4","label":"Paarlauf","level":3},{"id":"http://data.knora.org/lists/b783e153da","name":"5","label":"Schnellauf","level":3},{"id":"http://data.knora.org/lists/50b7348dda","name":"6","label":"Kellner auf Eis","level":3},{"id":"http://data.knora.org/lists/e9ea87c6da","name":"7","label":"Personen","level":3}],"name":"2","label":"Eislaufen","id":"http://data.knora.org/lists/ba814135d9","level":2},{"id":"http://data.knora.org/lists/821edbffda","name":"3","label":"Eissegeln, -Surfen","level":2},{"id":"http://data.knora.org/lists/1b522e39db","name":"4","label":"Eisstadion","level":2},{"children":[{"id":"http://data.knora.org/lists/4db9d4abdb","name":"1","label":"Personen","level":3}],"name":"5","label":"Curling","id":"http://data.knora.org/lists/b4858172db","level":2},{"id":"http://data.knora.org/lists/e6ec27e5db","name":"6","label":"Eisstockschiessen","level":2},{"id":"http://data.knora.org/lists/7f207b1edc","name":"7","label":"Kunsteisbahn Ludains","level":2}],"name":"4","label":"EISSPORT","id":"http://data.knora.org/lists/881a9bc2d8","level":1},{"children":[{"children":[{"id":"http://data.knora.org/lists/4abb74cadc","name":"1","label":"Personen","level":3},{"id":"http://data.knora.org/lists/e3eec703dd","name":"2","label":"Stürze","level":3},{"id":"http://data.knora.org/lists/7c221b3ddd","name":"3","label":"Bau","level":3}],"name":"1","label":"Bob Run","id":"http://data.knora.org/lists/b1872191dc","level":2},{"children":[{"id":"http://data.knora.org/lists/ae89c1afdd","name":"1","label":"Personen","level":3},{"id":"http://data.knora.org/lists/47bd14e9dd","name":"2","label":"Bau","level":3}],"name":"2","label":"Cresta Run","id":"http://data.knora.org/lists/15566e76dd","level":2},{"id":"http://data.knora.org/lists/42d141fe0501","name":"3","label":"Rodeln","level":2}],"name":"5","label":"CRESTA RUN UND BOB","id":"http://data.knora.org/lists/1854ce57dc","level":1},{"children":[{"id":"http://data.knora.org/lists/7924bb5bde","name":"1","label":"Concours Hippique","level":2},{"id":"http://data.knora.org/lists/12580e95de","name":"2","label":"Pferderennen","level":2},{"id":"http://data.knora.org/lists/ab8b61cede","name":"3","label":"Polo","level":2},{"id":"http://data.knora.org/lists/44bfb407df","name":"4","label":"Reiten","level":2},{"id":"http://data.knora.org/lists/ddf20741df","name":"5","label":"Reithalle","level":2},{"id":"http://data.knora.org/lists/76265b7adf","name":"6","label":"Skikjöring","level":2},{"id":"http://data.knora.org/lists/0f5aaeb3df","name":"7","label":"Fahrturnier","level":2},{"id":"http://data.knora.org/lists/a88d01eddf","name":"8","label":"Zuschauer","level":2}],"name":"6","label":"PFERDESPORT","id":"http://data.knora.org/lists/e0f06722de","level":1},{"children":[{"id":"http://data.knora.org/lists/daf4a75fe0","name":"1","label":"Billiard","level":2},{"id":"http://data.knora.org/lists/7328fb98e0","name":"2","label":"Fussball","level":2},{"id":"http://data.knora.org/lists/0c5c4ed2e0","name":"3","label":"Kegeln","level":2},{"children":[{"id":"http://data.knora.org/lists/3ec3f444e1","name":"1","label":"Minigolf","level":3},{"id":"http://data.knora.org/lists/d7f6477ee1","name":"2","label":"Sommergolf","level":3},{"id":"http://data.knora.org/lists/702a9bb7e1","name":"3","label":"Wintergolf","level":3}],"name":"4","label":"Golf","id":"http://data.knora.org/lists/a58fa10be1","level":2},{"id":"http://data.knora.org/lists/095eeef0e1","name":"5","label":"Tennis","level":2},{"id":"http://data.knora.org/lists/a291412ae2","name":"6","label":"Volleyball","level":2}],"name":"7","label":"BALLSPORT","id":"http://data.knora.org/lists/41c15426e0","level":1},{"children":[{"id":"http://data.knora.org/lists/d4f8e79ce2","name":"1","label":"Alpinismus","level":2},{"id":"http://data.knora.org/lists/6d2c3bd6e2","name":"2","label":"Berghütten und Restaurants","level":2},{"id":"http://data.knora.org/lists/06608e0fe3","name":"3","label":"Trecking mit Tieren","level":2},{"id":"http://data.knora.org/lists/9f93e148e3","name":"4","label":"Wandern","level":2},{"id":"http://data.knora.org/lists/38c73482e3","name":"5","label":"Spazieren","level":2}],"name":"8","label":"ALPINISMUS","id":"http://data.knora.org/lists/3bc59463e2","level":1},{"children":[{"id":"http://data.knora.org/lists/6a2edbf4e3","name":"1","label":"Ballon","level":2},{"id":"http://data.knora.org/lists/03622e2ee4","name":"2","label":"Delta","level":2},{"id":"http://data.knora.org/lists/9c958167e4","name":"3","label":"Flugzeuge","level":2},{"id":"http://data.knora.org/lists/35c9d4a0e4","name":"4","label":"Helikopter","level":2},{"id":"http://data.knora.org/lists/cefc27dae4","name":"5","label":"Segelflieger","level":2}],"name":"9","label":"FLIEGEN","id":"http://data.knora.org/lists/d1fa87bbe3","level":1},{"children":[{"children":[{"id":"http://data.knora.org/lists/99972186e5","name":"1","label":"Malojarennen","level":3},{"id":"http://data.knora.org/lists/32cb74bfe5","name":"2","label":"Berninarennen","level":3},{"id":"http://data.knora.org/lists/cbfec7f8e5","name":"3","label":"Shellstrasse","level":3},{"id":"http://data.knora.org/lists/64321b32e6","name":"4","label":"Personen","level":3},{"id":"http://data.knora.org/lists/fd656e6be6","name":"5","label":"Verschiedenes","level":3}],"name":"1","label":"Autorennen","id":"http://data.knora.org/lists/0064ce4ce5","level":2},{"id":"http://data.knora.org/lists/9699c1a4e6","name":"2","label":"Geschicklichkeitsfahren","level":2},{"id":"http://data.knora.org/lists/2fcd14dee6","name":"3","label":"Schönheitskonkurrenz","level":2},{"id":"http://data.knora.org/lists/c8006817e7","name":"4","label":"Inline Skating","level":2},{"id":"http://data.knora.org/lists/6134bb50e7","name":"5","label":"Montainbiking","level":2},{"id":"http://data.knora.org/lists/fa670e8ae7","name":"6","label":"Radfahren","level":2},{"id":"http://data.knora.org/lists/939b61c3e7","name":"7","label":"Motorradfahren","level":2}],"name":"10","label":"RADSPORT","id":"http://data.knora.org/lists/67307b13e5","level":1},{"children":[{"id":"http://data.knora.org/lists/c5020836e8","name":"1","label":"Schwimmen Hallenbäder","level":2},{"id":"http://data.knora.org/lists/5e365b6fe8","name":"2","label":"Schwimmen Seen","level":2},{"id":"http://data.knora.org/lists/f769aea8e8","name":"3","label":"Rudern","level":2},{"id":"http://data.knora.org/lists/909d01e2e8","name":"4","label":"Segeln","level":2},{"id":"http://data.knora.org/lists/29d1541be9","name":"5","label":"Windsurfen","level":2},{"id":"http://data.knora.org/lists/c204a854e9","name":"6","label":"Tauchen","level":2},{"id":"http://data.knora.org/lists/5b38fb8de9","name":"7","label":"Rafting","level":2},{"id":"http://data.knora.org/lists/f46b4ec7e9","name":"8","label":"Kitesurfen","level":2}],"name":"11","label":"WASSERSPORT","id":"http://data.knora.org/lists/2ccfb4fce7","level":1}],"name":"9SPO","label":"SPORT","id":"http://data.knora.org/lists/71a1543cce","level":0},{"children":[{"children":[{"id":"http://data.knora.org/lists/bf064873ea","name":"1","label":"Autos, Busse und Postautos","level":2},{"id":"http://data.knora.org/lists/583a9bacea","name":"2","label":"Boote","level":2},{"id":"http://data.knora.org/lists/f16deee5ea","name":"3","label":"Flugplatz Samedan","level":2},{"id":"http://data.knora.org/lists/8aa1411feb","name":"4","label":"Kommunikation","level":2},{"id":"http://data.knora.org/lists/23d59458eb","name":"5","label":"Kutschen und Pferdetransporte","level":2},{"id":"http://data.knora.org/lists/bc08e891eb","name":"6","label":"Luftseilbahnen und Stationen","level":2},{"id":"http://data.knora.org/lists/553c3bcbeb","name":"7","label":"Schneeräumungs- und Pistenfahrzeuge","level":2},{"id":"http://data.knora.org/lists/ee6f8e04ec","name":"8","label":"Schneekanonen","level":2},{"id":"http://data.knora.org/lists/87a3e13dec","name":"9","label":"Skilifte","level":2},{"id":"http://data.knora.org/lists/20d73477ec","name":"10","label":"Standseilbahnen und Stationen","level":2},{"id":"http://data.knora.org/lists/b90a88b0ec","name":"11","label":"Strassen und Pässe","level":2},{"id":"http://data.knora.org/lists/523edbe9ec","name":"12","label":"Tram","level":2},{"id":"http://data.knora.org/lists/eb712e23ed","name":"13","label":"Wegweiser","level":2}],"name":"1","label":"VERKEHR","id":"http://data.knora.org/lists/26d3f439ea","level":1},{"children":[{"id":"http://data.knora.org/lists/1dd9d495ed","name":"1","label":"Eisenbahnen und Bahnhöfe","level":2}],"name":"1-1","label":"EISENBAHNEN","id":"http://data.knora.org/lists/84a5815ced","level":1},{"children":[{"id":"http://data.knora.org/lists/4f407b08ee","name":"1","label":"Casino","level":2},{"id":"http://data.knora.org/lists/e873ce41ee","name":"2","label":"Gäste","level":2},{"id":"http://data.knora.org/lists/81a7217bee","name":"3","label":"Mode","level":2}],"name":"2","label":"FREMDENVERKEHR","id":"http://data.knora.org/lists/b60c28cfed","level":1},{"children":[{"children":[{"id":"http://data.knora.org/lists/97744976b801","name":"hotel_a","label":"Hotel A","level":3},{"id":"http://data.knora.org/lists/30a89cafb801","name":"hotel_b","label":"Hotel B","level":3},{"id":"http://data.knora.org/lists/c9dbefe8b801","name":"hotel_c","label":"Hotel C","level":3},{"id":"http://data.knora.org/lists/620f4322b901","name":"hotel_d","label":"Hotel D","level":3},{"id":"http://data.knora.org/lists/fb42965bb901","name":"hotel_e","label":"Hotel E","level":3},{"id":"http://data.knora.org/lists/9476e994b901","name":"hotel_f","label":"Hotel F","level":3},{"id":"http://data.knora.org/lists/2daa3cceb901","name":"hotel_g","label":"Hotel G","level":3},{"id":"http://data.knora.org/lists/c6dd8f07ba01","name":"hotel_h","label":"Hotel H","level":3},{"id":"http://data.knora.org/lists/5f11e340ba01","name":"hotel_i","label":"Hotel I","level":3},{"id":"http://data.knora.org/lists/f844367aba01","name":"hotel_j","label":"Hotel J","level":3},{"id":"http://data.knora.org/lists/917889b3ba01","name":"hotel_k","label":"Hotel K","level":3},{"id":"http://data.knora.org/lists/2aacdcecba01","name":"hotel_l","label":"Hotel L","level":3},{"id":"http://data.knora.org/lists/c3df2f26bb01","name":"hotel_m","label":"Hotel M","level":3},{"id":"http://data.knora.org/lists/5c13835fbb01","name":"hotel_n","label":"Hotel N","level":3},{"id":"http://data.knora.org/lists/f546d698bb01","name":"hotel_o","label":"Hotel O","level":3},{"id":"http://data.knora.org/lists/8e7a29d2bb01","name":"hotel_p","label":"Hotel P","level":3},{"id":"http://data.knora.org/lists/27ae7c0bbc01","name":"hotel_q","label":"Hotel Q","level":3},{"id":"http://data.knora.org/lists/c0e1cf44bc01","name":"hotel_r","label":"Hotel R","level":3},{"id":"http://data.knora.org/lists/5915237ebc01","name":"hotel_s","label":"Hotel S","level":3},{"id":"http://data.knora.org/lists/f24876b7bc01","name":"hotel_t","label":"Hotel T","level":3},{"id":"http://data.knora.org/lists/8b7cc9f0bc01","name":"hotel_u","label":"Hotel U","level":3},{"id":"http://data.knora.org/lists/24b01c2abd01","name":"hotel_v","label":"Hotel V","level":3},{"id":"http://data.knora.org/lists/9f29173c3b02","name":"hotel_w","label":"Hotel W","level":3},{"id":"http://data.knora.org/lists/bde36f63bd01","name":"hotel_x","label":"Hotel X","level":3},{"id":"http://data.knora.org/lists/5617c39cbd01","name":"hotel_y","label":"Hotel Y","level":3},{"id":"http://data.knora.org/lists/ef4a16d6bd01","name":"hotel_z","label":"Hotel Z","level":3}],"name":"1","label":"Hotels und Restaurants A-Z","id":"http://data.knora.org/lists/b30ec8edee","level":2},{"id":"http://data.knora.org/lists/4c421b27ef","name":"2","label":"Essen","level":2},{"id":"http://data.knora.org/lists/e5756e60ef","name":"3","label":"Menükarten","level":2}],"name":"3","label":"HOTELLERIE","id":"http://data.knora.org/lists/1adb74b4ee","level":1},{"children":[{"id":"http://data.knora.org/lists/17dd14d3ef","name":"1","label":"Personal und Büro","level":2},{"id":"http://data.knora.org/lists/b010680cf0","name":"2","label":"Anlässe und Reisen","level":2},{"id":"http://data.knora.org/lists/4944bb45f0","name":"3","label":"Markenzeichen St. Moritz","level":2}],"name":"4","label":"KURVEREIN","id":"http://data.knora.org/lists/7ea9c199ef","level":1},{"children":[{"id":"http://data.knora.org/lists/7bab61b8f0","name":"1","label":"Arbeitswelt","level":2},{"id":"http://data.knora.org/lists/14dfb4f1f0","name":"2","label":"Reklame","level":2},{"id":"http://data.knora.org/lists/ad12082bf1","name":"3","label":"Bauwesen","level":2}],"name":"6","label":"GEWERBE","id":"http://data.knora.org/lists/e2770e7ff0","level":1},{"children":[{"id":"http://data.knora.org/lists/df79ae9df1","name":"1","label":"Elektrizität","level":2},{"id":"http://data.knora.org/lists/78ad01d7f1","name":"2","label":"Wasserkraft","level":2},{"id":"http://data.knora.org/lists/11e15410f2","name":"3","label":"Solarenergie","level":2}],"name":"7","label":"ENERGIEWIRTSCHAFT","id":"http://data.knora.org/lists/46465b64f1","level":1},{"id":"http://data.knora.org/lists/aa14a849f2","name":"8","label":"AGRARWIRTSCHAFT","level":1},{"id":"http://data.knora.org/lists/4348fb82f2","name":"9","label":"WALDWIRTSCHAFT","level":1}],"name":"10WIR","label":"WIRTSCHAFT","id":"http://data.knora.org/lists/8d9fa100ea","level":0}],"userdata":{"email":null,"username":null,"firstname":null,"projects_info":[],"user_id":null,"active_project":null,"lastname":null,"token":null,"projects":null,"lang":"en","password":null},"status":0};

// "Jahreszeiten" images demo project
// view-source:http://localhost:3333/v1/hlists/http%3A%2F%2Fdata.knora.org%2Flists%2Fd19af9ab
var seasons: hierarchicalListResponseFormats.hierarchicalListResponse = {"hlist":[{"id":"http://data.knora.org/lists/526f26ed04","name":"sommer","label":"Sommer","level":0},{"id":"http://data.knora.org/lists/eda2792605","name":"winter","label":"Winter","level":0}],"userdata":{"email":null,"username":null,"firstname":null,"projects_info":[],"user_id":null,"active_project":null,"lastname":null,"token":null,"projects":null,"lang":"en","password":null},"status":0};

// return information about the path a particular node ("Flugaufnahmen")
// http://localhost:3333/v1/hlists/http%3A%2F%2Fdata.knora.org%2Flists%2F09c5ba9da8?reqtype=node
var nodePath: hierarchicalListResponseFormats.nodePathResponse = {"nodelist":[{"id":"http://data.knora.org/lists/738fc745a7","name":"2GEO","label":"GEOGRAPHIE"},{"id":"http://data.knora.org/lists/70916764a8","name":"3","label":"ENGADIN"},{"id":"http://data.knora.org/lists/09c5ba9da8","name":"1","label":"Flugaufnahmen"}],"userdata":{"email":null,"username":null,"firstname":null,"projects_info":[],"user_id":null,"active_project":null,"lastname":null,"token":null,"projects":null,"lang":"en","password":null},"status":0};