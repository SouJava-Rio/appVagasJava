export class ConfigService {

     private urlService: string;
     private ur: string;

     constructor() {

         this.urlService = 'https://api.github.com/repos/';
     }

     getUrlService(): string {

         return this.urlService;
     }
 }
